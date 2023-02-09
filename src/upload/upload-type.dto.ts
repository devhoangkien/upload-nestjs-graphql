/*
------------------------------------------------------------------------------ 
Author: devhoangkien 
Website: https://devhoangkien.com 

------------------------------------------------------------------------------
*/
import { InputType, Field, Scalar } from '@nestjs/graphql';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsDate,
  ValidateNested,
  IsJSON,
  IsEnum,
  IsEmail,
} from "class-validator";
import { EnumService, EnumFolders } from './EnumService';


@InputType()
class UploadParamInput {

  
  @IsEnum(EnumService)
  @Field(() => EnumService)
  uploadService!: EnumService;


  @IsString()
  @Field(() => String)
  folder!: string;
}
export { UploadParamInput };
