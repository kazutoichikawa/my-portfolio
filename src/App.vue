<template>
  <div id="app">
    <header>
      <h2>My Portfolio</h2>
      <ul class="contents">
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/language">Languages</router-link></li>
        <li><router-link to="/work">Works</router-link></li>
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

.contents {
  margin: 20px 100px;
  display: flex;
  justify-content: space-between;
  list-style: none;
}

h2 {
  font-size: 40px;
}

a {
  font-weight: bold;
  text-decoration: none;
  font-size: 25px;
}
</style>
