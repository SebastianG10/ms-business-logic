import {Entity, model, property} from '@loopback/repository';

@model()
export class Garantia extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'string',
    required: true,
  })
  foto: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;


  constructor(data?: Partial<Garantia>) {
    super(data);
  }
}

export interface GarantiaRelations {
  // describe navigational properties here
}

export type GarantiaWithRelations = Garantia & GarantiaRelations;
