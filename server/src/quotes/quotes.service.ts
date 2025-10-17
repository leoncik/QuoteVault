import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from './entities/quote.entity';
import { Repository } from 'typeorm';
import { Author } from 'src/authors/entities/author.entity';

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quote)
    private quotesRepository: Repository<Quote>,
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  async create(createQuoteDto: CreateQuoteDto) {
    let author = await this.authorRepository.findOne({
      where: { name: createQuoteDto.name },
    });

    // Create a new author if the author does not exist
    if (!author) {
      author = this.authorRepository.create({ name: createQuoteDto.name });
      author = await this.authorRepository.save(author);
    }

    // Create the quote linked to the author
    const quote = this.quotesRepository.create({
      text: createQuoteDto.text,
      category: createQuoteDto.category,
      tags: createQuoteDto.tags,
      author,
    });

    return this.quotesRepository.save(quote);
  }

  findAll() {
    // When fetching the quotes, it also joins the author table and include the full author object.
    return this.quotesRepository.find({ relations: ['author'] });
  }

  async findOne(id: number) {
    const quote = await this.quotesRepository.findOneBy({ id });
    if (!quote) {
      throw new NotFoundException(`Quote with ID ${id} not found`);
    }
    return quote;
  }

  update(id: number, updateQuoteDto: UpdateQuoteDto) {
    return `This action updates a #${id} quote`;
  }

  remove(id: number) {
    return this.quotesRepository.delete(id);
  }
}
