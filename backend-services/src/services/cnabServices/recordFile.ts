import fs from "fs";
import path from "path";

export const recordFile = (file: string) => {
  try {
    const pathName = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "tmp",
      "cnab.txt"
    );

    fs.writeFile(pathName, file, "base64", (err) => {
      if (err) console.log(err);
    });
  } catch (err: any) {
    throw new Error(err);
  }
};
