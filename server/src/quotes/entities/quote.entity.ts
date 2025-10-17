import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  author: string;

  @Column()
  category: string;

  @Column('text', { array: true, nullable: true })
  tags?: string[];
}
