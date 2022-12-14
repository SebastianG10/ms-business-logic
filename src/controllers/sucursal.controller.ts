import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Sucursal} from '../models';
import {SucursalRepository} from '../repositories';

export class SucursalController {
  constructor(
    @repository(SucursalRepository)
    public sucursalRepository : SucursalRepository,
  ) {}

  @post('/sucursal')
  @response(200, {
    description: 'Sucursal model instance',
    content: {'application/json': {schema: getModelSchemaRef(Sucursal)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sucursal, {
            title: 'NewSucursal',
            exclude: ['id'],
          }),
        },
      },
    })
    sucursal: Omit<Sucursal, 'id'>,
  ): Promise<Sucursal> {
    return this.sucursalRepository.create(sucursal);
  }

  @get('/sucursal/count')
  @response(200, {
    description: 'Sucursal model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Sucursal) where?: Where<Sucursal>,
  ): Promise<Count> {
    return this.sucursalRepository.count(where);
  }

  @get('/sucursal')
  @response(200, {
    description: 'Array of Sucursal model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Sucursal, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Sucursal) filter?: Filter<Sucursal>,
  ): Promise<Sucursal[]> {
    return this.sucursalRepository.find(filter);
  }

  @patch('/sucursal')
  @response(200, {
    description: 'Sucursal PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sucursal, {partial: true}),
        },
      },
    })
    sucursal: Sucursal,
    @param.where(Sucursal) where?: Where<Sucursal>,
  ): Promise<Count> {
    return this.sucursalRepository.updateAll(sucursal, where);
  }

  @get('/sucursal/{id}')
  @response(200, {
    description: 'Sucursal model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Sucursal, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Sucursal, {exclude: 'where'}) filter?: FilterExcludingWhere<Sucursal>
  ): Promise<Sucursal> {
    return this.sucursalRepository.findById(id, filter);
  }

  @patch('/sucursal/{id}')
  @response(204, {
    description: 'Sucursal PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sucursal, {partial: true}),
        },
      },
    })
    sucursal: Sucursal,
  ): Promise<void> {
    await this.sucursalRepository.updateById(id, sucursal);
  }

  @put('/sucursal/{id}')
  @response(204, {
    description: 'Sucursal PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sucursal: Sucursal,
  ): Promise<void> {
    await this.sucursalRepository.replaceById(id, sucursal);
  }

  @del('/sucursal/{id}')
  @response(204, {
    description: 'Sucursal DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sucursalRepository.deleteById(id);
  }
}
