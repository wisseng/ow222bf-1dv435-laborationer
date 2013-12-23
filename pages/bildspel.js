/* bildspel*/

var image1=new Image ()
image1.src="../pics/grf.png"

var image2=new Image ()
image2.src="../pics/giraff2.png"

var image3=new Image ()
image3.src="../pics/gir_side.png"

var step=1
function slideit (){
    document.images.slide.src=eval ("image"+step+".src");
    if(step<3)
    step++
    else
    step=1
    setTimeout("slideit()",2000)
}
slideit();



