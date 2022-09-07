<template>
  <div id="background">
    <span @click="main" class="button" style="position:relative;left: 27%;top:280px;font-size: 70px;background: linear-gradient(to bottom,blueviolet,deepskyblue,antiquewhite);-webkit-text-fill-color: transparent;-webkit-background-clip: text;font-weight: bold;">欢迎加入物联星空</span>
  </div>
</template>
<style>
*{
  margin: 0;
  padding: 0;
}
#background{
  width: 100%;
  height: 100%;
  position: fixed;
  background: url("../assets/images/beijing2.png");
  background-size: 100% 100%;
}
.button {
  flex: 1 1 auto;
  margin: 10px;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
}
.button:after {
  position: absolute;
  transition: 0.3s;
  content: "";
  width: 0;
  left: 50%;
  bottom: 0;
  height: 3px;
  background: #f7f7f7;
}
.button:hover {
  cursor: pointer;
}
.button:hover:after {
  width: 100%;
  left: 0;
}
</style>
<script>
import router from "@/router";

export default {
  name: "Home",
  methods:{
    main(){
      router.push("main")
    }
  }
}
</script>

<style scoped>

</style>