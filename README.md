# Platafroma-TS
Plataforma de RRHH Marketing con Firebase y TypeScript

## 📋 Descripción
Esta es una aplicación web moderna desarrollada con TypeScript y Firebase, diseñada para gestión de recursos humanos y marketing.

## 🚀 Cómo ejecutar la aplicación

### Prerrequisitos
Antes de ejecutar la aplicación, asegúrate de tener instalado:
- **Node.js** (versión 16 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene incluido con Node.js)

### Paso 1: Instalar dependencias
Abre una terminal en la carpeta del proyecto y ejecuta:
```bash
npm install
```

### Paso 2: Configurar Firebase
1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Ve a **Configuración del proyecto** > **Tus aplicaciones**
4. Crea una aplicación web o selecciona una existente
5. Copia las credenciales de configuración
6. Abre el archivo `src/firebase.config.ts` y reemplaza los valores con tus credenciales:
   ```typescript
   export const firebaseConfig = {
     apiKey: "tu-api-key",
     authDomain: "tu-proyecto.firebaseapp.com",
     projectId: "tu-proyecto-id",
     storageBucket: "tu-proyecto.appspot.com",
     messagingSenderId: "123456789",
     appId: "tu-app-id"
   };
   ```

### Paso 3: Ejecutar la aplicación
Para iniciar el servidor de desarrollo:
```bash
npm start
```
o
```bash
npm run dev
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`

### Paso 4: Construir para producción
Para crear una versión optimizada para producción:
```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

## 📁 Estructura del proyecto
```
Platafroma-TS/
├── src/
│   ├── main.ts           # Punto de entrada de la aplicación
│   ├── firebase.ts       # Inicialización de Firebase
│   ├── firebase.config.ts # Configuración de Firebase
│   └── style.css         # Estilos de la aplicación
├── index.html            # Página principal HTML
├── package.json          # Dependencias del proyecto
├── tsconfig.json         # Configuración de TypeScript
├── vite.config.ts        # Configuración de Vite
└── README.md            # Este archivo

```

## 🛠️ Tecnologías utilizadas
- **TypeScript** - Lenguaje de programación
- **Firebase** - Backend como servicio (autenticación, base de datos, almacenamiento)
- **Vite** - Herramienta de desarrollo y build
- **HTML/CSS** - Interfaz de usuario

## 📝 Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala las dependencias del proyecto |
| `npm start` | Inicia el servidor de desarrollo |
| `npm run dev` | Inicia el servidor de desarrollo (alias) |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Previsualiza la versión de producción |

## ⚠️ Notas importantes
- **NUNCA** compartas tus credenciales de Firebase en repositorios públicos
- Considera usar variables de entorno para las credenciales en producción
- Actualiza las reglas de seguridad de Firebase según tus necesidades

## 🔒 Seguridad
Este proyecto incluye `.gitignore` para evitar que archivos sensibles se suban al repositorio. Si planeas usar credenciales reales, considera:
1. Usar variables de entorno
2. Implementar reglas de seguridad en Firebase
3. Configurar autenticación de usuarios

## 📚 Recursos adicionales
- [Documentación de Firebase](https://firebase.google.com/docs)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs/)
- [Documentación de Vite](https://vitejs.dev/)

## 🆘 Ayuda
Si tienes problemas al ejecutar la aplicación:
1. Verifica que Node.js esté instalado: `node --version`
2. Asegúrate de haber ejecutado `npm install`
3. Verifica que las credenciales de Firebase estén configuradas correctamente
4. Revisa la consola del navegador para ver errores específicos
