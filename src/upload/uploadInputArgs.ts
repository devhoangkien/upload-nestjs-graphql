/*
------------------------------------------------------------------------------ 
Author: devhoangkien 
Website: https://devhoangkien.com
------------------------------------------------------------------------------
*/
import {GraphQLUpload, Upload } from 'graphql-upload-minimal';

import {  Field, ArgsType } from '@nestjs/graphql';
import { UploadParamInput } from './upload-type.dto';

@ArgsType()
export class UploadInputArgs {
 
  @Field(() => UploadParamInput, { nullable: false })
  setting!: UploadParamInput

  @Field(() => GraphQLUpload)
  file!: Promise<Upload>;
}



@ArgsType()
export class UploadMultipleInputArgs {
 
  @Field(() => UploadParamInput, { nullable: false })
  setting!: UploadParamInput

  @Field(() => [GraphQLUpload])
  files!: Promise<[Upload]>;
}