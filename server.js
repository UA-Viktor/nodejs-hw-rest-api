// const app = require("./app");

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });

//

const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Victor:T4ZanD2bO3ye6BVO@cluster0.y1skkrf.mongodb.net/contacts_list?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connect success");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
