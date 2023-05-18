const list= document.querySelector('ul')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(posts=>{
        posts.forEach(post=>{
            const li=document.createElement('li')
            li.innerHTML=post.title
            list.append(li)
        })
    })
    .catch(error=>{
        console.log('Error:', error);
    })
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({title:'I do not know what I should wtite here'})    
    })
    then(response=>response.json())
    .then(posts=>console.log(posts))
    .catch(error=>{
        console.log('Error:', error);}
    )
