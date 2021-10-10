const dataBenefits = [{
  nameBenefits: "trackerRealtime",
  status: null,
  textBenefits: "Rastreamento pelo app.",
},
{
  nameBenefits: "historyPosition",
  status: null,
  textBenefits: "historico de posição",
},
{
  nameBenefits: "homeInstallation",
  status: null,
  textBenefits: "Instalação em domicilio",
},
{
  nameBenefits: "blocker",
  status: null,
  textBenefits: "Bloqueador pelo app.",
},
{
  nameBenefits: "teamRecovery",
  status: null,
  textBenefits: "Equipe de recuperação",
},
{
  nameBenefits: "assistance",
  status: null,
  textBenefits: "Guincho 24h, 200KM",
},
];

const switchPlan = (plan) => {
  const BENEFITS_LITE = ["trackerRealtime", "historyPosition", "homeInstallation"];
  const BENEFITS_PRO = ["trackerRealtime", "historyPosition", "homeInstallation", "blocker", "teamRecovery"];
  const BENEFITS_ALL = ["trackerRealtime", "historyPosition", "homeInstallation", "blocker", "teamRecovery", "assistance"];
  let benefitsRight = [];
  switch (plan) {
    case "lite":
      benefitsRight = BENEFITS_LITE;
      break;
    case "pro":
      benefitsRight = BENEFITS_PRO;
      break;
    case "premium":
      benefitsRight = BENEFITS_ALL;
      break;
    default:
  }
  return benefitsRight;
};

const returnObjBenefits = (plan) => {
  const planCurrent = switchPlan(plan);
  let benefitsOutput = [];
  dataBenefits.forEach((data, index) => {
    if (data.nameBenefits === planCurrent[index]) {
      const objManipuled = data;
      objManipuled.status = true;
      benefitsOutput = [...benefitsOutput, dataBenefits[index]];
    } else {
      const objManipuled = data;
      objManipuled.status = false;
      benefitsOutput = [...benefitsOutput, dataBenefits[index]];
    }
  });
  return benefitsOutput;
};

export default returnObjBenefits;
