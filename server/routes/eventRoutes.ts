import express, { Router } from "express";
import {
  getAllEvents,
  getEvent,
  addEvent,
  deleteEvent,
} from "../controller/eventControllers";

const eventRouter: Router = express.Router();

eventRouter.get("/", getAllEvents);
eventRouter.get("/:id", getEvent);
eventRouter.post("/", addEvent);
eventRouter.delete("/:id", deleteEvent);

export default eventRouter;
