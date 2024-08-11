import { Component,
   OnInit,
  ElementRef,
  ViewChild } from '@angular/core';
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

  import * as THREE from 'three';

@Component({
  selector: 'app-canvas-box',
  templateUrl: './canvas-box.component.html',
  styleUrl: './canvas-box.component.css'
})
export class CanvasBoxComponent implements OnInit{

  //this is more efficient
  @ViewChild('myCanvas')
  myCanvas!: ElementRef;


  ngAfterViewInit(){
   // const canvasElement = this.myCanvas.nativeElement;

  //  this.createThreeJsBox(); 
  if (typeof window !== 'undefined') {
  const canvasElement = this.myCanvas.nativeElement;
    this.createThreeJsBox(); 
  }
  }

  //getelementbyid is not efficient 
  ngOnInit(): void {
    // const canvasElement = this.myCanvas.nativeElement;
    //  this.createThreeJsBox();  
  }

  createThreeJsBox(): void{
    // const canvas = document.getElementById('canvas-box');
      const canvas = this.myCanvas.nativeElement;
  
      const scene = new THREE.Scene();
  
      const material = new THREE.MeshToonMaterial();
  
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
  
      const pointLight = new THREE.PointLight(0xffffff, 0.5);
      pointLight.position.x = 2;
      pointLight.position.y = 2;
      pointLight.position.z = 2;
      scene.add(pointLight);
  
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 1.5, 1.5), 
        material
     );
  
     const torus = new THREE.Mesh(
        new THREE.TorusGeometry(5, 1.5, 16, 100),
        material
     );
     
     const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(2, 10),
      material
     );

     const objLoader = new OBJLoader();
        objLoader.load
        ("newscene.mtl", 
        (root: THREE.Object3D) => {
  //    Add the loaded model to your scene
        scene.add(root);
});
  
     scene.add(box, torus);

     const canvasSizes = {
      width: window.innerWidth,
      height: window.innerHeight,
     };
  
     const camera = new THREE.PerspectiveCamera(
      75,
      canvasSizes.width / canvasSizes.height,
      0.001,
      1000
     );
     camera.position.z = 30;
     scene.add(camera);
  
     if (!canvas) {
      return;
     }
  
     const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
     });
     renderer.setClearColor(0xe232222, 1);
     renderer.setSize(canvasSizes.width, canvasSizes.height);
     
     window.addEventListener('resize', () => {
      canvasSizes.width = window.innerWidth;
      canvasSizes.height = window.innerHeight;
  
      camera.aspect = canvasSizes.width / canvasSizes.height;
      camera.updateProjectionMatrix();
  
      renderer.setSize(canvasSizes.width, canvasSizes.height);
      renderer.render(scene, camera);

      const clock = new THREE.Clock();

      const animateGeometry = () => {
        const elapsedTime = clock.getElapsedTime();

    
        // Update animation objects
        box.rotation.x = elapsedTime;
        box.rotation.y = elapsedTime;
        box.rotation.z = elapsedTime;
    
        torus.rotation.x = -elapsedTime;
        torus.rotation.y = -elapsedTime;
        torus.rotation.z = -elapsedTime;
    
        // Render
        renderer.render(scene, camera);
    
        // Call animateGeometry again on the next frame
        window.requestAnimationFrame(animateGeometry);

      };
    
      animateGeometry();
    });
    }
  

}
