const targetElement = document.querySelectorAll('.animationTarget');
document.addEventListener('scroll', function(){
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .3
        if(window.innerHeight > getElementDistance){
            targetElement[i].classList.add('show');
        }
        
    }

})

const targetNav = document.querySelector('#header-top');
document.addEventListener('scroll', function(){
    const targetNavDistance = targetNav.getBoundingClientRect().bottom

    if(targetNavDistance <= 0){  
        document.getElementById('groval-nav').classList.add('nav_fixed');
    }
    if(targetNavDistance > 0){
        document.getElementById('groval-nav').classList.remove('nav_fixed');
    }
})

const targetImg = document.querySelector('#main-slider');
document.addEventListener('scroll', function(){
    const targetImgDistance = targetNav.getBoundingClientRect().top + targetImg.clientHeight * .7

    if(targetImgDistance <= 0){  
        document.getElementById('bg').classList.add('bg-active');
    }
})



window.addEventListener('load',function(){
    const animationTargetElements = document.querySelectorAll('.textAnimation');
    for (let i = 0; i < animationTargetElements.length; i++) {
        const taElement = animationTargetElements[i];
            texts = taElement.textContent,
            textsArray = [];
           
        taElement.textContent = '';
    
        for (let j = 0; j < texts.split("").length; j++) {
            const t = texts.split("")[j]
            if (t === " ") {
              textsArray.push(" ");  
            }else{
            textsArray.push('<span><span style="animation-delay: ' + (.7 +(j * .07)) + 's;">' + t + '</span></span>')  
            } 
        }
        
        for (let k = 0; k < textsArray.length; k++) {
            taElement.innerHTML += textsArray[k]
        }
            
    }
   
})


