import { sendCnab } from "./useCases/sendCnab";
import { getOperations } from "./useCases/getOperations";

const cnabController = {
  sendCnab,
  getOperations,
};

export { cnabController };
