let calculation = localStorage.getItem('calculation') || '';

      displayCalculation();

      function updateCalculation(value) {
        calculation += value;
        displayCalculation();
        localStorage.setItem('calculation', calculation);
      }

      function displayCalculation() {
        document.querySelector('.js-display').innerHTML = calculation;
      }
      
      function keyPressed(value) {
        if(['1','2','3','4','5','6','7','8','9','0','+','-','*','/'].indexOf(value) > -1){
          updateCalculation(value);
        } else if (value === '=' || value === 'Enter') {
          calculation = eval(calculation);
          displayCalculation();
          localStorage.setItem('calculation', calculation);
        } else if (value === 'Backspace') {
          calculation = '';
          localStorage.setItem('calculation', calculation);
          displayCalculation();
        }
      }