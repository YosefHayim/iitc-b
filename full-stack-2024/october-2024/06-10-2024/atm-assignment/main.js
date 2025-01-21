import {storedPIN} from "./static-data.js";
import { checkPinCorrect } from "./checkPIN.js";

const main = () => {
  checkPinCorrect(storedPIN);
}

main()