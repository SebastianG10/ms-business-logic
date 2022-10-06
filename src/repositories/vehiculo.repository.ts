import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations, Cobrador} from '../models';
import {CobradorRepository} from './cobrador.repository';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.placa,
  VehiculoRelations
> {

  public readonly cobrador: HasOneRepositoryFactory<Cobrador, typeof Vehiculo.prototype.placa>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('CobradorRepository') protected cobradorRepositoryGetter: Getter<CobradorRepository>,
  ) {
    super(Vehiculo, dataSource);
    this.cobrador = this.createHasOneRepositoryFactoryFor('cobrador', cobradorRepositoryGetter);
    this.registerInclusionResolver('cobrador', this.cobrador.inclusionResolver);
  }
}
