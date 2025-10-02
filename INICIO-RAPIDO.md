# 🚀 Guía Rápida de Inicio

## ¿Cómo ejecutar esta aplicación?

### 1️⃣ Instala Node.js
Si no tienes Node.js instalado:
- Descárgalo desde: https://nodejs.org/
- Instala la versión LTS (recomendada)
- Verifica la instalación abriendo una terminal y ejecutando: `node --version`

### 2️⃣ Instala las dependencias
Abre una terminal en esta carpeta y ejecuta:
```bash
npm install
```
Este comando descargará todas las librerías necesarias.

### 3️⃣ Configura Firebase
1. Ve a https://console.firebase.google.com/
2. Crea un proyecto nuevo (o usa uno existente)
3. En "Configuración del proyecto", crea una aplicación web
4. Copia las credenciales que te muestra Firebase
5. Abre el archivo `src/firebase.config.ts` en tu editor de código
6. Reemplaza los valores `"TU_API_KEY"`, etc. con tus credenciales reales

### 4️⃣ Inicia la aplicación
Ejecuta en la terminal:
```bash
npm start
```

¡Listo! Tu navegador se abrirá automáticamente con la aplicación funcionando.

## 🎯 Comandos básicos

- **Instalar dependencias**: `npm install`
- **Iniciar aplicación**: `npm start` o `npm run dev`
- **Compilar para producción**: `npm run build`

## ❓ Problemas comunes

**"npm no se reconoce como comando"**
- Necesitas instalar Node.js primero

**"Error al inicializar Firebase"**
- Verifica que hayas configurado correctamente las credenciales en `src/firebase.config.ts`

**La aplicación no se abre en el navegador**
- Abre manualmente: http://localhost:3000

## 📞 ¿Necesitas más ayuda?
Lee el archivo `README.md` para instrucciones más detalladas.
