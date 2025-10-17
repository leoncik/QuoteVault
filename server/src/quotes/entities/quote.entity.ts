import { Author } from 'src/authors/entities/author.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Author, (author) => author.quotes)
  author: Author;

  @Column()
  category: string;

  @Column('text', { array: true, nullable: true })
  tags?: string[];
}
