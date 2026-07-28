# Brief de Proyecto — Sitio Web Vidrios y Aluminios "Zavala"

Este documento es el informe de referencia para el desarrollo del sitio web del negocio. Contiene la información del negocio extraída del material entregado, los lineamientos de marca, y las instrucciones de estilo, efectos y assets que debes seguir durante la construcción.

Ya cuentas con una **plantilla base de HTML** y un **prompt inicial** para adaptarla al negocio. Este README complementa ese prompt: úsalo como fuente de verdad para branding, estilo visual, animaciones y manejo de assets. **No es necesario definir ni proponer una nueva estructura de secciones** — respeta la estructura ya existente en la plantilla base.

---

## 1. Información del negocio

- **Nombre del negocio:** Vidrios y Aluminios "Zavala"
- **Rubro:** Fabricación e instalación de vidrio y aluminio para construcción residencial y comercial.
- **Servicios/productos identificados en el material fotográfico:**
  - Puertas de aluminio (perfil negro y blanco, vidrio templado/esmerilado)
  - Ventanas de aluminio (corredizas, abatibles, tipo proyectante)
  - Canceles y mamparas de baño (vidrio templado, esquineros, corredizos)
  - Domos y tragaluces
  - Cubiertas y pérgolas de vidrio (techos tipo vidrio estructural)
  - Fachadas y ventanales de vidrio de gran formato
  - Espejos a medida
  - Barandales de vidrio
- **Teléfono:** No se encontró en el material proporcionado.
- **Dirección:** No se encontró en el material proporcionado.
- **Horarios de atención:** No se encontraron en el material proporcionado.
- **Redes sociales:** No se encontraron en el material proporcionado.
- **Datos extra:** El material entregado consiste principalmente en fotografías de proyectos/instalaciones terminadas (evidencia de trabajo real), útiles como banco de imágenes para portafolio/galería, pero no contienen datos de contacto.

> ⚠️ **Nota importante:** Al no existir teléfono, dirección, horario ni redes sociales en las imágenes/archivos analizados, el desarrollador debe solicitar estos datos directamente al negocio antes de publicar el sitio, o dejar los campos de contacto marcados como pendientes (placeholder) hasta recibirlos.

---

## 2. Branding

Paleta y tipografía definidas a partir del logo (`imagenes/logo.jpeg`) y del tono visual de las fotografías de proyectos (predominancia de perfiles de aluminio negro mate y blanco, y vidrio esmerilado/translúcido).

### Paleta de colores

| Uso | Color | HEX |
|---|---|---|
| Color primario (fondo de marca, header/footer) | Azul marino corporativo | `#0B1440` |
| Color secundario (acentos, botones, marcos) | Negro grafito / aluminio negro mate | `#1A1A1A` |
| Color neutro claro (fondos, espacios) | Blanco | `#FFFFFF` |
| Color de apoyo (detalles, líneas, iconografía) | Gris aluminio | `#9CA3AF` |
| Acento sutil (hover, detalles de vidrio) | Gris azulado vidrio esmerilado | `#7B93A0` |

### Tipografía sugerida

- **Titulares / Hero:** Tipografía sans-serif geométrica y elegante (ej. Montserrat, Poppins o Inter, en pesos Semibold/Bold) para transmitir solidez y precisión, en línea con el carácter arquitectónico de la marca.
- **Cuerpo de texto:** Misma familia sans-serif en peso Regular/Medium, priorizando legibilidad y limpieza visual.
- El logo mantiene su propia tipografía script/cursiva ("Vidrios y Aluminios" / "Zavala"); no es necesario replicarla en el resto del sitio, solo conservarla intacta donde se use el logo.

### Identidad visual

- Estética que combina la solidez del **azul marino** de marca con la **frialdad y precisión del aluminio y el vidrio** (negros, grises y blancos).
- Uso generoso de fotografía real de proyectos (puertas, ventanas, domos, canceles) como evidencia de calidad de trabajo.
- Líneas rectas, geometría limpia y transparencias, evocando el material mismo (vidrio y aluminio).

---

## 3. Estilo visual obligatorio

El sitio debe manejar un estilo:

- **Premium, enterprise y corporativo de marca.**
- **Nivel big tech:** elegante y a la vez minimalista, con jerarquía visual clara, mucho espacio en blanco/negativo y composición cuidada.

---

## 4. Efectos y animaciones requeridos

El sitio debe incluir obligatoriamente:

- **Efectos visuales y animaciones activadas por scroll** (fade-in, desplazamiento, reveal de elementos al entrar en viewport, etc.).
- **Pantalla de carga (preloader)** con spinner + logo del negocio, mostrada antes de renderizar el contenido principal.
- **Animaciones en el título del hero**, aplicando alguno de los siguientes efectos (o una combinación):
  - Efecto máquina de escribir (typewriter).
  - Cambio de color en las letras.
  - Otros efectos tipográficos dinámicos que refuercen el carácter premium de la marca.

---

## 5. Instrucciones sobre assets

- El **logo** se encuentra en `imagenes/logo.jpeg` pero viene **con fondo** (fondo azul marino sólido). Antes de usarlo en el sitio (header, footer, preloader, favicon, etc.), el desarrollador debe **removerle el fondo** para obtener una versión con fondo transparente (PNG/SVG), de modo que se adapte correctamente a distintos fondos del sitio.
- Las fotografías restantes en `imagenes/` corresponden a **proyectos terminados** (puertas, ventanas, domos, canceles, pérgolas de vidrio, fachadas, espejos). Deben usarse como material de portafolio/galería de trabajos reales del negocio, seleccionando las de mejor calidad, encuadre y nitidez.
- Antes de publicar, optimizar (comprimir) todas las imágenes utilizadas para no afectar el rendimiento de carga del sitio.

---

## 6. Nota para el desarrollador

Puedes **iterar sobre el proyecto usando Claude Code** todas las veces que sea necesario, dándole instrucciones adicionales, hasta lograr el resultado deseado. Utiliza este README junto con el prompt inicial como contexto base en cada iteración.

---

## 7. Checklist de trabajo

- [ ] Adaptar la plantilla base al negocio usando el prompt inicial entregado.
- [ ] Remover el fondo del logo (`imagenes/logo.jpeg`) y generar versión con fondo transparente.
- [ ] Aplicar la paleta de colores de marca (`#0B1440`, `#1A1A1A`, `#FFFFFF`, `#9CA3AF`, `#7B93A0`).
- [ ] Aplicar la tipografía sugerida (sans-serif tipo Montserrat/Poppins/Inter).
- [ ] Implementar estilo visual premium, enterprise, corporativo y minimalista tipo big tech.
- [ ] Implementar pantalla de carga (preloader) con spinner + logo del negocio.
- [ ] Implementar animaciones/efectos de scroll en el sitio.
- [ ] Implementar animación tipográfica en el título del hero (typewriter, cambio de color u otro efecto).
- [ ] Seleccionar, optimizar e integrar las fotografías de proyectos como portafolio/galería.
- [ ] Solicitar al negocio los datos de contacto faltantes (teléfono, dirección, horarios, redes sociales) e integrarlos.
- [ ] Iterar con Claude Code sobre el resultado hasta alcanzar la versión final deseada.
