import { IsString, IsOptional, IsArray } from 'class-validator';

export class CreateQuoteDto {
  @IsString()
  text: string;

  @IsString()
  author: string;

  @IsString()
  category: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
