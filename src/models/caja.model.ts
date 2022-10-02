import {Entity, model, property} from '@loopback/repository';

@model()
export class Caja extends Entity {
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
  fondos: number;

  @property({
    type: 'number',
    required: true,
  })
  dineroCirculado: number;

  @property({
    type: 'string',
  })
  codigoQR?: string;

  @property({
    type: 'string',
    required: true,
  })
  modalidad: string;

  @property({
    type: 'string',
    required: true,
  })
  moneda: string;

  @property({
    type: 'string',
  })
  ciudad?: string;


  constructor(data?: Partial<Caja>) {
    super(data);
  }
}

export interface CajaRelations {
  // describe navigational properties here
}

export type CajaWithRelations = Caja & CajaRelations;
