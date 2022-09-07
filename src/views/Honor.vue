<template>
  <div id="honor">
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
    <table align="center" style="position: absolute;left: 20%;top: 20%;font-weight: bolder;color: aquamarine">
      <tr>
        <td align="center"><img src="../assets/images/IMG_20180926_093126_STEREO.jpg" width="160" height="120" /></td>
        <td align="center"><img src="../assets/images/IMG_20180926_093057_STEREO.jpg" width="160" height="120" /></td>
        <td align="center"><img src="../assets/images/IMG_20180926_163958_HHT.jpg" width="160" height="120" /></td>
        <td align="center"><img src="../assets/images/guo.jpg" width="160" height="110" /></td>
      </tr>
      <tr>
        <td align="center" >第六届软件杯一等奖</td>
        <td align="center" >第七届软件杯二等奖</td>
        <td align="center" >第五届软件杯三等奖</td>
        <td align="center" >2016国赛三等奖</td>
      </tr>
      <tr>
        <td align="center"><img src="../assets/images/IMG_20180926_100141_STEREO.jpg" width="160" height="120" /></td>
        <td align="center"><img src="../assets/images/IMG_20180926_164028.jpg" width="160" height="120" /></td>
        <td align="center"><img src="../assets/images/百佳.jpg" width="160" height="132" /></td>
        <td align="center"><img src="../assets/images/韦顺利6.jpg" width="160" height="102" /></td>
      </tr>
      <tr>
        <td align="center" >物联网技能大赛二等奖</td>
        <td align="center" >社员数不清的证书</td>
        <td align="center" >百佳社团</td>
        <td align="center" >优秀干部</td>
      </tr>
      <tr>
        <td align="center"><table width="245" border="0">
          <tr>
            <td align="center"><img src="../assets/images/IMG_20180928_120952_STEREO.jpg" width="160" height="120" /></td>
          </tr>
          <tr>
            <td align="center" >院长指导社团工作</td>
          </tr>
        </table></td>
        <td align="center"><table width="245" border="0">
          <tr>
            <td align="center"><img src="../assets/images/IMG_20180928_121003_STEREO.jpg" width="160" height="120" /></td>
          </tr>
          <tr>
            <td align="center" >中国工程院院士指导工作</td>
          </tr>
        </table></td>
        <td align="center"><table width="245" border="0">
          <tr>
            <td align="center"><img src="../assets/images/成果2.jpg" width="160" height="120" /></td>
          </tr>
          <tr>
            <td align="center" >代表学校参加省赛</td>
          </tr>
        </table></td>
        <td align="center"><table width="245" border="0">
          <tr>
            <td align="center"><img src="../assets/images/院领导.png" width="160" height="120" /></td>
          </tr>
          <tr>
            <td align="center" >向各领导展示作品</td>
          </tr>
        </table></td>
      </tr>
    </table>
  </div>
</template>
<style>
*{
  margin: 0;
  padding: 0;
}
#honor{
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
  name: "honor",
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