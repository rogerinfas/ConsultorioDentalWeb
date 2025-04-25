import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const existe = await this.usuarioRepository.findOne({
      where: [
        { id_usuario: createUsuarioDto.id_usuario },
        { email: createUsuarioDto.email },
      ],
    });

    if (existe) {
      throw new BadRequestException('Ya existe un usuario con ese DNI o email');
    }

    const hashedPassword = await bcrypt.hash(createUsuarioDto.passwordHash, 10);
    const nuevoUsuario = this.usuarioRepository.create({
      ...createUsuarioDto,
      passwordHash: hashedPassword,
    });

    return this.usuarioRepository.save(nuevoUsuario);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id_usuario: id },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    return usuario;
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);

    // Si incluye nueva contraseña, la hasheamos
    if (updateUsuarioDto.passwordHash) {
      updateUsuarioDto.passwordHash = await bcrypt.hash(updateUsuarioDto.passwordHash, 10);
    }

    const actualizado = this.usuarioRepository.merge(usuario, updateUsuarioDto);
    return this.usuarioRepository.save(actualizado);
  }

  async remove(id: string): Promise<{ message: string }> {
    const usuario = await this.findOne(id);
    await this.usuarioRepository.remove(usuario);
    return { message: `Usuario con ID ${id} eliminado correctamente` };
  }
}
