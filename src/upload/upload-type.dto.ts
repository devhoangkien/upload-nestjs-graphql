/*
------------------------------------------------------------------------------ 
Author: devhoangkien 
Website: https://devhoangkien.com 

------------------------------------------------------------------------------
*/
import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  IsEnum,
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
