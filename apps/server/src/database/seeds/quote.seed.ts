import { DataSource } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Quote } from '../../quotes/entities/quote.entity';
import { Author } from '../../authors/entities/author.entity';

export async function seedQuotes(dataSource: DataSource) {
  const authorRepo = dataSource.getRepository(Author);
  const quoteRepo = dataSource.getRepository(Quote);

  console.log('🌱 Seeding authors and quotes...');

  // Create some authors first
  const authors = Array.from({ length: 10 }).map(() =>
    authorRepo.create({
      name: faker.person.fullName(),
      bio: faker.lorem.sentence(),
    }),
  );

  await authorRepo.save(authors);

  const categories = [
    'Motivation',
    'Life',
    'Love',
    'Success',
    'Wisdom',
    'Humor',
  ];

  // Create quotes linked to random authors
  const quotes = Array.from({ length: 30 }).map(() =>
    quoteRepo.create({
      text: faker.lorem.sentence({ min: 8, max: 20 }),
      author: faker.helpers.arrayElement(authors),
      category: faker.helpers.arrayElement(categories),
      tags: faker.helpers.arrayElements(
        [
          'inspiration',
          'daily',
          'mindset',
          'happiness',
          'growth',
          'goals',
          'quotes',
        ],
        { min: 1, max: 3 },
      ),
    }),
  );

  await quoteRepo.save(quotes);

  console.log(
    `✅ Seeded ${authors.length} authors and ${quotes.length} quotes`,
  );
}
