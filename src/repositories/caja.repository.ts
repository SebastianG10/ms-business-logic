import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Caja, CajaRelations} from '../models';

export class CajaRepository extends DefaultCrudRepository<
  Caja,
  typeof Caja.prototype.id,
  CajaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Caja, dataSource);
  }
}
