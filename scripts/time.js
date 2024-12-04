var startDate = new Date('2024-08-26');
var weekType

var currentDate = new Date();

var diffInWeeks = Math.floor((currentDate - startDate) / (7 * 24 * 60 * 60 * 1000));

if (diffInWeeks % 2 === 0) {
  var weekType = 'вторая';
} else {
  var weekType = 'первая';
}
