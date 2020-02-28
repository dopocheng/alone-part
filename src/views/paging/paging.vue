<!-- 中奖查询及查询条件 -->
<template>
    <div id="paging">
        <div class="winners">
            <ul>
                <li v-for="winner in winners" :key="winner.id">{{winner.name}}</li>
            </ul>
        </div>
        <div class="condition">每页显示
            <!-- 1.获取事件对象 ， 方法参数传递  $event -->
            <!-- 2.在标签上添加 ref = “name” ，表示获取当前元素节点(this.$refs.info.value) -->
            <select name="changeItems" @change="changeItems($event.target.value)">
                <option :value="3">3</option>
                <option :value="6">6</option>
                <option :value="9">9</option>
            </select>条
            <button v-on:click= "changePage(pageNumber -= 1)">上一页</button>第
            <button disabled="disabled">{{pageNumber}}</button>页
            <button v-on:click= "changePage(pageNumber += 1)">下一页</button>
            前往第
            <input name="inputPageNum" type="number" v-on:change="changePage($event.target.value)" v-model="value" onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )" min="0"/>页&nbsp;总共
            <button disabled="disabled">{{size}}</button>页
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            winners: [],         // 要展示的中奖人
            groups: new Array(), // 按条件分组后的元素集合
            pageNumber: 1,       // 页码   
            items: 3,            // 展示条数
            value: 1,            // input 值
            size: 1,            // 分组需要的空间大小
            // 后台数据
            data: [
                { id: 0, name: "张三1", age: 17 },
                { id: 1, name: "张三2", age: 18 },
                { id: 2, name: "张三3", age: 19 },
                { id: 3, name: "张三4", age: 20 },
                
            ]
        }
    },

    created: function () {
        // 此时才加载 data 数据
        this.winnerGroup();
    },

    methods:{
        // 改变展示条数
        changeItems: function(e) {
            console.log("changeItems" + e);
            // 必须要清空 groups 否则会带入上次的分组 （原因 push）
            this.groups = [];
            this.items = e;
            this.winnerGroup();          
        },
        // 设置、选择页数
        changePage(e) {
            console.log("changePage:" + e);
            this.pageNumber = e;
            // 选择、输入 pageNumber 值大于、小于 所需空间 size 将其置为 1
            if(this.pageNumber > this.size || this.pageNumber <= 0) {
                this.pageNumber = 1;  
            } 
            this.winners = this.groups[this.pageNumber-1].oneGroup;    
            // 前面页数改变后 input 框页数也要改变
            this.value=this.pageNumber; 
        },
        // 按展示条目分组默认 3 个一组
        winnerGroup() {
            console.log(this.items+"items")
            let winnerCount = this.data;
            let objList = new Object();
            if(winnerCount.length > 0) {
                this.size = winnerCount.length/this.items==0 ? winnerCount.length/this.items : Math.ceil((winnerCount.length/this.items));
                // 控制外层及内循环开始遍历的基数
                for (let i = 1; i <= this.size; i++) {
                    let tempArr = [];   // 分好的单个数组
                    let temp;           //  遍历次数
                    if (this.items * i > winnerCount.length) {
                        temp = winnerCount.length;
                    } else {
                        temp = this.items * i;
                    }
                    // 三个打包成一组
                    for (let j = this.items * (i - 1); j < temp; j++) {
                        tempArr.push(winnerCount[j]) ;
                    }
                    let newObj = new Object();
                    // newObj. oneGroup = JSON.stringify(tempArr);
                    newObj.oneGroup = tempArr;
                    this.groups.push(newObj);
                }
                console.log(this.groups)
                this.winners = this.groups[this.pageNumber-1].oneGroup;              
                // objList.data = this.groups;
            }
        }
    }
}
</script>

<style>
    /* 去掉上下箭头 */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }

    .condition{
        float: right;
    }

    input, select{
        /* 元素的任何内边距和边框都将包括在已设定的宽度和高度内 */
        box-sizing: border-box;
        text-align: center;
        padding: 0px;
        border: 1px solid rgb(169, 169, 169);
        height: 23px;
        width: 30px;
    }
</style>

