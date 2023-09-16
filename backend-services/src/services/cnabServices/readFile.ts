import fs from "fs";
import path from "path";
import { insertCnab } from "./insertCnab";

const serializeCnab = (line: string) => {
  const tipo_id = parseInt(line.slice(0, 1));
  const ano = line.slice(1, 5);
  const mes = line.slice(5, 7);
  const dia = line.slice(7, 9);
  const data = new Date(`${ano}-${mes}-${dia}`);
  const valor = parseFloat(line.slice(9, 19)) / 100.0;
  const cpf = line.slice(19, 30);
  const cartao = line.slice(30, 42);
  const houras = line.slice(42, 44);
  const minutos = line.slice(44, 46);
  const segundos = line.slice(46, 48);
  const hora = new Date(
    `${ano}-${mes}-${dia} ${houras}:${minutos}:${segundos}`
  );
  const dono_loja = line.slice(48, 62);
  const nome_loja = line.slice(62, 81).trim();

  return {
    tipo_id,
    data,
    valor,
    cpf,
    cartao,
    hora,
    dono_loja,
    nome_loja,
  };
};

export const readFile = () => {
  try {
    const filePath = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "tmp",
      "cnab.txt"
    );

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      data.split("\n").forEach(async (line) => {
        const serializedCnab = serializeCnab(line);

        await insertCnab(serializedCnab);
      });
    });
  } catch (err: any) {
    throw new Error(err);
  }
};
