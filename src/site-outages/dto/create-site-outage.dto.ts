import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSiteOutageDto {
  id: string;
  name: string;
  begin: string;
  end: string;
}
