const imgPosition = document.querySelectorAll(".slider img")
const imgContainer = document.querySelector(".slider")
const noteItem = document.querySelectorAll(".note")
let imgNumber = imgPosition.length
let index = 0

imgPosition.forEach(function(image,index){
    image.style.left = index*100 + "%"
    noteItem[index].addEventListener("click",function(){
        slider(index)
    })
})
function imgSlider(){
    index++;
    // console.log(index)
    if(index >= imgNumber){index=0}
    slider(index)
}
function slider(index){
    imgContainer.style.left = "-" +index*100+ "%"
    const noteActive = document.querySelector(".active")
    // noteActive.classList.remove("active")
    // noteItem[index].classList.add("active")
}
setInterval(imgSlider,5000)