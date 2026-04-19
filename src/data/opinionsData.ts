import { Gavel, FileText, Scale, BookOpen, ShieldCheck, Landmark, Heart, HeartHandshake, Home, MessageSquare, Handshake, FileCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ContentBlock {
  type: "paragraph" | "heading" | "list" | "quote" | "law-article";
  content: string | string[];
  title?: string;
}

export interface OpinionArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  icon: LucideIcon;
  readTime: string;
  sections: ContentBlock[];
}

export const opinionsData: OpinionArticle[] = [
  {
    id: "1",
    slug: "dano-malicioso-parte-i-y-ii",
    title: "Daño Malicioso (Parte I y II)",
    excerpt: "Análisis sobre el daño causado voluntaria o intencionalmente en el patrimonio del acreedor y su tipificación en las leyes venezolanas.",
    date: "06 Nov, 2022",
    author: "Abg. Angel Perez",
    category: "Derecho Civil",
    icon: Gavel,
    readTime: "12 min",
    sections: [
      {
        type: "paragraph",
        content: "EL DAÑO MALICIOSO, es el causado voluntaria o intencionalmente que produce una disminución en el patrimonio del acreedor. Este daño aparece tipificado en diferentes leyes y reglamentos venezolanos."
      },
      {
        type: "heading",
        content: "Regulación en Arrendamientos de Vivienda",
        title: "I. Definición y Alcance"
      },
      {
        type: "paragraph",
        content: "El Reglamento de la Ley para la Regularización y Control de los Arrendamientos de Vivienda define esta figura de forma precisa:"
      },
      {
        type: "law-article",
        title: "Artículo 71",
        content: "Los DAÑOS MALICIOSOS son aquellos en que el arrendatario incurriere voluntariamente o intencionalmente en el deterioro o destrucción de las estructuras o instalaciones del inmueble arrendado."
      },
      {
        type: "law-article",
        title: "Artículo 72",
        content: [
          "1. Deterioro de las estructuras físicas que conforman el inmueble.",
          "2. Falta de mantenimiento en las Instalaciones internas que conforman los servicios básicos (energía eléctrica, aguas blancas, servidas y gas).",
          "3. Daños causados a los muebles que se encuentren en el inmueble arrendado."
        ]
      },
      {
        type: "quote",
        content: "No se consideran DAÑOS MALICIOSOS aquellos productos de la vetustez del inmueble o por desastres naturales."
      },
      {
        type: "law-article",
        title: "Artículo 73",
        content: "El arrendador que alegue DAÑOS MALICIOSOS deberá demostrar mediante pruebas contundente que fueron causados por el arrendatario de forma intencional."
      },
      {
        type: "heading",
        content: "Uso Comercial e Inmobiliario",
        title: "II. Otras Normativas"
      },
      {
        type: "paragraph",
        content: "La Ley de Regulación del Arrendamiento Inmobiliario para el Uso Comercial (Art. 9) establece que la parte que causare un daño malicioso estará obligada a efectuar las reparaciones. Asimismo, permite acudir a la vía jurisdiccional o administrativa."
      },
      {
        type: "heading",
        content: "Actividad Aseguradora",
        title: "III. El Daño Malicioso en Seguros"
      },
      {
        type: "paragraph",
        content: "En el ámbito de seguros, el daño malicioso suele ser una causal de exclusión de responsabilidad, salvo pacto en contrario."
      },
      {
        type: "quote",
        content: "DAÑOS MALICIOSOS (Definición Providencia N°136): Actos ejecutados de forma aislada por persona o personas que intencional y directamente causen daños a los bienes asegurados, ocurran o no durante una alteración del orden público."
      },
      {
        type: "paragraph",
        content: "Como se aprecia, constituye una causal de exclusión de responsabilidad contractual cuando se prueba que el daño fue ocasionado voluntaria o intencionalmente por el reclamante."
      },
      {
        type: "heading",
        content: "El desafío de la Intencionalidad",
        title: "IV. Prueba Diabólica"
      },
      {
        type: "paragraph",
        content: "El legislador exige que el arrendador demuestre fehacientemente la intencionalidad (Art. 73 Ley de Arrendamiento de Vivienda). Esto es lo que se conoce como una 'prueba diabólica': demostrar la intención interna es casi imposible, a diferencia de demostrar el daño físico material."
      },
      {
        type: "paragraph",
        content: "Existe una dicotomía con el Artículo 40 de la misma Ley, que delega en las autoridades competentes la identificación de si los daños fueron causados maliciosamente."
      }
    ]
  },
  {
    id: "2",
    slug: "cesion-de-derechos-sucesorales-parte-i-y-ii",
    title: "Cesión de Derechos Sucesorales (Parte I y II)",
    excerpt: "Análisis técnico sobre la transmisión de la cuota hereditaria, la necesidad del precio como elemento esencial y la distinción entre valor y precio según la jurisprudencia del TSJ.",
    date: "04 Abr, 2024",
    author: "Abg. Angel Perez",
    category: "Sucesiones",
    icon: Landmark,
    readTime: "10 min",
    sections: [
      {
        type: "paragraph",
        content: "La cesión del derecho hereditario es un contrato en virtud del cual un sujeto (heredero) transmite a otro la titularidad de su cuota hereditaria que le ha sido deferida en virtud de testamento o de la ley."
      },
      {
        type: "heading",
        content: "Fundamentación en el Código Civil",
        title: "I. Base Legal"
      },
      {
        type: "law-article",
        title: "Artículo 765",
        content: "Cada comunero tiene la plena propiedad de su cuota y de los provechos o frutos correspondientes. Puede enajenar, ceder o hipotecar libremente esta parte, y aun sustituir otras personas en el goce de ellas…"
      },
      {
        type: "law-article",
        title: "Artículo 1.549",
        content: "La venta o cesión de crédito, de un derecho o de una acción, son perfectas y el derecho cedido se trasmite al cesionario, desde que haya convenido sobre el crédito o derecho cedido y el precio, aunque no se haya hecho la tradición."
      },
      {
        type: "heading",
        content: "Requisitos de Validez",
        title: "II. Doctrina y Formalidad"
      },
      {
        type: "quote",
        content: "Para su validez es necesario que la sucesión esté abierta. La cesión comprende todos los bienes corporales, todos los créditos y todas las deudas, más no la calidad de heredero."
      },
      {
        type: "paragraph",
        content: "Como señala Enrique Andueza Acuña, una vez abierta la sucesión, los herederos pueden enajenarla, cederla o donarla a extraños o coherederos, respetando siempre los límites de la ley."
      },
      {
        type: "heading",
        content: "El Precio como Elemento Esencial",
        title: "III. Análisis Jurisprudencial"
      },
      {
        type: "paragraph",
        content: "La falta de estipulación del precio en la cesión puede acarrear la inexistencia del contrato. La antigua Corte Suprema de Justicia (1987) sostuvo:"
      },
      {
        type: "quote",
        content: "El precio de la cesión constituye un elemento esencial para la existencia del acto jurídico... su falta entraña la inexistencia del contrato según el artículo 1.141 del Código Civil."
      },
      {
        type: "paragraph",
        content: "Es vital distinguir entre dos conceptos que a menudo se confunden: el **valor** del crédito y el **precio** de la cesión."
      },
      {
        type: "quote",
        content: "Sala de Casación Civil (1998): 'Si bien hubo acuerdo sobre el crédito cedido y su valor, se omitió indicar el precio... una cosa es el valor nominal del crédito y otra es el precio de la cesión, el cual incluso puede ser mayor o menor que el valor mismo'."
      },
      {
        type: "heading",
        content: "Comentario de Experto",
        title: "IV. Perspectiva Académica"
      },
      {
        type: "paragraph",
        content: "El Dr. Óscar Romero Acevedo, juez jubilado y autor jurídico, nos ofrece una precisión pedagógica fundamental sobre la naturaleza de este contrato:"
      },
      {
        type: "quote",
        content: "Si se especifican los bienes de la herencia no se trata de una cesión sino de una venta de un conjunto de bienes. En Venezuela, el cedente sólo está obligado a garantizar su cualidad de heredero."
      },
      {
        type: "paragraph",
        content: "Finalmente, Romero Acevedo nos recuerda que por aplicación de las normas de comunidad, toda cesión o venta de la herencia debe ofertarse preferentemente a los demás coherederos."
      }
    ]
  },
  {
    id: "3",
    slug: "apreciacion-y-valoracion-de-la-prueba",
    title: "Apreciación y Valoración de la Prueba",
    excerpt: "Análisis de la Sentencia N° 00285 de la Sala Constitucional sobre los dos momentos principales de la prueba judicial: la apreciación y la valoración.",
    date: "09 Dic, 2024",
    author: "Abg. Angel Perez",
    category: "Derecho Procesal",
    icon: Scale,
    readTime: "8 min",
    sections: [
      {
        type: "paragraph",
        content: "La Sala Constitucional del Tribunal Supremo de Justicia, en Sentencia N° 00285 (Expediente N° 16-1210) del 18 de octubre de 2024, con ponencia de la Magistrada Lourdes Benicia Suárez Anderson, ha fijado un criterio fundamental sobre la actividad probatoria del juez."
      },
      {
        type: "heading",
        content: "Dos Momentos, Dos Naturalezas",
        title: "I. Apreciación vs. Valoración"
      },
      {
        type: "paragraph",
        content: "La Sala distingue con claridad que la prueba judicial transita por dos etapas diferenciadas que no deben confundirse:"
      },
      {
        type: "quote",
        content: "La apreciación es la verificación de validez del medio de aportación probatoria (examen de legalidad y legitimidad); mientras que la valoración es la aprehensión de los elementos de convicción relevantes, un ejercicio lógico y axiológico ponderativo del mérito de la prueba."
      },
      {
        type: "paragraph",
        content: "Esta distinción es técnica y tiene efectos procesales directos: la **apreciación** es objetiva y susceptible de control vertical mediante recursos, mientras que la **valoración** corresponde al arbitrio e interna convicción del juez."
      },
      {
        type: "heading",
        content: "Autonomía e Independencia Judicial",
        title: "II. Las Reglas de la Sana Crítica"
      },
      {
        type: "paragraph",
        content: "El fallo subraya que los jueces gozan de un amplio margen para valorar el Derecho aplicable y los hechos, siempre ajustándose a la Constitución."
      },
      {
        type: "law-article",
        title: "Criterio de la Sala",
        content: "La valoración probatoria forma parte de la autonomía e independencia de la que gozan los jueces al decidir... disponen de un amplio margen de valoración del Derecho aplicable a cada caso, por lo cual pueden interpretarlo y ajustarlo a su entendimiento."
      },
      {
        type: "paragraph",
        content: "Es deber del juez examinar todas las probanzas, incluso aquellas que a su juicio no aporten elementos de convicción, siguiendo las reglas de la sana crítica."
      },
      {
        type: "heading",
        content: "Límites de la Tutela Constitucional",
        title: "III. Disconformidad vs. Violación"
      },
      {
        type: "paragraph",
        content: "Finalmente, la Sala desestima las pretensiones que se basan en una 'mera disconformidad' con el resultado de la valoración."
      },
      {
        type: "quote",
        content: "El hecho de que la valoración que haga el juez se aparte o no coincida con la posición de alguno de los sujetos procesales, no puede considerarse como un argumento suficiente para la tutela constitucional."
      },
      {
        type: "paragraph",
        content: "En conclusión, los tribunales no están atados a lo que las partes aspiran lograr con una prueba; su función es autónoma sobre el acervo probatorio válidamente allegado al proceso."
      }
    ]
  },
  {
    id: "4",
    slug: "contestacion-demanda-cuestiones-previas",
    title: "De la Contestación a la Demanda y las Cuestiones Previas",
    excerpt: "Análisis sobre la simultaneidad de actos procesales según la Sentencia Nro. 547 de la Sala de Casación Civil y la prevalencia del derecho a la defensa.",
    date: "05 Oct, 2023",
    author: "Abg. Angel Perez",
    category: "Derecho Procesal",
    icon: FileText,
    readTime: "12 min",
    sections: [
      {
        type: "paragraph",
        content: "El Código de Procedimiento Civil venezolano establece un orden lógico para la defensa. El Artículo 346 CPC permite oponer cuestiones previas 'en vez de' contestar la demanda, mientras que el Artículo 358 CPC regula el momento de la contestación al fondo."
      },
      {
        type: "heading",
        content: "La Ruptura del Formalismo",
        title: "I. El Escrito Simultáneo"
      },
      {
        type: "paragraph",
        content: "Contrariamente a lo que podría dictar una interpretación rígida de la ley, la Sala de Casación Civil (Sentencia Nro. 547, Agosto 2023, Caso: Dimatel Boleita C.A.) ha ratificado un criterio garantista:"
      },
      {
        type: "quote",
        content: "Si el demandado opta en un mismo escrito por contestar el fondo y oponer cuestiones previas, estas últimas deben tenerse como no interpuestas, dando prioridad al conocimiento de la contestación al fondo."
      },
      {
        type: "heading",
        content: "Conducta Judicial Garantista",
        title: "II. Prevalencia de la Voluntad de Defensa"
      },
      {
        type: "paragraph",
        content: "La Sala argumenta que, ante cualquier duda sobre la preclusión de la oportunidad para defenderse, debe imperar la voluntad manifiesta de la parte de dar contestación."
      },
      {
        type: "law-article",
        title: "Criterio de la Sala de Casación Civil",
        content: "Cuando surja alguna duda sobre la preclusión... y aparezca en autos la voluntad de contestar, esta voluntad debe imperar sobre la duda. El término preclusivo debe interpretarse en el sentido que permite la recepción de la contestación."
      },
      {
        type: "paragraph",
        content: "Este enfoque armoniza con el fallo N° 594 de 2012, reafirmando que la tutela judicial efectiva protege la intención de defensa por encima de las interpretaciones interpretativas que la restrinjan."
      },
      {
        type: "heading",
        content: "Efectos Prácticos",
        title: "III. Consecuencia Procesal"
      },
      {
        type: "paragraph",
        content: "En la práctica, si un juez se encuentra con este escenario, no debe censurar a la parte, sino actuar de forma garantista, admitiendo la contestación al fondo incluso si se interpusieron erróneamente cuestiones previas en el mismo acto."
      }
    ]
  },
  {
    id: "5",
    slug: "compraventa-inmuebles-no-registrados",
    title: "Compraventa de Inmuebles no Registrados: Validez y Efectos",
    excerpt: "Diferencias fundamentales entre los criterios del TSJ sobre la validez de documentos autenticados frente a la formalidad del registro en el derecho inmobiliario.",
    date: "11 Jul, 2023",
    author: "Abg. Angel Perez",
    category: "Derecho Inmobiliario",
    icon: Landmark,
    readTime: "12 min",
    sections: [
      {
        type: "paragraph",
        content: "En el complejo escenario de la partición de comunidad conyugal, surge a menudo la duda: ¿Es válida la propiedad si el documento de compraventa fue autenticado pero no protocolizado ante el Registro?"
      },
      {
        type: "heading",
        content: "El Criterio Moderno (2023)",
        title: "I. El Consentimiento como Eje"
      },
      {
        type: "paragraph",
        content: "La Sala de Casación Civil (Sentencia de 21 de marzo de 2023, Caso: Norys Briceño vs Gonzalo Paz) ha ratificado que la propiedad se transmite por el consentimiento, no por el registro."
      },
      {
        type: "law-article",
        title: "Interpretación del Art. 1.920 y 1.924 CC",
        content: "La omisión de la formalidad registral no impide el perfeccionamiento del contrato ni la transmisión de la propiedad. El registro solo es requerido para la oponibilidad frente a terceros que hayan adquirido derechos legales sobre el inmueble."
      },
      {
        type: "paragraph",
        content: "En términos prácticos, esta doctrina establece tres reglas de oro:"
      },
      {
        type: "list",
        content: [
          "El contrato es perfecto desde que hay convención sobre objeto y precio.",
          "La propiedad se transmite efectivamente al adquirente.",
          "El titular puede hacer valer su derecho frente a terceros 'indiferentes'."
        ]
      },
      {
        type: "heading",
        content: "El Criterio Disímil (2004)",
        title: "II. La Inmueble y la Prueba por Excelencia"
      },
      {
        type: "paragraph",
        content: "Anteriormente, la misma Sala (Sentencia de 29 de octubre de 2004, Ponencia de Carlos Oberto Vélez) sostenía un criterio más riguroso en casos de comunidad de gananciales."
      },
      {
        type: "quote",
        content: "En el caso específico de los inmuebles, la prueba por excelencia la constituye el documento debidamente protocolizado que acredite la propiedad."
      },
      {
        type: "paragraph",
        content: "Bajo este criterio, para desvirtuar la presunción de que un bien pertenece a la comunidad (Art. 164 CC), era imperativo presentar la cadena de títulos registrada para demostrar que la adquisición precedió al matrimonio."
      },
      {
        type: "heading",
        content: "Conclusión Técnica",
        title: "III. Plusvalía y Comunidad"
      },
      {
        type: "paragraph",
        content: "El debate sobre si la plusvalía de un bien propio debe partirse o no, se entrelaza con estas doctrinas. Si no se demuestra que el incremento de valor se debió a fondos comunes, el bien conserva su carácter propio, independientemente de los debates sobre la formalidad de su registro."
      }
    ]
  },
  {
    id: "6",
    slug: "delito-declararse-soltero-siendo-casado",
    title: "El Delito de Falsa Atestación del Estado Civil",
    excerpt: "Consecuencias penales de ocultar el matrimonio ante funcionarios públicos y su impacto en la comunidad de gananciales según la Sentencia Nro. 160 del TSJ.",
    date: "02 Feb, 2025",
    author: "Abg. Angel Perez",
    category: "Derecho Penal",
    icon: ShieldCheck,
    readTime: "8 min",
    sections: [
      {
        type: "paragraph",
        content: "Declararse falsamente con un estado civil que no corresponde (soltero, divorciado o viudo, siendo en realidad casado) no es solo una omisión administrativa; constituye un hecho punible tipificado en nuestra legislación penal."
      },
      {
        type: "heading",
        content: "Análisis de la Sentencia 160/2023",
        title: "I. El Caso Valarino-Casanova"
      },
      {
        type: "paragraph",
        content: "La Sala Constitucional del Tribunal Supremo de Justicia (Sentencia Nro. 160 del 22 de marzo de 2023) analizó un caso donde dos cónyuges se identificaron como 'divorciados' en la protocolización de un inmueble."
      },
      {
        type: "quote",
        content: "Incurrieron en falsa atestación ante funcionario público al ocultar su relación jurídica marital y sustraer del conocimiento público que el inmueble pertenecía a la comunidad económica matrimonial."
      },
      {
        type: "paragraph",
        content: "Esta acción dolosa tiene como objetivo principal defraudar la transparencia del registro y evitar que otros acreedores o interesados conozcan la verdadera naturaleza jurídica de los bienes adquiridos durante el matrimonio."
      },
      {
        type: "heading",
        content: "Consecuencias Penales",
        title: "II. La Falsa Atestación"
      },
      {
        type: "paragraph",
        content: "El ocultamiento del estado civil ante un funcionario público activa la obligación del Tribunal de remitir copias certificadas al Ministerio Público (Art. 269.2 COPP) para el inicio de investigaciones penales."
      },
      {
        type: "law-article",
        title: "Artículo 320 del Código Penal",
        content: "El que falsamente haya atestado ante un funcionario público su identidad o estado... será castigado con prisión de tres a nueve meses. Si se trata de un acto del estado civil o de la autoridad judicial, la pena será de seis a dieciocho meses de prisión."
      },
      {
        type: "heading",
        content: "Efectos en la Seguridad Jurídica",
        title: "III. La Función del Registro"
      },
      {
        type: "paragraph",
        content: "Manifestar una condición falsa deja sin efectos prácticos la función del registro público, que es dar fe sobre la titularidad y estado de los bienes. La confabulación entre cónyuges para manifestar situaciones no ciertas es perseguible de oficio."
      },
      {
        type: "quote",
        content: "La Sala Constitucional hizo mención a la comisión de un hecho punible enjuiciable de acción pública, ordenando la remisión al Ministerio Público por la actuación dolosa de los ciudadanos."
      }
    ]
  },
  {
    id: "7",
    slug: "perdida-del-interes-procesal",
    title: "La Pérdida del Interés Procesal",
    excerpt: "Análisis sobre la extinción de la acción por inactividad de las partes y los lapsos de caducidad según la Sala Constitucional.",
    date: "11 May, 2024",
    author: "Abg. Angel Perez",
    category: "Derecho Procesal",
    icon: Gavel,
    readTime: "9 min",
    sections: [
      {
        type: "paragraph",
        content: "El interés procesal no es un requisito que solo debe manifestarse al inicio del juicio; debe permanecer vivo a lo largo de todo el proceso. Su ausencia prolongada conlleva la terminación anormal del juicio por pérdida del interés."
      },
      {
        type: "heading",
        content: "Lapsos de Inactividad",
        title: "I. El Factor Tiempo"
      },
      {
        type: "paragraph",
        content: "La Sala Constitucional (Sentencia Nro. 0652/2022, Ponencia de Carmen Zuleta de Merchán) establece supuestos fácticos claros donde opera la extinción de pleno derecho:"
      },
      {
        type: "list",
        content: [
          "Para demandas ordinarias: Un año o más de inactividad absoluta.",
          "Para Amparo Constitucional: Seis (6) meses de inactividad.",
          "Efecto: El juzgador debe declarar de oficio la pérdida del interés procesal."
        ]
      },
      {
        type: "heading",
        content: "Momentos Procesales Clave",
        title: "II. ¿Cuándo ocurre la pérdida?"
      },
      {
        type: "paragraph",
        content: "A diferencia de la 'perención' (que ocurre entre la admisión y los informes), la pérdida del interés suele configurarse en dos momentos específicos:"
      },
      {
        type: "law-article",
        title: "Casos de Inactividad",
        content: [
          "Antes de la Admisión: Cuando interpuesta la acción, el actor no insta al órgano para que dé el trámite respectivo.",
          "Estado de Sentencia: Cuando la causa se paraliza estando lista para decidir, pero rebasa los términos de prescripción del derecho sin que se pida sentencia."
        ]
      },
      {
        type: "quote",
        content: "La potestad de administrar justicia emana de los ciudadanos. Si estos no instan al tribunal, denotan negligencia y hacen presumir al juez que realmente no tienen interés en obtener una solución."
      },
      {
        type: "heading",
        content: "Carácter Irreversible",
        title: "III. Extinción de la Instancia"
      },
      {
        type: "paragraph",
        content: "Una vez configurada la pérdida del interés por el transcurso del año, cualquier actuación posterior no impide la declaratoria de extinción. La Sala ha desestimado ratificaciones de voluntad si estas ocurren después de vencido el lapso de inactividad absoluta."
      },
      {
        type: "quote",
        content: "La inactividad que denota desinterés procesal se manifiesta por la falta de aspiración en que se le sentencie, en que se declare el derecho deducido."
      }
    ]
  },
  {
    id: "8",
    slug: "cualidad-activa-conyuge-accionista",
    title: "Accionistas y Legitimación: El Derecho de los Herederos",
    excerpt: "Análisis de la Sentencia 632/2024 sobre la cualidad activa de cónyuges y herederos para demandar la nulidad de asambleas sin estar inscritos en el libro de accionistas.",
    date: "26 Ene, 2025",
    author: "Abg. Angel Perez",
    category: "Derecho Mercantil",
    icon: Landmark,
    readTime: "9 min",
    sections: [
      {
        type: "paragraph",
        content: "Una de las defensas más comunes en litigios mercantiles es alegar la 'falta de cualidad' de los herederos de un socio fallecido si estos no han formalizado su inscripción en los libros de la compañía. Sin embargo, el TSJ ha fijado una doctrina protectora del heredero."
      },
      {
        type: "heading",
        content: "Inmobiliaria Montes C.A. (2024)",
        title: "I. El Caso en Análisis"
      },
      {
        type: "paragraph",
        content: "La Sala de Casación Civil (Sentencia N° 632 del 22 de noviembre de 2024, Ponente: Henry Timaure Tapia) resolvió una controversia donde se pretendía invalidar la demanda de nulidad de asamblea interpuesta por los herederos de los accionistas originales."
      },
      {
        type: "quote",
        content: "La empresa demandada oponía la falta de cualidad activa alegando que los demandantes no eran accionistas, pues no constaban en el libro respectivo de la sociedad mercantil."
      },
      {
        type: "heading",
        content: "Más allá del Libro de Accionistas",
        title: "II. Excepción al Artículo 296"
      },
      {
        type: "paragraph",
        content: "Si bien el Artículo 296 del Código de Comercio estipula que la propiedad se prueba con la inscripción en los libros, la Sala establece una excepción crucial en casos de nulidad absoluta y sucesiones:"
      },
      {
        type: "law-article",
        title: "Criterio Jurisprudencial",
        content: "En el caso de que el heredero de un accionista proceda a intentar la acción de nulidad, no es necesario que el mismo cumpla con todas las formalidades del artículo 296 del Código de Comercio; es decir, no tiene que estar inscrito en los libros para ejercer la acción."
      },
      {
        type: "paragraph",
        content: "Esto se debe a que la titularidad de la alícuota parte de las acciones nominativas se adquiere en el momento de la muerte del causante (*mortis causa*), integrándose al patrimonio de la comunidad hereditaria de pleno derecho."
      },
      {
        type: "heading",
        content: "Derechos del Cónyuge y Herederos",
        title: "III. Tutela Judicial Efectiva"
      },
      {
        type: "paragraph",
        content: "Imponer la obligación de estar inscrito en los libros antes de poder impugnar una asamblea manifiestamente ilegal dejaría en indefensión a los herederos frente a posibles maniobras de los socios sobrevivientes."
      },
      {
        type: "quote",
        content: "Los herederos que vienen a sustituir al accionista pueden, además de intentar la oposición a la asamblea, intentar la acción ordinaria de nulidad en contra de las decisiones manifiestamente ilegales."
      },
      {
        type: "paragraph",
        content: "Este criterio (reiterado en los casos Carmen Gordon vs Grand Bingo y Magaly Cannizaro vs DIPUCA) asegura que el patrimonio hereditario no sea erosionado por actos corporativos nulos antes de que los herederos logren completar los trámites administrativos de inscripción."
      }
    ]
  },
  {
    id: "9",
    slug: "consecuencias-inactividad-partes-perdida-interes",
    title: "Inactividad y Sus Consecuencias Procesales",
    excerpt: "Diferencias entre perención y abandono del trámite, y cómo la falta de impulso procesal denota una presunción de desinterés legal.",
    date: "14 Ene, 2025",
    author: "Abg. Angel Perez",
    category: "Derecho Procesal",
    icon: FileText,
    readTime: "7 min",
    sections: [
      {
        type: "paragraph",
        content: "La inactividad procesal no es un estado neutro; tiene consecuencias devastadoras para la pretensión del actor. La Sala Constitucional ha analizado profundamente el fenómeno del abandono del trámite antes de la admisión."
      },
      {
        type: "heading",
        content: "Análisis de la Sentencia 870/2007",
        title: "I. El Abandono del Trámite"
      },
      {
        type: "paragraph",
        content: "En el caso de la Asociación Civil Baruta Soberana (Sentencia N° 870 del 8 de mayo de 2007), se verificó una inactividad total por más de un año en un procedimiento de nulidad que ni siquiera había sido admitido."
      },
      {
        type: "quote",
        content: "La pérdida del interés puede ocurrir aun antes de ser admitida la causa, cuando el demandante no insta al órgano jurisdiccional... actitud que denota negligencia y hace presumir al juez que el actor realmente no tiene interés."
      },
      {
        type: "heading",
        content: "Potestad vs. Deber",
        title: "II. El Artículo 253 Constitucional"
      },
      {
        type: "paragraph",
        content: "La justicia emana de los ciudadanos. Por tanto, la función jurisdiccional requiere que el ciudadano la active y la mantenga viva. El Estado solo tiene el deber de impartirla si el interesado demuestra su voluntad de recibirla."
      },
      {
        type: "law-article",
        title: "La Regla de Equiparación",
        content: "Si una demanda no ha sido admitida y transcurre un lapso de un año o mayor, lo pertinente es que el juzgador, de oficio, declare la pérdida del interés procesal, equiparándola a la perención prevista en el Art. 257 del CPC."
      },
      {
        type: "heading",
        content: "Conclusión",
        title: "III. Terminación del Procedimiento"
      },
      {
        type: "paragraph",
        content: "Sin actos que demuestren el interés en la admisión, tramitación y decisión, el procedimiento se considera terminado por ley. No basta con interponer la demanda; el impulso procesal es una carga ineludible para el éxito de la acción."
      }
    ]
  },
  {
    id: "10",
    slug: "reconciliacion-matrimonial",
    title: "La Reconciliación Matrimonial: Efectos y Trascendencia",
    excerpt: "Naturaleza de la reconciliación como instituto de orden público, su capacidad de enervar sentencias firmes y sus efectos en la comunidad de gananciales.",
    date: "09 Dic, 2025",
    author: "Abg. Angel Perez",
    category: "Derecho de Familia",
    icon: HeartHandshake,
    readTime: "12 min",
    sections: [
      {
        type: "paragraph",
        content: "La reconciliación de los esposos es un asunto de orden público absoluto en el derecho venezolano. No es simplemente un acto privado; es una institución capaz de enervar incluso la ejecutoria de una sentencia firme de separación de cuerpos."
      },
      {
        type: "heading",
        content: "Validez y Notificación",
        title: "I. ¿Cuándo surte efectos?"
      },
      {
        type: "paragraph",
        content: "A diferencia de otros actos procesales, la validez de la reconciliación no depende de su notificación al Tribunal. Según la tesis tradicional acogida por la jurisprudencia desde 1959, surte efectos desde el propio momento en que se produce, siempre que resulte probada."
      },
      {
        type: "quote",
        content: "La reconciliación es un hecho autónomo, independiente y no condicionado que, de resultar probado, impide la disolución del matrimonio. Su declaratoria puede tener lugar aun habiendo fallecido alguno de los cónyuges."
      },
      {
        type: "heading",
        content: "Reconciliación vs. Divorcio",
        title: "II. Diferencia en el Fallecimiento"
      },
      {
        type: "paragraph",
        content: "Existe una distinción lógica y jurídica crucial: mientras que el divorcio no puede sentenciarse tras la muerte de un cónyuge (porque el vínculo ya se disolvió por fallecimiento), la reconciliación sí puede probarse post-mortem para confirmar el estado que tenía el de cujus al morir."
      },
      {
        type: "heading",
        content: "Efectos sobre el Patrimonio",
        title: "III. Restitución de Gananciales"
      },
      {
        type: "paragraph",
        content: "Una vez producida la reconciliación, cesan los efectos de la separación de bienes como si nunca se hubiere efectuado. Se restituye la comunidad de gananciales, protegiendo la institución del matrimonio amparada en los Artículos 75 y 77 de la Constitución."
      },
      {
        type: "law-article",
        title: "Recuperación de Derechos",
        content: "Probada la reconciliación, el cónyuge sobreviviente recupera plenamente el derecho de heredar a su consorte, independientemente de que existiera una separación previa."
      },
      {
        type: "heading",
        content: "Límites Probatorios",
        title: "IV. La Prueba de la Condición de Heredero"
      },
      {
        type: "paragraph",
        content: "Es fundamental entender que las actas de defunción y las declaraciones sucesorales (planillas de liquidación) no constituyen prueba plena de la vocación hereditaria. Tienen valor indiciario, pero no acreditan per se el vínculo sucesoral exclusivo (Sentencia N° 455 de julio de 2014)."
      },
      {
        type: "quote",
        content: "La planilla no es el instrumento idóneo para probar la condición de heredero; su valor es meramente indiciario en el proceso de determinación de vínculos."
      }
    ]
  },
  {
    id: "11",
    slug: "falta-cualidad-abogado-cobro-honorarios",
    title: "Cobro de Honorarios y el Condenado en Costas",
    excerpt: "Análisis de la Sentencia 614/2024: ¿Por qué un abogado no puede demandar directamente al perdedor del juicio para cobrar sus honorarios?",
    date: "07 Ene, 2025",
    author: "Abg. Angel Perez",
    category: "Derecho Mercantil",
    icon: Gavel,
    readTime: "10 min",
    sections: [
      {
        type: "paragraph",
        content: "Existe una creencia común de que el abogado puede cobrar sus honorarios directamente a la parte que perdió el juicio y fue condenada en costas. Sin embargo, la Sala de Casación Civil ha sentado una doctrina tajante sobre la falta de cualidad activa del letrado para este tipo de acciones directas."
      },
      {
        type: "heading",
        content: "El Caso Cervecería Polar (2024)",
        title: "I. El Error en la Intimación"
      },
      {
        type: "paragraph",
        content: "En la Sentencia N° 614 (14 de noviembre de 2024), el abogado Fabián Torres demandó la estimación e intimación de sus honorarios directamente a Cervecería Polar C.A., tras una condena en costas en un proceso de amparo."
      },
      {
        type: "quote",
        content: "Resulta claro para la Sala que se efectúa una acción directa sin tener mandato para dicha demanda, ya que el abogado no es la parte gananciosa o vencedora, sino que actúa bajo interés personal de hacer valer el pago de sus actuaciones."
      },
      {
        type: "heading",
        content: "La Propiedad de las Costas",
        title: "II. Las Costas pertenecen a la Parte"
      },
      {
        type: "paragraph",
        content: "El fundamento legal de esta decisión se encuentra en la Ley de Abogados, que distingue claramente quién es el acreedor de las costas procesales."
      },
      {
        type: "law-article",
        title: "Artículo 22 de la Ley de Abogados",
        content: "Las costas pertenecen a la parte, quien pagará los honorarios a sus apoderados, asistentes o defensores. Sin embargo, el Abogado podrá estimar sus honorarios y pedir la intimación al respectivo obligado (su propio cliente)."
      },
      {
        type: "heading",
        content: "Falta de Cualidad Activa",
        title: "III. Un Vicio de Orden Público"
      },
      {
        type: "paragraph",
        content: "La legitimación para la causa es una formalidad esencial vinculada al derecho constitucional a la defensa y a la tutela judicial efectiva. Por ser materia de orden público, el juez tiene el poder y el deber de examinarla de oficio en cualquier grado de la causa."
      },
      {
        type: "quote",
        content: "La circunstancia de que quien instaura la pretensión no sea el legitimado activo según la ley, trae como consecuencia la inadmisibilidad de la acción por carencia de presupuestos procesales necesarios."
      },
      {
        type: "paragraph",
        content: "En conclusión, el abogado debe intimar a su propio cliente, y es este último (la parte vencedora) quien tiene la cualidad para repetir o reclamar el reembolso de lo pagado a la parte condenada en costas."
      }
    ]
  },
  {
    id: "12",
    slug: "guia-integral-juez-de-paz-comunal",
    title: "Guía Integral: La Justicia de Paz Comunal en Venezuela",
    excerpt: "Todo lo que necesitas saber sobre la nueva Ley de Justicia de Paz Comunal 2024: competencias, procedimientos y resolución de conflictos comunitarios.",
    date: "19 Dic, 2024",
    author: "Abg. Angel Perez",
    category: "Justicia Comunal",
    icon: BookOpen,
    readTime: "25 min",
    sections: [
      {
        type: "paragraph",
        content: "La Justicia de Paz Comunal ha sido recientemente reformada mediante la Ley Orgánica publicada en Gaceta Oficial N° 6.854 Extraordinario (14 de noviembre de 2024). Esta ley redefine la armonía vecinal y comunitaria como un eje central del Sistema de Justicia."
      },
      {
        type: "heading",
        content: "Competencias del Juez de Paz",
        title: "I. ¿Qué puede decidir un Juez de Paz?"
      },
      {
        type: "paragraph",
        content: "Las facultades de los jueces de paz son amplias y de impacto directo en la convivencia diaria. Sus principales competencias incluyen:"
      },
      {
        type: "list",
        content: [
          "Conflictos patrimoniales hasta 1000 veces el tipo de cambio oficial de mayor valor (BCV).",
          "Controversias de arrendamiento y propiedad horizontal.",
          "Violencia de género: Actuar como órgano receptor y dictar medidas de protección urgentes.",
          "Derechos de niños, adolescentes y adultos mayores.",
          "Protección de animales domésticos y comunitarios.",
          "Conflictos internos de Consejos Comunales y Comunas."
        ]
      },
      {
        type: "heading",
        content: "El Inicio del Proceso",
        title: "II. Del Procedimiento y la Notificación"
      },
      {
        type: "paragraph",
        content: "El proceso es expedito y busca eliminar formalismos inútiles. Se inicia por solicitud (oral o escrita) y la audiencia inicial debe celebrarse en un lapso no mayor a 8 días hábiles."
      },
      {
        type: "law-article",
        title: "Notificación única y Telemática",
        content: "La ley ahora permite formalmente el uso de medios telemáticos para la notificación si la personal no es posible. Una vez notificados, las partes se entienden a derecho para todo el proceso."
      },
      {
        type: "heading",
        content: "La Conciliación: El Objetivo Primordial",
        title: "III. Mediación y Acuerdo"
      },
      {
        type: "paragraph",
        content: "El juez de paz actúa principalmente como un mediador. El lapso de conciliación dura 15 días continuos. Si se logra un acuerdo, el juez lo homologa."
      },
      {
        type: "quote",
        content: "Una vez homologado, el acuerdo tendrá autoridad de cosa juzgada, lo que significa que tiene la misma validez que una sentencia firme de un tribunal ordinario."
      },
      {
        type: "heading",
        content: "Arbitraje de Equidad",
        title: "IV. Cuando no hay Acuerdo"
      },
      {
        type: "paragraph",
        content: "Si la mediación falla, se activa el arbitraje de equidad. Aquí se abre un breve lapso probatorio (3 días para promover y 5 para evacuar) donde el juez valora las pruebas según su 'sentido común' y 'experiencia'."
      },
      {
        type: "heading",
        content: "Sentencia e Ejecución",
        title: "V. La Fuerza de la Decisión"
      },
      {
        type: "paragraph",
        content: "La sentencia dictada es obligatoria. Solo puede ser impugnada ante un Juez de Municipio en casos muy específicos (contenido patrimonial o violación de garantías constitucionales)."
      },
      {
        type: "law-article",
        title: "Ejecución Forzosa",
        content: "Si la parte condenada no cumple voluntariamente, el Juez de Paz Comunal puede ordenar la ejecución forzosa, solicitando el apoyo de los órganos de seguridad ciudadana (policía)."
      }
    ]
  },
  {
    id: "13",
    slug: "nueva-competencia-tribunales-cuantia",
    title: "Nuevas Cuantías: ¿Dónde demandar en Venezuela?",
    excerpt: "Análisis de la Resolución 2023-0001 del TSJ que modifica los límites de competencia entre Juzgados de Municipio y Primera Instancia usando la moneda de mayor valor.",
    date: "16 Jun, 2023",
    author: "Abg. Angel Perez",
    category: "Derecho Procesal",
    icon: Landmark,
    readTime: "8 min",
    sections: [
      {
        type: "paragraph",
        content: "El Tribunal Supremo de Justicia, mediante Resolución 2023-0001, ha modificado radicalmente la forma de determinar la competencia por la cuantía. La Unidad Tributaria ha quedado desplazada por un nuevo referente: la moneda de mayor valor publicada por el Banco Central de Venezuela."
      },
      {
        type: "heading",
        content: "Distribución de Competencias",
        title: "I. Los Nuevos Límites Legales"
      },
      {
        type: "paragraph",
        content: "Según la Sala Plena, el objetivo es equilibrar la carga de trabajo entre los juzgados basándose en la realidad económica actual. Los nuevos límites son:"
      },
      {
        type: "list",
        content: [
          "Juzgados de Municipio: Conocen asuntos cuya cuantía NO EXCEDA de 3.000 veces el tipo de cambio oficial de la moneda de mayor valor (BCV).",
          "Juzgados de Primera Instancia: Conocen asuntos cuya cuantía EXCEDA de las 3.000 veces el referido tipo de cambio."
        ]
      },
      {
        type: "heading",
        content: "Requisitos del Escrito Libelar",
        title: "II. Nueva Obligación para el Abogado"
      },
      {
        type: "paragraph",
        content: "A partir de esta resolución, el abogado tiene una carga adicional al redactar su demanda. No basta con indicar el monto en Bolívares."
      },
      {
        type: "law-article",
        title: "Determinación de la Cuantía",
        content: "Los justiciables deberán expresar, además de las sumas en bolívares, el precio del día de la moneda de mayor valor (según el BCV) al momento de la interposición del asunto."
      },
      {
        type: "heading",
        content: "Procedimientos Especiales",
        title: "III. Casos del Procedimiento Breve y Oral"
      },
      {
        type: "paragraph",
        content: "Los procedimientos que se rigen por la brevedad u oralidad también sufrieron ajustes en sus topes de admisibilidad:"
      },
      {
        type: "list",
        content: [
          "Procedimiento Breve (Art. 881 CPC): El nuevo límite es de 1.500 veces la moneda de mayor valor.",
          "Procedimiento Oral (Art. 859 CPC): Igualmente limitado a 1.500 veces la moneda de mayor valor."
        ]
      },
      {
        type: "heading",
        content: "Vigencia y Retroactividad",
        title: "IV. Efectos de la Resolución"
      },
      {
        type: "paragraph",
        content: "Es importante destacar que estos cambios solo afectan a los asuntos nuevos presentados con posterioridad a la entrada en vigencia de la resolución. Los casos en curso mantienen su trámite original bajo las reglas anteriores."
      },
      {
        type: "quote",
        content: "Esta medida busca contrarrestar la devaluación monetaria que destruyó la Unidad Tributaria como unidad de medida eficiente para la administración de justicia."
      }
    ]
  },
  {
    id: "14",
    slug: "confesion-ficta-presupuestos-procedencia",
    title: "La Confesión Ficta: Cuando el Silencio es Sanción",
    excerpt: "Análisis de la Sentencia 734/2024: Los tres requisitos indispensables para que opere la confesión ficta y por qué no es una derrota automática para el demandado.",
    date: "19 Nov, 2024",
    author: "Abg. Angel Perez",
    category: "Derecho Procesal",
    icon: Scale,
    readTime: "12 min",
    sections: [
      {
        type: "paragraph",
        content: "La confesión ficta es una de las sanciones más rigurosas del procedimiento civil venezolano. Ocurre cuando el demandado no contesta la demanda en el lapso legal, generando una presunción de aceptación de los hechos, pero esta no es absoluta ni automática."
      },
      {
        type: "heading",
        content: "Los Tres Requisitos de Procedencia",
        title: "I. El Triple Filtro Legal"
      },
      {
        type: "paragraph",
        content: "Según la reciente Sentencia N° 00734 (10 de octubre de 2024) de la Sala Político-Administrativa, para que la confesión ficta sea vinculante deben concurrir tres elementos:"
      },
      {
        type: "list",
        content: [
          "Falta de contestación de la demanda: El demandado debe haber dejado pasar el lapso sin responder o haberlo hecho extemporáneamente.",
          "Falta de contraprueba: Que el demandado no haya promovido ninguna prueba que le favorezca o que desvirtúe los hechos del actor.",
          "No contrariedad a derecho: Que la petición del demandante no sea ilegal o prohibida por el ordenamiento jurídico."
        ]
      },
      {
        type: "heading",
        content: "La Presunción Iuris Tantum",
        title: "II. Naturaleza de la Ficción"
      },
      {
        type: "paragraph",
        content: "La Sala aclara que la confesión ficta no es una admisión definitiva. Es una presunción *iuris tantum*, lo que significa que admite prueba en contrario durante el lapso de promoción de pruebas."
      },
      {
        type: "quote",
        content: "El demandado que no contestó la demanda tiene la carga de la prueba en el sentido de demostrar que no son verdad los hechos alegados por la parte actora. No requiere plena prueba; le es suficiente generar dudas en el juzgador."
      },
      {
        type: "heading",
        content: "¿Qué es una Petición Contraria a Derecho?",
        title: "III. El Límite de la Ilegalidad"
      },
      {
        type: "paragraph",
        content: "Incluso si el demandado guarda silencio total, el Juez no puede declarar con lugar una demanda si esta es 'contraria a derecho'. Esto ocurre cuando la acción está prohibida por la ley o restringida a supuestos de hecho distintos a los presentados."
      },
      {
        type: "law-article",
        title: "El Deber del Demandante",
        content: "La aceptación de los hechos que produce la confesión ficta no es suficiente por sí sola. El demandante sigue obligado a demostrar la licitud de su pretensión y fundamentar debidamente sus pedimentos con base en las pruebas aportadas con el libelo."
      },
      {
        type: "heading",
        content: "Conclusión",
        title: "IV. Rigor y Justicia"
      },
      {
        type: "paragraph",
        content: "En resumen, la confesión ficta es una herramienta de celeridad procesal que sanciona la contumacia, pero el sistema protege al demandado permitiéndole probar 'algo que le favorezca' e imponiendo al Juez el deber de velar por la legalidad de la pretensión."
      }
    ]
  },
  {
    id: "15",
    slug: "terrorismo-judicial",
    title: "TERRORISMO JUDICIAL",
    excerpt: "Reflexión crítica sobre el uso abusivo del sistema de justicia.",
    date: "10 Mar, 2024",
    author: "Abg. Angel Perez",
    category: "Opinión",
    icon: ShieldCheck,
    readTime: "8 min",
    sections: []
  },
  {
    id: "16",
    slug: "contrato-verbal-como-se-prueba",
    title: "¿Es válido un Contrato Verbal en Venezuela?",
    excerpt: "Análisis de la Sentencia 900/2018: Por qué la falta de un documento escrito no es motivo para que un juez declare inadmisible tu demanda.",
    date: "25 Oct, 2024",
    author: "Abg. Angel Perez",
    category: "Derecho Civil",
    icon: MessageSquare,
    readTime: "10 min",
    sections: [
      {
        type: "paragraph",
        content: "Mucha gente cree que si no hay un papel firmado, el contrato 'no existe'. Sin embargo, la Sala Constitucional ha aclarado que los contratos verbales son perfectamente válidos y que exigir un documento escrito como requisito de admisibilidad viola el derecho a la tutela judicial efectiva."
      },
      {
        type: "heading",
        content: "El Error de la Inadmisibilidad",
        title: "I. El Mito del Documento Fundamental"
      },
      {
        type: "paragraph",
        content: "En la Sentencia N° 900 (13 de diciembre de 2018), la Sala revisó un caso donde se declaró inadmisible una demanda por no acompañar el 'instrumento fundamental' (el contrato escrito)."
      },
      {
        type: "quote",
        content: "La Sala observa que se le exigió al demandante una carga de imposible cumplimiento, por cuanto se deduce que no hubo contrato escrito entre las partes, por lo que mal podía requerirse su acompañamiento junto con el libelo."
      },
      {
        type: "heading",
        content: "Principio Pro Actione",
        title: "II. Facilitando el Acceso a la Justicia"
      },
      {
        type: "paragraph",
        content: "El derecho a la defensa y al debido proceso prevalecen sobre formalismos legales. El principio *pro actione* garantiza que los requisitos de acceso a la justicia no frustren injustificadamente el ejercicio de la acción."
      },
      {
        type: "law-article",
        title: "Artículo 341 del CPC",
        content: "Presentada la demanda, el Tribunal la admitirá si no es contraria al orden público, a las buenas costumbres o a alguna disposición expresa de la Ley. No presentar un documento escrito no está en esta lista."
      },
      {
        type: "heading",
        content: "La Sanción Correcta",
        title: "III. Art. 434 del CPC"
      },
      {
        type: "paragraph",
        content: "Si un contrato es escrito y no se presenta, la sanción del Art. 434 es que 'no se admitirá después', pero esto NO faculta al juez para negar la admisión de la demanda inicial."
      },
      {
        type: "heading",
        content: "¿Cómo se deduce el Contrato Verbal?",
        title: "IV. Elementos de Prueba"
      },
      {
        type: "paragraph",
        content: "Para probar un contrato verbal, el abogado debe ser preciso en el libelo, alegando elementos de los que se deduzca el consentimiento recíproco, el precio fijado y la entrega de la cosa."
      },
      {
        type: "list",
        content: [
          "Mención expresa de que el contrato fue verbal o por mutuo consenso.",
          "Documentos indirectos: Recibos, correos, testimonios de entrega.",
          "Principio de ejecución: Demostrar que una de las partes ya comenzó a cumplir su parte."
        ]
      },
      {
        type: "paragraph",
        content: "En conclusión, el juez constitucional debe ser cuidadoso y no inventar causales de inadmisibilidad. Si tu contrato fue un acuerdo de palabras, tienes derecho a ir a juicio para hacerlo cumplir."
      }
    ]
  },
  {
    id: "17",
    slug: "impugnacion-actas-union-estable-hecho",
    title: "¿Cómo impugnar un Acta de Unión Estable de Hecho?",
    excerpt: "Conoce los tres únicos medios legales para impugnar un acta del Registro Civil según la Sala Constitucional del TSJ.",
    date: "21 Oct, 2024",
    author: "Abg. Angel Perez",
    category: "Derecho de Familia",
    icon: FileCheck,
    readTime: "7 min",
    sections: [
      {
        type: "paragraph",
        content: "Las actas del Registro Civil son documentos que constituyen plena prueba del estado civil. Sin embargo, cuando estas actas (como las de Unión Estable de Hecho) contienen vicios, el ordenamiento jurídico venezolano prevé mecanismos específicos para su impugnación."
      },
      {
        type: "heading",
        content: "Los Tres Medios de Impugnación",
        title: "I. Vías Judiciales y Administrativas"
      },
      {
        type: "paragraph",
        content: "Según la Sentencia de la Sala Constitucional (18 de junio de 2015), existen tres vías legales para atacar la validez de estas actas:"
      },
      {
        type: "list",
        content: [
          "Tacha de Falsedad: Se realiza por vía judicial (art. 1380 del Código Civil) ante sospechas de falsedad material o ideológica del documento.",
          "Nulidad Administrativa: Tramitada ante la Oficina Nacional de Registro Civil (art. 150 LORC) cuando el contenido sea contrario a la ley, carezca de veracidad o haya sido dictada por funcionarios incompetentes.",
          "Nulidad Judicial Especial: Específicamente para actas que afecten a niños, niñas y adolescentes, ante los Tribunales de Protección (LOPNNA)."
        ]
      },
      {
        type: "heading",
        content: "Causales de Nulidad Administrativa",
        title: "II. ¿Cuándo acudir al Registro Civil?"
      },
      {
        type: "paragraph",
        content: "La vía administrativa es idónea bajo tres supuestos específicos establecidos en la Ley Orgánica de Registro Civil:"
      },
      {
        type: "list",
        content: [
          "Falta de veracidad o contenido ilegal.",
          "Incompetencia manifiesta del funcionario o prescindencia del procedimiento legal.",
          "Doble o múltiple inscripción del mismo hecho."
        ]
      },
      {
        type: "heading",
        content: "Coexistencia de Vías",
        title: "III. ¿Puedo usar ambas vías al mismo tiempo?"
      },
      {
        type: "paragraph",
        content: "Un punto vital de la jurisprudencia es que la vía jurisdiccional (Tribunal) y la administrativa (Registro) no son excluyentes. Pueden coexistir simultáneamente."
      },
      {
        type: "quote",
        content: "La pendencia de una tacha en sede judicial no obsta a que se inicie y decida la nulidad en sede administrativa ni viceversa, dada su disímil naturaleza."
      },
      {
        type: "paragraph",
        content: "En conclusión, para impugnar un acta de unión estable, el interesado debe identificar el vicio (falsedad o ilegalidad) para elegir la vía más efectiva o ejercer ambas si el caso lo amerita."
      }
    ]
  },
  {
    id: "18",
    slug: "peticion-de-herencia",
    title: "Petición de Herencia: ¿Cómo reclamar lo que te corresponde?",
    excerpt: "Aunque no está regulada detalladamente en el Código Civil, la petición de herencia es la acción real para que se te reconozca como heredero y recuperes bienes en manos de terceros.",
    date: "19 Oct, 2024",
    author: "Abg. Angel Perez",
    category: "Sucesiones",
    icon: Landmark,
    readTime: "9 min",
    sections: [
      {
        type: "paragraph",
        content: "La petición de herencia es una figura curiosa en el derecho venezolano: no tiene un reglamento extenso en el Código Civil (apenas se menciona en los Arts. 443 y 43), pero es la herramienta fundamental en tribunales para proteger los derechos sucesorales."
      },
      {
        type: "heading",
        content: "¿Qué es la Petición de Herencia?",
        title: "I. El Reconocimiento de la Calidad Hereditaria"
      },
      {
        type: "paragraph",
        content: "Es la acción destinada a poner fin a toda discusión sobre el derecho a la sucesión. Su objeto es que el demandante sea reconocido como sucesor universal y se le entreguen los bienes del acervo hereditario."
      },
      {
        type: "quote",
        content: "Es la acción real a través de la cual alguien que se pretende llamado a una sucesión reclama la entrega total o parcial de los bienes, frente a quien los posee invocando también derechos o simplemente como poseedor."
      },
      {
        type: "heading",
        content: "Los Requisitos para Ganar el Juicio",
        title: "II. Presupuestos de Procedencia"
      },
      {
        type: "paragraph",
        content: "Para que un tribunal declare 'con lugar' esta acción, deben probarse tres elementos esenciales:"
      },
      {
        type: "list",
        content: [
          "Fallecimiento del causante: El acta de defunción es el documento base.",
          "Cualidad de heredero: Demostrada mediante actas de nacimiento (vínculo legítimo) o testamento.",
          "Posesión de bienes por un tercero: Demostrar que los bienes pertenecen a la herencia y están en manos de alguien que carece de título legal."
        ]
      },
      {
        type: "heading",
        content: "¿Contra quién se dirige la acción?",
        title: "III. Sujetos Pasivos"
      },
      {
        type: "paragraph",
        content: "La acción puede proponerse contra dos tipos de poseedores:"
      },
      {
        type: "list",
        content: [
          "Poseedor Pro-Herede: Aquel que también dice ser heredero pero tiene un derecho menor o igual al tuyo.",
          "Poseedor Pro-Possessore: El simple usurpador, invasor o tercero que tiene los bienes sin alegar ningún título sucesorio."
        ]
      },
      {
        type: "heading",
        content: "Un Caso Práctico",
        title: "IV. Jurisprudencia del Estado Miranda (2014)"
      },
      {
        type: "paragraph",
        content: "En el caso De Sousa Gomes contra Evelia Velásquez, el tribunal ordenó la entrega de inmuebles a la hermana del fallecido (heredera legítima) frente a una tercera persona que poseía los bienes sin demostrar ninguna cualidad legal."
      },
      {
        type: "law-article",
        title: "Nota del Autor",
        content: "A falta de regulación expresa en el Código Civil venezolano, los tribunales aplican por analogía las reglas del Derecho Romano y la doctrina de especialistas como Francisco López Herrera para garantizar la justicia en el reparto hereditario."
      }
    ]
  },
  {
    id: "19",
    slug: "convenimiento-en-la-demanda-efectos",
    title: "El Convenimiento: Cuando el Demandado Acepta Todo",
    excerpt: "Análisis de la Sentencia 1615/2023: La naturaleza irrevocable del convenimiento y su fuerza de cosa juzgada en el proceso civil.",
    date: "14 Oct, 2024",
    author: "Abg. Angel Perez",
    category: "Derecho Procesal",
    icon: Handshake,
    readTime: "11 min",
    sections: [
      {
        type: "paragraph",
        content: "El convenimiento es una de las formas de autocomposición procesal más determinantes. Es el acto mediante el cual el demandado decide, de forma unilateral, aceptar todas las pretensiones del actor, poniendo fin al conflicto sin necesidad de una sentencia tradicional."
      },
      {
        type: "heading",
        content: "¿Qué implica convenir?",
        title: "I. Renuncia a la Defensa"
      },
      {
        type: "paragraph",
        content: "Al convenir, el demandado renuncia a todas las excepciones y defensas que pudiese haber opuesto. Es una aceptación total de los pedimentos del demandante, lo que implica el reconocimiento del derecho material en disputa."
      },
      {
        type: "quote",
        content: "El convenimiento una vez homologado pone fin al juicio, implica el reconocimiento del derecho material y tiene la misma fuerza que la cosa juzgada."
      },
      {
        type: "heading",
        content: "La Regla de la Irrevocabilidad",
        title: "II. Un Punto sin Retorno"
      },
      {
        type: "paragraph",
        content: "Un aspecto crítico resaltado por la Sala Constitucional en la Sentencia N° 1615 (29 de noviembre de 2023) es que el convenio es irrevocable, incluso antes de que el juez lo homologue."
      },
      {
        type: "law-article",
        title: "Artículo 263 del CPC",
        content: "En cualquier estado y grado de la causa puede el demandante desistir de la demanda y el demandado convenir en ella. El Juez dará por consumado el acto... es irrevocable, aun antes de la homologación del Tribunal."
      },
      {
        type: "heading",
        content: "El Caso Royalvin (2023)",
        title: "III. Convenimiento 'En todas sus partes'"
      },
      {
        type: "paragraph",
        content: "En este caso, la empresa demandada convino expresamente en el libelo y su reforma. Aunque luego hubo disputas sobre los montos exactos, la Sala ratificó que si se convino en 'todas las partes', el juez debe homologar y proceder a la ejecución según los términos de la demanda."
      },
      {
        type: "heading",
        content: "Efectos Procesales",
        title: "IV. Homologación y Ejecución"
      },
      {
        type: "paragraph",
        content: "Para que el convenimiento surta efecto pleno, el Juez debe verificar que no sea contrario al orden público o a las buenas costumbres. Una vez impartida la homologación, se procede a su ejecución forzosa si el demandado no cumple voluntariamente lo aceptado."
      },
      {
        type: "list",
        content: [
          "Extinción del proceso por autocomposición.",
          "Fuerza de Cosa Juzgada: No se puede volver a litigar lo mismo.",
          "Irrevocabilidad inmediata por voluntad del demandado."
        ]
      },
      {
        type: "paragraph",
        content: "En resumen, el convenimiento es un acto de responsabilidad procesal que ahorra tiempo y costos, pero que debe manejarse con extrema cautela dado su carácter definitivo e irrevocable."
      }
    ]
  },
  {
    id: "20",
    slug: "recurso-revision-constitucional-sentencias",
    title: "RECURSO EXTRAORDINARIO DE REVISIÓN CONSTITUCIONAL DE SENTENCIAS DEFINITIVAM",
    excerpt: "Análisis de la tutela constitucional frente a sentencias firmes.",
    date: "25 Feb, 2024",
    author: "Abg. Angel Perez",
    category: "Derecho Constitucional",
    icon: ShieldCheck,
    readTime: "12 min",
    sections: []
  },
  {
    id: "21",
    slug: "desalojo-local-comercial-documento-privado-dolares",
    title: "Desalojo Comercial: Cánones en Dólares y Documentos Privados",
    excerpt: "Análisis de la Sentencia 335/2024: El TSJ ratifica la validez de fijar alquileres en divisas y el valor probatorio de convenios privados tras experticias de cotejo.",
    date: "29 Sep, 2024",
    author: "Abg. Angel Perez",
    category: "Derecho Inmobiliario",
    icon: Landmark,
    readTime: "13 min",
    sections: [
      {
        type: "paragraph",
        content: "La dinámica económica de Venezuela ha llevado a la justicia a armonizar leyes antiguas con la realidad actual. La reciente Sentencia N° 335 (junio de 2024) sienta una pauta crucial sobre cómo proceder en desalojos de locales comerciales cuando existen acuerdos en dólares y documentos no notarvados."
      },
      {
        type: "heading",
        content: "La Validez de los Documentos Privados",
        title: "I. El 'Convenio de Pago' como Prueba"
      },
      {
        type: "paragraph",
        content: "En el caso analizado, las partes firmaron un convenio privado de pago que modificaba el contrato original. Aunque fue desconocido por la parte demandada, el TSJ le otorgó pleno valor probatorio tras una experticia de cotejo que demostró la autenticidad de las firmas."
      },
      {
        type: "quote",
        content: "Si el experto determina que la firma en un documento privado (aunque sea dubitada) coincide con la del contrato principal, dicho documento tiene fuerza legal para sustentar una demanda."
      },
      {
        type: "heading",
        content: "¿Es legal cobrar alquiler en dólares?",
        title: "II. Colisión de Leyes: BCV vs Arrendamiento"
      },
      {
        type: "paragraph",
        content: "Aunque la Ley de Arrendamiento Comercial de 2014 prohíbe fijar cánones en moneda extranjera, la Sala de Casación Civil aplicó el criterio de 'Ley Posterior' otorgando preferencia a la Ley del Banco Central de Venezuela de 2015 y al Convenio Cambiario N° 1 de 2018."
      },
      {
        type: "law-article",
        title: "Criterio Vinculante",
        content: "Pactar el canon en moneda extranjera NO es ilegal, siempre y cuando se permita al arrendatario pagar el equivalente en moneda de curso legal (Bolívares) al tipo de cambio oficial del día del pago."
      },
      {
        type: "heading",
        content: "La Trampa del 'Hecho Negativo Absoluto'",
        title: "III. Falta de Pago Total"
      },
      {
        type: "paragraph",
        content: "El TSJ rechazó el argumento del inquilino que pretendía no pagar bajo la excusa de la 'ilicitud' del pacto en dólares. La Sala dictaminó que ante el hecho negativo de no haber pagado nada (ni en dólares ni en bolívares), la carga de la prueba es del inquilino. Si no hay recibos de pago, el desalojo procede."
      },
      {
        type: "heading",
        content: "Servicios Públicos: Otra causal de Desalojo",
        title: "IV. Más allá del alquiler"
      },
      {
        type: "paragraph",
        content: "La sentencia recuerda que, según el Art. 40 de la Ley de Arrendamiento Comercial, la falta de pago de servicios como agua y luz es causal independiente para el desalojo. Basta con demostrar el incumplimiento de una de estas obligaciones para que proceda la entrega del inmueble."
      },
      {
        type: "list",
        content: [
          "Documentos privados valen si se autentican mediante cotejo.",
          "El canon en dólares es legal con opción de conversión a BCV.",
          "La falta de pago de servicios (luz/agua) justifica el desalojo por sí sola.",
          "No pagar 'por supuesta ilegalidad del contrato' no impide el desalojo."
        ]
      }
    ]
  },
  {
    id: "22",
    slug: "union-concubinaria-putativa-ordinaria-hibrida",
    title: "Unión Concubinaria: De lo Putativo a lo Ordinario",
    excerpt: "Análisis de la Sentencia 132/2024: Cómo una relación puede ser legalmente reconocida incluso si existía un matrimonio previo no disuelto, bajo el principio de primacía de la realidad.",
    date: "27 Aug, 2024",
    author: "Abg. Angel Perez",
    category: "Derecho de Familia",
    icon: Heart,
    readTime: "11 min",
    sections: [
      {
        type: "paragraph",
        content: "El Tribunal Supremo de Justicia ha dado un paso evolutivo en la protección de la familia. En una decisión reciente (Sentencia N° 132, mayo de 2024), la Sala de Casación Social reconoció una relación que transitó por dos estados legales distintos sin perder su continuidad."
      },
      {
        type: "heading",
        content: "¿Qué es una Unión Concubinaria Putativa?",
        title: "I. La Buena Fe ante el Impedimento"
      },
      {
        type: "paragraph",
        content: "Ocurre cuando una de las personas convive con otra ignorando que existe un impedimento legal (como un matrimonio no disuelto). Si la pareja actúa de buena fe y la comunidad los percibe como pareja estable, la ley protege esa unión."
      },
      {
        type: "quote",
        content: "La primacía de la realidad obliga a los jueces a buscar la verdad sobre las formas; si la convivencia fue pública y notoria, los derechos deben ser reconocidos."
      },
      {
        type: "heading",
        content: "El Tránsito a la Unión Ordinaria",
        title: "II. La Disolución del Vínculo Previo"
      },
      {
        type: "paragraph",
        content: "En el caso analizado, el ciudadano estaba casado pero separado de hecho por 20 años. La unión con su nueva pareja fue 'Putativa' mientras duró el matrimonio, y se convirtió en 'Ordinaria' automáticamente el día que se ejecutó su sentencia de divorcio."
      },
      {
        type: "heading",
        content: "La Primacía de la Realidad",
        title: "III. Verdad sobre Apariencia"
      },
      {
        type: "paragraph",
        content: "La Sala enfatizó que el sistema de justicia ya no se limita a revisar documentos fríos. Si los testigos, las constancias de residencia y el trato social demuestran que durante años existió un hogar común, el juez debe declarar la existencia de la Unión Estable de Hecho."
      },
      {
        type: "law-article",
        title: "Marco Legal",
        content: "Art. 77 de la CRBV: Las uniones estables de hecho entre un hombre y una mujer que cumplan los requisitos establecidos en la ley producirán los mismos efectos que el matrimonio."
      },
      {
        type: "heading",
        content: "Conclusiones del Caso Badenas (2024)",
        title: "IV. Justicia para el Conviviente Supérstite"
      },
      {
        type: "paragraph",
        content: "El fallo otorgó reconocimiento total desde 2015 hasta 2021, permitiendo a la pareja sobreviviente acceder a sus derechos sucesorales y patrimoniales, a pesar de que el fallecido legalmente estuvo casado durante los primeros 5 años de la unión."
      },
      {
        type: "list",
        content: [
          "La buena fe de quien desconoce el matrimonio previo es clave.",
          "La separación de hecho prolongada del matrimonio anterior facilita el reconocimiento.",
          "La transición de putativa a ordinaria no rompe la antigüedad de la unión.",
          "Prevalece la realidad cotidiana sobre el estado civil formal del registro."
        ]
      }
    ]
  },
  {
    id: "23",
    slug: "el-voto-asistido-venezuela",
    title: "Voto Asistido: Protección al Elector vs Control Político",
    excerpt: "Conoce los límites legales del voto asistido. Quiénes califican, cuáles son los requisitos del acompañante y qué dice la ley para evitar la coacción electoral.",
    date: "03 Jan, 2022",
    author: "Abg. Angel Perez",
    category: "Derecho Electoral",
    icon: BookOpen,
    readTime: "7 min",
    sections: [
      {
        type: "paragraph",
        content: "El sufragio es un acto individual y secreto. Sin embargo, la ley venezolana prevé el 'voto asistido' como un mecanismo de inclusión para garantizar que todos puedan ejercer su derecho, bajo reglas de control muy estrictas para evitar abusos."
      },
      {
        type: "heading",
        content: "¿Quiénes pueden ser asistidos?",
        title: "I. Las Excepciones Legales"
      },
      {
        type: "paragraph",
        content: "No cualquier persona puede solicitar acompañamiento. Según la Ley Orgánica de Procesos Electorales (LOPE), solo califican:"
      },
      {
        type: "list",
        content: [
          "Personas analfabetas: Debe constar esta condición en su Cédula de Identidad.",
          "Personas con discapacidad: Si no es evidente, debe demostrarse con certificado médico.",
          "Personas de edad avanzada: Según la OMS, se considera desde los 60 años en adelante."
        ]
      },
      {
        type: "heading",
        content: "La Regla de Oro: Solo Una Vez",
        title: "II. Límites al Acompañante"
      },
      {
        type: "paragraph",
        content: "Para evitar que el voto asistido se convierta en una herramienta de 'carruaje' o control electoral, la ley impone un límite infranqueable para la persona de confianza:"
      },
      {
        type: "quote",
        content: "Ninguna persona podrá ser acompañante de un elector por más de una vez en un proceso electoral."
      },
      {
        type: "heading",
        content: "Registro y Control en Mesa",
        title: "III. El Registro de Acompañantes"
      },
      {
        type: "paragraph",
        content: "Todo voto asistido debe quedar asentado en el 'Registro de Acompañantes'. Allí se identifica plenamente tanto al elector como a su acompañante de confianza. El secreto del voto debe preservarse incluso en la cámara de votación."
      },
      {
        type: "law-article",
        title: "Ley Orgánica de Procesos Electorales (Art. 128)",
        content: "Los electores ejercerán su derecho al voto en forma individual... los miembros de Mesa no permitirán que el elector esté acompañado, salvo analfabetas, invidentes, discapacitados y de edad avanzada."
      },
      {
        type: "heading",
        content: "Alerta Ciudadana",
        title: "IV. Contra la Coacción Electoral"
      },
      {
        type: "paragraph",
        content: "Los testigos de mesa tienen el deber de vigilar que no se imponga un acompañante al elector. El acompañante DEBE SER una persona de la elección y confianza del votante, nunca un funcionario de la mesa o un tercero asignado por grupos de control."
      }
    ]
  },
  {
    id: "24",
    slug: "capitulaciones-matrimoniales-patrimoniales-venezuela",
    title: "Capitulaciones: Autonomía de la Voluntad en el Matrimonio y Concubinato",
    excerpt: "La Sentencia 652/2021 cambió las reglas del juego: ahora las capitulaciones pueden firmarse durante el matrimonio y se extienden a las uniones estables de hecho.",
    date: "02 May, 2024",
    author: "Abg. Angel Perez",
    category: "Derecho de Familia",
    icon: Scale,
    readTime: "10 min",
    sections: [
      {
        type: "paragraph",
        content: "Durante décadas, el Código Civil venezolano impuso un régimen rígido donde las capitulaciones solo podían firmarse antes de la boda. La histórica Sentencia N° 0652/2021 de la Sala Constitucional ha modernizado este esquema, otorgando primacía a la voluntad de la pareja."
      },
      {
        type: "heading",
        content: "El Nuevo Orden Patrimonial",
        title: "I. De lo Supletorio a lo Principal"
      },
      {
        type: "paragraph",
        content: "Anteriormente, la comunidad de gananciales era la norma. Ahora, las Capitulaciones Matrimoniales se consideran el régimen patrimonial 'principal y ordinario'. Si no hay acuerdo, entonces (y solo entonces) se aplica supletoriamente la comunidad de bienes."
      },
      {
        type: "heading",
        content: "¿Cuándo se pueden firmar?",
        title: "II. Flexibilidad y Reformas"
      },
      {
        type: "paragraph",
        content: "A diferencia del sistema anterior, ahora es posible:"
      },
      {
        type: "list",
        content: [
          "Celebrarlas ANTES o DURANTE el matrimonio.",
          "Reformarlas o sustituirlas cada cinco (5) años.",
          "Revocarlas de mutuo acuerdo para volver al régimen de comunidad de bienes.",
          "No tienen efecto retroactivo: siempre rigen hacia el futuro desde su registro."
        ]
      },
      {
        type: "heading",
        content: "Capitulaciones en el Concubinato",
        title: "III. Justicia para las Uniones Estables"
      },
      {
        type: "paragraph",
        content: "Por analogía, el TSJ extendió este derecho a los concubinos. Las parejas en Unión Estable de Hecho pueden ahora firmar 'Capitulaciones Patrimoniales', debiendo indicar expresamente la fecha de inicio de su relación."
      },
      {
        type: "quote",
        content: "En ausencia de capitulaciones patrimoniales en el concubinato, se presume la comunidad de bienes salvo prueba en contrario."
      },
      {
        type: "heading",
        content: "Requisitos de Publicidad",
        title: "IV. Procedimiento para Modificaciones"
      },
      {
        type: "paragraph",
        content: "Modificar las capitulaciones no es un acto privado absoluto. Para salvaguardar derechos de terceros, las partes deben publicar el nuevo documento tres veces con intervalos de 10 días en un periódico antes de acudir al Registro Civil."
      },
      {
        type: "law-article",
        title: "Opinión Crítica del Autor",
        content: "Aunque esta evolución protege la autonomía de la voluntad, preocupa la tendencia de la Sala Constitucional de actuar como legislador, 'reescribiendo' leyes que deberían ser modificadas por la Asamblea Nacional, lo que genera debates sobre la seguridad jurídica y la separación de poderes."
      }
    ]
  },
  {
    id: "25",
    slug: "formalizacion-casacion-medios-telematicos",
    title: "FORMALIZACIÓN DEL RECURSO DE CASACIÓN MEDIANTE EL USO DE MEDIOS TELEMÁTICO",
    excerpt: "Digitalización de los recursos extraordinarios ante el TSJ.",
    date: "08 Feb, 2024",
    author: "Abg. Angel Perez",
    category: "Derecho Procesal Digital",
    icon: Gavel,
    readTime: "10 min",
    sections: []
  },
  {
    id: "26",
    slug: "ley-del-adulto-mayor-venezuela",
    title: "Ley del Adulto Mayor: Dignidad, Autonomía y Buen Vivir",
    excerpt: "Guía sobre la Ley Funcional para la Atención del Adulto Mayor (2021). Conoce sus derechos a la autonomía, la no discriminación y la participación activa en la sociedad.",
    date: "16 Jan, 2024",
    author: "Abg. Angel Perez",
    category: "Derechos Humanos",
    icon: ShieldCheck,
    readTime: "9 min",
    sections: [
      {
        type: "paragraph",
        content: "La Gaceta Oficial N° 6.641 (septiembre de 2021) marcó un hito con la publicación de la Ley Orgánica para la Atención y Desarrollo Integral de las Personas Adultas Mayores. Esta norma busca saldar una deuda histórica, protegiendo a quienes han dedicado su vida a la construcción del país."
      },
      {
        type: "heading",
        content: "¿Quiénes son adultos mayores?",
        title: "I. El Umbral de la Protección"
      },
      {
        type: "paragraph",
        content: "Legalmente, en Venezuela, se considera Adulta Mayor a toda persona con edad igual o mayor a sesenta (60) años. A partir de este momento, el Estado, la familia y la sociedad tienen la obligación corresponsable de asegurar su bienestar."
      },
      {
        type: "heading",
        content: "Derecho a la Autonomía Personal",
        title: "II. Independencia y Libertad de Decisión"
      },
      {
        type: "paragraph",
        content: "La ley rompe con el modelo asistencialista para enfocarse en la autonomía. El adulto mayor tiene derecho a elegir dónde y con quién vivir, y a que se respete su privacidad y su libre sexualidad."
      },
      {
        type: "list",
        content: [
          "Respeto a la toma de decisiones y actos jurídicos conscientes.",
          "Libertad para elegir su lugar de residencia sin ser obligado a sistemas de vida específicos.",
          "Derecho a la privacidad en sus intereses, deseos y estilo de vida.",
          "Garantía de accesibilidad física en espacios urbanos y públicos."
        ]
      },
      {
        type: "heading",
        content: "No Discriminación y Buen Vivir",
        title: "III. Igualdad ante el Envejecimiento"
      },
      {
        type: "paragraph",
        content: "El Artículo 5 prohíbe taxativamente la discriminación fundada en la edad. El envejecimiento debe ser saludable, activo, digno y, sobre todo, feliz. Para ello, se promueven actividades intergeneracionales que fortalezcan la solidaridad social."
      },
      {
        type: "quote",
        content: "El objeto de la Ley es asegurar el buen vivir, bienestar y calidad de vida de los adultos mayores, reconociendo su autonomía y libre desenvolvimiento de la personalidad."
      },
      {
        type: "heading",
        content: "Asistencia y Apoyo Comunitario",
        title: "IV. Obligaciones del Estado y la Familia"
      },
      {
        type: "paragraph",
        content: "La ley ordena la creación de servicios de asistencia domiciliaria y residencial. El objetivo es evitar el aislamiento. Si existe una pérdida de capacidad física o intelectual, se debe brindar un tratamiento especializado que dignifique a la persona en lugar de marginarla."
      },
      {
        type: "paragraph",
        content: "En conclusión, la Ley del Adulto Mayor no es solo un conjunto de beneficios, sino un recordatorio de que la dignidad humana no tiene fecha de vencimiento."
      }
    ]
  },
  {
    id: "27",
    slug: "actuaciones-extraprocesales-judiciales-diferencias",
    title: "Trabajo de Abogado: ¿Actuaciones Judiciales o Extrajudiciales?",
    excerpt: "Análisis de la Sentencia 139/2023: Por qué las reuniones y estudios previos al juicio son considerados actos 'judiciales' aunque no ocurran dentro del expediente.",
    date: "13 Dec, 2023",
    author: "Abg. Angel Perez",
    category: "Derecho Procesal",
    icon: FileText,
    readTime: "10 min",
    sections: [
      {
        type: "paragraph",
        content: "En el mundo del litigio, existe una frontera a menudo difusa entre lo que sucede dentro del tribunal y el trabajo que el abogado realiza fuera de él. La Sentencia N° 139 (abril de 2023) de la Sala de Casación Penal clarifica esta distinción con un enfoque en la realidad del ejercicio profesional."
      },
      {
        type: "heading",
        content: "Definiendo los conceptos",
        title: "I. Judicial, Extraprocesal y Extrajudicial"
      },
      {
        type: "paragraph",
        content: "Es común confundir estos términos, pero la jurisprudencia del TSJ establece diferencias cruciales para la estimación de honorarios y la validez de los actos:"
      },
      {
        type: "list",
        content: [
          "Actuaciones Judiciales: Actos que materializan la confrontación litigiosa una vez trabada la relación procesal.",
          "Actuaciones Extraprocesales: Son aquellas que NO se realizan físicamente en el expediente/cuaderno del juicio, pero son indispensables para el mismo.",
          "Actuaciones Extrajudiciales: Gestiones totalmente ajenas al proceso judicial y su preparación."
        ]
      },
      {
        type: "heading",
        content: "La Regla de la Indispensabilidad",
        title: "II. ¿Por qué una reunión puede ser 'Judicial'?"
      },
      {
        type: "paragraph",
        content: "El criterio ratificado por las Salas Civil y Penal es que toda actividad necesaria para la existencia del juicio o la mejor defensa del patrocinado debe catalogarse como 'Judicial', incluso si se consuma extra-proceso."
      },
      {
        type: "quote",
        content: "Todas las operaciones necesarias para la instauración del juicio o para obtener una sentencia favorable son actuaciones judiciales, incluyendo el estudio de causas y reuniones con el representado."
      },
      {
        type: "heading",
        content: "Evolución de la Jurisprudencia",
        title: "III. De Rodríguez García (2000) a Cermeño (2023)"
      },
      {
        type: "paragraph",
        content: "Desde el año 2000, el TSJ ha mantenido una línea coherente: el trabajo del abogado no se limita a escribir en un papel sellado por el juzgado. Las conferencias previas para preparar el libelo o las reuniones para buscar una autocomposición (acuerdo) conservan su carácter judicial."
      },
      {
        type: "law-article",
        title: "Punto Clave",
        content: "Las actuaciones realizadas antes del juicio con miras a preparar el proceso no son extrajudiciales sino extraprocesales necesarias para la existencia del juicio."
      },
      {
        type: "heading",
        content: "Conclusión",
        title: "IV. Relevancia para los Honorarios"
      },
      {
        type: "paragraph",
        content: "Esta distinción es fundamental al momento de tasar honorarios profesionales. Un abogado no solo cobra por lo que firma en el tribunal, sino por toda la arquitectura técnica y estratégica que permite que el juicio llegue a buen puerto."
      }
    ]
  },
  {
    id: "28",
    slug: "improcedente-honorarios-moneda-extranjera-sin-contrato",
    title: "Honorarios en Divisas: ¿Cuándo es legal cobrarlos?",
    excerpt: "Análisis de la Sentencia 139/2023: El TSJ prohíbe estimar honorarios en dólares si no existe un contrato previo que lo avale, advirtiendo incluso sobre el delito de usura.",
    date: "02 Dec, 2023",
    author: "Abg. Angel Perez",
    category: "Ética y Honorarios",
    icon: Gavel,
    readTime: "11 min",
    sections: [
      {
        type: "paragraph",
        content: "En una economía dolarizada de facto, muchos profesionales asumen que sus honorarios pueden indexarse automáticamente a la moneda extranjera. Sin embargo, la Sala de Casación Penal (Sentencia N° 139, 2023) ha ratificado un criterio estricto que todo abogado y cliente debe conocer para evitar juicios fallidos."
      },
      {
        type: "heading",
        content: "La fuente de la obligación",
        title: "I. Contractual vs. Legal"
      },
      {
        type: "paragraph",
        content: "El TSJ distingue entre dos formas de nacimiento de la deuda de honorarios:"
      },
      {
        type: "list",
        content: [
          "Contractual: Existe un acuerdo escrito donde el cliente acepta pagar en divisas (Art. 128 Ley BCV).",
          "Legal/No Contractual: La obligación de pagar nace directamente de la ley o una sentencia (costos y costas). En este caso, la deuda DEBE ser en Bolívares."
        ]
      },
      {
        type: "heading",
        content: "El Riesgo de Usura",
        title: "II. Una advertencia disciplinaria"
      },
      {
        type: "paragraph",
        content: "Pretender el cobro de honorarios en moneda extranjera sin base legal no es solo improcedente. La Sala advierte que podría configurar el delito de usura si el diferencial cambiario pretendido excede los límites legales de las tasas de interés."
      },
      {
        type: "quote",
        content: "La pretensión de cobro en moneda extranjera sin contrato previo presumiblemente violenta disposiciones de orden público y la prohibición de la usura."
      },
      {
        type: "heading",
        content: "¿Cómo proteger el valor de los honorarios?",
        title: "III. La Indexación Judicial"
      },
      {
        type: "paragraph",
        content: "Ante la falta de contrato, el mecanismo legal de protección contra la inflación no es el dólar, sino la indexación. Esta se calcula desde la admisión de la demanda hasta el pago efectivo, utilizando el Índice Nacional de Precios al Consumidor (INPC) publicado por el Banco Central de Venezuela."
      },
      {
        type: "law-article",
        title: "Criterio Vinculante",
        content: "Si no consta en autos un documento contractual donde se pactó el pago en moneda extranjera, la estimación bajo ese signo monetario será declarada improcedente de pleno derecho."
      },
      {
        type: "heading",
        content: "Recomendación Profesional",
        title: "IV. La necesidad del contrato escrito"
      },
      {
        type: "paragraph",
        content: "Para que un abogado pueda cobrar válidamente en dólares, es indispensable que exista un contrato de servicios profesionales firmado *antes o al momento* de iniciar la labor, donde se determine claramente la divisa utilizada. Sin este documento, la única vía de cobro es la moneda nacional con el reajuste de la indexación judicial."
      }
    ]
  },
  {
    id: "29",
    slug: "contestacion-demanda-cuestiones-previas-procedimiento-ordinario",
    title: "Contestación y Cuestiones Previas: El Derecho a la Defensa sobre la Forma",
    excerpt: "Análisis de la Sentencia 547/2023: ¿Qué sucede si el demandado opone cuestiones previas y contesta la demanda en un mismo escrito? El TSJ aclara el destino de este error procesal.",
    date: "05 Oct, 2023",
    author: "Abg. Angel Perez",
    category: "Derecho Procesal",
    icon: FileText,
    readTime: "10 min",
    sections: [
      {
        type: "paragraph",
        content: "El Código de Procedimiento Civil (CPC) es claro en su letra: el demandado puede oponer cuestiones previas 'en vez de' contestar la demanda. Sin embargo, la práctica forense suele presentar situaciones híbridas que han obligado al TSJ a fijar criterios garantistas."
      },
      {
        type: "heading",
        content: "La Regla Tradicional",
        title: "I. El Dilema del Art. 346"
      },
      {
        type: "paragraph",
        content: "Según los artículos 346 y 358 del CPC, el demandado tiene dos caminos excluyentes. Si opta por las cuestiones previas (mecanismos de saneamiento), el lapso para la contestar el fondo queda suspendido. Hacer ambas cosas 'al mismo tiempo' se consideraba técnicamente incorrecto."
      },
      {
        type: "heading",
        content: "La Solución del TSJ ante el Error",
        title: "II. ¿Qué hacer si se incluyen ambos en un mismo escrito?"
      },
      {
        type: "paragraph",
        content: "Con la Sentencia N° 000547 (agosto de 2023), la Sala de Casación Civil ratifica el criterio de la Sala Constitucional: si el demandado contesta el fondo y opone cuestiones previas en el mismo documento, las cuestiones previas de deben tener como NO interpuestas."
      },
      {
        type: "quote",
        content: "Al presentar ambos en un mismo escrito, el juez debe dar prioridad a la contestación al fondo y descartar las cuestiones previas por ser incompatibles con la voluntad de debatir el fondo."
      },
      {
        type: "heading",
        content: "La 'Voluntad de Contestar' como Norma Suprema",
        title: "III. Tutela Judicial Efectiva"
      },
      {
        type: "paragraph",
        content: "La Sala va más allá y defiende la conducta de los jueces que deciden conocer el fondo. El principio es simple: ante cualquier duda sobre la preclusión del lapso, la voluntad expresa de la parte de defenderse y contestar debe imperar sobre el formalismo legal."
      },
      {
        type: "law-article",
        title: "Criterio de la Sala",
        content: "El término preclusivo debe interpretarse en el sentido que permita la recepción de la contestación de la demanda. No se puede censurar una conducta judicial que garantiza el derecho a la defensa."
      },
      {
        type: "heading",
        content: "Conclusión Práctica",
        title: "IV. Recomendación para Abogados"
      },
      {
        type: "paragraph",
        content: "Aunque el TSJ es garantista, la recomendación técnica sigue siendo respetar la secuencia del CPC. Si existe una falta de jurisdicción o un defecto de forma real, use las cuestiones previas 'en vez de' contestar. Si prefiere ir directo al debate, conteste el fondo. Incurrir en el uso de ambos solo pondrá en riesgo sus mecanismos de defensa previa."
      }
    ]
  },
  {
    id: "30",
    slug: "no-necesaria-autorizacion-concubina-venta-inmueble-comunidad",
    title: "Venta de Inmuebles en el Concubinato: ¿Es necesaria la autorización de la pareja?",
    excerpt: "Análisis de la Sentencia 0051/2023: El TSJ aclara por qué no se requiere el consentimiento de la concubina para vender bienes comunes y cuál es la vía legal para reclamar daños.",
    date: "20 Sep, 2023",
    author: "Abg. Angel Perez",
    category: "Derecho Inmobiliario",
    icon: Landmark,
    readTime: "11 min",
    sections: [
      {
        type: "paragraph",
        content: "Existe una creencia común de que las uniones estables de hecho funcionan exactamente igual que el matrimonio en materia patrimonial. Sin embargo, la Sala Constitucional (Sentencia N° 0051, marzo de 2023) ha desmitificado la aplicación del artículo 168 del Código Civil en el concubinato."
      },
      {
        type: "heading",
        content: "Concepto Jurídico vs. Estado Civil",
        title: "I. El Problema de la Publicidad"
      },
      {
        type: "paragraph",
        content: "A diferencia del matrimonio, el concubinato es un concepto jurídico y no un estado civil formal. Para los terceros compradores, suele ser imposible conocer la existencia de la unión o qué bienes forman parte de la comunidad, lo que pone en riesgo la seguridad jurídica de las transacciones."
      },
      {
        type: "heading",
        content: "¿Se aplica el Art. 168 del Código Civil?",
        title: "II. El Veto que no Existe"
      },
      {
        type: "paragraph",
        content: "El artículo 168 exige el consentimiento de ambos cónyuges para enajenar bienes comunes. La Sala dictaminó que esta restricción es EXCLUSIVA de la comunidad conyugal. En el concubinato, no hay mandato legal que obligue a prestar consentimiento para trasladar la propiedad."
      },
      {
        type: "quote",
        content: "Pretender aplicar la nulidad de venta por falta de consentimiento en una relación de hecho no es factible. La ley no obliga a dar consentimiento en la comunidad concubinaria para enajenar bienes."
      },
      {
        type: "heading",
        content: "El Fraude Concubinario",
        title: "III. La Vía del Resarcimiento"
      },
      {
        type: "paragraph",
        content: "Que no se requiera autorización no significa que el concubino pueda actuar con dolo. Si la venta es fraudulenta y daña el patrimonio común, la concubina afectada NO debe pedir la nulidad de la venta, sino una acción de indemnización por daños y perjuicios (Art. 1185 y 1196 CC)."
      },
      {
        type: "law-article",
        title: "Criterio Vinculante",
        content: "El concubino vendedor es responsable civilmente por los daños materiales causados al otro. La acción correspondiente es la de daños y perjuicios, no la nulidad del contrato de venta con el tercero."
      },
      {
        type: "heading",
        content: "Falta de Legitimación",
        title: "IV. Relevancia de la Declaración Judicial"
      },
      {
        type: "paragraph",
        content: "En el caso analizado, la demanda de nulidad fue rechazada también porque para el momento de la venta el concubinato no había sido declarado judicialmente. Sin una sentencia firme de unión estable, no existe legitimación para reclamar derechos sobre la comunidad ante terceros de buena fe."
      },
      {
        type: "paragraph",
        content: "Este fallo protege la celeridad y seguridad del mercado inmobiliario, diferenciando claramente las cargas formales del matrimonio de las realidades de las relaciones de hecho."
      }
    ]
  },
  {
    id: "31",
    slug: "inadmisibilidad-e-improponibilidad-derecho-venezuela",
    title: "Inadmisibilidad e Improponibilidad: ¿Un neologismo jurídico innecesario?",
    excerpt: "Análisis de la Sentencia 28/2023: El TSJ defiende el término 'improponible' para pretensiones que no existen en derecho, mientras la doctrina critica su lógica lingüística.",
    date: "07 Sep, 2023",
    author: "Abg. Angel Perez",
    category: "Derecho Procesal",
    icon: FileText,
    readTime: "12 min",
    sections: [
      {
        type: "paragraph",
        content: "La terminología jurídica a menudo se convierte en un campo de batalla intelectual. Con la Sentencia N° 28 (junio de 2023), la Sala Plena del TSJ ratifica el uso del vocablo 'improponible' para cerrar las puertas a ciertos recursos, desatando una fuerte crítica doctrinal y lingüística."
      },
      {
        type: "heading",
        content: "La Diferencia Técnica",
        title: "I. Inadmisibilidad vs. Improponibilidad"
      },
      {
        type: "paragraph",
        content: "Para el máximo tribunal, la distinción es clara:"
      },
      {
        type: "list",
        content: [
          "Inadmisibilidad: Se examina si el caso particular cumple los requisitos para ser satisfecho por un juez.",
          "Improponibilidad Manifiesta: La pretensión, de manera objetiva, carece de toda posibilidad de ser tutelada por el ordenamiento jurídico. No tiene fundamento legal que admita su interposición."
        ]
      },
      {
        type: "heading",
        content: "El Caso de la Sala Constitucional",
        title: "II. Una decisión sin retorno"
      },
      {
        type: "paragraph",
        content: "El ejemplo clásico de improponibilidad es el intento de revisar una decisión de la Sala Constitucional. Dado que no existe un medio procesal ni una instancia superior para controlar sus fallos, cualquier solicitud en este sentido debe ser rechazada de plano por ser 'improponible en derecho'."
      },
      {
        type: "quote",
        content: "No es posible declarar la inadmisibilidad de una petición que no puede ser propuesta en la esfera jurídica. Lo improponible es el concepto que se ajusta en derecho."
      },
      {
        type: "heading",
        content: "La Crítica Lingüística: ¿Un solemne disparate?",
        title: "III. El debate de Alexis Rodríguez Márquez"
      },
      {
        type: "paragraph",
        content: "El reputado lingüista venezolano ha criticado duramente el término, calificándolo de neologismo inventado. Su argumento es lógico: si 'improponible' es lo que no se puede proponer, ¿cómo puede declararse así algo que ya ha sido propuesto y está en manos del juez? Lo califica como una 'aporía' idiomática."
      },
      {
        type: "law-article",
        title: "Opinión del Autor",
        content: "Coincidimos con la doctrina: lo lógico y establecido en la Ley es la Inadmisibilidad. El término 'improponible' no existe en nuestra ley positiva ni en el diccionario de la RAE. Magistrados sabios en derecho deben ser también guardianes del idioma."
      },
      {
        type: "heading",
        content: "Conclusión",
        title: "IV. Tutela Judicial y Criterio Pacifico"
      },
      {
        type: "paragraph",
        content: "A pesar de las críticas, el TSJ sostiene que declarar la improponibilidad no lesiona la tutela judicial efectiva, ya que se le ofrece al ciudadano una respuesta motivada sobre la inexistencia legal de su pretensión. Es hoy un criterio reiterado y pacífico de todas las Salas."
      }
    ]
  },
  {
    id: "32",
    slug: "abogados-deber-abstenerse-ofender-poder-judicial",
    title: "El Deber de Cortesía Forense: ¿Crítica Jurídica u Ofensa a la Majestad?",
    excerpt: "Análisis de la Sentencia 28/2023: El TSJ sanciona con multas a abogados por calificar fallos como 'adefesios', abriendo un debate sobre los límites de la ética y la libertad de crítica.",
    date: "22 Aug, 2023",
    author: "Abg. Angel Perez",
    category: "Ética Profesional",
    icon: ShieldCheck,
    readTime: "9 min",
    sections: [
      {
        type: "paragraph",
        content: "La abogacía es el arte de la persuasión, pero también del respeto. La Sala Plena del TSJ (Sentencia N° 28, 2023) ha recordado de forma contundente que la vehemencia en la defensa no justifica el irrespeto, castigando con multas el uso de términos que considera lesivos a la 'majestad' del Poder Judicial."
      },
      {
        type: "heading",
        content: "La Sanción de la Sala Plena",
        title: "I. El Costo de la 'Aporía' Jurídica"
      },
      {
        type: "paragraph",
        content: "Dos profesionales del derecho fueron sancionados con multas equivalentes a 50 veces el tipo de cambio oficial de la moneda de mayor valor (BCV). El motivo: calificar una sentencia como 'aberrante adefesio jurídico' en un escrito de revisión."
      },
      {
        type: "heading",
        content: "El Deber de Decoro",
        title: "II. Una Responsabilidad Inexorable"
      },
      {
        type: "paragraph",
        content: "El TSJ sostiene que es un deber ineludible del abogado mantener una actitud objetiva y respetuosa. Deben abstenerse de realizar actos o utilizar expresiones que atenten contra la investidura de los órganos judiciales, manteniendo siempre el decoro en sus peticiones."
      },
      {
        type: "quote",
        content: "La conducta contraria a la ética y al respeto de la majestad del Poder Judicial debe ser sancionada para preservar el orden y la dignidad del sistema de justicia."
      },
      {
        type: "heading",
        content: "¿Qué dice el Código de Ética?",
        title: "III. El Límite del Artículo 48"
      },
      {
        type: "paragraph",
        content: "El Artículo 48 del Código de Ética Profesional faculta al abogado para criticar instituciones y actos de jueces si considera que no se ciñeron a la ley. No obstante, impone una condición: el uso exclusivo de calificativos empleados por la ley o autorizados por la doctrina."
      },
      {
        type: "law-article",
        title: "Artículo 48 - Código de Ética",
        content: "El abogado podrá criticar los actos de los jueces cuando éstos no se hubiesen ceñido a las leyes; pero solo utilizará los calificativos empleados por las leyes o autorizados por la doctrina."
      },
      {
        type: "heading",
        content: "La Opinión del Autor",
        title: "IV. La Incertidumbre de la Sensibilidad"
      },
      {
        type: "paragraph",
        content: "Esta sentencia revela un alto grado de sensibilidad en los magistrados. Lo preocupante es la ausencia de parámetros claros: al no existir una lista de términos prohibidos, los abogados quedan a merced de la interpretación subjetiva de cada juez sobre lo que considera 'ofensivo'."
      },
      {
        type: "paragraph",
        content: "En conclusión, el éxito de una causa depende tanto del rigor técnico como de la elegancia forense. Un lenguaje sobrio protege no solo la majestad del tribunal, sino también la eficacia de la defensa."
      }
    ]
  },
  {
    id: "33",
    slug: "desalojo-local-comercial-deterioro-causales",
    title: "Desalojo de Local Comercial: Cuando el deterioro supera el uso normal",
    excerpt: "Análisis de la Sentencia 192/2023: El TSJ ratifica que el descuido manifiesto y la falta de mantenimiento sanitario son causales legítimas para la terminación del contrato.",
    date: "31 Jul, 2023",
    author: "Abg. Angel Perez",
    category: "Derecho Inmobiliario",
    icon: Landmark,
    readTime: "10 min",
    sections: [
      {
        type: "paragraph",
        content: "En el arrendamiento comercial, el inquilino no solo tiene el deber de pagar el canon, sino también el de preservar la integridad del inmueble. La Sentencia N° 000192 (mayo de 2023) de la Sala de Casación Civil establece un estándar claro sobre qué niveles de descuido justifican un desalojo inmediato."
      },
      {
        type: "heading",
        content: "El Marco Legal",
        title: "I. El Artículo 40, Literal C"
      },
      {
        type: "paragraph",
        content: "La Ley de Regulación del Arrendamiento Inmobiliario para Uso Comercial es taxativa: el arrendador puede solicitar el desalojo si el arrendatario ocasiona deterioros mayores a los provenientes del uso normal, o si realiza reformas no autorizadas."
      },
      {
        type: "heading",
        content: "La Prueba del Deterioro",
        title: "II. Más allá del uso normal"
      },
      {
        type: "paragraph",
        content: "En este caso, el desalojo fue declarado con lugar tras demostrarse, mediante inspecciones judiciales, que el local presentaba daños graves en techos y sanitarios. No se trataba de desgaste por el tiempo, sino de un estado deplorable de conservación."
      },
      {
        type: "quote",
        content: "El deterioro del local quedó probado con la inspección judicial extra litem y la inspección sanitaria. El estado deplorable del inmueble no deviene del uso normal, sino de un manejo imprudente y negligente."
      },
      {
        type: "heading",
        content: "La Fuerza del Documento Público",
        title: "III. Inspección Sanitaria como Prueba Reina"
      },
      {
        type: "paragraph",
        content: "Un aspecto clave de este fallo es la relevancia otorgada al acta de inspección de la Controlaría Sanitaria. Al ser emitida por funcionarios del Ministerio de Salud, ostenta plena fuerza probatoria (Art. 1.360 Código Civil), documentando no solo daños físicos sino riesgos de insalubridad."
      },
      {
        type: "law-article",
        title: "Criterio de la Sala",
        content: "La falta absoluta y manifiesta de mantenimiento configura el supuesto de hecho para el desalojo. El abandono comprobado del local es incompatible con la continuidad del nexo arrendaticio."
      },
      {
        type: "heading",
        content: "Conclusión",
        title: "IV. La Responsabilidad del Arrendatario"
      },
      {
        type: "paragraph",
        content: "El arrendatario comercial debe entender que su derecho de uso está limitado por el respeto a la propiedad ajena. El descuido negligente que comprometa la estructura o la sanidad del inmueble es razón suficiente para que el sistema de justicia restituya la posesión al propietario."
      }
    ]
  },
  {
    id: "34",
    slug: "sumision-obediencia-ciega-copias-simples-cpc",
    title: "Sumisión u Obediencia Ciega: El laberinto de las copias en tribunales",
    excerpt: "Crítica a la Circular 13-2018 de Barinas: ¿Por qué exigir autorización para copias simples viola el artículo 190 del CPC y retrasa la justicia?",
    date: "14 Jul, 2023",
    author: "Abg. Angel Perez",
    category: "Derecho Procesal",
    icon: BookOpen,
    readTime: "8 min",
    sections: [
      {
        type: "paragraph",
        content: "En el ejercicio del derecho, a veces las normas administrativas chocan frontalmente con las leyes adjetivas. Un ejemplo crítico es la conducta de 'obediencia ciega' ante circulares que imponen requisitos inexistentes en el Código de Procedimiento Civil (CPC)."
      },
      {
        type: "heading",
        content: "La Circular N° 13-2018",
        title: "I. El Obstáculo Administrativo"
      },
      {
        type: "paragraph",
        content: "Desde 2018, en la Circunscripción Judicial de Barinas, se ha normalizado la exigencia de solicitar por escrito y esperar la aprobación del juez para obtener copias simples de los expedientes. Esta práctica, emanada de una circular rectora, se ha convertido en una barrera para la celeridad procesal."
      },
      {
        type: "heading",
        content: "Lo que realmente dice la Ley",
        title: "II. El Artículo 190 del CPC"
      },
      {
        type: "paragraph",
        content: "La norma es taxativa y no admite interpretaciones restrictivas por parte de funcionarios administrativos. El acceso a las actas es un derecho de transparencia y control social."
      },
      {
        type: "law-article",
        title: "Artículo 190 - Código de Procedimiento Civil",
        content: "Cualquiera persona puede imponerse de los actos que se realicen en los Tribunales y tomar de ellos las copias simples que quiera, sin necesidad de autorización del Juez."
      },
      {
        type: "quote",
        content: "La exigencia de autorización judicial para copias simples contraviene los principios de celeridad, simplificación y eficacia de los trámites procesales."
      },
      {
        type: "heading",
        content: "El Perjuicio a la Defensa",
        title: "III. Retardo Injustificado"
      },
      {
        type: "paragraph",
        content: "Imponer un trámite escrito para lo que la ley permite de forma directa genera un retardo innecesario. Los abogados necesitan imponerse de los asuntos de manera inmediata para preparar defensas oportunas. Cualquier demora administrativa en este punto es un golpe al derecho a la defensa y a la tutela efectiva."
      },
      {
        type: "heading",
        content: "Conclusión",
        title: "IV. Celeridad vs. Burocracia"
      },
      {
        type: "paragraph",
        content: "El cumplimiento de circulares que ignoran la Constitución y el ordenamiento jurídico denota un error inexcusable. La justicia no debe ser una carrera de obstáculos burocráticos, sino un sistema fluido donde la ley sea la única guía del procedimiento."
      }
    ]
  },
  {
    id: "35",
    slug: "validez-compraventa-inmueble-no-registrado-tsj",
    title: "Ventas de Inmuebles sin Registro: ¿Son realmente válidas ante la ley?",
    excerpt: "Análisis de la Sentencia 2022-000091: El TSJ ratifica que el registro no es requisito para la propiedad entre partes y terceros indiferentes, priorizando el consentimiento.",
    date: "11 Jul, 2023",
    author: "Abg. Angel Perez",
    category: "Derecho Civil",
    icon: Home,
    readTime: "12 min",
    sections: [
      {
        type: "paragraph",
        content: "En el mercado inmobiliario venezolano, persiste el debate sobre si un documento de compraventa autenticado (notariado) pero no protocolizado (registrado) transmite realmente la propiedad. La Sala de Casación Civil (Sentencia N° 2022-000091, marzo de 2023) ha fijado una postura clara que privilegia la voluntad de las partes."
      },
      {
        type: "heading",
        content: "El Consentimiento como Fuente de Propiedad",
        title: "I. El Perfeccionamiento del Contrato"
      },
      {
        type: "paragraph",
        content: "Contrario a la creencia popular de que 'quien no registra no es dueño', el TSJ establece que el derecho de propiedad se adquiere por el consentimiento legítimamente manifestado. El registro es una formalidad de publicidad, no un requisito existencial para el nexo entre comprador y vendedor."
      },
      {
        type: "heading",
        content: "¿A quién es oponible un documento no registrado?",
        title: "II. Terceros Interesados vs. Indiferentes"
      },
      {
        type: "paragraph",
        content: "El Artículo 1.924 del Código Civil establece que los documentos no registrados no tienen efecto contra 'terceros que hayan adquirido y conservado legalmente derechos sobre el inmueble'. Sin embargo, para los 'terceros indiferentes' (aquellos sin derechos previos sobre el bien), el documento autenticado es plenamente válido y oponible."
      },
      {
        type: "quote",
        content: "La omisión de la formalidad registral no apareja el no perfeccionamiento del contrato de venta ni la no transmisión de la propiedad. El adquirente puede invocar su titularidad frente a terceros indiferentes."
      },
      {
        type: "heading",
        content: "Evolución de la Jurisprudencia",
        title: "III. Del Formalismo de 2004 a la Realidad de 2023"
      },
      {
        type: "paragraph",
        content: "En el pasado (Sentencia de 2004), la Sala sostenía que el documento protocolizado era la 'prueba por excelencia'. Hoy, el criterio es más garantista: se reconoce que el documento autenticado surte efectos plenos entre las partes y es suficiente para acreditar la propiedad en juicios de partición o plusvalía."
      },
      {
        type: "law-article",
        title: "Tres Reglas de Oro del TSJ (2023)",
        content: "1) El contrato se perfecciona por la convención. 2) La propiedad se transmite con la firma autenticada. 3) El dueño puede hacer valer su derecho frente a terceros, salvo aquellos con derechos registrados previos."
      },
      {
        type: "heading",
        content: "Conclusión Práctica",
        title: "IV. La Protección del Adquirente"
      },
      {
        type: "paragraph",
        content: "Este criterio protege a miles de compradores que, por diversas razones administrativas, no han logrado protocolizar sus títulos. Si bien el registro sigue siendo el ideal para la seguridad jurídica absoluta, la ley reconoce que el dueño lo es por la fuerza del contrato y del pago, no meramente por un sello administrativo."
      }
    ]
  },
  {
    id: "36",
    slug: "nueva-competencia-tribunales-cuantia-resolucion-2023",
    title: "Nueva Competencia por la Cuantía: Del Bolívar a la Moneda de Mayor Valor",
    excerpt: "Guía sobre la Resolución 2023-0001: El TSJ redefine los límites entre Juzgados de Municipio y Primera Instancia utilizando el tipo de cambio del BCV como nueva unidad de medida.",
    date: "16 Jun, 2023",
    author: "Abg. Angel Perez",
    category: "Derecho Procesal",
    icon: Gavel,
    readTime: "11 min",
    sections: [
      {
        type: "paragraph",
        content: "La administración de justicia en Venezuela ha dado un giro técnico significativo con la Resolución N° 2023-0001 de la Sala Plena. Ante una economía que ha pulverizado el valor de la Unidad Tributaria, el TSJ ha adoptado la 'moneda de mayor valor' (según el BCV) como el nuevo termómetro para determinar qué juez debe conocer cada causa."
      },
      {
        type: "heading",
        content: "El Nuevo Mapa de Competencias",
        title: "I. Municipio vs. Primera Instancia"
      },
      {
        type: "paragraph",
        content: "La resolución establece una línea divisoria clara basada en el tipo de cambio oficial al momento de la interposición:"
      },
      {
        type: "list",
        content: [
          "Juzgados de Municipio: Conocen asuntos cuya cuantía NO EXCEDA de 3.000 veces la moneda de mayor valor.",
          "Juzgados de Primera Instancia: Conocen asuntos cuya cuantía EXCEDA de 3.000 veces la moneda de mayor valor."
        ]
      },
      {
        type: "heading",
        content: "Procedimientos Especiales: Breve y Oral",
        title: "II. Ajuste de Límites"
      },
      {
        type: "paragraph",
        content: "Los procedimientos que antes se regían por montos fijos en bolívares o unidades tributarias ahora se ajustan a la nueva métrica. Tanto el Procedimiento Breve (Art. 881 CPC) como el Procedimiento Oral (Art. 859 CPC) se tramitarán bajo estas vías siempre que la cuantía no exceda de 1.500 veces la moneda de mayor valor."
      },
      {
        type: "quote",
        content: "La adopción de la moneda de mayor valor busca equilibrar la carga procesal y garantizar un acceso eficiente a la jurisdicción frente a la realidad económica nacional."
      },
      {
        type: "heading",
        content: "Requisitos del Escrito Libelar",
        title: "III. El Deber del Abogado al Demandar"
      },
      {
        type: "paragraph",
        content: "A partir de la vigencia de esta resolución, no basta con estimar la demanda en bolívares. El libelo DEBE expresar obligatoriamente:"
      },
      {
        type: "list",
        content: [
          "La suma en Bolívares (conforme al CPC).",
          "El equivalente según el precio del día de la moneda de mayor valor (BCV) al momento de la presentación."
        ]
      },
      {
        type: "law-article",
        title: "Punto Crítico",
        content: "Esta modificación solo afecta a los asuntos nuevos presentados tras la entrada en vigencia de la resolución. Los casos en curso mantienen su trámite original sin alteraciones."
      },
      {
        type: "heading",
        content: "Análisis Crítico",
        title: "IV. La Realidad detrás de la Norma"
      },
      {
        type: "paragraph",
        content: "Aunque los considerandos hablan de 'crecimiento económico', la doctrina señala que esta medida es una respuesta directa a la devaluación que destruyó la Unidad Tributaria. Se trata de un mecanismo de indexación administrativa de la competencia para evitar que todos los casos terminen en los ya saturados juzgados de primera instancia."
      }
    ]
  },
  {
    id: "37",
    slug: "citacion-notificacion-telematica-sala-civil-2025",
    title: "Justicia Digital 2025: La Nueva Era de la Citación y Notificación Telemática",
    excerpt: "Análisis de la Ponencia Conjunta (Abril 2025): El TSJ establece los derechos y deberes digitales, priorizando el uso de correos y medios electrónicos sobre el papel.",
    date: "27 Apr, 2025",
    author: "Abg. Angel Perez",
    category: "Derecho Procesal Digital",
    icon: Gavel,
    readTime: "15 min",
    sections: [
      {
        type: "paragraph",
        content: "La justicia venezolana ha dado su paso definitivo hacia la era digital. Con la Ponencia Conjunta de la Sala de Casación Civil (abril de 2025), se establecen las pautas definitivas para la implementación del expediente digital y la comunicación telemática, transformando el proceso civil moderno."
      },
      {
        type: "heading",
        content: "Carta de Derechos Digitales",
        title: "I. Ciudadanía y Abogacía Conectada"
      },
      {
        type: "paragraph",
        content: "La Sala reconoce por primera vez un conjunto de derechos electrónicos fundamentales, entre los que destacan:"
      },
      {
        type: "list",
        content: [
          "Derecho a la información sobre canales oficiales de comunicación judicial.",
          "Derecho a elegir el medio electrónico para relacionarse con el tribunal.",
          "Derecho a conocer el estado del trámite en tiempo real vía web.",
          "Derecho a la conservación y seguridad de los documentos en formato electrónico."
        ]
      },
      {
        type: "heading",
        content: "Deberes del Abogado 2.0",
        title: "II. Registro y Actualización Obligatoria"
      },
      {
        type: "paragraph",
        content: "Ya no es opcional. Todo abogado debe registrarse en el Sistema de Gestión Judicial y mantener actualizados sus datos (correo, teléfono y domicilio). El incumplimiento de este deber inhabilita el uso de las TICs y las notificaciones seguirán surtiendo efecto en los datos anteriores."
      },
      {
        type: "quote",
        content: "Se establece la obligación inexcusable de adjuntar en cada libelo un correo electrónico y número telefónico móvil de AMBAS partes para garantizar la comunicación procesal."
      },
      {
        type: "heading",
        content: "El Nuevo Orden de Citaciones",
        title: "III. Del Correo Electrónico a los Edictos Web"
      },
      {
        type: "paragraph",
        content: "El sistema de comunicación procesal se redefine bajo una jerarquía tecnológica:"
      },
      {
        type: "list",
        content: [
          "Notificación electrónica: Vía correo, llamada o canales digitales idóneos (WhatsApp/otros).",
          "Citación Física: Por única vez en el domicilio si los medios electrónicos fallan.",
          "Carteles Digitales: La página web del TSJ y la Gaceta Judicial sustituyen definitivamente a los periódicos impresos para la publicación de edictos."
        ]
      },
      {
        type: "law-article",
        title: "Punto de Inflexión",
        content: "Se abandonan todos los criterios anteriores que colidan con esta decisión. La aplicación es inmediata y obligatoria para todos los Circuitos Judiciales Civiles del país."
      },
      {
        type: "heading",
        content: "Conclusión",
        title: "IV. Celeridad y Modernización"
      },
      {
        type: "paragraph",
        content: "Esta decisión administrativa de la Sala de Casación Civil no solo moderniza el Poder Judicial, sino que busca eliminar el retardo procesal derivado de las citaciones físicas infructuosas. La tecnología se convierte en el garante de la Tutela Judicial Efectiva en el siglo XXI."
      }
    ]
  },
  {
    id: "38",
    slug: "placeholder-proximo-articulo",
    title: "Próximamente: Nuevos Criterios Jurídicos",
    excerpt: "Estamos procesando nueva doctrina jurisprudencial para mantenerte actualizado.",
    date: "Mayo, 2025",
    author: "Abg. Angel Perez",
    category: "Actualidad",
    icon: BookOpen,
    readTime: "5 min",
    sections: []
  }
];
