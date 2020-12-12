import {MigrationInterface, QueryRunner} from "typeorm";

export class initialCreate1603785887639 implements MigrationInterface {
    name = 'initialCreate1603785887639'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(20) NOT NULL, "display_name" varchar(20) NOT NULL, "password" varchar(40) NOT NULL, "is_admin" boolean NOT NULL, "created" datetime NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
