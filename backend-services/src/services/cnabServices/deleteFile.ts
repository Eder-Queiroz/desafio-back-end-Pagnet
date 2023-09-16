import fs from "fs";
import path from "path";

export const deleteFile = () => {
  try {
    const filePath = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "tmp",
      "cnab.txt"
    );

    fs.unlink(filePath, (err) => {
      if (err) console.log(err);
    });
  } catch (err: any) {
    throw new Error(err);
  }
};
