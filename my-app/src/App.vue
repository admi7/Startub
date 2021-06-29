<template>
  <div id="nav">
    <strong>Logo</strong>
    <ul>
      <li><a><router-link to="/">Home</router-link></a></li>
      <li><a><router-link to="/about">About</router-link></a></li>
      <li><a><router-link to="/service">Service</router-link></a></li>
    </ul>
    <div class="contain-btn">
      <button class="btn btn-shop">Boutique</button>
      <button class="btn btn-contact"><router-link to="/contact">Contact</router-link></button>
    </div>
  </div>
  <router-view />
</template>

<style lang="css">
#nav {
  padding: 7px;
  display: flex;
  align-items: center; 
  justify-content: space-around;
}
ul {
  display: flex;
}
li {
  margin: 5px;
  list-style-type: none;
}
li a {
  text-decoration-line: none;
}
a {
  color: green;
}
</style>