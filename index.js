
let titles = []

// Fetch data from the API
fetch("https://api.jikan.moe/v4/anime")
  .then((res) => res.json())
  .then((data) => {
    
    // Loop through the data and create elements for each anime
   titles = data["data"].map((anime) => {

  const cardCollection = document.querySelector("#character-collection");

  // Create a new card div for each anime and attribute for each card
  const cardDiv = document.createElement("div");
        cardDiv.setAttribute("class","cards")
  // Create an image element for the anime poster
  const posterImg = document.createElement("img");
  posterImg.src = anime.images.jpg.image_url;

  // Create a heading element for the anime title
  const titleHeading = document.createElement("h3");
  titleHeading.textContent = anime.title;
  
  
  // Append the image and heading elements to the anime div
  cardDiv.appendChild(posterImg);
  cardDiv.appendChild(titleHeading);
  // Append the anime div to the card collection
  cardCollection.appendChild(cardDiv);
    return {names: titleHeading.textContent , element: cardDiv}  
    });
    
           //Input eventhandler
           const myInput = document.querySelector(".search");
           myInput.addEventListener("input", (e) => {
             const value = e.target.value.toLowerCase();
             titles.forEach((anime) => {
               const isVisible = anime.names.toLowerCase().includes(value);
               anime.element.classList.toggle("hide", !isVisible);
                
            });
           }); 

           //click eventhander
           const clickHandle = document.querySelectorAll("img")
           clickHandle.forEach((pic) =>{
            pic.addEventListener("click", (e) => {
            
                // Get the URL from the clicked anime
              const animeUrl = e.target.getAttribute("src");
  
              // Open the URL in a new tab
              window.open(animeUrl);
             })
           })
           
           
           //mouse over event handler
           const cards = document.querySelectorAll(".cards");
           cards.forEach((card) => {
            card.addEventListener("mouseover", (e) => {
              card.style.color = "white";
            });
          });

            //mouse over event handler
            cards.forEach((card) => {
                card.addEventListener("mouseleave", (e) => {
                  card.style.color = "black";
                });
              });
  });

 

  