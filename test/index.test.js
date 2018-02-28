var cm = require('./index.js').condensedNumbers;

if (cm(0) !== '0') {
  console.error('Test 1 Failed');
}

if (cm(100) !== '100') {
  console.error('Test 2 Failed');
}

if (cm(2000) !== '2k') {
  console.error('Test 3 Failed');
}

if (cm(35100) !== '35.1k') {
  console.error('Test 4 Failed');
}

if (cm(475000) !== '4.7L') {
  console.error('Test 5 Failed');
}

if (cm(5120000) !== '51.2L') {
  console.error('Test 6 Failed');
}

if (cm(5120000) !== '51.2L') {
  console.error('Test 6 Failed');
}

if (cm(NaN) !== '0') {
  console.error('Test 8 Failed');
}

if (cm(undefined) !== '0') {
  console.error('Test 9 Failed');
}
