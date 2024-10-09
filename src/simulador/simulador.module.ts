import { Module } from '@nestjs/common';
import { SimuladorController } from './simulador.controller';

@Module({
  imports: [],
  controllers: [SimuladorController],
})
export class AppModule {}
