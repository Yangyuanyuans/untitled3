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
    sidwbarBody.style.display = 'block';
    // myiframe.style.height = '100vh'
    // myiframe.style.width ='100vw'
    myiframe.style.display = 'block'

    
})
const avatarList = document.querySelectorAll('.userAvatar')
const saveUrl = localStorage.getItem('avatarUrl')
if(saveUrl){
    avatarList.forEach(item=>{
        item.src = saveUrl
    })
}
const s = document.querySelector('#s')
const  c= document.querySelector('#c')
const y = document.querySelector('#y')
const  k= document.querySelector('#k')
const w = document.querySelector('#w')
const b = document.querySelector('#b')
const x = document.querySelector('#x')
const  xz= document.querySelector('#xz')
const  yp= document.querySelector('#yp')
const  t= document.querySelector('#t')
const s1= document.querySelector('#s1')
const  c1= document.querySelector('#c1')
const y1 = document.querySelector('#y1')
const  k1= document.querySelector('#k1')
const w1 = document.querySelector('#w1')
const b1 = document.querySelector('#b1')
const x1 = document.querySelector('#x1')
const  xz1= document.querySelector('#xz1')
const  yp1= document.querySelector('#yp1')
const  t1= document.querySelector('#t1')
const z = document.querySelectorAll('.z')
console.log(z)
function chocieSidebar(type,type1){
    type1.addEventListener('click',function(){
        for(let i = 0;i<z.length;i++){
            z[i].style.display='none';
        }
        myiframe.style.display='none'
        type.style.display='block';
    })

}
chocieSidebar(s,s1)
chocieSidebar(c,c1)
chocieSidebar(y,y1)
chocieSidebar(k,k1)
chocieSidebar(w,w1)
chocieSidebar(b,b1)
chocieSidebar(x,x1)
chocieSidebar(xz,xz1)
chocieSidebar(yp,yp1)
chocieSidebar(t,t1)
chocieSidebar()