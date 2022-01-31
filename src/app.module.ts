import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.modules';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb://mongodb:27017/products'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
