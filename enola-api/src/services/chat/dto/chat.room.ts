import { BaseModel, ModelArray } from 'src/services/base/dto/base.model';

export interface Room extends BaseModel {
  name: string;
  isDefault: boolean;
}

// export interface Room extends BaseModel {
//   name: string;
//   isDefault: boolean;
// }
