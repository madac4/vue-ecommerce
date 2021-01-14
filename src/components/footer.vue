<template>
  <div class="footer_body">
    <div class="container">
      <div class="logo">
        <router-link to="/home"
          ><h1><span>Title</span>Logo</h1></router-link
        >
      </div>

      <div class="row">
        <div class="footer_text col-md-4">
          <p class="footer_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            commodi neque reprehenderit? Sunt iure quibusdam ipsa veniam itaque
            impedit! Voluptate.
          </p>

          <p class="rights">OPO All Rights are reserved</p>
        </div>

        <div class="footer_list col-md-2 offset-md-2">
          <ul>
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contacte</a></li>
            <li><a href="#">Catalog</a></li>
          </ul>
        </div>

        <div class="footer_list col-md-3 offset-md-1">
          <ul>
            <li class="active"><a href="#">Telefoane</a></li>
            <li><a href="#">Laptopuri</a></li>
            <li><a href="#">Huse</a></li>
            <li><a href="#">Sticle De Protectie</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer_body {
  padding: 50px 0;
  background-color: #d5d5d5;
}
.logo {
  h1 {
    font-size: 24px;
  }
}
.footer_text {
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  .footer_description {
    max-width: 350px;
  }
  .rights {
    font-size: 14px;
    color: #444444;
  }
}
.footer_list {
  ul {
    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
    li {
      margin-bottom: 10px;
      a {
        font-size: 18px;
        color: #000;
        transition: 0.3s;
        &:hover {
          color: #6543c2;
        }
      }
    }
  }
}
</style>
