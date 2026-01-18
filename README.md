# 🌐 Presentación Web – HTML, CSS y JavaScript

Este repositorio contiene una **presentación práctica sobre los fundamentos del desarrollo web**, centrada en **HTML, CSS y JavaScript**.  
El objetivo es entender cómo se construye una página web **paso a paso**, desde la estructura hasta la interactividad.

El proyecto incluye un **ejercicio final** donde se crea una página web completa y funcional.

---

## 📚 Contenidos de la presentación

### 🧱 HTML – Estructura
HTML se utiliza para crear la **estructura de la página**, como si fuera el esqueleto o la estructura de una casa.

Incluye:
- Encabezados y párrafos
- Imágenes
- Enlaces
- Listas ordenadas y desordenadas
- Tablas
- Formularios

---

### 🎨 CSS – Estilos (Introducción)
CSS se utiliza para dar **estilo y diseño** a la página: colores, tamaños, fuentes y organización visual.  
En esta presentación se hace **una introducción básica**, ya que CSS da para una presentación completa por sí sola.

Incluye:
- Colores
- Tipografías
- Espaciado (margin, padding)
- Diseño sencillo y organizado

---

### ⚙️ JavaScript – Interactividad
JavaScript se encarga de la **interacción con el usuario**.  
Siguiendo la analogía de la casa:
- Encender y apagar luces
- Abrir y cerrar puertas
- Reaccionar a acciones del usuario

Incluye:
- Eventos (`click`, `submit`)
- Cambio dinámico de imágenes
- Mensajes de confirmación en formularios

---

## 🧪 Ejercicio final

Durante la presentación se va construyendo una página web paso a paso:
1. Primero se crea la estructura con HTML.
2. Después se añaden estilos con CSS.
3. Finalmente se agrega interactividad con JavaScript.

---

## 📁 Estructura del proyecto



/
├── index.html
├── enviado.html
├── styles.css
├── script.js
├── gatitos.webp
├── durmiendo.jpeg
└── README.md

````

---

## 🧩 Archivos del Proyecto

### 1️⃣ HTML – index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Mi Primera Página Web</title>
</head>
<body>

    <!-- HEADER: Título principal de la página con <h1> -->
    <header>
       <h1>Diana y Kyubi: los gatos que no me dejan dormir</h1>
    </header>

    <!-- SECCIÓN: Presentación de los gatos -->
    <section>
        <h2>¿Quiénes son Diana y Kyubi?</h2>       
        <img src="gatitos.webp" alt="Gatitos" class="gatitos" style="max-width:300px;">
        <p>Diana y Kyubi después de una larga noche de fiesta</p>

        <!-- Lista ordenada -->
        <ol>
            <li>Son muy <strong>traviesos</strong></li>
            <li>Hacen <strong>mucho ruido por las noches</strong> </li>
            <li>Pero también son  <strong>cariñosos y juguetones</strong></li>
        </ol>

        <!-- Párrafo utilizando énfasis <strong> y cursiva <em> -->
        <p><strong>Diana y Kyubi</strong> son mis gatos y, sin duda, mis <em>mascotas favoritas</em>. Aunque durante el día suelen ser 
        tranquilos, cariñosos y muy juguetones, por las noches se transforman en <strong>pequeños torbellinos</strong>. Corren por la casa,
        saltan sobre los muebles y hacen <em>mucho ruido</em> justo cuando intento dormir.  
        A pesar de eso, no puedo enojarme con ellos, porque siempre buscan compañía, se acurrucan conmigo
        y demuestran su <strong>cariño</strong> de muchas formas. Su personalidad <em>traviesa</em> es parte de lo que los hace tan especiales,
        y aunque a veces no me dejan dormir, llenan la casa de <strong>alegría y diversión</strong> todos los días.
        </p>
    <hr>
    </section>

    <!-- SECCIÓN: Lista desordenada -->
    <section>
        <h2>Cosas que más les gustan</h2>
        <ul>
            <li>Jugar de noche</li>
            <li>Hacer ruido a las 3 a.m.</li>
            <li>Dormir todo el día</li>
            <li>Mimos</li>
        </ul>
    <hr>
    </section>

    <!-- SECCIÓN: Enlaces externos utilizando listas desordenadas -->
    <section>
        <h2>Enlaces útiles para amantes de los gatos</h2>
        <ul>
            <li><a href="https://www.zooplus.es/">Tienda Zooplus</a></li>
            <li><a href="https://www.youtube.com/shorts/nytrNfepVfU">Ir a Gatitos Graciosos</a></li>
        </ul>
    </section>
<hr>

    <!-- SECCIÓN: Tabla -->
    <section>
        <h2>Comparación entre Diana y Kyubi</h2>
        <table>
            <!-- Fila de encabezados -->
            <tr>
                <th>Gato</th>
                <th>Personalidad</th>
                <th>Nivel de ruido</th>
                <th>Actividad Favorita</th>
            </tr>
            <!-- Fila de Diana -->
            <tr>
                <td>Diana</td>
                <td>Cariñosa</td>
                <td>Medio</td>
                <td>Jugar y programar</td>
            </tr>
            <!-- Fila de Kyubi -->
            <tr>
                <td>Kyubi</td>
                <td>Travieso</td>
                <td>Alto</td>
                <td>Dormir por el día <br> y correr por la noche</td>
            </tr>
        </table>
    </section>
<hr>

    <!-- SECCIÓN: Formulario -->
    <section>
        <h2>Cuéntame sobre tu gato</h2>

        <form action="enviado.html" method="post" target="_blank">

            <!-- FIELDSET: Datos generales del gato -->
            <fieldset>
                <legend>Datos Gato</legend>
                <div class="separador">
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre"  autocomplete="off">
                </div>
                <div class="separador">
                    <label for="edad">Edad</label>
                    <input type="text" name="edad"  autocomplete="off">
                </div>
                <div class="separador">
                    <label for="email">Email</label>
                    <input type="text" name="email" required autocomplete="off">
                </div>
            </fieldset>

            <!-- FIELDSET: Encuesta -->
            <fieldset>
                <legend>Encuesta</legend>
                <p>¿Cómo es de travieso tu gato?</p>
                <label for="p1">1</label><input type="radio" name="puntuacion">
                <label for="p2">2</label><input type="radio" name="puntuacion">
                <label for="p3">3</label><input type="radio" name="puntuacion">
                <label for="p4">4</label><input type="radio" name="puntuacion">
                <label for="p5">5</label><input type="radio" name="puntuacion">

                <p>¿Cuál es la actividad favorita de tu gato?</p>
                <label for="dormir">Dormir</label><input type="checkbox" name="dormir">
                <label for="jugar">Jugar</label><input type="checkbox" name="jugar">
                <label for="comer">Comer</label><input type="checkbox" name="comer">
                <label for="ruido">Hacer ruido de noche</label><input type="checkbox" name="ruido">
                <label for="programar">Programar</label><input type="checkbox" name="programar">
            </fieldset>

            <!-- FIELDSET: Comentarios del usuario -->
            <fieldset>
                <legend>Deja tu comentario</legend>
                <textarea id="mensaje" name="mensaje" rows="4" cols="50" placeholder="Escribe aquí lo que quieras sobre tu gato..."></textarea>
            </fieldset>

            <!-- Botones de envío y reseteo -->
            <div>
                <input type="submit" value="Enviar">
                <input type="reset" value="Borrar">
            </div>

        </form>
    </section>

    <!-- FOOTER: información final de la página -->
    <footer>
        <p>&copy; 2026 Mar Izquierdo.<br>Mi página de gatos. Diana y Kyubi hacen la vida más divertida.</p>
    </footer>

   
    <script src="script.js"></script>
</body>
</html>
````

### 2️⃣ HTML – enviado.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulario enviado</title>
</head>
<body>
  <h2>Formulario enviado correctamente</h2>
</body>
</html>
```

### 3️⃣ CSS – styles.css

```css
/* RESET General */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body */

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background-color: #fefefe;
    color: #333;
    padding: 20px;
}

/* Header */

header {
    text-align: center;
    background-color: #ffd966;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
    margin-bottom: 30px;
}

header h1 {
    color: #4b3832;
}

/* Section */

section {
    background-color: #fff5e6;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Imagen gatos */

.gatitos {
    max-width: 300px;
    display: block;
    margin: 10px auto;
    cursor: pointer;
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.gatitos:hover {
    transform: scale(1.05);
}

/* LISTAS */
ul, ol {
    margin: 10px 0 10px 20px;
}

/* TABLA */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
}

th, td {
    border: 1px solid #999;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #ffd966;
}

/* FORMULARIO */
form {
    display: flex;
    flex-direction: column;
}

fieldset {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 15px;
}

legend {
    font-weight: bold;
}

input[type="text"], input[type="email"], input[type="number"], textarea {
    width: 100%;
    padding: 8px;
    margin: 5px 0 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
}

input[type="submit"], input[type="reset"], button {
    padding: 10px 20px;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    background-color: #4b3832;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

input[type="submit"]:hover, input[type="reset"]:hover, button:hover {
    background-color: #7f5a3a;
}

/* FOOTER */
footer {
    text-align: center;
    padding: 15px;
    background-color: #ffd966;
    border-radius: 10px;
    margin-top: 30px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

```

### 4️⃣ JavaScript – script.js

```javascript
// Cambiar imagen gatos
const gatitosImg = document.querySelector('.gatitos');
const imagenes = ["gatitos.webp", "durmiendo.jpeg"]; // 
let indice = 0;

gatitosImg.addEventListener('click', () => {
    indice = (indice + 1) % imagenes.length;
    gatitosImg.src = imagenes[indice];
});

// Alerta Formulario
const formulario = document.querySelector('form');

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 
    alert('¡Gracias! Tu información ha sido enviada.');
    window.open('enviado.html', '_blank');
});

formulario.addEventListener('reset', () => {
    alert('Formulario borrado.');
});

```

---

## 🖼️ Imágenes

Incluye tus imágenes del proyecto en la carpeta principal o en una subcarpeta `assets/`. Ejemplo:

```
gatitos.webp
durmiendo.jpeg
```

---

## 🌐 Enlaces de interés

* [HTML – W3Schools](https://www.w3schools.com/html/)
* [CSS – W3Schools](https://www.w3schools.com/css/)
* [JavaScript – W3Schools](https://www.w3schools.com/js/)

---

## ▶️ Cómo usar este proyecto

1️⃣ Clonar el repositorio:

```bash
git clone https://github.com/Marizqdo/HTML_JS.git
```

2️⃣ Abrir `index.html` en tu navegador.

3️⃣ Explorar y probar:

* Cambiar estilos en CSS
* Modificar el HTML
* Añadir interactividad con JavaScript

---

## 🎯 Entregable Final

Una **web estática funcional** con:

* Secciones de contenido (texto, imágenes, enlaces)
* Tablas y listas
* Formularios interactivos
* Cambio de imágenes y alertas con JS

---

## 👩‍💻 Autor

Mar Izquierdo Vaquer – Proyecto educativo para aprender y enseñar fundamentos de **HTML, CSS y JavaScript**
2026

```
