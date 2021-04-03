import { Schema, model, Document } from 'mongoose'


const asteroidSchema = new Schema({
    full_name:{
        type: String
    },
    a: {
        type: Number
    },
    e:{
        type: Number
    },
    i:{
        type: Number
    },
    om:{
        type: Number
    },
    w:{
        type: Number
    },
    ma:{
        type: Number
    }
},{
    versionKey: false //Para que no aparezca el campo _v en cada documento.
});

export interface IAsteroid extends Document {
    full_name: string;
    a: number;
    e: number;
    i: number;
    om: number;
    w: number;
    ma: number;
}

export default model<IAsteroid>('Asteroid', asteroidSchema);