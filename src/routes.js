const express = require("express");
const router = express.Router();
const path = require("path");

const database = require("./db");
const Aluno = require("./aluno");

router.get("/novo-aluno", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

router.post("/novo-aluno", async (req, res, next) => {
  const novoAluno = await Aluno.create({ nome: req.body.nome });
  const alunos = await Aluno.findAll();
  res.json(alunos);
});

module.exports = router;
