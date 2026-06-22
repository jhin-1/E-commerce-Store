import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot({ envFilePath: ['.env.dev' , '.env.prod'], isGlobal: true }),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
