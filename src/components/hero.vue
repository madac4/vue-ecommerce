<template>
  <div class="hero">
    <div class="hero_body">
      <div class="container">
        <div class="hero_text">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum rerum ut soluta ducimus aliquid dolore voluptatem, exercitationem quas nihil repellat labore? Iusto veniam molestias nihil tempora in facilis quam consequuntur?</p>
        
          <a href="#products">Our Products</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero",
}
</script>

<style scoped lang="scss">
.hero_body{
  background: linear-gradient(rgba(0, 0, 0 , 0.7), rgba(0, 0, 0 , 0.7)), url("../assets/accesorii.jpg");
  width: 100%;
  height: 800px;
}

.hero_text{
  text-align: center;
  padding: 250px 0 0 0;
  h2{
    color: #f5f5f5;
    margin-bottom: 30px;
  }
  p{
    color: #f5f5f5;
    max-width: 650px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  a{
    color: #f5f5f5;
    border: 2px solid rgb(255, 255, 255);
    padding: .75em;
    transition: .3s;
    &:hover{
      background-color: #f5f5f5;
      color: #000000;
    }
  }
}
</style>