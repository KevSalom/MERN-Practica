import mongoose from "mongoose";

export const DBconnection = async () => {
  try {
      await mongoose.connect(
      "mongodb+srv://kevsalom:Guardianes33@kevsalom.lfiygna.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log('Base de datos lista para usar')
  } catch (error) {
    console.log(error);
  }
};
