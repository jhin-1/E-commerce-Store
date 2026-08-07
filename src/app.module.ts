import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { AuthenticationController } from './modules/authentication/authentication.controller';
import { AuthenticationService } from './modules/authentication/authentication.service';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { BrandModule } from './modules/brand/brand.module';
import { OrderModule } from './modules/order/order.module';
import { env } from './config/env.service';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env.dev' , '.env.prod'], isGlobal: true }),
    UserModule,
    AuthenticationModule,
    ProductModule,
    CategoryModule,
    BrandModule,
    OrderModule,

    
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>("MONGO_URI") ,
      // checking the connection status
      onConnectionCreate: (connection: Connection) => {
      connection.on('connected', () => console.log('connected to MongoDB 👏'));
      return connection;
    },
    }),
    inject: [ConfigService],
  }),



],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
