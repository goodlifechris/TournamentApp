<template>
  <v-app>
    <Home />
  </v-app>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",
  components: { Home },
  data: () => ({
    //
  })
};
</script>

<style scoped>
h4 {
  color: teal;
}
</style>
