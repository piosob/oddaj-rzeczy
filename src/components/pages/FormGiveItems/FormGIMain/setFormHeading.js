import { formHeading } from "../data";

const setFormHeading = (number) => {
  let step = number;
  switch (step) {
    case 1:
      return formHeading.step1;
    case 2:
      return formHeading.step2;
    case 3:
      return formHeading.step3;
    case 4:
      return formHeading.step4;
    default:
      return formHeading.step1;
  }
}
export default setFormHeading