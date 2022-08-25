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
          amount: product.amount,
          balance: product.balance,
        });
      });
      mockCategories.forEach((category) => {
        server.create("category", { name: category });
      });
      mockUsers.forEach((user) => {
        server.create("user", {
          email: user.email,
          password: user.password,
          cart: user.cart,
        });
      });
    },

    routes() {
      this.namespace = "/api";

      this.get("/products/all", (schema) => {
        return schema.products.all();
      });
      this.get("/users/all", (schema) => {
        return schema.users.all();
      });

      this.get("/products/single/:id", (schema, request) => {
        let id = request.params.id;
        return schema.products.find(id);
      });

      this.get("/products/:categoryName", (schema, request) => {
        let categoryName = request.params.categoryName;
        return schema.products.where({ category: categoryName });
      });
      this.get("/breed/:params", (schema, request) => {
        let breed = request.params.params;
        return schema.products.where({ breed: breed });
      });
      this.get("/products/:params", (schema, request) => {
        let productCategory = request.params.params;
        return schema.products.where({ category: productCategory });
      });

      this.get("/categories", (schema) => {
        return schema.categories.all();
      });

      this.post("/users", (schema, request) => {
        let user = JSON.parse(request.requestBody);
        return schema.users.create(user);
      });
    },
  });

  return server;
}
