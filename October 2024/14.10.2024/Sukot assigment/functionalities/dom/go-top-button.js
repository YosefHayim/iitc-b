import { goBackTopBtn } from "../dom/domEls.js";

const backTopClick = () => {

  goBackTopBtn.addEventListener('click', (ev) => {
  
    window.scrollTo({ top: 0, behavior: 'smooth' });
  })
  
}

export {backTopClick}