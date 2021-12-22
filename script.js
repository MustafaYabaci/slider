var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];
let interval;
let index=3
let countSay=models.length

let settings={
    duration:"2000",
    random:false
}
init(settings)
document.querySelector(".fa-arrow-circle-left").addEventListener("click",function
(){
    showAll(index)
    index--;
    console.log(index)
})

document.querySelector(".fa-arrow-circle-right").addEventListener("click",function
(){
    showAll(index)
    index++;
    console.log(index)
})


function showAll(i){
index=i;

    if(i<0){
        index=countSay-1
    }
    if(i>=countSay){
        index=0
    }

document.querySelector(".card-img-top").setAttribute("src",models[index].image)
document.querySelector(".card-title").textContent=models[index].name
document.querySelector(".card-link").setAttribute("href",models[index].link)

}

document.querySelectorAll(".Arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval)
    })
})
document.querySelectorAll(".Arrow").forEach(function(item){
item.addEventListener("mouseleave",function(){
    init(settings)
})
})
function init(settings){
    let prev;
   interval= setInterval(function(){
        if(settings.random){
            do{
                index=Math.floor(Math.random()* countSay)
            }while(index==prev)
            prev=index
            
        } else{
                if(countSay===index){
                    index=0
                }
                index++;
                showAll(index)
           
           
        } 
        showAll(index) 
        console.log(index)
    },settings.duration)
}