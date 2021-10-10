import { returnObjBenefits } from './service/dataText.js';

const heroText = {
  title: 'CLEWSAT Rastreamento em tempo real pelo app.',
  paragraph: 'Com a Clewsat rastreamento, você acompanha tudo que acontece com seu veiculo em tempo real pelo o app em seu smartphone. '
};

const textsRedColor = {
  clewsat: 'Clewsat',
  trackerRealTime: 'Rastreamento em tempo real',
  blockApp: 'Bloqueio pelo aplicativo',
  positionReports: 'Relatorio de posições',
  company: 'empresa',
}

const differences = {
  title: `Só pra quem tem`, // sepera o nome clewsa para aplica cor
  description: 'A Clewsat rastreamento é uma empresa focado na segurança dos clientes.',
  cardsDifferences: [{
      icon: 'fas fa-map-marked-alt',
      title: 'Rastreamento em tempo real.',
      description: 'Saiba onde está seu veiculo em tempo real acessando pelo app.',
    }, {
      icon: 'fas fa-unlock-alt',
      title: 'Bloqueador pelo app',
      description: 'Bloqueie seu veiculo pelo aplicativo, de qualquer lugar do mundo.',
    },
    {
      icon: 'fas fa-user-secret',
      title: 'Equipe de busca',
      description: 'Conte com uma equipe de busca para recuperação do seu veiculo com segurança',
    },
    {
      icon: 'fas fa-car-crash',
      title: 'Reboque para imprevistos',
      description: 'Imprevistos acontece, por isso temos a opção de adicionar assistência com guincho em seu plano',
    }
  ]
}

const appTech = {
  title: 'Tecnologia',
  description: 'Saiba onde está o seu veículo apenas usando seu celular pelo nosso aplicativo, Monitore a velocidade, bateria do veiculo, histórico de posição, utilize o bloqueio via satélite acionado pelo aplicativo. Ideal para agilizar a localização do veículo em caso de roubo ou furto.',
  subtitle: 'O Aplicativo é bem simples de utilizar e intuitivo.',
  mainFunctionText: 'Principais funções do aplicativo:',
  mainFunctions: ['tenha acesso a localização exata do seu veiculo.', 'Segurança na palma da mão.', 'Tenha controle total sobre o seu veiculo.'],
}

const googleEvidence = {
  title: 'Depoimentos google',
  depositions: [{
      namePeople: 'Vanderlei Picoli',
      comment: 'Excelente pessoal da Clewsat, Já recomendei pra alguns amigos. Valeu obrigado'
    },
    {
      namePeople: 'Elias silva',
      comment: 'Rastreamento funcina muito bem ! Atendimento bom imediato....recomendo'
    },
    {
      namePeople: 'Ricardo Oliveira',
      comment: 'Uma excelente empresa já estou com eles um tempo super indico....'
    },
    {
      namePeople: 'Priscila Batista',
      comment: 'Sem palavras atenção 100% , super recomendo, além de um ótimo atendimento , o rastreamento tudo OK .'
    },
    {
      namePeople: 'Jonatas Souza Mendes',
      comment: 'Ótimo atendimento , rastreador funciona perfeitamente , e um ótimo suporte .'
    }
  ]
}

const businessCall = {
  title: 'Rastreamento para sua',
  subtitle: 'Preparamos soluções tecnológicas especificas para uma gestão efetiva para sua frota, clique no botão e saiba mais.'
}

const dataBenefits = [{
  nameBenefits: 'trackerRealtime',
  status: null,
  textBenefits: 'Rastreamento pelo app.'
},
{
  nameBenefits: 'historyPosition',
  status: null,
  textBenefits: 'historico de posição',
},
{
  nameBenefits: 'homeInstallation',
  status: null,
  textBenefits: 'Instalação em domicilio',
},
{
  nameBenefits: 'blocker',
  status: null,
  textBenefits: 'Bloqueador pelo app.',
},
{
  nameBenefits: 'teamRecovery',
  status: null,
  textBenefits: 'Equipe de recuperação',
},
{
  nameBenefits: 'assistance',
  status: null,
  textBenefits: 'Guincho 24h, 200KM',
}
]

const plansPrices = {
  title: 'Planos e preços',
  plansCard: [{
    plan: 'Lite',
    price: 'R$ 54,90',
    recurrence: 'Por mês',
    promotional: {
      status: false,
      pricePromotional: 'R$ 54,90'
    },
    benefits: () => returnObjBenefits('lite')
  },
  {
    plan: 'Pro',
    price: 'R$ 69,90',
    recurrence: 'Por mês',
    promotional: {
      status: true,
      pricePromotional: 'R$ 59,90'
    },
    benefits: () => returnObjBenefits('pro')
  },
  {
    plan: 'Premium',
    price: 'R$ 89,90',
    recurrence: 'Por mês',
    promotional: {
      status: true,
      pricePromotional: 'R$ 79,90'
    },
    benefits: () => returnObjBenefits('premium')
  }]
}

const calledEnd = { 
  title: 'proteção para seu veiculo acessível'
}

export {
  heroText,
  textsRedColor,
  differences,
  appTech,
  googleEvidence,
  businessCall,
  dataBenefits,
  plansPrices,
  calledEnd
}