function Completo(){
  THREE.Object3D.call(this);
  THREE.ImageUtils.crossOrigin = '';
  var cara = THREE.ImageUtils.loadTexture('http://Ignacio121990.github.io/12899665_10153684992446843_1267488120_n.jpg');
  var brazos = THREE.ImageUtils.loadTexture('http://Ignacio121990.github.io/12899889_10153685013876843_569751267_n.jpg');
  var pies = THREE.ImageUtils.loadTexture('http://Ignacio121990.github.io/12919388_10153685013881843_2062601905_o.jpg');  
  
  
   
  this.cuerpo = new THREE.Mesh(new THREE.SphereGeometry(3,100,100),new THREE.MeshLambertMaterial({map:cara}));
  this.brazoI = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,3),new THREE.MeshLambertMaterial({map:brazos}));
  this.brazoD = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,3),new THREE.MeshLambertMaterial({map:brazos}));
  this.pieI = new THREE.Mesh(new THREE.BoxGeometry(2,1,0.5),new THREE.MeshLambertMaterial({map:pies}));
  this.pieD = new THREE.Mesh(new THREE.BoxGeometry(2,1,0.5),new THREE.MeshLambertMaterial({map:pies}));
  
  this.brazoI.position.z=2.3;
  this.brazoD.position.z=-2.3;
  this.pieD.position.y=-3;
  this.pieD.position.z=1;
  this.pieI.position.y=-3;
  this.pieI.position.z=-1;
  this.pieD.position.x=1;
  this.pieI.position.x=1;
  this.brazoD.rotation.x=1.5;
  this.brazoI.rotation.x=-1.5;
  
  this.add(this.pieI)
  this.add(this.pieD)
  this.add(this.brazoI)
  this.add(this.brazoD)
  this.add(this.cuerpo)
}


escena=new THREE.Scene();
escena.add(malla);

camara=new THREE.PerspectiveCamera();
camara.position.z=5;

//5 ancho 8 altura
camara2 = new THREE.OrthographicCamera( 8 / - 2, 8 / 2, 5 / 2, 5 / - 2, 1, 1000 );
camara2.position.z=5;
camara2.position.x=1;

//5 sobre 8 es ancho contra altura
//camara3 = new THREE.PerspectiveCamera( 45, 5 / 8, 1, 1000 );
camara3 = new THREE.PerspectiveCamera( 30, 5 / 8, 1, 1000 );
camara3.position.z=10;

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

var camara,camara2,camara3,escena,renderer,malla;
setup();
loop();
