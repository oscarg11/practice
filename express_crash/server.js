import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url'
import posts from './routes/posts.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const port = process.env.PORT || 8000;

//get the diretory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
console.log(__filename)

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//loggger middleware
app.use(logger);

//setup static folder
app.use(express.static(path.join(__dirname, 'public')))


//Routes
app.use('/api/posts',posts);


// ERROR HANDLER
app.use(errorHandler);
app.use(notFound);




app.listen(port, () => console.log(`Server is runing on port ${port}`));