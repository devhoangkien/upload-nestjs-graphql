/*
------------------------------------------------------------------------------ 
Author: devhoangkien 
Website: https://devhoangkien.com
------------------------------------------------------------------------------
*/

import { Injectable } from '@nestjs/common';
import { EnumService } from './EnumService';
import { Readable } from 'stream';
import toStream = require('buffer-to-stream');
import { v2 } from 'cloudinary';

@Injectable()
export class UploadService {

    /**
   * @upload GRAPHQL
   * @param files upload  file with multer with GRAPHQL
   * @param setting setting folder, service upload
   * @returns 
   */
    async uploadSingleGraphql(
      args: any
    ): Promise<any>
    {
      if(args.setting.uploadService === EnumService.Cloudinary){
        return this.uploadSingleToCloudinaryGraphql(args)
      }
  
      if(args.setting.uploadService === EnumService.S3Storage){
        return 
      }
  
      if(args.setting.uploadService === EnumService.Web3Storage){
        return 
      }
    }

     /**
   * 
   * @param args upload with GRAPHQL
   * @returns 
   */
  // upload single to cloudinary with graphql
  async uploadSingleToCloudinaryGraphql(args: any): Promise<any>{
    const {  createReadStream } = await args.file
    const buffer = await this.streamToBuffer(createReadStream())
    return this.cloudinary(buffer, args.setting.folder)
  }

  
  async streamToBuffer(stream: Readable): Promise<Buffer> {
    const buffer: Uint8Array[] = [];

    return new Promise((resolve, reject) =>
      stream
        .on('error', (error) => reject(error))
        .on('data', (data) => buffer.push(data))
        .on('end', () => resolve(Buffer.concat(buffer))),
    );
  }

  async cloudinary(buffer: any, folder: any){
    return await new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream({folder: folder},(error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
      toStream(buffer).pipe(upload);
    });
  }
}
