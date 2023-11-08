let pic = document.querySelector('#pic')
let love = document.querySelector('i')
let liked = document.querySelector('#liked')
var flag = 0

function changeClass(){
    if (flag == 0){
    document.querySelector('#liked').className="ri-heart-3-fill";
    liked.style.color="red"
    flag = 1;
    }
    else{
        document.querySelector('#liked').className="ri-heart-3-line";
        liked.style.color="black"
        flag=0;
    }

    
}

pic.addEventListener('dblclick',function(){
    love.style.transform='translate(-50%, -50%) scale(1.2)';
    
    setTimeout(() => {
        love.style.opacity=0.6
    }, 100);
    setTimeout(() => {
        love.style.opacity=0
    },1000);
    setTimeout(function(){
        love.style.transform='translate(-50%, -50%) scale(0)';
    },1100)
    if(flag==0){
    changeClass()
    }
})