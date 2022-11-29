-- CreateTable
CREATE TABLE `clients` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(75) NOT NULL,
    `rfc` VARCHAR(18) NOT NULL,
    `ver_4_0` BOOLEAN NOT NULL,
    `regime` VARCHAR(150) NULL,
    `cp` VARCHAR(45) NULL,
    `sucursal` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `considerations` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `consideration` VARCHAR(160) NOT NULL,
    `id_client` INTEGER NOT NULL,

    INDEX `id_client`(`id_client`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mails` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `mail` VARCHAR(150) NOT NULL,
    `id_client` INTEGER NOT NULL,

    INDEX `id_client`(`id_client`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `considerations` ADD CONSTRAINT `considerations_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `clients`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mails` ADD CONSTRAINT `mails_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `clients`(`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

