# 📝 Referencia Rápida de Comandos

## Comandos Esenciales

### Primera vez (Instalación)
```bash
npm install
```

### Ejecutar la aplicación
```bash
npm start
```
o
```bash
npm run dev
```

### Compilar para producción
```bash
npm run build
```

### Ver la versión de producción
```bash
npm run preview
```

## Atajos de Teclado en el Navegador

| Atajo | Acción |
|-------|--------|
| `F12` | Abrir herramientas de desarrollador |
| `Ctrl + Shift + R` | Recarga forzada (limpiar caché) |
| `Ctrl + Shift + C` | Inspeccionar elemento |
| `Ctrl + Shift + I` | Abrir consola |

## Estructura de Archivos Importante

```
📁 Platafroma-TS/
├── 📄 index.html              ← Página principal
├── 📁 src/
│   ├── 📄 main.ts             ← Código principal de la app
│   ├── 📄 firebase.ts         ← Inicialización de Firebase
│   ├── 📄 firebase.config.ts  ← ⚠️ CONFIGURA TUS CREDENCIALES AQUÍ
│   └── 📄 style.css           ← Estilos de la aplicación
├── 📄 package.json            ← Dependencias del proyecto
└── 📄 README.md               ← Documentación completa
```

## Archivos que DEBES modificar

1. **`src/firebase.config.ts`** - Configura tus credenciales de Firebase aquí
2. **`src/main.ts`** - Agrega tu lógica de aplicación aquí
3. **`src/style.css`** - Personaliza los estilos aquí
4. **`index.html`** - Modifica la estructura HTML aquí

## Archivos que NO debes modificar (generalmente)

- `node_modules/` - Dependencias instaladas automáticamente
- `package-lock.json` - Generado automáticamente
- `tsconfig.json` - Configuración de TypeScript (ya optimizada)
- `vite.config.ts` - Configuración de Vite (ya optimizada)

## URLs Útiles

- **App local**: http://localhost:3000
- **Firebase Console**: https://console.firebase.google.com
- **Node.js**: https://nodejs.org

## Verificar Instalación

```bash
# Ver versión de Node.js
node --version

# Ver versión de npm
npm --version

# Ver si TypeScript funciona
npx tsc --version

# Ver estructura del proyecto
ls -la
```

## Solución Rápida de Problemas

| Problema | Solución |
|----------|----------|
| "npm: command not found" | Instala Node.js desde nodejs.org |
| Puerto 3000 ocupado | Cambia el puerto en `vite.config.ts` |
| Firebase no configurado | Actualiza `src/firebase.config.ts` |
| Página en blanco | Abre F12 y revisa errores en Console |
| Cambios no se ven | Ctrl+Shift+R para recargar |

## Flujo de Trabajo Típico

1. **Edita código** en `src/main.ts` o `src/style.css`
2. **Guarda** el archivo (Ctrl+S)
3. **El navegador recarga automáticamente** ✨
4. **Revisa cambios** en el navegador
5. Repite

## Despliegue a Producción

```bash
# 1. Compila el proyecto
npm run build

# 2. Los archivos listos estarán en la carpeta dist/
# 3. Sube la carpeta dist/ a tu hosting
```

### Opciones de Hosting Recomendadas
- **Firebase Hosting** (recomendado, integración perfecta)
- **Vercel** (gratis, muy fácil)
- **Netlify** (gratis, muy fácil)
- **GitHub Pages** (gratis)

## Obtener Ayuda

- **Documentación completa**: Lee `README.md`
- **Guía de inicio**: Lee `INICIO-RAPIDO.md`
- **Problemas comunes**: Lee `SOLUCION-PROBLEMAS.md`

---

💡 **Consejo**: Guarda este archivo como referencia mientras desarrollas. ¡Es tu guía rápida!
