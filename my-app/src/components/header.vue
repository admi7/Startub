<template>
  <div class="header">
    <h1>{{titre}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Header",
  components: {
    titre: 'Titre de Header'
  },
};
</script>
