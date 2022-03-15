<template>
  <div id="nav" class="px-16 py-6 md:col-span-2 bg-gray-full">
    <router-link class="flex justify-center" to="/">Home</router-link>
  <router-view/>
  </div>
</template>

<script>
// import '../../assets/tailwind.css'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
