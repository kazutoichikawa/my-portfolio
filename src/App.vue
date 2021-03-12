<template>
  <div id="app">
    <header>
      <h2>My Portfolio</h2>
      <ul>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/language">Languages</router-link></li>
        <li><router-link to="/work">Work</router-link></li>
      </ul>
    </header>
    <router-view/>
  </div>
</template>
  
<script>


</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
