var dice1 = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  var dice2 = {
    sides: 10,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('button1');

  var button = document.getElementById('button2');
  
  button1.onclick = function() {
    var result = dice1.roll();
    printNumber(result);
  };
  
  button2.onclick = function() {
    var result = dice2.roll();
    printNumber(result);
  };
