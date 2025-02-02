import express, { Request, Response, Application, urlencoded } from "express";
import jwt from "jsonwebtoken";
const { generateUserToken } = require("../middleware/userMiddleware");
import bcrypt from "bcryptjs";
import { client } from "../model/connect";
import { QueryResult } from "pg";

// Function to handle user signup
exports.SignUserUp = async (req: any, res: any) => {
  // SQL query to insert user details into the 'users' table in the database

  if (
    !req.body.full_name ||
    !req.body.password ||
    !req.body.email ||
    !req.body.username
  ) {
    res.status(401).json({ error: "Fill all the fields" });
  } else {
    const insertUser: string =
      "INSERT INTO users (username, full_name, email, password_hash,registration_date) VALUES ($1, $2, $3, $4, $5) RETURNING username, email, registration_date";

    // Get the current timestamp in ISO format
    const timeStamp: string = new Date().toISOString();

    // Hash the user's password using bcrypt
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    // Prepare the values for the SQL query
    const values: any[] = [
      req.body.username,
      req.body.full_name,
      req.body.email,
      hashPassword,
      timeStamp,
    ];

    try {
      const result: QueryResult<any> = await client.query(insertUser, values);
      const data = result.rows;

      console.log(data);

      res.status(200).json({ message: "User created successfully." });
    } catch (err: any) {
      const duplicateError: string = err.message
        .split(" ")
        .pop()
        .replaceAll('"', "");

      if (duplicateError === "user_email_key") {
        res.status(409).json({ error: "User with this email already exists." });
      } else {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  }
};
exports.SignUserIn = async (req: any, res: any) => {
  try {
    if (!req.body.email || !req.body.password) {
      res.status(401).json({ error: "Fill all the fields" });
    } else {
      const email = req?.body?.email;
      const text = `select * from users where email='${email}';`;
      console.log(text);
      const data: QueryResult<any> = await client.query(text);
      // console.log(data.rows[0])
      if (data.rowCount === 1) {
        const auth = await bcrypt.compare(
          req.body.password,
          data.rows[0].password_hash
        );
        if (auth) {
          const user = data.rows[0];
          const token = await generateUserToken(data.rows[0].id);
          delete user.password;
          return res.json({
            token: token,
            user: user,
          });
        } else {
          return res.status(400).send("Invalid password");
        }
      } else {
        return res.status(400).send("User Not Found");
      }
    }
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};

exports.getMe = async (req: any, res: Response) => {
  res.status(200).send(req.user);
};

exports.UserLogout = async (req: any, res: any) => {
  if (!req.token) {
    return res.status(401).json({ error: "You are already logged out" });
  }

  const removeUser: string = "DELETE FROM user_token WHERE token = $1";

  const value: any[] = [req.token];

  try {
    const result: QueryResult<any> = await client.query(removeUser, value);
    return res.status(200).json({ success: "User logged out successfully!" });
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: "An error occurred while logging out" });
  }
};
