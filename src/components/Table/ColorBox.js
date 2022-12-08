export const colorBoxSwitcher = (color) => {
  switch (color) {
    case 'House rent and keeping':
      return '#FED057';
    case 'Food':
      return '#FFD8D0';
    case 'Car':
      return '#FD9498';
    case 'Child care':
      return '#C5BAFF';
    case 'Education':
      return '#6E78E8';
    case 'Self Care':
      return '#4A56E2';
    case 'Leisure':
      return '#81E1FF';
    case 'Household products':
      return '#24CCA7';
    case 'Help UA Armed Force':
      return '#00AD84';
    case 'Other expenses':
      return '#4A8726';
    default:
      return '#A08320';
  }
}