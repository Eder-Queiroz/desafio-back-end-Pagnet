import prismaClient from "../../core/config/prisma";

export const getOperationsByStore = async (nome_loja: string) => {
  try {
    const operations = await prismaClient.cNAB.findMany({
      where: {
        nome_loja,
      },
      include: {
        tipo: true,
      },
    });

    return new Promise((resolve) => resolve(operations));
  } catch (err: any) {
    throw new Error(`[ERROR_INSERT_CNAB]: ${err}`);
  }
};
