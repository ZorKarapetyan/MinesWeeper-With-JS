const blockarr = Array.from(document.querySelectorAll('div'));

let randarr = [];
let i = 0;
while(i < 7){
    let rand = Math.round(Math.random() * 100);
    if(!randarr.includes(rand)){
        randarr.push(rand);
        i++
    } else{
        continue;
    }
}

let moves = 0;


blockarr.map((el, i) => {
    let count = 0;
    el.addEventListener('click', () => {
        moves++;
        if(el.innerText === ''){
        if(randarr.includes(i)){
            document.body.innerHTML = `<h1 style="text-align: center">You Lose</h1>
                                        <h1 style="text-align: center; color: red;">Boooooooom</h1>
                                        <a href = "./index.html"><button>Play Again</button></a>
            `
        } else{
            if( i !== 9 && randarr.includes(i+1)){
                count++;
            }
            if( i !== 0 && randarr.includes(i-1)){
                count++;
            }
            if(randarr.includes(i+10)){
                count++;
            }
            if(randarr.includes(i-10)){
                count++;
            }
            if(randarr.includes(i-9)){
                count++;
            }
            if(randarr.includes(i-11)){
                count++;
            }
            if(randarr.includes(i+9)){
                count++;
            }
            if(randarr.includes(i+11)){
                count++;
            }
            el.innerText = count;
        }
    }
    if(moves === 93){
        alert('You Win')
    }
    })
})
