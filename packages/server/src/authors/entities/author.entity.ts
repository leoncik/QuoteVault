import { Quote } from '../../quotes/entities/quote.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  name: string;

  @Column({ nullable: true })
  bio?: string;

  @OneToMany(() => Quote, (quote) => quote.author)
  quotes: Quote[];
}
