{/* <div class="product1">
    <h1>BMW M5F90</h1>
    <img src="https://vrcpitbull.com/wp-content/uploads/2011/02/VAMPVAMP%E2%80%A2.jpg">
    <p>Price:</p>
    <p>Description:</p>
    <a>seller profile</a><br>
    <button>Buy</button>
</div> */}

let productsArray = [];
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/Alekskol25/chupapapi123';
xhr.open('GET', url + 'products');
xhr.responseType = 'json';
xhr.onload = function(){
    console.log
    let products = xhr.response;
}