import { Request, Response } from "express";
import { getOperationsByStore } from "../../../services/cnabServices/getOperationsByStore";

const serializeOperations = (operations: any) => {
  let totalBalance = 0;

  operations.map((operation: any) => {
    const { tipo, valor } = operation;

    if (tipo.sinal === "+") {
      totalBalance += valor;
    } else {
      totalBalance -= valor;
    }
  });

  const serializedOperations = {
    operations: [...operations],
    totalBalance,
  };

  return serializedOperations;
};

export const getOperations = async (req: Request, res: Response) => {
  try {
    const { nome_loja } = req.body;

    const operations = await getOperationsByStore(nome_loja);

    const data = serializeOperations(operations);

    return res.status(200).json({ menssage: "ok", data });
  } catch (err: any) {
    throw new Error(`[ERROR_GET_OPERATIONS]: ${err}`);
  }
};
