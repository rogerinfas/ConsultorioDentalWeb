import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Usuarios')
export class Usuario {
    @PrimaryColumn({ length: 15 })
    id_usuario: string;

    @Column({ length: 100 })
    nombre: string;

    @Column({ length: 100 })
    apellido: string;

    @Column({ length: 100, unique: true })
    email: string;

    @Column({ length: 20, nullable: true })
    telefono: string;

    @Column({ length: 255 })
    passwordHash: string;

    @Column({
        type: 'enum',
        enum: ['admin', 'recepcionista', 'odontologo'],
    })
    rol: 'admin' | 'recepcionista' | 'odontologo';

    @Column({
        type: 'enum',
        enum: ['activo', 'inactivo'],
        default: 'activo',
    })
    estado: 'activo' | 'inactivo';

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fechaCreacion: Date;

}
