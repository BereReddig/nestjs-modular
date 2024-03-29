import { Module } from '@nestjs/common';

import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule], //importamos el ProductsModule, que exporta el ProductsService para poder utilizar sus funciones
  controllers: [CustomerController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
