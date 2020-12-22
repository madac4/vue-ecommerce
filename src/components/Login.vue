<template>
  <div class="login">
    <div class="modal fade" id="login" data-keyboard="false" tabindex="-1" aria-labelledby="loginLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

          <div class="modal-body">
            <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Signup</a>
                </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                <h5 class="text-center">Login Please</h5>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" v-model="email" class="shadow-none form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" v-model="password" @keyup.enter="login" class="shadow-none form-control" id="exampleInputPassword1" placeholder="Password">
                  </div>

                  <div class="form-group">
                    <button class="btn btn-purp shadow-none" @click="login">Login</button>
                  </div>
              </div>

              <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                            
                    <h5 class="text-center">Create New Account</h5>
                             
                  <div class="form-group">
                      <label for="name">Your name</label>
                      <input type="text" v-model="name" class="shadow-none form-control" id="name" placeholder="Your name">
                  </div>

                  <div class="form-group">
                      <label for="email">Email address</label>
                      <input type="email"  v-model="email" class="shadow-none form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                  </div>
                  <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" v-model="password" class="shadow-none form-control" id="password" placeholder="Password">
                  </div>

                  <div class="form-group">
                      <button class="btn btn-purp shadow-none" @click="register">Signup</button>
                  </div>


              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {fb}  from "../firebase";
import $  from "jquery";

export default {
  name: "Login",
  date(){
    return{
      name: null,
      email: null,
      password: null,
    }
  },
  methods: {
    register(){
      fb.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          $('#login').modal('hide');
          this.$router.replace("admin", user);
        })
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        if (errorCode == 'auth/weak-password') {
          alert('Parola este prea slaba.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    },

    login(){
      fb.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          $('#login').modal('hide');
          this.$router.replace('admin');
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          if(errorCode == "auth/wrong-password"){
            alert("Parola Gresita!");
          } else{
            alert(errorMessage);
          }
        });
    },
  }
};
</script>



<style lang="scss" scoped>
  input[type="text"]:focus{
    border-color: #6543c2;
  }
  input[type="email"]:focus{
    border-color: #6543c2;
  }
  input[type="password"]:focus{
    border-color: #6543c2;
  }
</style>
