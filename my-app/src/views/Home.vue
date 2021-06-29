<template>
  <div class="home">
    <header>
      <nav>
        <div class="li">
          <h3>Maintenances Informatique</h3>
          <div class="links">
            <div class="link">
              <a href="#">Referencement de votre site web</a>
              <p>Avoir une bonne referencement au niveau des moteur de recherche ex: <span>Google</span></p>
            </div>
            <div class="link">
              <a href="#">Création de site web</a>
              <p>Créer votre business en ligne pour faire connaitre vos services ou activites partous dans le monde ex: <span>Blog</span>, <span>Site Vitrine</span>, <span>E-commerce</span>, <span>...</span></p>
            </div>
          </div>
        </div>
      </nav>
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
    background-color: #888;
    width: 100%;
  }
  .li {
    display: flex;
    justify-content: space-evenly;
  }
  h3 {
    width: 350px;
    background-color: red;
  }
  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .link {
    display: flex;
    flex-direction: column;
    background-color: green;
    text-align: left;
    height: 30px;
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