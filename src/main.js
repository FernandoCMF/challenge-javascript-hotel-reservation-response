/*
 Verificar quando for finais de semena 
 
 Verificar quando o valueTotal for igual
 E descobrir como fazer teste unitario
 Verificar se e possivel fazer uns input sem interface
*/

var user = {
  typeClient: 'Regular',
};

var Lakewood = {
  classification: 3,
  rateWeekCN: 110, // 110
  rateWeekPF: 80,
  rateWeekendCN: 90,
  rateWeekendPF: 80,
  valueTotal: '',
};

var Bridgewood = {
  classification: 4,
  rateWeekCN: 160, // 160
  rateWeekPF: 110,
  rateWeekendCN: 60,
  rateWeekendPF: 50,
  valueTotal: '',
};

var Ridgewood = {
  classification: 5,
  rateWeekCN: 220, //220
  rateWeekPF: 100,
  rateWeekendCN: 140,
  rateWeekendPF: 40,
  valueTotal: '',
};

function calculateDateDiff() {
  let dataInicial = new Date('2009-03-13');
  let dataFinal = new Date('2009-03-14');

  let diffInTime = Math.abs(dataFinal - dataInicial);
  let timeInOneDay = 1000 * 60 * 60 * 24;
  let diffInDay = diffInTime / timeInOneDay;

  return diffInDay;
}

function valueLakewood() {
  let result;
  let date = new Date();
  let options = { weekday: 'long' };
  date.toLocaleDateString('en-US', options);

  if (user.typeClient === 'Regular') {
    if (options.weekday === 'Saturday' || options.weekday === 'Sunday') {
      result = calculateDateDiff() * Lakewood.rateWeekendCN;
    } else {
      result = calculateDateDiff() * Lakewood.rateWeekCN;
    }
  } else if (user.typeClient === 'Rewards') {
    if (options.weekday === 'Saturday' || options.weekday === 'Sunday') {
      result = calculateDateDiff() * Lakewood.rateWeekendPF;
    } else {
      result = calculateDateDiff() * Lakewood.rateWeekPF;
    }
  } else {
    console.log('Client not exist');
  }

  return result;
}

function valueBridgewood() {
  let result;
  if (user.typeClient === 'Regular') {
    result = calculateDateDiff() * Bridgewood.rateWeekCN;
  } else if (user.typeClient === 'Rewards') {
    result = calculateDateDiff() * Bridgewood.rateWeekPF;
  } else {
    console.log('Client not exist');
  }

  return result;
}

function valueRidgewood() {
  let result;
  if (user.typeClient === 'Regular') {
    result = calculateDateDiff() * Ridgewood.rateWeekCN;
  } else if (user.typeClient === 'Rewards') {
    result = calculateDateDiff() * Ridgewood.rateWeekPF;
  } else {
    console.log('Client not exist');
  }

  return result;
}

// function checkClassification() {
//   let result;

//   let arr = [
//     Lakewood.classification,
//     Bridgewood.classification,
//     Ridgewood.classification,
//   ];

//   let higherValue = Math.max(...arr);

//   result = higherValue;

//   return result;
// }

function checkEqualValue() {
  let tempResult = lowerValueHotel;
  let result;

  let Values = [valueLakewood(), valueBridgewood(), valueRidgewood()];
  let valuesRepeat = [];

  Values.forEach((item) => {
    if (!valuesRepeat.includes(item)) {
      valuesRepeat.push(item);
    }
  });

  return valuesRepeat;
}

function lowerValueHotel() {
  let result;

  let arr = [valueLakewood(), valueBridgewood(), valueRidgewood()];

  let min = arr.map(Number).reduce(function (a, b) {
    return Math.min(a, b);
  });

  result = min;

  return result;
}

console.log('Quantidade de dias: ' + calculateDateDiff());
console.log('Tipo de cliente: ' + user.typeClient);
console.log('Lakewood: ' + valueLakewood());
console.log('Bridgewood: ' + valueBridgewood());
console.log('Ridgewood: ' + valueRidgewood());
console.log('Menor valor: ' + lowerValueHotel());
console.log('Melhor opcao de hotel: ' + checkEqualValue());

function getCheapestHotel(input) {
  //DO NOT change the function's name.
  return 'Cheapest hotel name';
}

exports.getCheapestHotel = getCheapestHotel;
