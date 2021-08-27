let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;//get inner text of target button
        console.log(buttonText);
        if(buttonText==='C'){
           screenValue = "";
           screen.value = screenValue;
        }
        else if(buttonText==='='){
            result =  eval(screenValue);
          screen.value = result;
          screenValue = result;
        }
        else{
            screenValue += buttonText;
            if(checkValidation(screenValue))
            {
                screenValue = screenValue.slice(0, -1);
                alert("Invalid Operator.")
                
            }
            else{
                
                screen.value = screenValue;
            }
        }


    })
    
}

function checkValidation(screenValue)
{
    if(screenValue.slice(-2) === '%-' || screenValue.slice(-2) === '%/'||
    screenValue.slice(-2) === '--' || screenValue.slice(-2) === '+%'||
    screenValue.slice(-2) === '+*' || screenValue.slice(-2) === '/%'||
    screenValue.slice(-2) === '%*' || screenValue.slice(-2) === '*%'||
    screenValue.slice(-2) === '-%' || screenValue.slice(-2) === '-/'||
    screenValue.slice(-2) === '*+' || screenValue.slice(-2) === '*-'||

    screenValue.slice(-2) === '++' || screenValue.slice(-2) === '/*'||
    screenValue.slice(-2) === '%%' || screenValue.slice(-2) === '**'||
    screenValue.slice(-2) === '+/' || screenValue.slice(-2) === '/+'||
    screenValue.slice(-2) === '+-' || screenValue.slice(-2) === '*/'||
    screenValue.slice(-2) === '*%+' || screenValue.slice(-2) === '-+'||
    screenValue.slice(-2) === '/-' || screenValue.slice(-2) === '//'||
    screenValue.slice(-2) === '-*' )
    {
    return true;
    }
    else{
        return false;
    }


}