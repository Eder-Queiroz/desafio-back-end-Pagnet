import { Request, Response } from "express";
import { recordFile } from "../../../services/cnabServices/recordFile";
import { deleteFile } from "../../../services/cnabServices/deleteFile";
import { readFile } from "../../../services/cnabServices/readFile";

export const sendCnab = async (req: Request, res: Response) => {
  try {
    const { file } = req.body;

    recordFile(file);

    readFile();

    deleteFile();

    return res.status(200).json({
      status: "success",
      message: "File successfully recorded",
    });
  } catch (err: any) {
    throw new Error(`[ERROR_SEND_CNAB]: ${err}`);
  }
};
