import { Request, Response } from 'express'
import { client } from "../model/connect"

export const getAllEvents = async (req: Request, res: Response) => {
    try {
        const query = `select * from events;`
        const data = await client.query(query)
        res.status(200).send(data.rows)
    } catch (err: any) {
        res.status(400).send(err.message);
    }
}

export const getEvent = async (req: Request, res: Response) => {
    try {
        const event_id = req.params.id;
        const query = `select * from events where id=${event_id};`
        const data = await client.query(query)
        res.status(200).send(data.rows[0])
    } catch (err: any) {
        res.status(400).send(err.message);
    }
}

export const addEvent = async (req: Request, res: Response) => {
    try {
        const { name, location, details, price_reg, price_silver, price_gold, num } = req.body;
        const query = `INSERT INTO events(name,details,location,price_reg,price_silver,price_gold,num) values($1,$2,$3,$4,$5,$6,$7);`
        const val = [name, details, location, price_reg, price_silver, price_gold, num];
        console.log(val)
        const data = await client.query(query, val);
        res.status(200).send(data.rows[0])
    } catch (err: any) {
        res.status(400).send(err.message);
    }
}

export const deleteEvent = async (req: Request, res: Response) => {
    try {
        const event_id = req.params.id;
        const query = `delete from events where id=${event_id};`
        const data = await client.query(query)
        res.status(200).send("Event deleted successfully")
    } catch (err: any) {
        res.status(400).send(err.message);
    }
}

module.exports = { getAllEvents, getEvent, addEvent, deleteEvent }