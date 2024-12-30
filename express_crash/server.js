import express from 'express'

import path from 'path';
import posts from './routes/posts.js'
import logger from './middleware/logger.js'
const port = process.env.PORT || 8000;

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//loggger middleware
app.use(logger);

//setup static folder
//app.use(express.static(path.join(__dirname, 'public')))


//Routes
app.use('/api/posts',posts);




app.listen(port, () => console.log(`Server is runing on port ${port}`));