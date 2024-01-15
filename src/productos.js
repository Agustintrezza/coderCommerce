const productos = [
  {
    id: 1,
    nombre: "Batería Gretsch Renown",
    imagen:
      "https://res.cloudinary.com/djpifu0cl/image/upload/v1703176269/Disen%CC%83o_sin_ti%CC%81tulo_20_jh2ecn.png",
    descripcion:
      "Una batería americana increíble. Aros macizos, 12 capas de maple. El sonido Jazz americano por excelencia.",
    breveDescripcion: "Un instrumento único, con la calidad de Gretsch.",
    precio: 2159,
    stock: 50,
    categoria: 'baterias',
    informacion: [
      "3 Cuerpos Maple 12x8/14x14/18x14",
      "7 capas de maple",
      "Moderna y versátil.",
      "Nacarada Blanca",
      "Sonidos fuertes y firmes con estilo propio.",
    ],
    slug: "bateria-gretsch-renown",
    destacado: "Su madera de caoba la hace un producto versátil y popular.",
    video: "https://www.youtube.com/embed/KboDs-3pPY4?si=iTFJ3Sw-G_Hodaum"
  },
  {
    id: 2,
    nombre: "Gibson Les Paul Standard",
    imagen:
      "https://res.cloudinary.com/djpifu0cl/image/upload/v1703176364/Disen%CC%83o_sin_ti%CC%81tulo_24_smz6vx.png",
    descripcion:
      "Una guitarra eléctrica icónica conocida por su calidad y versatilidad. Perfecta para diversos estilos musicales.",
    breveDescripcion:
      "Experimenta el sonido legendario de Gibson con la Les Paul Standard.",
    precio: 2499,
    stock: 30,
    categoria: 'guitarras',
    informacion: [
      "Cuerpo de caoba con tapa de arce.",
      "Pastillas humbucker Burstbucker Pro.",
      "Mástil de caoba con perfil SlimTaper.",
      "Diapasón de palisandro con incrustaciones trapezoidales.",
      "Puente Tune-O-Matic y cordal Stopbar.",
    ],
    slug: "gibson-les-paul-standard",
    destacado:
      "La Les Paul Standard es conocida por su construcción sólida y tonos cálidos.",
    video: "https://www.youtube.com/embed/38knKJNjqTc?si=GLv3QJeWnDJ4Uobn"
  },
  {
    id: 3,
    nombre: "Teclado MIDI Korg de 2 Octavas",
    imagen:
      "https://res.cloudinary.com/djpifu0cl/image/upload/v1703176254/Disen%CC%83o_sin_ti%CC%81tulo_13_yhztlj.png",
    descripcion:
      "Explora tu creatividad musical con el teclado MIDI Korg de 2 octavas. Diseñado para músicos y productores, ofrece una interfaz intuitiva y funciones versátiles para tu estudio o presentaciones en vivo.",
    breveDescripcion:
      "Un teclado compacto con potentes capacidades MIDI para expresar tu música.",
    precio: 199,
    stock: 25,
    categoria: 'audio',
    informacion: [
      "Teclado compacto de 25 teclas.",
      "Conexión USB.",
      "Perillas y botones asignables para controlar parámetros de software.",
      "Ruedas de pitch bend y modulación.",
      "Compatible con una amplia variedad de software musical.",
    ],
    slug: "teclado-midi-korg-2-octavas",
    destacado:
      "La herramienta perfecta para músicos que buscan flexibilidad y control en sus producciones musicales.",
    video: "https://www.youtube.com/embed/W1h1VMVk3pY?si=BCL5TnDBudhzh3fT"
  },
  {
    id: 4,
    nombre: "Micrófono Shure SM57",
    imagen:
      "https://res.cloudinary.com/djpifu0cl/image/upload/v1703176266/Disen%CC%83o_sin_ti%CC%81tulo_18_wr2gqi.png",
    descripcion:
      "Captura cada detalle de tu sonido. Reconocido por su versatilidad, este micrófono dinámico.",
    breveDescripcion:
      "Un micrófono legendario para músicos y productores exigentes.",
    precio: 129,
    stock: 25,
    categoria: 'audio',
    informacion: [
      "Micrófono dinámico con patrón polar cardioide.",
      "Ideal para grabar instrumentos musicales y voces.",
      "Construcción robusta y duradera para un uso intensivo.",
      "Respuesta de frecuencia adaptada.",
      "Ampliamente utilizado.",
    ],
    slug: "microfono-shure-sm57",
    destacado: "El Shure SM57 es una leyenda en el mundo del audio.",
    video: "https://www.youtube.com/embed/AxzGpmWddhI?si=re36My_AJpuC-N5Q"
  },
  {
    id: 5,
    nombre: "Saxofón Tenor Yamaha YTS-62",
    imagen:
      "https://res.cloudinary.com/djpifu0cl/image/upload/v1703176951/Disen%CC%83o_sin_ti%CC%81tulo_25_qfdbx6.png",
    descripcion:
      "Un saxofón tenor profesional de alta calidad, reconocido por su tono cálido y su excelente respuesta.",
    breveDescripcion:
      "Explora nuevos horizontes musicales con el saxofón tenor Yamaha YTS-62.",
    precio: 1899,
    stock: 25,
    categoria: 'metales',
    informacion: [
      "Cuerpo de latón amarillo lacado.",
      "Llaves de estilo vintage con una acción suave y precisa.",
      "Campana grabada a mano.",
      "Boquilla Yamaha 4C incluida.",
      "Estuche rígido y accesorios adicionales.",
    ],
    slug: "saxofon-tenor-yamaha-yts-62",
    destacado: "El YTS-62 es una elección popular entre músicos profesionales.",
    video: "https://www.youtube.com/embed/cGjYy_9UCqI?si=FFXgi6Il6xvcC9TZ"
  },
  {
    id: 6,
    nombre: "Pedal Vintage Overdrive JOYO",
    imagen:
      "https://res.cloudinary.com/djpifu0cl/image/upload/v1703176260/Disen%CC%83o_sin_ti%CC%81tulo_14_s9k9uj.png",
    descripcion:
      "Experimenta tonos cálidos y saturados con el pedal vintage overdrive JOYO. Inspirado en los clásicos, este pedal ofrece un sonido de overdrive auténtico.",
    breveDescripcion:
      "Añade un toque retro a tu sonido con el pedal de overdrive JOYO.",
    precio: 89,
    stock: 40,
    categoria: 'accesorios',
    informacion: [
      "Circuito de overdrive analógico.",
      "Controles de nivel, tono y ganancia.",
      "Construcción resistente con diseño vintage.",
      "True Bypass.",
      "Ideal para blues, rock y estilos musicales vintage.",
    ],
    slug: "pedal-overdrive-joyo",
    destacado:
      "El pedal vintage overdrive JOYO te transporta a la era dorada del tono.",
    video: "https://www.youtube.com/embed/0ydEZQbF4Fs?si=oKzg8ise-90BgADX"
  },
  {
    id: 7,
    nombre: "Batería Yamaha Maple Custom",
    imagen:
      "https://res.cloudinary.com/djpifu0cl/image/upload/v1703176162/Disen%CC%83o_sin_ti%CC%81tulo_11_aqvgsw.png",
    descripcion:
      "Experimenta la potencia y la versatilidad de la batería Yamaha Maple Custom. Construida para satisfacer las demandas de los bateristas profesionales.",
    breveDescripcion:
      "Una batería que redefine el estándar de calidad y sonido en la percusión.",
    precio: 2499,
    stock: 15,
    categoria: 'baterias',
    informacion: [
      "Construcción de arce de alta calidad.",
      "Configuración estándar de 5 cascos.",
      "Herrajes cromados de alta resistencia.",
      "Incluye soportes y abrazaderas.",
      "Acabado personalizado.",
    ],
    slug: "bateria-yamaha-maple-custom",
    destacado:
      "La elección perfecta para los bateristas que buscan un instrumento que ofrezca calidad de sonido excepcional.",
    video: "https://www.youtube.com/embed/12y-aUo6BpY?si=x8Y7ZvHZGh0T6h3j"
  },
  {
    id: 8,
    nombre: "Palos de Batería Vic Firth 5A",
    imagen:
      "https://res.cloudinary.com/djpifu0cl/image/upload/v1703176264/Disen%CC%83o_sin_ti%CC%81tulo_17_qcj2ih.png",
    descripcion:
      "Experimenta una calidad excepcional con los palos de batería Vic Firth 5A. Diseñados para satisfacer las demandas de los bateristas profesionales.",
    breveDescripcion:
      "La elección preferida de músicos exigentes en todo el mundo.",
    precio: 15,
    stock: 100,
    categoria: 'accesorios',
    informacion: [
      "Modelo estándar 5A.",
      "Hechos de madera de alta calidad.",
      "Punta de madera ovalada.",
      "Diseño cómodo.",
      "Utilizados por bateristas profesionales.",
    ],
    slug: "palos-vic-firth-5a",
    destacado:
      "Los palos de batería Vic Firth 5A son conocidos por su calidad excepcional.",
    video: "https://www.youtube.com/embed/jHYM0HlapcA?si=Rfers2mL7tBZiOR8"
  },
  {
    id: 9,
    nombre: "Bajo Eléctrico Fender American Performer Jazz Bass",
    imagen: "https://res.cloudinary.com/djpifu0cl/image/upload/v1705284928/bajofender_fqr5bj.webp",
    descripcion: "El Bajo Eléctrico Fender American Performer Jazz Bass ofrece un sonido clásico y versátil con la calidad distintiva de Fender.",
    breveDescripcion: "Perfecto para músicos que buscan excelencia y versatilidad.",
    precio: 1950,
    stock: 5,
    categoria: 'bajos',
    informacion: [
        "Cuerdas: 4",
        "Material del Cuerpo: Aliso",
        "Material del Diapasón: Arce o Palisandro (según disponibilidad)",
        "Pastillas: Dos pastillas de bobina simple (single-coil)",
        "Puente: Vintage-Style",
        "Controles: Volumen 1, Volumen 2, Tono"
    ],
    slug: "bajo-fender-american-performer-jazz-bass",
    destacado: "Sonido potente con el toque clásico Jazz Bass. Ideal para cualquier estilo musical.",
    video: "https://www.youtube.com/embed/Zw7wMhuNrzw?si=rmQjST-Q-L-SWEMi"
},
{
  id: 10,
  nombre: "Guitarra Clásica Criolla Cuenca 40R Tapa Sólida Española",
  imagen: "https://res.cloudinary.com/djpifu0cl/image/upload/v1705285146/guitarraespan%CC%83ola_xbj7y2.webp",
  descripcion: "La Guitarra Clásica Criolla Cuenca 40R con Tapa Sólida Española ofrece un sonido rico y cálido, perfecta para los amantes de la música clásica y tradicional.",
  breveDescripcion: "Experiencia sonora excepcional con la artesanía española de Cuenca.",
  precio: 1250,
  stock: 10,
  categoria: 'guitarras',
  informacion: [
      "Tapa: Sólida Española",
      "Cuerpo: Tipo Cuenca",
      "Cuerdas: Nylon",
      "Cejuela y selleta: Hueso",
      "Diapasón: Palosanto",
      "Mástil: Cedro",
      "Acabado: Brillante"
  ],
  slug: "guitarra-cuenca-40r-tapa-solida-espanola",
  destacado: "Sonido auténtico y artesanía de alta calidad para músicos exigentes.",
  video: "https://www.youtube.com/watch?v=-qIqNvnV6EA&ab_channel=EugenioMonesma-Documentales"
},
{
  id: 11,
  nombre: "Korg Kaossilator Pro",
  imagen: "https://res.cloudinary.com/djpifu0cl/image/upload/v1705285478/kaosscilator_kmwclf.webp",
  descripcion: "El Korg Kaossilator Pro es un sintetizador de bucle dinámico y controlador de efectos que permite crear música de manera intuitiva con solo tocar y deslizar tus dedos sobre su superficie táctil.",
  breveDescripcion: "Innovación musical en la punta de tus dedos con el Kaossilator Pro de Korg.",
  precio: 980,
  stock: 10,
  categoria: 'audio',
  informacion: [
      "Superficie táctil iluminada para control intuitivo",
      "Más de 200 sonidos incorporados",
      "Loop Recorder con capacidad para hasta 4 medidas",
      "Entrada de micrófono para modular voces",
      "Conexión USB para integración con software de grabación"
  ],
  slug: "korg-kaossilator-pro",
  destacado: "Explora tu creatividad musical de forma única con este versátil sintetizador de bucle.",
  video: "https://www.youtube.com/embed/d_k8NJqFbrM?si=IdF0dN83uthU2S5z"
},
{
  id: 12,
  nombre: "Flauta Traversa Yamaha",
  imagen: "https://res.cloudinary.com/djpifu0cl/image/upload/v1705285615/flauta-traversa_raw2g7.webp",
  descripcion: "La Flauta Traversa Yamaha ofrece un tono claro y equilibrado, convirtiéndola en la elección perfecta para músicos de todos los niveles, desde principiantes hasta profesionales.",
  breveDescripcion: "Calidad y tradición japonesa en cada nota con la Flauta Traversa Yamaha.",
  precio: 1400,
  stock: 15,
  categoria: 'metales',
  informacion: [
      "Cabeza, cuerpo y pie de niquel plateado",
      "Llaves estilo francés",
      "Mecanismo de Mi separado",
      "Afinación precisa y respuesta rápida",
      "Estuche incluido"
  ],
  slug: "flauta-traversa-yamaha",
  destacado: "Experimenta la excelencia tonal y la artesanía detallada de Yamaha en cada interpretación.",
  video: "https://www.youtube.com/embed/H1SDoUdgLko?si=BNLccmMDVV4n9YGM"
}
];

export default productos;
