import { DataSource } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Quote } from '../../quote/entities/quote.entity';


export async function seedQuotes(dataSource: DataSource) {
  const quoteRepo = dataSource.getRepository(Quote);

  console.log('🌱 Seeding quotes...');

  const categories = ['Motivation', 'Life', 'Love', 'Success', 'Wisdom', 'Humor'];

  const quotes = Array.from({ length: 30 }).map(() =>
    quoteRepo.create({
      text: faker.lorem.sentence({ min: 8, max: 20 }),
      author: faker.person.fullName(),
      category: faker.helpers.arrayElement(categories),
      tags: faker.helpers.arrayElements(
        ['inspiration', 'daily', 'mindset', 'happiness', 'growth', 'goals', 'quotes'],
        { min: 1, max: 3 },
      ),
    }),
  );

  await quoteRepo.save(quotes);

  console.log(`✅ Seeded ${quotes.length} quotes`);
}
