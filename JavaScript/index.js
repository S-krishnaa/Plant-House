let bagItem;
onLoad();

function onLoad(){
let bagItemStr  =localStorage.getItem('bagItem');
bagItem = bagItemStr ? JSON.parse(bagItemStr): [];
displayItemsOnHomePage();
displayBagIcon(); 
}

function addToBag(itemId){
        bagItem.push(itemId);
        localStorage.setItem('bagItem',JSON.stringify(bagItem));
        displayBagIcon();
}


function displayBagIcon(){
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if(bagItem.length >0){
    bagItemCountElement.style.visibility = 'visible';
  bagItemCountElement.innerText = bagItem.length;
  }else{
    bagItemCountElement.style.visibility = 'hidden';
  }
}
function displayItemsOnHomePage(){
        let itemContainerElement = document.querySelector('.items-container');
        if(!itemContainerElement){
          return;
        }
        let innerHTML = '';
        items.forEach(items => {
        innerHTML += `
                <div class="item-container">
                <img class="item-image" src="${items.item_image}" alt="Item Image">
                <div class="rating">
                    ${items.rating.stars}⭐|${items.rating.noOfReviews}
                </div>
                <div class="plant-name">${items.plant_name}</div>
                <div class="price">
                    <span class="current-price">₹${items.current_price}</span>
                    <span class="original-price">₹${items.original_price}</span>
                    <span class="discount">(${items.discount_per}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${items.id})">Add to Cart</button>
            </div>`;
  })
  
  itemContainerElement.innerHTML = innerHTML;
}

/* Slide image ----
-------------
-------------
-------------  */
 let currentIndex = 0;

 function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  if (index < 0) index = totalSlides - 1;
   if (index >= totalSlides) index = 0;

   currentIndex = index;
   const offset = -currentIndex * 100;
   document.querySelector('.cover').style.transform = `translateX(${offset}%)`;
 }
 function changeSlide(direction) {
   showSlide(currentIndex + direction);
 }

 // ⏱️ Auto-slide every 2 seconds
 setInterval(() => {
   changeSlide(1);
 }, 3000);


   function toggleCart() {
    document.getElementById("sideCart").classList.toggle("open")
   }

   function closeCart() {
     document.getElementById("sideCart").classList.remove("open")
  }

  