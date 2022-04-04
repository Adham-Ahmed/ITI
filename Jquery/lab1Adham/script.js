let productElement="";
let cartArrOfObjs=[]









$(document).ready(
    ()=>
    {
        let currentCart=""
        let total=0;
        

        displayItems();


        $( ".card" ).click(function() {
      
            currentCart=$("#cart").html();
        //let CardToAdd=$(this).clone().children(".card-body").children("a").remove().end().parent(".card").html()
        let CardToAdd=$(this).clone().children(".card-body").children("a").text("Remove").attr("class"," btn btn-danger Remove").end().parent(".card").html();
        CardToAdd='<div class="card w-50" >'+CardToAdd+'</div>'
    //    console.log(CardToAdd)
        let priceString=$(this).clone().children(".card-body").children("p").html()
        price=priceString.match(/\d+/)[0]
        total+=Number(price);
        // console.log(CardToAdd)
        currentCart+=CardToAdd
        $("#cart").html(currentCart);


        refreshTotal(total);

        $(".Remove").click(function() {
            let cardToRemove=$(this).parent().parent();
            let priceString=cardToRemove.children(".card-body").children("p").html()
            price=priceString.match(/\d+/)[0]
            total-=price;
            cardToRemove.remove()
            refreshTotal(total)
            
          })

        
            
        });
        
        $( ".card" ).draggable({
            appendTo: '#cart',
            connectToSortable: ".sortable",
            cursor: "crosshair",
            revert: true
          });
        

        

        


         
        
    }
    
    

    
)




    

function displayItems()
{
    items.forEach(item => {
    productElement+=
`
<div class="m-3 card" >
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