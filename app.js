const counterValue = document.querySelector('#digit');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');
const btns = document.querySelectorAll('.btn')

let count = 0;

btns.forEach(function(buttons){
    buttons.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        
        if(count < 0){
            counterValue.style.color = 'red'
        }else if(count > 0){
            counterValue.style.color = 'green'
        }else{
            counterValue.style.color = 'black'
        }

        // switch(counterValue){
        //     case '>0':
        //         counterValue.style.color = 'red'
        //         break;
        //     case '<0':
        //         counterValue.style.color = 'red';
        //         break;
        //     case '==0':
        //         counterValue.style.color = 'black'
        //         break;
        // }

        counterValue.textContent = count;
    })
})