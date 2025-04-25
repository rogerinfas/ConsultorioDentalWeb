import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  // Inyectar el repositorio de Usuario para poder realizar operaciones en la base de datos
  // El repositorio es una abstracción que permite interactuar con la base de datos de manera más sencilla
  // y sin tener que escribir consultas SQL directamente.
  constructor(@InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>) {}
  
  create(createUsuarioDto: CreateUsuarioDto) {
    const nuevoUsuario = this.usuarioRepository.create(createUsuarioDto);
    return this.usuarioRepository.save(nuevoUsuario);
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
