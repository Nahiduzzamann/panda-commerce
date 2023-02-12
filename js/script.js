const h2s = document.getElementsByTagName('h2')
for(let h2 of h2s){
    h2.style.color='lightBlue'
}

document.getElementById('backpack').style.backgroundColor='tomato'

const cards = document.getElementsByClassName('card');
for(let card of cards){
    card.style.borderRadius= '30px'
}

function consol(){
    document.getElementById('remove').style.display='none'
    
}

document.getElementById('exampleInputEmail1').addEventListener('keyup',function(event){
    const text = event.target.value;
    console.log(text);
    if(text==='email'){
        document.getElementById('form-btn').removeAttribute('disabled')
    }
    else{
        document.getElementById('form-btn').setAttribute('disabled',true)
    }
})





