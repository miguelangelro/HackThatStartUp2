import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import auth from './routes/auth.routes'
import user from './routes/user.routes'
import asteroids from './routes/asteroids.routes'
const app= express();

//settings 
app.set('port', 3000 || process.env.PORT);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', auth);
app.use('/user', user);
app.use('/asteroids', asteroids);

export default app;