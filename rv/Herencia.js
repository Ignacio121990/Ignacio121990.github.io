function Pierna(){
THREE.Object3D.call(this);
this.pierna = new THREE.Mesh( new THREE.BoxGeometry(1,5,1));
this.pie    = new THREE.Mesh( new THREE.BoxGeometry(2,1,1));
this.pierna.position.y = -2.5;
this.pie.position.y=-4.5;
this.pie.position.x=1;
this.add(this.pierna);
this.add(this.pie);
}

Pierna.prototype = new THREE.Object3D;

function Completo(){
THREE.Object3D.call(this);  
this.cuerpo = new THREE.Mesh( new THREE.CylinderGeometry(1,2,5,10) );
this.piernaD = new Pierna();
this.piernaI = new Pierna();
this.cuerpo.position.y=2;
this.piernaD.position.z=-1;
this.piernaI.position.z=1;
this.add(this.cuerpo);
this.add(this.piernaD);
this.add(this.piernaI);
}

Completo.prototype = new THREE.Object3D;

function setup(){
body = new Completo;
step = .01;
escena = new THREE.Scene();
escena.add(body);
camara = new THREE.PerspectiveCamera();
camara.position.z=20;

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame( loop );
renderer.render (escena, camara);

if (Math.abs(body.piernaD.rotation.z) > .5 )
  step = -step;
body.piernaD.rotation.z += step;
body.piernaI.rotation.z -= step;

body.rotation.z += 0.01;
}

var escena, camara, renderer;
var step, piernaD, piernaI;

setup();
loop();
