//JavaScript object Notation=JSON

const user={id:11,name:'Gorib Amir', job:'actor'}
const stringified=JSON.stringify(user)//string a convert korey then pathate hobe 
// console.log(user)
// console.log(stringified)



const shop={
    name:'Alia Store',
    address:'Ranbir roed',
    products:['laptop','mobile','pepsi'],
    owner:{
        name:'Alia Bhat',
        profession:'actor'
    },
    isExpensive:false
};
//string a convert hoye jabe then aita k r dynamically access kora jabe na
const shopStringified=JSON.stringify(shop)
// console.log(shop)
console.log(shopStringified)
//parse korar por dynamically access kora jabe 
const converted=JSON.parse(shopStringified)
console.log(converted)