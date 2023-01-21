const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordEl1=document.getElementById("password-el1");
let passwordEl2=document.getElementById("password-el2");
let mytextEl=document.getElementById("text-el");
let isClicked=false;


function randomCharactere()
{
    let random=Math.floor(Math.random()*characters.length);
    return characters[random];
}


function generate()
{
    if(isClicked==false)
    {
        
        for(let i=0 ; i< parseInt(mytextEl.value) ; i++)
        {
            passwordEl1.textContent+=randomCharactere();
            passwordEl2.textContent+=randomCharactere();
        }
        isClicked=true;
    }
    else{
        passwordEl1.textContent="";
        passwordEl2.textContent="";
        isClicked=false;
        generate();
    }
}


