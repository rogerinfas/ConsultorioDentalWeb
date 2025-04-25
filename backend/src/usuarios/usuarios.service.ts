import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
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
    private readonly usuarioRepo: Repository<Usuario>,
  ) {}
  /* NO BORRAR
  async create(createDto: CreateUsuarioDto): Promise<Usuario> {
    await this.validarExistencia(createDto.id_usuario, createDto.email);

    const nuevo = this.usuarioRepo.create({
      ...createDto,
      passwordHash: await this.hashear(createDto.passwordHash),
    });

    return this.usuarioRepo.save(nuevo);
  }*/
    async create(createDto: CreateUsuarioDto): Promise<{ message: string }> {
      await this.validarExistencia(createDto.id_usuario, createDto.email);
    
      const nuevo = this.usuarioRepo.create({
        ...createDto,
        passwordHash: await this.hashear(createDto.passwordHash),
      });
    
      await this.usuarioRepo.save(nuevo);
    
      return { message: `Usuario ${nuevo.id_usuario} creado correctamente` };
    }
    

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepo.find();
  }

  async findOne(id: string): Promise<Usuario> {
    const user = await this.usuarioRepo.findOne({ where: { id_usuario: id } });

    if (!user) throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    return user;
  }

  async update(id: string, updateDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);

    if (updateDto.passwordHash) {
      updateDto.passwordHash = await this.hashear(updateDto.passwordHash);
    }

    const actualizado = this.usuarioRepo.merge(usuario, updateDto);
    return this.usuarioRepo.save(actualizado);
  }

  async remove(id: string): Promise<{ message: string }> {
    const usuario = await this.findOne(id);
    await this.usuarioRepo.remove(usuario);
    return { message: `Usuario con ID ${id} eliminado correctamente` };
  }

  // MÉTODOS PRIVADOS
  private async validarExistencia(id: string, email: string) {
    const existe = await this.usuarioRepo.findOne({
      where: [{ id_usuario: id }, { email }],
    });

    if (existe) {
      throw new ConflictException('Ya existe un usuario con ese DNI o email');
    }
  }

  private async hashear(pass: string): Promise<string> {
    return bcrypt.hash(pass, 10);
  }
}
