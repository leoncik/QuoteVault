import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuotesModule } from './quotes/quotes.module';
import { Quote } from './quotes/entities/quote.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT || '5432'),
      username: process.env.DATABASE_USER || 'admin',
      password: process.env.DATABASE_PASSWORD || 'password123',
      database: process.env.DATABASE_NAME || 'quote_vault_db',
      autoLoadEntities: true,
      entities: [Quote],
      synchronize: true,
    }),
    QuotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
