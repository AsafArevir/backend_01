import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pelicula extends Document {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    image: string;
}

export const PeliculaSchema = SchemaFactory.createForClass(Pelicula);
