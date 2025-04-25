export class CreateUsuarioDto {
    id_usuario: string; // ID del usuario, debe ser único y no nulo
    nombre: string; // Nombre del usuario, no puede ser nulo
    apellido: string; // Apellido del usuario, no puede ser nulo
    email: string; // Correo electrónico del usuario, debe ser único y no nulo
    telefono?: string; // Teléfono del usuario, puede ser nulo
    passwordHash: string; // Contraseña encriptada del usuario, no puede ser nulo
    rol: 'admin' | 'recepcionista' | 'odontologo'; // Rol del usuario, no puede ser nulo
}
