<template>
  <div id="app">
    <header>
      
      <transition name="left">
      <div v-if="drawerFlg" class="drawer-menu-wrapper">
        <div class="drawer-menu">
          <ul class="drawer-contents">
            <li><router-link to="/profile"
            >Profile</router-link></li>
            <li><router-link to="/language">Languages</router-link></li>
            <li><router-link to="/work">Works</router-link></li>
          </ul>
        </div>
      </div>
    </transition>
    <div class="title-wrapper">
      <div v-bind:class="{selected: isActive}" @click="openDrawerMenu" @mouseover="mouseOverAction" @mouseleave="mouseLeaveAction" >
      <img :src="require(`@/assets/images/list.png`)" alt="alt" width="50px" height="50px" />
      </div>
      <h2><router-link to="/">My Portfolio</router-link></h2>
      
        
      
    </div>
    </header>
    <router-view/>
  </div>
</template>
  
<script>
import 'normalize.css'
export default {
  name: "App",
  data() {
    return {
      drawerFlg: false,
      isActive: false,
    }
  },
  methods: {
    openDrawerMenu(){
      this.drawerFlg = !this.drawerFlg
    },
    mouseOverAction (){
      this.isActive = true;
    },
    mouseLeaveAction(){
      this.isActive = false;
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

header {
  position:sticky;
  top:0;
  background: #ffffff;
  margin-bottom: 10px;
  border: 1px solid #666666;
  z-index: 9;
}

.title-wrapper {
  height: 100px;
  display: flex;
  justify-content: center;
}

h2 {
  font-size: 40px;
}

img {
  margin: 40px;
}

a {
  font-weight: bold;
  text-decoration: none;
  font-size: 25px;
  color: #666666;
}

.selected {
  transform: translateY(-6px);
  transition-duration: 0.5s;
}

.left-enter-active, .left-leave-active {
  transform: translate(0px, 0px);
  transition: transform 500ms cubic-bezier(0.360, 0.100, 0.160, 1.000) 0ms;
}
.left-enter, .left-leave-to {
  transform: translateX(-100vw) translateX(0px);
}
.drawer-menu-wrapper {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 200px;
  border-right: 2px solid #666666;
  height: 100vh;
  background-color: white;
  justify-content: center;
}
.drawer-menu {
  text-align: left;
  margin: auto;
}
.drawer-contents {
  list-style: none;
}
</style>
