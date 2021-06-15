// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.98;
	var canvasHeight = window.innerHeight * 0.98;

	// CAMERA

	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 80000);
	camera.position.set(0, 0.5, 9);
	camera.lookAt(0, 0, 0);



	// RENDERER
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(canvasWidth, canvasHeight);
	renderer.setClearColor(0xAAAAAA, 1.0);

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild(renderer.domElement);

	// CONTROLS
	cameraControls = new THREE.OrbitControls(camera, renderer.domElement);
	cameraControls.target.set(0, 0, 0);
	scene = new THREE.Scene();
	//luz
	const spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(0, -1, 15);
	scene.add(spotLight);

	// OBJECT

	/*
		var mesaGeo =new THREE.Geometry();
		mesaGeo.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.7 ) );
		mesaGeo.vertices.push( new THREE.Vector3( 1, 0, 0.7 ) );
		mesaGeo.vertices.push( new THREE.Vector3( 0.0, 0.5, 0.7 ) );
		mesaGeo.vertices.push( new THREE.Vector3( 1, 0.5, 0.7 ) );
		mesaGeo.vertices.push( new THREE.Vector3( 0.0, 0, 0.8 ) );
		mesaGeo.vertices.push( new THREE.Vector3( 1, 0, 0.8 ) );
		mesaGeo.vertices.push( new THREE.Vector3( 0.0, 0.5, 0.8 ) );
		mesaGeo.vertices.push( new THREE.Vector3( 1, 0.5, 0.8 ) );
		mesaGeo.faces.push(new THREE.Face3(2,1,0));
		mesaGeo.faces.push(new THREE.Face3(2,3,1));
		mesaGeo.faces.push(new THREE.Face3(4,5,6));
		mesaGeo.faces.push(new THREE.Face3(6,5,7));
		mesaGeo.faces.push(new THREE.Face3(6,3,2));
		mesaGeo.faces.push(new THREE.Face3(7,3,6));
		mesaGeo.faces.push(new THREE.Face3(0,1,4));
		mesaGeo.faces.push(new THREE.Face3(1,5,4));
		mesaGeo.faces.push(new THREE.Face3(4,2,0));
		mesaGeo.faces.push(new THREE.Face3(4,6,2));
		mesaGeo.faces.push(new THREE.Face3(3,7,1));
		mesaGeo.faces.push(new THREE.Face3(7,5,1));
	
		
		var materialM = new THREE.MeshLambertMaterial( { color: 0x836945 } ); // Material de color rojo
		var mesa = new THREE.Mesh (mesaGeo, materialM); // Crea el objeto
		scene.add(mesa);
	*/
	//mesa1--------------------------------------------------------------------
	const geometryMesa1 = new THREE.BoxGeometry(0.7, 0.45, 0.03);
	const materialMesa1 = new THREE.MeshLambertMaterial({ color: 0x836945 });

	const mesa1 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa1.position.x = -0.7 + -1.5;
	mesa1.position.y = -2 + 2;
	mesa1.position.z = 0.7;
	scene.add(mesa1);
	//patas 1
	const geometryPata1 = new THREE.BoxGeometry(0.04, 0.04, 0.67);
	const materialPata1 = new THREE.MeshLambertMaterial({ color: 0x111111 });

	const pata1 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1.position.x = -0.7 + -1.80;
	pata1.position.y = -2 + 2.2;
	pata1.position.z = 0.35;
	scene.add(pata1);

	const pata2 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2.position.x = -0.7 + -1.2;
	pata2.position.y = -2 + 2.2;
	pata2.position.z = 0.35;
	scene.add(pata2);

	const pata3 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3.position.x = -0.7 + -1.20;
	pata3.position.y = -2 + 1.8;
	pata3.position.z = 0.35;
	scene.add(pata3);

	const pata4 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4.position.x = -0.7 + -1.80;
	pata4.position.y = -2 + 1.8;
	pata4.position.z = 0.35;
	scene.add(pata4);

	const geometryPata2 = new THREE.BoxGeometry(0.02, 0.02, 0.67);
	const materialPata2 = new THREE.MeshLambertMaterial({ color: 0x111111 });

	const pata5 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5.position.x = -0.7 + -1.43;
	pata5.position.y = -2 + 2.1;
	pata5.position.z = 0.35;
	scene.add(pata5);

	const pata6 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6.position.x = -0.7 + -1.43;
	pata6.position.y = -2 + 1.9;
	pata6.position.z = 0.35;
	scene.add(pata6);
	// repisa
	const geometryRepisa = new THREE.BoxGeometry(0.25, 0.45, 0.02);

	const repisa = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa.position.x = -0.7 + -1.325;
	repisa.position.y = -2 + 2;
	repisa.position.z = 0.1;
	scene.add(repisa);
	// pc
	const geometryPC = new THREE.BoxGeometry(0.20, 0.42, 0.42);
	const materialPC = new THREE.MeshLambertMaterial({ color: 0x575757 });
	const PC = new THREE.Mesh(geometryPC, materialPC);
	PC.position.x = -0.7 + -1.325;
	PC.position.y = -2 + 2;
	PC.position.z = 0.3;
	scene.add(PC);
	//monitor
	const geometryMon = new THREE.BoxGeometry(0.45, 0.02, 0.28);
	const materialMon = new THREE.MeshLambertMaterial({ color: 0x575757 });
	const monitor = new THREE.Mesh(geometryMon, materialMon);
	monitor.position.x = -0.7 + -1.5;
	monitor.position.y = -2 + 2;
	monitor.position.z = 0.95;
	scene.add(monitor);

	const geometryBase1 = new THREE.BoxGeometry(0.04, 0.02, 0.25);
	const materialBase1 = new THREE.MeshLambertMaterial({ color: 0xAAAAAA });
	const Base1 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1.position.x = -0.7 + -1.5;
	Base1.position.y = -2 + 2.02;
	Base1.position.z = 0.825;
	scene.add(Base1);

	const geometryBase2 = new THREE.BoxGeometry(0.17, 0.12, 0.01);
	const materialBase2 = new THREE.MeshLambertMaterial({ color: 0x575757 });
	const Base2 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2.position.x = -0.7 + -1.5;
	Base2.position.y = -2 + 2.02;
	Base2.position.z = 0.72;
	scene.add(Base2);

	const geometryPantalla = new THREE.BoxGeometry(0.41, 0, 0.24);
	const materialPantalla = new THREE.MeshBasicMaterial({ color: 0x000000 });
	const pantalla = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla.position.x = -0.7 + -1.5;
	pantalla.position.y = -2 + 1.989;
	pantalla.position.z = 0.95;
	scene.add(pantalla);

	// teclado
	const geometryTecla = new THREE.BoxGeometry(0.44, 0.15, 0.03);
	const materialTecla = new THREE.MeshLambertMaterial({ color: 0x575757 });
	const teclado = new THREE.Mesh(geometryTecla, materialTecla);
	teclado.position.x = -0.7 + -1.55;
	teclado.position.y = -2 + 1.88;
	teclado.position.z = 0.73;
	scene.add(teclado);
	//mouse
	const geometryMouse = new THREE.BoxGeometry(0.05, 0.08, 0.035);
	const materialMouse = new THREE.MeshLambertMaterial({ color: 0x3B3B3B });
	const mouse = new THREE.Mesh(geometryMouse, materialMouse);
	mouse.position.x = -0.7 + -1.27;
	mouse.position.y = -2 + 1.88;
	mouse.position.z = 0.73;
	scene.add(mouse);
	//silla
	var height = 0.4;
	var width = 0.4;
	var depth = 0.1;
	var smoothness = 1;
	var radius0 = 0.05;

	let shape = new THREE.Shape();
	let eps = 0.00001;
	let radius = radius0 - eps;
	shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
	shape.absarc(eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true);
	shape.absarc(width - radius * 2, height - radius * 2, eps, Math.PI / 2, 0, true);
	shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);
	let geometryS1 = new THREE.ExtrudeGeometry(shape, {
		amount: depth - radius0 * 2,
		bevelEnabled: true,
		bevelSegments: smoothness * 2,
		steps: 1,
		bevelSize: radius,
		bevelThickness: radius0,
		curveSegments: smoothness
	});
	const materialSilla = new THREE.MeshLambertMaterial({ color: 0x00235A });
	const silla1 = new THREE.Mesh(geometryS1, materialSilla);
	silla1.position.x = -0.7 + -1.7;
	silla1.position.y = -2 + 1.3;
	silla1.position.z = 0.45;
	scene.add(silla1);
	// patas silla
	const geometryPata1S = new THREE.BoxGeometry(0.03, 0.03, 0.44);
	const materialPata1S = new THREE.MeshLambertMaterial({ color: 0x999999 });

	const pata1S = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S.position.x = -0.7 + -1.7;
	pata1S.position.y = -2 + 1.6;
	pata1S.position.z = 0.225;
	scene.add(pata1S);

	const pata2S = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S.position.x = -0.7 + -1.4;
	pata2S.position.y = -2 + 1.6;
	pata2S.position.z = 0.225;
	scene.add(pata2S);
	const geometryPata2S = new THREE.BoxGeometry(0.03, 0.03, 0.9);

	const pata3S = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S.position.x = -0.7 + -1.4;
	pata3S.position.y = -2 + 1.26;
	pata3S.position.z = 0.45;
	scene.add(pata3S);

	const pata4S = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S.position.x = -0.7 + -1.7;
	pata4S.position.y = -2 + 1.26;
	pata4S.position.z = 0.45;
	scene.add(pata4S);

	var height2 = 0.12;
	var width2 = 0.4;
	var depth2 = 0.3;

	let shape2 = new THREE.Shape();
	shape2.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
	shape2.absarc(eps, height2 - radius * 2, eps, Math.PI, Math.PI / 2, true);
	shape2.absarc(width2 - radius * 2, height2 - radius * 2, eps, Math.PI / 2, 0, true);
	shape2.absarc(width2 - radius * 2, eps, eps, 0, -Math.PI / 2, true);
	let geometryS2 = new THREE.ExtrudeGeometry(shape2, {
		amount: depth2 - radius0 * 2,
		bevelEnabled: true,
		bevelSegments: smoothness * 2,
		steps: 1,
		bevelSize: radius,
		bevelThickness: radius0,
		curveSegments: smoothness
	});

	const silla2 = new THREE.Mesh(geometryS2, materialSilla);
	silla2.position.x = -0.7 + -1.7;
	silla2.position.y = -2 + 1.26;
	silla2.position.z = 0.7;
	scene.add(silla2);


	//mesa9-------------------------------------------------------

	const mesa_9 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_9.position.x = -0.7 + -1.5 + 1.42;
	mesa_9.position.y = -2 + -1.1 + 2;
	mesa_9.position.z = 0.7;
	scene.add(mesa_9);
	//patas 1

	const pata1_9 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_9.position.x = -0.7 + -1.80 + 1.42;
	pata1_9.position.y = -2 + -1.1 + 2.2;
	pata1_9.position.z = 0.35;
	scene.add(pata1_9);

	const pata2_9 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_9.position.x = -0.7 + -1.2 + 1.42;
	pata2_9.position.y = -2 + -1.1 + 2.2;
	pata2_9.position.z = 0.35;
	scene.add(pata2_9);

	const pata3_9 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_9.position.x = -0.7 + -1.20 + 1.42;
	pata3_9.position.y = -2 + -1.1 + 1.8;
	pata3_9.position.z = 0.35;
	scene.add(pata3_9);

	const pata4_9 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_9.position.x = -0.7 + -1.80 + 1.42;
	pata4_9.position.y = -2 + -1.1 + 1.8;
	pata4_9.position.z = 0.35;
	scene.add(pata4_9);

	const pata5_9 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_9.position.x = -0.7 + -1.43 + 1.42;
	pata5_9.position.y = -2 + -1.1 + 2.1;
	pata5_9.position.z = 0.35;
	scene.add(pata5_9);

	const pata6_9 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_9.position.x = -0.7 + -1.43 + 1.42;
	pata6_9.position.y = -2 + -1.1 + 1.9;
	pata6_9.position.z = 0.35;
	scene.add(pata6_9);
	// repisa

	const repisa_9 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_9.position.x = -0.7 + -1.325 + 1.42;
	repisa_9.position.y = -2 + -1.1 + 2;
	repisa_9.position.z = 0.1;
	scene.add(repisa_9);
	// pc

	const PC_9 = new THREE.Mesh(geometryPC, materialPC);
	PC_9.position.x = -0.7 + -1.325 + 1.42;
	PC_9.position.y = -2 + -1.1 + 2;
	PC_9.position.z = 0.3;
	scene.add(PC_9);
	//monitor
	const monitor_9 = new THREE.Mesh(geometryMon, materialMon);
	monitor_9.position.x = -0.7 + -1.5 + 1.42;
	monitor_9.position.y = -2 + -1.1 + 2;
	monitor_9.position.z = 0.95;
	scene.add(monitor_9);

	const Base1_9 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_9.position.x = -0.7 + -1.5 + 1.42;
	Base1_9.position.y = -2 + -1.1 + 2.02;
	Base1_9.position.z = 0.825;
	scene.add(Base1_9);

	const Base2_9 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_9.position.x = -0.7 + -1.5 + 1.42;
	Base2_9.position.y = -2 + -1.1 + 2.02;
	Base2_9.position.z = 0.72;
	scene.add(Base2_9);

	const pantalla_9 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_9.position.x = -0.7 + -1.5 + 1.42;
	pantalla_9.position.y = -2 + -1.1 + 1.989;
	pantalla_9.position.z = 0.95;
	scene.add(pantalla_9);

	// teclado
	const teclado_9 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_9.position.x = -0.7 + -1.55 + 1.42;
	teclado_9.position.y = -2 + -1.1 + 1.88;
	teclado_9.position.z = 0.73;
	scene.add(teclado_9);
	//mouse

	const mouse_9 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_9.position.x = -0.7 + -1.27 + 1.42;
	mouse_9.position.y = -2 + -1.1 + 1.88;
	mouse_9.position.z = 0.73;
	scene.add(mouse_9);
	//silla


	const silla1_9 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_9.position.x = -0.7 + -1.7 + 1.42;
	silla1_9.position.y = -2 + -1.1 + 1.3;
	silla1_9.position.z = 0.45;
	scene.add(silla1_9);
	// patas silla

	const pata1S_9 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_9.position.x = -0.7 + -1.7 + 1.42;
	pata1S_9.position.y = -2 + -1.1 + 1.6;
	pata1S_9.position.z = 0.225;
	scene.add(pata1S_9);

	const pata2S_9 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_9.position.x = -0.7 + -1.4 + 1.42;
	pata2S_9.position.y = -2 + -1.1 + 1.6;
	pata2S_9.position.z = 0.225;
	scene.add(pata2S_9);

	const pata3S_9 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_9.position.x = -0.7 + -1.4 + 1.42;
	pata3S_9.position.y = -2 + -1.1 + 1.26;
	pata3S_9.position.z = 0.45;
	scene.add(pata3S_9);

	const pata4S_9 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_9.position.x = -0.7 + -1.7 + 1.42;
	pata4S_9.position.y = -2 + -1.1 + 1.26;
	pata4S_9.position.z = 0.45;
	scene.add(pata4S_9);

	const silla2_9 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_9.position.x = -0.7 + -1.7 + 1.42;
	silla2_9.position.y = -2 + -1.1 + 1.26;
	silla2_9.position.z = 0.7;
	scene.add(silla2_9);

	//mesa12-------------------------------------------------------

	const mesa_12 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_12.position.x = -0.7 + -1.5 + 4.34;
	mesa_12.position.y = -2 + -1.1 + 2;
	mesa_12.position.z = 0.7;
	scene.add(mesa_12);
	//patas 1

	const pata1_12 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_12.position.x = -0.7 + -1.80 + 4.34;
	pata1_12.position.y = -2 + -1.1 + 2.2;
	pata1_12.position.z = 0.35;
	scene.add(pata1_12);

	const pata2_12 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_12.position.x = -0.7 + -1.2 + 4.34;
	pata2_12.position.y = -2 + -1.1 + 2.2;
	pata2_12.position.z = 0.35;
	scene.add(pata2_12);

	const pata3_12 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_12.position.x = -0.7 + -1.20 + 4.34;
	pata3_12.position.y = -2 + -1.1 + 1.8;
	pata3_12.position.z = 0.35;
	scene.add(pata3_12);

	const pata4_12 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_12.position.x = -0.7 + -1.80 + 4.34;
	pata4_12.position.y = -2 + -1.1 + 1.8;
	pata4_12.position.z = 0.35;
	scene.add(pata4_12);

	const pata5_12 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_12.position.x = -0.7 + -1.43 + 4.34;
	pata5_12.position.y = -2 + -1.1 + 2.1;
	pata5_12.position.z = 0.35;
	scene.add(pata5_12);

	const pata6_12 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_12.position.x = -0.7 + -1.43 + 4.34;
	pata6_12.position.y = -2 + -1.1 + 1.9;
	pata6_12.position.z = 0.35;
	scene.add(pata6_12);
	// repisa

	const repisa_12 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_12.position.x = -0.7 + -1.325 + 4.34;
	repisa_12.position.y = -2 + -1.1 + 2;
	repisa_12.position.z = 0.1;
	scene.add(repisa_12);
	// pc

	const PC_12 = new THREE.Mesh(geometryPC, materialPC);
	PC_12.position.x = -0.7 + -1.325 + 4.34;
	PC_12.position.y = -2 + -1.1 + 2;
	PC_12.position.z = 0.3;
	scene.add(PC_12);
	//monitor
	const monitor_12 = new THREE.Mesh(geometryMon, materialMon);
	monitor_12.position.x = -0.7 + -1.5 + 4.34;
	monitor_12.position.y = -2 + -1.1 + 2;
	monitor_12.position.z = 0.95;
	scene.add(monitor_12);

	const Base1_12 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_12.position.x = -0.7 + -1.5 + 4.34;
	Base1_12.position.y = -2 + -1.1 + 2.02;
	Base1_12.position.z = 0.825;
	scene.add(Base1_12);

	const Base2_12 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_12.position.x = -0.7 + -1.5 + 4.34;
	Base2_12.position.y = -2 + -1.1 + 2.02;
	Base2_12.position.z = 0.72;
	scene.add(Base2_12);

	const pantalla_12 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_12.position.x = -0.7 + -1.5 + 4.34;
	pantalla_12.position.y = -2 + -1.1 + 1.989;
	pantalla_12.position.z = 0.95;
	scene.add(pantalla_12);

	// teclado
	const teclado_12 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_12.position.x = -0.7 + -1.55 + 4.34;
	teclado_12.position.y = -2 + -1.1 + 1.88;
	teclado_12.position.z = 0.73;
	scene.add(teclado_12);
	//mouse

	const mouse_12 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_12.position.x = -0.7 + -1.27 + 4.34;
	mouse_12.position.y = -2 + -1.1 + 1.88;
	mouse_12.position.z = 0.73;
	scene.add(mouse_12);
	//silla


	const silla1_12 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_12.position.x = -0.7 + -1.7 + 4.34;
	silla1_12.position.y = -2 + -1.1 + 1.3;
	silla1_12.position.z = 0.45;
	scene.add(silla1_12);
	// patas silla

	const pata1S_12 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_12.position.x = -0.7 + -1.7 + 4.34;
	pata1S_12.position.y = -2 + -1.1 + 1.6;
	pata1S_12.position.z = 0.225;
	scene.add(pata1S_12);

	const pata2S_12 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_12.position.x = -0.7 + -1.4 + 4.34;
	pata2S_12.position.y = -2 + -1.1 + 1.6;
	pata2S_12.position.z = 0.225;
	scene.add(pata2S_12);

	const pata3S_12 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_12.position.x = -0.7 + -1.4 + 4.34;
	pata3S_12.position.y = -2 + -1.1 + 1.26;
	pata3S_12.position.z = 0.45;
	scene.add(pata3S_12);

	const pata4S_12 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_12.position.x = -0.7 + -1.7 + 4.34;
	pata4S_12.position.y = -2 + -1.1 + 1.26;
	pata4S_12.position.z = 0.45;
	scene.add(pata4S_12);

	const silla2_12 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_12.position.x = -0.7 + -1.7 + 4.34;
	silla2_12.position.y = -2 + -1.1 + 1.26;
	silla2_12.position.z = 0.7;
	scene.add(silla2_12);

	//mesa31--------------------------------------------------------------------
	const geometryMesa_31 = new THREE.BoxGeometry(0.45, 0.7, 0.03);
	const materialMesa_31 = new THREE.MeshLambertMaterial({ color: 0x836945 });

	const mesa_31 = new THREE.Mesh(geometryMesa_31, materialMesa_31);
	mesa_31.position.x = -0.7 + -1;
	mesa_31.position.y = -2 + 3;
	mesa_31.position.z = 0.7;
	scene.add(mesa_31);
	//patas 1
	const geometryPata1_31 = new THREE.BoxGeometry(0.04, 0.04, 0.67);
	const materialPata1_31 = new THREE.MeshLambertMaterial({ color: 0x111111 });

	const pata1_31 = new THREE.Mesh(geometryPata1_31, materialPata1_31);
	pata1_31.position.x = -0.7 + -1.2;
	pata1_31.position.y = -2 + 3.3;
	pata1_31.position.z = 0.35;
	scene.add(pata1_31);

	const pata2_31 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_31.position.x = -0.7 + -0.8;
	pata2_31.position.y = -2 + 3.3;
	pata2_31.position.z = 0.35;
	scene.add(pata2_31);

	const pata3_31 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_31.position.x = -0.7 + -1.20;
	pata3_31.position.y = -2 + 2.7;
	pata3_31.position.z = 0.35;
	scene.add(pata3_31);

	const pata4_31 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_31.position.x = -0.7 + -0.8;
	pata4_31.position.y = -2 + 2.7;
	pata4_31.position.z = 0.35;
	scene.add(pata4_31);

	const pata5_31 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_31.position.x = -0.7 + -1.1
	pata5_31.position.y = -2 + 2.95;
	pata5_31.position.z = 0.35;
	scene.add(pata5_31);

	const pata6_31 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_31.position.x = -0.7 - 0.9;
	pata6_31.position.y = -2 + 2.95;
	pata6_31.position.z = 0.35;
	scene.add(pata6_31);
	// repisa
	const geometryRepisa_31 = new THREE.BoxGeometry(0.45, 0.25, 0.02);

	const repisa_31 = new THREE.Mesh(geometryRepisa_31, materialMesa1);
	repisa_31.position.x = -0.7 + -1;
	repisa_31.position.y = -2 + 2.85;
	repisa_31.position.z = 0.1;
	scene.add(repisa_31);
	// pc
	const geometryPC_31 = new THREE.BoxGeometry(0.42, 0.20, 0.42);
	const PC_31 = new THREE.Mesh(geometryPC_31, materialPC);
	PC_31.position.x = -0.7 + -1;
	PC_31.position.y = -2 + 2.85;
	PC_31.position.z = 0.3;
	scene.add(PC_31);
	//monitor
	const geometryMon_31 = new THREE.BoxGeometry(0.02, 0.45, 0.28);

	const monitor_31 = new THREE.Mesh(geometryMon_31, materialMon);
	monitor_31.position.x = -0.7 + -1;
	monitor_31.position.y = -2 + 3;
	monitor_31.position.z = 0.95;
	scene.add(monitor_31);

	const geometryBase1_31 = new THREE.BoxGeometry(0.02, 0.04, 0.25);
	const Base1_31 = new THREE.Mesh(geometryBase1_31, materialBase1);
	Base1_31.position.x = -0.7 + -0.99;
	Base1_31.position.y = -2 + 3;
	Base1_31.position.z = 0.825;
	scene.add(Base1_31);

	const geometryBase2_31 = new THREE.BoxGeometry(0.12, 0.17, 0.01);
	const Base2_31 = new THREE.Mesh(geometryBase2_31, materialBase2);
	Base2_31.position.x = -0.7 + -1;
	Base2_31.position.y = -2 + 3;
	Base2_31.position.z = 0.72;
	scene.add(Base2_31);

	const geometryPantalla_31 = new THREE.BoxGeometry(0, 0.41, 0.24);
	const pantalla_31 = new THREE.Mesh(geometryPantalla_31, materialPantalla);
	pantalla_31.position.x = -0.7 + -1.01;
	pantalla_31.position.y = -2 + 3;
	pantalla_31.position.z = 0.95;
	scene.add(pantalla_31);

	// teclado
	const geometryTecla_31 = new THREE.BoxGeometry(0.14, 0.44, 0.03);
	const teclado_31 = new THREE.Mesh(geometryTecla_31, materialTecla);
	teclado_31.position.x = -0.7 + -1.15;
	teclado_31.position.y = -2 + 3.05;
	teclado_31.position.z = 0.73;
	scene.add(teclado_31);
	//mouse
	const geometryMouse_31 = new THREE.BoxGeometry(0.08, 0.05, 0.035);

	const mouse_31 = new THREE.Mesh(geometryMouse_31, materialMouse);
	mouse_31.position.x = -0.7 + -1.15;
	mouse_31.position.y = -2 + 2.75;
	mouse_31.position.z = 0.73;
	scene.add(mouse_31);
	//silla

	const silla1_31 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_31.position.x = -0.7 + -1.7;
	silla1_31.position.y = -2 + 3;
	silla1_31.position.z = 0.45;
	scene.add(silla1_31);
	// patas silla

	const pata1S_31 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_31.position.x = -0.7 + -1.44;
	pata1S_31.position.y = -2 + 3.26;
	pata1S_31.position.z = 0.225;
	scene.add(pata1S_31);

	const pata2S_31 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_31.position.x = -0.7 + -1.44;
	pata2S_31.position.y = -2 + 3;
	pata2S_31.position.z = 0.225;
	scene.add(pata2S_31);

	const pata3S_31 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_31.position.x = -0.7 + -1.75;
	pata3S_31.position.y = -2 + 3.26;
	pata3S_31.position.z = 0.45;
	scene.add(pata3S_31);

	const pata4S_31 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_31.position.x = -0.7 + -1.75;
	pata4S_31.position.y = -2 + 3;
	pata4S_31.position.z = 0.45;
	scene.add(pata4S_31);

	var height2_31 = 0.4;
	var width2_31 = 0.12;
	var depth2_31 = 0.3;

	let shape2_31 = new THREE.Shape();
	shape2_31.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
	shape2_31.absarc(eps, height2_31 - radius * 2, eps, Math.PI, Math.PI / 2, true);
	shape2_31.absarc(width2_31 - radius * 2, height2_31 - radius * 2, eps, Math.PI / 2, 0, true);
	shape2_31.absarc(width2_31 - radius * 2, eps, eps, 0, -Math.PI / 2, true);
	let geometryS2_31 = new THREE.ExtrudeGeometry(shape2_31, {
		amount: depth2_31 - radius0 * 2,
		bevelEnabled: true,
		bevelSegments: smoothness * 2,
		steps: 1,
		bevelSize: radius,
		bevelThickness: radius0,
		curveSegments: smoothness
	});

	const silla2_31 = new THREE.Mesh(geometryS2_31, materialSilla);
	silla2_31.position.x = -0.7 + -1.75;
	silla2_31.position.y = -2 + 3;
	silla2_31.position.z = 0.7;
	scene.add(silla2_31);
	// mesa larga -----------------------------------------------------------
	const geometryMesaLarga = new THREE.BoxGeometry(0.7, 2, 0.04);
	const materialMesaLarga = new THREE.MeshLambertMaterial({ color: 0x774D11 });

	const mesaLarga = new THREE.Mesh(geometryMesaLarga, materialMesaLarga);
	mesaLarga.position.x = -1.5;
	mesaLarga.position.y = -0.36;
	mesaLarga.position.z = 0.7;
	scene.add(mesaLarga);

	const pata1L = new THREE.Mesh(geometryPata1, materialPata1);
	pata1L.position.x = -1.8;
	pata1L.position.y = 0.5;
	pata1L.position.z = 0.35;
	scene.add(pata1L);

	const pata2L = new THREE.Mesh(geometryPata1, materialPata1);
	pata2L.position.x = -1.2;
	pata2L.position.y = 0.5;
	pata2L.position.z = 0.35;
	scene.add(pata2L);

	const pata3L = new THREE.Mesh(geometryPata1, materialPata1);
	pata3L.position.x = -1.8;
	pata3L.position.y = -1.2;
	pata3L.position.z = 0.35;
	scene.add(pata3L);

	const pata4L = new THREE.Mesh(geometryPata1, materialPata1);
	pata4L.position.x = -1.2;
	pata4L.position.y = -1.2;
	pata4L.position.z = 0.35;
	scene.add(pata4L);

	// escritorio pequeño

	const geometryMesaEscritorio_1 = new THREE.BoxGeometry(0.7, 0.5, 0.05);
	const materialMesaEscritorio_1 = new THREE.MeshLambertMaterial({ color: 0x774D11 });

	const mesaMesaEscritorio_1 = new THREE.Mesh(geometryMesaEscritorio_1, materialMesaEscritorio_1);
	mesaMesaEscritorio_1.position.x = 1.45;
	mesaMesaEscritorio_1.position.y = -1.1;
	mesaMesaEscritorio_1.position.z = 0.7;
	scene.add(mesaMesaEscritorio_1);

	const geometryEscritorio1 = new THREE.BoxGeometry(0.6, 0.4, 0.68);
	const materialEscritorio1 = new THREE.MeshLambertMaterial({ color: 0x774D11 });

	const escritorio1_1 = new THREE.Mesh(geometryEscritorio1, materialEscritorio1);
	escritorio1_1.position.x = 1.45;
	escritorio1_1.position.y = -1.1;
	escritorio1_1.position.z = 0.35;
	scene.add(escritorio1_1);

	const geometryCaja_1 = new THREE.BoxGeometry(0.6, 0.03, 0.12);
	const materialCaja_1 = new THREE.MeshLambertMaterial({ color: 0xB47111 });

	const caja1_1 = new THREE.Mesh(geometryCaja_1, materialCaja_1);
	caja1_1.position.x = 1.45;
	caja1_1.position.y = -1.31;
	caja1_1.position.z = 0.58;
	scene.add(caja1_1);

	const caja2_1 = new THREE.Mesh(geometryCaja_1, materialCaja_1);
	caja2_1.position.x = 1.45;
	caja2_1.position.y = -1.31;
	caja2_1.position.z = 0.4;
	scene.add(caja2_1);

	const caja3_1 = new THREE.Mesh(geometryCaja_1, materialCaja_1);
	caja3_1.position.x = 1.45;
	caja3_1.position.y = -1.31;
	caja3_1.position.z = 0.20;
	scene.add(caja3_1);

	// escritorio pequeño ------------------------------------------
	const geometryMesaEscritorio_2 = new THREE.BoxGeometry(0.7, 0.5, 0.05);
	const materialMesaEscritorio_2 = new THREE.MeshLambertMaterial({ color: 0x774D11 });

	const mesaMesaEscritorio_2 = new THREE.Mesh(geometryMesaEscritorio_2, materialMesaEscritorio_2);
	mesaMesaEscritorio_2.position.x = -1.55 + 1.45;
	mesaMesaEscritorio_2.position.y = -1.1;
	mesaMesaEscritorio_2.position.z = 0.7;
	scene.add(mesaMesaEscritorio_2);

	const escritorio1_2 = new THREE.Mesh(geometryEscritorio1, materialEscritorio1);
	escritorio1_2.position.x = -1.55 + 1.45;
	escritorio1_2.position.y = -1.1;
	escritorio1_2.position.z = 0.35;
	scene.add(escritorio1_2);

	const geometryCaja_2 = new THREE.BoxGeometry(0.6, 0.03, 0.12);
	const materialCaja_2 = new THREE.MeshLambertMaterial({ color: 0xB47111 });

	const caja1_2 = new THREE.Mesh(geometryCaja_2, materialCaja_2);
	caja1_2.position.x = -1.55 + 1.45;
	caja1_2.position.y = -1.31;
	caja1_2.position.z = 0.58;
	scene.add(caja1_2);

	const caja2_2 = new THREE.Mesh(geometryCaja_2, materialCaja_2);
	caja2_2.position.x = -1.55 + 1.45;
	caja2_2.position.y = -1.31;
	caja2_2.position.z = 0.4;
	scene.add(caja2_2);

	const caja3_2 = new THREE.Mesh(geometryCaja_2, materialCaja_2);
	caja3_2.position.x = -1.55 + 1.45;
	caja3_2.position.y = -1.31;
	caja3_2.position.z = 0.20;
	scene.add(caja3_2);

	// impresora_1 ---------------------------------------------------------------

	const geometryImpresora_1 = new THREE.BoxGeometry(0.3, 0.4, 0.14);
	const materialImpresora_1 = new THREE.MeshLambertMaterial({ color: 0x767676 });

	const impresora_1 = new THREE.Mesh(geometryImpresora_1, materialImpresora_1);
	impresora_1.position.x = -1.5;
	impresora_1.position.y = 0.2;
	impresora_1.position.z = 0.8;
	scene.add(impresora_1);

	// bandeja 

	const geometryImpresoraBandeja_1 = new THREE.BoxGeometry(0.13, 0.15, 0.01);

	const bandeja_1 = new THREE.Mesh(geometryImpresoraBandeja_1, materialImpresora_1);
	bandeja_1.position.x = -1.7;
	bandeja_1.position.y = 0.2;
	bandeja_1.position.z = 0.74;
	scene.add(bandeja_1);

	// entrada

	const geometryImpresoraEntrada_1 = new THREE.BoxGeometry(0.02, 0.25, 0.2);

	const entrada_1 = new THREE.Mesh(geometryImpresoraEntrada_1, materialImpresora_1);
	entrada_1.position.x = -1.33;
	entrada_1.position.y = 0.2;
	entrada_1.position.z = 0.85;
	scene.add(entrada_1);

	// impresora_2 -----------------------------------------------------------

	const geometryImpresora_2 = new THREE.BoxGeometry(0.4, 0.3, 0.14);
	const materialImpresora_2 = new THREE.MeshLambertMaterial({ color: 0x767676 });

	const impresora_2 = new THREE.Mesh(geometryImpresora_2, materialImpresora_2);
	impresora_2.position.x = 0;
	impresora_2.position.y = -1.1;
	impresora_2.position.z = 0.8;
	scene.add(impresora_2);

	// bandeja 

	const geometryImpresoraBandeja_2 = new THREE.BoxGeometry(0.15, 0.13, 0.01);

	const bandeja_2 = new THREE.Mesh(geometryImpresoraBandeja_2, materialImpresora_2);
	bandeja_2.position.x = 0;
	bandeja_2.position.y = -1.3;
	bandeja_2.position.z = 0.74;
	scene.add(bandeja_2);

	// entrada

	const geometryImpresoraEntrada_2 = new THREE.BoxGeometry(0.25, 0.02, 0.2);

	const entrada_2 = new THREE.Mesh(geometryImpresoraEntrada_2, materialImpresora_2);
	entrada_2.position.x = 0;
	entrada_2.position.y = -0.94;
	entrada_2.position.z = 0.85;
	scene.add(entrada_2);

	// estante

	const geometryEstante1 = new THREE.BoxGeometry(3, 0.5, 2);
	const materialEstante1 = new THREE.MeshLambertMaterial({ color: 0x5E5E5E });
	const estante1 = new THREE.Mesh(geometryEstante1, materialEstante1);
	estante1.position.x = 0;
	estante1.position.y = 2.25;
	estante1.position.z = 1;
	scene.add(estante1);

	//caja estante_1

	const geometryEstanteCaja_1 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_1 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_1 = new THREE.Mesh(geometryEstanteCaja_1, materialEstanteCaja_1);
	estanteCaja_1.position.x = -1.2;
	estanteCaja_1.position.y = 2;
	estanteCaja_1.position.z = 1.8;
	scene.add(estanteCaja_1);

	//seguro_caja_1

	const geometryEstanteSeguro_1 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_1 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_1 = new THREE.Mesh(geometryEstanteSeguro_1, materialEstanteSeguro_1);
	estanteSeguro_1.position.x = -1.2;
	estanteSeguro_1.position.y = 1.98;
	estanteSeguro_1.position.z = 1.85;
	scene.add(estanteSeguro_1);

	//caja estante_2

	const geometryEstanteCaja_2 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_2 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_2 = new THREE.Mesh(geometryEstanteCaja_2, materialEstanteCaja_2);
	estanteCaja_2.position.x = 0.6 + -1.2;
	estanteCaja_2.position.y = 2;
	estanteCaja_2.position.z = 1.8;
	scene.add(estanteCaja_2);

	//seguro_caja_2

	const geometryEstanteSeguro_2 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_2 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_2 = new THREE.Mesh(geometryEstanteSeguro_2, materialEstanteSeguro_2);
	estanteSeguro_2.position.x = 0.6 + -1.2;
	estanteSeguro_2.position.y = 1.98;
	estanteSeguro_2.position.z = 1.85;
	scene.add(estanteSeguro_2);

	//caja estante_3

	const geometryEstanteCaja_3 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_3 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_3 = new THREE.Mesh(geometryEstanteCaja_3, materialEstanteCaja_3);
	estanteCaja_3.position.x = 1.2 + -1.2;
	estanteCaja_3.position.y = 2;
	estanteCaja_3.position.z = 1.8;
	scene.add(estanteCaja_3);

	//seguro_caja_3

	const geometryEstanteSeguro_3 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_3 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_3 = new THREE.Mesh(geometryEstanteSeguro_3, materialEstanteSeguro_3);
	estanteSeguro_3.position.x = 1.2 + -1.2;
	estanteSeguro_3.position.y = 1.98;
	estanteSeguro_3.position.z = 1.85;
	scene.add(estanteSeguro_3);

	//caja estante_4

	const geometryEstanteCaja_4 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_4 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_4 = new THREE.Mesh(geometryEstanteCaja_4, materialEstanteCaja_4);
	estanteCaja_4.position.x = 1.8 + -1.2;
	estanteCaja_4.position.y = 2;
	estanteCaja_4.position.z = 1.8;
	scene.add(estanteCaja_4);

	//seguro_caja_4

	const geometryEstanteSeguro_4 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_4 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_4 = new THREE.Mesh(geometryEstanteSeguro_4, materialEstanteSeguro_4);
	estanteSeguro_4.position.x = 1.8 + -1.2;
	estanteSeguro_4.position.y = 1.98;
	estanteSeguro_4.position.z = 1.85;
	scene.add(estanteSeguro_4);

	//caja estante_5

	const geometryEstanteCaja_5 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_5 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_5 = new THREE.Mesh(geometryEstanteCaja_5, materialEstanteCaja_5);
	estanteCaja_5.position.x = 2.4 + -1.2;
	estanteCaja_5.position.y = 2;
	estanteCaja_5.position.z = 1.8;
	scene.add(estanteCaja_5);

	//seguro_caja_5

	const geometryEstanteSeguro_5 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_5 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_5 = new THREE.Mesh(geometryEstanteSeguro_5, materialEstanteSeguro_5);
	estanteSeguro_5.position.x = 2.4 + -1.2;
	estanteSeguro_5.position.y = 1.98;
	estanteSeguro_5.position.z = 1.85;
	scene.add(estanteSeguro_5);

	//caja estante_6

	const geometryEstanteCaja_6 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_6 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_6 = new THREE.Mesh(geometryEstanteCaja_6, materialEstanteCaja_6);
	estanteCaja_6.position.x = -1.2;
	estanteCaja_6.position.y = 2;
	estanteCaja_6.position.z = -0.4 + 1.8;
	scene.add(estanteCaja_6);

	//seguro_caja_6

	const geometryEstanteSeguro_6 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_6 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_6 = new THREE.Mesh(geometryEstanteSeguro_6, materialEstanteSeguro_6);
	estanteSeguro_6.position.x = -1.2;
	estanteSeguro_6.position.y = 1.98;
	estanteSeguro_6.position.z = -0.4 + 1.85;
	scene.add(estanteSeguro_6);

	//caja estante_7

	const geometryEstanteCaja_7 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_7 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_7 = new THREE.Mesh(geometryEstanteCaja_7, materialEstanteCaja_7);
	estanteCaja_7.position.x = 0.6 + -1.2;
	estanteCaja_7.position.y = 2;
	estanteCaja_7.position.z = -0.4 + 1.8;
	scene.add(estanteCaja_7);

	//seguro_caja_7

	const geometryEstanteSeguro_7 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_7 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_7 = new THREE.Mesh(geometryEstanteSeguro_7, materialEstanteSeguro_7);
	estanteSeguro_7.position.x = 0.6 + -1.2;
	estanteSeguro_7.position.y = 1.98;
	estanteSeguro_7.position.z = -0.4 + 1.85;
	scene.add(estanteSeguro_7);

	//caja estante_8

	const geometryEstanteCaja_8 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_8 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_8 = new THREE.Mesh(geometryEstanteCaja_8, materialEstanteCaja_8);
	estanteCaja_8.position.x = 1.2 + -1.2;
	estanteCaja_8.position.y = 2;
	estanteCaja_8.position.z = -0.4 + 1.8;
	scene.add(estanteCaja_8);

	//seguro_caja_8

	const geometryEstanteSeguro_8 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_8 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_8 = new THREE.Mesh(geometryEstanteSeguro_8, materialEstanteSeguro_8);
	estanteSeguro_8.position.x = 1.2 + -1.2;
	estanteSeguro_8.position.y = 1.98;
	estanteSeguro_8.position.z = -0.4 + 1.85;
	scene.add(estanteSeguro_8);

	//caja estante_9

	const geometryEstanteCaja_9 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_9 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_9 = new THREE.Mesh(geometryEstanteCaja_9, materialEstanteCaja_9);
	estanteCaja_9.position.x = 1.8 + -1.2;
	estanteCaja_9.position.y = 2;
	estanteCaja_9.position.z = -0.4 + 1.8;
	scene.add(estanteCaja_9);

	//seguro_caja_9

	const geometryEstanteSeguro_9 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_9 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_9 = new THREE.Mesh(geometryEstanteSeguro_9, materialEstanteSeguro_9);
	estanteSeguro_9.position.x = 1.8 + -1.2;
	estanteSeguro_9.position.y = 1.98;
	estanteSeguro_9.position.z = -0.4 + 1.85;
	scene.add(estanteSeguro_9);

	//caja estante_10

	const geometryEstanteCaja_10 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_10 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_10 = new THREE.Mesh(geometryEstanteCaja_10, materialEstanteCaja_10);
	estanteCaja_10.position.x = 2.4 + -1.2;
	estanteCaja_10.position.y = 2;
	estanteCaja_10.position.z = -0.4 + 1.8;
	scene.add(estanteCaja_10);

	//seguro_caja_10

	const geometryEstanteSeguro_10 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_10 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_10 = new THREE.Mesh(geometryEstanteSeguro_10, materialEstanteSeguro_10);
	estanteSeguro_10.position.x = 2.4 + -1.2;
	estanteSeguro_10.position.y = 1.98;
	estanteSeguro_10.position.z = -0.4 + 1.85;
	scene.add(estanteSeguro_10);

	//caja estante_11

	const geometryEstanteCaja_11 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_11 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_11 = new THREE.Mesh(geometryEstanteCaja_11, materialEstanteCaja_11);
	estanteCaja_11.position.x = -1.2;
	estanteCaja_11.position.y = 2;
	estanteCaja_11.position.z = -0.8 + 1.8;
	scene.add(estanteCaja_11);

	//seguro_caja_11

	const geometryEstanteSeguro_11 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_11 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_11 = new THREE.Mesh(geometryEstanteSeguro_11, materialEstanteSeguro_11);
	estanteSeguro_11.position.x = -1.2;
	estanteSeguro_11.position.y = 1.98;
	estanteSeguro_11.position.z = -0.8 + 1.85;
	scene.add(estanteSeguro_11);

	//caja estante_12

	const geometryEstanteCaja_12 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_12 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_12 = new THREE.Mesh(geometryEstanteCaja_12, materialEstanteCaja_12);
	estanteCaja_12.position.x = 0.6 + -1.2;
	estanteCaja_12.position.y = 2;
	estanteCaja_12.position.z = -0.8 + 1.8;
	scene.add(estanteCaja_12);

	//seguro_caja_12

	const geometryEstanteSeguro_12 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_12 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_12 = new THREE.Mesh(geometryEstanteSeguro_12, materialEstanteSeguro_12);
	estanteSeguro_12.position.x = 0.6 + -1.2;
	estanteSeguro_12.position.y = 1.98;
	estanteSeguro_12.position.z = -0.8 + 1.85;
	scene.add(estanteSeguro_12);

	//caja estante_13

	const geometryEstanteCaja_13 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_13 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_13 = new THREE.Mesh(geometryEstanteCaja_13, materialEstanteCaja_13);
	estanteCaja_13.position.x = 1.2 + -1.2;
	estanteCaja_13.position.y = 2;
	estanteCaja_13.position.z = -0.8 + 1.8;
	scene.add(estanteCaja_13);

	//seguro_caja_13

	const geometryEstanteSeguro_13 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_13 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_13 = new THREE.Mesh(geometryEstanteSeguro_13, materialEstanteSeguro_13);
	estanteSeguro_13.position.x = 1.2 + -1.2;
	estanteSeguro_13.position.y = 1.98;
	estanteSeguro_13.position.z = -0.8 + 1.85;
	scene.add(estanteSeguro_13);

	//caja estante_14

	const geometryEstanteCaja_14 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_14 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_14 = new THREE.Mesh(geometryEstanteCaja_14, materialEstanteCaja_14);
	estanteCaja_14.position.x = 1.8 + -1.2;
	estanteCaja_14.position.y = 2;
	estanteCaja_14.position.z = -0.8 + 1.8;
	scene.add(estanteCaja_14);

	//seguro_caja_14

	const geometryEstanteSeguro_14 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_14 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_14 = new THREE.Mesh(geometryEstanteSeguro_14, materialEstanteSeguro_14);
	estanteSeguro_14.position.x = 1.8 + -1.2;
	estanteSeguro_14.position.y = 1.98;
	estanteSeguro_14.position.z = -0.8 + 1.85;
	scene.add(estanteSeguro_14);

	//caja estante_15

	const geometryEstanteCaja_15 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_15 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_15 = new THREE.Mesh(geometryEstanteCaja_15, materialEstanteCaja_15);
	estanteCaja_15.position.x = 2.4 + -1.2;
	estanteCaja_15.position.y = 2;
	estanteCaja_15.position.z = -0.8 + 1.8;
	scene.add(estanteCaja_15);

	//seguro_caja_15

	const geometryEstanteSeguro_15 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_15 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_15 = new THREE.Mesh(geometryEstanteSeguro_15, materialEstanteSeguro_15);
	estanteSeguro_15.position.x = 2.4 + -1.2;
	estanteSeguro_15.position.y = 1.98;
	estanteSeguro_15.position.z = -0.8 + 1.85;
	scene.add(estanteSeguro_15);

	//caja estante_16

	const geometryEstanteCaja_16 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_16 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_16 = new THREE.Mesh(geometryEstanteCaja_16, materialEstanteCaja_16);
	estanteCaja_16.position.x = -1.2;
	estanteCaja_16.position.y = 2;
	estanteCaja_16.position.z = -1.2 + 1.8;
	scene.add(estanteCaja_16);

	//seguro_caja_16

	const geometryEstanteSeguro_16 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_16 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_16 = new THREE.Mesh(geometryEstanteSeguro_16, materialEstanteSeguro_16);
	estanteSeguro_16.position.x = -1.2;
	estanteSeguro_16.position.y = 1.98;
	estanteSeguro_16.position.z = -1.2 + 1.85;
	scene.add(estanteSeguro_16);

	//caja estante_17

	const geometryEstanteCaja_17 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_17 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_17 = new THREE.Mesh(geometryEstanteCaja_17, materialEstanteCaja_17);
	estanteCaja_17.position.x = 0.6 + -1.2;
	estanteCaja_17.position.y = 2;
	estanteCaja_17.position.z = -1.2 + 1.8;
	scene.add(estanteCaja_17);

	//seguro_caja_17

	const geometryEstanteSeguro_17 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_17 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_17 = new THREE.Mesh(geometryEstanteSeguro_17, materialEstanteSeguro_17);
	estanteSeguro_17.position.x = 0.6 + -1.2;
	estanteSeguro_17.position.y = 1.98;
	estanteSeguro_17.position.z = -1.2 + 1.85;
	scene.add(estanteSeguro_17);

	//caja estante_18

	const geometryEstanteCaja_18 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_18 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_18 = new THREE.Mesh(geometryEstanteCaja_18, materialEstanteCaja_18);
	estanteCaja_18.position.x = 1.2 + -1.2;
	estanteCaja_18.position.y = 2;
	estanteCaja_18.position.z = -1.2 + 1.8;
	scene.add(estanteCaja_18);

	//seguro_caja_18

	const geometryEstanteSeguro_18 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_18 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_18 = new THREE.Mesh(geometryEstanteSeguro_18, materialEstanteSeguro_18);
	estanteSeguro_18.position.x = 1.2 + -1.2;
	estanteSeguro_18.position.y = 1.98;
	estanteSeguro_18.position.z = -1.2 + 1.85;
	scene.add(estanteSeguro_18);

	//caja estante_19

	const geometryEstanteCaja_19 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_19 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_19 = new THREE.Mesh(geometryEstanteCaja_19, materialEstanteCaja_19);
	estanteCaja_19.position.x = 1.8 + -1.2;
	estanteCaja_19.position.y = 2;
	estanteCaja_19.position.z = -1.2 + 1.8;
	scene.add(estanteCaja_19);

	//seguro_caja_19

	const geometryEstanteSeguro_19 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_19 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_19 = new THREE.Mesh(geometryEstanteSeguro_19, materialEstanteSeguro_19);
	estanteSeguro_19.position.x = 1.8 + -1.2;
	estanteSeguro_19.position.y = 1.98;
	estanteSeguro_19.position.z = -1.2 + 1.85;
	scene.add(estanteSeguro_19);

	//caja estante_20

	const geometryEstanteCaja_20 = new THREE.BoxGeometry(0.5, 0.02, 0.3);
	const materialEstanteCaja_20 = new THREE.MeshLambertMaterial({ color: 0xA3A3A3 });
	const estanteCaja_20 = new THREE.Mesh(geometryEstanteCaja_20, materialEstanteCaja_20);
	estanteCaja_20.position.x = 2.4 + -1.2;
	estanteCaja_20.position.y = 2;
	estanteCaja_20.position.z = -1.2 + 1.8;
	scene.add(estanteCaja_20);

	//seguro_caja_20

	const geometryEstanteSeguro_20 = new THREE.BoxGeometry(0.05, 0.04, 0.04);
	const materialEstanteSeguro_20 = new THREE.MeshLambertMaterial({ color: 0xCECDCD });
	const estanteSeguro_20 = new THREE.Mesh(geometryEstanteSeguro_20, materialEstanteSeguro_20);
	estanteSeguro_20.position.x = 2.4 + -1.2;
	estanteSeguro_20.position.y = 1.98;
	estanteSeguro_20.position.z = -1.2 + 1.85;
	scene.add(estanteSeguro_20);

	// pared 1 --------------------------------------------------------------
	var paredGeo_1 = new THREE.Geometry();
	paredGeo_1.vertices.push(new THREE.Vector3(-2.6, 2.5, 0));
	paredGeo_1.vertices.push(new THREE.Vector3(-2.6, 2.5, 2.4));
	paredGeo_1.vertices.push(new THREE.Vector3(2.6, 2.5, 2.4));
	paredGeo_1.vertices.push(new THREE.Vector3(2.6, 2.5, 0));
	paredGeo_1.faces.push(new THREE.Face3(2, 1, 0));
	paredGeo_1.faces.push(new THREE.Face3(0, 3, 2));
	var materialM = new THREE.MeshBasicMaterial({ color: 0xA09D81 });
	var pared_1 = new THREE.Mesh(paredGeo_1, materialM); // Crea el objeto
	scene.add(pared_1);
	// pared 2 --------------------------------------------------------------
	var paredGeo_2 = new THREE.Geometry();
	paredGeo_2.vertices.push(new THREE.Vector3(-2.6, 2.5, 0));
	paredGeo_2.vertices.push(new THREE.Vector3(-2.6, 2.5, 2.4));
	paredGeo_2.vertices.push(new THREE.Vector3(-2.6, -2.5, 2.4));
	paredGeo_2.vertices.push(new THREE.Vector3(-2.6, -2.5, 0));
	paredGeo_2.faces.push(new THREE.Face3(0, 1, 2));
	paredGeo_2.faces.push(new THREE.Face3(2, 3, 0));
	var materialM2 = new THREE.MeshBasicMaterial({ color: 0xB1AE8F });
	var pared_2 = new THREE.Mesh(paredGeo_2, materialM2); // Crea el objeto
	scene.add(pared_2);
	// pared 3 --------------------------------------------------------------
	var paredGeo_3 = new THREE.Geometry();
	paredGeo_3.vertices.push(new THREE.Vector3(2.6, 2.5, 0));
	paredGeo_3.vertices.push(new THREE.Vector3(2.6, 2.5, 2.4));
	paredGeo_3.vertices.push(new THREE.Vector3(2.6, -2.5, 2.4));
	paredGeo_3.vertices.push(new THREE.Vector3(2.6, -2.5, 0));
	paredGeo_3.faces.push(new THREE.Face3(2, 1, 0));
	paredGeo_3.faces.push(new THREE.Face3(0, 3, 2));
	var pared_3 = new THREE.Mesh(paredGeo_3, materialM2); // Crea el objeto
	scene.add(pared_3);
	// pared 4 --------------------------------------------------------------
	var paredGeo_4 = new THREE.Geometry();
	paredGeo_4.vertices.push(new THREE.Vector3(-2.6, -2.5, 0));
	paredGeo_4.vertices.push(new THREE.Vector3(-2.6, -2.5, 2.4));
	paredGeo_4.vertices.push(new THREE.Vector3(2.6, -2.5, 2.4));
	paredGeo_4.vertices.push(new THREE.Vector3(2.6, -2.5, 0));
	paredGeo_4.faces.push(new THREE.Face3(0, 1, 2));
	paredGeo_4.faces.push(new THREE.Face3(2, 3, 0));
	var pared_4 = new THREE.Mesh(paredGeo_4, materialM); // Crea el objeto
	scene.add(pared_4);
	//puerta
	var puertaGeo = new THREE.Geometry();
	puertaGeo.vertices.push(new THREE.Vector3(2.58, -0.4, 0));
	puertaGeo.vertices.push(new THREE.Vector3(2.58, -0.4, 1.9));
	puertaGeo.vertices.push(new THREE.Vector3(2.58, 0.5, 1.9));
	puertaGeo.vertices.push(new THREE.Vector3(2.58, 0.5, 0));
	puertaGeo.faces.push(new THREE.Face3(0, 1, 2));
	puertaGeo.faces.push(new THREE.Face3(2, 3, 0));
	const materialpuerta = new THREE.MeshBasicMaterial({ color: 0x503A1C });
	var puerta = new THREE.Mesh(puertaGeo, materialpuerta); // Crea el objeto
	scene.add(puerta);

	const geometryPu = new THREE.BoxGeometry(0.04, 0.04, 0.04);
	const materialPu = new THREE.MeshLambertMaterial({ color: 0xF7FF00 });

	const cerradura = new THREE.Mesh(geometryPu, materialPu);
	cerradura.position.x = 2.59;
	cerradura.position.y = -0.3;
	cerradura.position.z = 1;
	scene.add(cerradura);

	// techo -----------------------------------------------
	var techoGeo = new THREE.Geometry();
	techoGeo.vertices.push(new THREE.Vector3(-2.6, 2.5, 2.4));
	techoGeo.vertices.push(new THREE.Vector3(2.6, 2.5, 2.4));
	techoGeo.vertices.push(new THREE.Vector3(-2.6, -2.5, 2.4));
	techoGeo.vertices.push(new THREE.Vector3(2.6, -2.5, 2.4));
	techoGeo.faces.push(new THREE.Face3(0, 1, 2));
	techoGeo.faces.push(new THREE.Face3(1, 3, 2));
	const material1 = new THREE.MeshBasicMaterial({ color: 0x9D9C91 });
	var techo = new THREE.Mesh(techoGeo, material1); // Crea el objeto
	scene.add(techo);


	//suelo -----------------------------------------------------------
	Geometria_plano = new THREE.PlaneGeometry(5.2, 5, 1, 1);

	const material0 = new THREE.MeshLambertMaterial({ color: 0x2E2C28 });
	const suelo = new THREE.Mesh(Geometria_plano, material0);
	suelo.position.x = 0;
	suelo.position.y = 0;
	suelo.position.z = 0;

	scene.add(suelo);
	/*
	const loader0 = new THREE.TextureLoader()
	loader0.load('texturas/suelo.jpg', (texture) => {
		material0.map = texture
	//	animate()
	})
*/

	/*	const geometry = new THREE.BoxGeometry(1, 2, 1);
	
		const material = new THREE.MeshBasicMaterial();
		const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);
		const loader = new THREE.TextureLoader()
		loader.load('./cesped.jpg', (texture) => {
			material.map = texture
			//  animate()
		})
	
	
		
		const geometry2 = new THREE.BoxGeometry(1, 1, 2);
	
		const material2 = new THREE.MeshBasicMaterial();
		const cube2 = new THREE.Mesh(geometry2, material2);
		scene.add(cube2);
		const loader2 = new THREE.TextureLoader()
		loader2.load('./mokeywit-logo.png', (texture) => {
			material2.map = texture
			animate()
		})
		*/
	// LIGHTS



	/*const loader = new THREE.TextureLoader()
		loader.load('./mokeywit-logo.png', (texture)=>{
			material.map = texture
		//	renderer.render(scene, camera)
		})*/

}

function animate() {
	window.requestAnimationFrame(animate);
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render(scene, camera);
}


init();
animate();

