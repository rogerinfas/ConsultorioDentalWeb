import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])], // Importar el módulo TypeORM y el repositorio de Usuario
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
