const getUserId=document.querySelector('.userid') as HTMLInputElement;
const getuserPin=document.querySelector('.userpin') as HTMLInputElement;
const submitBtn=document.querySelector('.submitBtn') as HTMLButtonElement;
const body=document.querySelector('body') as HTMLBodyElement;
const loginBox=document.querySelector('.login-box') as HTMLDivElement;
const atm=document.querySelector('.atm-machine') as HTMLDivElement;
const heading=document.querySelector('h1') as HTMLHeadingElement;
interface atmUsers{
    name:string,
    userId:string,
    pin:number,
}
const user1:atmUsers={
    name:'Abu Bakkar',
    userId:'34px',
    pin:1111
};
const user2:atmUsers={
    name:'Arslan',
    userId:'45pc',
    pin:2222
};
const user3:atmUsers={
    name:'Zain',
    userId:'78pv',
    pin:3333
};
const user4:atmUsers={
    name:'Hassan',
    userId:'67vc',
    pin:4444
};
const user5:atmUsers={
    name:'Noman',
    userId:'90we',
    pin:5555
};
const user6:atmUsers={
    name:'Ali',
    userId:'61bn',
    pin:6666
};
const user7:atmUsers={
    name:'Usman',
    userId:'90po',
    pin:7777
};
const user8:atmUsers={
    name:'Haris',
    userId:'89nv',
    pin:8888
};
const user9:atmUsers={
    name:'Usman',
    userId:'74lk',
    pin:9999
};
const user10:atmUsers={
    name:'Usman',
    userId:'12an',
    pin:1010
};

const users=[user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let getUserPinValue:number=+(getuserPin.value);
    let getUserIdValue:string=getUserId.value;
    const findUserPin:any=users.find(f=>f.pin===getUserPinValue);
    const findUserId:any=users.find(f=>f.userId===getUserIdValue)
    if(findUserId?.userId && findUserPin?.pin){
        body.style.background='#16453e';
        loginBox.classList.add('hidden');
        atm.classList.remove('hidden');
        heading.innerText=`Welcome Back Mr.${findUserPin.name}`
    }else{
        heading.innerText=`Invalid userId or Pin`
    }
})