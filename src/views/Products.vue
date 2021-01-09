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

      <table border="1">
          <thead>
              <tr>
                  <th>Nr</th>
                  <th>Name</th>
                  <th>Price</th>
              </tr>
          </thead>

          <tbody> 
              <tr v-for="(product, index) in products" :key="index">
                  <td>{{index +1}}</td>
                  <td>{{product.name}}</td>
                  <td>{{product.price}}</td>
              </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
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
import { db} from '../firebase';
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
      readData(){
            db.collection("products").get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {

            this.products.push(doc.data());


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
