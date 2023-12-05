let container = document.getElementById("container");
function getMovies(){


        for(let i=0; i<50; i++){
            let card = document.createElement("div")
            container.appendChild(card);
            card.id = "card"
            let image = document.createElement("img");
            image.src = "img"
            image.width = 200
            image.height = 200
            card.appendChild(image)
            let h2 = document.createElement("h3")
            h2.textContent = "write the city name here"
            h2.style.fontSize="large"
            card.appendChild(h2)
            h2.style.whiteSpace = "normal"; // Allow text to wrap
            
            let h4 = document.createElement("h4")
            h4.textContent = "Description"
            h4.style.fontSize="small"
            h4.style.color = "blue"
            card.appendChild(h4)
            let btn = document.createElement("button")
            btn.textContent = "show Details"
            card.appendChild(btn)
            btn.id = "showDetails"
        }



}


getMovies()