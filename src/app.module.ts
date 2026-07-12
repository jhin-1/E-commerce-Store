import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env.dev' , '.env.prod'], isGlobal: true }),
    UserModule,
    
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('MONGO_URI'),
      // checking the connection status
      onConnectionCreate: (connection: Connection) => {
      connection.on('connected', () => console.log('connected to MongoDB'));
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
