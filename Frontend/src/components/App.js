import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './navbar.jsx';
import Header from './header';
import HomePage from '../screens/homePage';
import EmpresasPage from '../screens/empresasPage';
import ContactoPage from '../screens/contactoPage';
import HistoriaPage from '../screens/historiaPage';
import EquipoPage from '../screens/equipoPage.js';
import EditorEmpresasPage from '../screens/editorEmpresasPage';
import AdminEmpresasDashboard from './AdminEmpresasDashboard.jsx';
import AdministrarUsuarioPanel from './administrarUsuarioPanel';
import CambiarPasswordPage from '../screens/cambiarPasswordPage.jsx';
import ResetPasswordPage from '../screens/resetPasswordPage.jsx';
import VerifyEmailPage from '../screens/verifyEmailPage.jsx';
import FooterBar from './footerBar.js';
import { logout as logoutService } from '../services/authService';
import { setAuthToken } from '../services/api';
import PanelAuditoria from './PanelAuditoria';
import SecurityComplianceDashboard from './SecurityComplianceDashboard';
import RiesgosTable from './RiesgosTable';

function RedirectDashboard() {
  useEffect(() => {
    window.open('https://snarf3.github.io/Dashboard-bicentenario/', '_blank');
  }, []);

  return (
    <div className="p-12 text-center">
      Abriendo el dashboard externo en una nueva pestaña...
    </div>
  );
}

function App() {
  const [authState, setAuthState] = useState({ user: null, token: null });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const storedAuth = localStorage.getItem('authData');
    if (storedAuth) {
      try {
        const parsed = JSON.parse(storedAuth);
        if (parsed?.token) {
          setAuthToken(parsed.token);
        }
        setAuthState(parsed);
      } catch {
        localStorage.removeItem('authData');
      }
    }
  }, []);

  const handleLogin = useCallback((authData) => {
    if (!authData?.user || !authData?.token) return;
    localStorage.setItem('authData', JSON.stringify(authData));
    setAuthToken(authData.token);
    setAuthState(authData);
  }, []);

  const handleAuthUpdate = useCallback((updatedAuth) => {
    localStorage.setItem('authData', JSON.stringify(updatedAuth));
    setAuthState(updatedAuth);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('authData');
    logoutService();
    setAuthState({ user: null, token: null });
  }, []);

  const loggedInUser        = authState?.user ?? null;
  const canAccessAdmin      = loggedInUser && loggedInUser.idRol <= 3;
  const canAccessAdminEmpresas = loggedInUser && [1, 3].includes(loggedInUser.idRol);
  const canManageUsers      = loggedInUser && loggedInUser.idRol <= 2;

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-gray-50/50">
        <Header
          loggedInUser={loggedInUser}
          onLogout={handleLogout}
          onLogin={handleLogin}
          toggleMobileMenu={toggleMobileMenu}
        />
        <Navbar
          loggedInUser={loggedInUser}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />

        <main className="flex-grow pt-[156px] flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage loggedInUser={loggedInUser} />} />
            <Route path="/empresas" element={<EmpresasPage loggedInUser={loggedInUser} />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/historia" element={<HistoriaPage />} />
            <Route path="/equipo" element={<EquipoPage />} />

            <Route
              path="/cambiar-password"
              element={
                <CambiarPasswordPage
                  authState={authState}
                  onAuthUpdate={handleAuthUpdate}
                />
              }
            />

            <Route path="/reset-password" element={<ResetPasswordPage />} />

            {/* [NUEVO] Ruta pública de verificación de correo.
                No requiere auth — el token en la URL es la única credencial.
                Mismo patrón que /reset-password: accesible sin estar logueado. */}
            <Route path="/verify-email" element={<VerifyEmailPage />} />

            <Route
              path="/dashboards"
              element={
                loggedInUser ? (
                  <RedirectDashboard />
                ) : (
                  <div className="p-12 text-center text-accent font-bold">
                    Acceso denegado. Inicia sesión.
                  </div>
                )
              }
            />

            <Route
              path="/editor-empresas"
              element={
                canAccessAdmin ? (
                  <EditorEmpresasPage />
                ) : (
                  <div className="p-12 text-center text-accent font-bold">
                    No tienes permisos para acceder a esta página.
                  </div>
                )
              }
            />

            <Route
              path="/admin-empresas"
              element={
                canAccessAdminEmpresas ? (
                  <AdminEmpresasDashboard />
                ) : (
                  <div className="p-12 text-center text-accent font-bold">
                    No tienes permisos para acceder a esta página.
                  </div>
                )
              }
            />

            <Route
              path="/panel-usuarios"
              element={
                canManageUsers ? (
                  <AdministrarUsuarioPanel loggedInUser={loggedInUser} />
                ) : (
                  <div className="p-12 text-center text-accent font-bold">
                    No tienes permisos para acceder a esta página.
                  </div>
                )
              }
            />

            <Route
              path="/auditoria"
              element={
                [1, 2, 3].includes(loggedInUser?.idRol) ? (
                  <PanelAuditoria loggedInUser={loggedInUser} />
                ) : (
                  <div className="p-12 text-center text-accent font-bold">
                    No tienes permisos para acceder a esta página.
                  </div>
                )
              }
            />

            <Route
              path="/compliance"
              element={
                [1, 2].includes(loggedInUser?.idRol) ? (
                  <SecurityComplianceDashboard />
                ) : (
                  <div className="p-12 text-center text-accent font-bold">
                    No tienes permisos para acceder a esta página.
                  </div>
                )
              }
            />

            <Route
              path="/riesgos"
              element={
                [1, 2, 3].includes(loggedInUser?.idRol) ? (
                  <RiesgosTable />
                ) : (
                  <div className="p-12 text-center text-accent font-bold">
                    No tienes permisos para acceder a esta página.
                  </div>
                )
              }
            />
          </Routes>
        </main>

        <FooterBar />
      </div>
    </Router>
  );
}

export default App;