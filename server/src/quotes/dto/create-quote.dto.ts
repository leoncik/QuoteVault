import { IsString, IsOptional, IsArray } from 'class-validator';

export class CreateQuoteDto {
  @IsString()
  text: string;

  // Todo: change for: authorName
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
