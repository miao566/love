// 创建场景和相机
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 3, 10);

// 创建渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 添加光源
const pointLight = new THREE.PointLight(0xffffff, 0.8, 100);
pointLight.position.set(0, 5, 0);
const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(0, 10, 0);
scene.add(pointLight, spotLight);

// 创建圣诞树模型
const treeGeometry = new THREE.ConeGeometry(2, 4, 16);
const treeMaterial = new THREE.MeshStandardMaterial({ color: 0x008000 });
const tree = new THREE.Mesh(treeGeometry, treeMaterial);
scene.add(tree);

// 创建树叶
const leavesGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
for (let i = 0; i < 5000; i++) {
  const leaf = new THREE.Mesh(leavesGeometry, leavesMaterial);
  leaf.position.set(
    Math.random() * 4 - 2,
    Math.random() * 2 + 4,
    Math.random() * 4 - 2
  );
  tree.add(leaf);
}

// 渲染循环
function render() {
  requestAnimationFrame(render);

  // 旋转圣诞树
  tree.rotation.y += 0.01;

  renderer.render(scene, camera);
}
render();
