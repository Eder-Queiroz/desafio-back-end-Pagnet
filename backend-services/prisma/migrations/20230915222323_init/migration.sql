-- CreateTable
CREATE TABLE "CNAB" (
    "id" SERIAL NOT NULL,
    "tipo" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "cpf" TEXT NOT NULL,
    "cartao" TEXT NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,
    "dono_loja" TEXT NOT NULL,
    "nome_loja" TEXT NOT NULL,

    CONSTRAINT "CNAB_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "natureza" TEXT NOT NULL,
    "sinal" TEXT NOT NULL,

    CONSTRAINT "Tipo_pkey" PRIMARY KEY ("id")
);
