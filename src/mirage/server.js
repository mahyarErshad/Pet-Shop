import { createServer } from "miragejs";

export default function () {
  createServer({
    routes() {
      this.get("/api/reminders", () => ({
        reminders: [],
      }));
    },
  });
}
