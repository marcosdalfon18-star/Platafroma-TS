# 🔧 Solución de Problemas

## Problemas comunes y soluciones

### ❌ "npm: command not found" o "node: command not found"
**Problema:** Node.js no está instalado en tu sistema.

**Solución:**
1. Descarga e instala Node.js desde https://nodejs.org/
2. Reinicia tu terminal
3. Verifica la instalación: `node --version` y `npm --version`

### ❌ Error al ejecutar `npm install`
**Problema:** Falló la instalación de dependencias.

**Solución:**
1. Elimina la carpeta `node_modules` si existe
2. Elimina el archivo `package-lock.json` si existe
3. Ejecuta nuevamente `npm install`
4. Si persiste el error, intenta con `npm install --legacy-peer-deps`

### ❌ "Puerto 3000 ya está en uso"
**Problema:** El puerto 3000 está siendo usado por otra aplicación.

**Solución 1 - Cambiar el puerto:**
1. Abre `vite.config.ts`
2. Cambia `port: 3000` a otro puerto como `port: 3001`
3. Guarda y ejecuta `npm start` nuevamente

**Solución 2 - Liberar el puerto:**
- En Windows: Abre el Administrador de tareas y finaliza procesos de Node.js
- En Mac/Linux: `lsof -ti:3000 | xargs kill -9`

### ⚠️ "Firebase no está configurado"
**Problema:** Las credenciales de Firebase no han sido configuradas.

**Solución:**
1. Ve a https://console.firebase.google.com/
2. Selecciona o crea un proyecto
3. En "Configuración del proyecto" > "Tus aplicaciones", crea una app web
4. Copia la configuración que Firebase te proporciona
5. Abre `src/firebase.config.ts`
6. Reemplaza los valores de ejemplo con tus credenciales reales:
   ```typescript
   export const firebaseConfig = {
     apiKey: "AIzaSyC...",  // Tu API Key real
     authDomain: "tu-proyecto.firebaseapp.com",
     projectId: "tu-proyecto",
     storageBucket: "tu-proyecto.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abc123"
   };
   ```
7. Guarda el archivo y recarga la aplicación

### ❌ Errores de TypeScript al compilar
**Problema:** Errores de sintaxis o tipo en el código TypeScript.

**Solución:**
1. Verifica que todos los archivos `.ts` tengan sintaxis correcta
2. Ejecuta `npx tsc --noEmit` para ver todos los errores
3. Corrige los errores uno por uno
4. Si es un problema con las dependencias, ejecuta `npm install` nuevamente

### ❌ La página está en blanco o no carga
**Problema:** Error en JavaScript o configuración incorrecta.

**Solución:**
1. Abre las herramientas de desarrollador del navegador (F12)
2. Ve a la pestaña "Console" para ver errores
3. Verifica que todos los archivos en `src/` existan
4. Revisa que `index.html` tenga la referencia correcta a `/src/main.ts`

### ❌ Cambios en el código no se reflejan
**Problema:** El servidor de desarrollo no recarga automáticamente.

**Solución:**
1. Detén el servidor (Ctrl+C en la terminal)
2. Limpia el caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)
3. Inicia el servidor nuevamente: `npm start`
4. Recarga la página manualmente

### 🔒 Errores de permisos en Firebase
**Problema:** Firebase rechaza las operaciones por reglas de seguridad.

**Solución:**
1. Ve a Firebase Console > Firestore Database o Storage
2. Revisa las "Reglas" (Rules)
3. Para desarrollo, puedes usar reglas permisivas (⚠️ solo para desarrollo):
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```
4. Para producción, implementa reglas de seguridad apropiadas

### 📦 Problemas al construir para producción
**Problema:** `npm run build` falla.

**Solución:**
1. Asegúrate de que no haya errores de TypeScript: `npx tsc --noEmit`
2. Verifica que todas las importaciones sean correctas
3. Elimina la carpeta `dist/` si existe
4. Ejecuta `npm run build` nuevamente
5. Revisa los mensajes de error específicos en la consola

## 🆘 Obtener más ayuda

Si ninguna de estas soluciones funciona:

1. **Revisa los logs completos:** Los errores completos en la terminal suelen dar más información
2. **Verifica la versión de Node.js:** Asegúrate de tener Node.js 16 o superior
3. **Busca el error específico:** Copia el mensaje de error y búscalo en Google
4. **Revisa la documentación:**
   - [Documentación de Vite](https://vitejs.dev/)
   - [Documentación de Firebase](https://firebase.google.com/docs)
   - [Documentación de TypeScript](https://www.typescriptlang.org/docs/)

## 💡 Consejos para desarrollo

- **Hot Reload:** Vite recarga automáticamente al guardar archivos
- **Console del navegador:** Usa F12 para ver logs y errores en tiempo real
- **TypeScript:** Presta atención a los avisos del editor (VSCode, WebStorm, etc.)
- **Firebase Console:** Revisa los logs y métricas en la consola de Firebase

## ✅ Verificación de instalación correcta

Para verificar que todo está funcionando correctamente:

```bash
# 1. Verifica Node.js y npm
node --version  # Debe mostrar v16 o superior
npm --version   # Debe mostrar 8 o superior

# 2. Verifica que las dependencias están instaladas
cd /ruta/a/tu/proyecto
ls node_modules  # Debe mostrar varias carpetas

# 3. Verifica TypeScript
npx tsc --version  # Debe mostrar la versión de TypeScript

# 4. Inicia la aplicación
npm start  # Debe abrir el navegador automáticamente
```

Si todos estos pasos funcionan, ¡tu instalación está correcta! 🎉
