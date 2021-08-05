import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Notes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  subject: string;

  @Column()
  description: string;
}
