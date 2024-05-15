import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

function main() {
//Trækker et canvas ind fra HTML filer, hvor renderen render indhold ind i 
	const canvas = document.querySelector( '#c' );
	const renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );

//Vi laver et kamera view igennem et Frustrum?
	const fov = 75; //Field of view, 75 degrees
	const aspect = 2; // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.z = 2;

//Så laver vi en scene = det som blvier renderet...
	const scene = new THREE.Scene();

	const boxWidth = 1;
	const boxHeight = 1;
	const boxDepth = 1;
	const geometry = new THREE.BoxGeometry( boxWidth, boxHeight, boxDepth );

	const material = new THREE.MeshBasicMaterial( { color: 0x44aa88 } ); // greenish blue

	const cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	renderer.render( scene, camera );

}

main();
