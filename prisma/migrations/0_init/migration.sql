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

-- CreateTable
CREATE TABLE `bills` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `client` VARCHAR(250) NOT NULL,
    `id_client` INTEGER NOT NULL,
    `bill_number` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `is_paid` BOOLEAN NOT NULL,
    `uuid` VARCHAR(64) NOT NULL,
    `uuid_compl` VARCHAR(64) NULL,

    INDEX `id_client`(`id_client`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `considerations` ADD CONSTRAINT `considerations_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `clients`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mails` ADD CONSTRAINT `mails_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `clients`(`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `bills` ADD CONSTRAINT `bills_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `clients`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

