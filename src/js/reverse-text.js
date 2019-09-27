const textA = document.querySelector('[data-text-a]').textContent;
const textB = document.querySelector('[data-text-b]');

if(textA){
    const textSwitcher = text => {
        return [...text].reverse().join('');
    }
    textB.innerHTML = textSwitcher(textA)
}