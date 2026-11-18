# ✈️ Ejercicio Travel Planner

## Objetivos

- Implementar nuevas funciones de lógica de dominio
- Codificar test unitarios en paralelo a la implementación
- Usar buenas prácticas de codificacion
- Modificar la interfaz de usuario para usar las nuevas funciones

## Política sobre herramientas de IA

Durante la evaluación **no está permitido el uso de herramientas de asistencia basadas en inteligencia artificial**, por lo que es fundamental desactivar estas herramientas. **Es responsabilidad del estudiante desactivarlas antes de comenzar, entendiendo que su utilización durante la evaluación implica la pérdida total del puntaje del ejercicio.**

A modo de ejemplo, se detalla a continuación el procedimiento para desactivar GitHub Copilot.

Ejemplo - Desactivación de GitHub Copilot en Visual Studio Code:

1. Abrir Visual Studio Code.
2. Acceder a la sección de Extensiones (ícono de bloques en la barra lateral o mediante el atajo Ctrl + Shift + X).
3. Buscar la extensión “GitHub Copilot”.
4. Seleccionar la extensión.
5. Hacer clic en “Disable” (Deshabilitar).
6. Verificar que no se muestren sugerencias de código generadas automáticamente, tales como texto en gris o completado automático avanzado.


## Aspectos a tener en cuenta

- Puede agregar nuevas funciones y tests, así como agregar parámetros en funciones existentes.
- Si necesita realizar supuestos sobre la implementación, agregue comentarios para explicarlos.
- Los test unitarios se deben codificar en los archivos correspondientes `*.test.js`.
- La cobertura de los test unitarios debe alcanzar 100 % de sentencias y ramas.
 

## Parte A: Lógica de guardar alojamiento (9 puntos)

1. Implementar la clase Accommodation con las propiedades: name (string) y cost (number), y validar:
   - Que `cost` sea un número obligatorio mayor o igual a 0.
   - Que `name` sea obligatorio.
 
2. En la clase `City`, agregar el campo `accommodation` que almacena un único objeto de la clase `Accommodation`. **Cada ciudad tendrá únicamente un alojamiento asociado**.

3. Agregar la función `addAccommodation(accommodation: Accommodation)` en la clase `City` que permita asociar el alojamiento a la ciudad.
   
4. Escribir tests en para cubrir las líneas de los puntos anteriores, incluyendo casos de éxito y error.

5. Realizar commit y push de los cambios.

6. Subir un issue con el título "Parte A" con captura del coverage de los tests.

## Parte B: UI de Alojamiento (7 puntos)

1. Incorporar en el mismo formulario "Agregar Ciudad", en la sección "Alojamiento", dos campos:
   - `Nombre del alojamiento`
   - `Costo del alojamiento`
   
2. Al hacer clic en el botón de guardar, se debe validar que los campos del alojamiento no estén vacíos y que el costo sea un número mayor o igual a 0. Si la validación es exitosa, se debe asociar el alojamiento a la ciudad recién creada.
3. En la pestaña "Destinos", ampliar la tabla para mostrar el nombre y el costo del alojamiento de cada ciudad. El nombre y el costo se deberán mostrar en la tabla bajo sus correspondientes celdas.
4. Mostrar el país de cada destino usando un componente `badge` de Bootstrap dentro de la tabla de destinos.
5. Realizar commit y push de los cambios.
6. Subir un issue con el título "Parte B" mostrando la interfaz de alta de ciudad con su sección de alojamiento y la tabla de destinos actualizada.

### Parte C: Verificaciones finales (5 puntos)

1. Verificar que no existan errores de ESLint y corregirlos si los hay.
2. Verificar que la cobertura de los tests unitarios de todos los archivos sea del 100 %. Completar los tests si es necesario.
3. Validar con la herramienta WAVE que no existan problemas de accesibilidad. En caso de que existan errores o advertencias solucionalos haciendo los ajustes necesarios en el código.
4. Hacer commit y push de la rama `main` con los cambios realizados.
5. Subir un issue con el título "Parte C" mostrando la cobertura de los tests y el análisis de accesibilidad con WAVE.

### Referencias y recursos útiles

- [ESLint](https://eslint.org/docs/latest/rules/)
- [Prettier](https://prettier.io/docs/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Vitest](https://vitest.dev/guide/)
- [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
- [HTML](https://www.w3schools.com/html/)
