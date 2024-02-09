const express = require("express");
const router = express.Router();

router.use("/books", require("./book.routes"));
router.use("/user", require("./user.routes"));

module.exports = router;
