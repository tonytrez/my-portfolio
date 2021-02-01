const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

const geometry = new THREE.SphereGeometry( 50, 32, 32 );
const texture = new THREE.TextureLoader().load('images/office.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.repeat.x = -1;
const material = new THREE.MeshBasicMaterial( {
    map: texture,
    side: THREE.DoubleSide
} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.minPolarAngle = 1.1;
controls.maxPolarAngle = 1.9;
controls.minAzimuthAngle = 3;
controls.maxAzimuthAngle = 0.1;
controls.enableZoom = false;
controls.rotateSpeed = 0.5;
camera.position.set(-1, 0, 0);
controls.update();


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

function onResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

window.addEventListener('resize', onResize);