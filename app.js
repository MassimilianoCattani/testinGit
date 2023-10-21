var square = document.getElementById('div1');
var square2 = document.getElementById('div2');
var cont = document.getElementById('container');
  
square.addEventListener('click', function(){
    square.style.backgroundColor = '#ff0000'
    for(let i = 0; i < 10; i++){

        x = document.createElement('div')
        x.style.height = '50px';
        x.style.width = '50px';
        x.style.backgroundColor = '#000'; 
        x.style.margin = '2px';
        x.className = 'pino';
        console.log(x)
        cont.appendChild(x);

    }

    setTimeout(function(){
        square.style.backgroundColor = 'rgb(90, 90, 245)';
    },100)   
        
});
square2.addEventListener('click', function(){
    
    if(cont.children.length == 0){
        return
    }else{
        square2.style.backgroundColor = '#ff0000'; 

        for(let j = 0; j < 10; j++){
        
            cont.removeChild(cont.firstChild)
            
        }

        setTimeout(function(){
            square2.style.backgroundColor = 'rgb(30, 130, 45)';
        },100)
    }
    
})


        
    


    