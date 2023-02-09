/*
------------------------------------------------------------------------------ 
Author: devhoangkien 
Website: https://devhoangkien.com
------------------------------------------------------------------------------
*/

import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module, Scope } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UploadModule } from './upload/upload.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganInterceptor, MorganModule } from "nest-morgan";

@Module({
  imports: [
    UploadModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),  
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
      
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
