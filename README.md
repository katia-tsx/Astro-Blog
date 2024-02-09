# Bienvenido a mi Blog con Astro 🚀

¡Hola! Soy Katia, una desarrolladora entusiasta que acaba de crear un blog utilizando Astro. Este proyecto ha sido emocionante de construir, y estoy encantada de compartirlo contigo.

## 🏝️ Arquitectura de Islas con Astro

Una de las características más interesantes de este proyecto es la arquitectura de islas utilizada por Astro. Esta arquitectura permite dividir la aplicación en componentes independientes y autónomos, lo que facilita su mantenimiento y escalabilidad. Cada página, componente y recurso se considera una "isla" dentro del proyecto, lo que proporciona un enfoque organizado y modular para el desarrollo.

## 📚 Estructura del Proyecto

Aquí tienes un vistazo a la estructura del proyecto:

```text
/
├── public/
│   ├── Background.png
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├──Card.astro
│   │   ├──BlogPost.astro
│   │   ├──Footer.astro
│   │   ├──Greeting.jsx
│   │   ├──Hamburguer.astro
│   │   ├──Header.astro
│   │   ├──Navigation.astro
│   │   ├──Social.astro
│   │   └──ThemeIcon.astro
│   ├── layouts/
│   │   ├──BaseLayout.astro
│   │   ├──Layout.astro
│   │   ├──MarkdownLayout.astro
│   │   └──MarkdownPostLayout.astro
│   └── pages/
│       ├── posts/
│       │   ├── learning-astro.astro
│       │   ├── post-1.astro
│       │   ├── post-2.astro
│       │   ├── post-3.astro
│       │   └── post-4.astro
│       ├── tags/
│       │   ├── [tag].astro
│       │   └── index.astro
│       ├── about.astro
│       ├── blog.astro
│       ├── index.astro
│       └── rss.xml.js
└── package.json
```

En el directorio `src/pages/`, encontrarás las diferentes páginas de mi blog, cada una representada por un archivo `.astro` o `.md`. Además, en `src/components/` están los componentes (piezas de código reutilizables) que he creado para mi aplicación.

>[!IMPORTANT]
>Todos los componentes en este proyecto están **designados en MAYÚSCULAS** para diferenciarlos claramente de los elementos HTML estándar. Esta convención ayuda a mantener un código más legible y organizado, facilitando la identificación y el uso de los componentes en todo el proyecto.


## 📝 Páginas Disponibles

Mi blog cuenta con una variedad de páginas para explorar:

- **Inicio**: `src/pages/index.astro` - La página principal de mi blog.
- **Acerca de**: `src/pages/about.astro` - Aquí puedes conocer un poco más sobre mí o sobre el blog.
- **Blog**: 
  - `src/pages/blog/index.astro` - Una lista de todas las entradas de mi blog.
  - `src/pages/blog/[slug].astro` - Detalles de una entrada de blog individual.
  - `src/pages/blog/tags.astro` - Explora las diferentes etiquetas de las entradas de mi blog.
- **Etiquetas**: `src/pages/blog/tags.astro` - Una página para explorar todas las etiquetas disponibles en mi blog.

## 🚀 Comandos Útiles

Estos son algunos de los comandos que puedes ejecutar para trabajar con mi blog:

```sh
npm install          # Instala las dependencias
npm run dev          # Inicia el servidor de desarrollo local
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la construcción local antes de desplegar
npm run astro ...    # Ejecuta comandos de la CLI de Astro
npm run astro -- --help # Obtén ayuda utilizando la CLI de Astro
```

¡Gracias por visitar mi blog y espero que disfrutes explorándolo!