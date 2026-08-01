console.log("WASH Project Website Loaded Successfully");
// Animated Counter

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerText="0";

    const updateCounter=()=>{

        const target=+counter.getAttribute("data-target");

        const count=+counter.innerText;

        const increment=target/200;

        if(count<target){

            counter.innerText=Math.ceil(count+increment);

            setTimeout(updateCounter,10);

        }

        else{

            counter.innerText=target.toLocaleString();

        }

    };

    updateCounter();

});
/* ===========================
Gallery Filter
=========================== */

const filterButtons=document.querySelectorAll(".filter-btn");

const galleryItems=document.querySelectorAll(".gallery-item");

filterButtons.forEach(btn=>{

    btn.onclick=()=>{

        filterButtons.forEach(b=>b.classList.remove("active"));

        btn.classList.add("active");

        let value=btn.dataset.filter;

        galleryItems.forEach(item=>{

            if(value=="all" || item.classList.contains(value)){

                item.style.display="block";

            }

            else{

                item.style.display="none";

            }

        });

    };

});


/* ===========================
Lightbox
=========================== */

const images=document.querySelectorAll(".gallery-card img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const close=document.getElementById("close");

images.forEach(img=>{

    img.onclick=()=>{

        lightbox.style.display="flex";

        lightboxImg.src=img.src;

    };

});

close.onclick=()=>{

    lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

    if(e.target==lightbox){

        lightbox.style.display="none";

    }

};
// Dark Mode

document.getElementById("themeToggle").onclick=function(){

document.body.classList.toggle("dark-mode");

};

// Back To Top

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};