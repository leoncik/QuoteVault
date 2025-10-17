import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { DataSource } from 'typeorm';
import { seedQuotes } from './seeds/quote.seed';

async function runSeeder() {
  // Create a Nest application context (no HTTP server)
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);

  console.log('📦 Database connected!');
  await seedQuotes(dataSource);

  await app.close();
  console.log('✅ Seeding complete!');
}

runSeeder().catch((err) => {
  console.error('❌ Seeding failed:', err);
  process.exit(1);
});
