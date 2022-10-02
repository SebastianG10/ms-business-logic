import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Garantia, GarantiaRelations} from '../models';

export class GarantiaRepository extends DefaultCrudRepository<
  Garantia,
  typeof Garantia.prototype.id,
  GarantiaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Garantia, dataSource);
  }
}
