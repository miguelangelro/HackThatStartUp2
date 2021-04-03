import{Request,Response} from'express'
import User, {IUser} from '../models/user.model';
import jwt from 'jsonwebtoken';


export const signup = async (req: Request,res: Response) => { 
    const {name, surname, age, username, email, password} = req.body;

    const user: IUser = new User ({
        name, 
        surname,
        age,
        username,
        email,
        password
    });

  user.password = await user.encryptPassword(user.password);
  const savedUser = await user.save ();

 // genero token
  const token: string = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET || 'tokenTEST',{expiresIn: 86400}) // guardo el id del usuario que se registra
  return res.header('auth-token', token).json(savedUser); // devuelvo el valor del token en la cabecera authToken
  
};

export const signin = async (req: Request,res: Response) => {
 const user = await User.findOne({username: req.body.username});

 if(!user) return res.status(400).json("Error, try again.");
   const correctPassword: boolean =await user.validatePassword(req.body.password);

   if(!correctPassword) return res.status(404).json('invalid Password');
   //genero token
   const token: string =jwt.sign({_id: user._id},process.env.TOKEN_SECRET || 'tokenTEST',{expiresIn: 86400}) // expira por defecto en 24h
   
  return res.header('auth-token', token).json(user);   
};