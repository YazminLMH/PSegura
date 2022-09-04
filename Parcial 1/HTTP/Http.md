# Metodos y Codigos de repuesta HTTP

Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:                  

1. Respuestas informativas (100–199),
2. Respuestas satisfactorias (200–299),
3. Redirecciones (300–399),
4. Errores de los clientes (400–499),
5. y errores de los servidores (500–599).

Otra explicacion de las cinco clases es la siguiente:

* 100s: Códigos informativos que indican que la solicitud iniciada por el navegador continúa.
* 200s: Los códigos con éxito regresaron cuando la solicitud del navegador fue recibida, entendida y procesada por el servidor.
* 300s: Códigos de redireccionamiento devueltos cuando un nuevo recurso ha sido sustituido por el recurso solicitado.
* 400s: Códigos de error del cliente que indican que hubo un problema con la solicitud.
* 500s: Códigos de error del servidor que indican que la solicitud fue aceptada, pero que un error en el servidor impidió que se cumpliera.

**100 Continue**
Esta respuesta provisional indica que todo hasta ahora está bien y que el cliente debe continuar con la solicitud o ignorarla si ya está terminada.

## Respuestas satisfactorias

* GET: El recurso se ha obtenido y se transmite en el cuerpo del mensaje.
* HEAD: Los encabezados de entidad están en el cuerpo del mensaje.
* PUT o POST: El recurso que describe el resultado de la acción se transmite en el cuerpo del mensaje.
* TRACE: El cuerpo del mensaje contiene el mensaje de solicitud recibido por el servidor.

### Códigos de estado 100

Un código de estado de nivel 100 te dice que la solicitud que has hecho al servidor sigue en curso por alguna razón. Esto no es necesariamente un problema, es sólo información extra para que sepas lo que está pasando.

### Códigos de estado 200

Este es el mejor tipo de código de estado HTTP que se puede recibir. Una respuesta de nivel 200 significa que todo funciona exactamente como debería.

### Códigos de estado 300

La redirección es el proceso utilizado para comunicar que un recurso ha sido trasladado a una nueva ubicación. Hay varios códigos de estado HTTP que acompañan a las redirecciones, con el fin de proporcionar a los visitantes información sobre dónde encontrar el contenido que están buscando.

### Códigos de estado 400

En el nivel 400, los códigos de estado HTTP comienzan a ser problemáticos. Estos son códigos de error que especifican que hay un fallo en su navegador y/o en la solicitud.

### Códigos de estado 500

Los códigos de estado de nivel  500 también se consideran errores. Sin embargo, denotan que el problema está en el extremo del servidor. Esto puede hacer que sean más difíciles de resolver.

 



