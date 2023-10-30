import { client } from "../model/connect";

exports.bookTicket = async (req: any, res: any) => {
  try {
    const query = `INSERT INTO tickets (fk_user,fk_event,num,tot_price,payment_status) VALUES($1,$2,$3,$4,$5);`;
    const param = [
      req.user.id,
      req.body.event_id,
      req.body.num,
      req.body.price,
      req.body.status,
    ];

    const data = await client.query(query, param);
    const update = `UPDATE events SET available_tickets=available_tickets-${req.body.num} ,total_collection=total_collection+${req.body.price} where id=${req.body.event_id};`;
    const up = await client.query(update);
    console.log(data);
    res.status(201).json({message:"Ticket Booked successfully"});
  } catch (e: any) {
    res.status(401).send(e.message);
  }
};

exports.unBookTicket = async (req: any, res: any) => {
  try {
    const ticket = await client.query(
      `SELECT * from tickets where fk_user=${req.user.id} AND fk_event=${req.body.event_id};`
    );
    const update = await client.query(
      `UPDATE events set available_tickets= available_tickets+${ticket.rows[0].num}, total_collection=total_collection-${ticket.rows[0].tot_price} where id=${req.body.event_id};`
    );
    console.log(update);
    const del = await client.query(
      `DELETE from tickets where id=${ticket.rows[0].id};`
    );
    res.status(200).send("Ticket unbooked successfully");
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};
