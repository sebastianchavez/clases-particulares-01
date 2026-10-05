# EduClass · Clases Particulares

Sistema completo de **reservas para academia de clases particulares** desarrollado con HTML, CSS y JavaScript nativo + Tailwind CSS. La plataforma permite gestionar sesiones de refuerzo escolar, idiomas, pre-universitario y universitario en modalidades presencial y online.

![Stack](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

---

## 📋 Tabla de contenidos

- [Características](#-características)
- [Demo y cuentas](#-demo-y-cuentas)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Pantallas](#-pantallas)
- [Modelo de datos](#-modelo-de-datos)
- [Flujos principales](#-flujos-principales)
- [Sistema de diseño](#-sistema-de-diseño)
- [Tecnologías](#-tecnologías)
- [Uso local](#-uso-local)
- [Notas](#-notas)

---

## ✨ Características

- 🎓 **Catálogo de servicios** en 4 categorías con 14 cursos
- 👨‍🏫 **10 tutores** especializados con foto, rating y bio
- 📅 **Wizard de reserva** de 4 pasos con guardado automático del borrador
- 💳 **3 métodos de pago** (tarjeta, Yape/Plin, transferencia)
- 👤 **Autenticación** con localStorage (2 usuarios precargados)
- 📜 **Historial de reservas** con estados diferenciados
- ❌ **Anulación con política de reembolso** (100% / 50% / sin reembolso)
- 📱 **Diseño responsive** mobile-first
- 🌗 **Modo claro / oscuro** con persistencia
- 🎨 **Identidad dark + dorado** coherente con el portfolio

---

## 🔐 Demo y cuentas

La aplicación incluye **2 usuarios pre-cargados** y **3 reservas demo** que aparecen automáticamente la primera vez que se visita el sitio.

| Usuario | Email | Contraseña |
|---|---|---|
| Juan Pérez | `juan@test.com` | `123456` |
| María López | `maria@test.com` | `123456` |

### Reservas de Juan pre-cargadas

| Servicio | Tutor | Fecha | Estado | Pago |
|---|---|---|---|---|
| Matemática Escolar | Lic. María Fernández | Hoy + 3 días | Confirmada | Pagado |
| Inglés | Lic. Lucía Torres | Hoy + 7 días | Pendiente | Por pagar |
| Razonamiento Matemático | Prof. Diego Salazar | Hace 10 días | Completada | Pagado |

---

## 📁 Estructura del proyecto

```
clases-particulares-01/
│
├── index.html                                  Inicio / Landing
├── servicios.html                             Catálogo con filtros
├── precios.html                               Planes y calculadora
├── horarios.html                              Horario semanal + por tutor
├── contacto.html                              Formulario + mapa + WhatsApp
├── galeria.html                               Galería con lightbox
│
├── reserva.html                               Wizard 4 pasos
├── confirmacion.html                          Confirmación de cita
├── pago.html                                  Pantalla de pago
├── pago-confirmado.html                       Comprobante de pago
│
├── perfil.html                                Mi perfil + historial
├── detalle-reserva.html                       Detalle + anulación
│
├── inicio-sesion.html                         Login
├── registro.html                              Registro de usuario
├── recuperar-password.html                    Recuperar contraseña
│
├── terminos.html                              Términos y condiciones
├── privacidad.html                            Política de privacidad
│
├── css/
│   └── styles.css                             Estilos base y utilidades
│
└── js/
    └── app.js                                 Lógica completa de la plataforma
```

---

## 🖥️ Pantallas (17)

### Públicas (sin login)
- **Inicio** — hero + servicios destacados + niveles + tutores + testimonios
- **Servicios** — catálogo filtrable por categoría y modalidad
- **Precios** — calculadora interactiva + 4 planes + tabla comparativa
- **Horarios** — disponibilidad semanal + por tutor + FAQ
- **Contacto** — formulario + mapa OpenStreetMap + WhatsApp
- **Galería** — 12 imágenes con lightbox y filtros
- **Términos y condiciones** — 13 secciones con TOC
- **Política de privacidad** — 14 secciones con TOC
- **Inicio de sesión** — con cuenta demo
- **Registro** — con validaciones
- **Recuperar contraseña** — flujo de 3 pasos

### Privadas (requieren login)
- **Reserva (wizard)** — 4 pasos: servicio → tutor → fecha/hora/modalidad → confirmar
- **Confirmación de cita** — checkmark animado + resumen
- **Pago** — selector de método + formularios contextuales
- **Confirmación de pago** — voucher imprimible
- **Mi perfil** — stats + tabs (reservas / cuenta)
- **Detalle de reserva** — info completa + botón anular + política de reembolso

---

## 🧩 Modelo de datos

Toda la persistencia se realiza en `localStorage`. Las claves se encuentran en el objeto `STORAGE_KEYS` dentro de `js/app.js`.

| Clave | Contenido |
|---|---|
| `edu_users` | Array de usuarios registrados |
| `edu_session` | Sesión activa (userId, token, expires) |
| `edu_reservas` | Array de todas las reservas |
| `edu_reserva_draft` | Borrador del wizard de reserva |
| `edu_pago_draft` | ID de reserva en proceso de pago |
| `edu_theme` | Preferencia de tema (`dark` / `light`) |
| `edu_redirect` | URL de retorno tras login |

### Estructura de una reserva

```json
{
  "id": "r1716900000000",
  "userId": "u1",
  "servicioId": "ec1",
  "profesionalId": "pr1",
  "fecha": "2026-10-08",
  "hora": "16:00",
  "modalidad": "presencial",
  "estado": "confirmada",
  "pago": "pagado",
  "metodoPago": "tarjeta",
  "precio": 35,
  "notas": "Repaso de álgebra",
  "createdAt": 1716900000000
}
```

### Estados posibles

| Estado | Descripción |
|---|---|
| `pendiente` | Reserva creada, sin pagar |
| `confirmada` | Pagada y confirmada |
| `completada` | Fecha pasada con asistencia |
| `anulada` | Cancelada por el usuario |

---

## 🔄 Flujos principales

### 1. Reserva + pago

```
Inicio → Servicios → Click "Reservar"
        ↓
   [Wizard 4 pasos]
     1. Seleccionar servicio
     2. Seleccionar tutor (filtrado por servicio)
     3. Seleccionar modalidad, fecha y hora
        ↓
   [Validación: requiere login]
        ↓
     4. Confirmar datos + notas
        ↓
   confirmacion.html (resumen + Ir a pagar)
        ↓
   pago.html (Tarjeta / Yape / Transferencia)
        ↓
   pago-confirmado.html (voucher + ver mis reservas)
```

### 2. Anular reserva

```
Perfil → Click "Ver detalle"
        ↓
   detalle-reserva.html
        ↓
   Click "Anular reserva"
        ↓
   [Modal de confirmación]
        ↓
   Estado → "anulada"
        ↓
   [Toast de confirmación]
```

### 3. Autenticación

```
Cualquier página protegida
        ↓
[requireAuth() detecta sesión vacía]
        ↓
inicio-sesion.html?redirect=<origenva>
        ↓
Login correcto → vuelve a página original
```

---

## 🎨 Sistema de diseño

### Paleta

| Variable | Valor | Uso |
|---|---|---|
| `--color-primary` | `#d4a017` | Dorado, acentos principales |
| `--color-primary-light` | `#f4c430` | Hover y degradados |
| `--color-bg-dark` | `#0f172a` | Fondo principal |
| `--color-bg-card` | `#1e293b` | Tarjetas y paneles |

- **Display**: Playfair Display (títulos, números)
- **Sans**: Inter (texto general)

### Clases utilitarias

- `.btn-primary`, `.btn-outline` — botones base
- `.card-hover` — efecto de elevación
- `.service-card.selected`, `.profesional-card.selected` — selección
- `.time-slot` — slots de reserva
- `.step-dot.active`, `.step-line.active` — wizard
- `.modal-backdrop`, `.modal-content` — modales
- `.filter-chip.active` — chips de filtro
- `.metodo-pago-card.selected` — selección de método de pago

---

## 🛠️ Tecnologías

| Capa | Stack |
|---|---|
| Estructura | HTML5 semántico |
| Estilos | CSS3 + Tailwind CSS (CDN) |
| Lógica | JavaScript vanilla (ES6+) |
| Persistencia | localStorage |
| Imágenes | Unsplash |
| Tipografías | Google Fonts (Playfair + Inter) |

### Dependencias externas (CDN)

```html
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

> ⚠️ En producción conviene compilar Tailwind localmente para reducir el bundle.

---

## 🚀 Uso local

No requiere build ni dependencias. Para visualizar el sitio:

### Opción 1: Doble clic

Abre `index.html` directamente en el navegador.

### Opción 2: Servidor local (recomendado)

Algunos navegadores bloquean `localStorage` con `file://`. Usa un servidor estático:

```bash
# Con Python 3
python -m http.server 8080

# Con Node.js (npx)
npx serve .

# Con PHP
php -S localhost:8080
```

Luego visita `http://localhost:8080`.

### Opción 3: VS Code

Instala la extensión **Live Server** y haz clic derecho en `index.html` → "Open with Live Server".

---

## 📝 Notas

- **Datos seed**: la primera vez que se carga la app se crean automáticamente 2 usuarios demo y 3 reservas para Juan.
- **Persistencia**: los cambios solo afectan el `localStorage` del navegador. No hay backend.
- **Reset**: para volver al estado inicial, limpia el almacenamiento del sitio desde las herramientas de desarrollo.
- **Pagos**: la simulación de pago valida número de tarjeta (16 dígitos) y número de operación, pero no procesa nada real.
- **Imágenes**: todas las imágenes son de Unsplash y se sirven vía CDN público.
- **Responsive**: la UI está optimizada para mobile, tablet y desktop.

---

## 📄 Licencia

Template de demostración. Libre para uso y adaptación.