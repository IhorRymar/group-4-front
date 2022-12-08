export const colorBoxSwitcher = (color) => {
  switch (color) {
    case 'Main expenses':
      return '#FED057';
    case 'Products':
      return '#FFD8D0';
    case 'Car':
      return '#FD9498';
    case 'Self care':
      return '#C5BAFF';
    case 'Child care':
      return '#6E78E8';
    case 'Household products':
      return '#4A56E2';
    case 'Education':
      return '#81E1FF';
    case 'Leisure':
      return '#24CCA7';
    default:
      return '#00AD84';
  }
}