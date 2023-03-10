const Router = require("express/lib/router");
const router = Router();
const { getData, setUser } = require("../controllers/router.controller")

router.get("/api/:id", getData);
router.post("/api/users", setUser);

module.exports = router;