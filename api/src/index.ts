import app from "./app";
import { DBconnection } from "./DB";

const conecction = async () => {
  try {
    await DBconnection();
    app.listen(3000, () => {
      console.log("server on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

conecction();
