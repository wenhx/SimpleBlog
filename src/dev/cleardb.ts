import * as path from "path";
import * as fs from "fs";

const databaseFile = path.join(__dirname, "../database", "main.db");
if (fs.existsSync(databaseFile)) {    
  fs.unlinkSync(databaseFile);
  console.log("database exists, remove it.");
} else {
  console.log("database file is not exists.");
}