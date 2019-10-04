import * as express from "express";
import authConrtrol from "../auth/controller";

export default express.Router().use("/user/:id/:pw", (...args) => {
  authConrtrol.loginControl(...args);
});
