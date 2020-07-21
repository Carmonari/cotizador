export const getDifferenceYear = year => {
  return new Date().getFullYear() - year;
}

export const calcBrand = brand => {
  let increase;

  switch(brand) {
    case 'americano':
      increase = 1.30;
      break;
    case 'europeo':
      increase = 1.15;
      break;
    case 'asiatico':
      increase = 1.05;
      break;
    default:
      break;
  }

  return increase;
}

export const getPlan = plan => {
  return (plan === 'basico') ? 1.20 : 1.50;
}

export const firstUppercase = txt => {
  return txt.charAt(0).toUpperCase() + txt.slice(1);
}