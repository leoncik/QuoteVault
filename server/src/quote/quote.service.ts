import { Injectable } from '@nestjs/common';
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

  create(createQuoteDto: CreateQuoteDto) {
    return 'This action adds a new quote';
  }

  findAll() {
    return this.quotesRepository.find();
  }

  findOne(id: number) {
    return this.quotesRepository.findOneBy({ id });
  }

  update(id: number, updateQuoteDto: UpdateQuoteDto) {
    return `This action updates a #${id} quote`;
  }

  remove(id: number) {
    return this.quotesRepository.delete(id)
  }
}
