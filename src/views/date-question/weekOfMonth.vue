<!-- 第几月的第几周打印 月份-第几周 若本月前七天不在全在第一周则这一周计入到上月第五周-->
<template>
    <div>
        <p>week of month!</p>
    </div>
</template>

<script>
export default {
    created() {
        this.getWeek("Sun Aug 31 2019 18:05:38 GMT+0800 (中国标准时间)")
    },

    methods: {
        getWeek(dateStr) {
            // Date.parse() 方法解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数，
            // dateStr = Date.parse(dateStr);
            // 转成 date 对象
            let tarDate = new Date(dateStr);
            let tarDay = tarDate.getDay() == 0 ? 7 : tarDate.getDay(); // 目标日期是周几 (1-7)
            console.log(tarDate.getDate())           
            // 第几周 
            let tarWeek = Math.ceil((tarDate.getDate()/7));
            console.log("tarWeek", tarWeek)
            // getMonth() 返回 （0-11）
            let tarMonth = tarDate.getMonth() + 1;
            // 不能 let tarDate7 = tarDate tarDate7改变后这个也会变
            let tarDate7 = new Date(dateStr);
            tarDate7.setDate(7);
            let tarDate7Day = tarDate7.getDay();    // 当月 7 号是周几 （0-6）
            if (tarDate7Day == 0) {
                tarWeek;
            } else {
                if (tarDate.getDate() > 7) {
                    console.log("> 7");
                    tarWeek -= 1;
                } else {
                    console.log("<= 7");
                    if (tarDate7Day < tarDay) {
                        tarMonth = tarDate.getMonth();
                        tarWeek = 5;
                    } else {
                        tarWeek -= 1;
                    }
                }
            }
            console.log(`${tarMonth}-${tarWeek}`);
        }
    }
}
</script>
