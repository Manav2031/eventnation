import { Request, Response } from "express";
import { client } from "../model/connect";

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const query = `select * from events;`;
    const data = await client.query(query);
    res.status(200).send(data.rows);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};

export const getEvent = async (req: Request, res: Response) => {
  try {
    const event_id = req.params.id;
    const query = `select * from events where id=${event_id};`;
    const data = await client.query(query);
    res.status(200).send(data.rows[0]);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};

export const addEvent = async (req: any, res: Response) => {
  try {
    const { name, location, details, date, price, num } = req.body;
    console.log(req.user.id);
    const query = `INSERT INTO events(name, details, location, date, ticket_price, available_tickets, created_by, total_collection) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
    const val = [name, details, location, date, price, num, req.user.id, 0]; // Make sure to provide a value for available_tickets (in this case, it's set to 0).
    const data = await client.query(query, val);
    console.log(data);
    res.status(200).send(data);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};


export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const event_id = req.params.id;
    const query = `delete from events where id=${event_id};`;
    const data = await client.query(query);
    res.status(200).send("Event deleted successfully");
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};

export const getCreatedEvent = async (req: any, res: any) => {
  try {
    const userId = req.user.id;
    console.log() // Assuming the user ID is in req.user.id
    const query = `SELECT * FROM events WHERE created_by = ${userId};`;
    console.log(query);
    const data = await client.query(query);
    res.status(200).send(data.rows);
  } catch (err: any) {
    res.status(400).send(err);
  }
}



export const getBookedEvent = async (req: any, res: any) => {
  try {
    const data = await client.query(`SELECT * from tickets where fk_user=${req.user.id};`);
    const event_id = data.rows.map(i => i.fk_event);

    const eventPromises = event_id.map(async (id: any) => {
      const data2 = await client.query(`SELECT * from events where id=${id};`);
      return data2.rows[0];
    });

    const event = await Promise.all(eventPromises);

    // Filter out empty results
    const filteredEvent = event.filter(item => item !== undefined);

    res.status(200).send(filteredEvent);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
}



