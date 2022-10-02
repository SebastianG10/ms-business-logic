import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Cobrador, CobradorRelations} from '../models';

export class CobradorRepository extends DefaultCrudRepository<
  Cobrador,
  typeof Cobrador.prototype.cedula,
  CobradorRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Cobrador, dataSource);
  }
}
