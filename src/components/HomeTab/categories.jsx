export const Categories = id => {
  switch (id) {
    case 0:
      return  "Main expenses";
    case 1:
      return "Products";
     case 2:
      return "Car";
    case 3:
      return "Self care";
     case 4:
      return "Child care";
    case 5:
      return "Household products";
     case 6:
      return "Education";
    case 7:
      return "Leisure";
     case 8:
      return "Entertainment";
    case 9:
      return "Help UA Armed Force";
    case 999:
      return "Other expenses";
    default:
      return "---";
  }
};
