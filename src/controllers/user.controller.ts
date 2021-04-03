import { Request, Response } from "express";
import User , {IUser} from "../models/user.model";


export const findAll = async (req:Request, res:Response) => {
    
    const users = await User.find({}, {password: 0});
    if(users==null) return res.status(404).json({message: "Users not found"});
    else return res.status(200).json(users);
          
}

export const getUser = async (req:Request, res:Response) => { 
   
   const userFound = await  User.findOne({"username":req.params.username}, {password: 0})
   if(userFound==null) return res.status(404).json({message: "User not found"});
   else return res.status(200).json(userFound);
 
}

export const addList = async (req: Request, res: Response) =>{

    try{
    await req.body.forEach(async(element: { name: any; surname: any; age: any; username: any; }) => {
        const user: IUser = new User ({
            name: element.name,
            surname: element.surname,
            age: element.age,
            username: element.username
        });
        await user.save();
    });
    return res.status(200).json("List added.")
    }catch(err){
        res.status(404).json(err)
    }

}


export const createUser = async (req: Request, res: Response) =>{
    
    try{
    const {name, surname, age, username} = req.body;
    const user: IUser = new User ({
        name, 
        surname,
        age,
        username
    });

    const savedUser = await user.save();
    return res.status(200).json(savedUser);
}catch(err){
    return res.status(404).json(err);
}
}

export const updateUser = async (req: Request, res: Response) =>{
    const {name, surname, age, username} = req.body;

    const user = await User.findOneAndUpdate({"username": req.params.username},{$set : {name: name, surname: surname, age: age, username: username}})
    if(!user) return res.status(400).json("Error, try again.");
    return res.status(200).json("User updated successfully "+ user)
   
}


export const deleteUser = async (req:Request,res:Response) => {
    
    const userDeleted = await User.findByIdAndDelete(req.params.id);
    if(userDeleted != null) return res.status(200).json({"User deleted": userDeleted});
    else return res.status(400).json("User does not exist.");
    
}