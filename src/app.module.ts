import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PeliculaModule } from './pelicula/pelicula.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://asafdiaz7:dl0f5x4nZFxGn1o2@demo.tk2h16d.mongodb.net/?retryWrites=true&w=majority&appName=demo',
    ),
    PeliculaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
