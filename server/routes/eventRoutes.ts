import express, { Router } from "express";
import {
  getAllEvents,
  getEvent,
  addEvent,
  deleteEvent,
  getCreatedEvent,
  getBookedEvent
} from "../controller/eventControllers";
import {isAuthenticated} from "../middleware/userMiddleware"

const eventRouter: Router = express.Router();

eventRouter.get("/", getAllEvents);
eventRouter.get("/:id", getEvent);
eventRouter.post("/",isAuthenticated, addEvent);
eventRouter.delete("/:id",isAuthenticated, deleteEvent);
eventRouter.post('/booked',isAuthenticated,getBookedEvent)
eventRouter.post('/created',isAuthenticated,getCreatedEvent)
export default eventRouter;
