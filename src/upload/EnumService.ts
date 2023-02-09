/*
------------------------------------------------------------------------------ 
Author: devhoangkien 
Website: https://devhoangkien.com
------------------------------------------------------------------------------
*/
import { registerEnumType } from "@nestjs/graphql";

export enum EnumService {
  Cloudinary = "Cloudinary",
  S3Storage = "S3storage",
  Web3Storage = "Web3storage",
}

export enum EnumFolders {
  Avatar = "avatar",
  Background = "background",
  Gallery = "gallery",
}

registerEnumType(EnumService, {
  name: "EnumService",
});
