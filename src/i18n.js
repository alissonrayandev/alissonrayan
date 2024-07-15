import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    name: 'Alisson Rayan',
    role: 'Senior Front-End Developer',
    description: "With over 8 years of experience, I specialize in creating robust web solutions and dynamic applications. I excel in all phases of the software development lifecycle and thrive in collaborative, agile environments. I am passionate about leveraging Vue.js to enhance user experiences and drive business success.",
    linkedin: 'LinkedIn Profile',
    codepen: 'CodePen Profile',
    email: 'Send an Email',
    whatsapp: 'WhatsApp',
    downloadCV: 'Download CV'
  },
  pt: {
    name: 'Alisson Rayan',
    role: 'Desenvolvedor Front-End Sênior',
    description: "Com mais de 8 anos de experiência, sou especializado em criar soluções web robustas e aplicações dinâmicas. Excedo em todas as fases do ciclo de desenvolvimento de software e prospero em ambientes colaborativos e ágeis. Sou apaixonado por utilizar Vue.js para melhorar a experiência do usuário e impulsionar o sucesso dos negócios.",
    linkedin: 'Perfil no LinkedIn',
    codepen: 'Perfil no CodePen',
    email: 'Enviar um Email',
    whatsapp: 'WhatsApp',
    downloadCV: 'Baixar CV'
  },
  fr: {
    name: 'Alisson Rayan',
    role: 'Développeur Front-End Senior',
    description: "Fort de plus de 8 ans d'expérience, je suis spécialisé dans la création de solutions web robustes et d'applications dynamiques. J'excelle dans toutes les phases du cycle de développement logiciel et je prospère dans des environnements collaboratifs et agiles. Je suis passionné par l'utilisation de Vue.js pour améliorer l'expérience utilisateur et favoriser le succès commercial.",
    linkedin: 'Profil LinkedIn',
    codepen: 'Profil CodePen',
    email: 'Envoyer un Email',
    whatsapp: 'WhatsApp',
    downloadCV: 'Télécharger CV'
  },
  es: {
    name: 'Alisson Rayan',
    role: 'Desarrollador Front-End Senior',
    description: "Con más de 8 años de experiencia, estoy especializado en crear soluciones web robustas y aplicaciones dinámicas. Destaco en todas las fases del ciclo de desarrollo de software y prospero en entornos colaborativos y ágiles. Me apasiona utilizar Vue.js para mejorar la experiencia del usuario e impulsar el éxito empresarial.",
    linkedin: 'Perfil de LinkedIn',
    codepen: 'Perfil de CodePen',
    email: 'Enviar un Correo Electrónico',
    whatsapp: 'WhatsApp',
    downloadCV: 'Descargar CV'
  },
  it: {
    name: 'Alisson Rayan',
    role: 'Sviluppatore Front-End Senior',
    description: "Con oltre 8 anni di esperienza, sono specializzato nella creazione di soluzioni web robuste e applicazioni dinamiche. Eccello in tutte le fasi del ciclo di sviluppo software e prospero in ambienti collaborativi e agili. Sono appassionato di utilizzare Vue.js per migliorare l'esperienza utente e promuovere il successo aziendale.",
    linkedin: 'Profilo LinkedIn',
    codepen: 'Profilo CodePen',
    email: 'Invia un Email',
    whatsapp: 'WhatsApp',
    downloadCV: 'Scaricare CV'
  }
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
