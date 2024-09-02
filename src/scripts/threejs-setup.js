import * as THREE from 'three';
import { GLTFLoader } from './GLTFLoader';
import { OrbitControls } from './OrbitControls';

class Your3DModel {
  constructor() {
    this.init();
  }

  init() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('model-canvas').appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load('/robot_playground/scene.gltf', (gltf) => {
      scene.add(gltf.scene);
      renderer.render(scene, camera);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();
  }
}

export default Your3DModel;
