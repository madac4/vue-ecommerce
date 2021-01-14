<template>
  <div class="overview">
    <div class="container">
      <h3>Basic CRUD in Firebase and Vue</h3>

      <div class="product_test">
        <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
        <input type="text" placeholder="Product Price" v-model="product.price" class="form-control">
        <button class="btn btn-success" @click="saveData">Save Data</button>
      </div>

      <hr>

      <h2>Product List</h2>

        <div class="table-responsive">
        <table class="table">
                <thead>
                    <tr>
                        <th>Nr</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Modify</th>
                    </tr>
                </thead>

                <tbody> 
                    <tr v-for="(product, index) in products" :key="index">
                        <td>{{index +1}}</td>
                        <td>{{product.data().name}}</td>
                        <td>{{product.data().price}}</td>
                        <td>
                            <button class="btn btn-primary">Edit</button>
                            <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
     
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .btn-primary{
        margin-right: 10px;
    }
    h3{
        margin-bottom: 30px;
    }
    .form-control{
        margin-bottom: 30px;
    }

    thead th{
        padding: 10px;
    }
    tbody td{
        padding: 10px;
    }
</style>

<script>
import { db } from '../firebase';
export default {
  name: "Products",
  props: {
      msg: String,
  },
  data(){
      return{
          products: [],
          product: {
            name: null,
            price: null,
          }
      }
  },
  methods: {

      loadOnce:() =>{
      location.reload();
    },
          deleteProduct(doc){

          if (confirm('Are you sure?')) {


              db.collection("products").doc(doc).delete().then(function() {
                    console.log("Product was successfully deleted!");
                }).catch(function(error) {
                    console.error("Error removing product: ", error);
                });


          }else{
              alert('hi')
          }
      },
      readData(){
            db.collection("products").get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {

            this.products.push(doc);


        });
      });
    },
    saveData(){
        if(this.product.name === null || this.product.price === null){
            alert("Completeaza Campurile")
        } else{
             db.collection("products").add(this.product)
        .then((docRef) =>{
            console.log("Document written with ID: ", docRef.id);
                this.loadOnce();
            
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

        this.product.name = "";
        this.product.price = "";
        }
    },
  },

  created(){
    this.readData();
  }
};

</script>
