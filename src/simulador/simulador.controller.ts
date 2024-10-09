import { Controller, Get } from '@nestjs/common';

@Controller()
export class SimuladorController {
  constructor() {}

  @Get('/simulador')
  postSimulador(): string {
    return 'Simulador';
  }
}
