import { createServer, Factory, Model } from "miragejs";
import { faker } from "@faker-js/faker";

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  models: {
    user: Model,
  },

  factories: {
    user: Factory.extend({
      email: faker.internet.email,
      password: faker.internet.password(10, true),
    }),
  },

  seeds(server) {
    server.createList("user", 50);
  },

  routes() {
    this.namespace = "api";
    this.get("/users", (schema) => schema.db.users);
  },
});
