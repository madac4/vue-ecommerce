<template>
  <div class="products" id="products">
    <div class="container">
      <sectionTitle title="Our Products"></sectionTitle>

      <div class="products_body">
        <div class="products_row">
          <productCard></productCard>
          <productCard></productCard>
          <productCard></productCard>
          <productCard></productCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product"
};
</script>

<style scoped lang="scss">
.products {
  padding: 100px 0;
}
.products_title{
  h2{
    margin-bottom: 50px;
  }
}
.products_body {
  .products_row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
