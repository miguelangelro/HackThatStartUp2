import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcryptjs';


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: {
        type: String
    },
},
{
    versionKey: false,
});

export interface IUser extends Document {
    name: string;
    surname: string;
    age: number;
    username: string;
    email: string;
    password: string;
    
    encryptPassword(password: string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
};

userSchema.methods.encryptPassword = async (password: string): Promise<string> => { //Ciframos la contaseña
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

userSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, (this as any).password); // comparo la contraseña que manda el usuario con la guardada en la BBDD.
};

export default model<IUser>('User', userSchema);