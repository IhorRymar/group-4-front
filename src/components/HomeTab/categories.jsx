export const Categories = id => {
  switch (id) {
    case 0:
      return  "House rent and keeping";
    case 1:
      return "Food";
     case 2:
      return "Car";
    case 3:
      return "Child care";
     case 4:
      return "Education";
    case 5:
      return "Self care";
     case 6:
      return "Leisure";
    case 7:
      return "Household products";
     case 8:
      return "Help UA Armed Force";
    case 999:
      return "Other expenses";
    default:
      return "---";
  }
};
