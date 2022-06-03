var cards =[
    {
        imgUrl: "snowboard.png",
        snowboardName: "Niche: Nightshade Snowboard - Women's - 2019/2020", 
        newPrice: "$ 398.93",
        oldPrice: "$ 499.00",
        stars: " "


    },

    {
        imgUrl: "snowboard.png",
        snowboardName: "Niche: Nightshade ", 
        newPrice: "$ 398.93",
        oldPrice: "$ 499.00",
        stars: " "


    },

    {
        imgUrl: "snowboard.png",
        snowboardName: "Niche: Nightshade Snowboard - Women's - 2019/2020", 
        newPrice: "$ 398.93",
        oldPrice: "$ 499.00",
        stars: " "


    }
  
]


var div = document.querySelector('.ksusha')
var htmlStr = '';
for (var i = 0; i < cards.length; i++) {
    htmlStr += `
    <div class="choice_snowboard">
       <div class="picture"> ${cards[i].imgUrl} </div>
       <div class="snowboard_name">${cards[i].snowboardName}</div>
       <div class="new_price">${cards[i].newPrice}</div>
       <div class="old_price">${cards[i].oldPrice}</div>
       <div class="stars"></div>
    </div>
    `

}
div.innerHTML =htmlStr

