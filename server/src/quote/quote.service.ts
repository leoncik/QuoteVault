import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from './entities/quote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuoteService {
  constructor(
    @InjectRepository(Quote)
    private quotesRepository: Repository<Quote>,
  ) {}

  async create(createQuoteDto: CreateQuoteDto) {
    const quote = this.quotesRepository.create(createQuoteDto);
    return await this.quotesRepository.save(quote);
  }

  findAll() {
    return this.quotesRepository.find();
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
