
const chatMessages = document.getElementById("chat-messages");
const faqButtons = document.getElementById("faq-buttons");

// Cada pregunta tiene varias respuestas previamente programadas.
const faq = {
  sitio: {
    question: "¿Qué es CatDogSites?",
    answers: [
      "¡Bienvenido a CatDogSites! 🐾 Este sitio busca informar sobre el abandono de perros y gatos y promover la conciencia sobre el cuidado animal.",
      "CatDogSites es una página dedicada a presentar información sobre el abandono animal, sus causas y las formas de contribuir a prevenirlo.",
      "El objetivo de CatDogSites es ayudarte a conocer mejor el problema del abandono de animales y descubrir maneras responsables de ayudar."
    ]
  },

  abandono: {
    question: "¿Qué es el abandono animal?",
    answers: [
      "El abandono animal ocurre cuando una persona deja a un animal bajo su cuidado sin garantizarle protección, atención y los cuidados necesarios.",
      "Hablamos de abandono cuando un animal queda sin el cuidado de las personas responsables de su bienestar. Esto puede dejarlo expuesto a numerosos peligros.",
      "Abandonar a un perro o gato significa dejarlo sin la atención y protección que necesita para vivir de forma segura."
    ]
  },

  causas: {
    question: "¿Por qué abandonan a los animales?",
    answers: [
      "Algunas causas son adoptar por impulso, no considerar los gastos y las responsabilidades, o abandonar a la mascota cuando cambian las circunstancias familiares.",
      "El abandono puede relacionarse con la falta de planificación antes de adoptar, las dificultades para mantener a la mascota y la falta de compromiso con sus cuidados.",
      "La falta de información sobre la responsabilidad que implica tener una mascota puede contribuir al abandono. Por eso es importante pensar bien antes de adoptar."
    ]
  },

  consecuencias: {
    question: "¿Qué consecuencias tiene el abandono?",
    answers: [
      "Los animales abandonados pueden quedar expuestos al hambre, las enfermedades, el clima, los accidentes y otros peligros de la calle.",
      "El abandono afecta al bienestar de perros y gatos y también puede representar un desafío para las comunidades y las organizaciones de protección animal.",
      "Sin cuidados adecuados, un animal abandonado puede sufrir problemas de salud, estrés y dificultades para encontrar alimento y refugio."
    ]
  },

  ayudar: {
    question: "¿Cómo puedo ayudar?",
    answers: [
      "Puedes ayudar difundiendo información responsable, apoyando a organizaciones de protección animal y promoviendo la adopción responsable.",
      "Pequeñas acciones pueden marcar la diferencia: informar sobre el cuidado animal, apoyar iniciativas locales y consultar a organizaciones especializadas cuando un animal necesite ayuda.",
      "Puedes contribuir educando a otras personas sobre el abandono, la esterilización y la importancia de asumir una responsabilidad antes de adoptar."
    ]
  },

  perro: {
    question: "¿Qué hago si encuentro un perro callejero?",
    answers: [
      "Observa desde una distancia segura. Si el perro parece perdido o necesita ayuda, consulta a una organización de protección animal o al servicio municipal correspondiente. No te acerques si te sientes en peligro.",
      "Puedes pedir orientación a una protectora local o a los servicios municipales. Evita perseguir o acorralar al perro, ya que podría asustarse.",
      "Si el perro parece estar en peligro, busca apoyo de personas adultas responsables o de un servicio local especializado. No pongas en riesgo tu seguridad intentando atraparlo."
    ]
  },

  gato: {
    question: "¿Cómo ayudo a un gato callejero?",
    answers: [
      "Acércate con precaución y no fuerces el contacto. Si parece enfermo o abandonado, consulta a una organización de protección animal o a un veterinario.",
      "Puedes pedir asesoramiento a una protectora local. Algunos gatos viven en exteriores y no todos están abandonados, por lo que conviene observar la situación antes de intervenir.",
      "Si necesita ayuda, busca una organización local que tenga experiencia con gatos. Evita intentar sujetarlo si está asustado, herido o actúa de forma agresiva."
    ]
  },

  prevenir: {
    question: "¿Cómo prevenimos el abandono?",
    answers: [
      "Antes de adoptar, evalúa el tiempo, los gastos, el espacio y los cuidados que necesitará el animal durante toda su vida.",
      "La prevención empieza con la educación, la planificación antes de adoptar, la atención veterinaria y el compromiso de cuidar a la mascota incluso cuando cambian las circunstancias.",
      "Promover la adopción responsable, consultar sobre esterilización y enseñar a otras personas sobre el bienestar animal son formas de contribuir a prevenir el abandono."
    ]
  },

  esterilizacion: {
    question: "¿Qué es la esterilización?",
    answers: [
      "La esterilización es un procedimiento veterinario que ayuda a prevenir la reproducción. Consulta a un veterinario sobre sus beneficios y el momento adecuado para tu mascota.",
      "Este procedimiento puede ayudar a evitar camadas no deseadas. La decisión debe tomarse con orientación veterinaria, considerando las necesidades de cada animal.",
      "La esterilización es una de las medidas que pueden contribuir a controlar la reproducción de perros y gatos. No reemplaza la responsabilidad de cuidar a cada animal."
    ]
  },

  adopcion: {
    question: "¿Por qué es importante adoptar responsablemente?",
    answers: [
      "Adoptar responsablemente significa estar preparado para ofrecer alimento, atención veterinaria, tiempo, protección y cariño durante toda la vida del animal.",
      "Antes de adoptar, asegúrate de que puedes asumir los gastos, el espacio y la dedicación que necesitará la mascota. Adoptar debe ser una decisión meditada.",
      "Una adopción responsable beneficia al animal y a la familia, porque reduce el riesgo de que la mascota termine siendo abandonada por falta de preparación."
    ]
  },

  herido: {
    question: "¿Qué hago si encuentro un animal herido?",
    answers: [
      "No intentes tratar una lesión por tu cuenta. Mantén una distancia segura y contacta cuanto antes a un veterinario, un servicio de rescate animal o la autoridad local correspondiente.",
      "Si un animal está herido, busca ayuda veterinaria o especializada. Evita movimientos bruscos y no te acerques si podría morder por miedo o dolor.",
      "Lo mejor es pedir apoyo a personas adultas responsables y a profesionales locales. No pongas en peligro tu seguridad ni administres medicamentos sin orientación veterinaria."
    ]
  },

  estadisticas: {
    question: "¿Qué significan las cifras de la página?",
    answers: [
      "La página de Inicio menciona que más del 77 % de las personas ve animales callejeros y que el 40 % ha tenido malas experiencias. Para interpretar esos datos correctamente, consulta la fuente y la metodología del estudio.",
      "Las cifras del 77 % y del 40 % aparecen en el contenido de CatDogSites. Recuerda que, sin conocer la fuente, la fecha y el tamaño de la muestra, no podemos valorar completamente su alcance.",
      "Los porcentajes presentados en la página buscan ilustrar la situación descrita. Es recomendable acompañarlos de la referencia original para que los visitantes puedan verificar la información."
    ]
  },

  responsabilidad: {
    question: "¿Qué es la tenencia responsable?",
    answers: [
      "La tenencia responsable consiste en proporcionar a una mascota alimentación, agua, refugio, atención veterinaria, ejercicio y un entorno seguro.",
      "Ser responsable de un animal significa atender sus necesidades, prevenir riesgos, cumplir las normas aplicables y no abandonarlo cuando cambian las circunstancias.",
      "Cuidar responsablemente a una mascota implica planificar sus gastos y necesidades, brindarle bienestar y buscar ayuda si aparecen dificultades para cuidarla."
    ]
  },

  contacto: {
    question: "¿Cómo puedo contactarlos?",
    answers: [
      "No tengo un teléfono ni un correo confirmado de CatDogSites. Revisa las secciones del sitio para encontrar los canales de contacto publicados.",
      "Para comunicarte con los responsables, consulta si CatDogSites dispone de una sección de contacto o información institucional.",
      "No quiero darte un dato de contacto incorrecto. Busca un canal oficial publicado por los responsables de CatDogSites."
    ]
  },

  donaciones: {
    question: "¿Puedo hacer una donación?",
    answers: [
      "No tengo información confirmada sobre un sistema de donaciones de CatDogSites. Verifica los canales oficiales antes de enviar dinero.",
      "Si deseas apoyar una iniciativa animal, busca organizaciones verificables y comprueba sus datos antes de realizar una donación.",
      "CatDogSites no tiene en mis respuestas un canal de donaciones confirmado. No envíes dinero ni datos personales a cuentas que no puedas verificar."
    ]
  },

  funciones: {
    question: "¿Qué preguntas puedes responder?",
    answers: [
      "Puedes elegir preguntas sobre CatDogSites, el abandono animal, sus causas, la prevención, la adopción responsable y cómo ayudar a un animal que necesita atención.",
      "Estoy configurado para responder preguntas frecuentes sobre el cuidado animal. Selecciona cualquiera de los botones para consultar una respuesta.",
      "Puedo mostrar información previamente programada sobre el abandono animal, la esterilización y la tenencia responsable. No comprendo todas las preguntas posibles, pero puedes explorar los temas de esta lista."
    ]
  }
};

// Guardamos el último índice usado para no repetir inmediatamente
// la misma respuesta de una pregunta.
const lastAnswerIndex = {};

function addMessage(text, sender) {
  const message = document.createElement("div");

  message.classList.add("message", `${sender}-message`);
  message.textContent = text;

  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getRandomAnswer(id) {
  const item = faq[id];

  if (!item || item.answers.length === 0) {
    return "Lo siento, esa pregunta todavía no está disponible.";
  }

  const total = item.answers.length;
  let index;

  if (total === 1) {
    index = 0;
  } else {
    // Elegimos un índice diferente al de la respuesta anterior.
    const possibleIndexes = Array.from(
      { length: total },
      (_, i) => i
    ).filter((i) => i !== lastAnswerIndex[id]);

    index = possibleIndexes[
      Math.floor(Math.random() * possibleIndexes.length)
    ];
  }

  lastAnswerIndex[id] = index;
  return item.answers[index];
}

function handleFaqClick(id) {
  const item = faq[id];

  if (!item) return;

  // Muestra la pregunta elegida y una respuesta al azar.
  addMessage(item.question, "user");
  addMessage(getRandomAnswer(id), "bot");
}

if (chatMessages && faqButtons) {
  faqButtons.querySelectorAll("[data-faq]").forEach((button) => {
    button.addEventListener("click", () => {
      handleFaqClick(button.dataset.faq);
    });
  });

  console.log("CatDogChatbot de preguntas frecuentes está listo.");
} else {
  console.error(
    "No se encontró chat-messages o faq-buttons. " +
    "Revisa los IDs de index.html."
  );
}
