<template>
  <div class="nav_menu">
    <div class="container">
      <div class="nav_body">
        <div class="logo">
          <router-link to="/home"><h1><span>Title</span>Logo</h1></router-link>
        </div>

        <div class="burger_menu" @click="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav class="navbar">
          <ul class="nav_list">
            <li class="nav_item current">
              <router-link to="/home" class="nav-link">Acasa</router-link>
            </li>

            <li class="nav_item">
              <router-link to="/contact"  class="nav-link">Contacte</router-link>
            </li>

            <li class="nav_item">
              <router-link to="/admin" class="nav-link">Profile</router-link>
            </li>

            <li class="nav_item dropdown">
              <router-link to="" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown">Catalog</router-link>

              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#products">Huse</a>
                <a class="dropdown-item" href="#">Telefoane</a>
                <a class="dropdown-item" href="#">Laptop</a>
                <a class="dropdown-item" href="#">Ochelari</a>
                <a class="dropdown-item" href="#">Periferice</a>
              </div>
            </li>

            <li class="nav_item">
              <a href="#" data-toggle="modal" data-target="#login" class="login_btn btn btn-outline-purp shadow-none">Login</a>
            </li>
          </ul>

        </nav>
      </div>
    </div>
    

  </div>
</template>

<script>
  

import $ from "jquery";
export default {
  name: "Navbar",
  props: {
    msg: String
  },
  methods: {
    burger(){
    // BURGER
      $('.burger_menu, .nav_list, .applecat').toggleClass('active');
      $('body').toggleClass('lock');
    // BURGER
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.burger_menu{
  display: none;
  position: absolute;
  top: 20px;
  right: 10px;
  width: 25px;
  height: 18px;
  cursor: pointer;
  z-index: 5;
  span{
    top: 8px;
    left: -5px;
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color: #000;
    transition: all .3s ease 0s;
    &:first-child{top: 0;}
    &:last-child{bottom: 0; top: auto;}
    }
  @media (max-width: 768px) {
    display: block;
    &.active{
      span{
        transform: translateX(-20px);
        background-color: transparent;
        &:first-child{transform: rotate(-45deg); top: 8px; background-color: #000;}
        &:last-child{transform: rotate(45deg); bottom: 8px;background-color: #000;}
      }
    }
  }
}
.nav_menu{
  padding: 10px 0;
  position: fixed;
  background-color: #f7f7f7;
  width: 100%;
  z-index: 3;
}
.nav_body{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo{
  position: relative;
  z-index: 10;
  h1{
    font-size: 24px;
  }
}
.navbar{
.nav_list{
  margin-bottom: 0;
    @media (max-width: 768px) {
    position: fixed;
    z-index: 4;
    width: 60%;
    height: 100%;
    top: 0;
    right: -60%;
    opacity: 0;
    background-color: #f7f7f7;
    padding: 100px 0 0 10px;
    transition: all .3s ease 0s;
    &.active{
      right: 0;
      opacity: 1;
    }
    .nav_item{
      display: block;
      margin-top: 40px;
      a{
        font-size: 24px;
        
      }
    }
  }
    @media (max-width: 480px) {
      width: 80%;
      right: -80%;
    }
}
  .nav-link{
    padding: 8px .6rem;
  }
  .login_btn{
    background-color: transparent;
    color: #000;
    @media (max-width: 992px) {
      font-size: 14px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
      width: 150px;
    }
    &:focus{
    background-color: transparent;
    color: #000;
    }
  }
}
.nav_item{
  display: inline-block;
  margin-left: 30px;
  @media (max-width: 992px) {
      margin-left: 20px;
    }
  &.current{
    font-weight: 500;
  }
  a{
    color: #000;
    font-size: 16px;
    transition: .3s;
    @media (max-width: 992px) {
      font-size: 14px;
    }
    &:hover{
      color: #6543c2;
    }
  }
}
</style>
