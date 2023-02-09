/*
------------------------------------------------------------------------------ 
Author: devhoangkien 
Website: https://devhoangkien.com
------------------------------------------------------------------------------
*/

import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class ResponseSingleUpload {
 
  @Field(() => String)
  url!: String;


  @Field(() => String)
  format!: String;


  @Field(() => String)
  folder!: String;


  @Field(() => Number)
  width!: Number;
  

  @Field(() => Number)
  height!: Number;


  @Field(() => Number)
  bytes!: Number;
  
}
