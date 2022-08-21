import { Step1, Step2, Step3, Step4 } from "./";
const setFormSubPage = (number) => {
  let step = number;
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    default:
      return <Step1 />;
  }
}
export default setFormSubPage;