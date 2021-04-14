// Create a function named talkingCalendar that takes in a date string with the format YYYY / MM / DD, and returns a new human readable date that looks like December 2nd, 2017.

const monthConverter = function (date) {
  let month = '';

  for (let i = 5; i <= 6; i++) {
    month += date[i];
  }

  switch (month) {
    case '01':
      return 'January';
      break;
    case '02':
      return 'February';
      break;
    case '03':
      return 'March';
      break;
    case '04':
      return 'April';
      break;
    case '05':
      return 'May';
      break;
    case '06':
      return 'June';
      break;
    case '07':
      return 'July';
      break;
    case '08':
      return 'August';
      break;
    case '09':
      return 'September';
      break;
    case '10':
      return 'October';
      break;
    case '11':
      return 'November';
      break;
    case '12':
      return 'December';
      break;
    default:
      return 'Not a valid month';
      break;
  }
}

const dayConverter = function (date) {
  let day = '';
  for (let i = 8; i <= 9; i++) {
    day += date[i];
  }
  
  if (day[0] !== '1' && day[1] === '1') {
    day += 'st';
  } else if (day[1] === '2') {
    day += 'nd';
  } else {
    day += 'th';
  }

  let cleanedDay = '';
  if (day[0] === '0') {
    for (i = 1; i < day.length; i++) {
      cleanedDay += day[i];
    }
  } else {
    for (i = 0; i < day.length; i++) {
      cleanedDay += day[i];
    }
  }
  
  return cleanedDay;
  
}

const talkingCalendar = function (date) {

  let year = '';
  for (let i = 0; i < 4; i++) {
    year += date[i];
  }

  let day = dayConverter(date);

  let month = monthConverter(date);

  return `${month} ${day}, ${year}`;
};


//TEST
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));