const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controller/errorController");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const compression = require("compression");
const app = express();

const userRouter = require('./routes/userRoutes')
const tempRouter = require('./routes/tempRoutes')
const studentRoutes = require('./routes/studentRoutes')
const courseRoutes = require('./routes/courseRoutes')


const DB =
    "mongodb+srv://kamran:1234@cluster0-fvxek.mongodb.net/certificate?retryWrites=true&w=majority";

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB Connected"));

// *********************GLOBAL MIDDLEWARES*******************************

//set security http headers
app.use(helmet());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

//Limit request from same IP
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests from this IP, please try again in an hour!"
});
app.use("/api", limiter);

//body parser, reading data into req.body
app.use(express.json({ limit: "10kb" }));


//Data sanitization against Nosql query injections
app.use(mongoSanitize());

//Data sanitization against XSS(cross site scripting attacks)
app.use(xss());

//Prevent Paramter Pollution
app.use(
    hpp({
        // whitelist: [
        //   "duration",
        //   "ratingsQuantity",
        //   "ratingsAverage",
        //   "maxGroupSize",
        //   "difficulty",
        //   "price"
        // ]
    })
);

app.use(compression());

//***************************/ROUTES***********************************

app.use("/api/user", userRouter);
app.use("/api/temp", tempRouter);
app.use('/api/student', studentRoutes)
app.use('/api/course', courseRoutes)






// Serve static assets in production
if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
