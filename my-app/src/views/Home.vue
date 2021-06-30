<template>
  <div class="home">
    <header>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    
  },
};
</script>

<style lang="css">
  nav {
    width: 100%;
  }
  .open-li {
    width: 150px;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
  }
  .ul {
    display: flex;
    flex-direction: column;
    transition: .5s all ease;
  }
  .li {
    display: flex;
    background-color: #888;
    justify-content: space-evenly;
    height: 200px;
    overflow: hidden;
    transition: .5s all ease;
  }
  .open-li:hover .li {
    height: 200px;
    transition: .5s all ease;
  }
  h3 {
    width: 350px;
    display: flex;
    align-items: center;
  }
  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .link {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .link a {
    color: aqua;
    transition: .5s all ease;
  }
  .link a:hover {
    text-decoration-line: underline;
    transition: .5s all ease;
  }
  link p {
    font-size: 7px;
  }
</style>