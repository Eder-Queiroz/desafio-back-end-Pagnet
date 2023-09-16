/*
  Warnings:

  - You are about to drop the column `tipo` on the `CNAB` table. All the data in the column will be lost.
  - Added the required column `tipo_id` to the `CNAB` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CNAB" DROP COLUMN "tipo",
ADD COLUMN     "tipo_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "CNAB" ADD CONSTRAINT "CNAB_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "Tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
