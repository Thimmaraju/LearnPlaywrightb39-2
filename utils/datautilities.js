const { randomInt, randomUUID } = require('node:crypto');

function randomIndianPhoneNumber() {
  const firstDigit = randomInt(6, 10);
  const remainingDigits = randomInt(0, 1_000_000_000)
    .toString()
    .padStart(9, '0');

  return `+91-${firstDigit}${remainingDigits}`;
}

function randomUSPhoneNumber() {
  const lastTwoDigits = randomInt(0, 100).toString().padStart(2, '0');

  return `+1-202-555-01${lastTwoDigits}`;
}

function randomEmail() {
  return `user-${randomUUID()}@example.com`;
}

module.exports = {
  randomIndianPhoneNumber,
  randomUSPhoneNumber,
  randomEmail,
};


