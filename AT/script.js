randDrinks();

async function buscaNome(){
    clear(resultDrinksNome);
    // document.getElementById("rand-drinks").style.visibility = "hidden";
    let keyword = document.getElementById("keyword-nome").value;
    let url = 'https://the-cocktail-db.p.rapidapi.com/search.php?s=' + keyword;
    const response = await fetch (url,{
        "method": "GET",
        "headers": {
            // "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            // "x-rapidapi-key": "aa0e46214fmsh4448a29867e9d7cp11a975jsnf828ec129340"
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "8999ac50e3msh8c728eab3188d6cp1acaaajsn2748f9d796c1"
        }
    });
    const json = await response.json(url);
    if(json.drinks != null){
        for (let drink of json.drinks){
            let title = document.createElement("p")
            title.innerText = drink.strDrink;            
            title.className = "title-card"            
          
            let imagem = document.createElement("img");
            imagem.src = drink.strDrinkThumb;
            imagem.style.width = "200px";
            imagem.className = "imagem-card"

            let div_btnInfo = document.createElement("div");
            div_btnInfo.className = "btnInfo" 
            let btnInfo = document.createElement("button");
            btnInfo.textContent = "Abrir";
            btnInfo.id = `id${drink.idDrink}`;
            btnInfo.className = "draw-border";

            let divInfo = document.createElement("div");
            divInfo.id = `div${drink.idDrink}`;
            divInfo.className = "content";
            divInfo.innerHTML = `Categoria: ${drink.strCategory}`;
            divInfo.innerHTML += `<p>Copo: ${drink.strGlass}`;

            let div_buscaNome = document.createElement("div");
            div_buscaNome.className = "show-drinks";

            div_buscaNome.appendChild(title);
            div_buscaNome.appendChild(imagem);
            div_buscaNome.appendChild(div_btnInfo);
            div_btnInfo.appendChild(btnInfo);
            div_btnInfo.appendChild(divInfo);
            document.getElementById("resultDrinksNome").appendChild(div_buscaNome);     
        }
      
        var coll = document.getElementsByClassName("draw-border");
        collapsible(coll)
    }else{
        let erroNome = document.getElementById("resultDrinksNome");
        erroNome.innerText = "Nenhum resultado encontrado";
        erroNome.style.color = "white";
        console.log(response.status);
    }
}

async function buscaTipo(){
  clear(resultDrinksTipo);
  // document.getElementById("rand-drinks").style.visibility = "hidden";
  let keyword = document.getElementById("keyword-tipo").value;
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + keyword;
  const response = await fetch (url,{
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key": "aa0e46214fmsh4448a29867e9d7cp11a975jsnf828ec129340"
      }
  });
  const json = await response.json(url);
  console.log(json);

  if(json.drinks != null){
    for (let drink of json.drinks){
        let title = document.createElement("p")
        title.innerText = drink.strDrink;            
        title.className = "title-card"            
      
        let imagem = document.createElement("img");
        imagem.src = drink.strDrinkThumb;
        imagem.style.width = "200px";
        imagem.className = "imagem-card"

        let div_buscaTipo = document.createElement("div");
        div_buscaTipo.className = "show-drinks";

        div_buscaTipo.appendChild(title);
        div_buscaTipo.appendChild(imagem);
        document.getElementById("resultDrinksTipo").appendChild(div_buscaTipo);     
    }
}else{
    let erroTipo = document.getElementById("resultDrinksTipo");
    erroTipo.innerText = "Nenhum resultado encontrado";
    erroTipo.style.color = "white";
    console.log(response.status);
}
}

async function buscaIng(){
  clear(resultDrinksIng);
  // document.getElementById("rand-drinks").style.visibility = "hidden";
  let keyword = document.getElementById("keyword-ing").value;
  let url = 'https://the-cocktail-db.p.rapidapi.com/search.php?s=' + keyword;
  const response = await fetch (url,{
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key": "aa0e46214fmsh4448a29867e9d7cp11a975jsnf828ec129340"
        }
      });

  const json = await response.json(url);
  console.log(json);
  if(json.drinks != null){
    for (let drink of json.drinks){
        let title = document.createElement("p")
        title.innerText = drink.strDrink;            
        title.className = "title-card"            
      
        let imagem = document.createElement("img");
        imagem.src = drink.strDrinkThumb;
        imagem.style.width = "200px";
        imagem.className = "imagem-card"

        let div_buscaIng = document.createElement("div");
        div_buscaIng.className = "show-drinks";

        div_buscaIng.appendChild(title);
        div_buscaIng.appendChild(imagem);
        document.getElementById("resultDrinksIng").appendChild(div_buscaIng);     
    }
}else{
    let erroIng = document.getElementById("resultDrinksIng");
    erroIng.innerText = "Nenhum resultado encontrado";
    erroIng.style.color = "white";
    console.log(response.status);
}
  
}

function clear(elementId){
    elementId.innerText = ""
}

async function randDrinks(){
    clear(randDrinks);
    let url = 'https://the-cocktail-db.p.rapidapi.com/randomselection.php'
    const response = await fetch (url,{
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "aa0e46214fmsh4448a29867e9d7cp11a975jsnf828ec129340"
        }
    });
    const json = await response.json();
    console.log(json);

    
    for (let drink of json.drinks.slice(0,9)){
      let title = document.createElement("p")
      // title.href = 'https://www.thecocktaildb.com/drink/' + drink.idDrink; 
      title.innerText = drink.strDrink;            
      // title.style.display = "block";
      title.className = "title-card"

      let imagem = document.createElement("img");
      imagem.src = drink.strDrinkThumb;
      imagem.style.width = "200px";
      imagem.className = "imagem-card"

      let div_btnInfo = document.createElement("div");
      div_btnInfo.className = "btnInfo" 
      let btnInfo = document.createElement("button");
      btnInfo.textContent = "Abrir";
      btnInfo.id = `id${drink.idDrink}`;
      btnInfo.className = "draw-border";

      let divInfo = document.createElement("div");
      divInfo.id = `div${drink.idDrink}`;
      divInfo.className = "content";
      divInfo.innerHTML = `Categoria: ${drink.strCategory}`;
      divInfo.innerHTML += `<p>Copo: ${drink.strGlass}`;

      let div_randDrink = document.createElement("div");
      div_randDrink.className = "show-drinks";

      div_randDrink.appendChild(title);
      div_randDrink.appendChild(imagem);
      div_randDrink.appendChild(div_btnInfo);
      div_btnInfo.appendChild(btnInfo);
      div_btnInfo.appendChild(divInfo);

      // div_randDrink.appendChild(divInfo);
          
      // document.getElementById("randDrinks").appendChild(div_randDrink); 
      document.getElementById("rand-drinks").appendChild(div_randDrink);   
      
  }

  var coll = document.getElementsByClassName("draw-border");
  collapsible(coll)
}

function collapsible(coll){
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var mainMenu = document.getElementById("mainMenu");

// Get the offset position of the mainMenu
var sticky = mainMenu.offsetTop;

// Add the sticky class to the mainMenu when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    mainMenu.classList.add("sticky")
  } else {
    mainMenu.classList.remove("sticky");
  }
}
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

// var nomes =["Mojito", "Martini"];
var nome = ["GG",
  "A1",
  "ABC",
  "Kir",
  "747",
  "252",
  "Ace",
  "Adam",
  "B-53",
  "AT&T",
  "ACID",
  "B-52",
  "H.D.",
  "Smut",
  "Rose",
  "A. J.",
  "Derby",
  "Karsk",
  "Melya",
  "50/50",
  "Zorro",
  "Bijou",
  "Affair",
  "Boxcar",
  "Orgasm",
  "Victor",
  "Diesel",
  "Mojito",
  "Zinger",
  "Apello",
  "Avalon",
  "Zoksel",
  "Casino",
  "Radler",
  "Mimosa",
  "Spritz",
  "Vesper",
  "Zombie",
  "Paloma",
  "Gimlet",
  "Abilene",
  "Almeria",
  "Mai Tai",
  "Martini",
  "Quentin",
  "Sazerac",
  "Scooter",
  "Sidecar",
  "Vesuvio",
  "Veteran",
  "Limeade",
  "Frappé",
  "Big Red",
  "Ipamena",
  "Negroni",
  "Zambeer",
  "Stinger",
  "Bellini",
  "Bramble",
  "Vampiro",
  "Addison",
  "Old Pal",
  "Acapulco",
  "Affinity",
  "Applecar",
  "Balmoral",
  "Bluebird",
  "Daiquiri",
  "Gin Fizz",
  "Gin Sour",
  "Godchild",
  "Kamikaze",
  "Pink Gin",
  "Rum Sour",
  "Thriller",
  "410 Gone",
  "Snowball",
  "Aviation",
  "Danbooka",
  "Shot-gun",
  "501 Blue",
  "Paradise",
  "Brooklyn",
  "Spice 75",
  "Alexander",
  "Algonquin",
  "Allegheny",
  "Artillery",
  "Boomerang",
  "Dragonfly",
  "Foxy Lady",
  "Gin Daisy",
  "Gin Sling",
  "Gin Smash",
  "Gin Toddy",
  "Godfather",
  "Godmother",
  "Pink Lady",
  "Queen Bee",
  "Rum Toddy",
  "Salty Dog",
  "Van Vleet",
  "Afterglow",
  "Bora Bora",
  "Orangeade",
  "Egg Cream",
  "Autodafé",
  "Gagliardo",
  "Tia-Maria",
  "Gluehwein",
  "Margarita",
  "Afternoon",
  "Manhattan",
  "Lunch Box",
  "Rum Punch",
  "After sex",
  "Mojito #3",
  "Barracuda",
  "Americano",
  "Jitterbug",
  "Applejack",
  "Adam Bomb",
  "Avalanche",
  "Zorbatini",
  "Downshift",
  "Jam Donut",
  "Buccaneer",
  "French 75",
  "Addington",
  "Pegu Club",
  "Greyhound",
  "Brigadier",
  "Tipperary",
  "Broadside",
  "Honey Bee",
  "747 Drink",
  "Almond Joy",
  "Angel Face",
  "Archbishop",
  "Blackthorn",
  "Caipirinha",
  "Cherry Rum",
  "Cuba Libre",
  "Gin Cooler",
  "Gin Squirt",
  "Royal Fizz",
  "Rum Cooler",
  "Rusty Nail",
  "Stone Sour",
  "Whisky Mac",
  "Lemon Shot",
  "Egg Nog #4",
  "Sangria #1",
  "Wine Punch",
  "Long vodka",
  "Quick F**K",
  "Pisco Sour",
  "Sea breeze",
  "Bob Marley",
  "Cuba Libra",
  "Jelly Bean",
  "After Five",
  "Kir Royale",
  "Jackhammer",
  "3 Wise Men",
  "Miami Vice",
  "69 Special",
  "Cafe Savoy",
  "Lemon Drop",
  "Kurant Tea",
  "Cream Soda",
  "Bubble Gum",
  "Kiwi Lemon",
  "Turkeyball",
  "Zenmeister",
  "Grand Blue",
  "Quick-sand",
  "Mudslinger",
  "Moranguito",
  "Rum Runner",
  "Zipperhead",
  "Vodka Fizz",
  "Bible Belt",
  "Brain Fart",
  "Porto flip",
  "White Lady",
  "Mint Julep",
  "Adam & Eve",
  "Gin Rickey",
  "Martinez 2",
  "Penicillin",
  "Corn n Oil",
  "Aquamarine",
  "Bloody Mary",
  "Blue Lagoon",
  "Boston Sour",
  "Brandy Flip",
  "Brandy Sour",
  "Casa Blanca",
  "Dry Rob Roy",
  "Frisco Sour",
  "Gin Swizzle",
  "Grass Skirt",
  "Loch Lomond",
  "London Town",
  "Rum Cobbler",
  "Scotch Sour",
  "Screwdriver",
  "Sherry Flip",
  "Tom Collins",
  "Fruit Shake",
  "Lassi Khara",
  "Lassi Raita",
  "Lemouroudji",
  "Tomato Tang",
  "Iced Coffee",
  "Masala Chai",
  "Thai Coffee",
  "Absinthe #2",
  "Irish Cream",
  "Clover Club",
  "Mulled Wine",
  "Wine Cooler",
  "Moscow Mule",
  "Black & Tan",
  "Brainteaser",
  "Ice Pick #1",
  "Red Snapper",
  "Mocha-Berry",
  "Absolut Sex",
  "Aztec Punch",
  "Arctic Fish",
  "Grim Reaper",
  "Jello shots",
  "Royal Flush",
  "155 Belmont",
  "Baby Eskimo",
  "Texas Sling",
  "9 1/2 Weeks",
  "Sweet Tooth",
  "Orange Whip",
  "Royal Bitch",
  "Citrus Coke",
  "Butter Baby",
  "Grasshopper",
  "Pina Colada",
  "Yellow Bird",
  "Bahama Mama",
  "Dry Martini",
  "Munich Mule",
  "Bee's Knees",
  "Amaretto Tea",
  "Apricot Lady",
  "Bloody Maria",
  "Bourbon Sour",
  "Chicago Fizz",
  "City Slicker",
  "Irish Spring",
  "John Collins",
  "Orange Oasis",
  "Sol Y Sombra",
  "Tequila Fizz",
  "Tequila Sour",
  "Whiskey Sour",
  "Apple Karate",
  "Fruit Cooler",
  "Grizzly Bear",
  "Coffee-Vodka",
  "Berry Deadly",
  "Bruce's Puce",
  "Caipirissima",
  "Atlantic Sun",
  "Green Goblin",
  "Irish Coffee",
  "Belgian Blue",
  "Jamaica Kiss",
  "Dirty Nipple",
  "Talos Coffee",
  "Orange Crush",
  "Tennesee Mud",
  "Adam Sunrise",
  "Herbal flame",
  "Campari Beer",
  "Shark Attack",
  "Apple Grande",
  "Kioki Coffee",
  "Pink Penocha",
  "Zima Blaster",
  "Army special",
  "Ruby Tuesday",
  "Monkey Gland",
  "Cosmopolitan",
  "Golden dream",
  "Horse's Neck",
  "Boulevardier",
  "Bloody Punch",
  "Amaretto Mist",
  "Amaretto Rose",
  "Arise My Love",
  "Black Russian",
  "Old Fashioned",
  "Blue Mountain",
  "Bourbon Sling",
  "Casino Royale",
  "Gin And Tonic",
  "Imperial Fizz",
  "Japanese Fizz",
  "Lord And Lady",
  "Monkey Wrench",
  "New York Sour",
  "Sherry Eggnog",
  "Turf Cocktail",
  "White Russian",
  "Rail Splitter",
  "Lassi - Sweet",
  "Lassi - Mango",
  "Sweet Bananas",
  "Happy Skipper",
  "Thai Iced Tea",
  "Sweet Sangria",
  "Popped cherry",
  "Atomic Lokade",
  "Kool-Aid Shot",
  "Oreo Mudslide",
  "Apple Slammer",
  "Amaretto Sour",
  "Midnight Manx",
  "Mother's Milk",
  "Vodka Martini",
  "Blind Russian",
  "Bumble Bee #1",
  "Freddy Kruger",
  "Midnight Mint",
  "Kiss me Quick",
  "Limona Corona",
  "San Francisco",
  "Space Odyssey",
  "Vodka Russian",
  "Fuzzy Asshole",
  "Apricot punch",
  "Bruised Heart",
  "Irish Russian",
  "24k nightmare",
  "Baby Guinness",
  "Dirty Martini",
  "Mary Pickford",
  "Abbey Martini",
  "Bombay Cassis",
  "Hunter's Moon",
  "Rosemary Blue",
  "The Last Word",
  "Amaretto fizz",
  "Aperol Spritz",
  "Funk and Soul",
  "Bounty Hunter",
  "Abbey Cocktail",
  "Alfie Cocktail",
  "Blue Margarita",
  "Boston Sidecar",
  "Brandy Cobbler",
  "Clove Cocktail",
  "Lady Love Fizz",
  "Poppy Cocktail",
  "Port Wine Flip",
  "Royal Gin Fizz",
  "Rum Milk Punch",
  "Scotch Cobbler",
  "Alice Cocktail",
  "Yoghurt Cooler",
  "Spiking coffee",
  "Coffee Liqueur",
  "Chocolate Milk",
  "Nutty Irishman",
  "Darkwood Sling",
  "Orange Push-up",
  "Zizi Coin-coin",
  "Amaretto Shake",
  "Malibu Twister",
  "1-900-FUK-MEUP",
  "Swedish Coffee",
  "A Piece of Ass",
  "Kool First Aid",
  "Coke and Drops",
  "French Martini",
  "The Laverstoke",
  "French Negroni",
  "Blue Hurricane",
  "Oatmeal Cookie",
  "Adonis Cocktail",
  "Alabama Slammer",
  "Alaska Cocktail",
  "Allies Cocktail",
  "Arthur Tompkins",
  "Banana Daiquiri",
  "Dark Caipirinha",
  "Flying Dutchman",
  "Raspberry Julep",
  "Frozen Daiquiri",
  "Havana Cocktail",
  "Long Island Tea",
  "Midnight Cowboy",
  "Queen Charlotte",
  "Queen Elizabeth",
  "Rum Screwdriver",
  "Singapore Sling",
  "Tuxedo Cocktail",
  "Vermouth Cassis",
  "Victory Collins",
  "Vodka And Tonic",
  "Fruit Flip-Flop",
  "Just a Moonmint",
  "Chocolate Drink",
  "Creme de Menthe",
  "Artillery Punch",
  "Cranberry Punch",
  "Holloween Punch",
  "Fahrenheit 5000",
  "Snake Bite (UK)",
  "Tequila Sunrise",
  "Zippy's Revenge",
  "Addison Special",
  "Hot Creamy Bush",
  "Zimadori Zinger",
  "Jamaican Coffee",
  "Bellini Martini",
  "Black and Brown",
  "Homemade Kahlua",
  "Arizona Twister",
  "Amaretto Sunset",
  "Duchamp's Punch",
  "Planter's Punch",
  "Dark and Stormy",
  "Slippery Nipple",
  "Tequila Slammer",
  "Halloween Punch",
  "Gin Basil Smash",
  "Banana Cream Pi",
  "The Philosopher",
  "Brandy Alexander",
  "Amaretto Stinger",
  "Bermuda Highball",
  "English Highball",
  "Flying Scotchman",
  "Gentleman's Club",
  "Kentucky B And B",
  "Kentucky Colonel",
  "Lone Tree Cooler",
  "Sidecar Cocktail",
  "Sex on the Beach",
  "Thai Iced Coffee",
  "Amaretto Liqueur",
  "Angelica Liqueur",
  "Damned if you do",
  "Screaming Orgasm",
  "Kool-Aid Slammer",
  "A Splash of Nash",
  "Amaretto Sunrise",
  "Arizona Stingers",
  "Tequila Surprise",
  "110 in the shade",
  "Chocolate Monkey",
  "Bacardi Cocktail",
  "Bleeding Surgeon",
  "Arctic Mouthwash",
  "Raspberry Cooler",
  "Espresso Martini",
  "The Jimmy Conway",
  "Spritz Veneziano",
  "Espresso Rumtini",
  "Pineapple Paloma",
  "Blueberry Mojito",
  "Dubonnet Cocktail",
  "Harvey Wallbanger",
  "Hawaiian Cocktail",
  "Jewel Of The Nile",
  "Martinez Cocktail",
  "Quaker's Cocktail",
  "Rum Old-fashioned",
  "Shanghai Cocktail",
  "Sloe Gin Cocktail",
  "Valencia Cocktail",
  "Banana Milk Shake",
  "Imperial Cocktail",
  "Spanish chocolate",
  "Cranberry Cordial",
  "Aloha Fruit punch",
  "Egg Nog - Healthy",
  "National Aquarium",
  "New York Lemonade",
  "Absolut limousine",
  "Absolut Evergreen",
  "Girl From Ipanema",
  "Texas Rattlesnake",
  "Absolut Stress #2",
  "Auburn Headbanger",
  "French Connection",
  "Hemingway Special",
  "Tommy's Margarita",
  "Corpse Reviver #2",
  "A Furlong Too Late",
  "Amaretto And Cream",
  "Champagne Cocktail",
  "Jack Rose Cocktail",
  "Lone Tree Cocktail",
  "Port And Starboard",
  "Port Wine Cocktail",
  "Strawberry Shivers",
  "Chocolate Beverage",
  "Drinking Chocolate",
  "Iced Coffee Fillip",
  "Spiced Peach Punch",
  "Brave Bull Shooter",
  "Flaming Dr. Pepper",
  "Absolut Summertime",
  "A Day at the Beach",
  "Between The Sheets",
  "Black Forest Shake",
  "Whitecap Margarita",
  "Arizona Antifreeze",
  "Irish Curdling Cow",
  "White Wine Sangria",
  "California Lemonade",
  "Strawberry Daiquiri",
  "Waikiki Beachcomber",
  "Microwave Hot Cocoa",
  "Nuked Hot Chocolate",
  "Surf City Lifesaver",
  "Strawberry Lemonade",
  "Sunny Holiday Punch",
  "Flander's Flake-Out",
  "Amaretto Stone Sour",
  "Pysch Vitamin Light",
  "Snakebite and Black",
  "The Evil Blue Thing",
  "Jack's Vanilla Coke",
  "Flaming Lamborghini",
  "A Gilligan's Island",
  "Alice in Wonderland",
  "Absolutely Fabulous",
  "Lazy Coconut Paloma",
  "Bobby Burns Cocktail",
  "Frozen Mint Daiquiri",
  "Strawberry Margarita",
  "Apple Berry Smoothie",
  "Kiwi Papaya Smoothie",
  "Apple Cider Punch #1",
  "Pink Panty Pulldowns",
  "Cosmopolitan Martini",
  "California Root Beer",
  "Bailey's Dream Shake",
  "Absolutly Screwed Up",
  "A True Amaretto Sour",
  "Long Island Iced Tea",
  "Russian Spring Punch",
  "Captain Kidd's Punch",
  "After Dinner Cocktail",
  "After Supper Cocktail",
  "Classic Old-Fashioned",
  "English Rose Cocktail",
  "Quarter Deck Cocktail",
  "Mango Orange Smoothie",
  "Amaretto Sweet & Sour",
  "Caribbean Boilermaker",
  "Adios Amigos Cocktail",
  "Salted Toffee Martini",
  "Passion Fruit Martini",
  "Kill the cold Smoothie",
  "151 Florida Bushwacker",
  "A midsummernight dream",
  "Amaretto Stone Sour #3",
  "Apple Pie with A Crust",
  "Death in the Afternoon",
  "A Night In Old Mandalay",
  "Chocolate Black Russian",
  "Highland Fling Cocktail",
  "Banana Strawberry Shake",
  "Almond Chocolate Coffee",
  "Gideon's Green Dinosaur",
  "Castillian Hot Chocolate",
  "Hot Chocolate to Die for",
  "Caribbean Orange Liqueur",
  "Egg-Nog - Classic Cooked",
  "Ziemes Martini Apfelsaft",
  "Cherry Electric Lemonade",
  "Boozy Snickers Milkshake",
  "Frozen Pineapple Daiquiri",
  "Scottish Highland Liqueur",
  "Mississippi Planters Punch",
  "Banana Cantaloupe Smoothie",
  "Sangria - The World's Best",
  "A.D.M. (After Dinner Mint)",
  "Absolutely Cranberry Smash",
  "3-Mile Long Island Iced Tea",
  "Smashed Watermelon Margarita",
  "Lassi - A South Indian Drink",
  "Pineapple Gingerale Smoothie",
  "Orange Scented Hot Chocolate",
  "Owen's Grandmother's Revenge",
  "Brandon and Will's Coke Float",
  "Grape lemon pineapple Smoothie",
  "Radioactive Long Island Iced Tea",
  "'57 Chevy with a White License Plate",
  "Empellón Cocina's Fat-Washed Mezcal",
  "Banana Strawberry Shake Daiquiri-type"]
/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("keyword-nome"), nome);

var tipo =["Ordinary Drink",
"Cocktail",
"Milk / Float / Shake",
"Other/Unknown",
"Cocoa",
"Shot",
"Coffee / Tea",
"Homemade Liqueur",
"Punch / Party Drink",
"Beer",
"Soft Drink / Soda"];
/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("keyword-tipo"), tipo);

var ingredientes =["Vodka",
"Gin",
"Rum",
"Tequila",
"Scotch",
"Absolut Kurant",
"Absolut Peppar",
"Absolut Vodka",
"Advocaat",
"Aejo Rum",
"Aftershock",
"Agave Syrup",
"Ale",
"Allspice",
"Almond Extract",
"Almond Flavoring",
"Almond",
"Amaretto",
"Angelica Root",
"Angostura Bitters",
"Anis",
"Anise",
"Anisette",
"Aperol",
"Apfelkorn",
"Apple Brandy",
"Apple Cider",
"Apple Juice",
"Apple Schnapps",
"Apple",
"Applejack",
"Apricot Brandy",
"Apricot Nectar",
"Apricot",
"Aquavit",
"Asafoetida",
"Añejo Rum",
"Bacardi Limon",
"Bacardi",
"Baileys Irish Cream",
"Banana Liqueur",
"Banana Rum",
"Banana Syrup",
"Banana",
"Barenjager",
"Basil",
"Beef Stock",
"Beer",
"Benedictine",
"Berries",
"Bitter lemon",
"Bitters",
"Black Pepper",
"Black Rum",
"Black Sambuca",
"Blackberries",
"Blackberry Brandy",
"Blackberry Schnapps",
"Blackcurrant Cordial",
"Blackcurrant Schnapps",
"Blackcurrant Squash",
"Blended Whiskey",
"Blue Curacao",
"Blue Maui",
"Blueberries",
"Blueberry Schnapps",
"Bourbon",
"Brandy",
"Brown Sugar",
"Butter",
"Butterscotch Schnapps",
"Cachaca",
"Calvados",
"Campari",
"Canadian Whisky",
"Candy",
"Cantaloupe",
"Caramel Coloring",
"Carbonated Soft Drink",
"Carbonated Water",
"Cardamom",
"Cayenne Pepper",
"Celery Salt",
"Celery",
"Chambord Raspberry Liqueur",
"Champagne",
"Cherries",
"Cherry Brandy",
"Cherry Cola",
"Cherry Grenadine",
"Cherry Heering",
"Cherry Juice",
"Cherry Liqueur",
"Cherry",
"Chocolate Ice-cream",
"Chocolate Liqueur",
"Chocolate Milk",
"Chocolate Syrup",
"Chocolate",
"Cider",
"Cinnamon Schnapps",
"Cinnamon",
"Citrus Vodka",
"Clamato Juice",
"Cloves",
"Club Soda",
"Coca-Cola",
"Cocktail Onion",
"Cocoa Powder",
"Coconut Cream",
"Coconut Liqueur",
"Coconut Milk",
"Coconut Rum",
"Coconut Syrup",
"Coffee Brandy",
"Coffee Liqueur",
"Coffee",
"Cognac",
"Cointreau",
"Cola",
"Cold Water",
"Condensed Milk",
"Coriander",
"Corn Syrup",
"Cornstarch",
"Corona",
"Cranberries",
"Cranberry Juice",
"Cranberry Liqueur",
"Cranberry Vodka",
"Cream of Coconut",
"Cream Sherry",
"Cream Soda",
"Cream",
"Creme De Almond",
"Creme De Banane",
"Creme De Cacao",
"Creme De Cassis",
"Creme De Noyaux",
"Creme Fraiche",
"Crown Royal",
"Crystal Light",
"Cucumber",
"Cumin Powder",
"Cumin Seed",
"Curacao",
"Cynar",
"Daiquiri Mix",
"Dark Chocolate",
"Dark Creme De Cacao",
"Dark Rum",
"Dark Soy Sauce",
"Demerara Sugar",
"Dr. Pepper",
"Drambuie",
"Dried Oregano",
"Dry Vermouth",
"Dubonnet Blanc",
"Dubonnet Rouge",
"Egg White",
"Egg Yolk",
"Egg",
"Eggnog",
"Erin Cream",
"Espresso",
"Everclear",
"Fanta",
"Fennel Seeds",
"Firewater",
"Flaked Almonds",
"Food Coloring",
"Forbidden Fruit",
"Frangelico",
"Fresca",
"Fresh Basil",
"Fresh Lemon Juice",
"Fruit Juice",
"Fruit Punch",
"Fruit",
"Galliano",
"Garlic Sauce",
"Gatorade",
"Ginger Ale",
"Ginger Beer",
"Ginger",
"Glycerine",
"Godiva Liqueur",
"Gold rum",
"Gold Tequila",
"Goldschlager",
"Grain Alcohol",
"Grand Marnier",
"Granulated Sugar",
"Grape juice",
"Grape soda",
"Grapefruit Juice",
"Grapes",
"Green Chartreuse",
"Green Creme de Menthe",
"Green Ginger Wine",
"Green Olives",
"Grenadine",
"Ground Ginger",
"Guava juice",
"Guinness stout",
"Guinness",
"Half-and-half",
"Hawaiian punch",
"Hazelnut liqueur",
"Heavy cream",
"Honey",
"Hooch",
"Hot Chocolate",
"Hot Damn",
"Hot Sauce",
"Hpnotiq",
"Ice-Cream",
"Ice",
"Iced tea",
"Irish cream",
"Irish Whiskey",
"Jack Daniels",
"Jello",
"Jelly",
"Jagermeister",
"Jim Beam",
"Johnnie Walker",
"Kahlua",
"Key Largo Schnapps",
"Kirschwasser",
"Kiwi liqueur",
"Kiwi",
"Kool-Aid",
"Kummel",
"Lager",
"Lemon Juice",
"Lemon Peel",
"Lemon soda",
"Lemon vodka",
"Lemon-lime soda",
"lemon-lime",
"lemon",
"Lemonade",
"Licorice Root",
"Light Cream",
"Light Rum",
"Lillet",
"Lime juice cordial",
"Lime Juice",
"Lime liqueur",
"Lime Peel",
"Lime vodka",
"Lime",
"Limeade",
"Madeira",
"Malibu Rum",
"Mandarin",
"Mandarine napoleon",
"Mango",
"Maple syrup",
"Maraschino cherry juice",
"Maraschino Cherry",
"Maraschino Liqueur",
"Margarita mix",
"Marjoram leaves",
"Marshmallows",
"Maui",
"Melon Liqueur",
"Melon Vodka",
"Mezcal",
"Midori Melon Liqueur",
"Midori",
"Milk",
"Mint syrup",
"Mint",
"Mountain Dew",
"Nutmeg",
"Olive Oil",
"Olive",
"Onion",
"Orange Bitters",
"Orange Curacao",
"Orange Juice",
"Orange liqueur",
"Orange Peel",
"Orange rum",
"Orange Soda",
"Orange spiral",
"Orange vodka",
"Orange",
"Oreo cookie",
"Orgeat Syrup",
"Ouzo",
"Oyster Sauce",
"Papaya juice",
"Papaya",
"Parfait amour",
"Passion fruit juice",
"Passion fruit syrup",
"Passoa",
"Peach brandy",
"Peach juice",
"Peach liqueur",
"Peach Nectar",
"Peach Schnapps",
"Peach Vodka",
"Peach",
"Peachtree schnapps",
"Peanut Oil",
"Pepper",
"Peppermint extract",
"Peppermint Schnapps",
"Pepsi Cola",
"Pernod",
"Peychaud bitters",
"Pina colada mix",
"Pineapple Juice",
"Pineapple rum",
"Pineapple vodka",
"Pineapple-orange-banana juice",
"Pineapple",
"Pink lemonade",
"Pisang Ambon",
"Pisco",
"Plain Chocolate",
"Plain Flour",
"Plums",
"Port",
"Powdered Sugar",
"Purple passion",
"Raisins",
"Raspberry cordial",
"Raspberry Jam",
"Raspberry Juice",
"Raspberry Liqueur",
"Raspberry schnapps",
"Raspberry syrup",
"Raspberry Vodka",
"Red Chile Flakes",
"Red Chili Flakes",
"Red Hot Chili Flakes",
"Red Wine",
"Rhubarb",
"Ricard",
"Rock Salt",
"Root beer schnapps",
"Root beer",
"Roses sweetened lime juice",
"Rosewater",
"Rumple Minze",
"Rye Whiskey",
"Sake",
"Salt",
"Sambuca",
"Sarsaparilla",
"Schnapps",
"Schweppes Lemon",
"Schweppes Russchian",
"Sherbet",
"Sherry",
"Sirup of roses",
"Sloe Gin",
"Soda Water",
"Sour Apple Pucker",
"Sour Mix",
"Southern Comfort",
"Soy Milk",
"Soy Sauce",
"Soya Milk",
"Soya Sauce",
"Spiced Rum",
"Sprite",
"Squeezed Orange",
"Squirt",
"Strawberries",
"Strawberry juice",
"Strawberry liqueur",
"Strawberry Schnapps",
"Strawberry syrup",
"Sugar Syrup",
"Sugar",
"Sunny delight",
"Surge",
"Swedish punsch",
"Sweet and Sour",
"Sweet Cream",
"Sweet Vermouth",
"Tabasco Sauce",
"Tang",
"Tawny port",
"Tea",
"Tennessee whiskey",
"Tequila rose",
"Tia Maria",
"Tomato Juice",
"Tomato",
"Tonic Water",
"Triple Sec",
"Tropicana",
"Tuaca",
"Vanilla extract",
"Vanilla Ice-Cream",
"Vanilla liqueur",
"Vanilla schnapps",
"Vanilla syrup",
"Vanilla vodka",
"Vanilla",
"Vermouth",
"Vinegar",
"Water",
"Watermelon schnapps",
"Whipped Cream",
"Whipping Cream",
"White chocolate liqueur",
"White Creme de Menthe",
"White grape juice",
"White port",
"White Rum",
"White Vinegar",
"White Wine",
"Wild Turkey",
"Wildberry schnapps",
"Wine",
"Worcestershire Sauce",
"Wormwood",
"Yeast",
"Yellow Chartreuse",
"Yoghurt",
"Yukon Jack",
"Zima",
"Caramel Sauce",
"Chocolate Sauce",
"Lillet Blanc",
"Peach Bitters",
"Mini-snickers bars",
"Prosecco",
"Salted Chocolate",
"Martini Rosso",
"Martini Bianco",
"Martini Extra Dry",
"Fresh Lime Juice",
"Fresh Mint",
"Rosemary",
"Habanero Peppers",
"Ilegal Joven mezcal",
"Elderflower cordial",
"Rosso Vermouth",
"Creme de Violette",
"Cocchi Americano",
"White Vermouth",
"Dry Curacao",
"Nocino",
"Averna",
"Ramazzotti",
"Fernet-Branca",
"Allspice Dram",
"Falernum",
"Singani",
"Arrack",
"Blackstrap rum",
"Ginger Syrup",
"Honey syrup",
"Blended Scotch",
"Islay single malt Scotch",
"151 proof rum",
"7-up",
"Absinthe",
"Absolut citron",
"Creme de Mure",
"Olive Brine",
"Pineapple Syrup",
"St. Germain",
"Lavender",
"Whiskey",
"Whisky",
"Pomegranate juice",
"Watermelon",
"Chareau",
"Cinnamon Whisky"];
/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("keyword-ing"), ingredientes);