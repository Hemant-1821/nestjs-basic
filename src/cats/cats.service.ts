import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatInput } from './cats.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CatInput): Promise<string> {
    try {
      const createdCat = new this.catModel(createCatDto);
      const result =  await createdCat.save();
      return result._id
    }
    catch(Error) {
      throw new Error('Something Failed!')
    }
  }

  async findAll(): Promise<Cat[]> {
    return await  this.catModel.find().exec();
  }
}