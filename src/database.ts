import mongoose from 'mongoose'
import csvtojson from 'csvtojson'
import Asteroids from './models/asteroids.model'

const filepath= "OrbitalParameters_PHAs.csv"; // Ruta al documento

export async function startConnection() {
    await mongoose.connect('mongodb://localhost/DatabaseNEA',{
        useNewUrlParser: true,
        useFindAndModify: false ,
        useUnifiedTopology: true,
        useCreateIndex: true 
    });
    csvtojson().fromFile(filepath).then(async(json) =>{ // Función para incializar la base de datos con los datos del fichero .csv
       await Asteroids.insertMany(json);
    })
    
    console.log('Database is connected');
}