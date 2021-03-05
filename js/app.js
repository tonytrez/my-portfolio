let form = document.querySelector('.instruction');
window.addEventListener('click', function(e){
    form.classList.add('hidden');
})

const starWars = document.querySelector('.sprite');
const container = document.querySelector('body');

// scene init
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 0.1, 1000 );

// sphere
const geometry = new THREE.SphereGeometry( 50, 32, 32 );
const texture = new THREE.TextureLoader().load('images/22.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.repeat.x = -1;
const material = new THREE.MeshBasicMaterial( {
    map: texture,
    side: THREE.DoubleSide
} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

// Sprite
function addSprite(position, name) {
    let map = new THREE.TextureLoader().load( 'images/question.png' );
    let spriteMaterial = new THREE.SpriteMaterial( { map: map } );
    let sprite = new THREE.Sprite( spriteMaterial );
    sprite.name = name;
    sprite.position.copy(position.clone().normalize().multiplyScalar(30));
    sprite.scale.multiplyScalar(2.2);
    scene.add( sprite );
}

// rendu
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

// controls
const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableZoom = false;
controls.rotateSpeed = 0.5;
camera.position.set(1, 0, 0);
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

const rayCaster = new THREE.Raycaster();

function onClick(e) {
    let mouse = new THREE.Vector2(
        ( e.clientX / window.innerWidth ) * 2 - 1,
        - ( e.clientY / window.innerHeight ) * 2 + 1
    );
    rayCaster.setFromCamera(mouse, camera);
    let intersects = rayCaster.intersectObjects(scene.children);
    intersects.forEach(intersect => {
        if(intersect.object.type === 'Sprite') {
            console.log(intersect.object.name);
        }
    });

    /**
         Add sprite with intersects

        let intersects = rayCaster.intersectObject(sphere);
        if(intersects.length > 0) {
        console.log(intersects[0].point);
        addSprite(intersects[0].point);
        }
    */ 
}

let spriteIsActive = false;

function onMouseMove(e) {
    let mouse = new THREE.Vector2(
        ( e.clientX / window.innerWidth ) * 2 - 1,
        - ( e.clientY / window.innerHeight ) * 2 + 1
    );
    rayCaster.setFromCamera(mouse, camera);
    let foundSprite = false;
    let intersects = rayCaster.intersectObjects(scene.children);
    intersects.forEach(intersect => {
        if(intersect.object.type === 'Sprite') {
            let p = intersect.object.position.clone().project(camera);
            starWars.style.top = ((-1 * p.y + 1) * window.innerHeight / 2) + 'px';
            starWars.style.left = ((p.x +1) * window.innerWidth / 2) + 'px';
            starWars.classList.add('is-active');
            spriteIsActive = true;
            foundSprite = true;
        }
    });
    if(foundSprite === false && spriteIsActive) {
        starWars.classList.remove('is-active');
    }

}

addSprite(new THREE.Vector3(44.20589230137809, 12.195792476384847, -19.53438912600601), 'star-wars');

window.addEventListener('resize', onResize);
container.addEventListener('click', onClick);
container.addEventListener('mousemove', onMouseMove);