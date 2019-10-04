import model from "../../services/modelUse";

export default {
  loginControl: async (req, res) => {
    console.log("login controler 실행");
    if (req.params.id !== null || req.params.pw !== null) {
      const token = await model.getuser(req.params);
      res.cookie("jwt", token);
      res.json({ success: token });
    }
  }
};
