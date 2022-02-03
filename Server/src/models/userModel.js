const connection = require("../../db-config");
const { hashPassword } = require("../helpers/usersHelper");
const saltedRounds = parseInt(process.env.SALT_ROUNDS);

const db = connection.promise();

connection.connect((error) => {
  if (error) {
    console.error("error connecting: " + error.stack);
  } else {
    console.log("connected as id " + connection.threadId);
  }
});

const createUser = async ({ password, ...body }) => {
  const hashedPassword = await hashPassword(password, saltedRounds);
  const [rawResults] = await db.query(
    "INSERT INTO user (email, password, role)  VALUES (?, ?, ?)",
    [body.email, hashedPassword, body.role]
  );
  const id = rawResults.insertId;
  return { id, ...body };
};

const findByEmail = async (email) => {
  const [results] = await db.query("SELECT * FROM user WHERE email = ?", [
    email,
  ]);
  return results[0];
};

const getUserByEmail = async (email) => {
  let [results] = await db.query(
    "SELECT id, email, password, role FROM user WHERE email= ?;",
    [email]
  );
  return results;
};

module.exports = { createUser, findByEmail, getUserByEmail };
