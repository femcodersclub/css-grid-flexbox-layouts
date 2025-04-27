# CSS Grid + Flexbox Layouts

![Banner del Proyecto](images/project-banner.jpg)

Este proyecto demuestra cómo combinar CSS Grid y Flexbox para crear layouts modernos y responsivos. Forma parte de la serie de recursos educativos de [FemCoders Club](https://www.femcodersclub.com).

## 📋 Índice

- [CSS Grid + Flexbox Layouts](#css-grid--flexbox-layouts)
  - [📋 Índice](#-índice)
  - [🚀 Demostración](#-demostración)
  - [✨ Características](#-características)
  - [🛠️ Tecnologías](#️-tecnologías)
  - [📁 Estructura del Proyecto](#-estructura-del-proyecto)
  - [📥 Instalación y Uso](#-instalación-y-uso)
  - [🔍 Ejemplos Prácticos](#-ejemplos-prácticos)
    - [1. Header y Navegación](#1-header-y-navegación)
    - [2. Hero Section](#2-hero-section)
    - [3. Features Grid](#3-features-grid)
  - [🧠 Conceptos Clave](#-conceptos-clave)
    - [Cuándo usar Grid:](#cuándo-usar-grid)
    - [Cuándo usar Flexbox:](#cuándo-usar-flexbox)
    - [Estrategias de combinación:](#estrategias-de-combinación)
  - [📚 Recursos Relacionados](#-recursos-relacionados)

## 🚀 Demostración

Visita la [demo en vivo](https://femcodersclub.github.io/css-grid-flexbox-layouts) para explorar el proyecto.

![Vista previa del proyecto](images/preview.jpg)

## ✨ Características

Este proyecto demuestra:

- Combinación estratégica de CSS Grid y Flexbox
- Diseño responsivo sin frameworks
- Layout de landing page moderna con múltiples secciones
- Navegación responsiva con toggle para móviles
- Sistema de tarjetas flexible y adaptable
- Modo "educativo" que muestra qué tecnología se usa en cada parte
- Comentarios detallados explicando las decisiones de diseño

## 🛠️ Tecnologías

- HTML5
- CSS3 (Grid y Flexbox)
- JavaScript vanilla
- Sin dependencias ni frameworks externos

## 📁 Estructura del Proyecto

```
css-grid-flexbox-layouts/
├── index.html              # Landing page principal
├── css/
│   ├── styles.css          # Estilos generales
│   ├── grid.css            # Componentes usando Grid
│   ├── flexbox.css         # Componentes usando Flexbox
│   └── combined.css        # Componentes que usan ambos
├── js/
│   └── main.js             # JavaScript básico para interactividad
├── images/                 # Imágenes del proyecto
└── examples/               # Ejemplos adicionales
    ├── dashboard/          # Ejemplo de dashboard
    ├── portfolio/          # Ejemplo de portafolio
    └── product-page/       # Ejemplo de página de producto
```

## 📥 Instalación y Uso

1. Clona este repositorio:

   ```bash
   git clone https://github.com/femcodersclub/css-grid-flexbox-layouts.git
   ```

2. Abre `index.html` en tu navegador para ver la landing page principal.

3. Explora el código fuente para ver cómo se implementan los diferentes layouts:
   - `grid.css` para componentes basados en Grid
   - `flexbox.css` para componentes basados en Flexbox
   - `combined.css` para ejemplos de cómo se combinan ambos

4. Activa el modo educativo:
   - Visita la página con el parámetro `?debug=true` (ej: `index.html?debug=true`)
   - Haz clic en el botón "Mostrar Indicadores CSS" que aparecerá en la esquina inferior derecha
   - Los elementos usarán códigos de color para mostrar qué tecnología se está usando

## 🔍 Ejemplos Prácticos

### 1. Header y Navegación

La navegación del sitio usa Flexbox para alineación horizontal, y Grid para la estructura general en versión móvil.

```css
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

/* Navegación responsiva */
@media (max-width: 768px) {
  .main-nav.active {
    display: grid;
    grid-template-rows: repeat(4, auto);
  }
}
```

### 2. Hero Section

Usa Grid para dividir contenido e imagen, y Flexbox para alinear botones.

```css
.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
}

.hero-buttons {
  display: flex;
  gap: var(--space-md);
}
```

### 3. Features Grid

Utiliza Grid para distribución de tarjetas y Flexbox para alineación interna.

```css
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-lg);
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

## 🧠 Conceptos Clave

### Cuándo usar Grid:

- Para layouts bidimensionales (filas y columnas)
- Para estructuras de página completa
- Para posicionamiento preciso de elementos
- Para alineación en ambos ejes simultáneamente

### Cuándo usar Flexbox:

- Para distribuciones unidimensionales (filas O columnas)
- Para alineación flexible dentro de un contenedor
- Para espaciado dinámico entre elementos
- Para adaptación al contenido

### Estrategias de combinación:

1. **Grid para estructura, Flexbox para componentes**
2. **Grid para posicionamiento asimétrico, Flexbox para alineación interna**
3. **Grid con áreas nombradas y Flexbox para componentes**
4. **Grid para responsividad automática, Flexbox para componentes**
5. **Intercambio de layout basado en media queries**

## 📚 Recursos Relacionados

- [Guía completa de Flexbox](https://www.femcodersclub.com/recursos/)