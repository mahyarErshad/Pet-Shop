import { createServer, Model } from "miragejs";
import mockProducts from "./mockProduct";
import mockCategories from "./mockCategory";
import mockUsers from "./mockUser";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      product: Model,
      category: Model,
      user: Model,
    },

    seeds(server) {
      mockProducts.forEach((product) => {
        server.create("product", {
          title: product.title,
          id: product.id,
          description: product.description,
          brand: product.brand,
          category: product.category,
          quantity: product.quantity,
          image: product.image,
          breed: product.breed,
          country: product.country,
          weight: product.weight,
          price: product.price,
        });
      });
      mockCategories.forEach((category) => {
        server.create("category", { name: category });
      });
      mockUsers.forEach((user) => {
        server.create("user", {
          username: user.username,
          email: user.email,
          password: user.password,
          cart: user.cart,
        });
      });
    },

    routes() {
      this.namespace = "/api";

      this.get("/products", (schema) => {
        return schema.products.all();
      });

      this.get("/products/single/:id", (schema, request) => {
        let id = request.params.id;
        return schema.products.find(id);
      });

      this.get("/products/:categoryName", (schema, request) => {
        let categoryName = request.params.categoryName;
        return schema.products.where({ category: categoryName });
      });

      this.get("/categories", (schema) => {
        return schema.categories.all();
      });

      this.get("/users/:username", (schema, request) => {
        let userName = request.params.username;
        return schema.users.find(userName);
      });

      this.post("/users", (schema, request) => {
        let user = JSON.parse(request.requestBody);
        return schema.users.create(user);
      });
    },
  });

  return server;
}
