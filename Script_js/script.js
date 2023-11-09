const button = document.querySelector(".btn1");
let a =1;

button.addEventListener('click',()=>{
  if (a==1){
document.querySelector('.small').style.display ='flex';
a-=1;
  }
  else if(a==0){
    document.querySelector('.small').style.display ='none';
    a=1;
  }
  else{
    window.addEventListener('click',()=>{
      document.querySelector('.small').style.display ='none';
    a=1;
    })
  }
})