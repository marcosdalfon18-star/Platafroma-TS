import './style.css';
import { initializeFirebase } from './firebase';

// Inicializar Firebase cuando la aplicación se carga
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Iniciando aplicación...');
  
  const statusElement = document.getElementById('firebase-status');
  
  if (statusElement) {
    const result = initializeFirebase();
    
    if (result.initialized) {
      statusElement.className = 'status connected';
      statusElement.innerHTML = `<span>✅ ${result.message}</span>`;
    } else {
      statusElement.className = 'status error';
      statusElement.innerHTML = `<span>⚠️ ${result.message}</span>`;
    }
  }
  
  console.log('✅ Aplicación iniciada');
});

// Exportar funciones si necesitas usarlas en otros módulos
export {};
