import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pelicula } from './pelicula.model';
@Injectable()
export class PeliculaService {
    constructor(@InjectModel('Pelicula') private readonly peliculaModel: Model<Pelicula>) {}

    async findAll(): Promise<Pelicula[]> {
        const peliculas = await this.peliculaModel.find();
        return peliculas
    }

    async findOne(id: string): Promise<Pelicula> {
        const pelicula = await this.peliculaModel.findById(id);
        return pelicula;
    }

    async create(pelicula: Pelicula): Promise<Pelicula> {
        const newPelicula =  new this.peliculaModel(pelicula);
        return  await newPelicula.save();
    }

    async delete(id: string): Promise<Pelicula> {
        return await this.peliculaModel.findByIdAndDelete(id); 
    }

    async update(id: string, pelicula: Pelicula): Promise<Pelicula> {
        const updateMovie = await this.peliculaModel.findByIdAndUpdate(id, pelicula, {new: true});
        return updateMovie;
    }
}
