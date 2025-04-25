import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';

@Module({
  imports: [typeOrmModule.forFeature([Usuario])], // Importar el módulo TypeORM y el repositorio de Usuario
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
