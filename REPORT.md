# selectApp Report

## Decisiones tomadas durante la prueba

### Inicio

* He preferido realizar una maqueta haciendo uso unicamente de HTML y CSS para tener el mejor resultado posible sin interacción de JavaScript

* La mejor solución que se me ocurrio fue crear dos "divs" uno donde se mostrara al input o otro donde se mostraran los resultados, asi podria mas adelante manipular su visibilidad y llenado con Vue

* Despues de varias pruebas opte por trasnformar este "select input" en un "dropdown menu", ya que siento que puede ser mejor adaptado a cualquier interfaz.

### Vue

* Conociendo el potencial de vue en la implementación de Scripts hice uso de tres eventos.

    * focusIn : Al hacer focus sobre el input mostrare toda la lista de frutas
    * focusOut : Al quitar el focus del input dejare de mostrar la lista
    * input : Al detectar que se hace uso del input ejecutare la función de filtración

* La función de filtración la realice de forma simple filtrando los items del array en base a sus letras de inicio.

* Si la función de filtro no encuentra nada cambiare una variable interna con la cual se mostrara el mensaje de error "Not Found".

### Backend

* El Backend fue relativamente sencillo, cree una carpeta "Backend" y dentro de esta hice uso de Express.Js para generar una unica solicitud del tipo GET.

* Instale la libreria cors para poder generar peticiones cruzadas.


### Aprendizaje

* Admito que nunca habia realizado un ejercicio de este tipo, asi que fue interesante hacer uso de varias cualidades de Vue para darle solución, como lo es su amplio facil de usar catalogo de eventos por defecto.