import * as mongoose from 'mongoose';
import { ObjectType, Field, Int } from '@nestjs/graphql';

export const CatSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
});

export interface Cat extends mongoose.Document {
    readonly name: string,
    readonly age: number,
    readonly breed: string
}

@ObjectType()
export class CreateCatDto {
    @Field()
    name: string;
    @Field( () => Int)
    age: number;
    @Field()
    breed: string;
}