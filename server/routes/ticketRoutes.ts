import express, { Router } from "express";
const { isAuthenticated } = require("../middleware/userMiddleware");
const { bookTicket, unBookTicket } = require("../controller/ticketController");
const ticketRouter: Router = express.Router();

ticketRouter.post("/book", isAuthenticated, bookTicket);
ticketRouter.post("/unbook", isAuthenticated, unBookTicket);

export default ticketRouter;
