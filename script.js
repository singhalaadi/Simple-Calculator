function Solve(val) {
   const disp = document.getElementById('ans');
   if (disp) {
      if (val === '%') {
         const currentValue = disp.value;
         disp.value = currentValue / 100;
      } else {
         disp.value += val;
      }
   } else {
      console.error('ans element not found');
   }
}

function Answer() {
   const num1 = document.getElementById('ans').value;
   try {
      const num2 = eval(num1);
      document.getElementById('ans').value = num2;
   } catch (e) {
      if (e instanceof SyntaxError) {
         document.getElementById('ans').value = 'Error: invalid expression';
      } else {
         console.error('Error evaluating expression:', e);
      }
   }
}

function Clear() {
   document.getElementById('ans').value = '';
}

function Back() {
   const del = document.getElementById('ans');
   if (del.value.length > 0) {
      del.value = del.value.slice(0, -1);
   }
}

document.addEventListener('keydown', function (event) {
   const key = event.key;
   const validKeys = '0123456789+-*/.%';
   if (validKeys.includes(key)) {
      Solve(key);
   } else if (key === 'Enter') {
      Answer();
   } else if (key === 'Backspace') {
      Back();
   } else if (key.toLowerCase() === 'c') {
      Clear();
   }
});
