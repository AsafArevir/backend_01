import { Controller, Delete, Get, NotFoundException, Param, Post, Put, Body, Res, HttpStatus, Query } from '@nestjs/common';
import { PeliculaService } from './pelicula.service';
import { Pelicula } from './pelicula.model';
@Controller('pelicula')
export class PeliculaController {
    constructor(private readonly PeliculaService: PeliculaService) {}

    @Get()
    async findAll(@Res() res) {
        //const movies = await this.PeliculaService.findAll();
        const peliculas = await this.PeliculaService.findAll();
        console.log(peliculas);
        return res.status(HttpStatus.OK).json({
            peliculas
        })
    }

    @Post('/create')
    async create(@Body() pelicula: Pelicula) {
        const nueva = await this.PeliculaService.create(pelicula);
        return nueva;
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id: string): Promise<Pelicula> {
        const pelicula = await this.PeliculaService.findOne(id);
        if(!pelicula) {
            return res.status(HttpStatus.NOT_FOUND).json({message: 'Pelicula no encontrada'})
        }else{
        return res.status(HttpStatus.OK).json({pelicula})
        }
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: string): Promise<Pelicula> {
        return await this.PeliculaService.delete(id);
    }

    @Put('/update/:id')
    async update(@Res() res,@Body() pelicula: Pelicula, @Param('id') id: string,){
        const updateMovie = await this.PeliculaService.update(id, pelicula);
        if (!updateMovie) {
            throw new NotFoundException('Película no encontrada');
        }
        return res.status(HttpStatus.OK).json({updateMovie});
    }
}
