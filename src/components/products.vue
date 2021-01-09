<template>
  <div class="products" id="products">
    <div class="container">
      <div class="products_title">
        <h2>Our Products</h2>
      </div>

      <div class="products_sort">
        <ul class="sort_list">
          <li class="active">
            <a href="#" data-filter="*" @click='filter'>All</a>
          </li>
          <li>
            <a href="#" data-filter=".phone" @click='filter'>Telefoane</a>
          </li>
          <li>
            <a href="#" data-filter=".case" @click='filter'>Huse</a>
          </li>
          <li>
            <a href="#" data-filter=".laptop" @click='filter'>Laptopuri</a>
          </li>
        </ul>
      </div>

      <div class="products_body">
        <div class="products_row"> 
          <a href="#">
            <div class="product_item case">
              <img src="../assets/case.png" alt="">

              <h6>Iphone 11 Pro Max Case</h6>
              <p>De La <span>49$</span></p>
              <small>Stock: <span>191</span></small>
            </div>
          </a>
            
          <a href="#">
            <div class="product_item laptop">
              <img src="../assets/macbook.jpg" alt="">

              <h6>Macbook Pro 15" 2020</h6>
              <p>De La <span>1200$</span></p>
              <small>Stock: <span>21</span></small>
            </div> 
          </a>
           
          <a href="#">
            <div class="product_item phone">  
              <img src="../assets/iphone.webp" alt="">

              <h6>Iphone 11 Pro Max 256GB</h6>
              <p>De La <span>800$</span></p>
              <small>Stock: <span>11</span></small>
            </div> 
          </a>
           
          
          <a href="#">
            <div class="product_item case">
              <img src="../assets/case2.jpg" alt="">

              <h6>Iphone 11 Case</h6>
              <p><span>49$</span></p>
              <small>Stock: <span>32</span></small>
            </div>
          </a>
          
          <a href="#">
            <div class="product_item laptop">
              <img src="../assets/macbook.jpg" alt="">

              <h6>Macbook Pro 15" 2020</h6>
              <p>De La <span>1200$</span></p>
              <small>Stock: <span>21</span></small>
            </div> 
          </a>

          <a href="#">
            <div class="product_item case">
              <img src="../assets/case.png" alt="">

              <h6>Iphone 11 Pro Max Case</h6>
              <p>De La <span>49$</span></p>
              <small>Stock: <span>191</span></small>
            </div>
          </a>
          
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "product",
}
</script>

<style scoped lang="scss">
.products{
  margin-top: 80px;
}
small{
  span{
    color: #1cb81c;
  }
}
.products_body {
    .products_row {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 50px;
        @media (max-width: 1200px) {
            justify-content: flex-start;
        }
        @media (max-width: 992px) {
            justify-content: space-between;
            padding: 0 50px;
        }
        @media (max-width: 768px) {
            padding: 0;
            justify-content: center;
        }
        .product_item {
            max-width: 260px;
            margin-bottom: 40px;
            margin-right: 15px;
            width: 100%;
            height: 370px;
            padding: 20px 20px;
            border: 2px solid #6a6a6a;
            border-radius: 5px;
            transition: .3s;
            &:hover{
              border-color: #000;
            }
            img{
              display: block;
              max-width: 220px;
              height: 200px;
              width: 100%;
              margin: 0 auto;
              margin-bottom: 10px;
            }
            @media (max-width: 1200px) {
                margin-right: 50px;
            }
            @media (max-width: 992px) {
              margin-right: 0;
            }
            @media (max-width: 768px) {
                margin-right: 30px;
            }
            @media (max-width: 480px) {
                margin-right: 0px;
            }
            h6 {
                margin: 10px 0;
            }
            p {
                span {
                    font-weight: 500;
                }
            }
        }
    }
}

</style>