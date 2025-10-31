import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsArray, IsString } from 'class-validator';

export class FindAllQuotesDto {
  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Type(() => String) // ensures each value is a string
  tags?: string[];
}
