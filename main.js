let userHand = prompt('Entekhabe shoma chie? sang kaghaz gheychi:');

let cpuHand;

generateHand();
check();

function generateHand(){
   let random = Math.floor(Math.random()*3) + 1;

    if(random === 1)
        cpuHand = 'sang';
    
    else if(random === 2)
        cpuHand = 'kaghaz';

    else if(random === 3)
        cpuHand = 'gheychi';

    console.log(cpuHand);
    

}

function check(){
    if (cpuHand === userHand)
        alert ('bazi mosavi shod!');
    else{
          //true: user borde, false: cpu borde
        let isWin = false;

        if(cpuHand === 'sang' && userHand === 'kaghaz')
            isWin = true;
        else if (cpuHand === 'kaghaz' &&  userHand === "gheyghi")
            isWin = true;
        else if (cpuHand === "gheychi" && userHand === "sang")
            isWin = true;


        if(isWin === true)
            alert('soma bazi ro bordid');
        else 
            alert('shoma bakhti')
    }
}