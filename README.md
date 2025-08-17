# 📚 Biblioteca Musical

Aplicación web para explorar, buscar y gestionar una pequeña biblioteca de canciones. Permite filtrar por **artista**, **género**, buscar por **título**, marcar **favoritos** y (opcional) crear pequeñas **listas** usando almacenamiento local del navegador.

## 🚀 Tecnologías utilizadas
- **HTML5** — estructura semántica
- **CSS3** — layout con Flexbox / Grid
- **JavaScript (ES6+)** — lógica de la app
- **LocalStorage** — persistencia ligera en el navegador (opcional)

## ⚙️ Instalación y uso

> La app es estática. Puedes abrir `index.html` directamente o servirla con un servidor local.

**Opción A: abrir el archivo**
1. Clona el repo  
   ```bash
   git clone https://github.com/BenjaminMacias/biblioteca-musical.git
   cd biblioteca-musical
Abre index.html en tu navegador (doble clic).

Opción B: servidor local recomendado

# con VSCode: usa la extensión Live Server
# o con Node:
npx serve .
# luego abre la URL que aparezca (p. ej. http://localhost:3000)
🧭 Uso
Barra de búsqueda: escribe el título o parte del mismo.

Filtros: selecciona género/artista desde los controles.

Favoritos: pulsa el icono ⭐ para guardar en tu lista.

Agregar canción (si está disponible en el UI): completa el formulario y guarda.

🧱 Estructura de datos (ejemplo)
{
  "id": "trk_001",
  "title": "Bad Habit",
  "artist": "Steve Lacy",
  "album": "Gemini Rights",
  "genre": "R&B",
  "year": 2022,
  "duration": 235,
  "cover": "assets/covers/gemini-rights.jpg",
  "favorite": false
}













# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
