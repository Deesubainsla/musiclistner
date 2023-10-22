let list=[
        {songname:"Canada Balliye by Arsh",songpath:"./songs/0.mp3"},
        {songname:"kde-kde by Harvy",songpath:"./songs/1.mp3"},
        {songname:"Sufna by Harvy",songpath:"./songs/2.mp3"},
        {songname:"Jealousy by Baagi",songpath:"./songs/3.mp3"},
        {songname:"Peshian by Baagi",songpath:"./songs/4.mp3"},
        {songname:"Taqdeer by Yuvraj",songpath:"./songs/5.mp3"},
        {songname:"Supne ni saun dinde",songpath:"./songs/6.mp3"},
        {songname:"supne by Akhil",songpath:"./songs/7.mp3"},
        {songname:"Range by Jassi Gill",songpath:"./songs/8.mp3"},
]


var music= new Audio("./songs/0.mp3");
let footergif =  document.querySelector(".footergif");
let progressbar= document.querySelector(".progressbar");
let index="0";


document.querySelector(".bottomplay").addEventListener("click",function(){
        if(music.paused || music.currentTime<=0){
                 music.play();
                 document.querySelector(".bottomplay").src = "./photos/pausesongbtn.png";
 
                 footergif.style.opacity = 1;
 
        }
        else{
         music.pause();
         document.querySelector(".bottomplay").src = "./photos/playbutton.jpg";
         footergif.style.opacity = 0;
 
        }
 });
 
progressbar.addEventListener('change',function(){
        music.currentTime= music.duration*(progressbar.value/100);
        
});


music.addEventListener("timeupdate",function(){
        
       document.querySelector(".progressbar").value= parseInt(100*(music.currentTime/music.duration));
       
});

function resetall(){
        Array.from(document.getElementsByClassName("albumplaybtn")).forEach(function(element){
                element.src="./photos/playbutton.jpg";
        });
}



Array.from(document.getElementsByClassName("albumplaybtn")).forEach(function(element){
        element.addEventListener("click",function(e){
                resetall();
                
                index = parseInt(e.target.id);
                
                
                e.target.src="./photos/pausebutton.jpg";
                
                music.currentTime=0;
                
                music.src = "./songs/"+index+".mp3";
                music.play();

                footergif.style.opacity = 1;
                document.querySelector(".bottomplay").src = "./photos/pausesongbtn.png";
               
               
                document.querySelector(".footersongname").innerHTML=list[index].songname;
                
                


        });
})


//for play previous song:
document.querySelector(".bottomprevious").addEventListener("click",function(){

        if(index==0){
                alert("Sry for disturbance but you are already at first song of the list:(for play use the play button given in songbox)")
        }
        else{
                index--;
                resetall();
                music.src = "./songs/"+index+".mp3";
                music.play();
                document.querySelector(".footersongname").innerHTML=list[index].songname;
                document.querySelector(".bottomplay").src = "./photos/pausesongbtn.png";
                footergif.style.opacity = 1;
                document.getElementById(index).src= "./photos/pausebutton.jpg";

        }

});


//for play next song:
document.querySelector(".bottomnext").addEventListener("click",function(){

        if(index== list.length-1){
                alert("Sry for disturbance but you are already at last song of the list:(for play use the play button given in songbox)")
        }
        else{
                index++;
                resetall();
                music.src = "./songs/"+index+".mp3";
                music.play();
                document.querySelector(".footersongname").innerHTML=list[index].songname;
                document.querySelector(".bottomplay").src = "./photos/pausesongbtn.png";
                footergif.style.opacity = 1;
                document.getElementById(index).src= "./photos/pausebutton.jpg";

        }

});













