import { dataBenefits } from '../textData.js';

const BENEFITS_LITE = ['trackerRealtime', 'historyPosition', 'homeInstallation'];
const BENEFITS_PRO = ['trackerRealtime', 'historyPosition', 'homeInstallation','blocker', 'teamRecovery'];
const BENEFITS_ALL = ['trackerRealtime', 'historyPosition', 'homeInstallation', 'blocker', 'teamRecovery', 'assistance'];

const switchPlan = (plan) => { 
   switch (plan) {
    case 'lite':
      return BENEFITS_LITE;
    case 'pro':
      return BENEFITS_PRO;
    case 'premium':
      return BENEFITS_ALL;
    default:
  }
}

const returnObjBenefits = (plan) => {
  const planCurrent = switchPlan(plan); 
  let benefitsOutput = [];
  dataBenefits.forEach((data, index) => {
   if (data.nameBenefits === planCurrent[index]){
    data.status = true;
    benefitsOutput = [...benefitsOutput, dataBenefits[index]]
   } else { 
     data.status = false;
     benefitsOutput = [...benefitsOutput, dataBenefits[index]]
   }
  })
  return benefitsOutput;
}

export {
 returnObjBenefits
}