<!-- 微信导航栏 -->
<template>
    <div>
        <div class="bottom">
            <div class="bot_1">
                <router-link 
                    to="/top1"
                    @click.native="bot1Active">
                    <img :src="top1Url" alt="微信" />                  
                </router-link>
                <!-- <router-link to="/top1" active="false">
                <img src="./static/images/png/wx.png" alt="微信" />                   
                </router-link> -->
            </div>
        
            <div class="bot_2">
                <router-link 
                    to="/top2"
                    @click.native="bot2Active">
                <img :src="top2Url" alt="通讯录" />
                </router-link>
            </div>
            <div class="bot_3">
                <router-link 
                    to="/top3"
                    @click.native="bot3Active">
                <!-- :src 作为变量获取不到路径需要先import -->
                <!-- <img src="./static/images/png/discover.png" alt="发现" /> -->
                <img :src="top3Url" alt="发现" />
                </router-link>
            </div>
            <div class="bot_4">
                <router-link 
                    to="/top4"
                    @click.native="bot4Active">
                <img :src="top4Url" alt="我" />
                </router-link>
            </div>
        </div>
    <!-- <div style=clear:both></div> -->
  </div>
</template>

<script>
import wx from '../../../static/images/png/wx.png'
import wx_clk from '../../../static/images/png/wx_click.png'
import ads from '../../../static/images/png/address.png'
import ads_clk from '../../../static/images/png/address_click.png'
import dsv from '../../../static/images/png/discover.png'
import dsv_clk from '../../../static/images/png/discover_click.png'
import mine from '../../../static/images/png/mine.png'
import mine_clk from '../../../static/images/png/mine_click.png'

// var bot1 = document.getElementsByClassName('bot_1');
//  var top1Url="./static/images/png/mine1.png"
export default {
  // name: 'app',
  components: {

  },

  data() {
   return{
     top1Url: wx,
     top2Url: ads,
     top3Url: dsv,
     top4Url: mine
   }
    
  },

  methods: {
    bot1Active() {
      this.top4Url = mine
      this.top3Url = dsv
      this.top2Url = ads
      console.log("点击bot1")
      this.top1Url = wx_clk
    },
    bot2Active() {
      this.top4Url = mine
      this.top3Url = dsv
      this.top1Url = wx
      console.log("点击bot2")
      this.top2Url = ads_clk
    },
    bot3Active() {
      this.top4Url = mine
      this.top2Url = ads
      this.top1Url = wx
      console.log("点击bot3")
      this.top3Url = dsv_clk
    },
    bot4Active() {
      this.top3Url = dsv
      this.top2Url = ads
      this.top1Url = wx
      console.log("点击bot2")
      this.top4Url = mine_clk
    }
  }
}
</script>

<style>
/* *{
  margin:0;padding:0;
} */
.top {
  width: 100%;
  height: calc(100vh - 60px);
}
.bottom {
  position: absolute;
  left: 0px;
  bottom: 0px;
  right: 0px;
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border-top: solid 1px;
}
.bot_1 :active {
  background-color: yellowgreen;
}
.bot_1 {
  /* position: relative; */
  display: inline-block;
  /* float: left; */
  width: 25%;
}
.bot_1 img {
  width: 40px;
  height: 40px;
}
.bot_2 {
  /* position: relative; */
  display: inline-block;
  /* float: left; */
  width: 25%;
}
.bot_2 img {
  width: 40px;
  height: 40px;
}
.bot_3 {
  /* position: relative; */
  display: inline-block;
  /* float: left; */
  width: 25%;
}
.bot_3 img {
  width: 40px;
  height: 40px;
}
.bot_4 {
  /* position: relative; */
  display: inline-block;
  /* float: left; */
  width: 25%;
}
.bot_4 img {
  width: 40px;
  height: 40px;
}
html,body,#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
