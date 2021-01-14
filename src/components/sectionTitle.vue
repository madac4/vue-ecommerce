<template>
  <div class="products_title">
    <h2>{{ title }}</h2>
  </div>
</template>

<style scoped lang="scss">
  h2{
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 50px;
  }
</style>

<script>
export default {
  name: 'secitonTitle',
  props:['title']
}
</script>