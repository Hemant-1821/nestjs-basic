import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule} from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ GraphQLModule.forRoot({
             autoSchemaFile: 'schema.gql',
             }),
             ProductsModule,
             CatsModule,
             ConfigModule.forRoot({
              envFilePath: '.env',
             }),
             MongooseModule.forRoot(process.env.API_KEY_MONGO),
             AuthModule,
             UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
