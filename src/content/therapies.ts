import type { Service } from 'src/types';

export const therapies: Service[] = [
  {
    title: 'para adultos',
    onlinePrice: 60,
    onlineTimeInMinutes: 50,
    inPersonPrice: 70,
    inPersonTimeInMinutes: 50,
    description:
      'Entiendo que la etapa adulta está llena de desafíos. Por eso, ofrezco herramientas para la gestión emocional y el autoconocimiento, creando un espacio seguro, sin juicios, y adaptado a cada historia y situación personal.',
    details: [
      'Tratamiento de trastornos (ansiedad, estrés, depresión, insomnio).',
      'Manejo del autoestima.',
      'Dificultades a la hora de relacionarse.',
      'Autoexigencia',
      'Dependencia emocional, límites y asertividad.',
      'Duelo.',
      'Estado emocional neutro y desmotivación.',
      'Burnout o problemas laborales (mobbing).',
      'Problemas sexuales.',
      'Trastorno obsesivo compulsivo.',
      'Trastorno de estrés postraumático.',
      'Autoconocimiento.',
      'Psicooncología (acompañamiento).',
      'Enfermedades crónicas (esclerosis múltiple, espondilitis anquilosante, enfermedades digestiva, entre otras).',
      'Ayuda en procesos de oposiciones.',
    ],
    summaryDetails: [
      'Manejo de la autoestima.',
      'Límites y asertividad.',
      'Dependencia emocional.',
    ],
  },
  {
    title: 'infantil',
    onlinePrice: 60,
    onlineTimeInMinutes: 50,
    inPersonPrice: 70,
    inPersonTimeInMinutes: 50,
    description:
      'Creo en la importancia de atender correctamente a los menores para garantizar un desarrollo saludable. Ofrezco un espacio seguro, de confianza y divertido donde puedan expresarse sin miedo mientras trabajamos juntos en sus emociones. También involucro a los padres y madres en el proceso.',
    details: [
      'Problemas en la conducta.',
      'Dificultad para gestionar las emociones.',
      'Baja autoestima.',
      'Dificultad con habilidades sociales.',
      'Bajo rendimiento escolar.',
      'Dificultades en la atención.',
      'Acoso escolar.',
      'Impulsividad e hiperactividad (TDAH).',
      'Dificultades tras el divorcio de los progenitores.',
      'Psicooncología (acompañamiento).',
      'Enfermedades crónicas (esclerosis múltiple, espondilitis anquilosante, enfermedades digestivas, entre otras).',
    ],
    summaryDetails: [
      'Bajo rendimiento escolar.',
      'Baja autoestima.',
      'Dificultades en la atención.',
    ],
  },
  {
    title: 'de adolescentes',
    onlinePrice: 60,
    onlineTimeInMinutes: 50,
    inPersonPrice: 70,
    inPersonTimeInMinutes: 50,
    description:
      'La adolescencia es una etapa llena de cambios y comportamientos difíciles de gestionar. Brindo un espacio seguro donde el adolescente puede comprender lo que está viviendo, y ofrezco a los padres herramientas para entender, abordar y acompañarlo.',
    details: [
      'Problemas en la conducta.',
      'Dificultad para gestionar las emociones (depresión, ansiedad, agresividad).',
      'Dificultades en la atención, impulsividad e hiperactividad (TDAH).',
      'Consumo de sustancias.',
      'Baja autoestima (imagen corporal).',
      'Dificultad con habilidades sociales.',
      'Bajo rendimiento escolar (presión académica).',
      'Autoexigencia elevada.',
      'Acoso escolar.',
      'Dificultades relacionadas con orientación sexual.',
      'Dificultades tras el divorcio de los progenitores.',
      'Psicooncología (acompañamiento).',
      'Enfermedades crónicas (esclerosis múltiple, espondilitis anquilosante, enfermedades digestivas, entre otras).',
      'Estado emocional neutro y desmotivación.',
    ],
    summaryDetails: [
      'Problemas en la conducta.',
      'Consumo de sustancias.',
      'Acoso escolar.',
    ],
  },
  {
    title: 'para personas mayores',
    onlinePrice: 60,
    onlineTimeInMinutes: 50,
    inPersonPrice: 70,
    inPersonTimeInMinutes: 50,
    description:
      'Valoro la importancia de esta etapa vital y los cambios asociados a ella. Ofrezco un espacio de escucha activa, comprensión y validación, trabajando también con estimulación cognitiva.',
    details: [
      'Manejo del autoestima.',
      'Tratamiento de trastornos (ansiedad, estrés, depresión).',
      'Duelo.',
      'Límites y asertividad.',
      'Dependencia emocional.',
      'Problemas sexuales.',
      'Trastorno obsesivo compulsivo.',
      'Trastorno de estrés postraumático.',
      'Dificultades para dormir.',
      'Autoconocimiento.',
      'Asumir el rol de cuidador/cuidadora.',
      'Enfermedades crónicas (esclerosis múltiple, espondilitis anquilosante, enfermedades digestivas, entre otras)',
      'Psicooncología (acompañamiento).',
      'Enfermedades neurodegenerativas (Alzheimer).',
    ],
    summaryDetails: ['Duelo.', 'Autoconocimiento.', 'Manejo del autoestima.'],
  },
  {
    title: 'de pareja',
    onlinePrice: 80,
    onlineTimeInMinutes: 60,
    inPersonPrice: 90,
    inPersonTimeInMinutes: 60,
    description:
      'Mi objetivo es ayudar a mejorar la calidad de las relaciones de pareja, ahondando en situaciones conflictivas difíciles abordar. Trabajo con ambos para fortalecer su conexión y aumentar la satisfacción.',
    details: [
      'Problemas de comunicación.',
      'Problemas económicos.',
      'Problemas sexuales.',
      'Infidelidad.',
      'Dependencia emocional.',
      'Falta de confianza.',
      'Dificultades para ponerse de acuerdo con el futuro (hijos/as, hogar).',
      'Problemas de educación a los hijos.',
      'Fortalecimiento del vínculo.',
      'Monotonía de pareja.',
    ],
    summaryDetails: [
      'Problemas de comunicación.',
      'Falta de confianza.',
      'Monotonía de pareja.',
    ],
  },
  {
    title: 'grupal',
    onlinePrice: 30,
    onlineTimeInMinutes: 60,
    inPersonPrice: 40,
    inPersonTimeInMinutes: 60,
    description:
      'Creo en la importancia de conectar a personas que enfrentan dificultades similares. Organizo sesiones dinámicas donde trabajaremos miedos e inseguridades, poniendo en práctica habilidades en un ambiente seguro y práctico.',
    priceDisclaimer: 'precio por persona',
    details: [
      'Habilidades sociales para adolescentes.',
      'Gestión de las emociones en niños/as (ira, frustración, dificultades para compartir).',
      'Mejora de las habilidades sociales en adultos.',
      'Inteligencia emocional en adultos.',
      'Masculinidad en hombres.',
      'Psicooncología: acompañamiento en el proceso.',
    ],
    summaryDetails: [
      'Habilidades sociales.',
      'Inteligencia emocional.',
      'Psicooncología (acompañamiento).',
    ],
  },
];
