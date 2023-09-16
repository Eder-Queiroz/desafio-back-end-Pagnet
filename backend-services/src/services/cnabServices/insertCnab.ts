import prismaClient from "../../core/config/prisma";

interface CnabProps {
  tipo_id: number;
  data: Date;
  valor: number;
  cpf: string;
  cartao: string;
  hora: Date;
  dono_loja: string;
  nome_loja: string;
}

export const insertCnab = async (cnab: CnabProps) => {
  const { tipo_id, data, valor, cpf, cartao, hora, dono_loja, nome_loja } =
    cnab;

  try {
    await prismaClient.cNAB.create({
      data: {
        data,
        valor,
        cpf,
        cartao,
        hora,
        dono_loja,
        nome_loja,
        tipo_id,
      },
    });

    return new Promise((resolve) =>
      resolve({
        status: "success",
        message: "Item successfully recorded",
      })
    );
  } catch (err: any) {
    throw new Error(`[ERROR_INSERT_CNAB]: ${err}`);
  }
};
