const presentation = document.querySelector('#presentation');
const contact = document.querySelector('#contact');
const skills = document.querySelector('#skills');
const container = document.querySelector('body');
const portfolio = document.querySelector('#portfolio');
const download = document.querySelector('#download');
const skillsTitle = document.querySelector('#skillsTitle');

// scene init
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 0.1, 1000 );

// sphere
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

let spriteIsActive = false;
let foundSprite = false;

function onClick(e) {
    let mouse = new THREE.Vector2(
        ( e.clientX / window.innerWidth ) * 2 - 1,
        - ( e.clientY / window.innerHeight ) * 2 + 1
    );
    rayCaster.setFromCamera(mouse, camera);
    let intersects = rayCaster.intersectObjects(scene.children);
    intersects.forEach(intersect => {
        if(intersect.object.name === 'skills' && intersect.object.type === 'Sprite') {
            let p = intersect.object.position.clone().project(camera);
            skills.style.top = window.innerHeight / 3 + 'px';
            skills.style.left = window.innerWidth / 3 + 'px';
            skills.classList.remove('hidden');
            skills.classList.add('is-active');
            setTimeout(function(){
                skills.classList.add('opacity');
            }, 0.1);
            spriteIsActive = true;
            foundSprite = true;
        } else if(intersect.object.name === 'contact' && intersect.object.type === 'Sprite') {
            let p = intersect.object.position.clone().project(camera);
            contact.style.top = window.innerHeight / 3 + 'px';
            contact.style.left = window.innerWidth / 3 + 'px';
            contact.classList.remove('hidden');
            contact.classList.add('is-active');
            setTimeout(function(){
                contact.classList.add('opacity');
            }, 0.1);
            spriteIsActive = true;
            foundSprite = true;
        } else if(intersect.object.name === 'presentation' && intersect.object.type === 'Sprite') {
            let p = intersect.object.position.clone().project(camera);
            presentation.style.top = window.innerHeight / 3 + 'px';
            presentation.style.left = window.innerWidth / 3 + 'px';
            presentation.classList.remove('hidden');
            presentation.classList.add('is-active');
            setTimeout(function(){
                presentation.classList.add('opacity');
            }, 0.1);
            spriteIsActive = true;
            foundSprite = true;
        } else if(intersect.object.name === 'portfolio' && intersect.object.type === 'Sprite') {
            let p = intersect.object.position.clone().project(camera);
            portfolio.style.top = window.innerHeight / 3 + 'px';
            portfolio.style.left = window.innerWidth / 3 + 'px';
            portfolio.classList.remove('hidden');
            portfolio.classList.add('is-active');
            setTimeout(function(){
                portfolio.classList.add('opacity');
            }, 0.1);
            spriteIsActive = true;
            foundSprite = true;
        } else if(intersect.object.name === 'download' && intersect.object.type === 'Sprite') {
            let p = intersect.object.position.clone().project(camera);
            download.style.top = window.innerHeight / 3 + 'px';
            download.style.left = window.innerWidth / 3 + 'px';
            download.classList.remove('hidden');
            download.classList.add('is-active');
            setTimeout(function(){
                download.classList.add('opacity');
            }, 0.1);
            spriteIsActive = true;
            foundSprite = true;
        }
        // if(foundSprite === false && spriteIsActive) {
        //     presentation.classList.remove('is-active', 'opacity');
        //     skills.classList.remove('is-active', 'opacity');
        //     contact.classList.remove('is-active', 'opacity');
        //     portfolio.classList.remove('is-active', 'opacity');
        //     download.classList.remove('is-active', 'opacity');
        // }
    });

        //Add sprite with intersects (decomment next lines and comment line 65 to 70)

        // let intersects = rayCaster.intersectObject(sphere);
        // if(intersects.length > 0) {
        // console.log(intersects[0].point);
        // addSprite(intersects[0].point);
        // }
}



// /**
//  *  Detect mouse hover the stripes
//  */
// function onMouseMove(e) {
//     let mouse = new THREE.Vector2(
//         ( e.clientX / window.innerWidth ) * 2 - 1,
//         - ( e.clientY / window.innerHeight ) * 2 + 1
//     );
//     rayCaster.setFromCamera(mouse, camera);
//     let foundSprite = false;
//     let intersects = rayCaster.intersectObjects(scene.children);
//     intersects.forEach(intersect => {
//         if(intersect.object.name === 'skills' && intersect.object.type === 'Sprite') {
//             let p = intersect.object.position.clone().project(camera);
//             skillsTitle.style.top = ((-1 * p.y + 1) * window.innerHeight / 2) + 'px';
//             skillsTitle.style.left = ((p.x +1) * window.innerWidth / 2) + 'px';
//             skillsTitle.classList.add('is-active');
//             setTimeout(function(){
//                 skillsTitle.classList.add('opacity');
//             }, 0.1);
//             spriteIsActive = true;
//             foundSprite = true;
//         } else if(intersect.object.name === 'contact' && intersect.object.type === 'Sprite') {
//             let p = intersect.object.position.clone().project(camera);
//             contactTitle.style.top = ((-1 * p.y + 1) * window.innerHeight / 2) + 'px';
//             contactTitle.style.left = ((p.x +1) * window.innerWidth / 2) + 'px';
//             contactTitle.classList.remove('hidden');
//             contactTitle.classList.add('is-active');
//             setTimeout(function(){
//                 contactTitle.classList.add('opacity');
//             }, 0.1);
//             spriteIsActive = true;
//             foundSprite = true;
//         } else if(intersect.object.name === 'presentation' && intersect.object.type === 'Sprite') {
//             let p = intersect.object.position.clone().project(camera);
//             presentation.style.top = ((-1 * p.y + 1) * window.innerHeight / 2) + 'px';
//             presentation.style.left = ((p.x +1) * window.innerWidth / 2) + 'px';
//             presentation.classList.add('is-active');
//             setTimeout(function(){
//                 presentation.classList.add('opacity');
//             }, 0.1);
//             spriteIsActive = true;
//             foundSprite = true;
//         } else if(intersect.object.name === 'portfolio' && intersect.object.type === 'Sprite') {
//             let p = intersect.object.position.clone().project(camera);
//             portfolio.style.top = ((-1 * p.y + 1) * window.innerHeight / 2) + 'px';
//             portfolio.style.left = ((p.x +1) * window.innerWidth / 2) + 'px';
//             portfolio.classList.add('is-active');
//             setTimeout(function(){
//                 portfolio.classList.add('opacity');
//             }, 0.1);
//             spriteIsActive = true;
//             foundSprite = true;
//         } else if(intersect.object.name === 'download' && intersect.object.type === 'Sprite') {
//             let p = intersect.object.position.clone().project(camera);
//             download.style.top = ((-1 * p.y + 1) * window.innerHeight / 2) + 'px';
//             download.style.left = ((p.x +1) * window.innerWidth / 2) + 'px';
//             download.classList.add('is-active');
//             setTimeout(function(){
//                 download.classList.add('opacity');
//             }, 0.1);
//             spriteIsActive = true;
//             foundSprite = true;
//         }

//     });
//     if(foundSprite === false && spriteIsActive) {
//         presentation.classList.remove('is-active', 'opacity');
//         skillsTitle.classList.remove('is-active', 'opacity');
//         contact.classList.remove('is-active', 'opacity');
//         portfolio.classList.remove('is-active', 'opacity');
//         download.classList.remove('is-active', 'opacity');
//     }
//}


addSprite(new THREE.Vector3(44.20589230137809, 12.195792476384847, -19.53438912600601), 'presentation');
addSprite(new THREE.Vector3(25.65603108948047, 7.616022495239612, -41.981803818297344), 'contact');
addSprite(new THREE.Vector3(16.650711157432735, -12.790775277011582, 45.15725580746167), 'skills');
addSprite(new THREE.Vector3(36.308094670303774, 7.813525968263457, 33.13894040549743), 'portfolio');
addSprite(new THREE.Vector3(48.530593701017644, -10.796425452155306, -2.514799759653478), 'download');

window.addEventListener('resize', onResize);
container.addEventListener('click', onClick);
container.addEventListener('mousemove', onMouseMove);