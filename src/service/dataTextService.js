const dataBenefits = [{
  nameBenefits: "trackerRealtime",
  textBenefits: "Rastreamento pelo app.",
},
{
  nameBenefits: "historyPosition",
  textBenefits: "historico de posição",
},
{
  nameBenefits: "homeInstallation",
  textBenefits: "Instalação em domicilio",
},
{
  nameBenefits: "blocker",
  textBenefits: "Bloqueador pelo app.",
},
{
  nameBenefits: "teamRecovery",
  textBenefits: "Equipe de recuperação",
},
{
  nameBenefits: "assistance",
  textBenefits: "Guincho 24h, 200KM",
},
];

const LITE = "lite";
const PRO = "pro";
const PREMIUM = "premium";

const switchPlan = (plan) => {
  const BENEFITS_LITE = ["trackerRealtime", "historyPosition", "homeInstallation"];
  const BENEFITS_PRO = ["trackerRealtime", "historyPosition", "homeInstallation", "blocker", "teamRecovery"];
  const BENEFITS_ALL = ["trackerRealtime", "historyPosition", "homeInstallation", "blocker", "teamRecovery", "assistance"];
  let benefitsRight = [];
  switch (plan) {
    case LITE:
      benefitsRight = BENEFITS_LITE;
      break;
    case PRO:
      benefitsRight = BENEFITS_PRO;
      break;
    case PREMIUM:
      benefitsRight = BENEFITS_ALL;
      break;
    default:
  }
  return benefitsRight;
};

const returnBenefitsArr = (plan) => {
  const planFormated = plan.toLowerCase();
  const planCurrent = switchPlan(planFormated);
  let benefitsOutput = [];
  dataBenefits.forEach((data, index) => {
    if (data.nameBenefits === planCurrent[index]) {
      const objManipuled = { ...data };
      objManipuled.status = true;
      benefitsOutput = [...benefitsOutput, objManipuled];
    } else {
      const objManipuled = { ...data };
      objManipuled.status = false;
      benefitsOutput = [...benefitsOutput, objManipuled];
    }
  });
  return benefitsOutput;
};

export default returnBenefitsArr;
