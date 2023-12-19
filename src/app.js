const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const sequelize  = require('./models/DB');

// Setting up the server
const app = express();
const port = 3000; // Port number

// Http logger
app.use(morgan("combined")); // Morgan middleware

// Template engine
app.engine(
	"hbs",
	engine({
		extname: ".hbs",
		defaultLayout: "main",
		layoutsDir: path.join(__dirname, "/views/layouts"),
	})
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));
// console.log("PATH: ", path.join(__dirname, "/views"));


// Importing routers
const routes = require("./routers/");
const homeRouter = require('./routers/homeRouter');
const requestRouter = require('./routers/requestRouter');
const newsRouter = require('./routers/newsRouter');
const notificationRouter = require('./routers/notificationRouter');
const gradeRouter = require('./routers/gradeRouter');
const courseRouter = require('./routers/courseRouter');
const studentRouter = require('./routers/studentRouter');
const lecturerRouter = require('./routers/lecturerRouter');
const adminRouter = require('./routers/adminRouter');

// Configure routes
app.use('/', homeRouter);
app.use('/', notificationRouter);
app.use('/', requestRouter);
app.use('/', newsRouter);
app.use('/', gradeRouter);
app.use('/', courseRouter);
app.use('/', studentRouter);
app.use('/', lecturerRouter);
app.use('/', adminRouter);

// routes inits 
routes(app);

sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');

    return sequelize.sync({ force: false });
  })
  .then(() => {
    console.log('Sequelize models synced with the database.');

    // Start the server
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });