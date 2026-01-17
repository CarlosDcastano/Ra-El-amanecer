
export const questions = [
    {
        id: 1,
        level: 1,
        text: "¿En qué año fue creado JavaScript?",
        options: [
            "1993",
            "1995",
            "1998",
            "2000"
        ],
        correctIndex: 1
    },
    {
        id: 2,
        level: 1,
        text: "¿Quién creó JavaScript?",
        options: [
            "Tim Berners-Lee",
            "Brendan Eich",
            "Guido van Rossum",
            "James Gosling"
        ],
        correctIndex: 1
    },
    {
        id: 3,
        level: 1,
        text: "¿Cuál es la forma correcta de declarar una variable en JavaScript moderno?",
        options: [
            "var nombre;",
            "let nombre;",
            "int nombre;",
            "variable nombre;"
        ],
        correctIndex: 1
    },
    {
        id: 4,
        level: 1,
        text: "¿Cuál de los siguientes NO es un tipo de dato primitivo en JavaScript?",
        options: [
            "string",
            "number",
            "boolean",
            "array"
        ],
        correctIndex: 3
    },
    {
        id: 5,
        level: 1,
        text: "¿Qué palabra clave se usa para declarar una constante?",
        options: [
            "var",
            "let",
            "const",
            "static"
        ],
        correctIndex: 2
    },
    {
        id: 6,
        level: 1,
        text: "¿Qué operador se usa para comparar valor y tipo?",
        options: [
            "==",
            "=",
            "===",
            "!="
        ],
        correctIndex: 2
    },
    {
        id: 7,
        level: 1,
        text: "¿Qué valor representa la ausencia intencional de un valor?",
        options: [
            "undefined",
            "null",
            "false",
            "NaN"
        ],
        correctIndex: 1
    },
    {
        id: 8,
        level: 1,
        text: "¿Qué estructura se usa para repetir código?",
        options: [
            "if",
            "switch",
            "loop",
            "for"
        ],
        correctIndex: 3
    },
    {
        id: 9,
        level: 1,
        text: "¿Qué método se usa para imprimir en consola?",
        options: [
            "console.print()",
            "console.log()",
            "print()",
            "log.console()"
        ],
        correctIndex: 1
    },
    {
        id: 10,
        level: 1,
        text: "¿Cuál es el resultado de typeof null?",
        options: [
            "null",
            "object",
            "undefined",
            "boolean"
        ],
        correctIndex: 1
    },

    {
        id: 11,
        level: 2,
        text: "¿Qué es una función flecha?",
        options: [
            "Una función sin nombre",
            "Una función más rápida",
            "Una forma corta de escribir funciones",
            "Una función exclusiva de clases"
        ],
        correctIndex: 2
    },
    {
        id: 12,
        level: 2,
        text: "¿Qué hace el método Array.map()?",
        options: [
            "Filtra elementos",
            "Transforma cada elemento",
            "Elimina elementos",
            "Ordena el array"
        ],
        correctIndex: 1
    },
    {
        id: 13,
        level: 2,
        text: "¿Qué es el scope en JavaScript?",
        options: [
            "La velocidad del código",
            "El alcance de las variables",
            "Un tipo de función",
            "Un método del DOM"
        ],
        correctIndex: 1
    },
    {
        id: 14,
        level: 2,
        text: "¿Qué palabra clave se usa para manejar errores?",
        options: [
            "error",
            "catch",
            "try",
            "throw"
        ],
        correctIndex: 2
    },
    {
        id: 15,
        level: 2,
        text: "¿Qué es una promesa?",
        options: [
            "Un bucle",
            "Un objeto para manejar asincronía",
            "Un evento del DOM",
            "Una función callback"
        ],
        correctIndex: 1
    },
    {
        id: 16,
        level: 2,
        text: "¿Cuál método convierte JSON a objeto?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.toObject()",
            "JSON.convert()"
        ],
        correctIndex: 0
    },
    {
        id: 17,
        level: 2,
        text: "¿Qué hace event.preventDefault()?",
        options: [
            "Detiene el evento",
            "Evita el comportamiento por defecto",
            "Elimina el evento",
            "Cierra la página"
        ],
        correctIndex: 1
    },
    {
        id: 18,
        level: 2,
        text: "¿Qué significa DOM?",
        options: [
            "Data Object Model",
            "Document Object Model",
            "Dynamic Object Method",
            "Document Order Map"
        ],
        correctIndex: 1
    },
    {
        id: 19,
        level: 2,
        text: "¿Qué método selecciona un elemento por id?",
        options: [
            "querySelectorAll",
            "getElementsByClassName",
            "getElementById",
            "selectById"
        ],
        correctIndex: 2
    },
    {
        id: 20,
        level: 2,
        text: "¿Qué tipo de lenguaje es JavaScript?",
        options: [
            "Compilado",
            "Interpretado",
            "Ensamblador",
            "Binario"
        ],
        correctIndex: 1
    },
        {
        id: 21,
        level: 2,
        text: "¿Qué hace el método Array.filter()?",
        options: [
            "Transforma los elementos",
            "Filtra elementos según una condición",
            "Reduce el array a un valor",
            "Ordena el array"
        ],
        correctIndex: 1
    },
    {
        id: 22,
        level: 2,
        text: "¿Qué devuelve Array.find() si no encuentra ningún elemento?",
        options: [
            "null",
            "false",
            "undefined",
            "0"
        ],
        correctIndex: 2
    },
    {
        id: 23,
        level: 2,
        text: "¿Qué es un callback?",
        options: [
            "Una función que se ejecuta inmediatamente",
            "Una función pasada como argumento",
            "Una función asíncrona",
            "Una función flecha"
        ],
        correctIndex: 1
    },
    {
        id: 24,
        level: 2,
        text: "¿Qué método convierte un objeto en JSON?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.encode()",
            "JSON.objectify()"
        ],
        correctIndex: 1
    },
    {
        id: 25,
        level: 2,
        text: "¿Qué operador se usa para el spread operator?",
        options: [
            "...",
            "**",
            "??",
            "=>"
        ],
        correctIndex: 0
    },
    {
        id: 26,
        level: 2,
        text: "¿Qué es hoisting?",
        options: [
            "Mover funciones al final",
            "Elevar declaraciones en tiempo de ejecución",
            "Ejecutar código más rápido",
            "Un error del compilador"
        ],
        correctIndex: 1
    },
    {
        id: 27,
        level: 2,
        text: "¿Cuál es el alcance de una variable declarada con let?",
        options: [
            "Global",
            "De función",
            "De bloque",
            "De módulo"
        ],
        correctIndex: 2
    },
    {
        id: 28,
        level: 2,
        text: "¿Qué estructura de datos usa pares clave-valor?",
        options: [
            "Array",
            "Set",
            "Map",
            "Object"
        ],
        correctIndex: 3
    },
    {
        id: 29,
        level: 2,
        text: "¿Qué método permite agregar elementos al final de un array?",
        options: [
            "shift()",
            "push()",
            "unshift()",
            "pop()"
        ],
        correctIndex: 1
    },
    {
        id: 30,
        level: 2,
        text: "¿Qué devuelve Array.reduce()?",
        options: [
            "Un nuevo array",
            "Un boolean",
            "Un valor acumulado",
            "Un objeto siempre"
        ],
        correctIndex: 2
    },

    {
        id: 31,
        level: 3,
        text: "¿Qué es el event loop?",
        options: [
            "Un tipo de bucle for",
            "Un sistema para manejar asincronía",
            "Un método del DOM",
            "Una función del navegador"
        ],
        correctIndex: 1
    },
    {
        id: 32,
        level: 3,
        text: "¿Cuál es la diferencia principal entre var y let?",
        options: [
            "var es más rápido",
            "let tiene scope de bloque",
            "var no permite reasignación",
            "let es global"
        ],
        correctIndex: 1
    },
    {
        id: 33,
        level: 3,
        text: "¿Qué devuelve una función sin return?",
        options: [
            "null",
            "false",
            "undefined",
            "0"
        ],
        correctIndex: 2
    },
    {
        id: 34,
        level: 3,
        text: "¿Qué significa que JavaScript sea single-threaded?",
        options: [
            "Que no puede manejar eventos",
            "Que ejecuta una tarea a la vez",
            "Que es lento",
            "Que no soporta asincronía"
        ],
        correctIndex: 1
    },
    {
        id: 35,
        level: 3,
        text: "¿Qué patrón permite crear funciones privadas?",
        options: [
            "Prototype",
            "Callback",
            "Closure",
            "Factory"
        ],
        correctIndex: 2
    },
    {
        id: 36,
        level: 3,
        text: "¿Qué es una IIFE?",
        options: [
            "Una función que se ejecuta inmediatamente",
            "Un bucle infinito",
            "Una función asíncrona",
            "Un objeto especial"
        ],
        correctIndex: 0
    },
    {
        id: 37,
        level: 3,
        text: "¿Qué hace Object.freeze()?",
        options: [
            "Elimina propiedades",
            "Evita modificaciones al objeto",
            "Hace el objeto inmutable parcialmente",
            "Clona el objeto"
        ],
        correctIndex: 1
    },
    {
        id: 38,
        level: 3,
        text: "¿Qué devuelve typeof NaN?",
        options: [
            "NaN",
            "undefined",
            "number",
            "object"
        ],
        correctIndex: 2
    },
    {
        id: 39,
        level: 3,
        text: "¿Qué método detiene la propagación de eventos?",
        options: [
            "stopDefault()",
            "stopPropagation()",
            "preventEvent()",
            "halt()"
        ],
        correctIndex: 1
    },
    {
        id: 40,
        level: 3,
        text: "¿Qué característica define a la programación funcional?",
        options: [
            "Uso de clases",
            "Funciones puras",
            "Uso intensivo de objetos",
            "Herencia"
        ],
        correctIndex: 1
    },
        {
        id: 41,
        level: 3,
        text: "¿Qué valor tiene 'this' en el contexto global del navegador?",
        options: [
            "null",
            "window",
            "document",
            "undefined"
        ],
        correctIndex: 1
    },
    {
        id: 42,
        level: 3,
        text: "¿Qué método permite enlazar explícitamente el valor de 'this'?",
        options: [
            "call()",
            "bind()",
            "apply()",
            "Todos los anteriores"
        ],
        correctIndex: 3
    },
    {
        id: 43,
        level: 3,
        text: "¿Qué es el prototype en JavaScript?",
        options: [
            "Un tipo de clase",
            "Un objeto del que otros heredan propiedades",
            "Un método especial",
            "Un patrón de diseño"
        ],
        correctIndex: 1
    },
    {
        id: 44,
        level: 3,
        text: "¿Cómo se define una clase en JavaScript?",
        options: [
            "function Clase {}",
            "class Clase {}",
            "new Clase {}",
            "object Clase {}"
        ],
        correctIndex: 1
    },
    {
        id: 45,
        level: 3,
        text: "¿Qué método se ejecuta automáticamente al crear una instancia de una clase?",
        options: [
            "init()",
            "start()",
            "constructor()",
            "__init__()"
        ],
        correctIndex: 2
    },
    {
        id: 46,
        level: 3,
        text: "¿Qué palabra clave se usa para heredar de una clase?",
        options: [
            "inherits",
            "extends",
            "implements",
            "super"
        ],
        correctIndex: 1
    },
    {
        id: 47,
        level: 3,
        text: "¿Qué hace la palabra clave super?",
        options: [
            "Llama al constructor de la clase padre",
            "Crea una nueva clase",
            "Hace una copia del objeto",
            "Declara un método estático"
        ],
        correctIndex: 0
    },
    {
        id: 48,
        level: 3,
        text: "¿Qué es una promesa en estado 'pending'?",
        options: [
            "Resuelta",
            "Rechazada",
            "En espera",
            "Cancelada"
        ],
        correctIndex: 2
    },
    {
        id: 49,
        level: 3,
        text: "¿Qué palabra clave permite usar await?",
        options: [
            "promise",
            "async",
            "then",
            "defer"
        ],
        correctIndex: 1
    },
    {
        id: 50,
        level: 3,
        text: "¿Qué devuelve una función async?",
        options: [
            "Un valor directo",
            "Una promesa",
            "Un callback",
            "Un boolean"
        ],
        correctIndex: 1
    },

    {
        id: 51,
        level: 4,
        text: "¿Qué método se usa para manejar errores en una promesa?",
        options: [
            "error()",
            "catch()",
            "fail()",
            "reject()"
        ],
        correctIndex: 1
    },
    {
        id: 52,
        level: 4,
        text: "¿Qué patrón evita el callback hell?",
        options: [
            "Callbacks anidados",
            "Promesas",
            "Bucles",
            "Switch"
        ],
        correctIndex: 1
    },
    {
        id: 53,
        level: 4,
        text: "¿Qué es destructuring?",
        options: [
            "Eliminar propiedades",
            "Extraer valores de arrays u objetos",
            "Un tipo de bucle",
            "Un método del DOM"
        ],
        correctIndex: 1
    },
    {
        id: 54,
        level: 4,
        text: "¿Qué significa que un objeto sea inmutable?",
        options: [
            "Que no puede ser iterado",
            "Que no puede ser modificado",
            "Que no tiene métodos",
            "Que no se puede clonar"
        ],
        correctIndex: 1
    },
    {
        id: 55,
        level: 4,
        text: "¿Qué método crea una copia superficial de un objeto?",
        options: [
            "Object.assign()",
            "Object.freeze()",
            "Object.seal()",
            "Object.create()"
        ],
        correctIndex: 0
    },
    {
        id: 56,
        level: 4,
        text: "¿Qué tipo de copia crea el spread operator en objetos?",
        options: [
            "Profunda",
            "Superficial",
            "Referencial",
            "Inmutable"
        ],
        correctIndex: 1
    },
    {
        id: 57,
        level: 4,
        text: "¿Qué hace el operador ?? (nullish coalescing)?",
        options: [
            "Evalúa valores falsy",
            "Evalúa solo null o undefined",
            "Convierte valores a boolean",
            "Compara tipos"
        ],
        correctIndex: 1
    },
    {
        id: 58,
        level: 4,
        text: "¿Qué significa modularizar un proyecto?",
        options: [
            "Usar funciones largas",
            "Separar el código en archivos reutilizables",
            "Eliminar dependencias",
            "Optimizar memoria"
        ],
        correctIndex: 1
    },
    {
        id: 59,
        level: 4,
        text: "¿Qué palabra clave exporta un módulo?",
        options: [
            "export",
            "include",
            "require",
            "module"
        ],
        correctIndex: 0
    },
    {
        id: 60,
        level: 4,
        text: "¿Qué palabra clave importa un módulo ES?",
        options: [
            "require",
            "import",
            "include",
            "fetch"
        ],
        correctIndex: 1
    },
        {
        id: 61,
        level: 4,
        text: "¿Qué es una microtask en JavaScript?",
        options: [
            "Una tarea de baja prioridad",
            "Una tarea del event loop asociada a promesas",
            "Un tipo de callback",
            "Un hilo secundario"
        ],
        correctIndex: 1
    },
    {
        id: 62,
        level: 4,
        text: "¿Cuál de los siguientes se ejecuta primero?",
        options: [
            "setTimeout",
            "Eventos del DOM",
            "Promesas resueltas",
            "Intervalos"
        ],
        correctIndex: 2
    },
    {
        id: 63,
        level: 4,
        text: "¿Qué problema causa una referencia circular en memoria?",
        options: [
            "Errores de sintaxis",
            "Memory leaks",
            "Bloqueo del event loop",
            "Errores de tipo"
        ],
        correctIndex: 1
    },
    {
        id: 64,
        level: 4,
        text: "¿Qué método elimina un listener de eventos?",
        options: [
            "removeListener",
            "stopEvent",
            "removeEventListener",
            "deleteEvent"
        ],
        correctIndex: 2
    },
    {
        id: 65,
        level: 4,
        text: "¿Qué es el debounce?",
        options: [
            "Ejecutar una función inmediatamente",
            "Limitar la frecuencia de ejecución",
            "Ejecutar una función una sola vez",
            "Cancelar promesas"
        ],
        correctIndex: 1
    },
    {
        id: 66,
        level: 4,
        text: "¿Qué es el throttle?",
        options: [
            "Ejecutar una función tras un retraso",
            "Ejecutar una función a intervalos controlados",
            "Cancelar eventos",
            "Detener el event loop"
        ],
        correctIndex: 1
    },
    {
        id: 67,
        level: 4,
        text: "¿Qué método detiene un intervalo?",
        options: [
            "stopInterval",
            "clearTimeout",
            "clearInterval",
            "cancelInterval"
        ],
        correctIndex: 2
    },
    {
        id: 68,
        level: 4,
        text: "¿Qué problema genera el uso excesivo de var?",
        options: [
            "Errores de compilación",
            "Problemas de scope",
            "Mayor consumo de memoria",
            "Bloqueo del DOM"
        ],
        correctIndex: 1
    },
    {
        id: 69,
        level: 4,
        text: "¿Qué es una dependencia implícita?",
        options: [
            "Una librería externa",
            "Una variable global usada sin declarar",
            "Un módulo importado",
            "Una función pura"
        ],
        correctIndex: 1
    },
    {
        id: 70,
        level: 4,
        text: "¿Qué práctica mejora la mantenibilidad del código?",
        options: [
            "Funciones largas",
            "Variables globales",
            "Código modular",
            "Duplicar lógica"
        ],
        correctIndex: 2
    },

    {
        id: 71,
        level: 4,
        text: "¿Qué es un memory leak?",
        options: [
            "Un error de sintaxis",
            "Memoria que no se libera",
            "Un bug visual",
            "Un error del navegador"
        ],
        correctIndex: 1
    },
    {
        id: 72,
        level: 4,
        text: "¿Qué API permite medir rendimiento?",
        options: [
            "console.time",
            "Performance API",
            "Timer API",
            "Debug API"
        ],
        correctIndex: 1
    },
    {
        id: 73,
        level: 4,
        text: "¿Qué es el garbage collector?",
        options: [
            "Un hilo manual",
            "Un sistema automático de gestión de memoria",
            "Una función del usuario",
            "Un método del DOM"
        ],
        correctIndex: 1
    },
    {
        id: 74,
        level: 4,
        text: "¿Qué significa que una función sea pura?",
        options: [
            "Que no retorna nada",
            "Que no tiene efectos secundarios",
            "Que siempre es asíncrona",
            "Que modifica variables globales"
        ],
        correctIndex: 1
    },
    {
        id: 75,
        level: 4,
        text: "¿Qué método permite delegación de eventos?",
        options: [
            "addEventListener en múltiples nodos",
            "Eventos inline",
            "Escuchar eventos en un contenedor padre",
            "Usar onclick"
        ],
        correctIndex: 2
    },
    {
        id: 76,
        level: 4,
        text: "¿Qué problema causa modificar el DOM repetidamente?",
        options: [
            "Errores de sintaxis",
            "Reflows y mala performance",
            "Errores de memoria",
            "Bloqueo de JavaScript"
        ],
        correctIndex: 1
    },
    {
        id: 77,
        level: 4,
        text: "¿Qué es XSS?",
        options: [
            "Un error de red",
            "Una vulnerabilidad de seguridad",
            "Un tipo de promesa",
            "Un método del DOM"
        ],
        correctIndex: 1
    },
    {
        id: 78,
        level: 4,
        text: "¿Qué práctica ayuda a prevenir XSS?",
        options: [
            "Usar innerHTML sin control",
            "Escapar contenido del usuario",
            "Usar eval",
            "Concatenar strings"
        ],
        correctIndex: 1
    },
    {
        id: 79,
        level: 4,
        text: "¿Qué hace el método eval()?",
        options: [
            "Optimiza código",
            "Ejecuta código como string",
            "Convierte JSON",
            "Evalúa promesas"
        ],
        correctIndex: 1
    },
    {
        id: 80,
        level: 4,
        text: "¿Por qué se considera mala práctica usar eval()?",
        options: [
            "Es lento",
            "Genera errores de sintaxis",
            "Es inseguro",
            "No funciona en navegadores"
        ],
        correctIndex: 2
    },
    {
    id: 81,
    level: 4,
    text: "¿Qué es una closure?",
    options: [
        "Una función sin nombre",
        "Una función con acceso a su entorno léxico",
        "Una promesa encadenada",
        "Un método del DOM"
    ],
    correctIndex: 1
},
{
    id: 82,
    level: 4,
    text: "¿Qué devuelve typeof null?",
    options: [
        "null",
        "undefined",
        "object",
        "boolean"
    ],
    correctIndex: 2
},
{
    id: 83,
    level: 4,
    text: "¿Qué método crea un nuevo array sin modificar el original?",
    options: [
        "splice",
        "push",
        "map",
        "sort"
    ],
    correctIndex: 2
},
{
    id: 84,
    level: 4,
    text: "¿Qué es la inmutabilidad?",
    options: [
        "La capacidad de cambiar valores",
        "La imposibilidad de modificar un estado",
        "El uso de variables globales",
        "La eliminación de referencias"
    ],
    correctIndex: 1
},
{
    id: 85,
    level: 4,
    text: "¿Qué patrón de diseño permite notificar cambios a múltiples observadores?",
    options: [
        "Factory",
        "Observer",
        "Singleton",
        "Decorator"
    ],
    correctIndex: 1
},
{
    id: 86,
    level: 4,
    text: "¿Qué diferencia a let de var?",
    options: [
        "let es global",
        "var tiene scope de bloque",
        "let tiene scope de bloque",
        "No hay diferencia"
    ],
    correctIndex: 2
},
{
    id: 87,
    level: 4,
    text: "¿Qué método se usa para congelar un objeto?",
    options: [
        "Object.lock()",
        "Object.freeze()",
        "Object.seal()",
        "Object.prevent()"
    ],
    correctIndex: 1
},
{
    id: 88,
    level: 4,
    text: "¿Qué es un WeakMap?",
    options: [
        "Un mapa inmutable",
        "Un mapa con claves débiles",
        "Un array especial",
        "Un objeto sellado"
    ],
    correctIndex: 1
},
{
    id: 89,
    level: 4,
    text: "¿Qué ventaja tiene usar funciones puras?",
    options: [
        "Mayor consumo de memoria",
        "Facilitan pruebas y predicción",
        "Permiten modificar el estado global",
        "Son más rápidas siempre"
    ],
    correctIndex: 1
},
{
    id: 90,
    level: 4,
    text: "¿Qué método permite copiar propiedades entre objetos?",
    options: [
        "Object.assign",
        "Object.copy",
        "Object.merge",
        "Object.clone"
    ],
    correctIndex: 0
},
{
    id: 91,
    level: 4,
    text: "¿Qué significa lazy loading?",
    options: [
        "Cargar todo al inicio",
        "Cargar recursos bajo demanda",
        "Optimizar imágenes",
        "Eliminar dependencias"
    ],
    correctIndex: 1
},
{
    id: 92,
    level: 4,
    text: "¿Qué es el shadow DOM?",
    options: [
        "Un DOM virtual",
        "Un DOM encapsulado",
        "Un DOM oculto por CSS",
        "Un DOM temporal"
    ],
    correctIndex: 1
},
{
    id: 93,
    level: 4,
    text: "¿Qué permite async / await?",
    options: [
        "Eliminar callbacks",
        "Escribir código asíncrono legible",
        "Bloquear el event loop",
        "Ejecutar código en paralelo real"
    ],
    correctIndex: 1
},
{
    id: 94,
    level: 4,
    text: "¿Qué método detiene la propagación de un evento?",
    options: [
        "preventDefault",
        "stopPropagation",
        "cancelEvent",
        "removeEvent"
    ],
    correctIndex: 1
},
{
    id: 95,
    level: 4,
    text: "¿Qué es una promesa pendiente?",
    options: [
        "Una promesa rechazada",
        "Una promesa resuelta",
        "Una promesa en espera",
        "Una promesa cancelada"
    ],
    correctIndex: 2
},
{
    id: 96,
    level: 4,
    text: "¿Qué método transforma un array en un solo valor?",
    options: [
        "map",
        "filter",
        "reduce",
        "forEach"
    ],
    correctIndex: 2
},
{
    id: 97,
    level: 4,
    text: "¿Qué es el currying?",
    options: [
        "Ejecutar funciones inmediatamente",
        "Transformar una función en llamadas parciales",
        "Encadenar promesas",
        "Crear closures anidadas"
    ],
    correctIndex: 1
},
{
    id: 98,
    level: 4,
    text: "¿Qué problema evita el uso de strict mode?",
    options: [
        "Errores de red",
        "Errores silenciosos",
        "Errores de sintaxis",
        "Errores visuales"
    ],
    correctIndex: 1
},
{
    id: 99,
    level: 4,
    text: "¿Qué es un callback hell?",
    options: [
        "Uso excesivo de callbacks anidados",
        "Errores de memoria",
        "Promesas encadenadas",
        "Funciones puras"
    ],
    correctIndex: 0
},
{
    id: 100,
    level: 4,
    text: "¿Qué característica define a una SPA?",
    options: [
        "Recarga completa de página",
        "Múltiples archivos HTML",
        "Cambio dinámico de vistas con JavaScript",
        "Uso obligatorio de frameworks"
    ],
    correctIndex: 2
}

];
