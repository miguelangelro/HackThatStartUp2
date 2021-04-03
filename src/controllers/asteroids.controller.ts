import { Request, Response } from "express";
import Asteroid , {IAsteroid} from "../models/asteroids.model";


export const findAll = async (req:Request, res:Response) => {
    
    const asteroid = await Asteroid.find({});
    if(!asteroid) return res.status(404).json({message: "NEAs not found"});
    else return res.status(200).json(asteroid);
          
}

export const getAsteroid = async (req:Request, res:Response) => { 
   
   const asteroidFound = await  Asteroid.findOne({"full_name":req.params.fullname})
   if(!asteroidFound) return res.status(404).json({message: "NEA not found"});
   else return res.status(200).json(asteroidFound);
 
}

export const addList = async (req: Request, res: Response) =>{

    try{
    await req.body.forEach(async(element: { full_name: string; a: number; e: number; i: number; 
        om: number; w: number; ma: number;}) => {

        const asteroid: IAsteroid = new Asteroid ({
            full_name: element.full_name,
            a: element.a,
            e: element.e,
            i: element.i,
            om: element.om,
            w: element.w,
            ma: element.ma
        });
        await asteroid.save();
    });
    return res.status(200).json("NEAs List added.")
} catch(err){
    return res.status(404).json("Error. "+ err)
}

}


export const createAsteroid = async (req: Request, res: Response) =>{
    
    try{
    const {full_name, a, e, i, om, w, ma} = req.body;

    const asteroid: IAsteroid = new Asteroid ({
        full_name: full_name,
        a: a,
        e: e,
        i: i,
        om: om,
        w: w,
        ma: ma
    });

    const savedAsteroid = await asteroid.save();
    return res.status(200).json(savedAsteroid);
}catch(err){
    return res.status(404).json(err);
}
}

export const updateAsteroid = async (req: Request, res: Response) =>{
    const {full_name, a, e, i, om, w, ma} = req.body;
    const asteroid = await Asteroid.findOneAndUpdate({"full_name": req.params.fullname},{$set : {full_name: full_name, a: a, e: e, i: i, om: om, w: w, ma: ma}})
    if(!asteroid) return res.status(400).json("Error, try again.");
    return res.status(200).json("NEA updated successfully "+ asteroid)
   
}


export const deleteAsteroid = async (req:Request,res:Response) => {
    
    const astDeleted = await Asteroid.deleteOne({"full_name":req.params.fullname});
    if(astDeleted != null) return res.status(200).json({"NEA deleted": astDeleted});
    else return res.status(400).json("NEA does not exist.");
    
}