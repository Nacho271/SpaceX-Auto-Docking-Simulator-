//Develope by Jesus Eduardo Carreño Rodriguez (México)
//INSTRUCTIONS: Just wait to crew dragon stay and then copy all this code and execute in console
var key=0;
var pitch,roll,yaw,vE,vY,vZ;
var arribaP,abajoP;
  function arreglarPitch(){
    
    if(fixedRotationX < -0.1 || fixedRotationX > 0.1){

      if(fixedRotationX < 0){

        if(arribaP != 1){
          //for(i=0;i < 5; i++){
            document.getElementById('pitch-up-button').click();
          //}
        //console.log("Boton arriba PITCH");
        arribaP = 1;
        //console.log("ArribaP="+arribaP);
        
        }

      }else{

        if(abajoP != 1){
          //for(i=0;i < 5; i++){
            document.getElementById('pitch-down-button').click();
          //}
          //console.log("Boton abajo PITCH");
          abajoP = 1;
          //console.log("AbajoP="+abajoP);
        }

      }
      setTimeout(arreglarPitch, 300);

    }else if(fixedRotationX >= -0.1 && fixedRotationX <= 0.1){
      //console.log("Punto exacto PITCH");
      pitch = true;
      if(arribaP == 1){
        arribaP=0;
        //for(i=0;i < 5; i++){
          document.getElementById('pitch-down-button').click();
        //}
        //console.log("Boton abajo PITCH");
      }

      if(abajoP == 1){
        abajoP = 0;
        //for(i=0;i < 5; i++){
          document.getElementById('pitch-up-button').click();
        //}
        //console.log("Boton arriba PITCH");
      }

    }
}

var izquierdaR,derechaR;
function arreglarRoll(){

   if (fixedRotationZ < -0.1 || fixedRotationZ > 0.1) {

    if(fixedRotationZ < 0){

      if(izquierdaR != 1){
       // for(i=0;i < 5; i++){
          document.getElementById('roll-left-button').click();
        //}
        //console.log("Boton izquierda ROLL");
        izquierdaR = 1;
        //console.log("IzquierdaR="+izquierdaR);
        
      }

    }else{

      if(derechaR !=1){
        //for(i=0;i < 5; i++){
          document.getElementById('roll-right-button').click();
        //} 
        //console.log("Boton derecha ROLL");
        derechaR = 1;
        //console.log("DerechaR="+derechaR);
        
      }

    }
    setTimeout(arreglarRoll, 300);
   }else if(fixedRotationZ >= -0.1 && fixedRotationZ <= 0.1){
    //console.log("Punto exacto ROLL");
    roll = true;
    
    if(izquierdaR == 1){
      izquierdaR= 0;
      //for(i=0;i < 5; i++){
        document.getElementById('roll-right-button').click();
      //}
      //console.log("Boton derecha ROLL");
    }

    if(derechaR == 1){
      derechaR = 0;
      //for(i=0;i < 5; i++){
        document.getElementById('roll-left-button').click();
      //}
      //console.log("Boton izquierda ROLL");
    }

  }
}

var izquierdaY,derechaY;
function arreglarYaw(){
  if (fixedRotationY < -0.1 || fixedRotationY > 0.1) {

    if(fixedRotationY < 0){

      if(izquierdaY != 1){
        //for(i=0;i < 5; i++){
          document.getElementById('yaw-left-button').click();
        //}
        //console.log("Boton izquierda YAW");
        izquierdaY = 1;
        //console.log("IzquierdaY="+izquierdaY);
        
      }

    }else{

      if(derechaY !=1){
        //for(i=0;i < 5; i++){
          document.getElementById('yaw-right-button').click();
        //}
        //console.log("Boton derecha YAW");
        derechaY = 1;
        //console.log("DerechaY="+derechaY);
        
      }

    }
    setTimeout(arreglarYaw, 300);
   }else if(fixedRotationY >= -0.1 && fixedRotationY <= 0.1){
    //console.log("Punto exacto YAW");
    yaw = true;
    if(izquierdaY == 1){
      izquierdaY= 0;
      
      //for(i=0;i < 5; i++){
        document.getElementById('yaw-right-button').click();
      //}
      //console.log("Boton derecha YAW");
    }

    if(derechaY == 1){
      derechaY = 0;
      //for(i=0;i < 5; i++){
        document.getElementById('yaw-left-button').click();
      //}
      //console.log("Boton izquierda YAW");
    }

  }
}
//********************************* */
//ARRIBA Y ABAJO
var arribaTY,abajoTY;
var primeraY = 0;
function arreglarY(){
  y=camera.position.y-issObject.position.y;
  y = y.toFixed(2);
  console.log("Y:"+y);
  
  if(y < -0.05 || y > 0.05){
    
    if(y < 0){

      if(arribaTY != 1){
        if(primeraY == 0){
        for (i = 0; i < 10; i++) {
          document.getElementById('translate-up-button').click();
        }
      }else{
        document.getElementById('translate-up-button').click();
      }
       // console.log("Boton arriba TRANSLATE Y");
        arribaTY = 1;
        //console.log("ArribaTY="+arribaTY);
        
      }
      
    }else{
      if(abajoTY !=1){
        if(primeraY == 0){
        for (i = 0; i < 10; i++) {
          document.getElementById('translate-down-button').click();
        }
      }else{
        document.getElementById('translate-down-button').click();
      }
        //console.log("Boton abajo TRANSLATE Y");
        abajoTY = 1;
        //console.log("AbajoTY="+abajoTY);
        
      }
    }
    setTimeout(arreglarY, 100);
  }else if(y >= -0.05 && y <= 0.05){
    //console.log("Punto exacto TRANSLATE Y");
   
    
    if(arribaTY == 1){
      arribaTY= 0;
      if(primeraY == 0){
        vY = true;
        for (i = 0; i < 10; i++) {
          document.getElementById('translate-down-button').click();
        }
        primeraY == 1;
      }else{
        document.getElementById('translate-down-button').click();
      }
      //console.log("Boton abajo TRANSLATE Y");
    }

    if(abajoTY == 1){
      abajoTY = 0;
      if(primeraY == 0){
        for (i = 0; i < 10; i++) {
          document.getElementById('translate-up-button').click();
        }
        primeraY = 1;
        arreglarZ();
      }else{
        document.getElementById('translate-up-button').click();
      }
      //console.log("Boton arriba TRANSLATE Y");

    }
    repetirY();
  }
}

//DERECHA Y IZQUIERDA
var derechaTX,izquierdaTX;
var primeraX = 0;
function arreglarX(){
  x = camera.position.x-issObject.position.x;
  x = x.toFixed(2);
  console.log("X:"+ x);
  
  if(x < -0.05 || x > 0.05){

    if(x < 0){

    if(derechaTX != 1){
      if(primeraX == 0){
        for (i = 0; i < 10; i++) {
          document.getElementById('translate-right-button').click();
        }
      }else{
        document.getElementById('translate-right-button').click();
      }
      //console.log("Boton derecha TRANSLATE X");
      derechaTX = 1;
      //console.log("derechaTX="+derechaTX);
      
    }
    
  }else{
    if(izquierdaTX !=1){
      if(primeraX == 0){
        vX = true;
      for (i = 0; i < 10; i++) {
        document.getElementById('translate-left-button').click();
      }
    }else{
      document.getElementById('translate-left-button').click(); 
    }
     // console.log("Boton izquierda TRANSLATE X");
      izquierdaTX = 1;
      //console.log("izquierdaTX="+izquierdaTX);
      
    }
  }
  setTimeout(arreglarX, 300);

  }else if(x >= -0.05 && x <= 0.05){
    console.log("Punto exacto TRANSLATE X");
    
    if(derechaTX == 1){
      derechaTX= 0;
      if(primeraX == 0){
        for (i = 0; i < 10; i++) {
          document.getElementById('translate-left-button').click();
        }
        primeraX = 1;
        console.log("Debio llamar Y");
        
        arreglarY();
      }else{
        document.getElementById('translate-left-button').click();
      }
      
      //console.log("Boton izquierda TRANSLATE X");
    }

    if(izquierdaTX == 1){
      izquierdaTX = 0;

      if(primeraX == 0){
        for (i = 0; i < 10; i++) {
          document.getElementById('translate-right-button').click();
        }
        primeraX = 1;
        arreglarY();
      }else{
        document.getElementById('translate-right-button').click();
      }
      
      //console.log("Boton derecha TRANSLATE X");
    }
    repetirX();
  }
}

//ATRAS Y ADELANTE
var atrasTZ,adelanteTZ;
var primeraZ = 0;
var key = 0;
function arreglarZ(){
  z = camera.position.z-issObject.position.z;
  z = z.toFixed(1);
  
  console.log("Z:"+z);
  if(primeraZ == 0){
    for (i = 0; i < 20; i++) {
      document.getElementById('translate-forward-button').click();
        
    }
    primeraZ = 1;
  }
  if(z <= 13){
    if(key == 0){
    controlSpeed();
    key = 1;
    }
  }
  
  setTimeout(arreglarZ, 100);
}

var s;
function controlSpeed(){
s = smoothRangeRate.toFixed(1);
if(s >= 0.0 && s <= 0.2){
  console.log("Velocidad perfecta");
  //setTimeout(controlSpeed,2000);
}else{
    if(s < 0){
      document.getElementById('translate-backward-button').click();
    }else{
      document.getElementById('translate-forward-button').click();
    }
    setTimeout(controlSpeed,2000);
  }
}

function empezar(){
  arreglarRoll();
  arreglarPitch();
  arreglarYaw();
  avanzar();
  //arreglarX();
  //arreglarY(); 
  //arreglarZ(); 
}
function avanzar(){
  if (pitch == true && roll == true && yaw == true) {
    arreglarX();
  }else{
    setTimeout(avanzar,3000);
  }
}

function repetirX(){
    setTimeout(arreglarX,100);
}

function repetirY(){
    setTimeout(arreglarY,300);
}

function repetirZ(){
    setTimeout(arreglarZ,300);
}

empezar();

//ARREGLAR X = PERFECTO(POR SEPARADO)
//ARREGLAR Y = PERFECTO(POR SEPARADO)
//ARREGLAR Z = PERFECTO(POR SEPARADO)