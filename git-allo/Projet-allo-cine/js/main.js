
let image = document.getElementById("image")
let titre = document.getElementById("titre")
let texte = document.getElementById("texte")
let description = document.getElementById("description")

for(let i = 0; i < moovies.length; i++){
corp.innerHTML +=
    `<div class="row" deux>
        <div class="col-lg-1 col-sm-0"></div>
        <div class="col-lg-10 col-sm-12 second">
            <div class="row">
                <div id="image" class="col-lg-3 col-sm-12"><img src="`+ moovies[i].Poster +` alt="Poster"/></div>
                <div class="col-lg-4 col-sm-12">    
                    <div id="titre">` + moovies[i].Title + `</div>
                    <div id="texte">` + moovies[i].Plot + `</div>
                    <div id="description">`+ moovies[i].Year + ` - ` + moovies[i].Runtime + `<br>` + moovies[i].Genre +`</div>
                </div>
                    <!-- caroussel -->
                    <div class="garoux col-lg-5">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="test d-block" src="`+ moovies[i].Images[0] +` alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="test d-block" src="`+ moovies[i].Images[1] +` alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="test d-block" src="`+ moovies[i].Images[2] +` alt="Third slide">
                         </div>
                    </div>
                </div> 
                </div>
            </div>

            </div>
            <div class="col-lg-1 col-sm-0"></div>
    </div>`
}


// let recherche = document.getElementById("rech").innerHTML = 
// for(let r = 0; r < moovies.length; r++){
//     if(moovies[r].Title === rech){
//         moovies[r].Title 
//     }
// }
