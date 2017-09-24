db.trabajo_grado.insert([
    {
        'nombre': 'OCLING',
        'periodoFin': '2015-1',
        'resumen': 'Aplicación para apoyar la enseñaza de química orgánica en universidades',
        'numEstudiantes': 2
    },
    {
        'nombre': 'TurnOs',
        'periodoFin': '2015-3',
        'resumen': 'Sistema de asignación eficiente de turnos y cálculo de nómina para los empleados de una empresa prestadora de servicios temporales',
        'numEstudiantes': 3 
    },
    {
        'nombre': 'Yanapay',
        'periodoFin': '2016-1',
        'resumen': 'Sistema de notificaciones y apoyo al rescate usando telefonía móvil',
        'numEstudiantes': 3 
    },
    {
        'nombre': 'Android Wear',
        'periodoFin': '2016-1',
        'resumen': 'Guias de implementación y características propias de un prototipo para AndroidWear',
        'numEstudiantes': 2
    },
    {
        'nombre': 'Colombia exporta fácil',
        'periodoFin': '2014-3',
        'resumen': 'Aplicación web centrada en pymes para la exportación de servicios de manufactura',
        'numEstudiantes': 1 
    },                        
    {
        'nombre': 'MV LIFE Gym Mobile',
        'periodoFin': '2014-1',
        'resumen': 'Aplicación móvil personalizada para usuarios de gimnasio',
        'numEstudiantes': 1
    },
    {
        'nombre': 'MAGIS',
        'periodoFin': '2015-3',
        'resumen': 'Sistema de orientación vocacional basado en características del individuo así como de su contexto',
        'numEstudiantes': 2 
    },
    {
        'nombre': 'SmartGauge',
        'periodoFin': '2015-1',
        'resumen': 'plicación móvil de toma de medidas volumétricas de productos de consumo para mejorar los procesos de comercio B2B',
        'numEstudiantes': 2 
    },
    {
        'nombre': 'CALEAN',
        'periodoFin': '2016-1',
        'resumen': 'Servicios de comunicación en tiempo real entre clientes y comercio',
        'numEstudiantes': 3 
    },
    {
        'nombre': 'iZafiro',
        'periodoFin': '2016-3',
        'resumen': 'Software modo video-juego de apoyo al aprendizaje en números fraccionarios en niños de 9 a 10 años',
        'numEstudiantes': 1 
    }
]);

db.carrera.insert([
    {"_id":"Arquitectura",
        "nombre" : "Arquitectura", "facultad" : "Arquitectura Y Diseño", "carrerasAfines" : [], 
        "enfasis":[
            "Urbanismo",
            "Gestión",
            "Tecnología",
            "Estética",
            "Medio ambiente",
            "Teoría e historia",
            "Arquitecturas genéticas"
        ]},
    {"_id" : "Diseño industrial",
        "nombre" : "Diseño industrial", "facultad" : "Arquitectura Y Diseño", "carrerasAfines" : [],
        "enfasis":[
            "Diseño digital",
            "Diseño estratégico",
            "Diseño conceptual",
            "Diseño de producto"
        ]},
    {"_id" : "Artes escénicas",
        "nombre" : "Artes escénicas", "facultad" : "Artes", "carrerasAfines" : [],
        "enfasis":[
            "Creación",
            "Ejecución",
            "Producción",
            "Investigación"
        ]},
    {"_id" : "Artes visuales",
        "nombre" : "Artes visuales", "facultad" : "Artes", "carrerasAfines" : [],
        "enfasis":[
            "Expresión Audiovisual",
            "Expresión Gráfica",
            "Expresión Plástica"
        ]},
    {"_id" : "Estudios musicales",
        "nombre" : "Estudios musicales", "facultad" : "Artes", "carrerasAfines" : [],
        "enfasis":[
            "Dirección (Coral, Banda y Orquesta)",
            "Composición",
            "Composición de Música Comercial",
            "Ingeniería de Sonido",
            "Jazz (Batería, Bajo, Canto, Contrabajo, Guitarra Eléctrica, Saxofón, Trompeta, Flauta, Violín y Piano)",
            "Interpretación (Arpa, Canto, Guitarra, Percusión, Piano, Flauta, Oboe, Clarinete, Saxofón, Fagot, Corno, Trompeta, Trombón, Tuba, Eufonio, Violín, Viola, Violonchelo y Contrabajo)",
            "Educación"
        ]},
    {"_id" : "Bacteoriología",
        "nombre" : "Bacteoriología", "facultad" : "Ciencias", "carrerasAfines" : [],
        "enfasis":[
            "Bioquímica Clínica",
            "Diagnóstico Veterinario",
            "Errores Innatos del Metabolismo",
            "Genética",
            "Hematología y Banco de Sangre",
            "Inmunología",
            "Microbiología Clínica"
        ]},
    {"_id" : "Biología",
        "nombre" : "Biología", "facultad" : "Ciencias", "carrerasAfines" : [],
        "enfasis":[
            "Ecología",
            "Sistemática",
            "Conservación y restauración de la biodiversidad",
            "Genética",
            "Biotecnología",
            "Microbiología"
        ]},
    {"_id" : "Matemáticas",
        "nombre" : "Matemáticas", "facultad" : "Ciencias", "carrerasAfines" : [],
        "enfasis":[
            "Álgebra y Topología",
            "Análisis y Ecuaciones diferenciales"
        ]},
    {"_id" : "Microbiología industrial",
        "nombre" : "Microbiología industrial", "facultad" : "Ciencias", "carrerasAfines" : [],
        "enfasis":[
            "Alimentos",
            "Agrícola",
            "Ambiental"
        ]},
    {"_id" : "Nutrición y dietética",
        "nombre" : "Nutrición y dietética", "facultad" : "Ciencias", "carrerasAfines" : [],
        "enfasis":[
            "Nutrición Pública",
            "Nutrición clínica",
            "Servicios de alimentación",
            "Alimentos",
            "Educación Nutricional",
            "Consultorías"
        ]},
    {"_id" : "Contaduría pública",
        "nombre" : "Contaduría pública", "facultad" : "Ciencias Económicas y Administrativas", "carrerasAfines" : [],
        "enfasis":[
            "Contabilidad Financiera internacional",
            "Finanzas",
            "Aseguramiento",
            "Contabilidad y Aseguramiento Gubernamental",
            "Contabilidad Gerencial",
            "Tributaria e Investigación contable"
        ]},
    {"_id" : "Administración de empresas",
        "nombre" : "Administración de empresas", "facultad" : "Ciencias Económicas y Administrativas", "carrerasAfines" : [],
        "enfasis":[
            "Administración y organizaciones",
            "Mercadeo",
            "Finanzas",
            "Gestión humana",
            "Emprendimiento",
            "Ética y Responsabilidad Social",
            "Negocios Internacionales"
        ]},
    {"_id" : "Economía",
        "nombre" : "Economía", "facultad" : "Ciencias Económicas y Administrativas", "carrerasAfines" : [],
        "enfasis":[
            "Economía Social",
            "Economía Financiera",
            "Gestión Pública",
            "Teoría Económica",
            "Métodos Cuantitativos"
        ]},
    {"_id" : "Derecho",
        "nombre" : "Derecho", "facultad" : "Ciencias Jurídicas", "carrerasAfines" : [],
        "enfasis":[
            "Derechos Humanos y Justicia Social",
            "Derecho Empresarial",
            "Derecho Comercial Internacional y en Derecho de Daños",
            "Dinámica Estatal y Ciudadanía"
        ]},
    {"_id" : "Ciencia política",
        "nombre" : "Ciencia política", "facultad" : "Ciencias Políticas y Relaciones Internacionales", "carrerasAfines" : [],
        "enfasis":[
            "Participación y comunicación política",
            "Resolución de conflictos e investigación para la paz",
            "Gestión pública",
            "Relaciones internacionales"
        ]},
    {"_id":"Relaciones internacionales",
        "nombre" : "Relaciones internacionales", "facultad" : "Ciencias Políticas y Relaciones Internacionales", "carrerasAfines" : [],
        "enfasis":[
            "Seguridad",
            "Integración y Desarrollo",
            "Asuntos Políticos Internacionales",
            "América Latina y el Caribe",
            "Asia Pacífico",
            "Estados Unidos y Europa"
        ]},
    {"_id" : "Antropología",
        "nombre" : "Antropología", "facultad" : "Ciencias Sociales", "carrerasAfines" : [],
        "enfasis":[
            "Antropología de la Salud",
            "Cultura y Poder"
        ]},
    {"_id" : "Estudios literarios",
        "nombre" : "Estudios literarios", "facultad" : "Ciencias Sociales", "carrerasAfines" : [],
        "enfasis":[
            "Investigación",
            "Escrituras Creativas",
            "Gestión editorial",
            "Didáctica de la literatura"
        ]},
    {"_id" : "Historia",
        "nombre" : "Historia", "facultad" : "Ciencias Sociales", "carrerasAfines" : [],
        "enfasis":[
            "Historia Social y Cultural",
            "Historia Intelectual",
            "Historia Política y Económica",
            "Historia del Arte"
        ]},
    {"_id" : "Sociología",
        "nombre" : "Sociología", "facultad" : "Ciencias Sociales", "carrerasAfines" : [],
        "enfasis":[
            "Desarrollo",
            "Conocimiento y Cultura"
        ]},
    {"_id" : "Ciencia de la información bibliotecología",
        "nombre" : "Ciencia de la información bibliotecología", "facultad" : "Comunicación y Lenguaje", "carrerasAfines" : [],
        "enfasis":[
            "Administrativo",
            "Educativo",
            "Investigativo",
            "Asesoría"
        ]},
    {"_id" : "Comunicación social",
        "nombre" : "Comunicación social", "facultad" : "Comunicación y Lenguaje", "carrerasAfines" : [],
        "enfasis":[
            "Periodismo",
            "Publicidad",
            "Organizacional",
            "Radio",
            "Audiovisual",
            "Editorial"
        ]},
    {"_id" : "Lic. en lenguas modernas",
        "nombre" : "Lic. en lenguas modernas", "facultad" : "Comunicación y Lenguaje", "carrerasAfines" : [],
        "enfasis":[
            "Tercera Lengua",
            "Traducción de textos escritos",
            "Pedagogía y didáctica",
            "Enseñanza de Español a Extranjeros"
        ]},
    {"_id" : "Lic. en pedagogía infantil",
        "nombre" : "Lic. en pedagogía infantil", "facultad" : "Educación", "carrerasAfines" : [],
        "enfasis":[
            "Educación para el conocimiento social y político",
            "Didácticas de la lectura y la escritura",
            "Políticas y gestión de sistemas educativos y proyectos sociales",
            "Desarrollo cognitivo, creatividad y aprendizaje en sistemas educativos",
            "Prácticas educativas y procesos de formación"
        ]},
    //{"nombre" : "Lic. en educación básica con énfasis en humanidades y lengua castellana", "facultad" : "Educación", "carrerasAfines" : []},
    {"_id" : "Enfermería",
        "nombre" : "Enfermería", "facultad" : "Enfermería", "carrerasAfines" : [],
        "enfasis":[
            "Persona-Salud-Sociedad",
            "Herramientas para la atención en salud",
            "Cuidado de Enfermería Individual y Colectivo"
        ]},
    {"_id" : "Ecología",
        "nombre" : "Ecología", "facultad" : "Estudios Ambientales y Rurales", "carrerasAfines" : [],
        "enfasis":[
            "Modelamiento Espacial y SIG",
            "Modelamiento Dinámico",
            "Biogeografía",
            "Educación Ambiental",
            "Ecología de la Conservación",
            "Estudios de vegetación",
            "Diseño Experimental y Análisis de Datos", 
            "Socioecologìa de Paisajes Rurales",
            "Restauración"
        ]},
    {"_id" : "Filosofía",
        "nombre" : "Filosofía", "facultad" : "Filosofía", "carrerasAfines" : [],
        "enfasis":[
           "Seminario Énfasis Gesto, cuidado y responsabilidad",
           "Seminario Énfasis Richard Rorty: Objetividad, relativismo y verdad",
           "Seminario Énfasis Ricoeur: sí mismo como otro",
           "Sem. Énf. Ética filosófica y moralidades indígenas"
        ]},
    {"_id" : "Lic. en filosofía",
        "nombre" : "Lic. en filosofía", "facultad" : "Filosofía", "carrerasAfines" : [],
        "enfasis":[
            "Seminario de Descartes-Meditaciones metafísicas",
            "Seminario Platón: República",
            "Seminario La Sustancia en la Metafísica de Aristóteles",
            "Seminario Dionisio Areopagita"
        ]},
    {"_id" : "Ingeniería civil",
        "nombre" : "Ingeniería civil", "facultad" : "Ingeniería", "carrerasAfines" : [],
        "enfasis":[
            "Hidrotecnia",
            "Estructuras",
            "Geotecnia",
            "Saneamiento y ambiental",
            "Transporte"
        ]},
    {"_id" : "Ingeniería electrónica",
        "nombre" : "Ingeniería electrónica", "facultad" : "Ingeniería", "carrerasAfines" : [],
        "enfasis":[
            "Control y automatización",
            "Robótica",
            "Sistemas digitales",
            "Electrónica de potencia y energías renovables",
            "Telecomunicaciones",
            "Señales y Biomédica"
        ]},
    {"_id" : "Ingeniería industrial",
        "nombre" : "Ingeniería industrial", "facultad" : "Ingeniería", "carrerasAfines" : [],
        "enfasis":[
            "Logística",
            "Producción",
            "Tecnología",
            "Métodos Cuantitativos",
            "Fomento del Espíritu Empresarial"
        ]},
    {"_id" : "Ingeniería de sistemas",
        "nombre" : "Ingeniería de sistemas", "facultad" : "Ingeniería", "carrerasAfines" : [],
        "enfasis":[
            "Sistemas de Información y Gestión",
            "Arquitectura y Construcción de Software",
            "Computación Gráfica",
            "Redes y Sistemas Distribuidos",
            "Sistemas Inteligentes"
        ],
        "areaConocimiento":[
            "Fundamentos de Programación",
            "Programación Integral",
            "Algoritmos y Complejidad",
            "Organización y Arquitectura de Computadores",
            "Principios y Diseño de Sistemas Operativos",
            "Configuración y uso Sistemas Operativos",
            "Principios y Diseño centrados en redes",
            "Uso y Configuración centrados en redes",
            "Tecnologías de plataforma",
            "Teoría de los Lenguajes de Programación",
            "HCI",
            "Gráficos y Visualización",
            "Sistemas Inteligentes (AI)",
            "Teoría de Gestión de la Información",
            "Práctica de Gestión de la Información",
            "Computación científica (métodos numéricos)",
            "Desarrollo de Sistemas de Información",
            "Análisis de Requerimientos del Negocio",
            "E-business",
            "Análisis de Requerimientos Técnicos",
            "Fundamentos de ingeniería para SW",
            "Economía Ingeniería de SW",
            "Modelado y Análisis Software",
            "Diseño de Software",
            "Verificación y Validación de Software",
            "Evolución de Software (Mantenimiento)",
            "Proceso de Software",
            "Calidad de Software",
            "Lógica digital",
            "Sistemas embebidos",
            "Sistemas Distribuidos",
            "Seguridad: cuestiones y principios",
            "Seguridad: implementación",
            "Administración de Sistemas",
            "Gestión de los Sistemas de Información Org.",
            "Integración de sistemas",
            "Desarrollo de medios digitales"
        ]},
    {"_id" : "Medicina",
        "nombre" : "Medicina", "facultad" : "Medicina", "carrerasAfines" : [],
        "enfasis":[
           "Rotatorio Clínico",
           "Especial",
           "Articulación"
        ]},
    {"_id" : "Odontología",
        "nombre" : "Odontología", "facultad" : "Odontología", "carrerasAfines" : [],
        "enfasis":[
            "Área Básica Biomédica",
            "Área Clínica",
            "Área Investigativa",
            "Área Comunitaria",
            "Área de Fundamentación Odontológica",
            "Área Administrativa",
            "Área Humanística"
        ]},
    {"_id" : "Psicología",
        "nombre" : "Psicología", "facultad" : "Psicología", "carrerasAfines" : [],
        "enfasis":[
            "Pscilogía Clínica",
            "Cultura de Paz",
            "Inclusión Narrativa",
            "Neuropsicología",
            "Psicología Jurídica",
            "Psicología Organizacional"
        ]},
    {"_id" : "Lic. en teología",
        "nombre" : "Lic. en teología", "facultad" : "Teología", "carrerasAfines" : [],
        "enfasis":[
            "Área Bíblica"
        ]},
    {"_id" : "Lic. en ciencias religiosas",
        "nombre" : "Lic. en ciencias religiosas", "facultad" : "Teología", "carrerasAfines" : [],
        "enfasis":[
            "Área Sistemática"
        ]},
    {"_id" : "Teología",
        "nombre" : "Teología", "facultad" : "Teología", "carrerasAfines" : [],
        "enfasis":[
            "Área de Acción Humana"
        ]}
]);

db.gusto.insert([
    {"tipo" : "GENERALES", "imagePath" : "yoga.png"},
    {"tipo" : "GENERALES", "imagePath" : "astronomia.png"},
    {"tipo" : "GENERALES", "imagePath" : "playa.png"},
    {"tipo" : "GENERALES", "imagePath" : "jardineria.png"},
    {"tipo" : "GENERALES", "imagePath" : "viajar.png"},
    {"tipo" : "GENERALES", "imagePath" : "karts.png"},
    {"tipo" : "GENERALES", "imagePath" : "senderismo.png"},
    {"tipo" : "GENERALES", "imagePath" : "cabalgar.png"},
    {"tipo" : "GENERALES", "imagePath" : "comer_fuera.png"},
    {"tipo" : "GENERALES", "imagePath" : "caminar.png"},
    {"tipo" : "GENERALES", "imagePath" : "aerobicos.png"},
    {"tipo" : "GENERALES", "imagePath" : "correr.png"},
    {"tipo" : "GENERALES", "imagePath" : "paintball.png"},
    {"tipo" : "GENERALES", "imagePath" : "parapente.png"},
    {"tipo" : "GENERALES", "imagePath" : "zumba.png"},
    {"tipo" : "GENERALES", "imagePath" : "tai_chi.png"},
    {"tipo" : "GENERALES", "imagePath" : "compras.png"},
    {"tipo" : "GENERALES", "imagePath" : "skateboarding.png"},
    {"tipo" : "GENERALES", "imagePath" : "cuenteros.png"},
    {"tipo" : "GENERALES", "imagePath" : "graffiti.png"},
    {"tipo" : "GENERALES", "imagePath" : "juegos_mesa.png"},
    {"tipo" : "GENERALES", "imagePath" : "trucos_magia.png"},
    {"tipo" : "GENERALES", "imagePath" : "cocinar.png"},
    {"tipo" : "GENERALES", "imagePath" : "dormir.png"},
    {"tipo" : "GENERALES", "imagePath" : "ver_tv.png"},
    {"tipo" : "GENERALES", "imagePath" : "moda.png"},
    {"tipo" : "GENERALES", "imagePath" : "origami.png"},
    {"tipo" : "GENERALES", "imagePath" : "mascotas.png"},
    {"tipo" : "GENERALES", "imagePath" : "cantar.png"},
    {"tipo" : "GENERALES", "imagePath" : "videojuegos.png"},
    {"tipo" : "GENERALES", "imagePath" : "standup_comedy.png"},
    {"tipo" : "GENERALES", "imagePath" : "sudoku.png"},
    {"tipo" : "GENERALES", "imagePath" : "cine.png"},
    {"tipo" : "GENERALES", "imagePath" : "blogging.png"},
    {"tipo" : "GENERALES", "imagePath" : "socializar.png"},
    {"tipo" : "GENERALES", "imagePath" : "escuchar_musica.png"},
    {"tipo" : "GENERALES", "imagePath" : "voluntario.png"},
    {"tipo" : "GENERALES", "imagePath" : "decoracion_cupcakes.png"},
    {"tipo" : "GENERALES", "imagePath" : "aprender_idiomas.png"},
    {"tipo" : "GENERALES", "imagePath" : "tiempo_familia.png"},
    {"tipo" : "GENERALES", "imagePath" : "canto_coro.png"},
    {"tipo" : "GENERALES", "imagePath" : "leer.png"},
    {"tipo" : "GENERALES", "imagePath" : "bailar.png"},
    {"tipo" : "GENERALES", "imagePath" : "legos.png"},
    {"tipo" : "GENERALES", "imagePath" : "aprender_instrumentos.png"},

    {"tipo" : "DEPORTES", "imagePath" : "bolos.png"},
    {"tipo" : "DEPORTES", "imagePath" : "ajedrez.png"},
    {"tipo" : "DEPORTES", "imagePath" : "futbol.png"},
    {"tipo" : "DEPORTES", "imagePath" : "gimnasia.png"},
    {"tipo" : "DEPORTES", "imagePath" : "squash.png"},
    {"tipo" : "DEPORTES", "imagePath" : "artes_marciales.png"},
    {"tipo" : "DEPORTES", "imagePath" : "levantamiento_pesas.png"},
    {"tipo" : "DEPORTES", "imagePath" : "billar.png"},
    {"tipo" : "DEPORTES", "imagePath" : "boxeo.png"},
    {"tipo" : "DEPORTES", "imagePath" : "tenis_mesa.png"},
    {"tipo" : "DEPORTES", "imagePath" : "tiro_arco.png"},
    {"tipo" : "DEPORTES", "imagePath" : "badminton.png"},
    {"tipo" : "DEPORTES", "imagePath" : "beisbol.png"},
    {"tipo" : "DEPORTES", "imagePath" : "baloncesto.png"},
    {"tipo" : "DEPORTES", "imagePath" : "atletismo.png"},
    {"tipo" : "DEPORTES", "imagePath" : "natacion.png"},
    {"tipo" : "DEPORTES", "imagePath" : "ciclismo.png"},
    {"tipo" : "DEPORTES", "imagePath" : "bmx.png"},
    {"tipo" : "DEPORTES", "imagePath" : "escalar.png"},
    {"tipo" : "DEPORTES", "imagePath" : "taekwondo.png"},
    {"tipo" : "DEPORTES", "imagePath" : "ultimate.png"},
    {"tipo" : "DEPORTES", "imagePath" : "voleibol_arena.png"},
    {"tipo" : "DEPORTES", "imagePath" : "voleibol.png"},
    {"tipo" : "DEPORTES", "imagePath" : "golf.png"},
    {"tipo" : "DEPORTES", "imagePath" : "tenis_campo.png"},
    {"tipo" : "DEPORTES", "imagePath" : "balonmano.png"},
    {"tipo" : "DEPORTES", "imagePath" : "rugby.png"},

    {"tipo" : "ARTES", "imagePath" : "escritura.png"},
    {"tipo" : "ARTES", "imagePath" : "actuacion.png"},
    {"tipo" : "ARTES", "imagePath" : "artes_digitales.png"},
    {"tipo" : "ARTES", "imagePath" : "fotografia.png"},
    {"tipo" : "ARTES", "imagePath" : "pintura.png"},
    {"tipo" : "ARTES", "imagePath" : "dibujo.png"},
    {"tipo" : "ARTES", "imagePath" : "danza.png"}
]);

db.personalidad.insert([
    {_id : "INTJ"},
    {_id : "INTP"},
    {_id : "ENTJ"},
    {_id : "ENTP"},
    {_id : "ISTJ"},
    {_id : "ISFJ"},
    {_id : "ESTJ"},
    {_id : "ESFJ"},
    {_id : "INFJ"},
    {_id : "INFP"},
    {_id : "ENFJ"},
    {_id : "ENFP"},
    {_id : "ISTP"},
    {_id : "ISFP"},
    {_id : "ESTP"},
    {_id : "ESFP"}
]);

db.habilidad.insert([
    { "nombre" : "Preciso", "tipo" : "PERSONALES"},
    { "nombre" : "Adaptable", "tipo" : "PERSONALES"},
    { "nombre" : "Alerta", "tipo" : "PERSONALES"},
    { "nombre" : "Ambicioso", "tipo" : "PERSONALES"},
    { "nombre" : "Amable", "tipo" : "PERSONALES"},
    { "nombre" : "Simpático", "tipo" : "PERSONALES"},
    { "nombre" : "Analítico", "tipo" : "PERSONALES"},
    { "nombre" : "Articulado", "tipo" : "PERSONALES"},
    { "nombre" : "Asertivo", "tipo" : "PERSONALES"},
    { "nombre" : "Atento", "tipo" : "PERSONALES"},
    { "nombre" : "De mente abierta", "tipo" : "PERSONALES"},
    { "nombre" : "Calmado", "tipo" : "PERSONALES"},
    { "nombre" : "Cuidadoso", "tipo" : "PERSONALES"},
    { "nombre" : "Confiable", "tipo" : "PERSONALES"},
    { "nombre" : "Perseverante", "tipo" : "PERSONALES"},
    { "nombre" : "Consciente", "tipo" : "PERSONALES"},
    { "nombre" : "Constante", "tipo" : "PERSONALES"},
    { "nombre" : "Cooperativo", "tipo" : "PERSONALES"},
    { "nombre" : "Colaborativo", "tipo" : "PERSONALES"},
    { "nombre" : "Dedicado", "tipo" : "PERSONALES"},
    { "nombre" : "Fiable", "tipo" : "PERSONALES"},
    { "nombre" : "Decidido", "tipo" : "PERSONALES"},
    { "nombre" : "Eficiente", "tipo" : "PERSONALES"},
    { "nombre" : "Emprendedor", "tipo" : "PERSONALES"},
    { "nombre" : "Flexible", "tipo" : "PERSONALES"},
    { "nombre" : "Trabajador", "tipo" : "PERSONALES"},
    { "nombre" : "Honesto", "tipo" : "PERSONALES"},
    { "nombre" : "Independiente", "tipo" : "PERSONALES"},
    { "nombre" : "Innovador", "tipo" : "PERSONALES"},
    { "nombre" : "Optimista", "tipo" : "PERSONALES"},
    { "nombre" : "Organizado", "tipo" : "PERSONALES"},
    { "nombre" : "Paciente", "tipo" : "PERSONALES"},
    { "nombre" : "Orientado a las personas ", "tipo" : "PERSONALES"},
    { "nombre" : "Práctico", "tipo" : "PERSONALES"},
    { "nombre" : "Realista", "tipo" : "PERSONALES"},
    { "nombre" : "Ingenioso", "tipo" : "PERSONALES"},
    { "nombre" : "Responsable", "tipo" : "PERSONALES"},
    { "nombre" : "Versátil", "tipo" : "PERSONALES"},
    { "nombre" : "Comunicativo", "tipo" : "PERSONALES"},
    { "nombre" : "Interpretativo", "tipo" : "PERSONALES"},
    { "nombre" : "Creativo", "tipo" : "PERSONALES"},
    { "nombre" : "Toma de decisiones", "tipo" : "PERSONALES"},
    { "nombre" : "Explicativa", "tipo" : "PERSONALES"},
    { "nombre" : "Aprender rápidamente", "tipo" : "PERSONALES"},
    { "nombre" : "Confiado", "tipo" : "PERSONALES"},
    { "nombre" : "Agradable", "tipo" : "PERSONALES"},
    { "nombre" : "Servicial", "tipo" : "PERSONALES"},
    { "nombre" : "Liderazgo", "tipo" : "PERSONALES"},
    { "nombre" : "Seguir instrucciones", "tipo" : "PERSONALES"},
    { "nombre" : "Motivar a los demás", "tipo" : "PERSONALES"},
    { "nombre" : "Seguro de sí mismo", "tipo" : "PERSONALES"},
    { "nombre" : "Supervisar", "tipo" : "PERSONALES"},
    { "nombre" : "Gestión del tiempo", "tipo" : "PERSONALES"},
    { "nombre" : "Escuchar", "tipo" : "PERSONALES"},
    { "nombre" : "Considerado", "tipo" : "PERSONALES"},
    { "nombre" : "Puntual", "tipo" : "PERSONALES"},
    { "nombre" : "Lealtad", "tipo" : "PERSONALES"},

    { "nombre" : "Planeación urbana y regional", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Arquitectura")},
    { "nombre" : "Diseño arquitectónico", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Arquitectura")},
    { "nombre" : "Patrimonio y conservación", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Arquitectura")},
    { "nombre" : "Urbanismo y diseño urbano", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Arquitectura")},
    { "nombre" : "Tecnología y construcción", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Arquitectura")},
    { "nombre" : "Gestión", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Arquitectura")},
    { "nombre" : "Investigación", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Arquitectura")},
    { "nombre" : "Diseño interior", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Diseño industrial")},
    { "nombre" : "Argumentar proyectos de diseño", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Diseño industrial")},
    { "nombre" : "Expresión conceptual, verbal, escrita, gráfica y tridimensional", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Diseño industrial")},
    { "nombre" : "Identifica y comprende problemáticas que puedan ser abordadas y resueltas con métodos y soluciones de Diseño", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Diseño industrial")},
    { "nombre" : "Capacidad para informarse acerca de los constantes cambios, necesidades, expresiones, oportunidades y tendencias del contexto para innovar y proponer nuevos paradigmas que orienten el desarrollo de la cultura", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Diseño industrial")},
    { "nombre" : "Escena", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Artes escénicas")},
    { "nombre" : "Creación coreográfica y dramatúrgica", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Artes escénicas")},
    { "nombre" : "Dirección escénica", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Artes escénicas")},
    { "nombre" : "Diseño y concepción de escenografía, iluminación, vestuario y maquillaje para la escena", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Artes escénicas")},
    { "nombre" : "Capaz de enfrentar problemáticas con soluciones apropiadas", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Artes visuales")},
    { "nombre" : "Capaz de sintetizar en imágenes eficaces contenidos propios a los lenguajes artísticos visuales", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Artes visuales")},
    { "nombre" : "Capaz de desarrollar su campo laboral de manera independiente", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Artes visuales")},
    { "nombre" : "Interpretar música de diferentes géneros", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Estudios musicales")},
    { "nombre" : "Intérprete, compositor y arreglista líder en agrupaciones de Jazz y Músicas Populares", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Estudios musicales")},
    { "nombre" : "Dirigir agrupaciones instrumentales y vocales", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Estudios musicales")},
    { "nombre" : "Componer repertorio para Orquesta, Grupos de Cámara y Medios Audiovisuales", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Estudios musicales")},
    { "nombre" : "Grabar y realizar: mezclas en producciones musicales, en difusión de radio y televisión, en sonido en vivo y en eventos de multimedia y en diseños sonoros para la posproducción de audio y video.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Estudios musicales")},
    { "nombre" : "Desarrollar, supervisar y promover con alta calidad, las áreas de bioquímica, hematología, inmunología y microbiología clínica, así como pruebas especiales aplicadas al análisis clínico y técnico", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Bacteoriología")},
    { "nombre" : "Organizar, administrar y dirigir laboratorios de análisis para el apoyo del diagnóstico clínico, sean éstos públicos o privados.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Bacteoriología")},
    { "nombre" : "Contribuir con su desempeño profesional al desarrollo biotecnológico y la investigación clínica.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Bacteoriología")},
    { "nombre" : "Asesorar a nivel científico y tecnológico al sector comercial en el área de la salud", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Bacteoriología")},
    { "nombre" : "Diseñar, implementar y evaluar programas de educación en salud para diferentes grupos o comunidades.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Bacteoriología")},
    { "nombre" : "Coordinación, asesoría, peritaje o evaluación de los proyectos de investigación biológica", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Biología")},
    { "nombre" : "Dirección de parques y reservas naturales", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Biología")},
    { "nombre" : "Emprendimiento de entidades de base tecnológica", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Biología")},
    { "nombre" : "Coordinación ambiental o asesoría científico-técnica a empresas de diversa naturaleza (construcción, hidrocarburos, etc)", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Biología")},
    { "nombre" : "Asesoría científico-técnica a organizaciones no gubernamentales en la realización de proyectos productivos (viveros, granjas integrales, zoo criaderos etc.)", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Biología")},
    { "nombre" : "Periodismo científico, producción de documentales sobre naturaleza, ilustración científica o compilación y edición de textos científicos, entre otros", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Biología")},
    { "nombre" : "Interpretar la información dada sobre un problema particular, para formularlo en lenguaje matemático", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Matemáticas")},
    { "nombre" : "Utilizar conceptos, métodos y técnicas matemáticas avanzadas para realizar los estudios numéricos o cualitativos necesarios y posteriormente permitir la toma de decisiones a partir de los resultados obtenidos", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Matemáticas")},
    { "nombre" : "Comunicar de forma oral y escrita los resultados obtenidos en sus actividades matemáticas para facilitar la divulgación y aplicación de los mismos y fomentar el dialogo disciplinario e interdisciplinario", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Matemáticas")},
    { "nombre" : "Solucionar problemas y manejar la información que se derive de ellos con criterio ético, con honestidad y con responsabilidad social", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Matemáticas")},
    { "nombre" : "Diseñar y proponer modelos matemáticos en áreas científicas que ayuden a la compresión de diversos fenómenos, ya sea de tipo económico, físico, biológico, entre otros", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Matemáticas")},
    { "nombre" : "Identificar, plantear y desarrollar proyectos de investigación básica y aplicada desde la perspectiva de la microbiología", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Microbiología industrial")},
    { "nombre" : "Participar en sistemas de gestión de calidad en diferentes empresas e instituciones relacionadas con el campo de su profesión", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Microbiología industrial")},
    { "nombre" : "Dirigir, administrar y asesorar unidades académicas, de investigación, de innovación y desarrollo tecnológico, y de negocios en las áreas de acción de su profesión", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Microbiología industrial")},
    { "nombre" : "Planeación, ejecución y evaluación de programas de alimentación y nutrición dirigidos a diferentes grupos de población, enmarcados en acciones de promoción de la salud y prevención de la enfermedad", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Nutrición y dietética")},
    { "nombre" : "Pediatría y atención individual a adultos a nivel hospitalario y ambulatorio en la práctica privada", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Nutrición y dietética")},
    { "nombre" : "Planeación, administración e interventoría en servicios de alimentación", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Nutrición y dietética")},
    { "nombre" : "Participación en los procesos de desarrollo de productos alimenticios y rotulado nutricional", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Nutrición y dietética")},
    { "nombre" : "Desarrollo de programas de comunicación y educación en alimentación y nutrición que promuevan estilos de vida saludables", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Nutrición y dietética")},
    { "nombre" : "Consultorías en alimentación y nutrición", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Nutrición y dietética")},
    { "nombre" : "Nutrición en actividad Física como una estrategia de promoción de estilos de vida saludable", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Nutrición y dietética")},
    { "nombre" : "Lideran, gestionan e integran equipos de trabajo competitivos, desarrollando procesos de dirección, planeación y control al interior de cualquier tipo de organización nacional o multinacional del sector público o privado", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Administración de empresas")},
    { "nombre" : "Identifican y aprovechan las oportunidades de negocio, lo que les permite ser líderes emprendedores", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Administración de empresas")},
    { "nombre" : "En las diferentes organizaciones, se desempeñan en áreas de alta gerencia: financiera, emprendimiento, mercadeo, gestión humana, negocios internacionales y responsabilidad social", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Administración de empresas")},
    { "nombre" : "Desarrollan labores de consultoría, docencia e investigación en organizaciones de alto nivel", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Administración de empresas")},
    { "nombre" : "El profesional de esta rama del saber estará en capacidad de ejercer su profesión en todas las actividades relacionadas con el área contable y financiera, así como aquellas relacionadas con su saber profesional en el sector público y privado", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Contaduría pública")},
    { "nombre" : "En el sector financiero, en actividades de dirección, gestión, análisis e investigación del entorno, para la toma de decisiones de inversión", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Economía")},
    { "nombre" : "En actividades de docencia e investigación, así como en la dirección de instituciones de educación superior de Colombia y el exterior", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Economía")},
    { "nombre" : "En el sector público, en el diseño, análisis, evaluación y dirección de políticas económicas", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Economía")},
    { "nombre" : "En el sector privado, en actividades de administración, gestión y toma de decisiones", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Economía")},
    { "nombre" : "En actividades de consultoría, en el análisis y evaluación de problemas económicos del sector público y privado", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Economía")},
    { "nombre" : "En los principales gremios a nivel nacional", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Economía")},
    { "nombre" : "Ramas judicial, ejecutiva y legislativa", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Derecho")},
    { "nombre" : "Órganos de Control", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Derecho")},
    { "nombre" : "En la academia", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Derecho")},
    { "nombre" : "En el sector empresarial y financiero", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Derecho")},
    { "nombre" : "En organismos internacionales", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Derecho")},
    { "nombre" : "En representaciones diplomáticas", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Derecho")},
    { "nombre" : "Como como consultor, asesor, litigante", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Derecho")},
    { "nombre" : "Diseñar estrategias de marketing político", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ciencia política")},
    { "nombre" : "Ejercer como defensor de derechos humanos", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ciencia política")},
    { "nombre" : "Orientar la toma de decisiones sobre el uso de recursos públicos", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ciencia política")},
    { "nombre" : "Analizar las relaciones internacionales en un contexto global.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ciencia política")},
    { "nombre" : "Asesor o tomador de decisiones en relaciones internacionales, sea como funcionario municipal o regional de alto nivel, como elegido a las corporaciones públicas o como consultor del sector público o del privado", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Relaciones internacionales")},
    { "nombre" : "Asesor para el análisis de la situación política internacional en los partidos o movimientos políticos, sociales o comunitarios", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Relaciones internacionales")},
    { "nombre" : "Funcionario del servicio exterior colombiano", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Relaciones internacionales")},
    { "nombre" : "Analista de las relaciones internacionales que se enfoque hacia los procesos propios de las zonas de frontera y de los diferentes escenarios de integración", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Relaciones internacionales")},
    { "nombre" : "Mediador social que promueva la solución pacífica de los conflictos de política internacional en los diferentes ámbitos del quehacer público y privado", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Relaciones internacionales")},
    { "nombre" : "Funcionario de organizaciones internacionales de carácter interestatal", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Relaciones internacionales")},
    { "nombre" : "Tiene la habilidad de comprender en forma rigurosa, y desde su disciplina, las realidades sociales y culturales que decida estudiar. Se destaca por sus habilidades y conocimientos para participar e intervenir -con responsabilidad social- en proyectos, organizaciones no gubernamentales o instituciones públicas", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Antropología")},
    { "nombre" : "Está en capacidad de proponer discusiones dentro de su campo y en el diálogo multidisciplinar, tanto para continuar estudios de posgrado como en espacios de investigación y docencia", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Antropología")},
    { "nombre" : "Campo pedagógico: como profesor de español y literatura en los niveles escolar y universitario", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Estudios literarios")},
    { "nombre" : "Campo editorial: como diseñador, evaluador y coordinador de proyectos editoriales; y como corrector de estilo.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Estudios literarios")},
    { "nombre" : "Campo de la crítica y la investigación: como investigador y crítico literario", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Estudios literarios")},
    { "nombre" : "Campo creativo: como escritor de ensayos, artículos, reseñas y libros", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Estudios literarios")},
    { "nombre" : "Producción y divulgación del conocimiento histórico", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Historia")},
    { "nombre" : "Producción, conservación, comunicación y administración de conocimientos y prácticas que tienen que ver con la sociedad y la cultura", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Historia")},
    { "nombre" : "Enseñanza de la Historia en los niveles de formación básica y universitaria", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Historia")},
    { "nombre" : "Dirección y asesoría de proyectos de recuperación colectiva de la historia documental, oral, iconográfica y simbólica, entre otras, en los ámbitos locales, regionales y nacionales", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Historia")},
    { "nombre" : "Producción de textos escolares y universitarios sobre problemas históricos y problemas generales de las ciencias sociales", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Historia")},
    { "nombre" : "Gestión y administración cultural", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Historia")},
    { "nombre" : "Tiene capacidad de identificar soluciones a problemas que emergen en la interacción social, la incorporación de tecnologías o desequilibrios ambientales y sociales. Es hábil en la gestión de proyectos y administración de recursos o en actividades propias de la función pública", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Sociología")},
    { "nombre" : "Elabora políticas, planes y proyectos de desarrollo social, así como actividades de asesoría relacionadas con esta área de intervención. Como resultado del alto nivel de formación en investigación, nuestros profesionales podrán desempeñarse como consultores y asesores en entidades públicas y privadas encargadas de ejecutar proyectos sociales", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Sociología")},
    { "nombre" : "Planear, proponer y desarrollar soluciones de acceso y uso de información y conocimiento. Trabajar en cualquier tipo de organización, recuperando y gestionando la información y el conocimiento que ella produzca y requiera para su desarrollo", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ciencia de la información bibliotecología")},
    { "nombre" : "Guiar al usuario en la búsqueda y uso del conocimiento universalmente disponible", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ciencia de la información bibliotecología")},
    { "nombre" : "Estudiar el significado y uso de la información en las organizaciones para establecer servicios que apoyen el desarrollo social, económico y tecnológico del país", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ciencia de la información bibliotecología")},
    { "nombre" : "Apoyar la creación y dirección de bibliotecas, centros de información, de documentación y servicios que optimicen la infraestructura informacional del país", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ciencia de la información bibliotecología")},
    { "nombre" : "Diseñar proyectos que enmarquen y den mayor dimensión a los productos y procesos de comunicación (el comunicador como gestor de proyectos en todos los campos).", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Comunicación social")},
    { "nombre" : "Realizar productos comunicacionales reconociendo las técnicas como condicionantes y posibilitadoras de la creatividad y la invención humanas, sustentadas en categorías conceptuales y acompañadas de procesos reflexivos sobre la propia producción.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Comunicación social")},
    { "nombre" : "Articular las acciones de comunicación y los procesos sociales, políticos, económicos y culturales del país, como base del compromiso para la comprensión y la intervención social.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Comunicación social")},
    { "nombre" : "Realizar estudio, análisis, reflexión y producción de la comunicación a partir de núcleos problemáticos que respondan a situaciones en las que intervienen las acciones de comunicación y que por ello sean tareas por descifrar, comprender y proyectar.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Comunicación social")},
    { "nombre" : "Actitud para trabajar en organizaciones públicas o privadas, nacionales o internacionales y, preferiblemente, para ser gestor de sus propias empresas y proyectos de comunicación.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Comunicación social")},
    { "nombre" : "Desarrollar nuevas maneras de hacer comunicación que sean expresión de creatividad humana y que generen la participación para la construcción de nuevos mundos con sentido.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Comunicación social")},
    { "nombre" : "Es competente en las lenguas extranjeras y la lengua materna.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en lenguas modernas")},
    { "nombre" : "Promueve la reflexión crítica sobre el contexto educativo, social, cultural, político y económico del país.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en lenguas modernas")},
    { "nombre" : "Utiliza e interpreta de manera crítica las teorías lingüísticas de aprendizaje y enseñanza de lengua extranjera, así como de los adelantos técnicos y tecnológicos en el campo.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en lenguas modernas")},
    { "nombre" : "Lidera y promociona cambios en el ámbito del lenguaje y de la enseñanza y el aprendizaje de lenguas modernas.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en lenguas modernas")},
    { "nombre" : "Leer, analizar y comprender los diferentes escenarios educativos para las infancias.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en pedagogía infantil")},
    { "nombre" : "Asumir una mirada analítica, reflexiva, crítica y propositiva frente a las realidades educativas en las que participa.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en pedagogía infantil")},
    { "nombre" : "Comprender las realidades de las infancias y ser generadores de transformaciones sociales, culturales y educativas.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en pedagogía infantil")},
    { "nombre" : "Reflexionar de manera permanente sobre las infancias, sobre las condiciones en las que se es niño y niña en el contexto nacional e internacional y las posibilidades educativas que tienen, necesitan y merecen.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en pedagogía infantil")},
    { "nombre" : "Formular alternativas de acción considerando los aspectos pedagógicos, socioculturales, políticos y éticos que los determinan y generar transformaciones en dichos contextos con miras a la cualificación de las posibilidades educativas para las infancias.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en pedagogía infantil")},
    { "nombre" : "Interpretar la situación nacional de la salud, su organización, planes, programas y estrategias", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Enfermería")},
    { "nombre" : "Gerenciar el cuidado de enfermería", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Enfermería")},
    { "nombre" : "Realizar investigación aplicada al cuidado de enfermería", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Enfermería")},
    { "nombre" : "Capacidad para diseñar y desarrollar procesos de investigación y de gestión ambiental.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ecología")},
    { "nombre" : "Visión integrativa de los sistemas ecológicos, que incorpora aspectos de ciencias biológicas, ciencias de la tierra, ciencias sociales, ciencias políticas y ciencias económicas.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ecología")},
    { "nombre" : "Manejo de técnicas de análisis y síntesis.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ecología")},
    { "nombre" : "Conocimiento espacio-temporal de la realidad ecosistémica y de la problemática ambiental colombiana.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ecología")},
    { "nombre" : "Sensibilidad social y ambiental, con buena capacidad de observación directa y de contextualización.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ecología")},
    { "nombre" : "Habilidad para aplicar los principios de la ciencia y la tecnología de manera que le permitan trabajar en la concepción, diseño, construcción, operación y mantenimiento de obras civiles.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería civil")},
    { "nombre" : "Capacidad de trabajo en equipo y de interactuar con profesionales de diferentes disciplinas.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería civil")},
    { "nombre" : "Habilidad para plantear soluciones pertinentes a los problemas de la Ingeniería Civil aprovechando las herramientas y recursos a su alcance.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería civil")},
    { "nombre" : "Habilidades para transmitir conocimientos, exponer sus ideas y comunicar resultados dentro de su ámbito de desempeño.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería civil")},
    { "nombre" : "Capacidad de análisis para plantear alternativas viables frente a necesidades detectadas.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería civil")},
    { "nombre" : "Habilidad para aplicar conocimientos matemáticos, científicos y de las ciencias de la ingeniería.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería electrónica")},
    { "nombre" : "Habilidad para diseñar, realizar y conducir experimentos para analizar e interpretar datos, así como para formular explicaciones y desarrollar investigaciones.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería electrónica")},
    { "nombre" : "Habilidad para identificar, formular y solucionar problemas desde la ingeniería electrónica.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería electrónica")},
    { "nombre" : "Habilidad para usar técnicas, metodologías y herramientas modernas para la práctica de ingeniería electrónica.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería electrónica")},
    { "nombre" : "Habilidad para analizar, modelar, diseñar y comprobar un sistema para suplir necesidades.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería electrónica")},
    { "nombre" : "Habilidad para dimensionar, evaluar y determinar la viabilidad y factibilidad de sus proyectos.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería electrónica")},
    { "nombre" : "Habilidad para comunicarse efectivamente.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería electrónica")},
    { "nombre" : "Habilidad para liderar, conformar y trabajar en equipos multidisciplinarios.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería electrónica")},
    { "nombre" : "Productividad y Optimización", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería industrial")},
    { "nombre" : "Sentido Humano", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería industrial")},
    { "nombre" : "Sensibilidad Social", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería industrial")},
    { "nombre" : "Espíritu Empresarial", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería industrial")},
    { "nombre" : "Pensamiento estructurado", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería industrial")},
    { "nombre" : "Liderazgo y Solución de Problemas", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería industrial")},
    { "nombre" : "Apertura al Cambio", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería industrial")},
    { "nombre" : "Adaptabilidad", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería industrial")},
    { "nombre" : "Comunicación", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería industrial")},
    { "nombre" : "Manejo de la Información", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería industrial")},
    { "nombre" : "Sistemas de Información y Gestión del Conocimiento", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería de sistemas")},
    { "nombre" : "Arquitecturas y Construcción de Software", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería de sistemas")},
    { "nombre" : "Comunicaciones, Redes y Dispositivos Móviles", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería de sistemas")},
    { "nombre" : "Computación Gráfica y Realidad Virtual", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería de sistemas")},
    { "nombre" : "Sistemas Inteligentes y Robótica", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Ingeniería de sistemas")},
    { "nombre" : "Odontología Clínica", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Odontología")},
    { "nombre" : "Odontología Administrativa", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Odontología")},
    { "nombre" : "Odontología Investigativa y Docente", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Odontología")},
    { "nombre" : "Odontología Comunitaria", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Odontología")},
    { "nombre" : "Jurídica", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Psicología")},
    { "nombre" : "Neuropsicología.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Psicología")},
    { "nombre" : "Educativa.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Psicología")},
    { "nombre" : "Organizacional.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Psicología")},
    { "nombre" : "Clínica.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Psicología")},
    { "nombre" : "Social.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Psicología")},

    { "nombre" : "De interpretación.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en filosofía")},
    { "nombre" : "Filosofía del dolor.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en filosofía")},
    { "nombre" : "Núcleo de investigación en estética", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en filosofía")},
    { "nombre" : "Pensamiento crítico y subjetividad", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en filosofía")},
    { "nombre" : "Biblioteca virtual del pensamiento colombiano", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en filosofía")},
    { "nombre" : "Cosmópolis", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en filosofía")},

    { "nombre" : "Teología", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en ciencias religiosas")},
    { "nombre" : "Ciencias de la religión", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en ciencias religiosas")},
    { "nombre" : "Pedagogía", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en ciencias religiosas")},
    { "nombre" : "Investigación institucional", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en ciencias religiosas")},

    { "nombre" : "De interpretación.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Filosofía")},
    { "nombre" : "Filosofía del dolor.", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Filosofía")},
    { "nombre" : "Núcleo de investigación en estética", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Filosofía")},
    { "nombre" : "Pensamiento crítico y subjetividad", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Filosofía")},
    { "nombre" : "Biblioteca virtual del pensamiento colombiano", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Filosofía")},
    { "nombre" : "Cosmópolis", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Filosofía")},

    { "nombre" : "Área bíblica", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en teología")},
    { "nombre" : "Área sistemática", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en teología")},
    { "nombre" : "Área de acción humana", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Lic. en teología")},

    { "nombre" : "Población y salud", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Medicina")},
    { "nombre" : "Cerebro, mente y comportamiento", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Medicina")},
    { "nombre" : "Defensa, inmunidad e infección", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Medicina")},
    { "nombre" : "Salud maternoinfantil", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Medicina")},
    { "nombre" : "Cuidado perioperatorio y quirúrgico", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Medicina")},

    { "nombre" : "Área bíblica", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Teología")},
    { "nombre" : "Área sistemática", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Teología")},
    { "nombre" : "Área de acción humana", "tipo" : "PROFESIONALES", "carrera" : DBRef("carrera","Teología")}
]);

db.cualidad.insert([
    { "nombre" : "Soy bueno explicando las cosas a los demás", "tipo" : "PROFESOR"},
    { "nombre" : "Soy una persona de la gente y disfruto de trabajar con diferentes tipos de personas", "tipo" : "PROFESOR"},
    { "nombre" : "Soy entusiasta", "tipo" : "PROFESOR"},
    { "nombre" : "Administro bien mí tiempo cuando estoy en clase", "tipo" : "PROFESOR"},
    { "nombre" : "Incentivo el trabajo en equipo y de forma individual en mis clases", "tipo" : "PROFESOR"},
    { "nombre" : "Mantengo la calma cuando estoy bajo presión", "tipo" : "PROFESOR"},
    { "nombre" : "Soy paciente", "tipo" : "PROFESOR"},
    { "nombre" : "Tengo buen sentido del humor", "tipo" : "PROFESOR"},
    { "nombre" : "Soy imparcial", "tipo" : "PROFESOR"},
    { "nombre" : "Disfruto de los desafíos", "tipo" : "PROFESOR"},
    { "nombre" : "Soy adaptable", "tipo" : "PROFESOR"},
    { "nombre" : "Creo nuevas e interesantes maneras para que mis estudiantes aprendan", "tipo" : "PROFESOR"},
    { "nombre" : "Me actualizo frecuentemente", "tipo" : "PROFESOR"},
    { "nombre" : "Soy claro, conciso y voy al grano cuando explico", "tipo" : "PROFESOR"},
    { "nombre" : "Soy consejero", "tipo" : "PROFESOR"},
    { "nombre" : "Doy buen ejemplo con mis acciones", "tipo" : "PROFESOR"},
    { "nombre" : "Tengo habilidades de liderazgo", "tipo" : "PROFESOR"}
]);

db.insignia.insert([
    {
        "_id":"IDEA1",
        "nombre":"Primer idea",
        "descripcion":"Por publicar tu primera idea en Know&Share"
    },{
        "_id":"IDEA10",
        "nombre":"10 ideas publicadas",
        "descripcion":"Por publicar 10 ideas en Know&Share"
    },{
        "_id":"IDEA50",
        "nombre":"50 ideas publicadas",
        "descripcion":"Ya todo un usuario experimentado en uso de ideas"
    },{
        "_id":"TOP3",
        "nombre":"En el top",
        "descripcion":"Consiguió llegar a lo alto de su carrera"
    },{
        "_id":"AVALAR",
        "nombre":"Primer aval dado",
        "descripcion":"Por avalar habilidad/cualidad de un usuario por primera vez"
    },{
        "_id":"AVALADO_PROFESOR",
        "nombre":"Habilidad reconocida",
        "descripcion":"¡Un profesor ha reconocido una de tus habilidades!"
    },{
        "_id":"AVALADO_OTRO",
        "nombre":"Habilidad/Cualidad avalada",
        "descripcion":"Te han reconocido una de tus cualidades/habilidades"
    },{
        "_id":"AMIGOS1",
        "nombre":"Primer amigo en tu red",
        "descripcion":"Por tener tu primera amistad dentro de tu red"
    },{
        "_id":"AMIGOS10",
        "nombre":"10 amigos en tu red",
        "descripcion":"Ya vas fortaleciendo tu red de conocimiento"
    },{
        "_id":"AMIGOS50",
        "nombre":"50 amigos en tu red",
        "descripcion":"Posees una red sólida para crecer profesionalmente"
    },{
        "_id":"SEGUIDORES1",
        "nombre":"Tu primer seguidor",
        "descripcion":"Te estás conviertiendo popular"
    },{
        "_id":"SEGUIDORES10",
        "nombre":"10 seguidores",
        "descripcion":"¡Tu popularidad va en ascenso!"
    },{
        "_id":"SEGUIDORES50",
        "nombre":"50 seguidores",
        "descripcion":"Te has convertido muy popular dentro de tu red"
    },{
        "_id":"IDEA_COMPARTIR",
        "nombre":"Compartir una idea",
        "descripcion":"Por compartir conocimiento a toda tu red"
    },{
        "_id":"ADD_TG",
        "nombre":"Soy director de grado",
        "descripcion":"Diste a conocer trabajos de grado que has dirigido"
    },{
        "_id":"ADD_FA",
        "nombre":"Formación académica",
        "descripcion":"Diste a conocer tu pasado académico"
    },{
        "_id":"ANTIGUEDAD1",
        "nombre":"Un mes de antigüedad",
        "descripcion":"Cumplir un mes de registro en Know&Share"
    },{
        "_id":"ANTIGUEDAD6",
        "nombre":"6 meses de antigüedad",
        "descripcion":"Medio año entre la comunidad de Know&Share"
    },{
        "_id":"ANTIGUEDAD12",
        "nombre":"Un año de antigüedad",
        "descripcion":"Tu primer aniversario en Know&Share. ¡Felicidades!"
    }
]);

db.system_preferences.insert({"_id":"system","rules":1});

db.usuario.createIndex( { 'nombre': 'text','apellido':'text' },{ default_language: 'spanish' } );
db.habilidad.createIndex({'nombre':'text'},{ default_language: 'spanish' });

db.usuario.insertOne({"username" : "admin", "password" : "ff40ef35ccb3704da3b46f33e6a1c533", "correo" : "admin@mail.com", "tipo" : "ADMIN" });