(async () => {
  const database = require("./db");
  const Aluno = require("./aluno");

  await database.sync();

  const novoAluno = Aluno.create({ nome: "David Luan" });
})();
