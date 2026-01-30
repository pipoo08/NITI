const canvas = document.getElementById("three-canvas");

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x1b0033, 5, 15);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 350, 0.1, 1000);
camera.position.z = 8;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, 350);

// Soft romantic light
const light = new THREE.PointLight(0xffc0cb, 2);
light.position.set(5, 5, 5);
scene.add(light);

// 💍 Wedding rings
const ringGeo = new THREE.TorusGeometry(1, 0.2, 16, 100);
const ringMat = new THREE.MeshStandardMaterial({ color: 0xffd1dc });
const ring = new THREE.Mesh(ringGeo, ringMat);
ring.position.set(-3, 0, 0);
scene.add(ring);

// 🌍 Travel world
const earthGeo = new THREE.SphereGeometry(0.9, 32, 32);
const earthMat = new THREE.MeshStandardMaterial({ color: 0x6ec6ff });
const earth = new THREE.Mesh(earthGeo, earthMat);
earth.position.set(0, 0, 0);
scene.add(earth);

// 🎮 Gaming controller
const controllerGeo = new THREE.BoxGeometry(1.5, 0.6, 0.5);
const controllerMat = new THREE.MeshStandardMaterial({ color: 0xb388ff });
const controller = new THREE.Mesh(controllerGeo, controllerMat);
controller.position.set(3, 0, 0);
scene.add(controller);

// 💻 Dream PC
const pcGeo = new THREE.BoxGeometry(1, 2, 0.7);
const pcMat = new THREE.MeshStandardMaterial({ color: 0x00ffd5 });
const pc = new THREE.Mesh(pcGeo, pcMat);
pc.position.set(0, -2, 0);
scene.add(pc);

function animate() {
  requestAnimationFrame(animate);

  ring.rotation.y += 0.01;
  earth.rotation.y += 0.005;
  controller.rotation.y -= 0.01;
  pc.rotation.y += 0.01;

  ring.position.y = Math.sin(Date.now() * 0.002) * 0.3;
  earth.position.y = Math.cos(Date.now() * 0.002) * 0.3;

  renderer.render(scene, camera);
}

animate();
