import React, { useState, useMemo } from 'react';

// ─────────────────────────────────────────────
// Datos estáticos — en producción reemplazar
// los eventsData con un fetch a tu endpoint
// de registro de eventos (ej. GET /api/auditoria)
// ─────────────────────────────────────────────

const CIA_CONTROLS = [
  {
    id: 'confidencialidad',
    icon: 'ti-lock',
    title: 'Confidencialidad',
    color: '#185FA5',
    desc: 'Solo los usuarios autorizados acceden a la información, según su rol en el sistema.',
    bars: [
      { label: 'JWT + Guards',  pct: 100 },
      { label: 'RBAC de roles', pct: 100 },
      { label: 'Bcrypt (hash)', pct: 100 },
    ],
    modules: ['Auth', 'JwtGuard', 'RolesGuard', 'Usuarios'],
  },
  {
    id: 'integridad',
    icon: 'ti-shield-check',
    title: 'Integridad',
    color: '#0F6E56',
    desc: 'Los datos no son alterados de forma no autorizada; cada modificación es validada y trazable.',
    bars: [
      { label: 'Validación DTOs',  pct: 100 },
      { label: 'TypeORM tipado',   pct: 100 },
      { label: 'Soft-delete audit', pct: 85 },
    ],
    modules: ['class-validator', 'TypeORM', 'DeleteDateColumn', 'Empresas'],
  },
  {
    id: 'disponibilidad',
    icon: 'ti-server',
    title: 'Disponibilidad',
    color: '#854F0B',
    desc: 'El sistema permanece accesible y funcional para los usuarios legítimos en todo momento.',
    bars: [
      { label: 'Auto-desbloqueo', pct: 100 },
      { label: 'Cron jobs',       pct: 100 },
      { label: 'Reset password',  pct: 100 },
    ],
    modules: ['AppTask (cron)', 'EmailService', 'Auth reset', 'Supabase'],
  },
];

const OWASP_ITEMS = [
  {
    id: 'A01:2021',
    name: 'Control de acceso roto',
    sub: 'Broken Access Control',
    status: 'mitigado',
    highlighted: true,
    controls: [
      { text: 'JWT Bearer en cada endpoint protegido', ref: 'JwtGuard' },
      { text: 'RBAC granular con 7 roles', ref: 'roles.const.ts' },
      { text: 'Validación de rol únicamente en backend, nunca en cliente', ref: null },
      { text: 'Payload JWT incluye idRol verificado en', ref: 'JwtStrategy.validate()' },
    ],
  },
  {
    id: 'A02:2021',
    name: 'Fallas criptográficas',
    sub: 'Cryptographic Failures',
    status: 'mitigado',
    highlighted: false,
    controls: [
      { text: 'Contraseñas hasheadas con bcrypt (cost factor 10)', ref: 'bcrypt' },
      { text: 'Reset tokens hasheados con SHA-256 antes de persistir', ref: 'SHA-256' },
      { text: 'JWT firmado con HS256 + secret de entorno', ref: null },
    ],
  },
  {
    id: 'A03:2021',
    name: 'Inyección',
    sub: 'Injection (SQL, NoSQL…)',
    status: 'mitigado',
    highlighted: true,
    controls: [
      { text: 'TypeORM usa queries parametrizadas — sin concatenación SQL', ref: null },
      { text: 'DTOs sanitizan toda entrada del cliente', ref: 'class-validator' },
    ],
  },
  {
    id: 'A04:2021',
    name: 'Diseño inseguro',
    sub: 'Insecure Design',
    status: 'parcial',
    highlighted: false,
    controls: [
      { text: 'Arquitectura modular NestJS con separación de capas', ref: null },
      { text: 'Principio de mínimo privilegio en cada módulo', ref: null },
    ],
  },
  {
    id: 'A05:2021',
    name: 'Configuración insegura',
    sub: 'Security Misconfiguration',
    status: 'mitigado',
    highlighted: true,
    controls: [
      { text: 'Variables sensibles en .env — nunca en código fuente', ref: '.env' },
      { text: 'CORS configurado explícitamente, no con wildcard en producción', ref: null },
    ],
  },
  {
    id: 'A06:2021',
    name: 'Componentes vulnerables',
    sub: 'Vulnerable Components',
    status: 'monitorear',
    highlighted: false,
    controls: [
      { text: 'NestJS 11, TypeORM 0.3, React 18 — versiones actuales', ref: null },
    ],
  },
  {
    id: 'A07:2021',
    name: 'Fallas de identificación y autenticación',
    sub: 'Identification Failures',
    status: 'mitigado',
    highlighted: true,
    controls: [
      { text: 'Bloqueo de cuenta tras 3 intentos fallidos', ref: 'isLocked + failedAttempts' },
      { text: 'Auto-desbloqueo configurable por tiempo', ref: 'LOCKOUT_MINUTES' },
      { text: 'Política de expiración de contraseña', ref: 'mustChangePassword' },
      { text: 'Reset seguro con token SHA-256 de un solo uso y TTL', ref: null },
      { text: 'Expiración de cuentas temporales validada en', ref: 'JwtStrategy' },
    ],
  },
  {
    id: 'A08:2021',
    name: 'Fallas de integridad',
    sub: 'Software/Data Integrity Failures',
    status: 'mitigado',
    highlighted: false,
    controls: [
      { text: 'DTOs validados con class-validator + ValidationPipe', ref: 'ValidationPipe' },
      { text: 'Tipado fuerte TypeScript, prohibición de any', ref: null },
    ],
  },
  {
    id: 'A09:2021',
    name: 'Registro y monitoreo insuficiente',
    sub: 'Logging & Monitoring Failures',
    status: 'parcial',
    highlighted: true,
    controls: [
      { text: 'Eventos de bloqueo registrados y notificados por email', ref: null },
      { text: 'Panel de eventos de riesgo implementado', ref: null },
    ],
  },
  {
    id: 'A10:2021',
    name: 'Falsificación de solicitud',
    sub: 'Server-Side Request Forgery',
    status: 'parcial',
    highlighted: false,
    controls: [
      { text: 'Validación de URLs en campos de entrada mediante DTOs', ref: 'direccionWeb' },
    ],
  },
];

/** Reemplazar con datos reales del endpoint de auditoría */
const MOCK_EVENTS = [
  { id: 1, ts: '2026-05-24 10:47:02', severity: 'ALTO',  type: 'Bloqueo de cuenta',             user: 'r.mamani',       detail: 'Cuenta bloqueada tras 3 intentos fallidos consecutivos' },
  { id: 2, ts: '2026-05-24 09:31:15', severity: 'ALTO',  type: 'Token expirado',                 user: 'c.vega',         detail: 'JWT rechazado — sesión expirada, requiere re-autenticación' },
  { id: 3, ts: '2026-05-24 08:15:44', severity: 'MEDIO', type: 'Cuenta temporal expirada',       user: 'temp_invitado_03', detail: 'Acceso denegado — cuenta temporal superó su fecha de expiración' },
  { id: 4, ts: '2026-05-24 07:52:30', severity: 'MEDIO', type: 'Acceso no autorizado',           user: 'p.flores',       detail: 'Rol VISITANTE intentó acceder a /admin-empresas' },
  { id: 5, ts: '2026-05-23 23:10:08', severity: 'BAJO',  type: 'Reset de contraseña',            user: 'a.quispe',       detail: 'Solicitud de reset password completada exitosamente' },
];

// ─────────────────────────────────────────────
// Sub-componentes
// ─────────────────────────────────────────────

const TABS = [
  { id: 'cia',    label: 'Tríada CIA' },
  { id: 'owasp',  label: 'OWASP Top 10' },
  { id: 'events', label: 'Eventos de riesgo' },
];

function StatusBadge({ status }) {
  const map = {
    mitigado:   { cls: 'bg-green-50 text-green-800 border border-green-200',  icon: 'ti-check',          label: 'Mitigado' },
    parcial:    { cls: 'bg-blue-50  text-blue-800  border border-blue-200',   icon: 'ti-minus',          label: 'Parcial' },
    monitorear: { cls: 'bg-amber-50 text-amber-800 border border-amber-200',  icon: 'ti-alert-triangle', label: 'Monitorear' },
  };
  const s = map[status] ?? map.parcial;
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded ${s.cls}`}>
      <i className={`ti ${s.icon} text-sm`} aria-hidden="true" />
      {s.label}
    </span>
  );
}

function SeverityBadge({ severity }) {
  const map = {
    ALTO:  { cls: 'bg-red-50    text-red-800   border border-red-200',    dot: 'bg-red-500' },
    MEDIO: { cls: 'bg-amber-50  text-amber-800 border border-amber-200',  dot: 'bg-amber-500' },
    BAJO:  { cls: 'bg-green-50  text-green-800 border border-green-200',  dot: 'bg-green-600' },
  };
  const s = map[severity] ?? map.BAJO;
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded ${s.cls}`}>
      <span className={`w-2 h-2 rounded-full ${s.dot}`} />
      {severity}
    </span>
  );
}

function CodeRef({ children }) {
  return (
    <code className="text-xs bg-gray-100 text-gray-700 px-1 py-0.5 rounded font-mono border border-gray-200">
      {children}
    </code>
  );
}

function ProgressBar({ pct, color }) {
  return (
    <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
      <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
    </div>
  );
}

// ─── Pestaña CIA ───
function CIAPanel() {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-4">
        Implementación de las tres propiedades fundamentales de la seguridad de la información en los módulos activos del sistema.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        {CIA_CONTROLS.map((c) => (
          <div
            key={c.id}
            className="bg-white border border-gray-100 rounded-xl p-5"
            style={{ borderTop: `2px solid ${c.color}` }}
          >
            <i className={`ti ${c.icon} text-2xl mb-3 block`} style={{ color: c.color }} aria-hidden="true" />
            <p className="text-sm font-medium text-gray-900 mb-1">{c.title}</p>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">{c.desc}</p>
            <div className="flex flex-col gap-2 mb-4">
              {c.bars.map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 w-28 shrink-0">{b.label}</span>
                  <ProgressBar pct={b.pct} color={c.color} />
                  <span className="text-xs font-medium text-gray-800 w-8 text-right">{b.pct}%</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1">
              {c.modules.map((m) => (
                <span key={m} className="text-xs px-2 py-0.5 rounded border border-gray-200 text-gray-500 bg-gray-50">
                  {m}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-50 rounded-lg px-4 py-3 flex items-start gap-3">
        <i className="ti ti-info-circle text-blue-500 text-base mt-0.5 shrink-0" aria-hidden="true" />
        <p className="text-xs text-gray-600 leading-relaxed">
          <span className="font-medium text-gray-800">Principio de mínimo privilegio — </span>
          Cada rol accede únicamente a los recursos que requiere su función.{' '}
          <CodeRef>ROLES_ADMIN_SISTEMA</CodeRef>,{' '}<CodeRef>ROLES_ADMIN_EMPRESAS</CodeRef>{' '}y{' '}
          <CodeRef>ROLES_INVESTIGADORES</CodeRef>{' '}están definidos en{' '}
          <CodeRef>roles.const.ts</CodeRef>{' '}y aplicados por{' '}
          <CodeRef>RolesGuard</CodeRef>{' '}en cada endpoint protegido, sin excepciones del lado del cliente.
        </p>
      </div>
    </div>
  );
}

// ─── Pestaña OWASP ───
function OWASPPanel() {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-4">
        Mapeo de los 10 riesgos críticos de seguridad web (OWASP 2021) con los controles implementados en Orbis-Seguridad.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              {['ID', 'Riesgo', 'Estado', 'Controles implementados'].map((h) => (
                <th
                  key={h}
                  className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide pb-2 border-b border-gray-100 px-2"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {OWASP_ITEMS.map((item) => (
              <tr
                key={item.id}
                className={item.highlighted ? 'bg-gray-50/70' : ''}
              >
                <td className="px-2 py-3 border-b border-gray-100 align-top">
                  <span className="text-xs font-mono font-medium text-blue-700">{item.id}</span>
                </td>
                <td className="px-2 py-3 border-b border-gray-100 align-top">
                  <p className="font-medium text-gray-900 text-xs leading-snug">{item.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                </td>
                <td className="px-2 py-3 border-b border-gray-100 align-top whitespace-nowrap">
                  <StatusBadge status={item.status} />
                </td>
                <td className="px-2 py-3 border-b border-gray-100 align-top">
                  <ul className="flex flex-col gap-1.5">
                    {item.controls.map((ctrl, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <i className="ti ti-check text-green-600 text-sm mt-0.5 shrink-0" aria-hidden="true" />
                        <span className="text-xs text-gray-600">
                          {ctrl.text}
                          {ctrl.ref && <> — <CodeRef>{ctrl.ref}</CodeRef></>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Pestaña Eventos ───
function EventsPanel() {
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(
    () => (filter === 'all' ? MOCK_EVENTS : MOCK_EVENTS.filter((e) => e.severity === filter)),
    [filter],
  );

  return (
    <div>
      <p className="text-sm text-gray-500 mb-4">
        Registro de eventos de seguridad detectados por el sistema. En producción, reemplazar{' '}
        <CodeRef>MOCK_EVENTS</CodeRef> con un fetch a <CodeRef>GET /api/auditoria</CodeRef>.
      </p>
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="text-xs border border-gray-200 rounded-md px-2 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-300"
        >
          <option value="all">Todos los niveles</option>
          <option value="ALTO">Alto</option>
          <option value="MEDIO">Medio</option>
          <option value="BAJO">Bajo</option>
        </select>
        <span className="ml-auto text-xs text-gray-400">
          {filtered.length} evento{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              {['Fecha y hora', 'Severidad', 'Tipo de evento', 'Usuario', 'Detalle'].map((h) => (
                <th
                  key={h}
                  className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide pb-2 border-b border-gray-100 px-2"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((ev) => (
              <tr key={ev.id} className="hover:bg-gray-50/60 transition-colors">
                <td className="px-2 py-2.5 border-b border-gray-100 font-mono text-xs text-gray-500 whitespace-nowrap">
                  {ev.ts}
                </td>
                <td className="px-2 py-2.5 border-b border-gray-100 whitespace-nowrap">
                  <SeverityBadge severity={ev.severity} />
                </td>
                <td className="px-2 py-2.5 border-b border-gray-100 font-medium text-xs text-gray-800">
                  {ev.type}
                </td>
                <td className="px-2 py-2.5 border-b border-gray-100">
                  <CodeRef>{ev.user}</CodeRef>
                </td>
                <td className="px-2 py-2.5 border-b border-gray-100 text-xs text-gray-500">
                  {ev.detail}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center text-xs text-gray-400 py-8">
                  No hay eventos para el filtro seleccionado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 bg-gray-50 rounded-lg px-4 py-3 flex items-start gap-3">
        <i className="ti ti-info-circle text-blue-500 text-base mt-0.5 shrink-0" aria-hidden="true" />
        <p className="text-xs text-gray-600 leading-relaxed">
          Los eventos de bloqueo de cuenta disparan una notificación automática al correo del usuario afectado mediante{' '}
          <CodeRef>EmailService.enviarCuentaBloqueada()</CodeRef>. El administrador puede desbloquear manualmente desde el panel de usuarios.
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Componente principal exportable
// Uso: <SecurityComplianceDashboard />
// ─────────────────────────────────────────────

export default function SecurityComplianceDashboard() {
  const [activeTab, setActiveTab] = useState('cia');

  const summaryCards = [
    { label: 'Controles OWASP activos', value: '8 / 10', sub: 'Top 10 mapeados' },
    { label: 'Tríada CIA cubierta',     value: '100%',   sub: 'C + I + D implementados' },
    { label: 'Eventos de riesgo (24h)', value: '5',      sub: 'Últimas 24 horas' },
    { label: 'Cuentas bloqueadas',      value: '2',      sub: 'Activas ahora' },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      {/* Cabecera */}
      <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
        <div>
          <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-0.5">
            Orbis-Seguridad — Administración
          </p>
          <h1 className="text-xl font-medium text-gray-900 mb-0.5">
            Auditoría y Cumplimiento
          </h1>
          <p className="text-sm text-gray-500">
            Evaluación activa de controles de seguridad · Mayo 2026
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-green-50 text-green-800 border border-green-200">
          <i className="ti ti-shield-check text-sm" aria-hidden="true" />
          Sistema operativo
        </span>
      </div>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {summaryCards.map((s) => (
          <div key={s.label} className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-500 mb-1">{s.label}</p>
            <p className="text-2xl font-medium text-gray-900 leading-none mb-1">{s.value}</p>
            <p className="text-xs text-gray-400">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Pestañas */}
      <div className="border-b border-gray-100 mb-5 flex gap-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`text-sm px-4 py-2 border-b-2 transition-colors ${
              activeTab === t.id
                ? 'border-gray-900 text-gray-900 font-medium'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Contenido de pestaña activa */}
      {activeTab === 'cia'    && <CIAPanel />}
      {activeTab === 'owasp'  && <OWASPPanel />}
      {activeTab === 'events' && <EventsPanel />}
    </div>
  );
}