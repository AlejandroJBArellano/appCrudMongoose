const express = require("express"), Task = require("../models/tasks"), indexController = require("../controllers/index"), router = express.Router();

router.get("/", indexController.index);
router.post("/add", indexController.add)
router.get("/delete/:id", indexController.deleteTask)
router.get("/statch/:id", indexController.patchTask)
router.get("/edit/:id", indexController.sendPutTask)
router.post("/edit/:id", indexController.putTask)

module.exports = router;