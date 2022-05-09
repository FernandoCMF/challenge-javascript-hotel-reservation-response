var user = {
  typeClient: 'Regular',
};

var Lakewood = {
  classification: 3,
  nameHotel: 'Lakewood',
  rateWeekCN: 110, // 110
  rateWeekPF: 80,
  rateWeekendCN: 90,
  rateWeekendPF: 80,
  valueTotal: 0,
};

var Bridgewood = {
  classification: 4,
  nameHotel: 'Bridgewood',
  rateWeekCN: 160, // 160
  rateWeekPF: 110,
  rateWeekendCN: 60,
  rateWeekendPF: 50,
  valueTotal: 0,
};

var Ridgewood = {
  classification: 5,
  nameHotel: 'Ridgewood',
  rateWeekCN: 220, //220
  rateWeekPF: 100,
  rateWeekendCN: 140,
  rateWeekendPF: 40,
  valueTotal: 0,
};

const date = new Date();
const options = { weekday: 'long' };
date.toLocaleDateString('en-US', options);

function calculateDateDiff() {
  let initialDate = new Date('2009-03-13');
  let finalDate = new Date('2009-03-14');

  let diffInTime = Math.abs(finalDate - initialDate);
  let timeInOneDay = 1000 * 60 * 60 * 24;
  let diffInDay = diffInTime / timeInOneDay;

  return diffInDay;
}

function valueLakewood() {
  let result;

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
  Lakewood.valueTotal = result;
  return result;
}

function valueBridgewood() {
  let result;

  if (user.typeClient === 'Regular') {
    if (options.weekday === 'Saturday' || options.weekday === 'Sunday') {
      result = calculateDateDiff() * Bridgewood.rateWeekendCN;
    } else {
      result = calculateDateDiff() * Bridgewood.rateWeekCN;
    }
  } else if (user.typeClient === 'Rewards') {
    if (options.weekday === 'Saturday' || options.weekday === 'Sunday') {
      result = calculateDateDiff() * Bridgewood.rateWeekendPF;
    } else {
      result = calculateDateDiff() * Bridgewood.rateWeekPF;
    }
  } else {
    console.log('Client not exist');
  }
  Bridgewood.valueTotal = result;
  return result;
}

function valueRidgewood() {
  let result;
  if (user.typeClient === 'Regular') {
    if (options.weekday === 'Saturday' || options.weekday === 'Sunday') {
      result = calculateDateDiff() * Ridgewood.rateWeekendCN;
    } else {
      result = calculateDateDiff() * Ridgewood.rateWeekCN;
    }
  } else if (user.typeClient === 'Rewards') {
    if (options.weekday === 'Saturday' || options.weekday === 'Sunday') {
      result = calculateDateDiff() * Ridgewood.rateWeekendPF;
    } else {
      result = calculateDateDiff() * Ridgewood.rateWeekPF;
    }
  } else {
    console.log('Client not exist');
  }

  Ridgewood.valueTotal = result;
  return result;
}

function checkEqualValue() {
  let Values = [valueLakewood(), valueBridgewood(), valueRidgewood()];
  let repeatValue = Values.slice().sort();
  let result = [];

  let checkValue = [Lakewood, Bridgewood, Ridgewood];

  for (var i = 0; i < repeatValue.length - 1; i++) {
    if (repeatValue[i + 1] == repeatValue[i]) {
      result.push(`${checkValue[i].classification}`);
    }
  }
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

//cliente , datainicial, datafinal
function getCheapestHotel(input) {
  //DO NOT change the function's name.
  return 'Cheapest hotel name';
}

exports.getCheapestHotel = getCheapestHotel;
