const express = require("express");
const path = require("path");
const app = express();
const SERVER_PORT = process.env.PORT || 3456

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/api", require("./routes/api").route);

app.listen(SERVER_PORT, () => console.log("server started on 3456"));
