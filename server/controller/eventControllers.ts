import {Request,Response} from 'express'
import {client} from "../model/connect"

export const getAllEvents=(req:Request,res:Response)=>{
    try{
        res.status(200).send("Yeh lo saare events ")
    }catch(err:any){
        res.status(400).send(err.message);
    }
}

export const getEvent=(req:Request,res:Response)=>{
    try{
        res.status(200).send("Yeh lo saare events ")
    }catch(err:any){
        res.status(400).send(err.message);
    }
}

export const addEvent=(req:Request,res:Response)=>{
    try{
        res.status(200).send("Yeh lo saare events ")
    }catch(err:any){
        res.status(400).send(err.message);
    }
}

export const deleteEvent=(req:Request,res:Response)=>{
    try{
        res.status(200).send("Yeh lo saare events ")
    }catch(err:any){
        res.status(400).send(err.message);
    }
}

module.exports={getAllEvents,getEvent,addEvent,deleteEvent}