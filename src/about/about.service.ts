import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { about } from './interfaces/about.interface';
import { CreateAboutDTO } from './dto/about.dto';

@Injectable()
export class AboutService {
  constructor(@InjectModel('About') private AboutModel : Model<About>){}
  // 생성
  async create(CreateAboutDTO: CreateAboutDTO): Promise<any> {
    const createdCat = new this.AboutModel(CreatedAboutDTO);
    return createCat.save();
  }
  // 전체조회 
  async findAll(): Promise<any> {
    return await this.AboutModel.find().exec();
  }
  // 아이디조회
  async findById(id): Promise<About> {
    const customer = await this.AboutModel.findById(id).exec();
    return customer;
  }
  // 조건에 따른 about 모델 조회
  async find(req): Promise<About> {
    return await this.AboutModel.find(req).exec();
  }
  // 수정
  async update(id, CreateAboutDTO: CreateAboutDTO): Promise<any> {
    return await this.AboutModel.findByIdAndUpdate(id, CreateAboutDTO, {new: true});
  }
  // 삭제
  async delete(id): Promise<any> {
    return await this.AboutModel.findByIdAndRemove(id);
  }
  
}
