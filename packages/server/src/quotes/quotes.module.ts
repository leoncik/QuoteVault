import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuoteController } from './quotes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './entities/quote.entity';
import { Author } from '../authors/entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quote, Author])],
  controllers: [QuoteController],
  providers: [QuotesService],
})
export class QuotesModule {}
