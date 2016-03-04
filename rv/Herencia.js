function Pierna(){
THREE.Object3D.call(this);
this.pierna=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
this.pie=    new THREE.Mesh(new THREE.BoxGeometry(2,1,1));
this.pierna.position.y=-2.5;
this.pie.position.y=4.5;
this.pie.position.y=4.5;
this.pie.position.x=1;
this.add(this.pierna);
this.add(this.pie);
}

Pierna.prototype= new THREE.Object3D;
function setup(){
  var cuerpo= new THREE.Mesh(new THREE.CylinderGeometry(1,2,5,10));
  piernaD=new Pierna();
  pierna1=new Pierna();
  cuerpo.position.y=2;
  piernaD.position.z=1;
  pierna1.position.z=1;
  step=.01;
  escerna= new THREE.Scene();
  escena.add(cuerpo);
  escena.add(piernaD);
  escena.add(pierna1);
  camara= new THREE.PerspectiveCamera();
  camara.position.z=20;
  
  renderer=new THREE.WebGLRenderer();
  renderer.setSize( wincow.innerHeight*.95, window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  }
  function loop(){
  requestAnimationFrame(loop);
  renderer.renderer(escena, camara);
  if (Math.abs(piernaD.rotation.z)>.5)
    step= -step;
    piernaD.rotation.z +=step;
    pierna1.rotation.z -=step;
    }
    var escena,camara,renderer;
    var step,piernaD,pierna1;
    setup();
    loop();
    
