import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuoteController } from './quotes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './entities/quote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quote])],
  controllers: [QuoteController],
  providers: [QuotesService],
})
export class QuotesModule {}
