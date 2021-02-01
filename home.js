//    setTimeout(function(){ location.reload();}, 1000);
let sherwaniStr = `
    <div id="sherwanis-list" class="item-div">
        <div class="item">
            <img src="sw1.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="sw2.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="sw3.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="sw4.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="sw1.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="sw2.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="sw3.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="sw4.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
    </div>
`;

let shirtStr = `
    <div id="shirts-list" class="item-div">
        <div class="item">
            <img src="s1.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="s2.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="s3.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="s4.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="s1.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="s2.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="s3.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="s4.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
    </div>
`;

let tshirtStr = `
    <div id="tshirts-list" class="item-div">
        <div class="item">
            <img src="t1.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="t2.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="t3.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="t4.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="t1.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="t2.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="t3.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
        <div class="item">
            <img src="t4.jpg" class="item-img" height="300px" width="170px" alt="s1">
        </div>
    </div>
`;

let current="sw";
$(document).ready(function(){
    document.getElementById("content-list").innerHTML=sherwaniStr;
    $("#shirts-list").hide();
    $("#tshirts-list").hide();
    $("#sherwanis-list").hide();
    $("#sherwanis-img").css("border","3px solid blue");
    $("#sherwanis-text").css("font-weight","bold");
    current="sw";
    $("#sherwanis-list").fadeIn(1500);
    

    $("#sherwanis").click(function(){
        if(current!=="sw"){
            if(current==="s"){
                document.getElementById("content-list").innerHTML=shirtStr;
            }else if(current==="t"){
                document.getElementById("content-list").innerHTML=tshirtStr;
            }
            document.getElementById("content-list").innerHTML+=sherwaniStr;

            $("#shirts-list").hide(1000);
            $("#tshirts-list").hide(1000);

            $("#shirts-img").css("border","none"); $("#shirts-text").css("font-weight","normal");
            $("#tshirts-img").css("border","none"); $("#tshirts-text").css("font-weight","normal");
            $("#sherwanis-img").css("border","3px solid blue"); $("#sherwanis-text").css("font-weight","bold");
            current="sw";

            $("#sherwanis-list").show(1000);
        }
    });
    $("#shirts").click(function(){
        if(current!=="s"){
            if(current==="sw"){
                document.getElementById("content-list").innerHTML=sherwaniStr;
            }else if(current==="t"){
                document.getElementById("content-list").innerHTML=tshirtStr;
            }
            document.getElementById("content-list").innerHTML+=shirtStr;
            
            $("#tshirts-list").hide(1000);
            $("#sherwanis-list").hide(1000);

            $("#sherwanis-img").css("border","none");$("#sherwanis-text").css("font-weight","normal");
            $("#tshirts-img").css("border","none");$("#tshirts-text").css("font-weight","normal");
            $("#shirts-img").css("border","3px solid blue");$("#shirts-text").css("font-weight","bold");
            current="s";

            $("#shirts-list").show(1000);
        }
    });
    $("#tshirts").click(function(){
        if(current!=="t"){
            if(current==="s"){
                document.getElementById("content-list").innerHTML=shirtStr;
            }else if(current==="sw"){
                document.getElementById("content-list").innerHTML=sherwaniStr;
            }
            document.getElementById("content-list").innerHTML+=tshirtStr;
            
            $("#shirts-list").hide(1000);
            $("#sherwanis-list").hide(1000); 

            $("#shirts-img").css("border","none"); $("#shirts-text").css("font-weight","normal");
            $("#sherwanis-img").css("border","none");$("#sherwanis-text").css("font-weight","normal");
            $("#tshirts-img").css("border","3px solid blue");$("#tshirts-text").css("font-weight","bold");
            current="t";

            $("#tshirts-list").show(1000);
        }
    });
});
