const loadData=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>res.json())
    .then(data=>console.log(data))
}


const loadUser=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayUsers(data));
}
const loadPost=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>console.log(data))
}
const displayUsers=(data)=>{
    const ul=document.getElementById('users')
    for(const user of data){
      console.log(user.email)
      const li=document.createElement('li')
      li.innerText=`name: ${user.name} email:${user.email}`
      
      ul.appendChild(li)
    }
}