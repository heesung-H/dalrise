import { BaseModel, ModelArray } from './base.model';

interface PersistedModelArrayOptions {
  saveIntervalSeconds?: number;
  dataDir?: string;
}

abstract class PersistedModelArray<T extends BaseModel> extends ModelArray<T> {
  protected dirtyIds: number[] = [];

  constructor() {
    // options: PersistedModelArrayOptions
    super();
  }

  save(id: number) {
    this.dirtyIds.push(id);
  }
}

export class ModelArrayInFile<
  T extends BaseModel,
> extends PersistedModelArray<T> {}
