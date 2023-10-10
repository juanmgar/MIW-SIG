// Función para inicializar el mapa
function initMap() {
    const institutos  = [
        {
          "NOMBRE": "COL. Beata Imelda Santo Tomás",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Horacio Fernández Iguanzo, 11",
          "CP": 33930,
          "LOCALIDAD": "Langreo",
          "MUNICIPIO": "Langreo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "COL. Dulce Nombre de Jesús",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Pérez de la Sala, 31",
          "CP": 33007,
          "LOCALIDAD": "Oviedo",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "COL. Fomento Los Robles",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Urb. Soto Llanera - Pruvia",
          "CP": 33192,
          "LOCALIDAD": "Santa Eulalia",
          "MUNICIPIO": "Llanera",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "COL. Internacional Meres",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Meres",
          "CP": 33199,
          "LOCALIDAD": "Meres",
          "MUNICIPIO": "Siero",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "COL. Laude Palacio de Granda",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "El Lugarín, 15 - Granda",
          "CP": 33199,
          "LOCALIDAD": "Granda",
          "MUNICIPIO": "Siero",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "COL. Loyola",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Fernández de Oviedo, 47",
          "CP": 33012,
          "LOCALIDAD": "Oviedo",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "COL. Marista Auseva",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "San Pedro de los Arcos, 14",
          "CP": 33012,
          "LOCALIDAD": "Oviedo",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "COL. Salesiano Santo Ángel",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "La Goleta, 23",
          "CP": 33409,
          "LOCALIDAD": "Avilés",
          "MUNICIPIO": "Avilés",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "COL. San Eutiquio",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Avda. La Salle, 7",
          "CP": 33201,
          "LOCALIDAD": "Gijón",
          "MUNICIPIO": "Gijón",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "COL. San Fernando",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Avda. San Agustín, s/n",
          "CP": 33400,
          "LOCALIDAD": "Avilés",
          "MUNICIPIO": "Avilés",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "COL. San Ignacio",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Richard Grandío s/n",
          "CP": 33193,
          "LOCALIDAD": "Oviedo",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "COL. Santa María del Naranco - Alter Vía",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Avda. de los Monumentos, 26",
          "CP": 33012,
          "LOCALIDAD": "Oviedo",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "COL. Santa Teresa de Jesús",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Enrique de Ossó, 53",
          "CP": 33012,
          "LOCALIDAD": "Oviedo",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Alfonso II",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Santa Susana, s/n",
          "CP": 33007,
          "LOCALIDAD": "Oviedo",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Aramo",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "C/ Coronel Aranda, 7",
          "CP": 33005,
          "LOCALIDAD": "Oviedo",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Astures",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Leopoldo, 26",
          "CP": 33420,
          "LOCALIDAD": "Lugones",
          "MUNICIPIO": "Siero",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Avelina Cerra",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Dionisio Ruisánchez, s/n",
          "CP": 33560,
          "LOCALIDAD": "Ribadesella",
          "MUNICIPIO": "Ribadesella",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Candás",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Ctra. El Faro, 17",
          "CP": 33430,
          "LOCALIDAD": "Candás",
          "MUNICIPIO": "Carreño",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Carmen y Severo Ochoa",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Pza. Catedrático Ramón Losa",
          "CP": 33700,
          "LOCALIDAD": "Luarca",
          "MUNICIPIO": "Valdés",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Carreño Miranda",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Avda. Cervantes, s/n",
          "CP": 33402,
          "LOCALIDAD": "Avilés",
          "MUNICIPIO": "Avilés",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Doctor Fleming",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Doctor Fleming, 7",
          "CP": 33005,
          "LOCALIDAD": "Oviedo",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Doña Jimena",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Avda. de la Constitución, 55",
          "CP": 33208,
          "LOCALIDAD": "Gijón",
          "MUNICIPIO": "Gijón",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. El Batán",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "El Batán, s/n",
          "CP": 33600,
          "LOCALIDAD": "Mieres",
          "MUNICIPIO": "Mieres",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. El Piles",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Paseo Doctor Fléming, 1065",
          "CP": 33203,
          "LOCALIDAD": "Gijón",
          "MUNICIPIO": "Gijón",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Fernández Vallín",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Pérez de Ayala, s/n",
          "CP": 33208,
          "LOCALIDAD": "Gijón",
          "MUNICIPIO": "Gijón",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Galileo Galilei",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Avda. de Pardo, s/n",
          "CP": 33710,
          "LOCALIDAD": "Navia",
          "MUNICIPIO": "Navia",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Isla de la Deva",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Avda. Principal, 33",
          "CP": 33450,
          "LOCALIDAD": "Piedras Blancas",
          "MUNICIPIO": "Castrillón",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. La Ería",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "La Regenta, 4",
          "CP": 33006,
          "LOCALIDAD": "Oviedo",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. La Fresneda",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Camino de la Fontona",
          "CP": 33429,
          "LOCALIDAD": "Urbanización La Fresneda",
          "MUNICIPIO": "Siero",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. La Quintana",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Jaime Alberti, s/n",
          "CP": 33900,
          "LOCALIDAD": "Langreo",
          "MUNICIPIO": "Langreo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Leopoldo Alas Clarín",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Julián Cañedo, s/n",
          "CP": 33008,
          "LOCALIDAD": "Oviedo",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Llanera",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Avda. Río Carrión",
          "CP": 33424,
          "LOCALIDAD": "Llanera",
          "MUNICIPIO": "Llanera",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Marqués de Casariego",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Pza. de la Constitución, 2",
          "CP": 33740,
          "LOCALIDAD": "Tapia de Casariego",
          "MUNICIPIO": "Tapia de Casariego",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Mata Jove",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Simón Bolivar, s/n",
          "CP": 33213,
          "LOCALIDAD": "Gijón",
          "MUNICIPIO": "Gijón",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Monte Naranco",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Pedro Caravia, 9",
          "CP": 33012,
          "LOCALIDAD": "Oviedo",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Número 1",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Puerto de Vegarada, s/n",
          "CP": 33207,
          "LOCALIDAD": "Gijón",
          "MUNICIPIO": "Gijón",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Pando",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Avda. Pando, s/n",
          "CP": 33011,
          "LOCALIDAD": "Oviedo",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Peñamayor-Nava",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "La Laguna, 30",
          "CP": 33520,
          "LOCALIDAD": "Nava",
          "MUNICIPIO": "Nava",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Pérez de Ayala",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Pza.Guillén Lafuerza, s/n",
          "CP": 33011,
          "LOCALIDAD": "Oviedo",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Río Trubia",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Carretera General, s/n",
          "CP": 33100,
          "LOCALIDAD": "Trubia",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Rosario Acuña",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Puerto Vegarada, s/n",
          "CP": 33207,
          "LOCALIDAD": "Gijón",
          "MUNICIPIO": "Gijón",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Santa Bárbara",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "D. Vazquez Mtnez, s/n",
          "CP": 33930,
          "LOCALIDAD": "Langreo",
          "MUNICIPIO": "Langreo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Selgas",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Avda. Selgas, s/n Cudillero",
          "CP": 33150,
          "LOCALIDAD": "El Pito",
          "MUNICIPIO": "Cudillero",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Universidad Laboral",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "C/ José Luis Álvarez Margaride, s/n",
          "CP": 33203,
          "LOCALIDAD": "Gijón",
          "MUNICIPIO": "Gijón",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Víctor García de la Concha",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Maximino Miyar, s/n",
          "CP": 33300,
          "LOCALIDAD": "Villaviciosa",
          "MUNICIPIO": "Villaviciosa",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Virgen de la Luz",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Plaza Legazpi, 2",
          "CP": 33403,
          "LOCALIDAD": "Avilés",
          "MUNICIPIO": "Avilés",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "C.F.P.E. Imagen, Sonido e Informatica",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Finca La Reguera",
          "CP": 33180,
          "LOCALIDAD": "Noreña",
          "MUNICIPIO": "Noreña",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "COL. Beata Imelda Santo Tomas",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Horacio Fernandez Iguanzo, 11",
          "CP": 33930,
          "LOCALIDAD": "Langreo",
          "MUNICIPIO": "Langreo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. La Corredoria",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "La Corredoria",
          "CP": 33011,
          "LOCALIDAD": "Oviedo",
          "MUNICIPIO": "Oviedo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Elisa y Luis Villamil",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "El Noveledo",
          "CP": 33770,
          "LOCALIDAD": "Vegadeo",
          "MUNICIPIO": "Vegadeo",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Roces",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Salvador Allende, 4",
          "CP": 33211,
          "LOCALIDAD": "Gijon",
          "MUNICIPIO": "Gijon",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Numero 5",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Dolores Ibarruri, 17",
          "CP": 33400,
          "LOCALIDAD": "Aviles",
          "MUNICIPIO": "Aviles",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Corvera",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Ctra. General los Campos",
          "CP": 33404,
          "LOCALIDAD": "Los Campos",
          "MUNICIPIO": "Corvera de Asturias",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "I.E.S. Montevil",
          "TIPO": "PUBLICO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Rio Eo, 74",
          "CP": 33210,
          "LOCALIDAD": "Gijon",
          "MUNICIPIO": "Gijon",
          "PROVINCIA": ""
        },
        {
          "NOMBRE": "COL. Corazon de Maria",
          "TIPO": "PRIVADO",
          "UNIVERSIDAD": "Universidad de Oviedo",
          "DIRECCION": "Gral. Suarez Valdes, 4",
          "CP": 33204,
          "LOCALIDAD": "Gijon",
          "MUNICIPIO": "Gijon",
          "PROVINCIA": ""
        }
    ];
     // Coordenadas de Asturias, España
     var asturias = { lat: 43.3614, lng: -5.8593 };

         // Crear un nuevo mapa en el elemento con el id "map"
    var map = new google.maps.Map(document.getElementById('map'), {
        center: asturias,
        zoom: 8 // Puedes ajustar el nivel de zoom según tus preferencias
    });

    institutos.forEach(instituto => {
        const direccion = `${instituto.DIRECCION}, ${instituto.LOCALIDAD}, ${instituto.MUNICIPIO}, ${instituto.CP}`;

        // Llamar a la API de Geocoding para obtener las coordenadas de la dirección
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: direccion }, (results, status) => {
            if (status === 'OK' && results[0]) {
                const location = results[0].geometry.location;

                // Crear un marcador con etiqueta del nombre del colegio
                const marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    title: instituto.NOMBRE
                });
            } else {
                console.error(`No se pudo geocodificar la dirección del colegio ${colegio.nombre}`);
            }
        });
    });
}
