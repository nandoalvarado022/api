import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SimuladorController } from './simulador/simulador.controller';

@Module({
  imports: [],
  controllers: [AppController, SimuladorController],
  providers: [AppService],
})
export class AppModule {}
