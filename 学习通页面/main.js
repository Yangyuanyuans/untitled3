const box1 = document.querySelector('#hidebox1')
const box2 = document.querySelector('#hidebox2')
const box3 = document.querySelector('#hidebox3')
const box4 = document.querySelector('#hidebox4')
const box5 = document.querySelector('#hidebox5')

const type1 = document.querySelector('#type1')
const type2 = document.querySelector('#type2')
const type3 = document.querySelector('#type3')
const type4 = document.querySelector('#type4')
const type5 = document.querySelector('#type5')
const zi = document.querySelectorAll('.zi')
type1.addEventListener('click',function(){
    for(let i = 0; i<zi.length;i++){
        zi[i].style.display = 'none';
    }
    box1.style.display='block';
})
type2.addEventListener('click',function(){
    for(let i = 0; i<zi.length;i++){
        zi[i].style.display = 'none';
    }
    box2.style.display='block';
})
type3.addEventListener('click',function(){
    for(let i = 0; i<zi.length;i++){
        zi[i].style.display = 'none';
    }
    box3.style.display='block';
})
type4.addEventListener('click',function(){
    for(let i = 0; i<zi.length;i++){
        zi[i].style.display = 'none';
    }
    box4.style.display='block';
})
type5.addEventListener('click',function(){
    for(let i = 0; i<zi.length;i++){
        zi[i].style.display = 'none';
    }
    box5.style.display='block';
})
const samll2 = document.querySelector('.small2')
samll2.addEventListener('click',function(){
    alert("确定要注销账号吗？")
})
const ods= document.querySelector('.old-s')
const tp =document.querySelector('.top')
const barBody=document.querySelector('.bar-body')
const color = document.querySelector('.color')
const forget =document.querySelector('.forget')
console.log(ods);
ods.addEventListener('click',function(){
    for(let i = 0; i<zi.length;i++){
        zi[i].style.display = 'none';
    }
    tp.style.display= 'none'
    barBody.style.display= 'none'
    color.style.display = 'none'
    forget.style.display='block'
})
const fan = document.querySelector('.box7-f')
fan.addEventListener('click',function(){
    for(let i = 0; i<zi.length;i++){
        zi[i].style.display = 'none';
    }
    box3.style.display='block';
    tp.style.display= 'flex'
    barBody.style.display= 'flex'
    color.style.display = 'block'
    forget.style.display='none'
})
const que3 =document.querySelector('#que3')
console.log(que3);

const frist = document.querySelector('#frist')
console.log(frist);

const second = document.querySelector('#second')
console.log(second);

que3.addEventListener('click',function(){
    if( frist.value !==second.value){
        alert("两次输入密码不一致")
        frist.value='';
        second.value = '';
    }
    else{
        alert('密码修改成功')
    }
    
})
const Infile=document.querySelector('#Infile')
console.log(Infile);

const preview = document.querySelector('#previewImg')
Infile.onchange = function(e){
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader()
    reader.onload = function(){
        preview.src = reader.result
        localStorage.setItem('avatarUrl', reader.result)
    }
    reader.readAsDataURL(file)
}



