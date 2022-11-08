import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { CoffeeRefactor1667816151700 } from 'src/migrations/1667816151700-CoffeeRefactor';
import { SchemaSync1667816994016 } from 'src/migrations/1667816994016-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1667816151700, SchemaSync1667816994016]
});
