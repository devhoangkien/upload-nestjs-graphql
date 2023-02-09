/*
------------------------------------------------------------------------------ 
Author: devhoangkien 
Website: https://devhoangkien.com
------------------------------------------------------------------------------
*/

import { ResponseSingleUpload } from './response';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UploadInputArgs } from './uploadInputArgs';
import { UploadService } from './upload.service';

@Resolver()
export class UploadResolver {
  constructor(private readonly uploadService: UploadService) {}

  @Query(returns => String) // Bắt buộc phải có @Query và có kiểu trả về bên trong nếu muốn generate
  // Tên query bên phía schema sẽ dựa theo tên function
  // Nestjs sử dụng typescript nên bạn sử dụng Promise<string> để bắt buộc kiểu trả về, nếu trả về kiểu INT sẽ báo lỗi
  async item(): Promise<string> {
    return 'Hello world!';
  }
  @Mutation(() => ResponseSingleUpload)
  async uploadSingleFiles(@Args() args: UploadInputArgs): Promise<any> {
    return  this.uploadService.uploadSingleGraphql(args)
  }
}
