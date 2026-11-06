const avatar = document.querySelector('.top-right-right')
console.log(avatar);

const sidwbarBody = document.querySelector('.sidwbar-body')
console.log(sidwbarBody);

const d = document.querySelector('.d')
console.log(d);
const myiframe = document.querySelector('.myiframe')
console.log(myiframe);



 
avatar.addEventListener('click',function(){
    d.style.display = 'block';
    sidwbarBody.style.display = 'none';
    myiframe.style.height = '100vh'
    myiframe.style.width ='100vw'
    myiframe.style.display = 'block'

    
})
const avatarList = document.querySelectorAll('.userAvatar')
const saveUrl = localStorage.getItem('avatarUrl')
if(saveUrl){
    avatarList.forEach(item=>{
        item.src = saveUrl
    })
}