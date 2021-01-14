<template>
  <div class="product_card">
    <a href="#"><h4>Iphone 11 Pro Max</h4></a>
    <div class="product_image">
      <img src="../assets/Iphone.png" alt="" />
    </div>

    <table class="table">
      <tbody>
        <tr>
          <td class="accent_spec">Color:</td>
          <td>Alba</td>
        </tr>
        <tr>
          <td class="accent_spec">Display Size:</td>
          <td>6.1"</td>
        </tr>
        <tr>
          <td class="accent_spec">Ram:</td>
          <td>4 GB</td>
        </tr>
      </tbody>
    </table>

    <h3>12 999 Lei<span>14 199 Lei</span></h3>
    <!--        <div class="cart">-->
    <!--          <router-link to="Cart"-->
    <!--            ><img src="../assets/Outline.svg" alt=""-->
    <!--          /></router-link>-->
    <!--        </div>-->
  </div>
</template>

<style lang="scss" scoped>
.product_card {
  min-height: 470px;
  background: #ffffff;
  border: 1px solid #bdc3c7;
  padding: 20px;
  position: relative;
  transition: 0.3s;
  @media (max-width: 480px) {
    max-width: 290px;
    margin: 0 auto;
  }
  &:hover {
    box-shadow: 0 0 30px rgba(48, 58, 82, 0.2);
    border: 1px solid transparent;
  }
  @media (max-width: 1200px) {
    min-height: 430px;
  }
  h4 {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 20px;
    color: #303a52;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
    }
  }
}
.product_image {
  display: block;
  width: 100%;
  max-height: 250px;
  margin-bottom: 30px;
  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }
}
table {
  td {
    border: none;
    padding: 0.5rem;
    &.accent_spec {
      color: #1c2aac;
    }
  }
}
h3 {
  font-weight: bold;
  font-size: 20px;
  color: #6543c2;
  position: relative;
  span {
    font-size: 14px;
    font-weight: normal;
    text-decoration-line: line-through;
    position: absolute;
    top: -10px;
  }
}
//.cart{
//  position: absolute;
//  bottom: 20px;
//  right: 20px;
//  opacity: .5;
//}
</style>

<script>
export default {
  name: "productCard"
};
</script>
