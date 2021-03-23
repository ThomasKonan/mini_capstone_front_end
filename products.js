/* global Vue, axios */
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      products: [],
      name: "",
      price: "",
      description: "",
      image_url: "",
    };
  },
  methods: {
    createProduct: function () {
      console.log('creating product..');
      axios.post("http://localhost:3000/api/products", {
        name: this.name,
        price: this.price,
        description: this.description,
        image_url: this.image_url,
      }).then(response => {
        console.log(response.data);
      }
    }
      

    makeWebRequest: function () {
      console.log("making web request...");
      axios.get("http://localhost:3000/api/products").then(response => {
        this.products = response.data;
        console.log(this.products);
      });
    }
  }
});