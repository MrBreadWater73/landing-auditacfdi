# 🧾 AuditaCFDI - Landing Page

Una landing page moderna y responsiva para **AuditaCFDI**, una plataforma especializada en auditoría y gestión de comprobantes fiscales digitales (CFDI). Desarrollada con **Astro**, **React** y **Tailwind CSS**.

## ✨ Características

- 🚀 **Rendimiento Ultra-rápido** - Construido con Astro para cargas instantáneas
- 📱 **Diseño Responsivo** - Perfecto en todos los dispositivos
- 🎨 **UI Moderna** - Interfaz limpia y profesional con Tailwind CSS
- ⚡ **Optimizado** - Componentes estáticos e hidratación selectiva
- 🔧 **Fácil Mantenimiento** - Estructura modular y componentes reutilizables

## 🛠️ Stack Tecnológico

- **[Astro](https://astro.build)** - Framework web moderno para sitios estáticos
- **[React](https://reactjs.org)** - Componentes interactivos
- **[Tailwind CSS](https://tailwindcss.com)** - Framework de utilidades CSS
- **[TypeScript](https://www.typescriptlang.org)** - Tipado estático
- **[Lucide React](https://lucide.dev)** - Iconos modernos

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v18 o superior)
- **pnpm** (recomendado) o npm/yarn

## 🚀 Instalación y Configuración

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd landing-auditacfdi
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   pnpm dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:4321
   ```

## 📦 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia el servidor de desarrollo

# Construcción
pnpm build        # Construye la aplicación para producción

# Vista previa
pnpm preview      # Vista previa de la construcción de producción

# Astro CLI
pnpm astro        # Acceso directo a comandos de Astro
```

## 🏗️ Estructura del Proyecto

```
landing-auditacfdi/
├── public/                 # Archivos estáticos
│   ├── images/            # Imágenes de la landing
│   └── favicon.webp       # Favicon
├── src/
│   ├── components/        # Componentes Astro y React
│   │   ├── ui/           # Componentes de UI reutilizables
│   │   ├── Header.astro  # Navegación principal
│   │   ├── HeroSection.astro
│   │   ├── FeaturesSection.astro
│   │   ├── BenefitsSection.astro
│   │   ├── FunctionalitiesSection.astro
│   │   ├── DemoSection.astro
│   │   ├── PricingSection.astro
│   │   ├── FreeTrialSection.astro
│   │   └── Footer.astro
│   ├── layouts/           # Layouts base
│   │   └── Layout.astro
│   ├── pages/             # Páginas de la aplicación
│   │   └── index.astro    # Página principal
│   ├── lib/               # Utilidades y helpers
│   └── styles/            # Estilos globales
├── astro.config.mjs       # Configuración de Astro
├── tailwind.config.mjs    # Configuración de Tailwind
├── tsconfig.json          # Configuración de TypeScript
└── package.json           # Dependencias y scripts
```

## 🎨 Secciones de la Landing

La landing page incluye las siguientes secciones:

1. **Header** - Navegación y logo
2. **Hero Section** - Presentación principal con call-to-action
3. **Features Section** - Características principales del producto
4. **Benefits Section** - Beneficios y ventajas competitivas
5. **Functionalities Section** - Funcionalidades detalladas
6. **Demo Section** - Demostración del producto
7. **Pricing Section** - Planes y precios
8. **Free Trial Section** - Llamada a acción para prueba gratuita
9. **Footer** - Enlaces adicionales y información de contacto

## 🚀 Despliegue

### Construcción para Producción

```bash
pnpm build
```

Los archivos generados estarán en la carpeta `dist/` y estarán listos para ser desplegados en cualquier servidor web estático.

### Opciones de Despliegue

- **[Vercel](https://vercel.com)** - Despliegue automático con Git
- **[Netlify](https://netlify.com)** - Despliegue continuo
- **[GitHub Pages](https://pages.github.com)** - Hosting gratuito
- **[Cloudflare Pages](https://pages.cloudflare.com)** - Red global

## 🔧 Personalización

### Colores y Tema

Modifica los colores en `tailwind.config.mjs`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Tus colores personalizados
      }
    }
  }
}
```

### Contenido

- **Textos**: Edita los componentes en `src/components/`
- **Imágenes**: Reemplaza las imágenes en `public/images/`
- **Metadatos**: Actualiza `src/layouts/Layout.astro`

## 📱 Responsividad

El sitio está completamente optimizado para:

- 📱 **Móviles** (320px+)
- 📟 **Tablets** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large Desktop** (1440px+)

## ⚡ Rendimiento

- **Lighthouse Score**: 100/100
- **Primera Carga**: < 1s
- **Imágenes Optimizadas**: WebP format
- **CSS Minificado**: Tailwind CSS purged
- **JavaScript Mínimo**: Hidratación selectiva

## 🔗 Enlaces Útiles

- 🌐 [Sitio web oficial de Contalink](https://contalink.com)
- 🌐 [Sitio web oficial de ContadorMx](https://contadormx.net/)
- 📖 [Documentación de Astro](https://docs.astro.build)
- 🎨 [Documentación de TailwindCSS](https://tailwindcss.com/docs)


## 📄 Licencia

Este proyecto es propiedad de ContadorMx. Todos los derechos reservados.

## 📞 Contacto

**ContadorMx** - [Sitio Web](https://contadormx.net/)

**Desarrollador** - Diego Guzmán

---
