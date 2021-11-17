<template>
<!-- initial load anim -->
  <transition name="text-drop" appear>
<!-- don't need routes for this landing page, but could easily add a nav bar with links to dif 'pages' -->
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  
    <router-view/>
  </transition>
</template>

<style>
#app {
  background: url("./assets/new-background.jpg") no-repeat center fixed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-size: cover;
  color: #ffffff;
  height: 100vh;
  width: 100vw;
}
/* INITIAL TITLE LOAD ANIMATION */
.text-drop-enter-active {
    transition: opacity 3s ease;
}

.text-drop-enter-from {
    opacity: 0;
}
</style>
