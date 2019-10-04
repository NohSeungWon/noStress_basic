export default soket => {
  soket.on("user", msg => {
    console.log("user send =>", msg);
    if (msg) {
      soket.emit("sever", "hi user");
    }
  });
};
