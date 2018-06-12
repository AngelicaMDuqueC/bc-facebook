import { button } from '../molecules/index.js';

import {
  parseComponent,
  addNewChild
} from '../../utils/DOMUtils.js';

function header() {
  const component = (`
    <header>
      logo
      button
      talCosa
    </header>
  `);

  const buttonDefinition = button('Button', 'buttonTrigger', () => { console.log('Soy un boton :D') });

  return addNewChild(parseComponent(component), buttonDefinition);
}

export default header;