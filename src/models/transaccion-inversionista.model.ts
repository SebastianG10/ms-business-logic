import {Entity, model, property} from '@loopback/repository';

@model()
export class TransaccionInversionista extends Entity {
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
  interes: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;


  constructor(data?: Partial<TransaccionInversionista>) {
    super(data);
  }
}

export interface TransaccionInversionistaRelations {
  // describe navigational properties here
}

export type TransaccionInversionistaWithRelations = TransaccionInversionista & TransaccionInversionistaRelations;
