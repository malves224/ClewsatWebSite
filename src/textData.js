// eslint-disable-next-line import/extensions
import returnBenefitsArr from "./service/dataTextService.js";

const heroText = {
  title: "CLEWSAT Rastreamento em tempo real pelo app.",
  paragraph: "Com a Clewsat rastreamento, você acompanha tudo que acontece com seu veiculo em tempo real pelo o app em seu smartphone. ",
};

const buttonHireNow = {
  text: "Contrate agora",
  src: "https://api.whatsapp.com/send?phone=5511936186826&text=Ol%C3%A1,%20Tenho%20interesse%20no%20sistema%20de%20rastreamento.",
};

const textsRedColor = {
  clewsat: "Clewsat",
  trackerRealTime: "Rastreamento em tempo real",
  blockApp: "Bloqueio pelo aplicativo",
  positionReports: "Relatorio de posições",
  company: "empresa",
};

const differences = {
  title: "Só pra quem tem", // sepera o nome clewsat para aplica cor
  description: "A Clewsat rastreamento é uma empresa focado na segurança dos clientes.",
  cardsDifferences: [{
    icon: "faMapMarkedAlt",
    title: "Rastreamento em tempo real.",
    description: "Saiba onde está seu veiculo em tempo real acessando pelo app.",
  }, {
    icon: "faUnlockAlt",
    title: "Bloqueador pelo app",
    description: "Bloqueie seu veiculo pelo aplicativo, de qualquer lugar do mundo.",
  },
  {
    icon: "faUserSecret",
    title: "Equipe de busca",
    description: "Conte com uma equipe de busca para recuperação do seu veiculo com segurança.",
  },
  {
    icon: "faCarCrash",
    title: "Reboque para imprevistos",
    description: "Problema com o veiculo? basta solicitar um guincho.",
  },
  ],
};

const appTech = {
  title: "Tecnologia",
  description: "Saiba onde está o seu veículo apenas usando seu celular pelo nosso aplicativo, Monitore a velocidade, bateria do veiculo, histórico de posição, utilize o bloqueio via satélite acionado pelo aplicativo. Ideal para agilizar a localização do veículo em caso de roubo ou furto.",
  subtitle: "O Aplicativo é bem simples de utilizar e intuitivo.",
  mainFunctionText: "Principais funções do aplicativo:",
  mainFunctions: ["tenha acesso a localização exata do seu veiculo.", "Segurança na palma da mão.", "Tenha controle total sobre o seu veiculo."],
};

const googleEvidence = {
  title: "Depoimentos google",
  depositions: [{
    namePeople: "Vanderlei Picoli",
    comment: "Excelente pessoal da Clewsat, Já recomendei pra alguns amigos. Valeu obrigado",
  },
  {
    namePeople: "Elias silva",
    comment: "Rastreamento funcina muito bem ! Atendimento bom imediato....recomendo",
  },
  {
    namePeople: "Ricardo Oliveira",
    comment: "Uma excelente empresa já estou com eles um tempo super indico....",
  },
  {
    namePeople: "Priscila Batista",
    comment: "Sem palavras atenção 100% , super recomendo, além de um ótimo atendimento , o rastreamento tudo OK .",
  },
  {
    namePeople: "Jonatas Souza Mendes",
    comment: "Ótimo atendimento , rastreador funciona perfeitamente , e um ótimo suporte .",
  },
  ],
};

const businessCall = {
  title: "Rastreamento para sua",
  subtitle: "Preparamos soluções tecnológicas especificas para uma gestão efetiva para sua frota, clique no botão e saiba mais.",
};

const plansPrices = {
  title: "Planos e preços",
  plansCard: [{
    plan: "Lite",
    price: "R$ 54,90",
    recurrence: "Por mês",
    promotional: {
      status: false,
      pricePromotional: "R$ 54,90",
    },
    benefits: (plan) => returnBenefitsArr(plan),
  },
  {
    plan: "Pro",
    price: "R$ 79,90",
    recurrence: "Por mês",
    promotional: {
      status: true,
      pricePromotional: "R$ 59,90",
    },
    benefits: (plan) => returnBenefitsArr(plan),
  },
  {
    plan: "Premium",
    price: "R$ 89,90",
    recurrence: "Por mês",
    promotional: {
      status: true,
      pricePromotional: "R$ 79,90",
    },
    benefits: (plan) => returnBenefitsArr(plan),
  }],
};

const calledEnd = {
  title: "Proteção para seu veiculo acessível.",
};

export {
  heroText,
  textsRedColor,
  differences,
  appTech,
  googleEvidence,
  businessCall,
  plansPrices,
  calledEnd,
  buttonHireNow,
};
