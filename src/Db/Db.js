// db.js
import Dexie from "dexie";

export const db = new Dexie("localDatabase");
db.version(1).stores({
  users: "++id, name, email, age", // Primary key and indexed props
  settings: "++id, theme, language", // Example for settings
  logs: "++id, timestamp, message", // Example for logs
});
