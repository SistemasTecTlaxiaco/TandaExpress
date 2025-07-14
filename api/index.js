const express = require("express");
const app = express();
app.get("/api/reputation/:address", (req, res) => {
  res.json({
    address: req.params.address,
    aportes: 9,
    puntualidad: "100%",
    nivel: "A+"
  });
});
app.listen(3000, () => console.log("API listening on port 3000"));