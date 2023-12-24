const urlParams=new URLSearchParams(window.location.search)
const id=urlParams.get('id')
console.log(id)
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/lalala2223/asasa';
xhr.open('GET', url + '/users/'+id);
xhr.responseType = 'json';
xhr.onload = function(){
let user = xhr.response
console.log(user)
let userInfo=$("#userInfo")
let html = `  
        <div class="sellerprofile">
        <h1 class="name">${user.name} ${user.surname}</h1>
        <img class="seller" src="${user.photo_url}">
        <p class="b">balance:${user.balance}$ </p>
        </div>
        <h1 class="sp">Seller products</h1>
        <div class="items">
            <div class="sellersprod">
                <h1>Babijohn</h1>
                <img class="pfp" src="https://ih1.redbubble.net/image.4611158023.8619/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg">
                <p>Price: 2$</p>
                <p>Description: works good</p>
            </div>
        </div>`
userInfo.html(html)
}
xhr.send()