    <!-- 目标日期是所在年的第几周 -->
import weekOfMonthVue from './weekOfMonth.vue';
<template>
    <div>week of the year!!!</div>
</template>

<script>
export default {
    created() {
        this.weekOfYear("Mon Jun 23 2019 15:17:19 GMT+0800 (中国标准时间)");
    },
    methods: {
        weekOfYear(targetDate) {
            let week;

            let tarDate7 = new Date(targetDate); // 目标日标日期所在月 7 号
            tarDate7.setDate(7);
            let tar7Day = tarDate7.getDay() == 0 ? 7 : tarDate7.getDay(); // 7 号是周几
            
            targetDate = new Date(targetDate); 
            let tarDate =targetDate.getDate(); // 目标天数 （1-31）
            
            let tarDateDay = targetDate.getDay() == 0 ? 7 : targetDate.getDay(); // 目标日期是周几
            if (tar7Day == 7) {
                console.log("Math")
                week = Math.ceil(tarDate/7);
            } else {
                if (tarDate > 14 && tarDate <= 28) {
                    console.log("tarDate >= 14");
                    // week = Math.ceil(tarDate/7); // 7号在周天向上取整
                    if (tarDate > 21) {
                        // week;
                        if (tarDateDay > tar7Day) {
                            // console.log(tarDateDay,tar7Day)
                            week = 4;
                        } else {
                            week = 5;
                        }
                    } else {
                        if (tarDateDay > tar7Day) {
                            week = 3;
                        } else {
                            week = 4;
                        }
                    }
                } else if (tarDate <= 14) {
                    console.log("tarDate < 14");
                    if (tarDate > 7) {
                        if (tarDateDay > tar7Day) {
                            week = 2;
                        } else {
                            week = 3;
                        }
                    } else {
                        if (tarDateDay > tar7Day) {
                            week = 1;
                        } else {
                            week = 2;
                        }
                    }
                } else {
                    console.log(">28");
                    week = 5;
                }
                    
            }
            console.log("week:" + week);
        }
    }
}
</script>

