import { LucideIcon, Scale, Heart, Gavel, ShieldAlert, Briefcase, Leaf, Landmark, ShieldCheck, Building, FileText, Home } from "lucide-react";

export interface ServiceDetail {
  title: string;
  icon: LucideIcon;
  intro: string;
  solutions: {
    title: string;
    items: string[];
  };
  whyChooseUs: {
    title: string;
    items: string[];
  };
}

export const servicesData: Record<string, ServiceDetail> = {
  "Derecho Civil": {
    title: "Derecho Civil",
    icon: Scale,
    intro: "En nuestro despacho, entendemos la importancia del Derecho Civil en la vida cotidiana y en las relaciones jurídicas entre particulares en Venezuela. Nuestro equipo está comprometido a brindarte una asesoría legal integral y soluciones efectivas.",
    solutions: {
      title: "Soluciones que Ofrecemos:",
      items: [
        "Obligaciones y Contratos: Elaboración, interpretación y ejecución de contratos (compraventa, arrendamiento, mutuo) bajo legislación venezolana.",
        "Acción Reivindicatoria: Recuperación de posesión de bienes de su propiedad detentados por terceros.",
        "Prescripción Adquisitiva: Procesos de usucapión para reconocimiento legal de propiedad sobre bienes muebles e inmuebles.",
        "Derechos Reales: Asistencia en asuntos de propiedad, posesión y seguridad jurídica patrimonial.",
        "Responsabilidad Civil: Reclamaciones por daños y perjuicios derivados de hechos ilícitos o incumplimientos.",
        "Sucesiones: Trámites de herencias, testamentos, declaración de herederos y partición de bienes.",
        "Arrendamientos: Asesoría a arrendadores y arrendatarios bajo la normativa venezolana vigente.",
        "Litigios Civiles: Representación estratégica en juicios ante tribunales venezolanos.",
        "Protección al Consumidor: Defensa de derechos frente a proveedores de bienes y servicios."
      ]
    },
    whyChooseUs: {
      title: "Por qué elegirnos en Derecho Civil:",
      items: [
        "Conocimiento profundo de las leyes, jurisprudencia y procedimientos civiles vigentes.",
        "Estrategias legales personalizadas adaptadas a la realidad jurídica y social venezolana.",
        "Defensa eficaz de sus intereses en cualquier disputa civil.",
        "Asesoramiento preventivo y enfoque en la resolución de conflictos extrajudiciales.",
        "Acompañamiento profesional cercano, transparente y confiable."
      ]
    }
  },
  "Derecho de Familia": {
    title: "Derecho de Familia",
    icon: Heart,
    intro: "Comprendemos la sensibilidad y la importancia de los asuntos relacionados con la familia. Nuestro equipo está aquí para brindarte apoyo legal integral y soluciones efectivas en situaciones complejas.",
    solutions: {
      title: "Soluciones en Derecho de Familia:",
      items: [
        "Divorcios: Procesos de mutuo acuerdo, por desafecto o contenciosos, protegiendo sus intereses.",
        "Venezolanos en el Exterior: Asistencia legal para procesos de divorcio iniciados desde el extranjero.",
        "Separación de Cuerpos y Bienes: Procesos de separación legal de personas y patrimonio.",
        "Liquidación de Comunidad Conyugal: División justa de bienes adquiridos durante el matrimonio o unión estable.",
        "Legalización de Concubinato: Formalización legal de unión estable de hecho y sus derechos derivados.",
        "Capitulaciones Matrimoniales: Acuerdos prenupciales para regular aspectos económicos futuros.",
        "Patria Potestad: Asuntos de ejercicio, suspensión, privación y ejercicio unilateral.",
        "Régimen de Convivencia y Manutención: Establecimiento y modificación de crianza y obligaciones alimentarias.",
        "Asuntos Migratorios de Menores: Cambio de residencia y autorizaciones de viaje al extranjero para NNA.",
        "Trámites de Identidad: Autorizaciones judiciales para cédulas y pasaportes de menores.",
        "Adopción: Acompañamiento en procesos de adopción nacional e internacional."
      ]
    },
    whyChooseUs: {
      title: "Nuestro enfoque en Familia:",
      items: [
        "Abogados especializados con profundo entendimiento de la psicología y dinámica familiar.",
        "Asesoría personalizada y humana, con estricta confidencialidad.",
        "Prioridad absoluta en la protección de los derechos de niños, niñas y adolescentes.",
        "Búsqueda activa de la resolución pacífica de conflictos a través de la mediación.",
        "Acompañamiento integral en todas las etapas, ya sean judiciales o extrajudiciales."
      ]
    }
  },
  "Derecho Penal": {
    // ... same as before
    title: "Derecho Penal",
    icon: Gavel,
    intro: "Comprendemos la seriedad de los asuntos penales. Ofrecemos una defensa integral y estratégica para garantizar el respeto de sus derechos fundamentales en cada etapa del proceso en Venezuela.",
    solutions: {
      title: "Asistencia Profesional Penal:",
      items: [
        "Asistencia Policial: Acompañamiento desde el inicio de cualquier investigación policial preventiva.",
        "Representación ante el Ministerio Público: Gestión de denuncias, querellas y defensa técnica.",
        "Audiencia de Imputación: Defensa técnica crucial en la fase inicial del proceso penal.",
        "Recuperación de Activos: Solicitud de devolución de vehículos y bienes incautados o retenidos.",
        "Audiencias Preliminares y de Juicio: Representación estratégica en todas las fases judiciales.",
        "Tribunales de Ejecución: Asistencia en fase de cumplimiento de pena y beneficios penitenciarios.",
        "Protección de Derechos Fundamentales: Velamos por el estricto cumplimiento del debido proceso."
      ]
    },
    whyChooseUs: {
      title: "Garantías en Defensa Penal:",
      items: [
        "Análisis minucioso para diseñar la estrategia de defensa más efectiva.",
        "Conocimiento profundo del sistema penal venezolano y su jurisprudencia.",
        "Comunicación clara, constante y oportuna sobre el desarrollo del caso.",
        "Protección incondicional de garantías constitucionales y derechos legales.",
        "Actuación bajo los más altos estándares de integridad, ética y profesionalismo."
      ]
    }
  },
  "Violencia de Género": {
    title: "Violencia de Género",
    icon: ShieldAlert,
    intro: "Abordamos la compleja materia de violencia contra la mujer en Venezuela bajo la Ley Orgánica sobre el Derecho de las Mujeres a una Vida Libre de Violencia, ofreciendo representación integral tanto a víctimas como la defensa técnica de presuntos agresores.",
    solutions: {
      title: "Asistencia Legal Especializada:",
      items: [
        "Atención a Víctimas: Orientación sobre derechos, tipos de violencia y procedimientos legales de protección.",
        "Medidas de Protección: Solicitud urgente de medidas de seguridad para garantizar la integridad física y psicológica.",
        "Representación en Juicio: Acompañamiento en denuncias ante órganos policiales, Ministerio Público y Tribunales.",
        "Defensa del Acusado: Análisis riguroso de acusaciones, garantizando el debido proceso y la presunción de inocencia.",
        "Impugnación de Pruebas: Vigilancia de la legalidad de las pruebas y exclusión de aquellas obtenidas ilícitamente.",
        "Contextos Familiares: Asesoría en divorcios y regímenes de convivencia con antecedentes de violencia.",
        "Responsabilidad Civil: Reclamación de indemnizaciones por daños y perjuicios derivados de actos de violencia."
      ]
    },
    whyChooseUs: {
      title: "Nuestro Compromiso Ético:",
      items: [
        "Abogados sensibilizados y capacitados específicamente en la Ley Orgánica de Violencia de Género.",
        "Enfoque centrado en la seguridad de la víctima y el respeto humano.",
        "Estrategias legales con perspectiva de género y análisis de dinámicas de poder.",
        "Defensa técnica rigurosa basada en el respeto absoluto a las garantías constitucionales.",
        "Comunicación transparente y confidencialidad absoluta en cada etapa del proceso."
      ]
    }
  },
  "Derecho Laboral": {
    title: "Derecho Laboral",
    icon: Briefcase,
    intro: "Entendemos la importancia de un entorno laboral armonioso. Ofrecemos soluciones efectivas y personalizadas para proteger los derechos tanto de trabajadores como de empleadores en la realidad venezolana.",
    solutions: {
      title: "Servicios en Materia Laboral:",
      items: [
        "Cálculo de Prestaciones: Liquidaciones precisas de antigüedad, vacaciones, utilidades y otros conceptos.",
        "Demandas y Reclamos: Representación en conflictos laborales ante inspectorías y tribunales del trabajo.",
        "Accidentes y Enfermedades: Gestión de reclamos e indemnizaciones por condiciones ocupacionales.",
        "Asesoría Corporativa: Representación a empresas en la prevención de conflictos y elaboración de contratos.",
        "Derecho Sindical: Orientación en negociaciones colectivas e interpretación de la normativa vigente.",
        "Formación Laboral: Cursos y capacitación en condiciones, medio ambiente y salud en el trabajo.",
        "Negociación y Mediación: Búsqueda de soluciones extrajudiciales para evitar procesos largos y costosos."
      ]
    },
    whyChooseUs: {
      title: "Excelencia en Relaciones Laborales:",
      items: [
        "Protección integral de los derechos laborales garantizada por expertos.",
        "Enfoque preventivo para minimizar riesgos legales y conflictos futuros.",
        "Estrategias de defensa sólidas ante cualquier litigio en tribunales laborales.",
        "Acompañamiento constante y respuesta oportuna a todas sus inquietudes.",
        "Compromiso con la justicia social y el equilibrio en la relación patronal-obrera."
      ]
    }
  },
  "Derecho Ambiental": {
    title: "Derecho Ambiental",
    icon: Leaf,
    intro: "Ofrecemos asesoría integral en el cumplimiento de la normativa ambiental venezolana, garantizando que su actividad se desarrolle de manera sostenible y legal.",
    solutions: {
      title: "Gestión Ambiental Legal:",
      items: [
        "Permisología: Obtención de autorizaciones y registros ante el Ministerio del Ecosocialismo.",
        "Auditorías Legales: Evaluación del cumplimiento de leyes y reglamentos ambientales.",
        "Defensa Sancionatoria: Representación ante procedimientos administrativos por supuestas infracciones.",
        "Evaluación de Impacto: Asesoría en procesos de control previo y ocupación del territorio.",
        "Derecho Penal Ambiental: Defensa técnica en delitos contra el medio ambiente."
      ]
    },
    whyChooseUs: {
      title: "Compromiso Sostenible:",
      items: [
        "Expertos en la Ley Orgánica del Ambiente y normativa técnica especializada.",
        "Prevención de riesgos legales y pasivos ambientales.",
        "Seguridad jurídica en el desarrollo de sus proyectos industriales o comerciales."
      ]
    }
  },
  "Derecho Agrario": {
    title: "Derecho Agrario",
    icon: Landmark,
    intro: "Brindamos seguridad jurídica a los productores venezolanos, protegiendo la tenencia de la tierra y garantizando el desarrollo de la actividad agropecuaria.",
    solutions: {
      title: "Asesoría Agraria Integral:",
      items: [
        "Regularización de Tierras: Trámites ante el INTI para títulos y certificaciones.",
        "Conflictos de Tenencia: Procesos de desocupación y defensa de la propiedad agraria.",
        "Contratos Agrarios: Redacción de contratos de asociación, arrendamiento y comodato rural.",
        "Procedimientos Administrativos: Defensa ante rescates y expropiaciones bajo la Ley de Tierras.",
        "Crédito Agrario: Asesoría legal en financiamiento y garantías del sector."
      ]
    },
    whyChooseUs: {
      title: "Protección al Productor:",
      items: [
        "Amplia experiencia en la dinámica del campo venezolano y su legislación.",
        "Defensa técnica especializada ante tribunales agrarios.",
        "Enfoque en la estabilidad jurídica de su unidad de producción."
      ]
    }
  },
  "Derecho Militar": {
    title: "Derecho Militar",
    icon: ShieldCheck,
    intro: "Ofrecemos representación técnica especializada en el ámbito de la justicia militar y administrativa castrense en Venezuela.",
    solutions: {
      title: "Defensa Militar Especializada:",
      items: [
        "Procesos Penales Militares: Defensa técnica ante tribunales militares de control, juicio y ejecución.",
        "Procedimientos Disciplinarios: Asesoría y defensa en consejos de investigación y faltas disciplinarias.",
        "Derecho Administrativo Militar: Reclamos sobre ascensos, disponibilidad y beneficios.",
        "Retiro y Pensiones: Asesoría legal en el proceso de desincorporación y seguridad social militar.",
        "Amparos Constitucionales: Protección de derechos fundamentales dentro de la institución militar."
      ]
    },
    whyChooseUs: {
      title: "Experiencia Castrense:",
      items: [
        "Conocimiento profundo del Código Orgánico de Justicia Militar y leyes conexas.",
        "Representación con el máximo rigor institucional y profesionalismo.",
        "Defensa del debido proceso en la jurisdicción militar."
      ]
    }
  },
  "Derecho Mercantil": {
    title: "Derecho Mercantil",
    icon: Building,
    intro: "Brindamos seguridad jurídica a su actividad comercial mediante una gestión corporativa impecable y cumplimiento legal preventivo.",
    solutions: {
      title: "Gestión Mercantil y Corporativa:",
      items: [
        "Constitución de Sociedades: Creación de compañías anónimas, firmas personales y sociedades civiles.",
        "Gobierno Corporativo: Actas de asambleas, aumentos de capital y cambios de junta directiva.",
        "Contratos Comerciales: Redacción y revisión de acuerdos de franquicia, distribución y corretaje.",
        "Propiedad Intelectual: Registro de marcas, patentes y derechos de autor.",
        "Litigio Mercantil: Representación en cobros de bolívares, quiebras y disputas entre socios."
      ]
    },
    whyChooseUs: {
      title: "Impulso a su Empresa:",
      items: [
        "Visión integral del derecho de los negocios en Venezuela.",
        "Agilidad en trámites ante registros mercantiles.",
        "Asesoría estratégica para el crecimiento y protección de su capital corporativo."
      ]
    }
  },
  "Derecho Administrativo": {
    title: "Derecho Administrativo",
    icon: FileText,
    intro: "Asesoramos en la compleja relación entre el ciudadano o empresa y el Estado venezolano, garantizando el respeto al debido proceso.",
    solutions: {
      title: "Soluciones ante la Administración:",
      items: [
        "Recursos Administrativos: Impugnación de actos ante órganos públicos (jerárquicos y de reconsideración).",
        "Contencioso Administrativo: Demandas contra el Estado por nulidad de actos o responsabilidad patrimonial.",
        "Contrataciones Públicas: Asesoría en licitaciones y contratos con entes del Estado.",
        "Infracciones y Sanciones: Defensa ante multas y cierres aplicados por organismos reguladores.",
        "Expropiaciones: Representación y defensa del justo valor en procesos de afectación de bienes."
      ]
    },
    whyChooseUs: {
      title: "Defensa frente al Estado:",
      items: [
        "Especialistas en la Ley Orgánica de Procedimientos Administrativos (LOPA).",
        "Control de legalidad de la actividad administrativa.",
        "Protección efectiva contra el abuso de poder y la desviación de ley."
      ]
    }
  },
  "Derecho Inmobiliario": {
    title: "Derecho Inmobiliario",
    icon: Home,
    intro: "Aseguramos su patrimonio mediante la verificación técnica y el acompañamiento experto en transacciones de bienes raíces.",
    solutions: {
      title: "Seguridad Inmobiliaria:",
      items: [
        "Compraventa: Acompañamiento en la negociación y redacción de documentos de venta y preventa.",
        "Investigación de Títulos: Verificación de la cadena de titulación y gravámenes ante registros públicos.",
        "Condominios: Asesoría a juntas de condominio y resolución de disputas de propiedad horizontal.",
        "Arrendamiento Inmobiliario: Gestión legal según la ley de vivienda y locales comerciales.",
        "Desalojos y Reivindicaciones: Procesos legales para la recuperación de posesión de inmuebles."
      ]
    },
    whyChooseUs: {
      title: "Protección Patrimonial:",
      items: [
        "Máxima seguridad en inversiones inmobiliarias.",
        "Conocimiento actualizado de la normativa habitacional y comercial venezolana.",
        "Prevención de fraudes y estafas en el mercado inmobiliario."
      ]
    }
  }
};
