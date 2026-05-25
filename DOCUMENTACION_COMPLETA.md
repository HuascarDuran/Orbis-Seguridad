# 📖 DOCUMENTACIÓN COMPLETA - PROYECTO ORBIS-SEGURIDAD

**Proyecto:** Sistema de Gestión Integral de Empresas - Orbis Seguridad  
**Fecha:** Mayo 2026  
**Propósito:** Documentación exhaustiva para trabajar con Claude y otros desarrolladores  

---

## 📋 TABLA DE CONTENIDOS

1. [🎯 Resumen Ejecutivo](#resumen-ejecutivo)
2. [🏗️ Arquitectura General del Proyecto](#arquitectura-general)
3. [🛠️ Stack Tecnológico](#stack-tecnológico)
4. [📁 Estructura de Directorios](#estructura-de-directorios)
5. [⚙️ Backend - NestJS](#backend)
6. [💻 Frontend - React](#frontend)
7. [🗄️ Base de Datos](#base-de-datos)
8. [🔐 Autenticación y Seguridad](#autenticación-y-seguridad)
9. [🔌 Endpoints API Principales](#endpoints-api)
10. [🔄 Flujos de Datos Principales](#flujos-de-datos)
11. [🚀 Guía de Setup y Ejecución](#setup-y-ejecución)
12. [⚠️ Problemas Conocidos y Soluciones](#problemas-conocidos)
13. [📝 Convenciones y Patrones](#convenciones-y-patrones)
14. [📚 Recursos Adicionales](#recursos-adicionales)

---

## 🎯 RESUMEN EJECUTIVO

### ¿Qué es Orbis-Seguridad?

Sistema integral para gestionar un catálogo de empresas con funcionalidades:
- **Gestión de Empresas**: Registro, búsqueda, filtrado, edición de información empresarial
- **Gestión de Usuarios**: Control de acceso basado en roles (5 niveles)
- **Dashboard de Administración**: Panel para SUPERADMIN y ADMIN_EMPRESAS
- **Análisis de Datos**: Datamart con estadísticas agregadas
- **Notificaciones**: Sistema de email para registros y cambios
- **Tareas Automáticas**: Procesos programados diarios

### Características Principales

| Característica | Descripción | Estado |
|---|---|---|
| **Multi-rol** | 5 roles con permisos granulares | ✅ Completado |
| **JWT Auth** | Autenticación segura con tokens | ✅ Completado |
| **Base de datos relacional** | PostgreSQL con +30 entidades | ✅ Completado |
| **API REST** | +50 endpoints documentados con Swagger | ✅ Completado |
| **Panel Admin** | Dashboard responsive para gestión | 🔄 En desarrollo |
| **Búsqueda avanzada** | Filtros por sede, tamaño, rubro | ✅ Completado |
| **Notificaciones email** | Confirmación de registros | ✅ Completado |

### Escala del Proyecto

```
Backend:    ~15,000+ líneas de código TypeScript
Frontend:   ~10,000+ líneas de código JavaScript/React
Total:      ~25,000+ líneas de código
Módulos:    28+ en backend
Componentes: 100+ en frontend
Endpoints:  50+ endpoints REST
```

---

## 🏗️ ARQUITECTURA GENERAL DEL PROYECTO

### Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────────┐
│                      CLIENTE (NAVEGADOR)                    │
│            Frontend React - Orbis Seguridad App              │
│  (Component, Routes, Services, State Management)             │
└──────────────────────┬──────────────────────────────────────┘
                       │ HTTP/HTTPS
                       │ JSON (Request/Response)
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                  BACKEND (NestJS Server)                     │
│  Port: 3000 | TypeScript | Arquitectura Modular             │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  API Layer (Controllers)                             │   │
│  │  ├─ AuthController (Login, Register, JWT)          │   │
│  │  ├─ EmpresasController (CRUD Empresas)             │   │
│  │  ├─ UsuariosController (Gestión de usuarios)       │   │
│  │  ├─ DashboardController (Analytics)                │   │
│  │  └─ FormularioController (Registro público)        │   │
│  └─────────────────────────────────────────────────────┘   │
│                         │                                    │
│  ┌─────────────────────▼──────────────────────────────┐    │
│  │  Business Logic Layer (Services)                    │    │
│  │  ├─ AuthService (Autenticación, JWT)              │    │
│  │  ├─ EmpresasService (Lógica de negocios)          │    │
│  │  ├─ UsuariosService (Gestión de usuarios)         │    │
│  │  ├─ EmailService (Notificaciones)                 │    │
│  │  └─ DashboardService (Cálculos y reportes)        │    │
│  └─────────────────────────────────────────────────────┘    │
│                         │                                    │
│  ┌─────────────────────▼──────────────────────────────┐    │
│  │  Data Access Layer (Repositories/ORM)               │    │
│  │  ├─ TypeORM Entities                               │    │
│  │  ├─ Query Builder                                  │    │
│  │  └─ Database Migrations                            │    │
│  └─────────────────────────────────────────────────────┘    │
│                         │                                    │
│  ┌─────────────────────▼──────────────────────────────┐    │
│  │  Security & Middleware                              │    │
│  │  ├─ JWT Guard (Autenticación)                      │    │
│  │  ├─ Role Guard (Autorización)                      │    │
│  │  ├─ Validation Pipes (DTO Validation)              │    │
│  │  └─ CORS Middleware                                │    │
│  └─────────────────────────────────────────────────────┘    │
└──────────────────────┬──────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
   PostgreSQL    Nodemailer      Firebase
   (Database)    (Email)         (Storage)
```

### Flujo de Solicitud HTTP

```
1. Cliente (React)
   │
   ├─► Axios Request con JWT en headers
   │
2. Backend (NestJS)
   │
   ├─► Middleware CORS
   ├─► Guards (JwtGuard, RolesGuard)
   ├─► Controller recibe request
   ├─► Service realiza lógica de negocio
   ├─► Repository accede a DB
   ├─► Respuesta JSON formateada
   │
3. Cliente (React)
   │
   ├─► Maneja respuesta
   ├─► Actualiza estado (useState/Context)
   ├─► Re-render componentes
   └─► Muestra resultado al usuario
```

---

## 🛠️ STACK TECNOLÓGICO

### Backend Stack

| Layer | Tecnología | Versión | Propósito |
|-------|-----------|---------|----------|
| **Framework** | NestJS | 11.0.1 | Framework backend modular |
| **Lenguaje** | TypeScript | 5.7.3 | Tipado estático |
| **Runtime** | Node.js | 22+ | Entorno de ejecución |
| **ORM** | TypeORM | 0.3.26 | Mapeo objeto-relacional |
| **BD** | PostgreSQL | 14+ | Base de datos relacional |
| **Autenticación** | JWT + Passport | 11.0.0 | Autenticación segura |
| **Validación** | class-validator | 0.14.2 | Validación de DTOs |
| **Email** | Nodemailer | 7.0.5 | Envío de emails |
| **Scheduler** | @nestjs/schedule | 6.0.1 | Tareas programadas |
| **API Docs** | Swagger/OpenAPI | 11.2.0 | Documentación interactiva |
| **Seguridad** | bcrypt | 6.0.0 | Hash de contraseñas |

### Frontend Stack

| Layer | Tecnología | Versión | Propósito |
|-------|-----------|---------|----------|
| **Framework** | React | 18.0.0 | UI library |
| **Routing** | React Router | 6.0.0 | Navegación SPA |
| **HTTP Client** | Axios | 1.8.4 | Llamadas HTTP |
| **Styling** | Tailwind CSS | 3.4.17 | Framework CSS utility-first |
| **Animaciones** | Framer Motion | 12.15.0 | Animaciones suaves |
| **Iconos** | React Icons + Lucide | 5.5.0 | Librerías de iconos |
| **Formularios** | React Hook Form | 7.74.0 | Gestión de formularios |
| **UI Extra** | SweetAlert2 | 11.26.24 | Modales y alertas |
| **Storage** | Firebase | 11.6.0 | Almacenamiento en nube |
| **Imágenes** | Cloudinary | 1.21.0 | Optimización de imágenes |
| **Build Tool** | Create React App | 5.0.1 | Tooling de desarrollo |

### Herramientas de Desarrollo

```bash
# Backend
- ESLint: Linting de código
- Prettier: Formateo de código
- Jest: Testing
- TypeScript: Tipado estático

# Frontend
- ESLint: Linting de código
- React DevTools: Debug
- Redux DevTools: State management (si aplica)
```

---

## 📁 ESTRUCTURA DE DIRECTORIOS

### Estructura Completa

```
Orbis-Seguridad/
│
├── 📄 DOCUMENTACION_COMPLETA.md          ← Este archivo
├── 📄 BACKEND.md                         ← Doc específica backend
├── 📄 FRONTEND.md                        ← Doc específica frontend
├── 📄 CONTEXTO_AVANCE_COMPLETO.md        ← Historia del proyecto
│
├── Backend/                              ← Servidor NestJS
│   ├── 📄 package.json                   ← Dependencias
│   ├── 📄 tsconfig.json                  ← Configuración TypeScript
│   ├── 📄 tsconfig.build.json            ← Build config
│   ├── 📄 nest-cli.json                  ← CLI NestJS
│   ├── 📄 Dockerfile                     ← Containerización
│   ├── 📄 README.md
│   │
│   └── src/
│       ├── 📄 main.ts                    ← Entry point
│       ├── 📄 app.module.ts              ← Root module
│       ├── 📄 app.controller.ts          ← Root controller
│       │
│       ├── app/                          ← Core features
│       │   └── services/
│       │       ├── auth/                 ← Autenticación
│       │       ├── formulario/           ← Registro público
│       │       ├── dashboard/            ← Analytics
│       │       └── solicitudes-temporales/
│       │
│       ├── common/                       ← Código compartido
│       │   ├── classes/
│       │   ├── services/
│       │   └── utils/
│       │
│       ├── config/                       ← Configuración
│       │   ├── config.module.ts
│       │   ├── config.service.ts
│       │   └── config.validation.ts
│       │
│       ├── database/                     ← BD y migraciones
│       │   ├── database.module.ts
│       │   └── migrations/
│       │
│       ├── modules/                      ← Módulos principales
│       │   ├── usuarios/
│       │   │   ├── usuarios.service.ts
│       │   │   ├── usuarios.controller.ts
│       │   │   ├── usuarios.module.ts
│       │   │   ├── dto/
│       │   │   │   ├── create-usuario.dto.ts
│       │   │   │   └── update-usuario.dto.ts
│       │   │   ├── entities/
│       │   │   │   └── usuario.entity.ts
│       │   │   └── modules/
│       │   │       └── roles/            ← Sub-módulo: Roles
│       │   │
│       │   ├── empresas/                 ← Módulo principal
│       │   │   ├── empresas.service.ts
│       │   │   ├── empresas.controller.ts
│       │   │   ├── empresas.module.ts
│       │   │   ├── dto/
│       │   │   │   ├── create-empresa.dto.ts
│       │   │   │   ├── update-empresa.dto.ts
│       │   │   │   └── register-empresa.dto.ts
│       │   │   ├── entities/
│       │   │   │   └── empresa.entity.ts
│       │   │   └── modules/              ← Submódulos
│       │   │       ├── sedes/
│       │   │       ├── rubros/
│       │   │       ├── premios/
│       │   │       ├── hitos/
│       │   │       ├── fundadores/
│       │   │       ├── familias/
│       │   │       ├── municipios/
│       │   │       ├── operaciones-internacionales/
│       │   │       ├── implementaciones/
│       │   │       │   └── modules/
│       │   │       │       ├── acciones/
│       │   │       │       └── tipos-acciones/
│       │   │       ├── servicios/
│       │   │       ├── tipos-societarios/
│       │   │       └── tamanios-empresas/
│       │   │
│       │   └── datamart/                 ← Análisis y reportes
│       │       ├── datamart.service.ts
│       │       └── datamart.controller.ts
│       │
│       ├── shared/                       ← Código compartido global
│       │   ├── constants/
│       │   ├── dto/
│       │   ├── utils/
│       │   └── services/
│       │       └── email/                ← Servicio de email
│       │
│       └── tasks/                        ← Tareas programadas
│           └── app.task.ts               ← Cron jobs
│
├── Frontend/                             ← Cliente React
│   ├── 📄 package.json                   ← Dependencias
│   ├── 📄 tailwind.config.js             ← Tailwind config
│   ├── 📄 postcss.config.js              ← PostCSS config
│   ├── 📄 public/
│   │   ├── index.html                    ← HTML raíz
│   │   ├── manifest.json                 ← PWA manifest
│   │   └── media/                        ← Assets públicos
│   │
│   └── src/
│       ├── 📄 index.js                   ← Entry point
│       ├── 📄 index.css                  ← Estilos globales
│       ├── 📄 cloudinaryConfig.js        ← Config Cloudinary
│       │
│       ├── components/                   ← Componentes React
│       │   ├── App.js                    ← Root component
│       │   ├── navbar.jsx                ← Navegación
│       │   ├── header.jsx                ← Encabezado
│       │   ├── footerBar.js              ← Pie de página
│       │   │
│       │   ├── AdminEmpresasDashboard.jsx    ← Panel admin empresas
│       │   ├── EmpresaFormModal.jsx         ← Modal de formulario
│       │   ├── EmpresasPanelWrapper.js      ← Wrapper panel
│       │   │
│       │   ├── administrarUsuarioPanel.js   ← Panel usuarios
│       │   ├── crearUsuarioPanel.jsx        ← Crear usuario
│       │   │
│       │   ├── empresaBuscador.js           ← Buscador empresas
│       │   ├── empresaCard.js               ← Tarjeta empresa
│       │   ├── empresaLista.js              ← Lista empresas
│       │   ├── empresaModal.js              ← Modal empresa
│       │   │
│       │   └── [otros componentes...]       ← Componentes adicionales
│       │
│       ├── screens/                      ← Páginas principales
│       │   ├── homePage/
│       │   ├── empresasPage/
│       │   ├── contactoPage/
│       │   ├── historiaPage/
│       │   ├── equipoPage/
│       │   ├── editorEmpresasPage/
│       │   ├── cambiarPasswordPage.jsx
│       │   └── resetPasswordPage.jsx
│       │
│       ├── services/                     ← Servicios HTTP
│       │   ├── api.js                    ← Cliente Axios configurado
│       │   ├── authService.js            ← Autenticación
│       │   ├── empresaService.js         ← Empresas
│       │   ├── usuarioService.js         ← Usuarios
│       │   └── adminEmpresasService.js   ← Admin empresas
│       │
│       ├── firebase/                     ← Configuración Firebase
│       │   └── config.js
│       │
│       ├── fonts/                        ← Tipografías custom
│       │
│       ├── assets/                       ← Recursos estáticos
│       │   ├── images/
│       │   ├── icons/
│       │   └── videos/
│       │
│       └── utils/                        ← Utilidades reutilizables
│           └── [funciones helper]
```

---

## ⚙️ BACKEND

### Arquitectura NestJS

NestJS sigue una arquitectura modular y en capas:

```
Controller (Recibe requests)
    ↓
Guard (Autenticación/Autorización)
    ↓
Pipe (Validación)
    ↓
Service (Lógica de negocio)
    ↓
Repository/ORM (Acceso a datos)
    ↓
Base de datos
```

### Módulos Principales

#### 1. **Módulo de Autenticación** (`app/services/auth/`)

**Responsabilidad:** Gestionar login, registro y JWT

**Archivos principales:**
- `auth.service.ts` - Lógica de autenticación
- `auth.controller.ts` - Endpoints de auth
- `jwt.strategy.ts` - Estrategia JWT para Passport
- `jwt.guard.ts` - Guard para proteger rutas

**Endpoints:**
```
POST   /api/auth/login         → Login de usuario
POST   /api/auth/register      → Registro de nuevo usuario
POST   /api/auth/refresh       → Refrescar token JWT
GET    /api/auth/me            → Obtener datos del usuario autenticado
POST   /api/auth/logout        → Logout (opcional)
```

**Flujo de autenticación:**
```
1. Usuario envía POST /api/auth/login con email + password
2. AuthService busca usuario en BD
3. Compara password con bcrypt
4. Si OK → genera JWT con user ID + rol
5. JWT se almacena en localStorage del cliente
6. JWT se envía en headers de futuras requests
7. JwtGuard valida JWT en cada request protegida
```

#### 2. **Módulo de Usuarios** (`modules/usuarios/`)

**Responsabilidad:** CRUD de usuarios, gestión de roles

**Entidad Usuario:**
```typescript
Usuario {
  id: number
  nombre: string
  email: string (único)
  password: string (hashed con bcrypt)
  idRol: number (1-5)
  activo: boolean
  fechaCreacion: Date
  ultimoLogin?: Date
  must_change_password?: boolean
}
```

**Roles (idRol):**
```
1 = SUPERADMIN        → Acceso total
2 = ADMIN_RRHH        → Gestión de usuarios
3 = ADMIN_EMPRESAS    → Gestión de empresas
4 = VIEWER            → Solo lectura
5 = PUBLIC            → Público (sin auth)
```

**Endpoints:**
```
GET    /api/usuarios              → Listar usuarios
GET    /api/usuarios/:id          → Obtener usuario
POST   /api/usuarios              → Crear usuario (admin only)
PUT    /api/usuarios/:id          → Actualizar usuario (admin only)
DELETE /api/usuarios/:id          → Eliminar usuario (admin only)
PATCH  /api/usuarios/:id/password → Cambiar contraseña
```

#### 3. **Módulo de Empresas** (`modules/empresas/`)

**Responsabilidad:** CRUD de empresas y toda su información relacionada

**Entidad Empresa:**
```typescript
Empresa {
  id: number
  nombre: string
  descripcion?: string
  website?: string
  email?: string
  telefono?: string
  idTamanio: number (FK)
  logo?: string (URL)
  fechaFundacion: Date
  activa: boolean
  
  // Relaciones
  sedes: Sede[]
  rubros: Rubro[]
  premios: Premio[]
  hitos: Hito[]
  servicios: Servicio[]
  fundadores: Fundador[]
  implementaciones: Implementacion[]
  municipios: Municipio[]
}
```

**Sub-módulos (Relaciones):**
- **Sedes** - Ubicaciones de la empresa
- **Rubros** - Sectores/industrias
- **Premios** - Reconocimientos obtenidos
- **Hitos** - Eventos importantes
- **Servicios** - Servicios ofrecidos
- **Fundadores** - Personas fundadoras
- **Implementaciones** - ODS y proyectos
- **Municipios** - Municipios donde opera
- **Tamaños** - Clasificación por tamaño

**Endpoints principales:**
```
GET    /api/empresas              → Listar todas (con paginación)
GET    /api/empresas/:id          → Obtener una empresa
POST   /api/empresas              → Crear empresa (admin only)
PUT    /api/empresas/:id          → Actualizar empresa (admin only)
PATCH  /api/empresas/:id          → Actualización parcial
DELETE /api/empresas/:id          → Eliminar empresa (admin only)

# Relaciones
GET    /api/empresas/:id/sedes    → Sedes de empresa
GET    /api/empresas/:id/rubros   → Rubros de empresa
```

#### 4. **Módulo de Formulario** (`app/services/formulario/`)

**Responsabilidad:** Recibir registros públicos de nuevas empresas

**Endpoint:**
```
POST   /api/formulario            → Registrar nueva empresa (público)
```

**DTO esperado:**
```typescript
RegisterEmpresaDto {
  nombre: string
  email: string
  telefono?: string
  website?: string
  descripcion?: string
  idTamanio: number
  // ... otros campos según RegisterEmpresaDto
}
```

#### 5. **Módulo Dashboard** (`app/services/dashboard/`)

**Responsabilidad:** Estadísticas y analytics

**Endpoints:**
```
GET    /api/dashboard/summary     → Resumen general
GET    /api/dashboard/estadisticas → Estadísticas detalladas
```

#### 6. **Módulo Datamart** (`modules/datamart/`)

**Responsabilidad:** Tabla desnormalizada para reportes rápidos

**Concepto:** Una tabla `datamart` que consolida datos de múltiples tablas para queries rápidas

---

## 💻 FRONTEND

### Arquitectura React

Estructura basada en componentes con state management local y Context API:

```
App (Root)
├── Header
│   ├── Navbar
│   └── Auth Handler
├── Main Routes
│   ├── Home Page
│   ├── Empresas Page
│   ├── Contacto Page
│   ├── Historia Page
│   ├── Equipo Page
│   ├── Admin Empresas (Protected)
│   ├── Admin Usuarios (Protected)
│   └── ...
└── Footer
```

### Componentes Principales

#### 1. **App.js** - Root Component

```javascript
// Funcionalidades:
- Maneja estado de autenticación global
- Control de rutas
- Persistencia de token JWT
- Manejo de logout
```

**Estado:**
```javascript
authState = {
  user: {
    id: number,
    email: string,
    nombre: string,
    idRol: number,
    must_change_password?: boolean
  },
  token: string
}
```

#### 2. **Navbar & Header** - Navegación

**navbar.jsx:**
- Menú principal responsive
- Links a páginas públicas
- Menú especial para admins
- Responsivo mobile

**header.jsx:**
- Branding y logo
- Botones de Login/Logout
- Avatar del usuario
- Mobile menu toggle

#### 3. **AdminEmpresasDashboard.jsx** - Panel de Empresas

**Funcionalidades:**
```
- Tabla de empresas con paginación
- Búsqueda por nombre
- Filtro por sede
- Ordenamiento por columnas
- Acciones: editar, eliminar, ver detalles
- Botón de crear nueva empresa
```

**Estado:**
```javascript
{
  empresas: [],
  loading: false,
  error: null,
  searchTerm: string,
  selectedSede: null,
  currentPage: number,
  pageSize: number,
  total: number,
  showModal: boolean,
  editingEmpresa?: Empresa
}
```

#### 4. **EmpresaFormModal.jsx** - Formulario Edición

**Campos:**
- Nombre (obligatorio)
- Email
- Teléfono
- Website
- Descripción
- Tamaño (dropdown)
- Fecha de fundación

**Validaciones:**
- Email válido
- Campos requeridos
- Fecha válida
- URL válida para website

#### 5. **AdministrarUsuarioPanel.js** - Panel de Usuarios

**Funcionalidades:**
```
- Tabla de usuarios
- Crear usuario
- Editar usuario
- Eliminar usuario
- Cambiar contraseña
```

### Servicios API

#### **api.js** - Cliente HTTP Configurado

```javascript
// Configuración central de Axios
- Base URL dinámico (dev/prod)
- Interceptor para agregar JWT a headers
- Manejo centralizado de errores
- Timeout configurado
- CORS habilitado
```

**Uso:**
```javascript
import api from '../services/api'

api.get('/api/empresas')
api.post('/api/empresas', data)
api.put('/api/empresas/1', data)
api.delete('/api/empresas/1')
```

#### **authService.js** - Autenticación

```javascript
login(email, password)      // POST /api/auth/login
register(userData)          // POST /api/auth/register
logout()                    // Limpia localStorage
getCurrentUser()            // GET /api/auth/me
refreshToken()              // POST /api/auth/refresh
```

#### **empresaService.js** - Empresas

```javascript
getAllEmpresas(params)      // GET /api/empresas
getEmpresa(id)             // GET /api/empresas/:id
createEmpresa(data)        // POST /api/formulario
updateEmpresa(id, data)    // PUT /api/empresas/:id
deleteEmpresa(id)          // DELETE /api/empresas/:id
```

#### **adminEmpresasService.js** - Admin

```javascript
getAdminEmpresasSummary(params)  // GET /api/empresas (con filtros)
registerEmpresa(data)            // POST /api/formulario
updateEmpresa(id, data)          // PUT /api/empresas/:id
patchEmpresa(id, data)           // PATCH /api/empresas/:id
getCatalogOptions()              // GET /api/tamanios-empresas
```

#### **usuarioService.js** - Usuarios

```javascript
getAllUsuarios()           // GET /api/usuarios
getUsuario(id)            // GET /api/usuarios/:id
createUsuario(data)       // POST /api/usuarios
updateUsuario(id, data)   // PUT /api/usuarios/:id
deleteUsuario(id)         // DELETE /api/usuarios/:id
```

### Manejo de Estado

**Estrategia:**
- useState para estado local de componentes
- localStorage para persistencia de auth
- Context API (si se necesita estado global compartido)
- Props drilling para componentes padre-hijo cercanos

**Ejemplo:**
```javascript
const [empresas, setEmpresas] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchEmpresas = async () => {
    setLoading(true);
    try {
      const response = await api.get('/api/empresas');
      setEmpresas(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchEmpresas();
}, []);
```

### Estilos con Tailwind CSS

**Configuración:**
- Tailwind CSS v3 con PostCSS
- Colores customizados en `tailwind.config.js`
- Responsive design mobile-first
- Dark mode soportado (opcional)

**Ejemplo:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
    Crear
  </button>
</div>
```

---

## 🗄️ BASE DE DATOS

### Configuración PostgreSQL

**Credenciales (en .env):**
```env
DB_HOST=localhost              # o Supabase
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password
DB_NAME=orbis_seguridad
DB_SYNCHRONIZE=false           # En producción
DB_LOGGING=true                # Debug (desactiva en prod)
```

### Principales Entidades

```
Usuario
├─ id (PK)
├─ nombre
├─ email (Unique)
├─ password
├─ idRol (FK → Rol)
├─ activo
└─ timestamps

Empresa
├─ id (PK)
├─ nombre
├─ descripcion
├─ logo
├─ idTamanio (FK → TamanioEmpresa)
├─ activa
└─ timestamps

Rol
├─ id (PK)
├─ nombre (SUPERADMIN, ADMIN_RRHH, etc)
└─ descripcion

TamanioEmpresa
├─ id (PK)
├─ nombre
└─ rango

Sede
├─ id (PK)
├─ idEmpresa (FK → Empresa)
├─ nombre
├─ ubicacion
└─ timestamps

Rubro
├─ id (PK)
├─ nombre
├─ descripcion

RubroEmpresa
├─ idEmpresa (FK)
├─ idRubro (FK)

Premio
├─ id (PK)
├─ idEmpresa (FK)
├─ nombre
├─ año

Implementacion
├─ id (PK)
├─ idEmpresa (FK)
├─ nombre
├─ descripcion

... (más entidades según BACKEND.md)
```

### Relaciones Principales

```
Usuario (1) ───────────── (N) Rol
Empresa (1) ───────────── (N) Sede
Empresa (1) ───────────── (N) Rubro
Empresa (1) ───────────── (N) Premio
Empresa (1) ───────────── (N) Hito
Empresa (1) ───────────── (N) Implementacion
Implementacion (1) ─────── (N) Acción
```

### Migraciones

**Ubicación:** `Backend/src/database/migrations/`

**Ejecución:**
```bash
npm run typeorm migration:run         # Ejecutar migraciones
npm run typeorm migration:revert      # Revertir última
npm run typeorm migration:generate    # Generar nueva
```

---

## 🔐 AUTENTICACIÓN Y SEGURIDAD

### Flujo de Autenticación

```
┌─────────────────────┐
│   Login (Cliente)   │
│ email + password    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────────────────┐
│ POST /api/auth/login (Backend)  │
│ - Busca usuario por email       │
│ - Compara password con bcrypt   │
│ - Si OK, genera JWT token       │
└──────────┬──────────────────────┘
           │
           ▼
┌──────────────────────────┐
│ Respuesta: { token, user } │
│ Cliente guarda token      │
│ en localStorage           │
└──────────┬───────────────┘
           │
           ▼
┌─────────────────────────────────┐
│ Requests subsecuentes (Cliente) │
│ Headers: Authorization: Bearer  │
│ [JWT_TOKEN]                     │
└──────────┬──────────────────────┘
           │
           ▼
┌──────────────────────────────────┐
│ JwtGuard (Backend)               │
│ - Extrae JWT del header          │
│ - Valida firma                   │
│ - Si válido, permite continuación │
│ - Si inválido, retorna 401       │
└──────────┬───────────────────────┘
           │
           ▼
┌─────────────────────────────┐
│ Request procesado           │
│ con usuario autenticado     │
└─────────────────────────────┘
```

### JWT Token Estructura

```
Header: { alg: 'HS256', typ: 'JWT' }

Payload: {
  sub: userId,           // Identificador único
  email: userEmail,
  idRol: roleId,         // Para autorización
  iat: timestamp,        // Emitido en
  exp: timestamp + 24h   // Expira en
}

Signature: HMAC(Header.Payload, SECRET_KEY)
```

### Roles y Permisos

| Rol | ID | Permisos |
|-----|----|----|
| SUPERADMIN | 1 | Todo (usuarios, empresas, reportes) |
| ADMIN_RRHH | 2 | Gestionar usuarios |
| ADMIN_EMPRESAS | 3 | Gestionar empresas |
| VIEWER | 4 | Solo lectura |
| PUBLIC | 5 | Acceso público (sin autenticación) |

### Guards de Seguridad

**JwtGuard:**
```typescript
// Valida que el JWT sea válido
@UseGuards(JwtGuard)
@Get('/api/empresas')
getEmpresas() { }
```

**RolesGuard:**
```typescript
// Valida que el usuario tenga rol requerido
@UseGuards(JwtGuard, RolesGuard)
@Roles(1, 2)  // Solo SUPERADMIN y ADMIN_RRHH
@Get('/api/usuarios')
getUsuarios() { }
```

### Hashing de Contraseñas

```typescript
import * as bcrypt from 'bcrypt';

// Al registrar
const hashedPassword = await bcrypt.hash(password, 10);

// Al validar login
const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
```

### Variables de Entorno Sensibles

```env
# Backend
JWT_SECRET=<clave-super-secreta>
JWT_EXPIRATION=24h
BCRYPT_ROUNDS=10

# Base de datos
DB_PASSWORD=<contraseña>

# Email
EMAIL_PASSWORD=<contraseña-smtp>

# Otros
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

---

## 🔌 ENDPOINTS API PRINCIPALES

### Autenticación

```
POST   /api/auth/login
  Body: { email, password }
  Response: { token, user: { id, email, nombre, idRol } }
  Status: 200 | 401 (credenciales inválidas)

POST   /api/auth/register
  Body: { email, password, nombre, ... }
  Response: { token, user }
  Status: 201 | 409 (email duplicado)

GET    /api/auth/me
  Headers: Authorization: Bearer [token]
  Response: { id, email, nombre, idRol }
  Status: 200 | 401 (no autenticado)

POST   /api/auth/refresh
  Headers: Authorization: Bearer [token]
  Response: { token, user }
  Status: 200 | 401
```

### Empresas (Admin)

```
GET    /api/empresas?page=1&limit=10&search=&sede=
  Response: { data: [Empresa], total, page, limit }
  Status: 200

GET    /api/empresas/:id
  Response: Empresa (completa con relaciones)
  Status: 200 | 404

POST   /api/empresas
  Headers: Authorization: Bearer [token]
  Body: CreateEmpresaDto
  Response: Empresa creada
  Status: 201

PUT    /api/empresas/:id
  Headers: Authorization: Bearer [token]
  Body: UpdateEmpresaDto
  Response: Empresa actualizada
  Status: 200

PATCH  /api/empresas/:id
  Headers: Authorization: Bearer [token]
  Body: Partial UpdateEmpresaDto
  Response: Empresa actualizada
  Status: 200

DELETE /api/empresas/:id
  Headers: Authorization: Bearer [token]
  Response: { success: true }
  Status: 200 | 404
```

### Usuarios (Admin)

```
GET    /api/usuarios
  Headers: Authorization: Bearer [token]
  Response: [Usuario]
  Status: 200

GET    /api/usuarios/:id
  Response: Usuario
  Status: 200 | 404

POST   /api/usuarios
  Headers: Authorization: Bearer [token]
  Body: CreateUsuarioDto
  Response: Usuario creado
  Status: 201

PUT    /api/usuarios/:id
  Headers: Authorization: Bearer [token]
  Body: UpdateUsuarioDto
  Response: Usuario actualizado
  Status: 200

DELETE /api/usuarios/:id
  Headers: Authorization: Bearer [token]
  Response: { success: true }
  Status: 200 | 404

PATCH  /api/usuarios/:id/password
  Headers: Authorization: Bearer [token]
  Body: { oldPassword, newPassword }
  Response: { success: true }
  Status: 200 | 400
```

### Formulario Público

```
POST   /api/formulario
  Body: RegisterEmpresaDto
  Response: { success: true, id }
  Status: 201

GET    /api/tamanios-empresas
  Response: [TamanioEmpresa]
  Status: 200
```

### Dashboard

```
GET    /api/dashboard/summary
  Headers: Authorization: Bearer [token]
  Response: {
    totalEmpresas: number,
    totalUsuarios: number,
    empresasActivas: number,
    empresasPorSede: {},
    ...
  }
  Status: 200

GET    /api/dashboard/estadisticas
  Response: Estadísticas detalladas
  Status: 200
```

---

## 🔄 FLUJOS DE DATOS PRINCIPALES

### Flujo 1: Login de Usuario

```
1. Usuario abre app
   ↓
2. Ingresa email y password
   ↓
3. Click en "Iniciar Sesión"
   ↓
4. Frontend: POST /api/auth/login
   ↓
5. Backend: Valida credenciales
   ├─ Si inválidas → 401 Unauthorized
   └─ Si válidas → genera JWT
   ↓
6. Frontend: Recibe { token, user }
   ↓
7. localStorage.setItem('authData', JSON.stringify({ token, user }))
   ↓
8. setAuthToken(token) → configura header Authorization
   ↓
9. setAuthState(user) → actualiza componentes
   ↓
10. Redirige a /admin-empresas (si es admin)
    o / (home si es usuario normal)
```

### Flujo 2: Crear Nueva Empresa (Admin)

```
1. Admin accede AdminEmpresasDashboard
   ↓
2. Click en botón "Crear Empresa"
   ↓
3. Modal EmpresaFormModal abre
   ↓
4. Admin completa formulario:
   ├─ Nombre
   ├─ Email
   ├─ Tamaño
   └─ Otros campos
   ↓
5. Validación local (react-hook-form)
   ├─ Si hay errores → muestra errores
   └─ Si OK → continúa
   ↓
6. Click en "Guardar"
   ↓
7. Frontend: POST /api/empresas (o /api/formulario)
   Headers: { Authorization: Bearer [JWT] }
   Body: { nombre, email, ... }
   ↓
8. Backend: JwtGuard valida token
   ↓
9. Backend: RolesGuard valida rol (1 o 3)
   ↓
10. Backend: Pipe valida DTO
    ├─ Si invalid → 400 Bad Request
    └─ Si valid → continúa
    ↓
11. Backend Service: Crea empresa en BD
    ├─ Si duplicada → 409 Conflict
    └─ Si OK → retorna empresa creada
    ↓
12. Frontend: Recibe respuesta exitosa
    ↓
13. setEmpresas([...empresas, newEmpresa])
    ↓
14. Tabla se re-renderiza con nueva empresa
    ↓
15. Modal cierra
    ↓
16. Toast/Alert: "Empresa creada exitosamente"
```

### Flujo 3: Búsqueda y Filtrado de Empresas

```
1. Usuario abre página de Empresas
   ↓
2. Frontend: GET /api/empresas?page=1&limit=10
   ↓
3. Backend retorna primeras 10 empresas
   ↓
4. setEmpresas(data), total = response.total
   ↓
5. Usuario ingresa texto en buscador
   ↓
6. setSearchTerm(texto)
   ↓
7. Debounce 300ms (espera a que terminen de escribir)
   ↓
8. Frontend: GET /api/empresas?search=texto&page=1
   ↓
9. Backend filtra por nombre LIKE 'texto'
   ↓
10. Tabla se actualiza con resultados filtrados
    ↓
11. Usuario selecciona filtro por Sede
    ↓
12. setSede(selectedSede)
    ↓
13. Frontend: GET /api/empresas?search=&sede=5&page=1
    ↓
14. Backend filtra por sede
    ↓
15. Tabla muestra resultados finales
```

### Flujo 4: Recibir Formulario Público

```
1. Usuario en página pública llena formulario de registro
   ↓
2. Completa: nombre, email, teléfono, etc.
   ↓
3. Click "Registrar Mi Empresa"
   ↓
4. Validación local
   ├─ Si hay errores → muestra tooltips
   └─ Si OK → continúa
   ↓
5. Frontend: POST /api/formulario
   Body: { nombre, email, telefono, ... }
   ↓
6. Backend: Recibe datos (sin JWT requerido)
   ↓
7. Backend Service:
   ├─ Valida DTO
   ├─ Crea empresa con status "pendiente"
   ├─ Envía email de confirmación
   └─ Retorna confirmación
   ↓
8. Frontend: Recibe { success: true }
   ↓
9. Muestra modal de confirmación
    ↓
10. Usuario ve mensaje "Gracias por registrar tu empresa"
```

---

## 🚀 SETUP Y EJECUCIÓN

### Requisitos Previos

```bash
# Verificar versiones
node --version        # v22+
npm --version         # v10+
postgres --version    # 14+
```

### Backend Setup

```bash
# 1. Navegar al directorio
cd Backend

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
# Crear archivo .env en Backend/
cat > .env << 'EOF'
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password
DB_NAME=orbis_seguridad
DB_SYNCHRONIZE=false
DB_LOGGING=true

# JWT
JWT_SECRET=tu_clave_secreta_muy_larga
JWT_EXPIRATION=24h

# Autenticación
BCRYPT_ROUNDS=10

# Email (Nodemailer)
EMAIL_SERVICE=gmail
EMAIL_USER=tu_email@gmail.com
EMAIL_PASSWORD=tu_app_password

# Frontend
FRONTEND_URL=http://localhost:3000
NODE_ENV=development

# API
API_PORT=3000
EOF

# 4. Ejecutar migraciones (primera vez)
npm run typeorm migration:run

# 5. Iniciar en modo desarrollo
npm run start:dev

# Backend estará en http://localhost:3000
# Swagger docs en http://localhost:3000/api/docs
```

### Frontend Setup

```bash
# 1. Navegar al directorio
cd Frontend

# 2. Instalar dependencias
npm install

# 3. Crear archivo .env (opcional, usa defaults)
cat > .env << 'EOF'
REACT_APP_API_URL=http://localhost:3000
REACT_APP_FRONTEND_URL=http://localhost:3000
EOF

# 4. Iniciar en modo desarrollo
npm start

# Frontend estará en http://localhost:3000
# Puerto alternativo si 3000 está ocupado: npx serve -s build -l 3001
```

### Base de Datos

```bash
# Crear BD (una sola vez)
createdb orbis_seguridad

# O con psql
psql -U postgres -c "CREATE DATABASE orbis_seguridad;"

# Ver conexiones
psql -U postgres

# Dentro de psql:
\c orbis_seguridad          # Conectarse a la BD
\dt                         # Ver tablas
\d usuarios                 # Ver estructura tabla usuarios
SELECT * FROM usuarios;     # Ver datos
```

### Verificar que Todo Está Funcionando

```bash
# Terminal 1: Backend
cd Backend
npm run start:dev
# Debe mostrar: "[Nest] Port: 3000, OS: win32"

# Terminal 2: Frontend
cd Frontend
npm start
# Debe abrir http://localhost:3000

# Terminal 3: Verificar API
curl http://localhost:3000/api/auth/me
# Debe retornar error 401 (no autenticado, lo cual es correcto)

# Login de prueba
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123"}'
```

---

## ⚠️ PROBLEMAS CONOCIDOS Y SOLUCIONES

### Problema 1: Error 404 en Creación de Empresa

**Síntoma:**
```
POST /api/empresas/registro → 404 Not Found
POST /api/formulario → 201 OK
```

**Causa:** El endpoint correcto es `/api/formulario`, no `/api/empresas/registro`

**Solución:**
En `adminEmpresasService.js`, usar:
```javascript
const response = await api.post('/api/formulario', {
  nombre,
  email,
  // ... otros datos
});
```

### Problema 2: JWT Inválido o Expirado

**Síntoma:**
```
POST /api/empresas → 401 Unauthorized
```

**Causa:** Token expiró o no fue enviado correctamente

**Solución:**
1. Verificar que el token está en localStorage:
```javascript
const authData = JSON.parse(localStorage.getItem('authData'));
console.log(authData?.token);
```

2. Verificar que se envía en headers:
```javascript
// En api.js
if (token) {
  config.headers.Authorization = `Bearer ${token}`;
}
```

3. Hacer nuevo login para obtener token nuevo

### Problema 3: CORS Error

**Síntoma:**
```
Access to XMLHttpRequest blocked by CORS policy
```

**Causa:** Frontend en un puerto diferente al backend

**Solución:** En `Backend/main.ts`, CORS está habilitado para desarrollo:
```typescript
app.enableCors({
  origin: isDev ? (o, cb) => cb(null, true) : [...],
  // En dev permite todos los orígenes
});
```

Si persiste:
1. Verificar `FRONTEND_URL` en `.env`
2. Reiniciar backend

### Problema 4: Base de Datos No Conecta

**Síntoma:**
```
Error: connect ECONNREFUSED 127.0.0.1:5432
```

**Causa:** PostgreSQL no está corriendo

**Solución:**
```bash
# Windows
net start postgresql-x64-14    # o tu versión

# macOS
brew services start postgresql

# Linux
sudo systemctl start postgresql

# Verificar
psql -U postgres -c "\l"
```

### Problema 5: Puerto 3000 Ya Está en Uso

**Síntoma:**
```
Error: listen EADDRINUSE :::3000
```

**Solución:**
```bash
# Encontrar proceso en puerto 3000
netstat -ano | findstr :3000

# Matar proceso
taskkill /PID <PID> /F

# O usar puerto diferente en Backend
# En main.ts cambiar:
const PORT = process.env.API_PORT || 3001;
await app.listen(PORT);
```

### Problema 6: node_modules No Instala

**Síntoma:**
```
npm ERR! code ERESOLVE
```

**Solución:**
```bash
# Limpiar caché
npm cache clean --force

# Reinstalar
rm -rf node_modules package-lock.json
npm install

# Si sigue fallando, usar legacy resolver
npm install --legacy-peer-deps
```

### Problema 7: TypeScript Errores de Tipos

**Síntoma:**
```
error TS7053: Element implicitly has an 'any' type
```

**Solución:**
En `tsconfig.json`, verificar:
```json
{
  "compilerOptions": {
    "strict": false,  // Más permisivo durante desarrollo
    "noImplicitAny": false
  }
}
```

### Problema 8: Logout No Funciona Correctamente

**Síntoma:**
```
Aún puede acceder a rutas protegidas después de logout
```

**Causa:** Token no se elimina de localStorage o headers

**Solución:**
```javascript
// En logout completo:
const handleLogout = () => {
  localStorage.removeItem('authData');
  delete api.defaults.headers.common['Authorization'];
  setAuthState({ user: null, token: null });
  window.location.href = '/';  // Fuerza reload
};
```

---

## 📝 CONVENCIONES Y PATRONES

### Convenciones de Nombres

**Backend (TypeScript):**
```typescript
// Clases: PascalCase
class UsuariosService { }
class CreateUsuarioDto { }

// Funciones: camelCase
function validateEmail(email: string) { }

// Constantes: UPPER_SNAKE_CASE
const JWT_EXPIRATION = '24h';

// Propiedades: camelCase
interface Usuario {
  id: number;
  nombre: string;
  emailAddress: string;
}
```

**Frontend (JavaScript):**
```javascript
// Componentes: PascalCase
function AdminEmpresasDashboard() { }

// Funciones: camelCase
const handleSubmit = () => { };

// Constantes: UPPER_SNAKE_CASE
const API_BASE_URL = 'http://localhost:3000';

// Estado: camelCase
const [empresasList, setEmpresasList] = useState([]);
```

### Patrones de Código

**Backend - Servicio:**
```typescript
@Injectable()
export class UsuariosService {
  constructor(private repository: UsuariosRepository) {}
  
  async findAll(): Promise<Usuario[]> {
    return await this.repository.find();
  }
  
  async create(dto: CreateUsuarioDto): Promise<Usuario> {
    // Validar
    // Crear
    // Retornar
  }
}
```

**Backend - Controlador:**
```typescript
@Controller('api/usuarios')
@UseGuards(JwtGuard, RolesGuard)
@Roles(1, 2)  // Solo SUPERADMIN, ADMIN_RRHH
export class UsuariosController {
  constructor(private service: UsuariosService) {}
  
  @Get()
  findAll(@Query() query: FindAllDto) {
    return this.service.findAll(query);
  }
  
  @Post()
  create(@Body() dto: CreateUsuarioDto) {
    return this.service.create(dto);
  }
}
```

**Frontend - Componente:**
```javascript
function MiComponente() {
  const [estado, setEstado] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await api.get('/endpoint');
        setEstado(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  if (loading) return <LoadingSpinner />;
  if (error) return <Error message={error} />;
  
  return <div>{/* JSX */}</div>;
}
```

### Patrones de Error Handling

**Backend:**
```typescript
try {
  const usuario = await this.repository.findOne(id);
  if (!usuario) {
    throw new NotFoundException('Usuario no encontrado');
  }
  return usuario;
} catch (error) {
  if (error instanceof NotFoundException) {
    throw error;  // Re-throw errores conocidos
  }
  throw new InternalServerErrorException(error.message);
}
```

**Frontend:**
```javascript
try {
  const response = await api.get(`/api/usuarios/${id}`);
  setUsuario(response.data);
} catch (error) {
  if (error.response?.status === 404) {
    setError('Usuario no encontrado');
  } else if (error.response?.status === 401) {
    // Redirigir a login
    navigate('/login');
  } else {
    setError('Error al cargar usuario');
  }
}
```

---

## 📚 RECURSOS ADICIONALES

### Documentación Oficial

- **NestJS:** https://docs.nestjs.com/
- **React:** https://react.dev/
- **TypeScript:** https://www.typescriptlang.org/docs/
- **Tailwind CSS:** https://tailwindcss.com/docs/
- **TypeORM:** https://typeorm.io/
- **Passport.js:** https://www.passportjs.org/
- **Axios:** https://axios-http.com/docs/intro

### Herramientas Útiles

```bash
# Test de API
- Postman: https://www.postman.com/
- Insomnia: https://insomnia.rest/
- Thunder Client (VS Code Extension)

# Database Management
- pgAdmin: https://www.pgadmin.org/
- DBeaver: https://dbeaver.io/
- Adminer: https://www.adminer.org/

# Dev Tools
- VS Code Extensions:
  - REST Client
  - Thunder Client
  - ESLint
  - Prettier
  - Thunder Client
  - PostgreSQL Explorer
```

### Archivos de Documentación en el Proyecto

- `BACKEND.md` - Documentación detallada del backend
- `FRONTEND.md` - Documentación detallada del frontend
- `CONTEXTO_AVANCE_COMPLETO.md` - Historia y progreso del proyecto
- `Backend/README.md` - Setup del backend
- `Frontend/README.md` - Setup del frontend (CRA)

### Estructura de Archivos a Consultar para Implementaciones

Cuando necesites implementar algo nuevo:

1. **Crear servicio:** Ver ejemplos en `Backend/src/modules/usuarios/usuarios.service.ts`
2. **Crear controlador:** Ver ejemplos en `Backend/src/modules/usuarios/usuarios.controller.ts`
3. **Crear DTO:** Ver ejemplos en `Backend/src/modules/usuarios/dto/`
4. **Crear componente React:** Ver ejemplos en `Frontend/src/components/`
5. **Conectar con API:** Ver ejemplos en `Frontend/src/services/`

---

## 🎯 PRÓXIMOS PASOS Y TODO

### Funcionalidades Pendientes

- [ ] Completar panel de edición de empresas
- [ ] Implementar eliminación en cascada
- [ ] Agregar validaciones adicionales
- [ ] Implementar paginación server-side
- [ ] Agregar filtros avanzados
- [ ] Crear reportes en PDF
- [ ] Implementar notificaciones en tiempo real (WebSockets)
- [ ] Mejorar rendimiento con caching

### Bugs Conocidos

- [ ] Error 404 en POST /api/empresas (usar /api/formulario)
- [ ] Botones sin labels en tabla (agregar tooltips)
- [ ] Performance lenta con muchos registros

### Mejoras de Código

- [ ] Refactorizar servicios duos (reducir duplicación)
- [ ] Agregar unit tests
- [ ] Agregar e2e tests
- [ ] Mejorar documentación de código
- [ ] Implementar logging centralizado

---

## 📞 CONTACTO Y SOPORTE

Para preguntas sobre el proyecto, consultar:
1. Esta documentación (DOCUMENTACION_COMPLETA.md)
2. BACKEND.md y FRONTEND.md para detalles específicos
3. Código fuente con comentarios
4. Swagger API docs en `http://localhost:3000/api/docs` (desarrollo)

---

**Última actualización:** Mayo 2026  
**Versión:** 1.0  
**Estado:** Documentación Completa para Desarrollo con Claude
