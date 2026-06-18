import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ loggedInUser, isMobileMenuOpen, toggleMobileMenu }) => {
  const location = useLocation();

  const baseLinks = [
    { label: "NOSOTROS", path: "/historia" },
    { label: "EQUIPO", path: "/equipo" },
    { label: "INICIO", path: "/" },
    { label: "EMPRESAS", path: "/empresas" },
    { label: "CONTACTO", path: "/contacto" },
  ];

  let finalLinks = [...baseLinks];
  
  if (loggedInUser) {
    const userPerms = loggedInUser.permisos || [];
    
    // Panel de usuarios
    if (userPerms.includes('usuarios:leer')) {
      finalLinks.push({ label: "ADMIN USUARIOS", path: "/panel-usuarios" });
    }

    // Gestión de Roles y Permisos
    if (userPerms.includes('roles:gestionar')) {
      finalLinks.push({ label: "ADMIN ROLES", path: "/panel-roles" });
    }
    
    // Logs de auditoría
    if (userPerms.includes('logs:leer')) {
      finalLinks.push({ label: "AUDITORÍA", path: "/auditoria" });
    }
    
    // Panel visual OWASP
    if (userPerms.includes('dashboard:leer')) {
      finalLinks.push({ label: "OWASP & CIA", path: "/compliance" });
    }

    // Módulo de Análisis de Riesgos
    if (userPerms.includes('riesgos:leer')) {
      finalLinks.push({ label: "RIESGOS SI", path: "/riesgos" });
    }
  }

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.nav
        className="w-full fixed z-50 hidden md:flex items-center justify-center bg-surface-elevated/95 backdrop-blur-sm border-b border-stroke shadow-sm py-4 px-6 md:px-10 lg:px-20"
        style={{ top: 'var(--site-header-height)' }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex-1 min-w-[50px] md:min-w-[unset]"></div>

        <div className="flex flex-nowrap justify-center items-center gap-x-6 lg:gap-x-8">
          {finalLinks.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <React.Fragment key={index}>
                <motion.div
                  whileHover={!isActive ? { scale: 1.08 } : {}}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`font-miles text-sm font-medium tracking-wide relative pb-1 select-none inline-block transition-all duration-200 whitespace-nowrap no-underline hover:no-underline ${
                      isActive
                        ? "text-primary font-semibold cursor-default hover:text-primary"
                        : "text-text-main cursor-pointer hover:text-accent"
                    }`}
                    onClick={() => isMobileMenuOpen && toggleMobileMenu()}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="h-0.5 bg-primary rounded-md absolute bottom-0 left-0 right-0"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
                {index < finalLinks.length - 1 && (
                  <motion.span
                    className="text-text-muted font-light select-none text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    |
                  </motion.span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="flex-1 min-w-[50px] md:min-w-[unset]"></div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-surface-elevated/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center space-y-6 md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button onClick={toggleMobileMenu} className="absolute top-4 right-6 text-primary text-4xl focus:outline-none" aria-label="Cerrar menú">
              &times;
            </button>
            {finalLinks.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={index}
                  whileHover={!isActive ? { scale: 1.1 } : {}}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    to={item.path}
                    className={`font-miles text-xl font-medium tracking-wide relative pb-1 select-none inline-block transition-all duration-200 no-underline hover:no-underline ${
                      isActive
                        ? "text-primary font-semibold cursor-default hover:text-primary"
                        : "text-text-main cursor-pointer hover:text-accent"
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="underline-mobile"
                        className="h-1 bg-primary rounded-md absolute bottom-0 left-0 right-0"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;