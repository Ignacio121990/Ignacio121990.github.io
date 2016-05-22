
var keyboard = new THREEx.KeyboardState();
function setup(){
  var esferaForma = new THREE.SphereGeometry(3,100,100);
  var cilindroForma = new THREE.CylinderGeometry(0.5,0.5,3);
  var rectanguloForma = new THREE.BoxGeometry(2,1,0.5);
  
  var cuerpo = new THREE.Mesh(esferaForma);
  var brazoI = new THREE.Mesh(cilindroForma);
  var brazoD = new THREE.Mesh(cilindroForma);
  var pieI = new THREE.Mesh(rectanguloForma);
  var pieD = new THREE.Mesh(rectanguloForma);
  
  brazoI.position.x=2.5;
  brazoD.position.x=-2.5;
  pieD.position.y=-3;
  pieD.position.x=1;
  pieI.position.y=-3;
  pieI.position.x=-1;
  pieD.position.z=1;
  pieI.position.z=1;
  brazoD.rotation.z=1.5;
  brazoI.rotation.z=-1.5;
  
  
  var forma = new THREE.Geometry();
  
  THREE.GeometryUtils.merge( forma, cuerpo);
  THREE.GeometryUtils.merge( forma, brazoI);
  THREE.GeometryUtils.merge( forma, brazoD);
  THREE.GeometryUtils.merge( forma, pieI);
  THREE.GeometryUtils.merge( forma, pieD);
  
  malla = new THREE.Mesh(forma);
  
  escena = new THREE.Scene();
  escena.add(malla);
  camara=new THREE.PerspectiveCamera();
camara.position.z=20;

//5 ancho 8 altura
camara2 = new THREE.OrthographicCamera( 16 / - 2, 16 / 2, 10 / 2, 10 / - 2, 1, 1000 );
camara2.position.z=15;
camara2.position.x=10;

//5 sobre 8 es ancho contra altura
//camara3 = new THREE.PerspectiveCamera( 45, 5 / 8, 1, 1000 );
camara3 = new THREE.PerspectiveCamera( 30, 10 / 16, 1, 1000 );
camara3.position.z=30;

escena.add(camara);
escena.add(camara2);
escena.add(camara3);

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}



function loop(){


if (keyboard.pressed("P")) {
renderer.render(escena,camara3);
}
else
{
renderer.render(escena,camara2);
}
requestAnimationFrame(loop);

}

var camara,camara2,camara3,escena,renderer,malla,mallat;
setup();
loop();
