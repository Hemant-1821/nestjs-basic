import * as mongoose from 'mongoose';
import { ObjectType, Field, Int, InputType } from 'type-graphql';

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
export class CatType {
    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly age: number;
    @Field()
    readonly breed: string;
}

@InputType()
export class CatInput {
    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly age: number;
    @Field()
    readonly breed: string;
}