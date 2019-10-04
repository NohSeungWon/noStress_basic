import * as express from "express";
import crudControllers from "./controller";
import multer from "multer";
const upload = multer();

export default express
  .Router()
  .get("/", crudControllers.getControl)
  .post("/", crudControllers.postControl)
  .delete("/", crudControllers.deleteControl)
  .put("/", crudControllers.putControl)
  .post("/img", upload.single("userFile"), crudControllers.imgControl);
