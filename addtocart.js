const product = [
    {
        id: 0,
        image: './images/phone.jpeg',
        title: 'Iphone 13',
        price: 1500,
    },
    {
        id: 1,
        image: './images/ecouteurs-airpods-apple-sans-fil-blanc-prix-tunisie.webp',
        title: 'Air pods pro',
        price: 60,
    },
    {
        id: 2,
        image: './images/téléchargement.jpeg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: './images/51-+O3-wFxL._AC_UF1000,1000_QL80_.jpg',
        title: 'Head Phones',
        price: 100,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;

    return(
        `<div class='box'>
        <div class='img-box'>
        <img class='images' src=${image}></img>
    </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
        
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]})
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.lenght;
    if(cart.lenght==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+" .00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}></img>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
    document.getElementById('count').innerHTML = j
  
 
 }
