let productElement="";
let cartArrOfObjs=[]
let currentCart=""
let total=0;

$(document).ready(
    ()=>
    {
        displayItems();
        enableDrag();

        $( ".card" ).click((event) => {
            EleToAdd=$(event.target).parent().parent()
            addToCart(EleToAdd)
            refreshTotal(total);

           
        });
        
       

          $("#cart").click((event)=>
          {
              removeItem(event.target)
          })
    }   
)




    

function displayItems()
{
    items.forEach(item => {
    productElement+=
`
<div class="card" >
<img class="card-img-top w-50" src="images/${item.img}" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">${item.name}</h5>
  <p class="card-text">Price: ${item.price} L.E</p>
  <a href="#" class="btn btn-primary">Add to Cart</a>
</div>
</div>  
`
    
});

$("#product").html(productElement);

}

function refreshTotal(total)
{
    $("#total").html(
        `
        <p>sub total:${total} L.E</p> 
        <p>vat:${(total*0.14) .toFixed(2)} L.E</p> 
        <p>total:${(total*1.14) .toFixed(2)} L.E</p>  
        `
    )
}

function removeItem(thisx)
{
    let cardToRemove=$(thisx).parent().parent();
    // console.log(cardToRemove.html())
    let priceString=cardToRemove.children(".card-body").children("p").html()
    price=priceString.match(/\d+/)[0]
    total-=price;
    cardToRemove.remove()
    refreshTotal(total)
}

function addToCart(thisx)
{
    currentCart=$("#cart").html();
    let CardToAdd=$(thisx).clone().children(".card-body").children("a").text("Remove").attr("class"," btn btn-danger Remove").end().parent(".card").html();
    // console.log("card to add")
    // console.log(CardToAdd);
    CardToAdd="<div class='card'>"+CardToAdd+"</div>"
    // console.log($("#cart"))
    let priceString=$(thisx).clone().children(".card-body").children("p").html()
    price=priceString.match(/\d+/)[0]
    total+=Number(price);
    currentCart+=CardToAdd
    $("#cart").html(currentCart);
}

function enableDrag()
       {
        $( ".card" ).draggable({
            appendTo: '#cart',
            connectToSortable: ".sortable",
            cursor: "crosshair",
            revert: true
          });
       }