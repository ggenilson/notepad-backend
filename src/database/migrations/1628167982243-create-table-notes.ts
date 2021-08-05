import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableNotes1628167982243 implements MigrationInterface {
  name = 'createTableNotes1628167982243';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `notes` (`id` varchar(36) NOT NULL, `subject` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `notes`');
  }
}
