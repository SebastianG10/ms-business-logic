import {Entity, model, property} from '@loopback/repository';

@model()
export class Prestamo extends Entity {
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
    type: 'date',
    required: true,
  })
  fechaInicial: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaFinal: string;

  @property({
    type: 'number',
    required: true,
  })
  tasaInteres: number;

  @property({
    type: 'boolean',
    required: true,
  })
  estadoPago: boolean;


  constructor(data?: Partial<Prestamo>) {
    super(data);
  }
}

export interface PrestamoRelations {
  // describe navigational properties here
}

export type PrestamoWithRelations = Prestamo & PrestamoRelations;
