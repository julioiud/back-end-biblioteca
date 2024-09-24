db.libros.insertMany([
    {
        "codigo" : "1",
        "titulo" : "Calculo I",
        "ISBN" : "978-84",
        "editorial" : {
           "_id" : "66f20dc67ead4d31842028b4"
        },
        // muchos a muchos
        "autores" : [
            {
               "_id" :  "66f20e9d7ead4d31842028b8"
            },
            {
                "_id" :  "66f20e9d7ead4d31842028b9"
             },
        ],
        "paginas" : 1100,
        "fechaCreacion" : new Date(),
        "fechaActualizacion" : null
    },
    {
        "codigo" : "2",
        "titulo" : "Quimica avanzada",
        "ISBN" : "978-85",
        "editorial" : {
           "_id" : "66f20dc67ead4d31842028b5"
        },
        // muchos a muchos
        "autores" : [
            {
               "_id" :  "66f20e9d7ead4d31842028b8"
            },
            {
                "_id" :  "66f20e9d7ead4d31842028ba"
             },
        ],
        "paginas" : 5321,
        "fechaCreacion" : new Date(),
        "fechaActualizacion" : null
    },
    {
        "codigo" : "3",
        "titulo" : "Calculo II",
        "ISBN" : "578-84",
        "editorial" : {
           "_id" : "66f20dc67ead4d31842028b4"
        },
        // muchos a muchos
        "autores" : [
            {
               "_id" :  "66f20e9d7ead4d31842028b8"
            },
            {
                "_id" :  "66f20e9d7ead4d31842028b9"
             },
        ],
        "paginas" : 1200,
        "fechaCreacion" : new Date(),
        "fechaActualizacion" : null
    },
])
