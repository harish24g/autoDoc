const express=require('express');
const app = express();
const dotenv=require('dotenv');
const mongoose= require('mongoose');
//import routes
const authRoute=require('./routes/auth');
const roleRoute=require('./routes/roleRoutes');
const cors = require('cors');

//for styling
app.use(express.static(__dirname + '/public'));

dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true,useUnifiedTopology: true},() =>
console.log("connected to db"));

//middlewares
app.use(express.json());
  
app.use(cors());
//setting the view engine to ejs
app.set('view engine', 'ejs');
//body parser middleware
app.use(express.urlencoded({ extended: false }));

 //route middlewares
 app.use('/user',authRoute);
 app.use('/autodoc',roleRoute);

 app.get('/', (req,res) => {
     res.render('index');
 })



app.listen(5000, () => console.log("server running"));