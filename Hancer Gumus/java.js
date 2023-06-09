const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

        var MainImg = document.getElementById("MainImg");
        var smallimg = document.getElementsByClassName("small-img");

        smallimg[0].onclick = function(){
            MainImg.src = smallimg[0].src;
        }
        smallimg[1].onclick = function(){
            MainImg.src = smallimg[1].src;
        }
        smallimg[2].onclick = function(){
            MainImg.src = smallimg[2].src;
        }
        smallimg[3].onclick = function(){
            MainImg.src = smallimg[3].src;
        }


// Sepete ekle düğmelerini seçin
var addToCartButtons = document.getElementsByClassName('add-to-cart-btn');

// Her düğme için olay dinleyicisini ekle
for (var i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i];
  button.addEventListener('click', addToCart);
}

// Sepete ekle işlevi
function addToCart(event) {
  var product = event.target.parentElement;
  var productName = product.querySelector('h4').innerText;

  // Sepete eklemek için gerekli işlemleri yapın (örneğin veritabanına kaydedebilirsiniz)

  alert(productName + ' sepete eklendi.');
}


// Sepet sayfasını seçin
var cartItemsContainer = document.getElementById('pro');

// Sepet sayfasında ürünleri göster
function showCartItems() {
  // Sepete eklenen ürünleri almak için gereken işlemleri yapın (örneğin veritabanından alabilirsiniz)
  var cartItems = [];

  var products = document.getElementsByClassName('row');
  for (var i = 0; i < products.length; i++) {
    var productName = products[i].querySelector('h4').innerText;
    cartItems.push(productName);
  }

  // Her ürünü sepet sayfasına ekleyin
  cartItems.forEach(function(item) {
    var itemElement = document.createElement('div');
    itemElement.innerText = item;
    cartItemsContainer.appendChild(itemElement);
  });
}

// Sepet sayfasını yükleme olayı
window.addEventListener('load', showCartItems);