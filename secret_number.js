'use strict';

module.exports = function secretNumber() {

  let secretNumberGenerator = Math.random() * 1000000;
  return function num(){
    return secretNumberGenerator;
  };
};


