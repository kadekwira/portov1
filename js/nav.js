$(document).ready(function () {

    //funtion head nav
    function head(){
        $("header").toggleClass("headLightmode");
        $(".nameBrand").toggleClass("nameBrandLightmode");
        $("a").each(function () {
            $(this).toggleClass("aLight");
            if($("header").hasClass("headLightmode")){
                $(".button img").attr({
                    src:"assets/image/darkmode.png"
                });
                $(".button img").css("borderColor","black")
            }else{
                $(".button img").attr({
                    src:"assets/image/lightmode.png"
                });
                $(".button img").css("borderColor","white");
            }
        })
    }
    function landingPage(){
        $(".sideLeft").toggleClass("left");
        $(".sideRight").toggleClass("right");
        $(".brand>.desk").toggleClass("deskLight");
        $(".desk >.p2").toggleClass("p2LandLight");
            if($(".sideLeft").hasClass("left")){
                $(".hereMe button").removeClass("buttonDark");
                $(".hereMe button").addClass("buttonLandLight");
            }else{
                $(".hereMe button").removeClass("buttonLandLight");
                $(".hereMe button").addClass("buttonDark");
            }
    }

    function aboutMe(){
        $(".aboutmeDark").toggleClass("aboutmeLight");
        $(".aboutmeDark >.main").toggleClass("mainLight");
        $(".main .line").toggleClass("lineLight");
        $(".aboutmeDark .imgAB").toggleClass("imgABLight");
        $(".main .seeDark").toggleClass("seeLight");
        $(".main .cvDark").toggleClass("cvLight");
    }
    function skills(){
        $(".skillsDark").toggleClass("skillsLight");
        $(".skillsDark .p1").toggleClass("pLight");
        $(".skillsDark .p2").toggleClass("pLight");
        $(".skillsDark .line").toggleClass("lineLight");
    }
    function project(){
        $(".projects").toggleClass("projectsLight"); 
        $(".projects .p1").toggleClass("pLight");
        $(".projects .p2").toggleClass("pLight");
        $(".projects .line").toggleClass("lineLight");
        const content =$(".card .contentDark")
        jQuery.each(content,(x,item)=>{
            $(item).toggleClass("contentLight");
        })
    }

    function footer(){
        $("footer").toggleClass("footerLight")
    }

    function action(){
        const aNav=$("nav a");
        aNav.click((e)=>{
            const pilih = $(e.target).attr("href");
            let tujuan = $(pilih).offset().top;
            console.log(pilih)
            $("html,body").animate(
                {
                  scrollTop: tujuan,
                },
                1000,
                "easeInOutExpo"
              );
              e.preventDefault();
              e.stopPropagation();
        })
    }

    action();
    $(".button").click((e) => {
        head();
        landingPage();
        aboutMe();
        skills();
        project();
        footer();
    })



    const button = $(".sideLeft .hereMe button");

    $(button).mouseover(function(){
        if($(".sideLeft").hasClass("left")){
            $(button).addClass("buttonLandLighthover");
        }
    })

    $(button).mouseout(function (){
        if($(".sideLeft").hasClass("left")){
            $(button).removeClass("buttonLandLighthover");
        }
    })

    $("a").hasClass("a")



});
