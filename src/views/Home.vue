<template>
  <div class="home">
    <Navbar></Navbar>
    <hero></hero>
    <product></product>
    <Footer></Footer>
    <login></login>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Login,
  }
};
</script>
