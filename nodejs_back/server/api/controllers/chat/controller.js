export default {
  connection: async (req, res) => {
    console.log("connection controler 실행");
    // io.on("connect", soket => {
    //   console.log("user 접속성공");
    // });
  },
  getMessage: async (req, res) => {
    console.log("getMessage controler 실행");
  },
  sendMessage: async (req, res) => {
    console.log("sendMessage controler 실행");
  }
};
