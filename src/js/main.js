import './vendor/focus-visible.min.js'; 
import './components/main-slider';
import './components/catalog-slider';
import './components/marketing';
import './components/catalog-filter-toggle';
import './components/catalog-props';
import vars from './_vars';
import {resizeContent} from './functions/resize';
import {scrollTo} from './functions/smooth-scroll';
import {disableScroll, enableScroll} from './functions/stop-scroll';

//disableScroll(fix) // fix -> class of element with position: fixed


vars.$freeDeliveryBtn.addEventListener('click', (e) => {
  e.currentTarget.closest('.free-delivery').style.display = "none";
})