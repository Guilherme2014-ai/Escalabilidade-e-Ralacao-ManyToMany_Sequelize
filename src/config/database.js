import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname,'..','..','.env') });

module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: process.env.DBS_PASS,
  database: 'manytomany',
  define: {
    timestamps: true,
    underscored: true,
  }
};