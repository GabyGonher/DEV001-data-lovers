# Data Lovers: Pokémon

## Índice

* [1. Introducción](#1-Introducción)
* [2. Objetivos](#2-Objetivos)
  * [2.1 Historias de Usuario](#2.1-Historias-de-Usuario) 
* [3. Diseño de la interfaz del usuario](#3-Decisiones-de-diseño)


***

## 1. Introducción
En el presente documento se plasma el proceso de desarrollo del proyecto Data Lovers elaborado como parte de la currÍcula del bootcamp de Laboratoria - cohort DEV001. A cargo de la dupla DL22: Carolina Velásquez Rodríguez y Gabriela González Herrera.


## 2. Objetivos
El objetivo de este proyecto es entender y procesar la información de un conjunto de datos, en este caso se trabajó con la data de Pokémon la cual contiene información detallada de 251 pokémones de las generaciones Jotho y Kanto. Siendo el objetivo principal la creación de una interfaz donde se pueda visualizar  un set de datos que se adecúe a lo que el usuario necesita.

>Esta interfaz permitirá al usuario consultar información de interés sobre Pokémon permitiendo acceder a datos específicos de cada uno de los pokemones a través de las funcionalidades del sitio de manera rápida e intuitiva.

Para lograr los objetivos anteriores, se llevó a cabo una encuesta para conocer las necesidades de los usuarios.

(...Imagen de encuesta)



Se obtuvo los siguientes resultados que nos permitieron identificar los intereses más relevantes de los usuarios en cuanto a las características de cada Pokémon

(....Imagen de resultados de encuesta)

## 2.1 Historias de Usuario

>**HU1. Como usuario de PokémonGo quiero poder visualizar los pokémones con su imagen, nombre y generación para conocerlos y encontrarlos más fácilmente**
>>  Criterios de aceptación:
>*  La UI sigue el modelo del prototipo de alta fidelidad.
>*  La UI es responsive (teléfonos y PC).
>*  Todos los pokemon aparecen en una misma vista, en forma de grilla (cuadricula) sin ningún orden en particular.
>*  La vista no tiene paginación, se hace scroll  desde el primer hasta el último.
>*  Cada cuadrícula contiene: nombre del pokémon e imagen 
>>Definición de terminado:
>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.


(captura de pantalla de la HU1)

>**HU2. Como usuario de Pokémon Go quiero poder visualizar a los pokemon por su tipo (water,grass,etc) para elegirlos mejor durante un combate**
>>  Criterios de aceptación:
>* La UI sigue el prototipo de alta fidelidad.
>* Hay un menú desplegable con la lista de tipos.
>* La UI es responsive.
>* Al hacer click en un tipo, aparecen todos los pokemon de ese tipo.
>>Definición de terminado:
>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Las pruebas unitarias para esta HU tienen una cobertura del 70% de statements (sentencias), functions (funciones), lines (líneas), y branches (ramas) del archivo src/data.js

(captura de pantalla de la HU2)

>**HU3. Como usuario de Pokémon Go quiero poder buscar rápidamente los Pokemon por su nombre a través de un buscador integrado en la interfaz y ordenarlos alfabéticamente para localizar fácilmente al Pokémon de mi interés**
>>  Criterios de aceptación:
>*  La UI sigue el prototipo de alta fidelidad.
>*  Al hacer click en el boton "Sort A-Z" o "Sort Z-A" se muestran los pokemones ordenados alfabéticamente.
>* Se muestra un buscador que permite localizar a cualquier Pokémon por su nombre.
>>Definición de terminado:
>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Las pruebas unitarias para esta HU tienen una cobertura del 70% de statements (sentencias), functions (funciones), lines (líneas), y branches (ramas) del archivo src/data.js

(captura)

>**HU4. Como usuario de Pokémon Go quiero poder visualizar en otra ventana información adicional y relevante de cada uno de los Pokemones para conocer sus características más relevantes**
>>  Criterios de aceptación:
>*  La UI sigue el prototipo de alta fidelidad.
>*  Al hacer click en el boton "Learn more" ubicado en cada tarjeta se abre un modal con la información más relevante según los usuarios encuestados.
>>Definición de terminado:
>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Las pruebas unitarias para esta HU tienen una cobertura del 70% de statements (sentencias), functions (funciones), lines (líneas), y branches (ramas) del archivo src/data.js.

(captura)

## 3. Decisiones de diseño
* Decidimos elegir una paleta de colores para el diseño de nuestra interfaz.
(captura de la paleta de colores)

* Iniciamos elaborando el prototipo de baja fidelidad de la interfaz de nuestro sitio que nos permitió definir ideas principales en cuanto al orden y diseño general.

(foto prototipo de baja)

* Elaboramos los prototipos de alta fidelidad en figma por cada historia de usuario.

HU1
(captura)

HU2
(captura)

HU3
(captura)

HU4
(captura)




