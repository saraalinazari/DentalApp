const router = require("express").Router();
const calendarRoutes = require("./calendar");
const scheduleRoutes = require("./schedule");

// calendar routes
router.use("/calendar", calendarRoutes);
router.use("/schedule",scheduleRoutes);


module.exports = router;
