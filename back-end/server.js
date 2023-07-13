const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const PORT = 8000;
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();
app.use(express.json());
//新規登録ユーザーAPI
app.post("/api/auth/register", async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
  return res.json({ user });
});

app.listen(PORT, () => console.log(`sever is runnning on Port $(PORT)`));
