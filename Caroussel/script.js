/* .... Fonction au click changer la source de l'image */

const carousselLeft = document.getElementById("carousselLeft");
const carousselRight = document.getElementById("carousselRight");

// carousselLeft.onClick = changeImg;

function changeImg(element){
    let carousselImg1 = document.getElementById("carousselImg1");
    let carousselImg2 = document.getElementById("carousselImg2");
    let carousselImg3 = document.getElementById("carousselImg3");
    let pointImg1 = document.getElementById("pointImg1");
    let pointImg2 = document.getElementById("pointImg2");
    let pointImg3 = document.getElementById("pointImg3");
    let array = [window.getComputedStyle(carousselImg1).display, window.getComputedStyle(carousselImg2).display,window.getComputedStyle(carousselImg3).display]

        if(element.id == "carousselRight"){
            console.log(element.id)
            console.log(array)
            for (const img of array){
                if(img == "block"){
                    if(array.indexOf(img) == 0){
                        console.log(array)
                        carousselImg1.style.display = "none";
                        carousselImg2.style.display ="block";
                        carousselImg3.style.display = "none";
                        console.log(array)
                        pointImg1.classList.toggle("red");
                        pointImg2.classList.toggle("red");
                    }
                    else if(array.indexOf(img) == 1){
                        carousselImg1.style.display = "none";
                        carousselImg2.style.display = "none";
                        carousselImg3.style.display ="block";
                        pointImg2.classList.toggle("red");
                        pointImg3.classList.toggle("red");
                    }
                    else{}
                }
                else{
                }
            }
        }

        else{
            console.log(element.id);
            for (const img of array){
                if(img == "block"){
                    if(array.indexOf(img) == 2){
                        carousselImg1.style.display = "none";
                        carousselImg2.style.display ="block";
                        carousselImg3.style.display = "none";
                        pointImg2.classList.toggle("red");
                        pointImg3.classList.toggle("red");
                    }
                    else if(array.indexOf(img) == 1){
                        carousselImg1.style.display = "block";
                        carousselImg2.style.display = "none";
                        carousselImg3.style.display ="none";
                        pointImg1.classList.toggle("red");
                        pointImg2.classList.toggle("red");
                    }
                    else{}
                }
                else{
                }
            }
        }

}



