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

var nomes =["Mojito", "Martini"];
/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("keyword-nome"), nomes);

var tipo =["Teste", "Outro Teste"];
/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("keyword-tipo"), tipo);

var ingredientes =["Ingrediente1", "Ingrediente2"];
/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("keyword-ing"), ingredientes);