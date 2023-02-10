/*
------------------------------------------------------------------------------ 
Author: devhoangkien 
Website: https://devhoangkien.com
------------------------------------------------------------------------------
*/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { graphqlUploadExpress } from "graphql-upload-minimal";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // only using graphql
  app.use((req: any, res: any, next: any) => {
    if (req.url.includes('/graphql')) {
      // only graphql request
      graphqlUploadExpress({
        maxFileSize: 1000000,
        maxFiles: 10,
      })(req, res, next);
    } else {
      next();
    }
  });
  await app.listen(3000);
}
bootstrap();
