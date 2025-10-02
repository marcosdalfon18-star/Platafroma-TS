import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { firebaseConfig } from './firebase.config';

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let storage: FirebaseStorage;

export function initializeFirebase() {
  try {
    // Verificar si la configuración ha sido actualizada
    if (firebaseConfig.apiKey === "TU_API_KEY") {
      console.warn('⚠️ Firebase no está configurado. Por favor actualiza las credenciales en src/firebase.config.ts');
      return {
        initialized: false,
        message: 'Configura tus credenciales de Firebase en src/firebase.config.ts'
      };
    }

    // Inicializar Firebase
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);

    console.log('✅ Firebase inicializado correctamente');
    return {
      initialized: true,
      message: 'Firebase conectado correctamente'
    };
  } catch (error) {
    console.error('❌ Error al inicializar Firebase:', error);
    return {
      initialized: false,
      message: `Error: ${error instanceof Error ? error.message : 'Error desconocido'}`
    };
  }
}

// Exportar instancias para usar en toda la aplicación
export { app, auth, db, storage };
