import { ApiProperty } from '@nestjs/swagger';
export class CreateAboutDTO {
  @apiProperty()
  readonly text: string;
}
