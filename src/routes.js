const express = require("express");
const router = express.Router();

const database = require("./db");
const Aluno = require("./aluno");

router.get("/", async (req, res, next) => {
  await database.sync();

  const novoAluno = await Aluno.create({ nome: "David Luan" });

  const alunos = await Aluno.findAll();
  res.json(alunos);
});

module.exports = router;
