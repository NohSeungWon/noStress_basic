import db from "../../db/index";
import jwt from "jsonwebtoken";

// db.sequelize.sync();

export default {
  find: () => {
    console.log("find model 실행");
    return db.boards
      .findAll()
      .then(data => {
        const resultData = [];
        data.forEach(table => {
          resultData.push(table.dataValues);
        });
        return resultData;
      })
      .catch(err => console.log("err", err));
  },

  create: userInput => {
    console.log("create model 실행");
    return db.boards
      .create({
        text: userInput.input
      })
      .then(log => {
        // console.log(log);
        return true;
      })
      .catch(err => false);
  },

  delete: userInput => {
    console.log("delete model 실행");
    return db.boards
      .destroy({ where: { text: userInput.input } })
      .then(log => {
        console.log(log);
        return true;
      })
      .catch(err => false);
  },

  update: userInput => {
    console.log("update model 실행");
    return db.boards
      .update({ text: userInput.fix }, { where: { text: userInput.input } })
      .then(log => {
        // console.log(log);
        return true;
      })
      .catch(err => false);
  },

  getuser: userInput => {
    console.log("login model 실행");
    // sequelize 사용
    const { id, pw } = userInput;
    return db.users
      .findAll(
        {
          where: { id: id, pwd: pw }
        },
        { type: db.sequelize.QueryTypes.SELECT }
      )
      .then(data => {
        // console.log("ddd", data);
        if (data.length >= 1) {
          const token = jwt.sign({ text: id }, process.env.SECRET);
          return token;
        }
        return false;
      })
      .catch(err => false);
  }
};
