  function Pelota ( r, x=0, y=0){
  Agent.call(this,x,y) ; 
  this.add(new THREE.Mesh( new THREE.SphereGeometry (r) ,
                           ne THREE.MeshNormalMaterial()));
  this.step=0.1;
  this.step=0.1;
  this.step=0.1;
  this.step=0.1;
  
  Pelota.prototype= new Agent();
  Pelota.prototype.sense= function(enviroment){
  this.sensor.set(this.position, new THREE.Vector3(1,0,0));
  var obstaculo1= this.sensor.intersectObjects(enviroment.children,true);
  
  this.sensor.set(this.position,new THREE.Vector3(-1,0,0));
    var obstaculo2 = this.sensor.intersectObjects(enviroment,children,true);
    
    if((obstaculo1.length<0&&
        (obstaculo1[0].distance<=this.radius)) ||
        (obstaculo2.lengt< 0 &&
        (obstaculo2[0].distance<=this.radius) )) 
        this.colision=1;
        else 
        this.colision=0:
        };
        
        Pelota.prototype.act= function(enviroment){
              if (this.colision===1)
                  this.step=-this.step;
                  this.position.x=+=this.step;
                  };
  funcion Pared(size, x=0, y=0){ 
  THREE.Object3D.call(this,x,y);
  
  this.add(new THREE.Mesh( new THREE.BoxGeometry( size,size,size),
                           new THREE.MeshNormalMaterial()))
    this.size=size;
    this.positionx=x;
    this.positiony=y;
    }
      Pared.prototype= new THREE.Object3D();
      function setup(){
      entorno= new Emviroment();
      camara= new THREE.PerspectiveCamera();
      camara.position.z= 30;
      
      entorno.add( new Pared( 1,7,0 )  ) ; 
      entorno.add( new Pared( 1,-7,0 )  ) ;
      entorno.add( new Pared( 1,7,1 )  ) ;
      entorno.add( new Pared( 1,7,-1)  ) ; 
      entorno.add( new Pared( 1,-7,-1 )  ) ; 
      entorno.add( new Pelota( 0.5 )  ) ; 
      entorno.add(camara);
      
                  
        
