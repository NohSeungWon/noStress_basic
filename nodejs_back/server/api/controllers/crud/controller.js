import modelUse from "../../services/modelUse";

export default {
  getControl: async (req, res) => {
    console.log("get controler 실행");
    req.url;
    const result = await modelUse.find();
    res.json(result);
  },
  postControl: async (req, res) => {
    console.log("post controler 실행");
    const userInput = req.body;
    const result = await modelUse.create(userInput);
    // console.log(result);
    res.json(result);
  },
  deleteControl: async (req, res) => {
    console.log("delete controler 실행");
    const userInput = req.body;
    const result = await modelUse.delete(userInput);
    // console.log(result);
    res.json(result);
  },
  putControl: async (req, res) => {
    console.log("update controler 실행");
    const userInput = req.body;
    const result = await modelUse.update(userInput);
    res.json(result);
  },
  imgControl: async (req, res) => {
    console.log("imgControl controler 실행");
    console.log(req.file);
    res.json("result");
  }
};
