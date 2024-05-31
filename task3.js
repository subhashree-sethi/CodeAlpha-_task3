//change the colour of navbar
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 150){
            $(".navbar").css("background","#000");
            $(".navbar").css("box-shadow"," rgba(0,0,0,0.1) 0px  4px 12px");
        }

        else{
            $(".navbar").css("background","transparent");
            $(".navbar").css("box-shadow","none");
        }
    })
    // click
    var navbarHeight = $(".navbar").outerHight();
    $(".menus a").click(function(e){
        var targetHref = $(this).after("href");
        $("html,body").animate({
            scrollTop:$(targetHref).offset().top-navbarHeight
    },1000)
    e.preventDefault();
        });
        //mobile navbar
        const mobile = document.querySelector(".menu-toggle");
        const mobileLink = document.querySelector(".menus");

        mobile.addEventListener("click", function(){
            mobile.classList.toggle("is-active");
            mobileLink.classList.toggle("active");
        });
        //close mobile menus when click
       mobileLink.addEventListener("click",function(){
        const menuBar = Document.querySelector('.is-active');
        if(Window.innerWidth <= 768 && menuBars){
            mobile.classList.toggle("is-active");
            mobileLink.classList.remove("active");
        }
       });

    });
