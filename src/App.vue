<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user/vasya">Go to Vasya</router-link> |
      <router-link to="/user/sergey">Go to Sergey</router-link>
    </div>
    <router-view />
  </div>
</template>
