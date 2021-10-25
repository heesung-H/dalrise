import { Injectable } from '@nestjs/common';
import { Pokemon } from './dto/Pokemon';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PokemonService {
  //constructor() {}

  getList(): Pokemon[] {
    const rawdata = fs.readFileSync(
      path.resolve('') + '\\dist\\config\\pokemon.json',
      {
        encoding: 'utf-8',
      },
    );

    return JSON.parse(rawdata);
  }
}
