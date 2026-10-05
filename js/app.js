const STORAGE_KEYS = {
  USERS: 'edu_users',
  SESSION: 'edu_session',
  RESERVAS: 'edu_reservas',
  RESERVA_DRAFT: 'edu_reserva_draft',
  PAGO_DRAFT: 'edu_pago_draft',
  THEME: 'edu_theme'
};

const SERVICIOS = [
  { id: 'ec1', categoria: 'escolar', nombre: 'Matemática Escolar', descripcion: 'Refuerzo en aritmética, álgebra y geometría para primaria y secundaria.', duracion: 60, precio: 35, modalidad: 'ambas', imagen: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80' },
  { id: 'ec2', categoria: 'escolar', nombre: 'Lengua y Literatura', descripcion: 'Comprensión lectora, redacción, ortografía y análisis de obras.', duracion: 60, precio: 35, modalidad: 'ambas', imagen: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80' },
  { id: 'ec3', categoria: 'escolar', nombre: 'Ciencias Naturales', descripcion: 'Biología, química y física adaptadas al nivel escolar.', duracion: 60, precio: 40, modalidad: 'ambas', imagen: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80' },
  { id: 'ec4', categoria: 'escolar', nombre: 'Inglés Escolar', descripcion: 'Gramática, vocabulario y conversación para estudiantes.', duracion: 60, precio: 38, modalidad: 'online', imagen: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80' },
  { id: 'pu1', categoria: 'preuniversitario', nombre: 'Razonamiento Verbal', descripcion: 'Textos, sinónimos, antónimos y comprensión para examen de admisión.', duracion: 75, precio: 50, modalidad: 'ambas', imagen: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80' },
  { id: 'pu2', categoria: 'preuniversitario', nombre: 'Razonamiento Matemático', descripcion: 'Lógica, aritmética y razonamiento para preuniversitarios.', duracion: 75, precio: 50, modalidad: 'ambas', imagen: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80' },
  { id: 'pu3', categoria: 'preuniversitario', nombre: 'Física y Química Pre', descripcion: 'Repaso intensivo de física y química para ingreso universitario.', duracion: 90, precio: 60, modalidad: 'ambas', imagen: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80' },
  { id: 'un1', categoria: 'universitario', nombre: 'Cálculo Diferencial e Integral', descripcion: 'Límites, derivadas, series para ingeniería y ciencias.', duracion: 90, precio: 70, modalidad: 'online', imagen: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800&q=80' },
  { id: 'un2', categoria: 'universitario', nombre: 'Álgebra Lineal', descripcion: 'Matrices, vectores, transformaciones y sistemas lineales.', duracion: 90, precio: 70, modalidad: 'online', imagen: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80' },
  { id: 'un3', categoria: 'universitario', nombre: 'Programación (Python/JS)', descripcion: 'Fundamentos, estructuras de datos y proyectos prácticos.', duracion: 90, precio: 80, modalidad: 'online', imagen: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80' },
  { id: 'un4', categoria: 'universitario', nombre: 'Estadística y Probabilidad', descripcion: 'Estadística descriptiva, inferencial y análisis de datos.', duracion: 90, precio: 65, modalidad: 'online', imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
  { id: 'id1', categoria: 'idiomas', nombre: 'Inglés (A1-C2)', descripcion: 'Clases personalizadas todos los niveles, preparación TOEFL/IELTS.', duracion: 60, precio: 45, modalidad: 'ambas', imagen: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80' },
  { id: 'id2', categoria: 'idiomas', nombre: 'Francés', descripcion: 'Francés clabe desde cero hasta conversación avanzado.', duracion: 60, precio: 50, modalidad: 'online', imagen: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&q=80' },
  { id: 'id3', categoria: 'idiomas', nombre: 'Portugués', descripcion: 'Portugués básico e intermedio con enfoque conversacional.', duracion: 60, precio: 50, modalidad: 'online', imagen: 'https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=800&q=80' }
];

const PROFESIONALES = [
  { id: 'pr1', nombre: 'Lic. María Fernández', rol: 'Matemática y Cálculo', foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', rating: 4.9, experiencia: 10, especialidades: ['ec1', 'un1', 'pu2'], modalidad: ['presencial', 'online'], bio: 'Magister en Educación Matemática. Más de 10 años preparando estudiantes.' },
  { id: 'pr2', nombre: 'Prof. Carlos Mendoza', rol: 'Física y Química', foto: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80', rating: 4.8, experiencia: 8, especialidades: ['ec3', 'pu3'], modalidad: ['presencial', 'online'], bio: 'Ingeniero con maestría en didáctica de las ciencias exactas.' },
  { id: 'pr3', nombre: 'Lic. Sofía Vega', rol: 'Lengua y Literatura', foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', rating: 5.0, experiencia: 12, especialidades: ['ec2', 'pu1'], modalidad: ['presencial', 'online'], bio: 'Especialista en comprensión lectora y redacción académica.' },
  { id: 'pr4', nombre: 'Prof. Andrés Rojas', rol: 'Programación', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', rating: 4.9, experiencia: 7, especialidades: ['un3'], modalidad: ['online'], bio: 'Full-stack developer y docente universitario en algoritmos.' },
  { id: 'pr5', nombre: 'Lic. Lucía Torres', rol: 'Inglés', foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80', rating: 4.9, experiencia: 9, especialidades: ['ec4', 'id1'], modalidad: ['online', 'presencial'], bio: 'Certificada TEFL. Preparación para TOEFL e IELTS.' },
  { id: 'pr6', nombre: 'Dr. Roberto Díaz', rol: 'Álgebra y Estadística', foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', rating: 4.8, experiencia: 15, especialidades: ['un2', 'un4'], modalidad: ['online'], bio: 'Doctor en Estadística, profesor universitario.' },
  { id: 'pr7', nombre: 'Lic. Carolina Méndez', rol: 'Razonamiento Verbal', foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', rating: 4.7, experiencia: 6, especialidades: ['pu1', 'ec2'], modalidad: ['presencial', 'online'], bio: 'Especialista en técnicas de lectura rápida y razonamiento crítico.' },
  { id: 'pr8', nombre: 'Prof. Diego Salazar', rol: 'Matemática Pre-universitaria', foto: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80', rating: 4.9, experiencia: 11, especialidades: ['pu2', 'ec1'], modalidad: ['presencial'], bio: 'Ex docente de academias pre-universitarias líderes.' },
  { id: 'pr9', nombre: 'Lic. Valentina Quispe', rol: 'Francés', foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', rating: 4.8, experiencia: 5, especialidades: ['id2'], modalidad: ['online'], bio: 'Francés nativo, certificada DELF/DALF.' },
  { id: 'pr10', nombre: 'Prof. Mateo Vargas', rol: 'Ciencias Naturales', foto: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80', rating: 4.7, experiencia: 8, especialidades: ['ec3', 'pu3'], modalidad: ['presencial', 'online'], bio: 'Biólogo con experiencia en metodología activa para secundaria.' }
];

const HORARIOS = {
  lunes: { abierto: true, desde: '07:00', hasta: '22:00' },
  martes: { abierto: true, desde: '07:00', hasta: '22:00' },
  miercoles: { abierto: true, desde: '07:00', hasta: '22:00' },
  jueves: { abierto: true, desde: '07:00', hasta: '22:00' },
  viernes: { abierto: true, desde: '07:00', hasta: '22:00' },
  sabado: { abierto: true, desde: '08:00', hasta: '20:00' },
  domingo: { abierto: false, desde: '', hasta: '' }
};

const MODALIDADES = [
  { id: 'presencial', label: 'Presencial', icon: 'building', desc: 'En nuestras aulas de Miraflores' },
  { id: 'online', label: 'Online', icon: 'video', desc: 'Videollamada con pizarra digital' }
];

const CATEGORIAS = [
  { id: 'escolar', label: 'Escolar', desc: 'Primaria y secundaria' },
  { id: 'preuniversitario', label: 'Pre-universitario', desc: 'Preparación para admisión' },
  { id: 'universitario', label: 'Universitario', desc: 'Carreras universitarias' },
  { id: 'idiomas', label: 'Idiomas', desc: 'Idiomas extranjeros' }
];

const PLANES = [
  {
    id: 'individual',
    nombre: 'Clase Individual',
    desc: 'Paga por clase según la necesites',
    descuento: 0,
    destacado: false,
    beneficios: [
      'Reserva cuando quieras',
      'Cancela hasta 12h antes sin costo',
      'Materiales digitales incluidos',
      'Acceso a grabaciones'
    ]
  },
  {
    id: 'pack4',
    nombre: 'Pack 4 Clases',
    desc: 'Ahorra con un paquete de 4 sesiones',
    descuento: 10,
    destacado: true,
    beneficios: [
      '10% de descuento',
      'Vigencia de 60 días',
      'Cambia fechas sin penalidad',
      'Reporte de progreso mensual'
    ]
  },
  {
    id: 'pack8',
    nombre: 'Pack 8 Clases',
    desc: 'Mejor relación precio/beneficio',
    descuento: 15,
    destacado: false,
    beneficios: [
      '15% de descuento',
      'Vigencia de 90 días',
      'Cambia fechas sin penalidad',
      'Reporte de progreso mensual',
      'Sesión de orientación familiar'
    ]
  },
  {
    id: 'mensual',
    nombre: 'Mensualidad',
    desc: '8 clases al mes con plan fijo',
    descuento: 20,
    destacado: false,
    beneficios: [
      '20% de descuento',
      '8 clases mensuales',
      'Tutor fijo asignado',
      'Cambios sin penalidad',
      'Reporte mensual completo',
      'Acceso a workshops grupales'
    ]
  }
];

const Storage = {
  get(key, fallback = null) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) { console.error('Storage error', e); }
  },
  remove(key) { localStorage.removeItem(key); }
};

const Auth = {
  init() {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.length === 0) {
      Storage.set(STORAGE_KEYS.USERS, [
        { id: 'u1', nombre: 'Juan Pérez', email: 'juan@test.com', telefono: '+51 999 111 222', password: '123456', foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80' },
        { id: 'u2', nombre: 'María López', email: 'maria@test.com', telefono: '+51 999 333 444', password: '123456', foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80' }
      ]);
    }
  },
  current() {
    const s = Storage.get(STORAGE_KEYS.SESSION);
    if (!s) return null;
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    return users.find(u => u.id === s.userId) || null;
  },
  isLogged() { return !!this.current(); },
  login(email, password) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { ok: false, error: 'Email o contraseña incorrectos.' };
    Storage.set(STORAGE_KEYS.SESSION, { userId: user.id, token: 'tkn_' + Date.now(), expires: Date.now() + 86400000 });
    return { ok: true, user };
  },
  register(data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.find(u => u.email === data.email)) return { ok: false, error: 'El email ya está registrado.' };
    const newUser = {
      id: 'u' + Date.now(),
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono || '',
      password: data.password,
      foto: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80'
    };
    users.push(newUser);
    Storage.set(STORAGE_KEYS.USERS, users);
    Storage.set(STORAGE_KEYS.SESSION, { userId: newUser.id, token: 'tkn_' + Date.now(), expires: Date.now() + 86400000 });
    return { ok: true, user: newUser };
  },
  logout() { Storage.remove(STORAGE_KEYS.SESSION); },
  update(userId, data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const idx = users.findIndex(u => u.id === userId);
    if (idx === -1) return { ok: false };
    users[idx] = { ...users[idx], ...data };
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true, user: users[idx] };
  }
};

const Reservas = {
  init() {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, null);
    if (list === null) {
      const samples = [
        { id: 'r1', userId: 'u1', servicioId: 'ec1', profesionalId: 'pr1', fecha: this._futureDate(3), hora: '16:00', modalidad: 'presencial', estado: 'confirmada', pago: 'pagado', metodoPago: 'tarjeta', precio: 35, notas: 'Repaso de álgebra', createdAt: Date.now() - 86400000 * 2 },
        { id: 'r2', userId: 'u1', servicioId: 'id1', profesionalId: 'pr5', fecha: this._futureDate(7), hora: '18:00', modalidad: 'online', estado: 'pendiente', pago: 'pendiente', metodoPago: null, precio: 45, notas: '', createdAt: Date.now() - 86400000 },
        { id: 'r3', userId: 'u1', servicioId: 'pu2', profesionalId: 'pr8', fecha: this._futureDate(-10), hora: '10:00', modalidad: 'presencial', estado: 'completada', pago: 'pagado', metodoPago: 'yape', precio: 50, notas: 'Preparación para examen', createdAt: Date.now() - 86400000 * 15 }
      ];
      Storage.set(STORAGE_KEYS.RESERVAS, samples);
    }
  },
  _futureDate(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  },
  listByUser(userId) {
    return Storage.get(STORAGE_KEYS.RESERVAS, [])
      .filter(r => r.userId === userId)
      .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  },
  get(id) {
    return Storage.get(STORAGE_KEYS.RESERVAS, []).find(r => r.id === id) || null;
  },
  create(data) {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, []);
    const newReserva = {
      id: 'r' + Date.now(),
      createdAt: Date.now(),
      estado: 'pendiente',
      pago: 'pendiente',
      metodoPago: null,
      ...data
    };
    list.push(newReserva);
    Storage.set(STORAGE_KEYS.RESERVAS, list);
    return newReserva;
  },
  update(id, data) {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, []);
    const idx = list.findIndex(r => r.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...data };
    Storage.set(STORAGE_KEYS.RESERVAS, list);
    return list[idx];
  },
  cancel(id) { return this.update(id, { estado: 'anulada' }); },
  canCancel(reserva) {
    if (!reserva) return false;
    if (reserva.estado === 'completada' || reserva.estado === 'anulada') return false;
    const [y, mo, da] = reserva.fecha.split('-').map(Number);
    const [hh, mm] = reserva.hora.split(':').map(Number);
    const dt = new Date(y, mo - 1, da, hh, mm);
    const now = new Date();
    const diff = (dt - now) / (1000 * 60 * 60);
    return diff >= 12;
  },
  refundable(reserva) {
    if (!reserva || reserva.pago !== 'pagado') return false;
    const [y, mo, da] = reserva.fecha.split('-').map(Number);
    const [hh, mm] = reserva.hora.split(':').map(Number);
    const dt = new Date(y, mo - 1, da, hh, mm);
    const now = new Date();
    const diff = (dt - now) / (1000 * 60 * 60);
    return diff >= 24;
  },
  setDraft(data) { Storage.set(STORAGE_KEYS.RESERVA_DRAFT, data); },
  getDraft() { return Storage.get(STORAGE_KEYS.RESERVA_DRAFT, null); },
  clearDraft() { Storage.remove(STORAGE_KEYS.RESERVA_DRAFT); },
  setPagoDraft(data) { Storage.set(STORAGE_KEYS.PAGO_DRAFT, data); },
  getPagoDraft() { return Storage.get(STORAGE_KEYS.PAGO_DRAFT, null); },
  clearPagoDraft() { Storage.remove(STORAGE_KEYS.PAGO_DRAFT); }
};

const UI = {
  formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('es-ES', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  },
  formatDateShort(iso) {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
  },
  formatPrice(n) { return 'S/ ' + Number(n).toFixed(2); },
  precioPorModalidad(servicio, modalidad) {
    if (!servicio) return 0;
    return modalidad === 'online' ? Math.round(servicio.precio * 0.8) : servicio.precio;
  },
  reservaPrecio(r) {
    if (r && typeof r.precio === 'number') return r.precio;
    const s = r ? SERVICIOS.find(x => x.id === r.servicioId) : null;
    return s ? s.precio : 0;
  },
  servicioById(id) { return SERVICIOS.find(s => s.id === id); },
  profesionalById(id) { return PROFESIONALES.find(p => p.id === id); },
  categoriaById(id) { return CATEGORIAS.find(c => c.id === id); },
  modalidadLabel(mod) {
    const m = MODALIDADES.find(x => x.id === mod);
    return m ? m.label : mod;
  },
  estadoBadge(estado) {
    const map = {
      pendiente: { label: 'Pendiente', cls: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
      confirmada: { label: 'Confirmada', cls: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
      pagada: { label: 'Pagada', cls: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
      completada: { label: 'Completada', cls: 'bg-slate-500/20 text-slate-300 border-slate-500/30' },
      anulada: { label: 'Anulada', cls: 'bg-red-500/20 text-red-300 border-red-500/30' }
    };
    return map[estado] || map.pendiente;
  },
  pagoBadge(pago) {
    const map = {
      pendiente: { label: 'Por pagar', cls: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
      pagado: { label: 'Pagado', cls: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' }
    };
    return map[pago] || map.pendiente;
  },
  isPastDate(iso) {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const d = new Date(iso + 'T00:00:00');
    return d < today;
  },
  generateSlots(servicioId, fecha) {
    if (!servicioId || !fecha) return [];
    const day = new Date(fecha + 'T00:00:00').getDay();
    const dayKey = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'][day];
    const h = HORARIOS[dayKey];
    if (!h.abierto) return [];
    const slots = [];
    let [hStart, mStart] = h.desde.split(':').map(Number);
    let [hEnd, mEnd] = h.hasta.split(':').map(Number);
    let cur = hStart * 60 + mStart;
    const end = hEnd * 60 + mEnd;
    const duracion = SERVICIOS.find(s => s.id === servicioId)?.duracion || 60;
    while (cur + duracion <= end) {
      const hh = String(Math.floor(cur / 60)).padStart(2, '0');
      const mm = String(cur % 60).padStart(2, '0');
      slots.push(`${hh}:${mm}`);
      cur += 30;
    }
    return slots;
  },
  getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  },
  setRedirect(url) { Storage.set('edu_redirect', url || window.location.pathname); },
  getRedirect() {
    const r = Storage.get('edu_redirect', null);
    if (r) Storage.remove('edu_redirect');
    return r;
  },
  toast(msg, type = 'success') {
    const el = document.createElement('div');
    el.className = `fixed top-6 right-6 z-[9999] px-6 py-3 rounded-lg shadow-2xl font-medium text-sm border ${type === 'success' ? 'bg-emerald-500/20 text-emerald-100 border-emerald-500/40' : 'bg-red-500/20 text-red-100 border-red-500/40'} backdrop-blur`;
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; }, 2500);
    setTimeout(() => el.remove(), 2900);
  },
  requireAuth(redirectUrl) {
    if (!Auth.isLogged()) {
      this.setRedirect(redirectUrl);
      window.location.href = 'inicio-sesion.html';
      return false;
    }
    return true;
  },
  applyTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    Storage.set(STORAGE_KEYS.THEME, theme);
  },
  initTheme() {
    const saved = Storage.get(STORAGE_KEYS.THEME, 'dark');
    this.applyTheme(saved);
  },
  showConfirm(title, msg, onConfirm) {
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.innerHTML = `
      <div class="modal-content">
        <h3 class="text-xl font-bold text-white mb-2" style="font-family: 'Playfair Display', serif;">${title}</h3>
        <p class="text-gray-300 mb-6 leading-relaxed">${msg}</p>
        <div class="flex gap-3 justify-end">
          <button id="cancelBtn" class="px-5 py-2 rounded-lg text-gray-300 border border-gray-700 hover:bg-gray-800 transition-colors">Cancelar</button>
          <button id="confirmBtn" class="btn-primary">Confirmar</button>
        </div>
      </div>`;
    document.body.appendChild(backdrop);
    const close = () => backdrop.remove();
    document.getElementById('cancelBtn').onclick = close;
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    document.getElementById('confirmBtn').onclick = () => { close(); onConfirm(); };
  }
};

function buildHeader(active) {
  const user = Auth.current();
  const isDark = document.documentElement.classList.contains('dark');
  const links = [
    { href: 'index.html', label: 'Inicio', key: 'index' },
    { href: 'servicios.html', label: 'Servicios', key: 'servicios' },
    { href: 'precios.html', label: 'Precios', key: 'precios' },
    { href: 'galeria.html', label: 'Galería', key: 'galeria' },
    { href: 'contacto.html', label: 'Contacto', key: 'contacto' }
  ];
  const authLinks = user
    ? `<a href="perfil.html" class="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
        <img src="${user.foto}" class="h-7 w-7 rounded-full object-cover border border-primary/40" alt=""/>
        <span class="hidden lg:inline">${user.nombre.split(' ')[0]}</span>
       </a>
       <a href="#" id="btnLogout" class="text-sm font-medium text-red-400 hover:text-red-300 transition-colors">Salir</a>`
    : `<a href="inicio-sesion.html" class="text-sm font-medium hover:text-primary transition-colors">Ingresar</a>
       <a href="registro.html" class="bg-primary text-background-dark font-bold py-2 px-5 rounded-lg text-sm shadow-md hover:bg-primary/90 transition-all">Registrarse</a>`;

  return `
  <header class="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-md border-b border-primary/20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <a href="index.html" class="flex items-center gap-3">
          <svg class="h-9 w-9 text-primary" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L24 8L42 12V22C42 32 34 40 24 44C14 40 6 32 6 22V12Z" stroke="currentColor" stroke-width="2.5" fill="none"/>
            <path d="M16 24L22 30L34 18" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div>
            <h2 class="text-lg font-bold text-white leading-tight" style="font-family: 'Playfair Display', serif">EduClass</h2>
            <p class="text-[10px] uppercase tracking-widest text-primary/80">Clases Particulares</p>
          </div>
        </a>
        <nav class="hidden lg:flex items-center gap-7" id="navMenu">
          ${links.map(l => `<a href="${l.href}" class="text-sm font-medium transition-colors ${active === l.key ? 'text-primary' : 'text-gray-300 hover:text-primary'}">${l.label}</a>`).join('')}
        </nav>
        <div class="hidden lg:flex items-center gap-4">
          ${authLinks}
          <button id="btnTheme" class="text-gray-300 hover:text-primary transition-colors" title="Cambiar tema">
            ${isDark ? '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>' : '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>'}
          </button>
        </div>
        <button class="lg:hidden text-white" id="btnMenu">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <nav class="hidden lg:hidden flex-col gap-1 pb-4" id="navMobile">
        ${links.map(l => `<a href="${l.href}" class="block py-2 px-3 rounded text-sm font-medium transition-colors ${active === l.key ? 'text-primary bg-primary/10' : 'text-gray-300 hover:text-primary hover:bg-primary/5'}">${l.label}</a>`).join('')}
        <div class="border-t border-primary/20 mt-3 pt-3 flex flex-col gap-2">
          ${user
            ? `<a href="perfil.html" class="block py-2 px-3 rounded text-sm text-gray-300 hover:bg-primary/5">Mi Perfil</a>
               <a href="#" id="btnLogoutMobile" class="block py-2 px-3 rounded text-sm text-red-400 hover:bg-red-500/10">Cerrar sesión</a>`
            : `<a href="inicio-sesion.html" class="block py-2 px-3 rounded text-sm text-gray-300 hover:bg-primary/5">Ingresar</a>
               <a href="registro.html" class="block py-2 px-3 rounded text-sm text-primary font-semibold hover:bg-primary/5">Registrarse</a>`}
        </div>
      </nav>
    </div>
  </header>`;
}

function buildFooter() {
  return `
  <footer class="bg-background-dark border-t border-primary/20 mt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <svg class="h-8 w-8 text-primary" viewBox="0 0 48 48" fill="none"><path d="M6 12L24 8L42 12V22C42 32 34 40 24 44C14 40 6 32 6 22V12Z" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M16 24L22 30L34 18" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <h3 class="text-lg font-bold text-white" style="font-family: 'Playfair Display', serif">EduClass</h3>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed">Academia de clases particulares con tutores especializados. Refuerzo escolar, idiomas y preparación universitaria en modalidad presencial y online.</p>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Navegación</h4>
          <ul class="space-y-2">
            <li><a href="index.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Inicio</a></li>
            <li><a href="servicios.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Servicios</a></li>
            <li><a href="precios.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Precios</a></li>
            <li><a href="galeria.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Galería</a></li>
            <li><a href="horarios.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Horarios</a></li>
            <li><a href="contacto.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal</h4>
          <ul class="space-y-2">
            <li><a href="terminos.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Términos y Condiciones</a></li>
            <li><a href="privacidad.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Políticas de Privacidad</a></li>
            <li><a href="recuperar-password.html" class="text-sm text-gray-400 hover:text-primary transition-colors">Recuperar Contraseña</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Contacto</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Av. Larco 345, Miraflores
            </li>
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +51 999 555 333
            </li>
            <li class="flex items-start gap-2">
              <svg class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              contacto@educlass.pe
            </li>
          </ul>
          <div class="flex gap-3 mt-5">
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background-dark transition-colors" aria-label="Facebook">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background-dark transition-colors" aria-label="Instagram">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" class="h-9 w-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background-dark transition-colors" aria-label="WhatsApp">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-primary/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-500">© 2024 EduClass · Academia de Clases Particulares. Todos los derechos reservados.</p>
        <p class="text-xs text-gray-600">Miraflores, Lima · Hecho con dedicación</p>
      </div>
    </div>
  </footer>`;
}

function initLayout(active) {
  UI.initTheme();
  Auth.init();
  Reservas.init();
  const headerHost = document.getElementById('appHeader');
  const footerHost = document.getElementById('appFooter');
  if (headerHost) headerHost.innerHTML = buildHeader(active);
  if (footerHost) footerHost.innerHTML = buildFooter();

  const btnMenu = document.getElementById('btnMenu');
  const navMobile = document.getElementById('navMobile');
  if (btnMenu && navMobile) {
    btnMenu.addEventListener('click', () => {
      navMobile.classList.toggle('hidden');
      navMobile.classList.toggle('flex');
    });
  }

  const btnTheme = document.getElementById('btnTheme');
  if (btnTheme) {
    btnTheme.addEventListener('click', () => {
      const cur = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      UI.applyTheme(cur === 'dark' ? 'light' : 'dark');
      window.location.reload();
    });
  }

  const bindLogout = (sel) => {
    const el = document.querySelector(sel);
    if (el) el.addEventListener('click', (e) => {
      e.preventDefault();
      Auth.logout();
      UI.toast('Sesión cerrada correctamente');
      setTimeout(() => window.location.href = 'index.html', 600);
    });
  };
  bindLogout('#btnLogout');
  bindLogout('#btnLogoutMobile');
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.getAttribute('data-page') || '';
  initLayout(page);
  if (typeof pageInit === 'function') pageInit();
});
