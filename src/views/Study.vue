<template>
  <div id="study">
    <span style="font-size: 32px;color: white;margin-left: 50px;">遇见物联星空，邂逅最美的你</span>
    <table width="974" border="0" style="position: absolute;left: 19%;top: 10%;font-size: 20px">
      <tr style="color: lightskyblue">
        <td width="150" height="20" align="center" ><span style="cursor: pointer" @click="main">首页</span></td>
        <el-divider direction="vertical" />
        <td width="150" height="20" align="center" ><span style="cursor: pointer" @click="life">社团风采</span></td>
        <el-divider direction="vertical" />
        <td width="150" height="20" align="center" ><span style="cursor: pointer" @click="Honor">社团荣誉</span></td>
        <el-divider direction="vertical" />
        <td width="150" height="20" align="center" ><span style="cursor: pointer" @click="study">学习资料</span></td>
        <el-divider direction="vertical" />
        <td width="150" height="20" align="center"><span style="cursor: pointer" @click="contact">联系方式</span></td>
      </tr>
    </table>
    <table width="980" border="0" align="center" style="position: absolute;left: 20%;top: 15%;font-weight: bolder;color: aquamarine">
      <tr>
        <td><p>海量资源，应有尽有，加入我们，放飞你的科技梦</p></td>
      </tr>
      <tr>
        <td align="left"><table width="980" border="0">
          <tr>
            <td align="center"><img src="../assets/images/IMG_20180928_120822_STEREO.jpg" width="160" height="120" /></td>
            <td align="center"><img src="../assets/images/IMG_20180928_120748_STEREO.jpg" width="160" height="120" /></td>
            <td align="center"><img src="../assets/images/IMG_20180928_121812_STEREO.jpg" width="160" height="120" /></td>
            <td align="center"><img src="../assets/images/IMG_20180926_100226_STEREO.jpg" width="160" height="120" /></td>
          </tr>
          <tr>
            <td colspan="4" align="center" class="style5">各种书籍及硬件设备</td>
          </tr>
          <tr>
            <td align="center"><img src="../assets/images/微信图片_20180928161421.jpg" width="160" height="120" /></td>
            <td align="center"><img src="../assets/images/IMG_20180926_100301_STEREO.jpg" width="160" height="120" /></td>
            <td align="center"><img src="../assets/images/IMG_20180926_093042_STEREO.jpg" width="160" height="120" /></td>
            <td align="center"><img src="../assets/images/IMG_20180928_121848_STEREO.jpg" width="160" height="120" /></td>
          </tr>
          <tr>
            <td align="center" >各种开发板</td>
            <td align="center" >传感器</td>
            <td align="center" >3D打印机</td>
            <td align="center" >软件杯获奖作品智能路灯</td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td align="right" ><table width="980" border="0">
          <tr>
            <td width="225" align="center"><img src="../assets/images/jie1.jpg" width="160" height="96" /></td>
            <td width="224" align="center"><img src="../assets/images/jie2.jpg" width="160" height="127" /></td>
            <td width="221" align="center"><img src="../assets/images/jie3.jpg" width="160" height="117" /></td>
            <td width="292" align="center"><img src="../assets/images/jie4.jpg" width="160" height="114" /></td>
          </tr>
          <tr>
            <td colspan="4" align="center" >各种视频教学</td>
          </tr>
          <tr>
            <td align="center"><img src="../assets/images/IMG_20180928_121903_STEREO.jpg" width="160" height="120" /></td>
            <td align="center"><img src="../assets/images/IMG_20180928_120806_STEREO.jpg" width="160" height="120" /></td>
            <td align="center"><img src="../assets/images/hao.jpg" width="160" height="120" /></td>
            <td align="center"><img src="../assets/images/iot.jpg" width="160" height="119" /></td>
          </tr>
          <tr>
            <td align="center" >获奖作品智能药箱</td>
            <td align="center" >各种焊接设备</td>
            <td align="center" >学习新设备</td>
            <td align="center" >社团组织比赛</td>
          </tr>
        </table>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span >&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      </tr>
    </table>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Study",
  methods:{
    main(){
      router.push("main")
    },
    life() {
      router.push("life")
    },
    honor() {
      router.push("honor")
    },
    study() {
      router.push("study")
    },
    contact() {
      router.push("contact")
    }
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#study{
  width: 100%;
  height: 100%;
  position: fixed;
  background: url("../assets/images/beijing1.png");
  background-size: 100% 100%;
}
</style>
<style scoped>

</style>