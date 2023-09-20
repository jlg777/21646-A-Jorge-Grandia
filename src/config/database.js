import { Sequelize } from "sequelize";



// Option 3: Passing parameters separately (other dialects)
export const sequelize = new Sequelize('prueba', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });


  export const startDb = async () => {
    try {
      await sequelize.authenticate();
      //await sequelize.sync({ force: true });
      await sequelize.sync();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  