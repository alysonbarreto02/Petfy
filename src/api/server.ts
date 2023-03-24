import { createServer, Factory, Model } from "miragejs";
import { faker } from "@faker-js/faker";

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  models: {
    user: Model,
    trip: Model,
  },

  factories: {
    user: Factory.extend({
      email: faker.internet.email,
      password: faker.internet.password(10, true),
    }),
    trip: Factory.extend({
      latitude: faker.address.latitude,
      longitude: faker.address.longitude,
    }),
  },

  seeds(server) {
    server.createList("user", 50);
    server.createList("trip", 100);
  },

  routes() {
    this.namespace = "api";
    this.get("/users", (schema) => schema.db.users);
    this.get("/trips", (schema) => schema.db.trips);
  },
});
