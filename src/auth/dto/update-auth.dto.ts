import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { create } from 'domain';

export class UpdateAuthDto extends PartialType(CreateUserDto) {}
