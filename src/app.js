import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app= express();
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials:true
    }
))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import userRouter from "./routes/user.route.js";
import playListRouter from "./routes/playlist.rout.js";
import videoRouter from "./routes/video.route.js"
import subscriptionRouter from "./routes/subscription.route.js"
import commentRouter from "./routes/comment.rout.js";
import dashboardRouter from "./routes/dashboard.route.js";
import tweetRouter from "./routes/tweet.route.js";
import healthcheckRouter from "./routes/helthcheakroute.js";
import likeRouter from "./routes/like.route.js";



//routes declaration
app.use("/api/v1/users",userRouter)
app.use("/api/v1/playlists",playListRouter)
app.use("/api/v1/video",videoRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/likes", likeRouter)

app.use("/api/v1/dashboard", dashboardRouter)


//http://localhost:8080/api/v1/users/register


export default app;