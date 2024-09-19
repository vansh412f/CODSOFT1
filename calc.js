var buttons = document.querySelectorAll("button");
var show = document.getElementById("answer");

let input = '';

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        var value = e.target.innerText;
        if (value === 'AC') {
            input = '';
            show.innerText = '0';
        }
        else if (value === '=') {
            try {
                let result = eval(input); 
                show.innerText = result;
                input = result.toString(); 
            } catch {
                show.innerText = 'Error';
                input = '';
            }
        } 
        else if (value === '%') {
            if (input) {
                input = eval(input);
                input = (parseFloat(input) / 100).toString();
                show.innerText = input;
            }
        } 
        else if (e.target.id === 'back' || e.target.closest('#back')) {
            if (input.length > 0) {
                input = input.slice(0, -1); 
                show.innerText = input || '0';
            }
        }
        else {
            input += value;
            show.innerText = input;
        }
    });
});