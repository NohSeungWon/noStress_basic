import crudRouter from "./api/controllers/crud/router";
import authRoter from "./api/controllers/auth/router";

export default function routes(app) {
  // 미들웨어를 지정하지 않았는데
  // / 이경로가 자동으로 swagger랑 연결되어있다.
  // 어떻게 찾아야하나 모르겠네c
  app.use("/info", authRoter);
  app.use("/info", crudRouter);
}
