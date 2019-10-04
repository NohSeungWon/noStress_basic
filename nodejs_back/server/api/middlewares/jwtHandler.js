import jwt from "jsonwebtoken";

export default (req, res, next) => {
  if (req.cookies.jwt !== undefined) {
    console.log("jwtHandler");
    const token = req.cookies.jwt;
    try {
      jwt.verify(token, process.env.SECRET);
      next();
    } catch (error) {
      res.json({ success: "fail auth" });
    }
  } else {
    // 여기서 로그인 url이 아닌경우는 다 fail 처리를 하고
    // 로그인인 경우는 next를 해야하는데 어떤 처리를 해야할지 고민하는 중
    console.log("jwt 통과");
    next();
  }
};
