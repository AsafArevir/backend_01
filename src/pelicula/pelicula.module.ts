import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pelicula, PeliculaSchema } from './pelicula.model';
import { PeliculaController } from './pelicula.controller';
import { PeliculaService } from './pelicula.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pelicula.name, schema: PeliculaSchema }]),
  ],
  controllers: [PeliculaController],
  providers: [PeliculaService]
})
export class PeliculaModule {}
