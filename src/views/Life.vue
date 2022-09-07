<template>
<div id="life">
  <span style="font-size: 32px;color: white;margin-left: 50px;">遇见物联星空，邂逅最美的你</span>
  <table width="974" border="0" style="position: absolute;left: 19%;top: 10%;font-size: 20px">
    <tr style="color: lightskyblue">
      <td width="150" height="20" align="center" ><span style="cursor: pointer" @click="main">首页</span></td>
      <el-divider direction="vertical" />
      <td width="150" height="20" align="center" ><span style="cursor: pointer" @click="life">社团风采</span></td>
      <el-divider direction="vertical" />
      <td width="150" height="20" align="center" ><span style="cursor: pointer" @click="honor">社团荣誉</span></td>
      <el-divider direction="vertical" />
      <td width="150" height="20" align="center" ><span style="cursor: pointer" @click="study">学习资料</span></td>
      <el-divider direction="vertical" />
      <td width="150" height="20" align="center" ><span style="cursor: pointer" @click="contact">联系方式</span></td>
    </tr>
  </table>
  <div style="position: absolute;top: 17%;left: 20%;color: aquamarine;font-weight: bolder">
    <table width="980" height="602" border="0">
      <tr>
        <td ><div align="center"><img src="../assets/images/IMG_20180926_093042_STEREO.jpg" width="160" height="120" align="middle" /></div></td>
        <td ><div align="center"><img src="../assets/images/IMG_20180926_093048_STEREO.jpg" width="160" height="120" /></div></td>
        <td ><div align="center"><img src="../assets/images/IMG_20180926_100155_STEREO.jpg" width="160" height="120" /></div></td>
      </tr>
      <tr>
        <td align="center">3D打印机</td>
        <td align="center">3D打印机mini</td>
        <td align="center">社团图书一角</td>
      </tr>
      <tr>
        <td align="center" ><img src="../assets/images/IMG_20180926_093057_STEREO.jpg" width="160" height="120" /></td>
        <td align="center" ><img src="../assets/images/IMG_20180926_093126_STEREO.jpg" width="160" height="120" /></td>
        <td align="center" ><img src="../assets/images/打印作品.jpg" width="160" height="120" /></td>
      </tr>
      <tr>
        <td align="center" >第七届中国软件杯二等奖</td>
        <td align="center" >第六届中国软件杯一等奖</td>
        <td align="center" >第五届中国软件杯三等奖</td>
      </tr>
      <tr>
        <td align="center" ><img src="../assets/images/IMG_20180926_164028.jpg" width="160" height="120" /></td>
        <td align="center" ><img src="../assets/images/IMG_20180926_163909.jpg" width="120" height="160" /></td>
        <td align="center"><img src="../assets/images/IMG_20180926_100141_STEREO.jpg" width="160" height="120" /></td>
      </tr>
      <tr>
        <td colspan="3" align="center" >数不清的证书
          <div id="footer">
            <p>欢迎加入物联星空</p>
          </div>
        </td>
      </tr>
    </table>
  </div>
</div>
</template>
<style>
*{
  margin: 0;
  padding: 0;
}
#life{
  width: 100%;
  height: 100%;
  position: fixed;
  background: url("../assets/images/beijing1.png");
  background-size: 100% 100%;
}
</style>
<script>
import router from "@/router";

export default {
  name: "Life",
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

<style scoped>

</style>