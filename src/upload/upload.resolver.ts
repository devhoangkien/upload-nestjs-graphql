/*
------------------------------------------------------------------------------ 
Author: devhoangkien 
Website: https://devhoangkien.com
------------------------------------------------------------------------------
*/

import { ResponseSingleUpload } from './response';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UploadInputArgs, UploadMultipleInputArgs } from './uploadInputArgs';
import { UploadService } from './upload.service';

@Resolver()
export class UploadResolver {
  constructor(private readonly uploadService: UploadService) {}

  @Query(returns => String)
  async item(): Promise<string> {
    return 'Hello world!';
  }
  @Mutation(() => ResponseSingleUpload)
  async uploadSingleFiles(@Args() args: UploadInputArgs): Promise<any> {
    return  this.uploadService.uploadSingleGraphql(args)
  }

  @Mutation(() => [ResponseSingleUpload])
  async uploadMultipleFiles(@Args() args: UploadMultipleInputArgs): Promise<any> {
    return this.uploadService.uploadMultipleGraphql(args)
  }
}
