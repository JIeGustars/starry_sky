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
    <div style="position: relative;top:15%;font-size: 30px;font-weight: bolder;color: cyan ">
      <center><span style="font-size: 60px">社团联系方式</span></center><br>
      <center>
        <table>
          <tr>
            <td>QQ群号</td>
            <td><span style="margin-left: 300px">891561649</span></td>
          </tr><br/>
          <tr>
            <td>QQ群号</td>
            <td><img src="../assets/images/二维码.png" style="margin-left: 260px"></td>
          </tr><br/>
          <tr>
            <td>社团地址</td>
            <td><span style="margin-left: 300px">综合楼401</span></td>
          </tr>
        </table>
      </center>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "contact",
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