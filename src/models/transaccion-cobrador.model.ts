import {Entity, model, property} from '@loopback/repository';

@model()
export class TransaccionCobrador extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  descripcion: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;


  constructor(data?: Partial<TransaccionCobrador>) {
    super(data);
  }
}

export interface TransaccionCobradorRelations {
  // describe navigational properties here
}

export type TransaccionCobradorWithRelations = TransaccionCobrador & TransaccionCobradorRelations;
