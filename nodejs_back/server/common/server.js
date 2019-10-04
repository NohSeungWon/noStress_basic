import Express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as http from "http";
import * as os from "os";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwtHandler from "../api/middlewares/jwtHandler";
import socket from "socket.io";
import socketRouter from "../api/controllers/chat/router";

// import swaggerify from './swagger';

import l from "./logger";

const app = new Express();

export default class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    app.set("appPath", `${root}client`);
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || "100kb" }));
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || "100kb"
      })
    );
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(Express.static(`${root}/public`));
    app.use(
      cors({
        origin: "http://localhost:3000",
        credentials: true
      })
    );
    app.use((...args) => jwtHandler(...args));
  }

  router(routes) {
    // swaggerify(app, routes);
    routes(app);

    return this; // app.listen을 사용하기 위해 this를 리턴해야함
  }

  listen(port = process.env.PORT) {
    const welcome = p => () =>
      l.info(
        `up and running in ${process.env.NODE_ENV ||
          "development"} @: ${os.hostname()} on port: ${p}}`
      );

    const server = app.listen(port, welcome(port));
    const io = socket(server);

    io.on("connection", socket => {
      console.log("soket user connetion success");
      socketRouter(socket);
    });
    return app;
  }
}
