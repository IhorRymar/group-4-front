import { createGlobalStyle } from 'styled-components';
import baseVars from './vars';

export default createGlobalStyle`
body {
  font-family: ${ baseVars.fonts.main}, sans-serif;       /*'Circe' */
  font-style: normal;
  color: ${baseVars.colors.mainText};                     /*#000000*/
  font-size: 16px;
}

ul {
  list-style: none;
}

a {
  color: ${baseVars.colors.mainText};
  text-decoration: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
}
`;