# 🦷 Elicitación de Requerimientos - OdontoWeb

## 📌 Nombre del proyecto
**OdontoWeb**  
Sistema de gestión para consultorios dentales enfocado en agendamiento de citas, gestión de pacientes y control administrativo básico.

---

## 🎯 Objetivo General
Desarrollar una aplicación web que permita al personal del consultorio:
- Gestionar citas dentales.
- Mantener historial de pacientes.
- Controlar disponibilidad de odontólogos.
- Llevar un control administrativo básico.

---

## 👥 Tipos de Usuarios
1. **Administrador del consultorio**
2. **Recepcionista**
3. **Odontólogo**
4. **Paciente** (opcional en la primera versión)

---

## 🧩 Módulos Principales

### 1. 🗓️ Módulo de Citas
- Crear, editar y cancelar citas.
- Visualización del calendario semanal/mensual.
- Filtros por odontólogo, especialidad y estado de cita.
- Notificaciones por correo o WhatsApp (*futuro*).
- Bloqueo de horarios por ausencia/vacaciones.

### 2. 👨‍⚕️ Módulo de Odontólogos
- Registro de odontólogos y especialidades.
- Configuración de horarios de atención.
- Asignación de citas según disponibilidad.

### 3. 🧾 Módulo de Pacientes
- Registro de pacientes con datos personales.
- Historial clínico (tratamientos realizados, observaciones).
- Contacto de emergencia.
- Subida de archivos (exámenes, radiografías).

### 4. 🧑‍💼 Módulo de Usuarios
- CRUD de usuarios del sistema.
- Roles y permisos: admin, recepcionista, odontólogo.
- Cambio de contraseña y recuperación vía email.

### 5. 📊 Dashboard
- Estadísticas: citas por día, cancelaciones, odontólogos más activos.
- Alertas sobre citas próximas o ausencias.

### 6. 💵 Módulo de Pagos (*opcional/futuro*)
- Registro de pagos por tratamiento.
- Estado de cuenta del paciente.
- Reportes de ingresos mensuales.

---

## 🧪 Funcionalidades Extra Deseables (Futuras versiones)
- Integración con Google Calendar.
- Firma digital de consentimientos.
- Autogestión de citas por parte del paciente.
- Chat interno entre usuarios del sistema.

---

## 🛠️ Tecnologías Sugeridas
- **Backend:** NestJs
- **Frontend:** HTML + Bootstrap / Angular / React (SPA)
- **Base de datos:** MySQL / PostgreSQL
- **Autenticación:** JWT o sesiones
- **Hosting sugerido:** Render / Railway / Heroku / Hostinger

---

## 🔒 Seguridad
- Encriptación de contraseñas (bcrypt o similar).
- Validación de formularios.
- Protección contra ataques de inyección SQL y CSRF.

---

## 🕐 MVP - Mínimo Producto Viable
Prioridades para la versión inicial:
1. Gestión de citas  
2. Gestión de odontólogos  
3. Gestión de pacientes  
4. Autenticación de usuarios  
5. Calendario funcional

---

> Documento elaborado como parte del levantamiento inicial de requerimientos para el desarrollo de la aplicación web **OdontoWeb**.
