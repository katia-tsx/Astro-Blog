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

- **Inicio**  
  ![Imagen de la página de inicio](/public/inicio.png)  
  Esta es la página principal de mi blog, donde puedes encontrar contenido destacado y enlaces rápidos a otras secciones.

- **Acerca de**  
  Obtén más información sobre mí y la historia detrás de este blog.

- **Blog**  
  ![Imagen de la página del Blog](/public/blog.png) 
  - **Índice del Blog**: Explora una lista de todas las entradas de mi blog.
  - **Detalles de la Entrada**: Lee detalles específicos sobre una entrada de blog.
- **Blog/post[index]** 
  ![Imagen de la página de post](/public/post.png) 

- **Etiquetas**  
  ![Imagen de la página de Etiquetas](/public/etiquetas.png)  
  Explora todas las etiquetas disponibles en mi blog y encuentra contenido relacionado.

  >[!NOTE]  
  >Para ocultar la barra de herramientas de desarrollo de Astro, ejecuta el siguiente comando en tu terminal:
  
  ```sh 
  astro preferences disable devToolbar

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
