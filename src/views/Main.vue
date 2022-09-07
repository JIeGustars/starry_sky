<template>
<div id="main">
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
  <span style="color: greenyellow;font-size: 40px ;font-weight: bolder;position: absolute;left: 16%;top: 18%">社团介绍：</span>
  <span style="color: deepskyblue;font-size: 20px;position: absolute;left: 18%;top: 26%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;物联星空社团成立于2012年，社团定位于专业技能类与科学技术类社团。以学习科学技术、参加计算机学科方面技能
    <br/>大赛、锻炼学生的团队合作能力作为社团活动目标。社团每年都会组织学生负责对新生报到系统的升级和维护。今年新生
    <br/>报道期间，累计服务新生4300余人，历史累计服务新生一万多人，为每年的新生报到工作做出了突出贡献。
  </span>
  <div style="position: absolute;left:18%;top: 37%;font-size: 18px;color:lightskyblue;width: 100%;font-weight: bolder;">
    <img src="../assets/images/奖.png" width="360" height="240">
    <span style="position: absolute;top: 2%;">社团所获荣誉：</span>
    <span style="position: absolute;top: 2%;font-family: '楷体',serif;padding:4px 5px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      社团高标准、高要求。是学校五星级社团，也曾连续三年获得全国优
      <br/>秀社团称号。社团成立以来，累计参加国家级、省级、市级比赛十几项。无法一一列
      <br/>举，在这里简单列举近期几个：
      <br/>17年，参加第六届”中国软件杯“大学生软件设计大赛荣获一等奖。
      <br/>18年和19年，参加第7届和第8届“中国软件杯”大学生软件设计大赛并都荣获全国二等奖。
      <br/>20年和22年也分别获得软件杯三等奖，除此之外还有发明杯全国一等奖，<br/>物联网应用技术大赛一等奖等各种奖项</span>
    <div style="position: relative">
      <img src="../assets/images/作品.png" width="360" height="245">
      <span style="position: absolute;font-weight: bolder;font-family: '楷体',serif;padding:4px 5px;">16年8月，参加“赛佰特杯”全国大学生物联网创新应用设计大赛并荣获二等奖。
        <br>16年5月，社团成员代表山东省参加全国职业院校技能大赛高职组物联网技术应用比赛中获三等奖。
        <br>14年，荣获第六届全国优秀社团
        <br>学生科研作品多项：自动寻迹蔽障小车、WiFi遥控车、智能药箱、智能家居系统、新生报到<br>系统、智能水产系统等。</span>
    </div>
  </div>
</div>
</template>
<style>
*{
  margin: 0;
  padding: 0;
}
#main{
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
  name: "Main",
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