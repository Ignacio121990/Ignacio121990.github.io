function Sensor (position,direction){
THREE.Raycaster.call(this,position,direction);
this.colision=false;
}
Sensor.prototype=new THREE.Raycaster();
function Robot(size,x,y){
Agent.call (this,x,y);

this.sensor=new Sensor();
this.actuator= new THREE.Mesh(
new THREE.BoxGeometry(size,size,size),
    new THREE.MeshBasicMaterial({color: '#aa0000'}));
    this.actuador.commands=[];
    this add
