<template>
    <v-chart class="echarts" :options="covid" :auto-resize="true"/>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import "echarts/lib/component/title"
import "echarts/lib/component/legend"
import "echarts/lib/component/tooltip"
import axios from 'axios'
var timerShaft = [], confirmedCase = [], suspectedCase = []
export default {
    components: {
        'v-chart': ECharts
    },
    data () {
        
        /** 
         * covid 在异步方法或同步方法中处理否则-后半折线动画异常(return 里赋值会失去动画效果)
         * 1.axios 异步获取 created
         * 2.axios 同步获取 
         */
        this.test() // 异步方法中处理数据
        this.initCovid() // 同步方法中处理数据 (加载时间不稳定 2.5s - 1.5s 波动)
        return {  
            covid:{}
        }
    },
    beforeCreate(){
        // 可以 修改 let promisD =  await this.$options.methods.func()
        // console.log("beforeCreate",)  
    },
    /** 
     * 生命周期函数中处理 
     */
    // async created(){
    //     // 性能好于 beforeCreate (用时短 0.5s 左右) mounted (用时短 0.3s 左右)
    //     console.log("mounted",)
    //     let promisD =  await this.func()
    //     // console.log(promisD)
    //     let tempTitle = eval('(' + promisD.data + ')').component[0] // 为了取 title
    //     let tempData = tempTitle.trend // 目标数据
    //     console.log("mounted", tempData.updateDate)
    //     this.covid = {
    //         title: {// 标题
    //             // text: '新增确诊/疑似病例',
    //             text: tempTitle.title, 
    //             textStyle: {
    //                 fontWeight: "normal",
    //                 color: "green", // 标题颜色
    //                 fontSize: 14
    //                 },
    //             // left: '50px' 
    //         },
    //         legend: {// 图例
    //             textStyle: {
    //                 fontSize: 14
    //             },
    //             data: ['疑似病例','新增病例'],
    //             right:'right'
    //         },
    //         tooltip: {// 工具提示
    //             trigger: 'axis',
    //             axisPointer: {
    //                 type: 'cross'
    //             }
    //         },
    //         xAxis: {
    //             // type: 'category',
    //             data: tempData.updateDate, // 在x轴显示时间
    //             axisLabel: {    //横坐标字体颜色
    //                 show: true,
    //                 textStyle: {
    //                     color: "red"
    //                 }
    //             },
    //             axisLine: {
    //                 lineStyle: {
    //                     color: "red"
    //                 }
    //             }
    //         },
    //         yAxis: {
    //             type: 'value',
    //             axisLabel: {    //纵坐标字体颜色
    //                 show: true,
    //                 textStyle: {
    //                     color: "green"
    //                 }
    //             },
    //             axisLine: {
    //                 lineStyle: {
    //                     color: "green"
    //                 }
    //             }
    //         },
    //         series: [
    //             {// 一系列
    //                 type: 'line',
    //                 name: '新增病例',
    //                 color: 'blue',  // 折线颜色
    //                 smooth: true,
    //                 data: tempData.list[4].data
    //             },{// 一系列
    //                 type: 'line',
    //                 name: '疑似病例',
    //                 color: 'yellow',  // 折线颜色
    //                 smooth: true,
    //                 data: tempData.list[5].data
    //             }
    //         ],
    //         animationDuration: 3000  
    //     }
    // },

    methods: {
        async initCovid () {
            // 同 create
            console.log("代码同 create 方法")
        },
        test () {
            let self = this  
            axios.get("/fy/get").then((result) => {
                let res = result.data
                let tempTitle = eval('(' + res + ')').component[0]
                let tempData = tempTitle.trend
                console.log("****test*****", tempData)
                self.covid = {
                    title: {// 标题
                        // text: '新增确诊/疑似病例',
                        text: tempTitle.title, 
                        textStyle: {
                            fontWeight: "normal",
                            color: "green", // 标题颜色
                            fontSize: 14
                            },
                        // left: '50px' 
                    },
                    legend: {// 图例
                        textStyle: {
                            fontSize: 14
                        },
                        data: ['疑似病例','新增病例'],
                        right:'right'
                    },
                    tooltip: {// 工具提示
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    xAxis: {
                        // type: 'category',
                        data: tempData.updateDate, // 在x轴显示时间
                        axisLabel: {    //横坐标字体颜色
                            show: true,
                            textStyle: {
                                color: "red"
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: "red"
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {    //纵坐标字体颜色
                            show: true,
                            textStyle: {
                                color: "green"
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: "green"
                            }
                        }
                    },
                    series: [
                        {// 一系列
                            type: 'line',
                            name: '新增病例',
                            color: 'blue',  // 折线颜色
                            smooth: true,
                            data: tempData.list[4].data
                        },{// 一系列
                            type: 'line',
                            name: '疑似病例',
                            color: 'yellow',  // 折线颜色
                            smooth: true,
                            data: tempData.list[5].data
                        }
                    ],
                    animationDuration: 3000  
                }
            })
            
        },
        func () {   // axios 数据在不同场景下做不同的处理时(在对应的方法中取处理)或相同处理(返回数据直接在 then 中处理)
            return new Promise((resolve, reject) => {
                axios.get("/fy/get").then((res) => {
                    resolve(res)
                }).catch((error) => {
                    reject(error)
                })
            })
            // this.covid.xAxis.data = tempData.updateDate        
        },
        monthDay () {
            let  currentDate = new Date();// 当天日期
            let currentDay = currentDate.getDate();// 具体某一天
            let month, date, confirmed=0, suspected=0// 定义变量 月和天
            for (let i = 20; i >= 0; i-- ) {// 取14天包括当天
                let accordDate = currentDate.setDate(currentDay - i);// 符合条件的日期
                month = new Date(accordDate).getMonth() + 1
                date = new Date(accordDate).getDate()
                confirmed = confirmed + 100
                suspected = suspected + 500
                confirmedCase.push(confirmed)
                suspectedCase.push(suspected)
                timerShaft.push(month + '.' + date)   
            }
            // console.log('eee', timerShaft)
            //  console.log('case', confirmedCase)
        }
    }
}
</script> 
<style>
    #container{
        width: 100%;
        height: 100%;
    }
    .echarts {
        /* :auto-resize 自动大小默认是 false */
        /* width: auto;
        height: 50%; */
    }
</style>