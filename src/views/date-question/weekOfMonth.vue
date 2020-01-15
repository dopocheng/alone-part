<template>
    <div>
        <p>week of month!</p>
    </div>
</template>

<script>
export default {
    created() {
        this.getWeek("Sun Sep 30 2016 18:05:38 GMT+0800 (中国标准时间)")
    },
    methods: {
        getWeek(dateStr) {
            // Date.parse() 方法解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数，
            dateStr = Date.parse(dateStr);
            // 转成 date 对象
            let tarDate = new Date(dateStr)
            console.log(tarDate.getDate())
            // 几号
            // let dayNum = tarDate.getDate();
            let tarWeek = Math.ceil((tarDate.getDate()/7));
            let tarMonth = tarDate.getMonth() + 1;
            // 目标日期1号所在月份 setDate() 只修改天 其他照搬 没有就用你new Date() 的年月
            // let tarDate1 = tarDate.setDate(tarDate.getDate() - (tarDate.getDate() - 1));
            // 不能 let tarDate1 = tarDate tarDate1改变后这个也会变
            let tarDate1 = new Date(dateStr);
            tarDate1.setDate(tarDate1.getDate() - (tarDate1.getDate() - 1));
            console.log(new Date(tarDate1));
            let tarDate1Moth = new Date(tarDate1).getMonth() + 1;
            if (tarDate.getDate() > 7) {
                console.log("> 7")
                // if ((tarMonth == tarDate1Moth) && (new Date(tarDate1).getDay() == 1 )) {
                if (new Date(tarDate1).getDay() == 1 ) {
                   tarWeek;
                } else {
                    tarWeek -= 1;
                }
            } else {
                if (new Date(tarDate1).getDay() == 1 ) {
                    tarWeek;
                } else {
                    console.log("+=")
                    tarMonth = tarDate.getMonth();
                    tarWeek = 5;
                }
            }
            console.log(`${tarMonth}-${tarWeek}`);







        //     if  (dateStr.getDate() < 7) {

        //     // 目标日期所在周的周一
        //     let whatDay =  dateStr.getDay();
        //     console.log(" whatDay", whatDay)
        //     let currMon;
        //     if (whatDay == 0) {
        //         console.log("周天");
        //         currMon = dateStr.setDate(dateStr.getDate() - 6);
        //     } else {
        //         currMon = dateStr.setDate(dateStr.getDate() - (whatDay - 1));
        //         console.log("currMon:",new Date(currMon));
        //     }
        //     // 目标日期的所在周周一的月份
        //     let tarMonMoth = currMon.getMonth() + 1;
        //     // dateStr 的月份字段，使用本地时间。getMonth 返回值是 0（一月） 到 11（十二月） 之间的一个整数。
        //     let month = dateStr.getMonth() + 1;
        //     if (tarMonMoth == month) {
        //         // 计算日期为第几周
        //         // dateStr 所指的月份中的某一天，使用本地时间。getDate 一个月第几天，返回值是 1 ~ 31 之间的一个整数。            
        //         let week = Math.ceil(dateStr.getDate()/7);
        //         console.log(`${month}-${week}`);
        //     } else {
        //         let flag = true;
        //         let week = 5;
        //         let month = dateStr.getMonth();
        //     }
        //     // console.log("whatDay:" , whatDay, "currMon:", currMon);
        //     // 判断这个月前7天是周几，如果不是周一，则计入上个月
        //     // if (dateStr.getDay() !== 1) {
        //     //     week = 5;
        //     //     month =dateStr.getMonth();
        //     // }
        // } else {
        //     let month = dateStr.getMonth() + 1;  
        //     if (falg) {
        //     let week = Math.ceil(dateStr.getDate()/7)-1;
        //     let flag = false;
        //     }  else {
        //         let week = Math.ceil(dateStr.getDate()/7)
        //     }    

        // } 

        
        
        }
    }
}
</script>
