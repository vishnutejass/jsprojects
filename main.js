const changeThemeBtn = document.querySelector('.change-theme-btn');
const body = document.querySelector('body');
const heading = document.querySelector('.container h1');


changeThemeBtn.addEventListener('click',()=>{
    // if(body.classList.contains('light')){
    //     body.classList.remove('light')
    //     body.classList.add('dark')
    // } else{
    //     body.classList.remove('dark')
    //     body.classList.add('light')
    // } 
    body.classList.toggle('light');
    body.classList.toggle('dark');
    changeThemeBtn.classList.toggle('light');
    changeThemeBtn.classList.toggle('dark');
    
    if(body.classList.contains('dark')) {
        heading.style.color = 'white';
    }
   else{
    heading.style.color = 'black';
   }
    
})