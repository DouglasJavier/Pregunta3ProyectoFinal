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
	mesa1.position.y = 2;
	mesa1.position.z = 0.7;
	scene.add(mesa1);
	//patas 1
	const geometryPata1 = new THREE.BoxGeometry(0.04, 0.04, 0.67);
	const materialPata1 = new THREE.MeshLambertMaterial({ color: 0x111111 });

	const pata1 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1.position.x = -0.7 + -1.80;
	pata1.position.y = 2.2;
	pata1.position.z = 0.35;
	scene.add(pata1);

	const pata2 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2.position.x = -0.7 + -1.2;
	pata2.position.y = 2.2;
	pata2.position.z = 0.35;
	scene.add(pata2);

	const pata3 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3.position.x = -0.7 + -1.20;
	pata3.position.y = 1.8;
	pata3.position.z = 0.35;
	scene.add(pata3);

	const pata4 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4.position.x = -0.7 + -1.80;
	pata4.position.y = 1.8;
	pata4.position.z = 0.35;
	scene.add(pata4);

	const geometryPata2 = new THREE.BoxGeometry(0.02, 0.02, 0.67);
	const materialPata2 = new THREE.MeshLambertMaterial({ color: 0x111111 });

	const pata5 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5.position.x = -0.7 + -1.43;
	pata5.position.y = 2.1;
	pata5.position.z = 0.35;
	scene.add(pata5);

	const pata6 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6.position.x = -0.7 + -1.43;
	pata6.position.y = 1.9;
	pata6.position.z = 0.35;
	scene.add(pata6);
	// repisa
	const geometryRepisa = new THREE.BoxGeometry(0.25, 0.45, 0.02);

	const repisa = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa.position.x = -0.7 + -1.325;
	repisa.position.y = 2;
	repisa.position.z = 0.1;
	scene.add(repisa);
	// pc
	const geometryPC = new THREE.BoxGeometry(0.20, 0.42, 0.42);
	const materialPC = new THREE.MeshLambertMaterial({ color: 0x575757 });
	const PC = new THREE.Mesh(geometryPC, materialPC);
	PC.position.x = -0.7 + -1.325;
	PC.position.y = 2;
	PC.position.z = 0.3;
	scene.add(PC);
	//monitor
	const geometryMon = new THREE.BoxGeometry(0.45, 0.02, 0.28);
	const materialMon = new THREE.MeshLambertMaterial({ color: 0x575757 });
	const monitor = new THREE.Mesh(geometryMon, materialMon);
	monitor.position.x = -0.7 + -1.5;
	monitor.position.y = 2;
	monitor.position.z = 0.95;
	scene.add(monitor);

	const geometryBase1 = new THREE.BoxGeometry(0.04, 0.02, 0.25);
	const materialBase1 = new THREE.MeshLambertMaterial({ color: 0xAAAAAA });
	const Base1 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1.position.x = -0.7 + -1.5;
	Base1.position.y = 2.02;
	Base1.position.z = 0.825;
	scene.add(Base1);

	const geometryBase2 = new THREE.BoxGeometry(0.17, 0.12, 0.01);
	const materialBase2 = new THREE.MeshLambertMaterial({ color: 0x575757 });
	const Base2 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2.position.x = -0.7 + -1.5;
	Base2.position.y = 2.02;
	Base2.position.z = 0.72;
	scene.add(Base2);

	const geometryPantalla = new THREE.BoxGeometry(0.41, 0, 0.24);
	const materialPantalla = new THREE.MeshBasicMaterial({ color: 0x000000 });
	const pantalla = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla.position.x = -0.7 + -1.5;
	pantalla.position.y = 1.989;
	pantalla.position.z = 0.95;
	scene.add(pantalla);

	// teclado
	const geometryTecla = new THREE.BoxGeometry(0.44, 0.15, 0.03);
	const materialTecla = new THREE.MeshLambertMaterial({ color: 0x575757 });
	const teclado = new THREE.Mesh(geometryTecla, materialTecla);
	teclado.position.x = -0.7 + -1.55;
	teclado.position.y = 1.88;
	teclado.position.z = 0.73;
	scene.add(teclado);
	//mouse
	const geometryMouse = new THREE.BoxGeometry(0.05, 0.08, 0.035);
	const materialMouse = new THREE.MeshLambertMaterial({ color: 0x3B3B3B });
	const mouse = new THREE.Mesh(geometryMouse, materialMouse);
	mouse.position.x = -0.7 + -1.27;
	mouse.position.y = 1.88;
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
	silla1.position.y = 1.3;
	silla1.position.z = 0.45;
	scene.add(silla1);
	// patas silla
	const geometryPata1S = new THREE.BoxGeometry(0.03, 0.03, 0.44);
	const materialPata1S = new THREE.MeshLambertMaterial({ color: 0x999999 });

	const pata1S = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S.position.x = -0.7 + -1.7;
	pata1S.position.y = 1.6;
	pata1S.position.z = 0.225;
	scene.add(pata1S);

	const pata2S = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S.position.x = -0.7 + -1.4;
	pata2S.position.y = 1.6;
	pata2S.position.z = 0.225;
	scene.add(pata2S);
	const geometryPata2S = new THREE.BoxGeometry(0.03, 0.03, 0.9);

	const pata3S = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S.position.x = -0.7 + -1.4;
	pata3S.position.y = 1.26;
	pata3S.position.z = 0.45;
	scene.add(pata3S);

	const pata4S = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S.position.x = -0.7 + -1.7;
	pata4S.position.y = 1.26;
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
	silla2.position.y = 1.26;
	silla2.position.z = 0.7;
	scene.add(silla2);

	//mesa2-------------------------------------------------------

	const mesa_2 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_2.position.x = -0.7 + -1.5 + 0.71;
	mesa_2.position.y = 2;
	mesa_2.position.z = 0.7;
	scene.add(mesa_2);
	//patas 1

	const pata1_2 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_2.position.x = -0.7 + -1.80 + 0.71;
	pata1_2.position.y = 2.2;
	pata1_2.position.z = 0.35;
	scene.add(pata1_2);

	const pata2_2 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_2.position.x = -0.7 + -1.2 + 0.71;
	pata2_2.position.y = 2.2;
	pata2_2.position.z = 0.35;
	scene.add(pata2_2);

	const pata3_2 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_2.position.x = -0.7 + -1.20 + 0.71;
	pata3_2.position.y = 1.8;
	pata3_2.position.z = 0.35;
	scene.add(pata3_2);

	const pata4_2 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_2.position.x = -0.7 + -1.80 + 0.71;
	pata4_2.position.y = 1.8;
	pata4_2.position.z = 0.35;
	scene.add(pata4_2);

	const pata5_2 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_2.position.x = -0.7 + -1.43 + 0.71;
	pata5_2.position.y = 2.1;
	pata5_2.position.z = 0.35;
	scene.add(pata5_2);

	const pata6_2 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_2.position.x = -0.7 + -1.43 + 0.71;
	pata6_2.position.y = 1.9;
	pata6_2.position.z = 0.35;
	scene.add(pata6_2);
	// repisa

	const repisa_2 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_2.position.x = -0.7 + -1.325 + 0.71;
	repisa_2.position.y = 2;
	repisa_2.position.z = 0.1;
	scene.add(repisa_2);
	// pc

	const PC_2 = new THREE.Mesh(geometryPC, materialPC);
	PC_2.position.x = -0.7 + -1.325 + 0.71;
	PC_2.position.y = 2;
	PC_2.position.z = 0.3;
	scene.add(PC_2);
	//monitor
	const monitor_2 = new THREE.Mesh(geometryMon, materialMon);
	monitor_2.position.x = -0.7 + -1.5 + 0.71;
	monitor_2.position.y = 2;
	monitor_2.position.z = 0.95;
	scene.add(monitor_2);

	const Base1_2 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_2.position.x = -0.7 + -1.5 + 0.71;
	Base1_2.position.y = 2.02;
	Base1_2.position.z = 0.825;
	scene.add(Base1_2);

	const Base2_2 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_2.position.x = -0.7 + -1.5 + 0.71;
	Base2_2.position.y = 2.02;
	Base2_2.position.z = 0.72;
	scene.add(Base2_2);

	const pantalla_2 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_2.position.x = -0.7 + -1.5 + 0.71;
	pantalla_2.position.y = 1.989;
	pantalla_2.position.z = 0.95;
	scene.add(pantalla_2);

	// teclado
	const teclado_2 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_2.position.x = -0.7 + -1.55 + 0.71;
	teclado_2.position.y = 1.88;
	teclado_2.position.z = 0.73;
	scene.add(teclado_2);
	//mouse

	const mouse_2 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_2.position.x = -0.7 + -1.27 + 0.71;
	mouse_2.position.y = 1.88;
	mouse_2.position.z = 0.73;
	scene.add(mouse_2);
	//silla


	const silla1_2 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_2.position.x = -0.7 + -1.7 + 0.71;
	silla1_2.position.y = 1.3;
	silla1_2.position.z = 0.45;
	scene.add(silla1_2);
	// patas silla

	const pata1S_2 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_2.position.x = -0.7 + -1.7 + 0.71;
	pata1S_2.position.y = 1.6;
	pata1S_2.position.z = 0.225;
	scene.add(pata1S_2);

	const pata2S_2 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_2.position.x = -0.7 + -1.4 + 0.71;
	pata2S_2.position.y = 1.6;
	pata2S_2.position.z = 0.225;
	scene.add(pata2S_2);

	const pata3S_2 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_2.position.x = -0.7 + -1.4 + 0.71;
	pata3S_2.position.y = 1.26;
	pata3S_2.position.z = 0.45;
	scene.add(pata3S_2);

	const pata4S_2 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_2.position.x = -0.7 + -1.7 + 0.71;
	pata4S_2.position.y = 1.26;
	pata4S_2.position.z = 0.45;
	scene.add(pata4S_2);

	const silla2_2 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_2.position.x = -0.7 + -1.7 + 0.71;
	silla2_2.position.y = 1.26;
	silla2_2.position.z = 0.7;
	scene.add(silla2_2);

	//mesa3-------------------------------------------------------

	const mesa_3 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_3.position.x = -0.7 + -1.5 + 1.42;
	mesa_3.position.y = 2;
	mesa_3.position.z = 0.7;
	scene.add(mesa_3);
	//patas 1

	const pata1_3 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_3.position.x = -0.7 + -1.80 + 1.42;
	pata1_3.position.y = 2.2;
	pata1_3.position.z = 0.35;
	scene.add(pata1_3);

	const pata2_3 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_3.position.x = -0.7 + -1.2 + 1.42;
	pata2_3.position.y = 2.2;
	pata2_3.position.z = 0.35;
	scene.add(pata2_3);

	const pata3_3 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_3.position.x = -0.7 + -1.20 + 1.42;
	pata3_3.position.y = 1.8;
	pata3_3.position.z = 0.35;
	scene.add(pata3_3);

	const pata4_3 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_3.position.x = -0.7 + -1.80 + 1.42;
	pata4_3.position.y = 1.8;
	pata4_3.position.z = 0.35;
	scene.add(pata4_3);

	const pata5_3 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_3.position.x = -0.7 + -1.43 + 1.42;
	pata5_3.position.y = 2.1;
	pata5_3.position.z = 0.35;
	scene.add(pata5_3);

	const pata6_3 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_3.position.x = -0.7 + -1.43 + 1.42;
	pata6_3.position.y = 1.9;
	pata6_3.position.z = 0.35;
	scene.add(pata6_3);
	// repisa

	const repisa_3 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_3.position.x = -0.7 + -1.325 + 1.42;
	repisa_3.position.y = 2;
	repisa_3.position.z = 0.1;
	scene.add(repisa_3);
	// pc

	const PC_3 = new THREE.Mesh(geometryPC, materialPC);
	PC_3.position.x = -0.7 + -1.325 + 1.42;
	PC_3.position.y = 2;
	PC_3.position.z = 0.3;
	scene.add(PC_3);
	//monitor
	const monitor_3 = new THREE.Mesh(geometryMon, materialMon);
	monitor_3.position.x = -0.7 + -1.5 + 1.42;
	monitor_3.position.y = 2;
	monitor_3.position.z = 0.95;
	scene.add(monitor_3);

	const Base1_3 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_3.position.x = -0.7 + -1.5 + 1.42;
	Base1_3.position.y = 2.02;
	Base1_3.position.z = 0.825;
	scene.add(Base1_3);

	const Base2_3 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_3.position.x = -0.7 + -1.5 + 1.42;
	Base2_3.position.y = 2.02;
	Base2_3.position.z = 0.72;
	scene.add(Base2_3);

	const pantalla_3 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_3.position.x = -0.7 + -1.5 + 1.42;
	pantalla_3.position.y = 1.989;
	pantalla_3.position.z = 0.95;
	scene.add(pantalla_3);

	// teclado
	const teclado_3 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_3.position.x = -0.7 + -1.55 + 1.42;
	teclado_3.position.y = 1.88;
	teclado_3.position.z = 0.73;
	scene.add(teclado_3);
	//mouse

	const mouse_3 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_3.position.x = -0.7 + -1.27 + 1.42;
	mouse_3.position.y = 1.88;
	mouse_3.position.z = 0.73;
	scene.add(mouse_3);
	//silla


	const silla1_3 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_3.position.x = -0.7 + -1.7 + 1.42;
	silla1_3.position.y = 1.3;
	silla1_3.position.z = 0.45;
	scene.add(silla1_3);
	// patas silla

	const pata1S_3 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_3.position.x = -0.7 + -1.7 + 1.42;
	pata1S_3.position.y = 1.6;
	pata1S_3.position.z = 0.225;
	scene.add(pata1S_3);

	const pata2S_3 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_3.position.x = -0.7 + -1.4 + 1.42;
	pata2S_3.position.y = 1.6;
	pata2S_3.position.z = 0.225;
	scene.add(pata2S_3);

	const pata3S_3 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_3.position.x = -0.7 + -1.4 + 1.42;
	pata3S_3.position.y = 1.26;
	pata3S_3.position.z = 0.45;
	scene.add(pata3S_3);

	const pata4S_3 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_3.position.x = -0.7 + -1.7 + 1.42;
	pata4S_3.position.y = 1.26;
	pata4S_3.position.z = 0.45;
	scene.add(pata4S_3);

	const silla2_3 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_3.position.x = -0.7 + -1.7 + 1.42;
	silla2_3.position.y = 1.26;
	silla2_3.position.z = 0.7;
	scene.add(silla2_3);

	//mesa4-------------------------------------------------------

	const mesa_4 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_4.position.x = -0.7 + -1.5 + 2.92;
	mesa_4.position.y = 2;
	mesa_4.position.z = 0.7;
	scene.add(mesa_4);
	//patas 1

	const pata1_4 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_4.position.x = -0.7 + -1.80 + 2.92;
	pata1_4.position.y = 2.2;
	pata1_4.position.z = 0.35;
	scene.add(pata1_4);

	const pata2_4 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_4.position.x = -0.7 + -1.2 + 2.92;
	pata2_4.position.y = 2.2;
	pata2_4.position.z = 0.35;
	scene.add(pata2_4);

	const pata3_4 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_4.position.x = -0.7 + -1.20 + 2.92;
	pata3_4.position.y = 1.8;
	pata3_4.position.z = 0.35;
	scene.add(pata3_4);

	const pata4_4 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_4.position.x = -0.7 + -1.80 + 2.92;
	pata4_4.position.y = 1.8;
	pata4_4.position.z = 0.35;
	scene.add(pata4_4);

	const pata5_4 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_4.position.x = -0.7 + -1.43 + 2.92;
	pata5_4.position.y = 2.1;
	pata5_4.position.z = 0.35;
	scene.add(pata5_4);

	const pata6_4 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_4.position.x = -0.7 + -1.43 + 2.92;
	pata6_4.position.y = 1.9;
	pata6_4.position.z = 0.35;
	scene.add(pata6_4);
	// repisa

	const repisa_4 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_4.position.x = -0.7 + -1.325 + 2.92;
	repisa_4.position.y = 2;
	repisa_4.position.z = 0.1;
	scene.add(repisa_4);
	// pc

	const PC_4 = new THREE.Mesh(geometryPC, materialPC);
	PC_4.position.x = -0.7 + -1.325 + 2.92;
	PC_4.position.y = 2;
	PC_4.position.z = 0.3;
	scene.add(PC_4);
	//monitor
	const monitor_4 = new THREE.Mesh(geometryMon, materialMon);
	monitor_4.position.x = -0.7 + -1.5 + 2.92;
	monitor_4.position.y = 2;
	monitor_4.position.z = 0.95;
	scene.add(monitor_4);

	const Base1_4 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_4.position.x = -0.7 + -1.5 + 2.92;
	Base1_4.position.y = 2.02;
	Base1_4.position.z = 0.825;
	scene.add(Base1_4);

	const Base2_4 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_4.position.x = -0.7 + -1.5 + 2.92;
	Base2_4.position.y = 2.02;
	Base2_4.position.z = 0.72;
	scene.add(Base2_4);

	const pantalla_4 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_4.position.x = -0.7 + -1.5 + 2.92;
	pantalla_4.position.y = 1.989;
	pantalla_4.position.z = 0.95;
	scene.add(pantalla_4);

	// teclado
	const teclado_4 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_4.position.x = -0.7 + -1.55 + 2.92;
	teclado_4.position.y = 1.88;
	teclado_4.position.z = 0.73;
	scene.add(teclado_4);
	//mouse

	const mouse_4 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_4.position.x = -0.7 + -1.27 + 2.92;
	mouse_4.position.y = 1.88;
	mouse_4.position.z = 0.73;
	scene.add(mouse_4);
	//silla


	const silla1_4 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_4.position.x = -0.7 + -1.7 + 2.92;
	silla1_4.position.y = 1.3;
	silla1_4.position.z = 0.45;
	scene.add(silla1_4);
	// patas silla

	const pata1S_4 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_4.position.x = -0.7 + -1.7 + 2.92;
	pata1S_4.position.y = 1.6;
	pata1S_4.position.z = 0.225;
	scene.add(pata1S_4);

	const pata2S_4 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_4.position.x = -0.7 + -1.4 + 2.92;
	pata2S_4.position.y = 1.6;
	pata2S_4.position.z = 0.225;
	scene.add(pata2S_4);

	const pata3S_4 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_4.position.x = -0.7 + -1.4 + 2.92;
	pata3S_4.position.y = 1.26;
	pata3S_4.position.z = 0.45;
	scene.add(pata3S_4);

	const pata4S_4 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_4.position.x = -0.7 + -1.7 + 2.92;
	pata4S_4.position.y = 1.26;
	pata4S_4.position.z = 0.45;
	scene.add(pata4S_4);

	const silla2_4 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_4.position.x = -0.7 + -1.7 + 2.92;
	silla2_4.position.y = 1.26;
	silla2_4.position.z = 0.7;
	scene.add(silla2_4);

	//mesa5-------------------------------------------------------

	const mesa_5 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_5.position.x = -0.7 + -1.5 + 3.63;
	mesa_5.position.y = 2;
	mesa_5.position.z = 0.7;
	scene.add(mesa_5);
	//patas 1

	const pata1_5 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_5.position.x = -0.7 + -1.80 + 3.63;
	pata1_5.position.y = 2.2;
	pata1_5.position.z = 0.35;
	scene.add(pata1_5);

	const pata2_5 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_5.position.x = -0.7 + -1.2 + 3.63;
	pata2_5.position.y = 2.2;
	pata2_5.position.z = 0.35;
	scene.add(pata2_5);

	const pata3_5 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_5.position.x = -0.7 + -1.20 + 3.63;
	pata3_5.position.y = 1.8;
	pata3_5.position.z = 0.35;
	scene.add(pata3_5);

	const pata4_5 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_5.position.x = -0.7 + -1.80 + 3.63;
	pata4_5.position.y = 1.8;
	pata4_5.position.z = 0.35;
	scene.add(pata4_5);

	const pata5_5 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_5.position.x = -0.7 + -1.43 + 3.63;
	pata5_5.position.y = 2.1;
	pata5_5.position.z = 0.35;
	scene.add(pata5_5);

	const pata6_5 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_5.position.x = -0.7 + -1.43 + 3.63;
	pata6_5.position.y = 1.9;
	pata6_5.position.z = 0.35;
	scene.add(pata6_5);
	// repisa

	const repisa_5 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_5.position.x = -0.7 + -1.325 + 3.63;
	repisa_5.position.y = 2;
	repisa_5.position.z = 0.1;
	scene.add(repisa_5);
	// pc

	const PC_5 = new THREE.Mesh(geometryPC, materialPC);
	PC_5.position.x = -0.7 + -1.325 + 3.63;
	PC_5.position.y = 2;
	PC_5.position.z = 0.3;
	scene.add(PC_5);
	//monitor
	const monitor_5 = new THREE.Mesh(geometryMon, materialMon);
	monitor_5.position.x = -0.7 + -1.5 + 3.63;
	monitor_5.position.y = 2;
	monitor_5.position.z = 0.95;
	scene.add(monitor_5);

	const Base1_5 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_5.position.x = -0.7 + -1.5 + 3.63;
	Base1_5.position.y = 2.02;
	Base1_5.position.z = 0.825;
	scene.add(Base1_5);

	const Base2_5 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_5.position.x = -0.7 + -1.5 + 3.63;
	Base2_5.position.y = 2.02;
	Base2_5.position.z = 0.72;
	scene.add(Base2_5);

	const pantalla_5 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_5.position.x = -0.7 + -1.5 + 3.63;
	pantalla_5.position.y = 1.989;
	pantalla_5.position.z = 0.95;
	scene.add(pantalla_5);

	// teclado
	const teclado_5 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_5.position.x = -0.7 + -1.55 + 3.63;
	teclado_5.position.y = 1.88;
	teclado_5.position.z = 0.73;
	scene.add(teclado_5);
	//mouse

	const mouse_5 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_5.position.x = -0.7 + -1.27 + 3.63;
	mouse_5.position.y = 1.88;
	mouse_5.position.z = 0.73;
	scene.add(mouse_5);
	//silla


	const silla1_5 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_5.position.x = -0.7 + -1.7 + 3.63;
	silla1_5.position.y = 1.3;
	silla1_5.position.z = 0.45;
	scene.add(silla1_5);
	// patas silla

	const pata1S_5 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_5.position.x = -0.7 + -1.7 + 3.63;
	pata1S_5.position.y = 1.6;
	pata1S_5.position.z = 0.225;
	scene.add(pata1S_5);

	const pata2S_5 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_5.position.x = -0.7 + -1.4 + 3.63;
	pata2S_5.position.y = 1.6;
	pata2S_5.position.z = 0.225;
	scene.add(pata2S_5);

	const pata3S_5 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_5.position.x = -0.7 + -1.4 + 3.63;
	pata3S_5.position.y = 1.26;
	pata3S_5.position.z = 0.45;
	scene.add(pata3S_5);

	const pata4S_5 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_5.position.x = -0.7 + -1.7 + 3.63;
	pata4S_5.position.y = 1.26;
	pata4S_5.position.z = 0.45;
	scene.add(pata4S_5);

	const silla2_5 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_5.position.x = -0.7 + -1.7 + 3.63;
	silla2_5.position.y = 1.26;
	silla2_5.position.z = 0.7;
	scene.add(silla2_5);
	//mesa6-------------------------------------------------------

	const mesa_6 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_6.position.x = -0.7 + -1.5 + 4.34;
	mesa_6.position.y = 2;
	mesa_6.position.z = 0.7;
	scene.add(mesa_6);
	//patas 1

	const pata1_6 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_6.position.x = -0.7 + -1.80 + 4.34;
	pata1_6.position.y = 2.2;
	pata1_6.position.z = 0.35;
	scene.add(pata1_6);

	const pata2_6 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_6.position.x = -0.7 + -1.2 + 4.34;
	pata2_6.position.y = 2.2;
	pata2_6.position.z = 0.35;
	scene.add(pata2_6);

	const pata3_6 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_6.position.x = -0.7 + -1.20 + 4.34;
	pata3_6.position.y = 1.8;
	pata3_6.position.z = 0.35;
	scene.add(pata3_6);

	const pata4_6 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_6.position.x = -0.7 + -1.80 + 4.34;
	pata4_6.position.y = 1.8;
	pata4_6.position.z = 0.35;
	scene.add(pata4_6);

	const pata5_6 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_6.position.x = -0.7 + -1.43 + 4.34;
	pata5_6.position.y = 2.1;
	pata5_6.position.z = 0.35;
	scene.add(pata5_6);

	const pata6_6 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_6.position.x = -0.7 + -1.43 + 4.34;
	pata6_6.position.y = 1.9;
	pata6_6.position.z = 0.35;
	scene.add(pata6_6);
	// repisa

	const repisa_6 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_6.position.x = -0.7 + -1.325 + 4.34;
	repisa_6.position.y = 2;
	repisa_6.position.z = 0.1;
	scene.add(repisa_6);
	// pc

	const PC_6 = new THREE.Mesh(geometryPC, materialPC);
	PC_6.position.x = -0.7 + -1.325 + 4.34;
	PC_6.position.y = 2;
	PC_6.position.z = 0.3;
	scene.add(PC_6);
	//monitor
	const monitor_6 = new THREE.Mesh(geometryMon, materialMon);
	monitor_6.position.x = -0.7 + -1.5 + 4.34;
	monitor_6.position.y = 2;
	monitor_6.position.z = 0.95;
	scene.add(monitor_6);

	const Base1_6 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_6.position.x = -0.7 + -1.5 + 4.34;
	Base1_6.position.y = 2.02;
	Base1_6.position.z = 0.825;
	scene.add(Base1_6);

	const Base2_6 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_6.position.x = -0.7 + -1.5 + 4.34;
	Base2_6.position.y = 2.02;
	Base2_6.position.z = 0.72;
	scene.add(Base2_6);

	const pantalla_6 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_6.position.x = -0.7 + -1.5 + 4.34;
	pantalla_6.position.y = 1.989;
	pantalla_6.position.z = 0.95;
	scene.add(pantalla_6);

	// teclado
	const teclado_6 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_6.position.x = -0.7 + -1.55 + 4.34;
	teclado_6.position.y = 1.88;
	teclado_6.position.z = 0.73;
	scene.add(teclado_6);
	//mouse

	const mouse_6 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_6.position.x = -0.7 + -1.27 + 4.34;
	mouse_6.position.y = 1.88;
	mouse_6.position.z = 0.73;
	scene.add(mouse_6);
	//silla


	const silla1_6 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_6.position.x = -0.7 + -1.7 + 4.34;
	silla1_6.position.y = 1.3;
	silla1_6.position.z = 0.45;
	scene.add(silla1_6);
	// patas silla

	const pata1S_6 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_6.position.x = -0.7 + -1.7 + 4.34;
	pata1S_6.position.y = 1.6;
	pata1S_6.position.z = 0.225;
	scene.add(pata1S_6);

	const pata2S_6 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_6.position.x = -0.7 + -1.4 + 4.34;
	pata2S_6.position.y = 1.6;
	pata2S_6.position.z = 0.225;
	scene.add(pata2S_6);

	const pata3S_6 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_6.position.x = -0.7 + -1.4 + 4.34;
	pata3S_6.position.y = 1.26;
	pata3S_6.position.z = 0.45;
	scene.add(pata3S_6);

	const pata4S_6 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_6.position.x = -0.7 + -1.7 + 4.34;
	pata4S_6.position.y = 1.26;
	pata4S_6.position.z = 0.45;
	scene.add(pata4S_6);

	const silla2_6 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_6.position.x = -0.7 + -1.7 + 4.34;
	silla2_6.position.y = 1.26;
	silla2_6.position.z = 0.7;
	scene.add(silla2_6);

	//mesa7-------------------------------------------------------

	const mesa_7 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_7.position.x = -0.7 + -1.5;
	mesa_7.position.y = -1.1 + 2;
	mesa_7.position.z = 0.7;
	scene.add(mesa_7);
	//patas 1

	const pata1_7 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_7.position.x = -0.7 + -1.80;
	pata1_7.position.y = -1.1 + 2.2;
	pata1_7.position.z = 0.35;
	scene.add(pata1_7);

	const pata2_7 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_7.position.x = -0.7 + -1.2;
	pata2_7.position.y = -1.1 + 2.2;
	pata2_7.position.z = 0.35;
	scene.add(pata2_7);

	const pata3_7 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_7.position.x = -0.7 + -1.20;
	pata3_7.position.y = -1.1 + 1.8;
	pata3_7.position.z = 0.35;
	scene.add(pata3_7);

	const pata4_7 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_7.position.x = -0.7 + -1.80;
	pata4_7.position.y = -1.1 + 1.8;
	pata4_7.position.z = 0.35;
	scene.add(pata4_7);

	const pata5_7 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_7.position.x = -0.7 + -1.43;
	pata5_7.position.y = -1.1 + 2.1;
	pata5_7.position.z = 0.35;
	scene.add(pata5_7);

	const pata6_7 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_7.position.x = -0.7 + -1.43;
	pata6_7.position.y = -1.1 + 1.9;
	pata6_7.position.z = 0.35;
	scene.add(pata6_7);
	// repisa

	const repisa_7 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_7.position.x = -0.7 + -1.325;
	repisa_7.position.y = -1.1 + 2;
	repisa_7.position.z = 0.1;
	scene.add(repisa_7);
	// pc

	const PC_7 = new THREE.Mesh(geometryPC, materialPC);
	PC_7.position.x = -0.7 + -1.325;
	PC_7.position.y = -1.1 + 2;
	PC_7.position.z = 0.3;
	scene.add(PC_7);
	//monitor
	const monitor_7 = new THREE.Mesh(geometryMon, materialMon);
	monitor_7.position.x = -0.7 + -1.5;
	monitor_7.position.y = -1.1 + 2;
	monitor_7.position.z = 0.95;
	scene.add(monitor_7);

	const Base1_7 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_7.position.x = -0.7 + -1.5;
	Base1_7.position.y = -1.1 + 2.02;
	Base1_7.position.z = 0.825;
	scene.add(Base1_7);

	const Base2_7 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_7.position.x = -0.7 + -1.5;
	Base2_7.position.y = -1.1 + 2.02;
	Base2_7.position.z = 0.72;
	scene.add(Base2_7);

	const pantalla_7 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_7.position.x = -0.7 + -1.5;
	pantalla_7.position.y = -1.1 + 1.989;
	pantalla_7.position.z = 0.95;
	scene.add(pantalla_7);

	// teclado
	const teclado_7 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_7.position.x = -0.7 + -1.55;
	teclado_7.position.y = -1.1 + 1.88;
	teclado_7.position.z = 0.73;
	scene.add(teclado_7);
	//mouse

	const mouse_7 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_7.position.x = -0.7 + -1.27;
	mouse_7.position.y = -1.1 + 1.88;
	mouse_7.position.z = 0.73;
	scene.add(mouse_7);
	//silla


	const silla1_7 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_7.position.x = -0.7 + -1.7;
	silla1_7.position.y = -1.1 + 1.3;
	silla1_7.position.z = 0.45;
	scene.add(silla1_7);
	// patas silla

	const pata1S_7 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_7.position.x = -0.7 + -1.7;
	pata1S_7.position.y = -1.1 + 1.6;
	pata1S_7.position.z = 0.225;
	scene.add(pata1S_7);

	const pata2S_7 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_7.position.x = -0.7 + -1.4;
	pata2S_7.position.y = -1.1 + 1.6;
	pata2S_7.position.z = 0.225;
	scene.add(pata2S_7);

	const pata3S_7 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_7.position.x = -0.7 + -1.4;
	pata3S_7.position.y = -1.1 + 1.26;
	pata3S_7.position.z = 0.45;
	scene.add(pata3S_7);

	const pata4S_7 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_7.position.x = -0.7 + -1.7;
	pata4S_7.position.y = -1.1 + 1.26;
	pata4S_7.position.z = 0.45;
	scene.add(pata4S_7);

	const silla2_7 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_7.position.x = -0.7 + -1.7;
	silla2_7.position.y = -1.1 + 1.26;
	silla2_7.position.z = 0.7;
	scene.add(silla2_7);


	//mesa8-------------------------------------------------------

	const mesa_8 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_8.position.x = -0.7 + -1.5 + 0.71;
	mesa_8.position.y = -1.1 + 2;
	mesa_8.position.z = 0.7;
	scene.add(mesa_8);
	//patas 1

	const pata1_8 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_8.position.x = -0.7 + -1.80 + 0.71;
	pata1_8.position.y = -1.1 + 2.2;
	pata1_8.position.z = 0.35;
	scene.add(pata1_8);

	const pata2_8 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_8.position.x = -0.7 + -1.2 + 0.71;
	pata2_8.position.y = -1.1 + 2.2;
	pata2_8.position.z = 0.35;
	scene.add(pata2_8);

	const pata3_8 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_8.position.x = -0.7 + -1.20 + 0.71;
	pata3_8.position.y = -1.1 + 1.8;
	pata3_8.position.z = 0.35;
	scene.add(pata3_8);

	const pata4_8 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_8.position.x = -0.7 + -1.80 + 0.71;
	pata4_8.position.y = -1.1 + 1.8;
	pata4_8.position.z = 0.35;
	scene.add(pata4_8);

	const pata5_8 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_8.position.x = -0.7 + -1.43 + 0.71;
	pata5_8.position.y = -1.1 + 2.1;
	pata5_8.position.z = 0.35;
	scene.add(pata5_8);

	const pata6_8 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_8.position.x = -0.7 + -1.43 + 0.71;
	pata6_8.position.y = -1.1 + 1.9;
	pata6_8.position.z = 0.35;
	scene.add(pata6_8);
	// repisa

	const repisa_8 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_8.position.x = -0.7 + -1.325 + 0.71;
	repisa_8.position.y = -1.1 + 2;
	repisa_8.position.z = 0.1;
	scene.add(repisa_8);
	// pc

	const PC_8 = new THREE.Mesh(geometryPC, materialPC);
	PC_8.position.x = -0.7 + -1.325 + 0.71;
	PC_8.position.y = -1.1 + 2;
	PC_8.position.z = 0.3;
	scene.add(PC_8);
	//monitor
	const monitor_8 = new THREE.Mesh(geometryMon, materialMon);
	monitor_8.position.x = -0.7 + -1.5 + 0.71;
	monitor_8.position.y = -1.1 + 2;
	monitor_8.position.z = 0.95;
	scene.add(monitor_8);

	const Base1_8 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_8.position.x = -0.7 + -1.5 + 0.71;
	Base1_8.position.y = -1.1 + 2.02;
	Base1_8.position.z = 0.825;
	scene.add(Base1_8);

	const Base2_8 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_8.position.x = -0.7 + -1.5 + 0.71;
	Base2_8.position.y = -1.1 + 2.02;
	Base2_8.position.z = 0.72;
	scene.add(Base2_8);

	const pantalla_8 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_8.position.x = -0.7 + -1.5 + 0.71;
	pantalla_8.position.y = -1.1 + 1.989;
	pantalla_8.position.z = 0.95;
	scene.add(pantalla_8);

	// teclado
	const teclado_8 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_8.position.x = -0.7 + -1.55 + 0.71;
	teclado_8.position.y = -1.1 + 1.88;
	teclado_8.position.z = 0.73;
	scene.add(teclado_8);
	//mouse

	const mouse_8 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_8.position.x = -0.7 + -1.27 + 0.71;
	mouse_8.position.y = -1.1 + 1.88;
	mouse_8.position.z = 0.73;
	scene.add(mouse_8);
	//silla


	const silla1_8 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_8.position.x = -0.7 + -1.7 + 0.71;
	silla1_8.position.y = -1.1 + 1.3;
	silla1_8.position.z = 0.45;
	scene.add(silla1_8);
	// patas silla

	const pata1S_8 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_8.position.x = -0.7 + -1.7 + 0.71;
	pata1S_8.position.y = -1.1 + 1.6;
	pata1S_8.position.z = 0.225;
	scene.add(pata1S_8);

	const pata2S_8 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_8.position.x = -0.7 + -1.4 + 0.71;
	pata2S_8.position.y = -1.1 + 1.6;
	pata2S_8.position.z = 0.225;
	scene.add(pata2S_8);

	const pata3S_8 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_8.position.x = -0.7 + -1.4 + 0.71;
	pata3S_8.position.y = -1.1 + 1.26;
	pata3S_8.position.z = 0.45;
	scene.add(pata3S_8);

	const pata4S_8 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_8.position.x = -0.7 + -1.7 + 0.71;
	pata4S_8.position.y = -1.1 + 1.26;
	pata4S_8.position.z = 0.45;
	scene.add(pata4S_8);

	const silla2_8 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_8.position.x = -0.7 + -1.7 + 0.71;
	silla2_8.position.y = -1.1 + 1.26;
	silla2_8.position.z = 0.7;
	scene.add(silla2_8);

	//mesa9-------------------------------------------------------

	const mesa_9 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_9.position.x = -0.7 + -1.5 + 1.42;
	mesa_9.position.y = -1.1 + 2;
	mesa_9.position.z = 0.7;
	scene.add(mesa_9);
	//patas 1

	const pata1_9 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_9.position.x = -0.7 + -1.80 + 1.42;
	pata1_9.position.y = -1.1 + 2.2;
	pata1_9.position.z = 0.35;
	scene.add(pata1_9);

	const pata2_9 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_9.position.x = -0.7 + -1.2 + 1.42;
	pata2_9.position.y = -1.1 + 2.2;
	pata2_9.position.z = 0.35;
	scene.add(pata2_9);

	const pata3_9 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_9.position.x = -0.7 + -1.20 + 1.42;
	pata3_9.position.y = -1.1 + 1.8;
	pata3_9.position.z = 0.35;
	scene.add(pata3_9);

	const pata4_9 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_9.position.x = -0.7 + -1.80 + 1.42;
	pata4_9.position.y = -1.1 + 1.8;
	pata4_9.position.z = 0.35;
	scene.add(pata4_9);

	const pata5_9 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_9.position.x = -0.7 + -1.43 + 1.42;
	pata5_9.position.y = -1.1 + 2.1;
	pata5_9.position.z = 0.35;
	scene.add(pata5_9);

	const pata6_9 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_9.position.x = -0.7 + -1.43 + 1.42;
	pata6_9.position.y = -1.1 + 1.9;
	pata6_9.position.z = 0.35;
	scene.add(pata6_9);
	// repisa

	const repisa_9 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_9.position.x = -0.7 + -1.325 + 1.42;
	repisa_9.position.y = -1.1 + 2;
	repisa_9.position.z = 0.1;
	scene.add(repisa_9);
	// pc

	const PC_9 = new THREE.Mesh(geometryPC, materialPC);
	PC_9.position.x = -0.7 + -1.325 + 1.42;
	PC_9.position.y = -1.1 + 2;
	PC_9.position.z = 0.3;
	scene.add(PC_9);
	//monitor
	const monitor_9 = new THREE.Mesh(geometryMon, materialMon);
	monitor_9.position.x = -0.7 + -1.5 + 1.42;
	monitor_9.position.y = -1.1 + 2;
	monitor_9.position.z = 0.95;
	scene.add(monitor_9);

	const Base1_9 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_9.position.x = -0.7 + -1.5 + 1.42;
	Base1_9.position.y = -1.1 + 2.02;
	Base1_9.position.z = 0.825;
	scene.add(Base1_9);

	const Base2_9 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_9.position.x = -0.7 + -1.5 + 1.42;
	Base2_9.position.y = -1.1 + 2.02;
	Base2_9.position.z = 0.72;
	scene.add(Base2_9);

	const pantalla_9 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_9.position.x = -0.7 + -1.5 + 1.42;
	pantalla_9.position.y = -1.1 + 1.989;
	pantalla_9.position.z = 0.95;
	scene.add(pantalla_9);

	// teclado
	const teclado_9 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_9.position.x = -0.7 + -1.55 + 1.42;
	teclado_9.position.y = -1.1 + 1.88;
	teclado_9.position.z = 0.73;
	scene.add(teclado_9);
	//mouse

	const mouse_9 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_9.position.x = -0.7 + -1.27 + 1.42;
	mouse_9.position.y = -1.1 + 1.88;
	mouse_9.position.z = 0.73;
	scene.add(mouse_9);
	//silla


	const silla1_9 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_9.position.x = -0.7 + -1.7 + 1.42;
	silla1_9.position.y = -1.1 + 1.3;
	silla1_9.position.z = 0.45;
	scene.add(silla1_9);
	// patas silla

	const pata1S_9 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_9.position.x = -0.7 + -1.7 + 1.42;
	pata1S_9.position.y = -1.1 + 1.6;
	pata1S_9.position.z = 0.225;
	scene.add(pata1S_9);

	const pata2S_9 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_9.position.x = -0.7 + -1.4 + 1.42;
	pata2S_9.position.y = -1.1 + 1.6;
	pata2S_9.position.z = 0.225;
	scene.add(pata2S_9);

	const pata3S_9 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_9.position.x = -0.7 + -1.4 + 1.42;
	pata3S_9.position.y = -1.1 + 1.26;
	pata3S_9.position.z = 0.45;
	scene.add(pata3S_9);

	const pata4S_9 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_9.position.x = -0.7 + -1.7 + 1.42;
	pata4S_9.position.y = -1.1 + 1.26;
	pata4S_9.position.z = 0.45;
	scene.add(pata4S_9);

	const silla2_9 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_9.position.x = -0.7 + -1.7 + 1.42;
	silla2_9.position.y = -1.1 + 1.26;
	silla2_9.position.z = 0.7;
	scene.add(silla2_9);

	//mesa10-------------------------------------------------------

	const mesa_10 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_10.position.x = -0.7 + -1.5 + 2.92;
	mesa_10.position.y = -1.1 + 2;
	mesa_10.position.z = 0.7;
	scene.add(mesa_10);
	//patas 1

	const pata1_10 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_10.position.x = -0.7 + -1.80 + 2.92;
	pata1_10.position.y = -1.1 + 2.2;
	pata1_10.position.z = 0.35;
	scene.add(pata1_10);

	const pata2_10 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_10.position.x = -0.7 + -1.2 + 2.92;
	pata2_10.position.y = -1.1 + 2.2;
	pata2_10.position.z = 0.35;
	scene.add(pata2_10);

	const pata3_10 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_10.position.x = -0.7 + -1.20 + 2.92;
	pata3_10.position.y = -1.1 + 1.8;
	pata3_10.position.z = 0.35;
	scene.add(pata3_10);

	const pata4_10 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_10.position.x = -0.7 + -1.80 + 2.92;
	pata4_10.position.y = -1.1 + 1.8;
	pata4_10.position.z = 0.35;
	scene.add(pata4_10);

	const pata5_10 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_10.position.x = -0.7 + -1.43 + 2.92;
	pata5_10.position.y = -1.1 + 2.1;
	pata5_10.position.z = 0.35;
	scene.add(pata5_10);

	const pata6_10 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_10.position.x = -0.7 + -1.43 + 2.92;
	pata6_10.position.y = -1.1 + 1.9;
	pata6_10.position.z = 0.35;
	scene.add(pata6_10);
	// repisa

	const repisa_10 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_10.position.x = -0.7 + -1.325 + 2.92;
	repisa_10.position.y = -1.1 + 2;
	repisa_10.position.z = 0.1;
	scene.add(repisa_10);
	// pc

	const PC_10 = new THREE.Mesh(geometryPC, materialPC);
	PC_10.position.x = -0.7 + -1.325 + 2.92;
	PC_10.position.y = -1.1 + 2;
	PC_10.position.z = 0.3;
	scene.add(PC_10);
	//monitor
	const monitor_10 = new THREE.Mesh(geometryMon, materialMon);
	monitor_10.position.x = -0.7 + -1.5 + 2.92;
	monitor_10.position.y = -1.1 + 2;
	monitor_10.position.z = 0.95;
	scene.add(monitor_10);

	const Base1_10 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_10.position.x = -0.7 + -1.5 + 2.92;
	Base1_10.position.y = -1.1 + 2.02;
	Base1_10.position.z = 0.825;
	scene.add(Base1_10);

	const Base2_10 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_10.position.x = -0.7 + -1.5 + 2.92;
	Base2_10.position.y = -1.1 + 2.02;
	Base2_10.position.z = 0.72;
	scene.add(Base2_10);

	const pantalla_10 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_10.position.x = -0.7 + -1.5 + 2.92;
	pantalla_10.position.y = -1.1 + 1.989;
	pantalla_10.position.z = 0.95;
	scene.add(pantalla_10);

	// teclado
	const teclado_10 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_10.position.x = -0.7 + -1.55 + 2.92;
	teclado_10.position.y = -1.1 + 1.88;
	teclado_10.position.z = 0.73;
	scene.add(teclado_10);
	//mouse

	const mouse_10 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_10.position.x = -0.7 + -1.27 + 2.92;
	mouse_10.position.y = -1.1 + 1.88;
	mouse_10.position.z = 0.73;
	scene.add(mouse_10);
	//silla


	const silla1_10 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_10.position.x = -0.7 + -1.7 + 2.92;
	silla1_10.position.y = -1.1 + 1.3;
	silla1_10.position.z = 0.45;
	scene.add(silla1_10);
	// patas silla

	const pata1S_10 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_10.position.x = -0.7 + -1.7 + 2.92;
	pata1S_10.position.y = -1.1 + 1.6;
	pata1S_10.position.z = 0.225;
	scene.add(pata1S_10);

	const pata2S_10 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_10.position.x = -0.7 + -1.4 + 2.92;
	pata2S_10.position.y = -1.1 + 1.6;
	pata2S_10.position.z = 0.225;
	scene.add(pata2S_10);

	const pata3S_10 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_10.position.x = -0.7 + -1.4 + 2.92;
	pata3S_10.position.y = -1.1 + 1.26;
	pata3S_10.position.z = 0.45;
	scene.add(pata3S_10);

	const pata4S_10 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_10.position.x = -0.7 + -1.7 + 2.92;
	pata4S_10.position.y = -1.1 + 1.26;
	pata4S_10.position.z = 0.45;
	scene.add(pata4S_10);

	const silla2_10 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_10.position.x = -0.7 + -1.7 + 2.92;
	silla2_10.position.y = -1.1 + 1.26;
	silla2_10.position.z = 0.7;
	scene.add(silla2_10);

	//mesa11-------------------------------------------------------

	const mesa_11 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_11.position.x = -0.7 + -1.5 + 3.63;
	mesa_11.position.y = -1.1 + 2;
	mesa_11.position.z = 0.7;
	scene.add(mesa_11);
	//patas 1

	const pata1_11 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_11.position.x = -0.7 + -1.80 + 3.63;
	pata1_11.position.y = -1.1 + 2.2;
	pata1_11.position.z = 0.35;
	scene.add(pata1_11);

	const pata2_11 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_11.position.x = -0.7 + -1.2 + 3.63;
	pata2_11.position.y = -1.1 + 2.2;
	pata2_11.position.z = 0.35;
	scene.add(pata2_11);

	const pata3_11 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_11.position.x = -0.7 + -1.20 + 3.63;
	pata3_11.position.y = -1.1 + 1.8;
	pata3_11.position.z = 0.35;
	scene.add(pata3_11);

	const pata4_11 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_11.position.x = -0.7 + -1.80 + 3.63;
	pata4_11.position.y = -1.1 + 1.8;
	pata4_11.position.z = 0.35;
	scene.add(pata4_11);

	const pata5_11 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_11.position.x = -0.7 + -1.43 + 3.63;
	pata5_11.position.y = -1.1 + 2.1;
	pata5_11.position.z = 0.35;
	scene.add(pata5_11);

	const pata6_11 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_11.position.x = -0.7 + -1.43 + 3.63;
	pata6_11.position.y = -1.1 + 1.9;
	pata6_11.position.z = 0.35;
	scene.add(pata6_11);
	// repisa

	const repisa_11 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_11.position.x = -0.7 + -1.325 + 3.63;
	repisa_11.position.y = -1.1 + 2;
	repisa_11.position.z = 0.1;
	scene.add(repisa_11);
	// pc

	const PC_11 = new THREE.Mesh(geometryPC, materialPC);
	PC_11.position.x = -0.7 + -1.325 + 3.63;
	PC_11.position.y = -1.1 + 2;
	PC_11.position.z = 0.3;
	scene.add(PC_11);
	//monitor
	const monitor_11 = new THREE.Mesh(geometryMon, materialMon);
	monitor_11.position.x = -0.7 + -1.5 + 3.63;
	monitor_11.position.y = -1.1 + 2;
	monitor_11.position.z = 0.95;
	scene.add(monitor_11);

	const Base1_11 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_11.position.x = -0.7 + -1.5 + 3.63;
	Base1_11.position.y = -1.1 + 2.02;
	Base1_11.position.z = 0.825;
	scene.add(Base1_11);

	const Base2_11 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_11.position.x = -0.7 + -1.5 + 3.63;
	Base2_11.position.y = -1.1 + 2.02;
	Base2_11.position.z = 0.72;
	scene.add(Base2_11);

	const pantalla_11 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_11.position.x = -0.7 + -1.5 + 3.63;
	pantalla_11.position.y = -1.1 + 1.989;
	pantalla_11.position.z = 0.95;
	scene.add(pantalla_11);

	// teclado
	const teclado_11 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_11.position.x = -0.7 + -1.55 + 3.63;
	teclado_11.position.y = -1.1 + 1.88;
	teclado_11.position.z = 0.73;
	scene.add(teclado_11);
	//mouse

	const mouse_11 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_11.position.x = -0.7 + -1.27 + 3.63;
	mouse_11.position.y = -1.1 + 1.88;
	mouse_11.position.z = 0.73;
	scene.add(mouse_11);
	//silla


	const silla1_11 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_11.position.x = -0.7 + -1.7 + 3.63;
	silla1_11.position.y = -1.1 + 1.3;
	silla1_11.position.z = 0.45;
	scene.add(silla1_11);
	// patas silla

	const pata1S_11 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_11.position.x = -0.7 + -1.7 + 3.63;
	pata1S_11.position.y = -1.1 + 1.6;
	pata1S_11.position.z = 0.225;
	scene.add(pata1S_11);

	const pata2S_11 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_11.position.x = -0.7 + -1.4 + 3.63;
	pata2S_11.position.y = -1.1 + 1.6;
	pata2S_11.position.z = 0.225;
	scene.add(pata2S_11);

	const pata3S_11 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_11.position.x = -0.7 + -1.4 + 3.63;
	pata3S_11.position.y = -1.1 + 1.26;
	pata3S_11.position.z = 0.45;
	scene.add(pata3S_11);

	const pata4S_11 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_11.position.x = -0.7 + -1.7 + 3.63;
	pata4S_11.position.y = -1.1 + 1.26;
	pata4S_11.position.z = 0.45;
	scene.add(pata4S_11);

	const silla2_11 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_11.position.x = -0.7 + -1.7 + 3.63;
	silla2_11.position.y = -1.1 + 1.26;
	silla2_11.position.z = 0.7;
	scene.add(silla2_11);
	//mesa12-------------------------------------------------------

	const mesa_12 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_12.position.x = -0.7 + -1.5 + 4.34;
	mesa_12.position.y = -1.1 + 2;
	mesa_12.position.z = 0.7;
	scene.add(mesa_12);
	//patas 1

	const pata1_12 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_12.position.x = -0.7 + -1.80 + 4.34;
	pata1_12.position.y = -1.1 + 2.2;
	pata1_12.position.z = 0.35;
	scene.add(pata1_12);

	const pata2_12 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_12.position.x = -0.7 + -1.2 + 4.34;
	pata2_12.position.y = -1.1 + 2.2;
	pata2_12.position.z = 0.35;
	scene.add(pata2_12);

	const pata3_12 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_12.position.x = -0.7 + -1.20 + 4.34;
	pata3_12.position.y = -1.1 + 1.8;
	pata3_12.position.z = 0.35;
	scene.add(pata3_12);

	const pata4_12 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_12.position.x = -0.7 + -1.80 + 4.34;
	pata4_12.position.y = -1.1 + 1.8;
	pata4_12.position.z = 0.35;
	scene.add(pata4_12);

	const pata5_12 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_12.position.x = -0.7 + -1.43 + 4.34;
	pata5_12.position.y = -1.1 + 2.1;
	pata5_12.position.z = 0.35;
	scene.add(pata5_12);

	const pata6_12 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_12.position.x = -0.7 + -1.43 + 4.34;
	pata6_12.position.y = -1.1 + 1.9;
	pata6_12.position.z = 0.35;
	scene.add(pata6_12);
	// repisa

	const repisa_12 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_12.position.x = -0.7 + -1.325 + 4.34;
	repisa_12.position.y = -1.1 + 2;
	repisa_12.position.z = 0.1;
	scene.add(repisa_12);
	// pc

	const PC_12 = new THREE.Mesh(geometryPC, materialPC);
	PC_12.position.x = -0.7 + -1.325 + 4.34;
	PC_12.position.y = -1.1 + 2;
	PC_12.position.z = 0.3;
	scene.add(PC_12);
	//monitor
	const monitor_12 = new THREE.Mesh(geometryMon, materialMon);
	monitor_12.position.x = -0.7 + -1.5 + 4.34;
	monitor_12.position.y = -1.1 + 2;
	monitor_12.position.z = 0.95;
	scene.add(monitor_12);

	const Base1_12 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_12.position.x = -0.7 + -1.5 + 4.34;
	Base1_12.position.y = -1.1 + 2.02;
	Base1_12.position.z = 0.825;
	scene.add(Base1_12);

	const Base2_12 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_12.position.x = -0.7 + -1.5 + 4.34;
	Base2_12.position.y = -1.1 + 2.02;
	Base2_12.position.z = 0.72;
	scene.add(Base2_12);

	const pantalla_12 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_12.position.x = -0.7 + -1.5 + 4.34;
	pantalla_12.position.y = -1.1 + 1.989;
	pantalla_12.position.z = 0.95;
	scene.add(pantalla_12);

	// teclado
	const teclado_12 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_12.position.x = -0.7 + -1.55 + 4.34;
	teclado_12.position.y = -1.1 + 1.88;
	teclado_12.position.z = 0.73;
	scene.add(teclado_12);
	//mouse

	const mouse_12 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_12.position.x = -0.7 + -1.27 + 4.34;
	mouse_12.position.y = -1.1 + 1.88;
	mouse_12.position.z = 0.73;
	scene.add(mouse_12);
	//silla


	const silla1_12 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_12.position.x = -0.7 + -1.7 + 4.34;
	silla1_12.position.y = -1.1 + 1.3;
	silla1_12.position.z = 0.45;
	scene.add(silla1_12);
	// patas silla

	const pata1S_12 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_12.position.x = -0.7 + -1.7 + 4.34;
	pata1S_12.position.y = -1.1 + 1.6;
	pata1S_12.position.z = 0.225;
	scene.add(pata1S_12);

	const pata2S_12 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_12.position.x = -0.7 + -1.4 + 4.34;
	pata2S_12.position.y = -1.1 + 1.6;
	pata2S_12.position.z = 0.225;
	scene.add(pata2S_12);

	const pata3S_12 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_12.position.x = -0.7 + -1.4 + 4.34;
	pata3S_12.position.y = -1.1 + 1.26;
	pata3S_12.position.z = 0.45;
	scene.add(pata3S_12);

	const pata4S_12 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_12.position.x = -0.7 + -1.7 + 4.34;
	pata4S_12.position.y = -1.1 + 1.26;
	pata4S_12.position.z = 0.45;
	scene.add(pata4S_12);

	const silla2_12 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_12.position.x = -0.7 + -1.7 + 4.34;
	silla2_12.position.y = -1.1 + 1.26;
	silla2_12.position.z = 0.7;
	scene.add(silla2_12);

	//mesa13-------------------------------------------------------

	const mesa_13 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_13.position.x = -0.7 + -1.5;
	mesa_13.position.y = -2.2 + 2;
	mesa_13.position.z = 0.7;
	scene.add(mesa_13);
	//patas 1

	const pata1_13 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_13.position.x = -0.7 + -1.80;
	pata1_13.position.y = -2.2 + 2.2;
	pata1_13.position.z = 0.35;
	scene.add(pata1_13);

	const pata2_13 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_13.position.x = -0.7 + -1.2;
	pata2_13.position.y = -2.2 + 2.2;
	pata2_13.position.z = 0.35;
	scene.add(pata2_13);

	const pata3_13 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_13.position.x = -0.7 + -1.20;
	pata3_13.position.y = -2.2 + 1.8;
	pata3_13.position.z = 0.35;
	scene.add(pata3_13);

	const pata4_13 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_13.position.x = -0.7 + -1.80;
	pata4_13.position.y = -2.2 + 1.8;
	pata4_13.position.z = 0.35;
	scene.add(pata4_13);

	const pata5_13 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_13.position.x = -0.7 + -1.43;
	pata5_13.position.y = -2.2 + 2.1;
	pata5_13.position.z = 0.35;
	scene.add(pata5_13);

	const pata6_13 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_13.position.x = -0.7 + -1.43;
	pata6_13.position.y = -2.2 + 1.9;
	pata6_13.position.z = 0.35;
	scene.add(pata6_13);
	// repisa

	const repisa_13 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_13.position.x = -0.7 + -1.325;
	repisa_13.position.y = -2.2 + 2;
	repisa_13.position.z = 0.1;
	scene.add(repisa_13);
	// pc

	const PC_13 = new THREE.Mesh(geometryPC, materialPC);
	PC_13.position.x = -0.7 + -1.325;
	PC_13.position.y = -2.2 + 2;
	PC_13.position.z = 0.3;
	scene.add(PC_13);
	//monitor
	const monitor_13 = new THREE.Mesh(geometryMon, materialMon);
	monitor_13.position.x = -0.7 + -1.5;
	monitor_13.position.y = -2.2 + 2;
	monitor_13.position.z = 0.95;
	scene.add(monitor_13);

	const Base1_13 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_13.position.x = -0.7 + -1.5;
	Base1_13.position.y = -2.2 + 2.02;
	Base1_13.position.z = 0.825;
	scene.add(Base1_13);

	const Base2_13 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_13.position.x = -0.7 + -1.5;
	Base2_13.position.y = -2.2 + 2.02;
	Base2_13.position.z = 0.72;
	scene.add(Base2_13);

	const pantalla_13 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_13.position.x = -0.7 + -1.5;
	pantalla_13.position.y = -2.2 + 1.989;
	pantalla_13.position.z = 0.95;
	scene.add(pantalla_13);

	// teclado
	const teclado_13 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_13.position.x = -0.7 + -1.55;
	teclado_13.position.y = -2.2 + 1.88;
	teclado_13.position.z = 0.73;
	scene.add(teclado_13);
	//mouse

	const mouse_13 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_13.position.x = -0.7 + -1.27;
	mouse_13.position.y = -2.2 + 1.88;
	mouse_13.position.z = 0.73;
	scene.add(mouse_13);
	//silla


	const silla1_13 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_13.position.x = -0.7 + -1.7;
	silla1_13.position.y = -2.2 + 1.3;
	silla1_13.position.z = 0.45;
	scene.add(silla1_13);
	// patas silla

	const pata1S_13 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_13.position.x = -0.7 + -1.7;
	pata1S_13.position.y = -2.2 + 1.6;
	pata1S_13.position.z = 0.225;
	scene.add(pata1S_13);

	const pata2S_13 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_13.position.x = -0.7 + -1.4;
	pata2S_13.position.y = -2.2 + 1.6;
	pata2S_13.position.z = 0.225;
	scene.add(pata2S_13);

	const pata3S_13 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_13.position.x = -0.7 + -1.4;
	pata3S_13.position.y = -2.2 + 1.26;
	pata3S_13.position.z = 0.45;
	scene.add(pata3S_13);

	const pata4S_13 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_13.position.x = -0.7 + -1.7;
	pata4S_13.position.y = -2.2 + 1.26;
	pata4S_13.position.z = 0.45;
	scene.add(pata4S_13);

	const silla2_13 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_13.position.x = -0.7 + -1.7;
	silla2_13.position.y = -2.2 + 1.26;
	silla2_13.position.z = 0.7;
	scene.add(silla2_13);


	//mesa14-------------------------------------------------------

	const mesa_14 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_14.position.x = -0.7 + -1.5 + 0.71;
	mesa_14.position.y = -2.2 + 2;
	mesa_14.position.z = 0.7;
	scene.add(mesa_14);
	//patas 1

	const pata1_14 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_14.position.x = -0.7 + -1.80 + 0.71;
	pata1_14.position.y = -2.2 + 2.2;
	pata1_14.position.z = 0.35;
	scene.add(pata1_14);

	const pata2_14 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_14.position.x = -0.7 + -1.2 + 0.71;
	pata2_14.position.y = -2.2 + 2.2;
	pata2_14.position.z = 0.35;
	scene.add(pata2_14);

	const pata3_14 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_14.position.x = -0.7 + -1.20 + 0.71;
	pata3_14.position.y = -2.2 + 1.8;
	pata3_14.position.z = 0.35;
	scene.add(pata3_14);

	const pata4_14 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_14.position.x = -0.7 + -1.80 + 0.71;
	pata4_14.position.y = -2.2 + 1.8;
	pata4_14.position.z = 0.35;
	scene.add(pata4_14);

	const pata5_14 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_14.position.x = -0.7 + -1.43 + 0.71;
	pata5_14.position.y = -2.2 + 2.1;
	pata5_14.position.z = 0.35;
	scene.add(pata5_14);

	const pata6_14 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_14.position.x = -0.7 + -1.43 + 0.71;
	pata6_14.position.y = -2.2 + 1.9;
	pata6_14.position.z = 0.35;
	scene.add(pata6_14);
	// repisa

	const repisa_14 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_14.position.x = -0.7 + -1.325 + 0.71;
	repisa_14.position.y = -2.2 + 2;
	repisa_14.position.z = 0.1;
	scene.add(repisa_14);
	// pc

	const PC_14 = new THREE.Mesh(geometryPC, materialPC);
	PC_14.position.x = -0.7 + -1.325 + 0.71;
	PC_14.position.y = -2.2 + 2;
	PC_14.position.z = 0.3;
	scene.add(PC_14);
	//monitor
	const monitor_14 = new THREE.Mesh(geometryMon, materialMon);
	monitor_14.position.x = -0.7 + -1.5 + 0.71;
	monitor_14.position.y = -2.2 + 2;
	monitor_14.position.z = 0.95;
	scene.add(monitor_14);

	const Base1_14 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_14.position.x = -0.7 + -1.5 + 0.71;
	Base1_14.position.y = -2.2 + 2.02;
	Base1_14.position.z = 0.825;
	scene.add(Base1_14);

	const Base2_14 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_14.position.x = -0.7 + -1.5 + 0.71;
	Base2_14.position.y = -2.2 + 2.02;
	Base2_14.position.z = 0.72;
	scene.add(Base2_14);

	const pantalla_14 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_14.position.x = -0.7 + -1.5 + 0.71;
	pantalla_14.position.y = -2.2 + 1.989;
	pantalla_14.position.z = 0.95;
	scene.add(pantalla_14);

	// teclado
	const teclado_14 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_14.position.x = -0.7 + -1.55 + 0.71;
	teclado_14.position.y = -2.2 + 1.88;
	teclado_14.position.z = 0.73;
	scene.add(teclado_14);
	//mouse

	const mouse_14 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_14.position.x = -0.7 + -1.27 + 0.71;
	mouse_14.position.y = -2.2 + 1.88;
	mouse_14.position.z = 0.73;
	scene.add(mouse_14);
	//silla


	const silla1_14 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_14.position.x = -0.7 + -1.7 + 0.71;
	silla1_14.position.y = -2.2 + 1.3;
	silla1_14.position.z = 0.45;
	scene.add(silla1_14);
	// patas silla

	const pata1S_14 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_14.position.x = -0.7 + -1.7 + 0.71;
	pata1S_14.position.y = -2.2 + 1.6;
	pata1S_14.position.z = 0.225;
	scene.add(pata1S_14);

	const pata2S_14 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_14.position.x = -0.7 + -1.4 + 0.71;
	pata2S_14.position.y = -2.2 + 1.6;
	pata2S_14.position.z = 0.225;
	scene.add(pata2S_14);

	const pata3S_14 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_14.position.x = -0.7 + -1.4 + 0.71;
	pata3S_14.position.y = -2.2 + 1.26;
	pata3S_14.position.z = 0.45;
	scene.add(pata3S_14);

	const pata4S_14 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_14.position.x = -0.7 + -1.7 + 0.71;
	pata4S_14.position.y = -2.2 + 1.26;
	pata4S_14.position.z = 0.45;
	scene.add(pata4S_14);

	const silla2_14 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_14.position.x = -0.7 + -1.7 + 0.71;
	silla2_14.position.y = -2.2 + 1.26;
	silla2_14.position.z = 0.7;
	scene.add(silla2_14);

	//mesa15-------------------------------------------------------

	const mesa_15 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_15.position.x = -0.7 + -1.5 + 1.42;
	mesa_15.position.y = -2.2 + 2;
	mesa_15.position.z = 0.7;
	scene.add(mesa_15);
	//patas 1

	const pata1_15 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_15.position.x = -0.7 + -1.80 + 1.42;
	pata1_15.position.y = -2.2 + 2.2;
	pata1_15.position.z = 0.35;
	scene.add(pata1_15);

	const pata2_15 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_15.position.x = -0.7 + -1.2 + 1.42;
	pata2_15.position.y = -2.2 + 2.2;
	pata2_15.position.z = 0.35;
	scene.add(pata2_15);

	const pata3_15 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_15.position.x = -0.7 + -1.20 + 1.42;
	pata3_15.position.y = -2.2 + 1.8;
	pata3_15.position.z = 0.35;
	scene.add(pata3_15);

	const pata4_15 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_15.position.x = -0.7 + -1.80 + 1.42;
	pata4_15.position.y = -2.2 + 1.8;
	pata4_15.position.z = 0.35;
	scene.add(pata4_15);

	const pata5_15 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_15.position.x = -0.7 + -1.43 + 1.42;
	pata5_15.position.y = -2.2 + 2.1;
	pata5_15.position.z = 0.35;
	scene.add(pata5_15);

	const pata6_15 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_15.position.x = -0.7 + -1.43 + 1.42;
	pata6_15.position.y = -2.2 + 1.9;
	pata6_15.position.z = 0.35;
	scene.add(pata6_15);
	// repisa

	const repisa_15 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_15.position.x = -0.7 + -1.325 + 1.42;
	repisa_15.position.y = -2.2 + 2;
	repisa_15.position.z = 0.1;
	scene.add(repisa_15);
	// pc

	const PC_15 = new THREE.Mesh(geometryPC, materialPC);
	PC_15.position.x = -0.7 + -1.325 + 1.42;
	PC_15.position.y = -2.2 + 2;
	PC_15.position.z = 0.3;
	scene.add(PC_15);
	//monitor
	const monitor_15 = new THREE.Mesh(geometryMon, materialMon);
	monitor_15.position.x = -0.7 + -1.5 + 1.42;
	monitor_15.position.y = -2.2 + 2;
	monitor_15.position.z = 0.95;
	scene.add(monitor_15);

	const Base1_15 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_15.position.x = -0.7 + -1.5 + 1.42;
	Base1_15.position.y = -2.2 + 2.02;
	Base1_15.position.z = 0.825;
	scene.add(Base1_15);

	const Base2_15 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_15.position.x = -0.7 + -1.5 + 1.42;
	Base2_15.position.y = -2.2 + 2.02;
	Base2_15.position.z = 0.72;
	scene.add(Base2_15);

	const pantalla_15 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_15.position.x = -0.7 + -1.5 + 1.42;
	pantalla_15.position.y = -2.2 + 1.989;
	pantalla_15.position.z = 0.95;
	scene.add(pantalla_15);

	// teclado
	const teclado_15 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_15.position.x = -0.7 + -1.55 + 1.42;
	teclado_15.position.y = -2.2 + 1.88;
	teclado_15.position.z = 0.73;
	scene.add(teclado_15);
	//mouse

	const mouse_15 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_15.position.x = -0.7 + -1.27 + 1.42;
	mouse_15.position.y = -2.2 + 1.88;
	mouse_15.position.z = 0.73;
	scene.add(mouse_15);
	//silla


	const silla1_15 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_15.position.x = -0.7 + -1.7 + 1.42;
	silla1_15.position.y = -2.2 + 1.3;
	silla1_15.position.z = 0.45;
	scene.add(silla1_15);
	// patas silla

	const pata1S_15 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_15.position.x = -0.7 + -1.7 + 1.42;
	pata1S_15.position.y = -2.2 + 1.6;
	pata1S_15.position.z = 0.225;
	scene.add(pata1S_15);

	const pata2S_15 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_15.position.x = -0.7 + -1.4 + 1.42;
	pata2S_15.position.y = -2.2 + 1.6;
	pata2S_15.position.z = 0.225;
	scene.add(pata2S_15);

	const pata3S_15 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_15.position.x = -0.7 + -1.4 + 1.42;
	pata3S_15.position.y = -2.2 + 1.26;
	pata3S_15.position.z = 0.45;
	scene.add(pata3S_15);

	const pata4S_15 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_15.position.x = -0.7 + -1.7 + 1.42;
	pata4S_15.position.y = -2.2 + 1.26;
	pata4S_15.position.z = 0.45;
	scene.add(pata4S_15);

	const silla2_15 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_15.position.x = -0.7 + -1.7 + 1.42;
	silla2_15.position.y = -2.2 + 1.26;
	silla2_15.position.z = 0.7;
	scene.add(silla2_15);

	//mesa16-------------------------------------------------------

	const mesa_16 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_16.position.x = -0.7 + -1.5 + 2.92;
	mesa_16.position.y = -2.2 + 2;
	mesa_16.position.z = 0.7;
	scene.add(mesa_16);
	//patas 1

	const pata1_16 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_16.position.x = -0.7 + -1.80 + 2.92;
	pata1_16.position.y = -2.2 + 2.2;
	pata1_16.position.z = 0.35;
	scene.add(pata1_16);

	const pata2_16 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_16.position.x = -0.7 + -1.2 + 2.92;
	pata2_16.position.y = -2.2 + 2.2;
	pata2_16.position.z = 0.35;
	scene.add(pata2_16);

	const pata3_16 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_16.position.x = -0.7 + -1.20 + 2.92;
	pata3_16.position.y = -2.2 + 1.8;
	pata3_16.position.z = 0.35;
	scene.add(pata3_16);

	const pata4_16 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_16.position.x = -0.7 + -1.80 + 2.92;
	pata4_16.position.y = -2.2 + 1.8;
	pata4_16.position.z = 0.35;
	scene.add(pata4_16);

	const pata5_16 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_16.position.x = -0.7 + -1.43 + 2.92;
	pata5_16.position.y = -2.2 + 2.1;
	pata5_16.position.z = 0.35;
	scene.add(pata5_16);

	const pata6_16 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_16.position.x = -0.7 + -1.43 + 2.92;
	pata6_16.position.y = -2.2 + 1.9;
	pata6_16.position.z = 0.35;
	scene.add(pata6_16);
	// repisa

	const repisa_16 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_16.position.x = -0.7 + -1.325 + 2.92;
	repisa_16.position.y = -2.2 + 2;
	repisa_16.position.z = 0.1;
	scene.add(repisa_16);
	// pc

	const PC_16 = new THREE.Mesh(geometryPC, materialPC);
	PC_16.position.x = -0.7 + -1.325 + 2.92;
	PC_16.position.y = -2.2 + 2;
	PC_16.position.z = 0.3;
	scene.add(PC_16);
	//monitor
	const monitor_16 = new THREE.Mesh(geometryMon, materialMon);
	monitor_16.position.x = -0.7 + -1.5 + 2.92;
	monitor_16.position.y = -2.2 + 2;
	monitor_16.position.z = 0.95;
	scene.add(monitor_16);

	const Base1_16 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_16.position.x = -0.7 + -1.5 + 2.92;
	Base1_16.position.y = -2.2 + 2.02;
	Base1_16.position.z = 0.825;
	scene.add(Base1_16);

	const Base2_16 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_16.position.x = -0.7 + -1.5 + 2.92;
	Base2_16.position.y = -2.2 + 2.02;
	Base2_16.position.z = 0.72;
	scene.add(Base2_16);

	const pantalla_16 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_16.position.x = -0.7 + -1.5 + 2.92;
	pantalla_16.position.y = -2.2 + 1.989;
	pantalla_16.position.z = 0.95;
	scene.add(pantalla_16);

	// teclado
	const teclado_16 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_16.position.x = -0.7 + -1.55 + 2.92;
	teclado_16.position.y = -2.2 + 1.88;
	teclado_16.position.z = 0.73;
	scene.add(teclado_16);
	//mouse

	const mouse_16 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_16.position.x = -0.7 + -1.27 + 2.92;
	mouse_16.position.y = -2.2 + 1.88;
	mouse_16.position.z = 0.73;
	scene.add(mouse_16);
	//silla


	const silla1_16 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_16.position.x = -0.7 + -1.7 + 2.92;
	silla1_16.position.y = -2.2 + 1.3;
	silla1_16.position.z = 0.45;
	scene.add(silla1_16);
	// patas silla

	const pata1S_16 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_16.position.x = -0.7 + -1.7 + 2.92;
	pata1S_16.position.y = -2.2 + 1.6;
	pata1S_16.position.z = 0.225;
	scene.add(pata1S_16);

	const pata2S_16 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_16.position.x = -0.7 + -1.4 + 2.92;
	pata2S_16.position.y = -2.2 + 1.6;
	pata2S_16.position.z = 0.225;
	scene.add(pata2S_16);

	const pata3S_16 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_16.position.x = -0.7 + -1.4 + 2.92;
	pata3S_16.position.y = -2.2 + 1.26;
	pata3S_16.position.z = 0.45;
	scene.add(pata3S_16);

	const pata4S_16 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_16.position.x = -0.7 + -1.7 + 2.92;
	pata4S_16.position.y = -2.2 + 1.26;
	pata4S_16.position.z = 0.45;
	scene.add(pata4S_16);

	const silla2_16 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_16.position.x = -0.7 + -1.7 + 2.92;
	silla2_16.position.y = -2.2 + 1.26;
	silla2_16.position.z = 0.7;
	scene.add(silla2_16);

	//mesa17-------------------------------------------------------

	const mesa_17 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_17.position.x = -0.7 + -1.5 + 3.63;
	mesa_17.position.y = -2.2 + 2;
	mesa_17.position.z = 0.7;
	scene.add(mesa_17);
	//patas 1

	const pata1_17 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_17.position.x = -0.7 + -1.80 + 3.63;
	pata1_17.position.y = -2.2 + 2.2;
	pata1_17.position.z = 0.35;
	scene.add(pata1_17);

	const pata2_17 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_17.position.x = -0.7 + -1.2 + 3.63;
	pata2_17.position.y = -2.2 + 2.2;
	pata2_17.position.z = 0.35;
	scene.add(pata2_17);

	const pata3_17 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_17.position.x = -0.7 + -1.20 + 3.63;
	pata3_17.position.y = -2.2 + 1.8;
	pata3_17.position.z = 0.35;
	scene.add(pata3_17);

	const pata4_17 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_17.position.x = -0.7 + -1.80 + 3.63;
	pata4_17.position.y = -2.2 + 1.8;
	pata4_17.position.z = 0.35;
	scene.add(pata4_17);

	const pata5_17 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_17.position.x = -0.7 + -1.43 + 3.63;
	pata5_17.position.y = -2.2 + 2.1;
	pata5_17.position.z = 0.35;
	scene.add(pata5_17);

	const pata6_17 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_17.position.x = -0.7 + -1.43 + 3.63;
	pata6_17.position.y = -2.2 + 1.9;
	pata6_17.position.z = 0.35;
	scene.add(pata6_17);
	// repisa

	const repisa_17 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_17.position.x = -0.7 + -1.325 + 3.63;
	repisa_17.position.y = -2.2 + 2;
	repisa_17.position.z = 0.1;
	scene.add(repisa_17);
	// pc

	const PC_17 = new THREE.Mesh(geometryPC, materialPC);
	PC_17.position.x = -0.7 + -1.325 + 3.63;
	PC_17.position.y = -2.2 + 2;
	PC_17.position.z = 0.3;
	scene.add(PC_17);
	//monitor
	const monitor_17 = new THREE.Mesh(geometryMon, materialMon);
	monitor_17.position.x = -0.7 + -1.5 + 3.63;
	monitor_17.position.y = -2.2 + 2;
	monitor_17.position.z = 0.95;
	scene.add(monitor_17);

	const Base1_17 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_17.position.x = -0.7 + -1.5 + 3.63;
	Base1_17.position.y = -2.2 + 2.02;
	Base1_17.position.z = 0.825;
	scene.add(Base1_17);

	const Base2_17 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_17.position.x = -0.7 + -1.5 + 3.63;
	Base2_17.position.y = -2.2 + 2.02;
	Base2_17.position.z = 0.72;
	scene.add(Base2_17);

	const pantalla_17 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_17.position.x = -0.7 + -1.5 + 3.63;
	pantalla_17.position.y = -2.2 + 1.989;
	pantalla_17.position.z = 0.95;
	scene.add(pantalla_17);

	// teclado
	const teclado_17 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_17.position.x = -0.7 + -1.55 + 3.63;
	teclado_17.position.y = -2.2 + 1.88;
	teclado_17.position.z = 0.73;
	scene.add(teclado_17);
	//mouse

	const mouse_17 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_17.position.x = -0.7 + -1.27 + 3.63;
	mouse_17.position.y = -2.2 + 1.88;
	mouse_17.position.z = 0.73;
	scene.add(mouse_17);
	//silla


	const silla1_17 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_17.position.x = -0.7 + -1.7 + 3.63;
	silla1_17.position.y = -2.2 + 1.3;
	silla1_17.position.z = 0.45;
	scene.add(silla1_17);
	// patas silla

	const pata1S_17 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_17.position.x = -0.7 + -1.7 + 3.63;
	pata1S_17.position.y = -2.2 + 1.6;
	pata1S_17.position.z = 0.225;
	scene.add(pata1S_17);

	const pata2S_17 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_17.position.x = -0.7 + -1.4 + 3.63;
	pata2S_17.position.y = -2.2 + 1.6;
	pata2S_17.position.z = 0.225;
	scene.add(pata2S_17);

	const pata3S_17 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_17.position.x = -0.7 + -1.4 + 3.63;
	pata3S_17.position.y = -2.2 + 1.26;
	pata3S_17.position.z = 0.45;
	scene.add(pata3S_17);

	const pata4S_17 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_17.position.x = -0.7 + -1.7 + 3.63;
	pata4S_17.position.y = -2.2 + 1.26;
	pata4S_17.position.z = 0.45;
	scene.add(pata4S_17);

	const silla2_17 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_17.position.x = -0.7 + -1.7 + 3.63;
	silla2_17.position.y = -2.2 + 1.26;
	silla2_17.position.z = 0.7;
	scene.add(silla2_17);
	//mesa18-------------------------------------------------------

	const mesa_18 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_18.position.x = -0.7 + -1.5 + 4.34;
	mesa_18.position.y = -2.2 + 2;
	mesa_18.position.z = 0.7;
	scene.add(mesa_18);
	//patas 1

	const pata1_18 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_18.position.x = -0.7 + -1.80 + 4.34;
	pata1_18.position.y = -2.2 + 2.2;
	pata1_18.position.z = 0.35;
	scene.add(pata1_18);

	const pata2_18 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_18.position.x = -0.7 + -1.2 + 4.34;
	pata2_18.position.y = -2.2 + 2.2;
	pata2_18.position.z = 0.35;
	scene.add(pata2_18);

	const pata3_18 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_18.position.x = -0.7 + -1.20 + 4.34;
	pata3_18.position.y = -2.2 + 1.8;
	pata3_18.position.z = 0.35;
	scene.add(pata3_18);

	const pata4_18 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_18.position.x = -0.7 + -1.80 + 4.34;
	pata4_18.position.y = -2.2 + 1.8;
	pata4_18.position.z = 0.35;
	scene.add(pata4_18);

	const pata5_18 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_18.position.x = -0.7 + -1.43 + 4.34;
	pata5_18.position.y = -2.2 + 2.1;
	pata5_18.position.z = 0.35;
	scene.add(pata5_18);

	const pata6_18 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_18.position.x = -0.7 + -1.43 + 4.34;
	pata6_18.position.y = -2.2 + 1.9;
	pata6_18.position.z = 0.35;
	scene.add(pata6_18);
	// repisa

	const repisa_18 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_18.position.x = -0.7 + -1.325 + 4.34;
	repisa_18.position.y = -2.2 + 2;
	repisa_18.position.z = 0.1;
	scene.add(repisa_18);
	// pc

	const PC_18 = new THREE.Mesh(geometryPC, materialPC);
	PC_18.position.x = -0.7 + -1.325 + 4.34;
	PC_18.position.y = -2.2 + 2;
	PC_18.position.z = 0.3;
	scene.add(PC_18);
	//monitor
	const monitor_18 = new THREE.Mesh(geometryMon, materialMon);
	monitor_18.position.x = -0.7 + -1.5 + 4.34;
	monitor_18.position.y = -2.2 + 2;
	monitor_18.position.z = 0.95;
	scene.add(monitor_18);

	const Base1_18 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_18.position.x = -0.7 + -1.5 + 4.34;
	Base1_18.position.y = -2.2 + 2.02;
	Base1_18.position.z = 0.825;
	scene.add(Base1_18);

	const Base2_18 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_18.position.x = -0.7 + -1.5 + 4.34;
	Base2_18.position.y = -2.2 + 2.02;
	Base2_18.position.z = 0.72;
	scene.add(Base2_18);

	const pantalla_18 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_18.position.x = -0.7 + -1.5 + 4.34;
	pantalla_18.position.y = -2.2 + 1.989;
	pantalla_18.position.z = 0.95;
	scene.add(pantalla_18);

	// teclado
	const teclado_18 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_18.position.x = -0.7 + -1.55 + 4.34;
	teclado_18.position.y = -2.2 + 1.88;
	teclado_18.position.z = 0.73;
	scene.add(teclado_18);
	//mouse

	const mouse_18 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_18.position.x = -0.7 + -1.27 + 4.34;
	mouse_18.position.y = -2.2 + 1.88;
	mouse_18.position.z = 0.73;
	scene.add(mouse_18);
	//silla


	const silla1_18 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_18.position.x = -0.7 + -1.7 + 4.34;
	silla1_18.position.y = -2.2 + 1.3;
	silla1_18.position.z = 0.45;
	scene.add(silla1_18);
	// patas silla

	const pata1S_18 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_18.position.x = -0.7 + -1.7 + 4.34;
	pata1S_18.position.y = -2.2 + 1.6;
	pata1S_18.position.z = 0.225;
	scene.add(pata1S_18);

	const pata2S_18 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_18.position.x = -0.7 + -1.4 + 4.34;
	pata2S_18.position.y = -2.2 + 1.6;
	pata2S_18.position.z = 0.225;
	scene.add(pata2S_18);

	const pata3S_18 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_18.position.x = -0.7 + -1.4 + 4.34;
	pata3S_18.position.y = -2.2 + 1.26;
	pata3S_18.position.z = 0.45;
	scene.add(pata3S_18);

	const pata4S_18 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_18.position.x = -0.7 + -1.7 + 4.34;
	pata4S_18.position.y = -2.2 + 1.26;
	pata4S_18.position.z = 0.45;
	scene.add(pata4S_18);

	const silla2_18 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_18.position.x = -0.7 + -1.7 + 4.34;
	silla2_18.position.y = -2.2 + 1.26;
	silla2_18.position.z = 0.7;
	scene.add(silla2_18);

	//mesa19-------------------------------------------------------

	const mesa_19 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_19.position.x = -0.7 + -1.5;
	mesa_19.position.y = -3.3 + 2;
	mesa_19.position.z = 0.7;
	scene.add(mesa_19);
	//patas 1

	const pata1_19 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_19.position.x = -0.7 + -1.80;
	pata1_19.position.y = -3.3 + 2.2;
	pata1_19.position.z = 0.35;
	scene.add(pata1_19);

	const pata2_19 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_19.position.x = -0.7 + -1.2;
	pata2_19.position.y = -3.3 + 2.2;
	pata2_19.position.z = 0.35;
	scene.add(pata2_19);

	const pata3_19 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_19.position.x = -0.7 + -1.20;
	pata3_19.position.y = -3.3 + 1.8;
	pata3_19.position.z = 0.35;
	scene.add(pata3_19);

	const pata4_19 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_19.position.x = -0.7 + -1.80;
	pata4_19.position.y = -3.3 + 1.8;
	pata4_19.position.z = 0.35;
	scene.add(pata4_19);

	const pata5_19 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_19.position.x = -0.7 + -1.43;
	pata5_19.position.y = -3.3 + 2.1;
	pata5_19.position.z = 0.35;
	scene.add(pata5_19);

	const pata6_19 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_19.position.x = -0.7 + -1.43;
	pata6_19.position.y = -3.3 + 1.9;
	pata6_19.position.z = 0.35;
	scene.add(pata6_19);
	// repisa

	const repisa_19 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_19.position.x = -0.7 + -1.325;
	repisa_19.position.y = -3.3 + 2;
	repisa_19.position.z = 0.1;
	scene.add(repisa_19);
	// pc

	const PC_19 = new THREE.Mesh(geometryPC, materialPC);
	PC_19.position.x = -0.7 + -1.325;
	PC_19.position.y = -3.3 + 2;
	PC_19.position.z = 0.3;
	scene.add(PC_19);
	//monitor
	const monitor_19 = new THREE.Mesh(geometryMon, materialMon);
	monitor_19.position.x = -0.7 + -1.5;
	monitor_19.position.y = -3.3 + 2;
	monitor_19.position.z = 0.95;
	scene.add(monitor_19);

	const Base1_19 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_19.position.x = -0.7 + -1.5;
	Base1_19.position.y = -3.3 + 2.02;
	Base1_19.position.z = 0.825;
	scene.add(Base1_19);

	const Base2_19 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_19.position.x = -0.7 + -1.5;
	Base2_19.position.y = -3.3 + 2.02;
	Base2_19.position.z = 0.72;
	scene.add(Base2_19);

	const pantalla_19 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_19.position.x = -0.7 + -1.5;
	pantalla_19.position.y = -3.3 + 1.989;
	pantalla_19.position.z = 0.95;
	scene.add(pantalla_19);

	// teclado
	const teclado_19 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_19.position.x = -0.7 + -1.55;
	teclado_19.position.y = -3.3 + 1.88;
	teclado_19.position.z = 0.73;
	scene.add(teclado_19);
	//mouse

	const mouse_19 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_19.position.x = -0.7 + -1.27;
	mouse_19.position.y = -3.3 + 1.88;
	mouse_19.position.z = 0.73;
	scene.add(mouse_19);
	//silla


	const silla1_19 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_19.position.x = -0.7 + -1.7;
	silla1_19.position.y = -3.3 + 1.3;
	silla1_19.position.z = 0.45;
	scene.add(silla1_19);
	// patas silla

	const pata1S_19 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_19.position.x = -0.7 + -1.7;
	pata1S_19.position.y = -3.3 + 1.6;
	pata1S_19.position.z = 0.225;
	scene.add(pata1S_19);

	const pata2S_19 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_19.position.x = -0.7 + -1.4;
	pata2S_19.position.y = -3.3 + 1.6;
	pata2S_19.position.z = 0.225;
	scene.add(pata2S_19);

	const pata3S_19 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_19.position.x = -0.7 + -1.4;
	pata3S_19.position.y = -3.3 + 1.26;
	pata3S_19.position.z = 0.45;
	scene.add(pata3S_19);

	const pata4S_19 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_19.position.x = -0.7 + -1.7;
	pata4S_19.position.y = -3.3 + 1.26;
	pata4S_19.position.z = 0.45;
	scene.add(pata4S_19);

	const silla2_19 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_19.position.x = -0.7 + -1.7;
	silla2_19.position.y = -3.3 + 1.26;
	silla2_19.position.z = 0.7;
	scene.add(silla2_19);


	//mesa20-------------------------------------------------------

	const mesa_20 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_20.position.x = -0.7 + -1.5 + 0.71;
	mesa_20.position.y = -3.3 + 2;
	mesa_20.position.z = 0.7;
	scene.add(mesa_20);
	//patas 1

	const pata1_20 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_20.position.x = -0.7 + -1.80 + 0.71;
	pata1_20.position.y = -3.3 + 2.2;
	pata1_20.position.z = 0.35;
	scene.add(pata1_20);

	const pata2_20 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_20.position.x = -0.7 + -1.2 + 0.71;
	pata2_20.position.y = -3.3 + 2.2;
	pata2_20.position.z = 0.35;
	scene.add(pata2_20);

	const pata3_20 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_20.position.x = -0.7 + -1.20 + 0.71;
	pata3_20.position.y = -3.3 + 1.8;
	pata3_20.position.z = 0.35;
	scene.add(pata3_20);

	const pata4_20 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_20.position.x = -0.7 + -1.80 + 0.71;
	pata4_20.position.y = -3.3 + 1.8;
	pata4_20.position.z = 0.35;
	scene.add(pata4_20);

	const pata5_20 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_20.position.x = -0.7 + -1.43 + 0.71;
	pata5_20.position.y = -3.3 + 2.1;
	pata5_20.position.z = 0.35;
	scene.add(pata5_20);

	const pata6_20 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_20.position.x = -0.7 + -1.43 + 0.71;
	pata6_20.position.y = -3.3 + 1.9;
	pata6_20.position.z = 0.35;
	scene.add(pata6_20);
	// repisa

	const repisa_20 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_20.position.x = -0.7 + -1.325 + 0.71;
	repisa_20.position.y = -3.3 + 2;
	repisa_20.position.z = 0.1;
	scene.add(repisa_20);
	// pc

	const PC_20 = new THREE.Mesh(geometryPC, materialPC);
	PC_20.position.x = -0.7 + -1.325 + 0.71;
	PC_20.position.y = -3.3 + 2;
	PC_20.position.z = 0.3;
	scene.add(PC_20);
	//monitor
	const monitor_20 = new THREE.Mesh(geometryMon, materialMon);
	monitor_20.position.x = -0.7 + -1.5 + 0.71;
	monitor_20.position.y = -3.3 + 2;
	monitor_20.position.z = 0.95;
	scene.add(monitor_20);

	const Base1_20 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_20.position.x = -0.7 + -1.5 + 0.71;
	Base1_20.position.y = -3.3 + 2.02;
	Base1_20.position.z = 0.825;
	scene.add(Base1_20);

	const Base2_20 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_20.position.x = -0.7 + -1.5 + 0.71;
	Base2_20.position.y = -3.3 + 2.02;
	Base2_20.position.z = 0.72;
	scene.add(Base2_20);

	const pantalla_20 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_20.position.x = -0.7 + -1.5 + 0.71;
	pantalla_20.position.y = -3.3 + 1.989;
	pantalla_20.position.z = 0.95;
	scene.add(pantalla_20);

	// teclado
	const teclado_20 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_20.position.x = -0.7 + -1.55 + 0.71;
	teclado_20.position.y = -3.3 + 1.88;
	teclado_20.position.z = 0.73;
	scene.add(teclado_20);
	//mouse

	const mouse_20 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_20.position.x = -0.7 + -1.27 + 0.71;
	mouse_20.position.y = -3.3 + 1.88;
	mouse_20.position.z = 0.73;
	scene.add(mouse_20);
	//silla


	const silla1_20 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_20.position.x = -0.7 + -1.7 + 0.71;
	silla1_20.position.y = -3.3 + 1.3;
	silla1_20.position.z = 0.45;
	scene.add(silla1_20);
	// patas silla

	const pata1S_20 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_20.position.x = -0.7 + -1.7 + 0.71;
	pata1S_20.position.y = -3.3 + 1.6;
	pata1S_20.position.z = 0.225;
	scene.add(pata1S_20);

	const pata2S_20 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_20.position.x = -0.7 + -1.4 + 0.71;
	pata2S_20.position.y = -3.3 + 1.6;
	pata2S_20.position.z = 0.225;
	scene.add(pata2S_20);

	const pata3S_20 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_20.position.x = -0.7 + -1.4 + 0.71;
	pata3S_20.position.y = -3.3 + 1.26;
	pata3S_20.position.z = 0.45;
	scene.add(pata3S_20);

	const pata4S_20 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_20.position.x = -0.7 + -1.7 + 0.71;
	pata4S_20.position.y = -3.3 + 1.26;
	pata4S_20.position.z = 0.45;
	scene.add(pata4S_20);

	const silla2_20 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_20.position.x = -0.7 + -1.7 + 0.71;
	silla2_20.position.y = -3.3 + 1.26;
	silla2_20.position.z = 0.7;
	scene.add(silla2_20);

	//mesa21-------------------------------------------------------

	const mesa_21 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_21.position.x = -0.7 + -1.5 + 1.42;
	mesa_21.position.y = -3.3 + 2;
	mesa_21.position.z = 0.7;
	scene.add(mesa_21);
	//patas 1

	const pata1_21 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_21.position.x = -0.7 + -1.80 + 1.42;
	pata1_21.position.y = -3.3 + 2.2;
	pata1_21.position.z = 0.35;
	scene.add(pata1_21);

	const pata2_21 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_21.position.x = -0.7 + -1.2 + 1.42;
	pata2_21.position.y = -3.3 + 2.2;
	pata2_21.position.z = 0.35;
	scene.add(pata2_21);

	const pata3_21 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_21.position.x = -0.7 + -1.20 + 1.42;
	pata3_21.position.y = -3.3 + 1.8;
	pata3_21.position.z = 0.35;
	scene.add(pata3_21);

	const pata4_21 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_21.position.x = -0.7 + -1.80 + 1.42;
	pata4_21.position.y = -3.3 + 1.8;
	pata4_21.position.z = 0.35;
	scene.add(pata4_21);

	const pata5_21 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_21.position.x = -0.7 + -1.43 + 1.42;
	pata5_21.position.y = -3.3 + 2.1;
	pata5_21.position.z = 0.35;
	scene.add(pata5_21);

	const pata6_21 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_21.position.x = -0.7 + -1.43 + 1.42;
	pata6_21.position.y = -3.3 + 1.9;
	pata6_21.position.z = 0.35;
	scene.add(pata6_21);
	// repisa

	const repisa_21 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_21.position.x = -0.7 + -1.325 + 1.42;
	repisa_21.position.y = -3.3 + 2;
	repisa_21.position.z = 0.1;
	scene.add(repisa_21);
	// pc

	const PC_21 = new THREE.Mesh(geometryPC, materialPC);
	PC_21.position.x = -0.7 + -1.325 + 1.42;
	PC_21.position.y = -3.3 + 2;
	PC_21.position.z = 0.3;
	scene.add(PC_21);
	//monitor
	const monitor_21 = new THREE.Mesh(geometryMon, materialMon);
	monitor_21.position.x = -0.7 + -1.5 + 1.42;
	monitor_21.position.y = -3.3 + 2;
	monitor_21.position.z = 0.95;
	scene.add(monitor_21);

	const Base1_21 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_21.position.x = -0.7 + -1.5 + 1.42;
	Base1_21.position.y = -3.3 + 2.02;
	Base1_21.position.z = 0.825;
	scene.add(Base1_21);

	const Base2_21 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_21.position.x = -0.7 + -1.5 + 1.42;
	Base2_21.position.y = -3.3 + 2.02;
	Base2_21.position.z = 0.72;
	scene.add(Base2_21);

	const pantalla_21 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_21.position.x = -0.7 + -1.5 + 1.42;
	pantalla_21.position.y = -3.3 + 1.989;
	pantalla_21.position.z = 0.95;
	scene.add(pantalla_21);

	// teclado
	const teclado_21 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_21.position.x = -0.7 + -1.55 + 1.42;
	teclado_21.position.y = -3.3 + 1.88;
	teclado_21.position.z = 0.73;
	scene.add(teclado_21);
	//mouse

	const mouse_21 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_21.position.x = -0.7 + -1.27 + 1.42;
	mouse_21.position.y = -3.3 + 1.88;
	mouse_21.position.z = 0.73;
	scene.add(mouse_21);
	//silla


	const silla1_21 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_21.position.x = -0.7 + -1.7 + 1.42;
	silla1_21.position.y = -3.3 + 1.3;
	silla1_21.position.z = 0.45;
	scene.add(silla1_21);
	// patas silla

	const pata1S_21 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_21.position.x = -0.7 + -1.7 + 1.42;
	pata1S_21.position.y = -3.3 + 1.6;
	pata1S_21.position.z = 0.225;
	scene.add(pata1S_21);

	const pata2S_21 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_21.position.x = -0.7 + -1.4 + 1.42;
	pata2S_21.position.y = -3.3 + 1.6;
	pata2S_21.position.z = 0.225;
	scene.add(pata2S_21);

	const pata3S_21 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_21.position.x = -0.7 + -1.4 + 1.42;
	pata3S_21.position.y = -3.3 + 1.26;
	pata3S_21.position.z = 0.45;
	scene.add(pata3S_21);

	const pata4S_21 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_21.position.x = -0.7 + -1.7 + 1.42;
	pata4S_21.position.y = -3.3 + 1.26;
	pata4S_21.position.z = 0.45;
	scene.add(pata4S_21);

	const silla2_21 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_21.position.x = -0.7 + -1.7 + 1.42;
	silla2_21.position.y = -3.3 + 1.26;
	silla2_21.position.z = 0.7;
	scene.add(silla2_21);

	//mesa22-------------------------------------------------------

	const mesa_22 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_22.position.x = -0.7 + -1.5 + 2.92;
	mesa_22.position.y = -3.3 + 2;
	mesa_22.position.z = 0.7;
	scene.add(mesa_22);
	//patas 1

	const pata1_22 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_22.position.x = -0.7 + -1.80 + 2.92;
	pata1_22.position.y = -3.3 + 2.2;
	pata1_22.position.z = 0.35;
	scene.add(pata1_22);

	const pata2_22 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_22.position.x = -0.7 + -1.2 + 2.92;
	pata2_22.position.y = -3.3 + 2.2;
	pata2_22.position.z = 0.35;
	scene.add(pata2_22);

	const pata3_22 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_22.position.x = -0.7 + -1.20 + 2.92;
	pata3_22.position.y = -3.3 + 1.8;
	pata3_22.position.z = 0.35;
	scene.add(pata3_22);

	const pata4_22 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_22.position.x = -0.7 + -1.80 + 2.92;
	pata4_22.position.y = -3.3 + 1.8;
	pata4_22.position.z = 0.35;
	scene.add(pata4_22);

	const pata5_22 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_22.position.x = -0.7 + -1.43 + 2.92;
	pata5_22.position.y = -3.3 + 2.1;
	pata5_22.position.z = 0.35;
	scene.add(pata5_22);

	const pata6_22 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_22.position.x = -0.7 + -1.43 + 2.92;
	pata6_22.position.y = -3.3 + 1.9;
	pata6_22.position.z = 0.35;
	scene.add(pata6_22);
	// repisa

	const repisa_22 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_22.position.x = -0.7 + -1.325 + 2.92;
	repisa_22.position.y = -3.3 + 2;
	repisa_22.position.z = 0.1;
	scene.add(repisa_22);
	// pc

	const PC_22 = new THREE.Mesh(geometryPC, materialPC);
	PC_22.position.x = -0.7 + -1.325 + 2.92;
	PC_22.position.y = -3.3 + 2;
	PC_22.position.z = 0.3;
	scene.add(PC_22);
	//monitor
	const monitor_22 = new THREE.Mesh(geometryMon, materialMon);
	monitor_22.position.x = -0.7 + -1.5 + 2.92;
	monitor_22.position.y = -3.3 + 2;
	monitor_22.position.z = 0.95;
	scene.add(monitor_22);

	const Base1_22 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_22.position.x = -0.7 + -1.5 + 2.92;
	Base1_22.position.y = -3.3 + 2.02;
	Base1_22.position.z = 0.825;
	scene.add(Base1_22);

	const Base2_22 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_22.position.x = -0.7 + -1.5 + 2.92;
	Base2_22.position.y = -3.3 + 2.02;
	Base2_22.position.z = 0.72;
	scene.add(Base2_22);

	const pantalla_22 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_22.position.x = -0.7 + -1.5 + 2.92;
	pantalla_22.position.y = -3.3 + 1.989;
	pantalla_22.position.z = 0.95;
	scene.add(pantalla_22);

	// teclado
	const teclado_22 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_22.position.x = -0.7 + -1.55 + 2.92;
	teclado_22.position.y = -3.3 + 1.88;
	teclado_22.position.z = 0.73;
	scene.add(teclado_22);
	//mouse

	const mouse_22 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_22.position.x = -0.7 + -1.27 + 2.92;
	mouse_22.position.y = -3.3 + 1.88;
	mouse_22.position.z = 0.73;
	scene.add(mouse_22);
	//silla


	const silla1_22 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_22.position.x = -0.7 + -1.7 + 2.92;
	silla1_22.position.y = -3.3 + 1.3;
	silla1_22.position.z = 0.45;
	scene.add(silla1_22);
	// patas silla

	const pata1S_22 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_22.position.x = -0.7 + -1.7 + 2.92;
	pata1S_22.position.y = -3.3 + 1.6;
	pata1S_22.position.z = 0.225;
	scene.add(pata1S_22);

	const pata2S_22 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_22.position.x = -0.7 + -1.4 + 2.92;
	pata2S_22.position.y = -3.3 + 1.6;
	pata2S_22.position.z = 0.225;
	scene.add(pata2S_22);

	const pata3S_22 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_22.position.x = -0.7 + -1.4 + 2.92;
	pata3S_22.position.y = -3.3 + 1.26;
	pata3S_22.position.z = 0.45;
	scene.add(pata3S_22);

	const pata4S_22 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_22.position.x = -0.7 + -1.7 + 2.92;
	pata4S_22.position.y = -3.3 + 1.26;
	pata4S_22.position.z = 0.45;
	scene.add(pata4S_22);

	const silla2_22 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_22.position.x = -0.7 + -1.7 + 2.92;
	silla2_22.position.y = -3.3 + 1.26;
	silla2_22.position.z = 0.7;
	scene.add(silla2_22);

	//mesa23-------------------------------------------------------

	const mesa_23 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_23.position.x = -0.7 + -1.5 + 3.63;
	mesa_23.position.y = -3.3 + 2;
	mesa_23.position.z = 0.7;
	scene.add(mesa_23);
	//patas 1

	const pata1_23 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_23.position.x = -0.7 + -1.80 + 3.63;
	pata1_23.position.y = -3.3 + 2.2;
	pata1_23.position.z = 0.35;
	scene.add(pata1_23);

	const pata2_23 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_23.position.x = -0.7 + -1.2 + 3.63;
	pata2_23.position.y = -3.3 + 2.2;
	pata2_23.position.z = 0.35;
	scene.add(pata2_23);

	const pata3_23 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_23.position.x = -0.7 + -1.20 + 3.63;
	pata3_23.position.y = -3.3 + 1.8;
	pata3_23.position.z = 0.35;
	scene.add(pata3_23);

	const pata4_23 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_23.position.x = -0.7 + -1.80 + 3.63;
	pata4_23.position.y = -3.3 + 1.8;
	pata4_23.position.z = 0.35;
	scene.add(pata4_23);

	const pata5_23 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_23.position.x = -0.7 + -1.43 + 3.63;
	pata5_23.position.y = -3.3 + 2.1;
	pata5_23.position.z = 0.35;
	scene.add(pata5_23);

	const pata6_23 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_23.position.x = -0.7 + -1.43 + 3.63;
	pata6_23.position.y = -3.3 + 1.9;
	pata6_23.position.z = 0.35;
	scene.add(pata6_23);
	// repisa

	const repisa_23 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_23.position.x = -0.7 + -1.325 + 3.63;
	repisa_23.position.y = -3.3 + 2;
	repisa_23.position.z = 0.1;
	scene.add(repisa_23);
	// pc

	const PC_23 = new THREE.Mesh(geometryPC, materialPC);
	PC_23.position.x = -0.7 + -1.325 + 3.63;
	PC_23.position.y = -3.3 + 2;
	PC_23.position.z = 0.3;
	scene.add(PC_23);
	//monitor
	const monitor_23 = new THREE.Mesh(geometryMon, materialMon);
	monitor_23.position.x = -0.7 + -1.5 + 3.63;
	monitor_23.position.y = -3.3 + 2;
	monitor_23.position.z = 0.95;
	scene.add(monitor_23);

	const Base1_23 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_23.position.x = -0.7 + -1.5 + 3.63;
	Base1_23.position.y = -3.3 + 2.02;
	Base1_23.position.z = 0.825;
	scene.add(Base1_23);

	const Base2_23 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_23.position.x = -0.7 + -1.5 + 3.63;
	Base2_23.position.y = -3.3 + 2.02;
	Base2_23.position.z = 0.72;
	scene.add(Base2_23);

	const pantalla_23 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_23.position.x = -0.7 + -1.5 + 3.63;
	pantalla_23.position.y = -3.3 + 1.989;
	pantalla_23.position.z = 0.95;
	scene.add(pantalla_23);

	// teclado
	const teclado_23 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_23.position.x = -0.7 + -1.55 + 3.63;
	teclado_23.position.y = -3.3 + 1.88;
	teclado_23.position.z = 0.73;
	scene.add(teclado_23);
	//mouse

	const mouse_23 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_23.position.x = -0.7 + -1.27 + 3.63;
	mouse_23.position.y = -3.3 + 1.88;
	mouse_23.position.z = 0.73;
	scene.add(mouse_23);
	//silla


	const silla1_23 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_23.position.x = -0.7 + -1.7 + 3.63;
	silla1_23.position.y = -3.3 + 1.3;
	silla1_23.position.z = 0.45;
	scene.add(silla1_23);
	// patas silla

	const pata1S_23 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_23.position.x = -0.7 + -1.7 + 3.63;
	pata1S_23.position.y = -3.3 + 1.6;
	pata1S_23.position.z = 0.225;
	scene.add(pata1S_23);

	const pata2S_23 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_23.position.x = -0.7 + -1.4 + 3.63;
	pata2S_23.position.y = -3.3 + 1.6;
	pata2S_23.position.z = 0.225;
	scene.add(pata2S_23);

	const pata3S_23 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_23.position.x = -0.7 + -1.4 + 3.63;
	pata3S_23.position.y = -3.3 + 1.26;
	pata3S_23.position.z = 0.45;
	scene.add(pata3S_23);

	const pata4S_23 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_23.position.x = -0.7 + -1.7 + 3.63;
	pata4S_23.position.y = -3.3 + 1.26;
	pata4S_23.position.z = 0.45;
	scene.add(pata4S_23);

	const silla2_23 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_23.position.x = -0.7 + -1.7 + 3.63;
	silla2_23.position.y = -3.3 + 1.26;
	silla2_23.position.z = 0.7;
	scene.add(silla2_23);
	//mesa24-------------------------------------------------------

	const mesa_24 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_24.position.x = -0.7 + -1.5 + 4.34;
	mesa_24.position.y = -3.3 + 2;
	mesa_24.position.z = 0.7;
	scene.add(mesa_24);
	//patas 1

	const pata1_24 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_24.position.x = -0.7 + -1.80 + 4.34;
	pata1_24.position.y = -3.3 + 2.2;
	pata1_24.position.z = 0.35;
	scene.add(pata1_24);

	const pata2_24 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_24.position.x = -0.7 + -1.2 + 4.34;
	pata2_24.position.y = -3.3 + 2.2;
	pata2_24.position.z = 0.35;
	scene.add(pata2_24);

	const pata3_24 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_24.position.x = -0.7 + -1.20 + 4.34;
	pata3_24.position.y = -3.3 + 1.8;
	pata3_24.position.z = 0.35;
	scene.add(pata3_24);

	const pata4_24 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_24.position.x = -0.7 + -1.80 + 4.34;
	pata4_24.position.y = -3.3 + 1.8;
	pata4_24.position.z = 0.35;
	scene.add(pata4_24);

	const pata5_24 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_24.position.x = -0.7 + -1.43 + 4.34;
	pata5_24.position.y = -3.3 + 2.1;
	pata5_24.position.z = 0.35;
	scene.add(pata5_24);

	const pata6_24 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_24.position.x = -0.7 + -1.43 + 4.34;
	pata6_24.position.y = -3.3 + 1.9;
	pata6_24.position.z = 0.35;
	scene.add(pata6_24);
	// repisa

	const repisa_24 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_24.position.x = -0.7 + -1.325 + 4.34;
	repisa_24.position.y = -3.3 + 2;
	repisa_24.position.z = 0.1;
	scene.add(repisa_24);
	// pc

	const PC_24 = new THREE.Mesh(geometryPC, materialPC);
	PC_24.position.x = -0.7 + -1.325 + 4.34;
	PC_24.position.y = -3.3 + 2;
	PC_24.position.z = 0.3;
	scene.add(PC_24);
	//monitor
	const monitor_24 = new THREE.Mesh(geometryMon, materialMon);
	monitor_24.position.x = -0.7 + -1.5 + 4.34;
	monitor_24.position.y = -3.3 + 2;
	monitor_24.position.z = 0.95;
	scene.add(monitor_24);

	const Base1_24 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_24.position.x = -0.7 + -1.5 + 4.34;
	Base1_24.position.y = -3.3 + 2.02;
	Base1_24.position.z = 0.825;
	scene.add(Base1_24);

	const Base2_24 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_24.position.x = -0.7 + -1.5 + 4.34;
	Base2_24.position.y = -3.3 + 2.02;
	Base2_24.position.z = 0.72;
	scene.add(Base2_24);

	const pantalla_24 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_24.position.x = -0.7 + -1.5 + 4.34;
	pantalla_24.position.y = -3.3 + 1.989;
	pantalla_24.position.z = 0.95;
	scene.add(pantalla_24);

	// teclado
	const teclado_24 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_24.position.x = -0.7 + -1.55 + 4.34;
	teclado_24.position.y = -3.3 + 1.88;
	teclado_24.position.z = 0.73;
	scene.add(teclado_24);
	//mouse

	const mouse_24 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_24.position.x = -0.7 + -1.27 + 4.34;
	mouse_24.position.y = -3.3 + 1.88;
	mouse_24.position.z = 0.73;
	scene.add(mouse_24);
	//silla


	const silla1_24 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_24.position.x = -0.7 + -1.7 + 4.34;
	silla1_24.position.y = -3.3 + 1.3;
	silla1_24.position.z = 0.45;
	scene.add(silla1_24);
	// patas silla

	const pata1S_24 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_24.position.x = -0.7 + -1.7 + 4.34;
	pata1S_24.position.y = -3.3 + 1.6;
	pata1S_24.position.z = 0.225;
	scene.add(pata1S_24);

	const pata2S_24 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_24.position.x = -0.7 + -1.4 + 4.34;
	pata2S_24.position.y = -3.3 + 1.6;
	pata2S_24.position.z = 0.225;
	scene.add(pata2S_24);

	const pata3S_24 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_24.position.x = -0.7 + -1.4 + 4.34;
	pata3S_24.position.y = -3.3 + 1.26;
	pata3S_24.position.z = 0.45;
	scene.add(pata3S_24);

	const pata4S_24 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_24.position.x = -0.7 + -1.7 + 4.34;
	pata4S_24.position.y = -3.3 + 1.26;
	pata4S_24.position.z = 0.45;
	scene.add(pata4S_24);

	const silla2_24 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_24.position.x = -0.7 + -1.7 + 4.34;
	silla2_24.position.y = -3.3 + 1.26;
	silla2_24.position.z = 0.7;
	scene.add(silla2_24);


	//mesa25-------------------------------------------------------

	const mesa_25 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_25.position.x = -0.7 + -1.5;
	mesa_25.position.y = -4.4 + 2;
	mesa_25.position.z = 0.7;
	scene.add(mesa_25);
	//patas 1

	const pata1_25 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_25.position.x = -0.7 + -1.80;
	pata1_25.position.y = -4.4 + 2.2;
	pata1_25.position.z = 0.35;
	scene.add(pata1_25);

	const pata2_25 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_25.position.x = -0.7 + -1.2;
	pata2_25.position.y = -4.4 + 2.2;
	pata2_25.position.z = 0.35;
	scene.add(pata2_25);

	const pata3_25 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_25.position.x = -0.7 + -1.20;
	pata3_25.position.y = -4.4 + 1.8;
	pata3_25.position.z = 0.35;
	scene.add(pata3_25);

	const pata4_25 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_25.position.x = -0.7 + -1.80;
	pata4_25.position.y = -4.4 + 1.8;
	pata4_25.position.z = 0.35;
	scene.add(pata4_25);

	const pata5_25 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_25.position.x = -0.7 + -1.43;
	pata5_25.position.y = -4.4 + 2.1;
	pata5_25.position.z = 0.35;
	scene.add(pata5_25);

	const pata6_25 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_25.position.x = -0.7 + -1.43;
	pata6_25.position.y = -4.4 + 1.9;
	pata6_25.position.z = 0.35;
	scene.add(pata6_25);
	// repisa

	const repisa_25 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_25.position.x = -0.7 + -1.325;
	repisa_25.position.y = -4.4 + 2;
	repisa_25.position.z = 0.1;
	scene.add(repisa_25);
	// pc

	const PC_25 = new THREE.Mesh(geometryPC, materialPC);
	PC_25.position.x = -0.7 + -1.325;
	PC_25.position.y = -4.4 + 2;
	PC_25.position.z = 0.3;
	scene.add(PC_25);
	//monitor
	const monitor_25 = new THREE.Mesh(geometryMon, materialMon);
	monitor_25.position.x = -0.7 + -1.5;
	monitor_25.position.y = -4.4 + 2;
	monitor_25.position.z = 0.95;
	scene.add(monitor_25);

	const Base1_25 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_25.position.x = -0.7 + -1.5;
	Base1_25.position.y = -4.4 + 2.02;
	Base1_25.position.z = 0.825;
	scene.add(Base1_25);

	const Base2_25 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_25.position.x = -0.7 + -1.5;
	Base2_25.position.y = -4.4 + 2.02;
	Base2_25.position.z = 0.72;
	scene.add(Base2_25);

	const pantalla_25 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_25.position.x = -0.7 + -1.5;
	pantalla_25.position.y = -4.4 + 1.989;
	pantalla_25.position.z = 0.95;
	scene.add(pantalla_25);

	// teclado
	const teclado_25 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_25.position.x = -0.7 + -1.55;
	teclado_25.position.y = -4.4 + 1.88;
	teclado_25.position.z = 0.73;
	scene.add(teclado_25);
	//mouse

	const mouse_25 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_25.position.x = -0.7 + -1.27;
	mouse_25.position.y = -4.4 + 1.88;
	mouse_25.position.z = 0.73;
	scene.add(mouse_25);
	//silla


	const silla1_25 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_25.position.x = -0.7 + -1.7;
	silla1_25.position.y = -4.4 + 1.3;
	silla1_25.position.z = 0.45;
	scene.add(silla1_25);
	// patas silla

	const pata1S_25 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_25.position.x = -0.7 + -1.7;
	pata1S_25.position.y = -4.4 + 1.6;
	pata1S_25.position.z = 0.225;
	scene.add(pata1S_25);

	const pata2S_25 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_25.position.x = -0.7 + -1.4;
	pata2S_25.position.y = -4.4 + 1.6;
	pata2S_25.position.z = 0.225;
	scene.add(pata2S_25);

	const pata3S_25 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_25.position.x = -0.7 + -1.4;
	pata3S_25.position.y = -4.4 + 1.26;
	pata3S_25.position.z = 0.45;
	scene.add(pata3S_25);

	const pata4S_25 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_25.position.x = -0.7 + -1.7;
	pata4S_25.position.y = -4.4 + 1.26;
	pata4S_25.position.z = 0.45;
	scene.add(pata4S_25);

	const silla2_25 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_25.position.x = -0.7 + -1.7;
	silla2_25.position.y = -4.4 + 1.26;
	silla2_25.position.z = 0.7;
	scene.add(silla2_25);


	//mesa26-------------------------------------------------------

	const mesa_26 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_26.position.x = -0.7 + -1.5 + 0.71;
	mesa_26.position.y = -4.4 + 2;
	mesa_26.position.z = 0.7;
	scene.add(mesa_26);
	//patas 1

	const pata1_26 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_26.position.x = -0.7 + -1.80 + 0.71;
	pata1_26.position.y = -4.4 + 2.2;
	pata1_26.position.z = 0.35;
	scene.add(pata1_26);

	const pata2_26 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_26.position.x = -0.7 + -1.2 + 0.71;
	pata2_26.position.y = -4.4 + 2.2;
	pata2_26.position.z = 0.35;
	scene.add(pata2_26);

	const pata3_26 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_26.position.x = -0.7 + -1.20 + 0.71;
	pata3_26.position.y = -4.4 + 1.8;
	pata3_26.position.z = 0.35;
	scene.add(pata3_26);

	const pata4_26 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_26.position.x = -0.7 + -1.80 + 0.71;
	pata4_26.position.y = -4.4 + 1.8;
	pata4_26.position.z = 0.35;
	scene.add(pata4_26);

	const pata5_26 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_26.position.x = -0.7 + -1.43 + 0.71;
	pata5_26.position.y = -4.4 + 2.1;
	pata5_26.position.z = 0.35;
	scene.add(pata5_26);

	const pata6_26 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_26.position.x = -0.7 + -1.43 + 0.71;
	pata6_26.position.y = -4.4 + 1.9;
	pata6_26.position.z = 0.35;
	scene.add(pata6_26);
	// repisa

	const repisa_26 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_26.position.x = -0.7 + -1.325 + 0.71;
	repisa_26.position.y = -4.4 + 2;
	repisa_26.position.z = 0.1;
	scene.add(repisa_26);
	// pc

	const PC_26 = new THREE.Mesh(geometryPC, materialPC);
	PC_26.position.x = -0.7 + -1.325 + 0.71;
	PC_26.position.y = -4.4 + 2;
	PC_26.position.z = 0.3;
	scene.add(PC_26);
	//monitor
	const monitor_26 = new THREE.Mesh(geometryMon, materialMon);
	monitor_26.position.x = -0.7 + -1.5 + 0.71;
	monitor_26.position.y = -4.4 + 2;
	monitor_26.position.z = 0.95;
	scene.add(monitor_26);

	const Base1_26 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_26.position.x = -0.7 + -1.5 + 0.71;
	Base1_26.position.y = -4.4 + 2.02;
	Base1_26.position.z = 0.825;
	scene.add(Base1_26);

	const Base2_26 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_26.position.x = -0.7 + -1.5 + 0.71;
	Base2_26.position.y = -4.4 + 2.02;
	Base2_26.position.z = 0.72;
	scene.add(Base2_26);

	const pantalla_26 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_26.position.x = -0.7 + -1.5 + 0.71;
	pantalla_26.position.y = -4.4 + 1.989;
	pantalla_26.position.z = 0.95;
	scene.add(pantalla_26);

	// teclado
	const teclado_26 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_26.position.x = -0.7 + -1.55 + 0.71;
	teclado_26.position.y = -4.4 + 1.88;
	teclado_26.position.z = 0.73;
	scene.add(teclado_26);
	//mouse

	const mouse_26 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_26.position.x = -0.7 + -1.27 + 0.71;
	mouse_26.position.y = -4.4 + 1.88;
	mouse_26.position.z = 0.73;
	scene.add(mouse_26);
	//silla


	const silla1_26 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_26.position.x = -0.7 + -1.7 + 0.71;
	silla1_26.position.y = -4.4 + 1.3;
	silla1_26.position.z = 0.45;
	scene.add(silla1_26);
	// patas silla

	const pata1S_26 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_26.position.x = -0.7 + -1.7 + 0.71;
	pata1S_26.position.y = -4.4 + 1.6;
	pata1S_26.position.z = 0.225;
	scene.add(pata1S_26);

	const pata2S_26 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_26.position.x = -0.7 + -1.4 + 0.71;
	pata2S_26.position.y = -4.4 + 1.6;
	pata2S_26.position.z = 0.225;
	scene.add(pata2S_26);

	const pata3S_26 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_26.position.x = -0.7 + -1.4 + 0.71;
	pata3S_26.position.y = -4.4 + 1.26;
	pata3S_26.position.z = 0.45;
	scene.add(pata3S_26);

	const pata4S_26 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_26.position.x = -0.7 + -1.7 + 0.71;
	pata4S_26.position.y = -4.4 + 1.26;
	pata4S_26.position.z = 0.45;
	scene.add(pata4S_26);

	const silla2_26 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_26.position.x = -0.7 + -1.7 + 0.71;
	silla2_26.position.y = -4.4 + 1.26;
	silla2_26.position.z = 0.7;
	scene.add(silla2_26);

	//mesa27-------------------------------------------------------

	const mesa_27 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_27.position.x = -0.7 + -1.5 + 1.42;
	mesa_27.position.y = -4.4 + 2;
	mesa_27.position.z = 0.7;
	scene.add(mesa_27);
	//patas 1

	const pata1_27 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_27.position.x = -0.7 + -1.80 + 1.42;
	pata1_27.position.y = -4.4 + 2.2;
	pata1_27.position.z = 0.35;
	scene.add(pata1_27);

	const pata2_27 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_27.position.x = -0.7 + -1.2 + 1.42;
	pata2_27.position.y = -4.4 + 2.2;
	pata2_27.position.z = 0.35;
	scene.add(pata2_27);

	const pata3_27 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_27.position.x = -0.7 + -1.20 + 1.42;
	pata3_27.position.y = -4.4 + 1.8;
	pata3_27.position.z = 0.35;
	scene.add(pata3_27);

	const pata4_27 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_27.position.x = -0.7 + -1.80 + 1.42;
	pata4_27.position.y = -4.4 + 1.8;
	pata4_27.position.z = 0.35;
	scene.add(pata4_27);

	const pata5_27 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_27.position.x = -0.7 + -1.43 + 1.42;
	pata5_27.position.y = -4.4 + 2.1;
	pata5_27.position.z = 0.35;
	scene.add(pata5_27);

	const pata6_27 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_27.position.x = -0.7 + -1.43 + 1.42;
	pata6_27.position.y = -4.4 + 1.9;
	pata6_27.position.z = 0.35;
	scene.add(pata6_27);
	// repisa

	const repisa_27 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_27.position.x = -0.7 + -1.325 + 1.42;
	repisa_27.position.y = -4.4 + 2;
	repisa_27.position.z = 0.1;
	scene.add(repisa_27);
	// pc

	const PC_27 = new THREE.Mesh(geometryPC, materialPC);
	PC_27.position.x = -0.7 + -1.325 + 1.42;
	PC_27.position.y = -4.4 + 2;
	PC_27.position.z = 0.3;
	scene.add(PC_27);
	//monitor
	const monitor_27 = new THREE.Mesh(geometryMon, materialMon);
	monitor_27.position.x = -0.7 + -1.5 + 1.42;
	monitor_27.position.y = -4.4 + 2;
	monitor_27.position.z = 0.95;
	scene.add(monitor_27);

	const Base1_27 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_27.position.x = -0.7 + -1.5 + 1.42;
	Base1_27.position.y = -4.4 + 2.02;
	Base1_27.position.z = 0.825;
	scene.add(Base1_27);

	const Base2_27 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_27.position.x = -0.7 + -1.5 + 1.42;
	Base2_27.position.y = -4.4 + 2.02;
	Base2_27.position.z = 0.72;
	scene.add(Base2_27);

	const pantalla_27 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_27.position.x = -0.7 + -1.5 + 1.42;
	pantalla_27.position.y = -4.4 + 1.989;
	pantalla_27.position.z = 0.95;
	scene.add(pantalla_27);

	// teclado
	const teclado_27 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_27.position.x = -0.7 + -1.55 + 1.42;
	teclado_27.position.y = -4.4 + 1.88;
	teclado_27.position.z = 0.73;
	scene.add(teclado_27);
	//mouse

	const mouse_27 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_27.position.x = -0.7 + -1.27 + 1.42;
	mouse_27.position.y = -4.4 + 1.88;
	mouse_27.position.z = 0.73;
	scene.add(mouse_27);
	//silla


	const silla1_27 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_27.position.x = -0.7 + -1.7 + 1.42;
	silla1_27.position.y = -4.4 + 1.3;
	silla1_27.position.z = 0.45;
	scene.add(silla1_27);
	// patas silla

	const pata1S_27 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_27.position.x = -0.7 + -1.7 + 1.42;
	pata1S_27.position.y = -4.4 + 1.6;
	pata1S_27.position.z = 0.225;
	scene.add(pata1S_27);

	const pata2S_27 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_27.position.x = -0.7 + -1.4 + 1.42;
	pata2S_27.position.y = -4.4 + 1.6;
	pata2S_27.position.z = 0.225;
	scene.add(pata2S_27);

	const pata3S_27 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_27.position.x = -0.7 + -1.4 + 1.42;
	pata3S_27.position.y = -4.4 + 1.26;
	pata3S_27.position.z = 0.45;
	scene.add(pata3S_27);

	const pata4S_27 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_27.position.x = -0.7 + -1.7 + 1.42;
	pata4S_27.position.y = -4.4 + 1.26;
	pata4S_27.position.z = 0.45;
	scene.add(pata4S_27);

	const silla2_27 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_27.position.x = -0.7 + -1.7 + 1.42;
	silla2_27.position.y = -4.4 + 1.26;
	silla2_27.position.z = 0.7;
	scene.add(silla2_27);

	//mesa28-------------------------------------------------------

	const mesa_28 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_28.position.x = -0.7 + -1.5 + 2.92;
	mesa_28.position.y = -4.4 + 2;
	mesa_28.position.z = 0.7;
	scene.add(mesa_28);
	//patas 1

	const pata1_28 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_28.position.x = -0.7 + -1.80 + 2.92;
	pata1_28.position.y = -4.4 + 2.2;
	pata1_28.position.z = 0.35;
	scene.add(pata1_28);

	const pata2_28 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_28.position.x = -0.7 + -1.2 + 2.92;
	pata2_28.position.y = -4.4 + 2.2;
	pata2_28.position.z = 0.35;
	scene.add(pata2_28);

	const pata3_28 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_28.position.x = -0.7 + -1.20 + 2.92;
	pata3_28.position.y = -4.4 + 1.8;
	pata3_28.position.z = 0.35;
	scene.add(pata3_28);

	const pata4_28 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_28.position.x = -0.7 + -1.80 + 2.92;
	pata4_28.position.y = -4.4 + 1.8;
	pata4_28.position.z = 0.35;
	scene.add(pata4_28);

	const pata5_28 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_28.position.x = -0.7 + -1.43 + 2.92;
	pata5_28.position.y = -4.4 + 2.1;
	pata5_28.position.z = 0.35;
	scene.add(pata5_28);

	const pata6_28 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_28.position.x = -0.7 + -1.43 + 2.92;
	pata6_28.position.y = -4.4 + 1.9;
	pata6_28.position.z = 0.35;
	scene.add(pata6_28);
	// repisa

	const repisa_28 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_28.position.x = -0.7 + -1.325 + 2.92;
	repisa_28.position.y = -4.4 + 2;
	repisa_28.position.z = 0.1;
	scene.add(repisa_28);
	// pc

	const PC_28 = new THREE.Mesh(geometryPC, materialPC);
	PC_28.position.x = -0.7 + -1.325 + 2.92;
	PC_28.position.y = -4.4 + 2;
	PC_28.position.z = 0.3;
	scene.add(PC_28);
	//monitor
	const monitor_28 = new THREE.Mesh(geometryMon, materialMon);
	monitor_28.position.x = -0.7 + -1.5 + 2.92;
	monitor_28.position.y = -4.4 + 2;
	monitor_28.position.z = 0.95;
	scene.add(monitor_28);

	const Base1_28 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_28.position.x = -0.7 + -1.5 + 2.92;
	Base1_28.position.y = -4.4 + 2.02;
	Base1_28.position.z = 0.825;
	scene.add(Base1_28);

	const Base2_28 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_28.position.x = -0.7 + -1.5 + 2.92;
	Base2_28.position.y = -4.4 + 2.02;
	Base2_28.position.z = 0.72;
	scene.add(Base2_28);

	const pantalla_28 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_28.position.x = -0.7 + -1.5 + 2.92;
	pantalla_28.position.y = -4.4 + 1.989;
	pantalla_28.position.z = 0.95;
	scene.add(pantalla_28);

	// teclado
	const teclado_28 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_28.position.x = -0.7 + -1.55 + 2.92;
	teclado_28.position.y = -4.4 + 1.88;
	teclado_28.position.z = 0.73;
	scene.add(teclado_28);
	//mouse

	const mouse_28 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_28.position.x = -0.7 + -1.27 + 2.92;
	mouse_28.position.y = -4.4 + 1.88;
	mouse_28.position.z = 0.73;
	scene.add(mouse_28);
	//silla


	const silla1_28 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_28.position.x = -0.7 + -1.7 + 2.92;
	silla1_28.position.y = -4.4 + 1.3;
	silla1_28.position.z = 0.45;
	scene.add(silla1_28);
	// patas silla

	const pata1S_28 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_28.position.x = -0.7 + -1.7 + 2.92;
	pata1S_28.position.y = -4.4 + 1.6;
	pata1S_28.position.z = 0.225;
	scene.add(pata1S_28);

	const pata2S_28 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_28.position.x = -0.7 + -1.4 + 2.92;
	pata2S_28.position.y = -4.4 + 1.6;
	pata2S_28.position.z = 0.225;
	scene.add(pata2S_28);

	const pata3S_28 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_28.position.x = -0.7 + -1.4 + 2.92;
	pata3S_28.position.y = -4.4 + 1.26;
	pata3S_28.position.z = 0.45;
	scene.add(pata3S_28);

	const pata4S_28 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_28.position.x = -0.7 + -1.7 + 2.92;
	pata4S_28.position.y = -4.4 + 1.26;
	pata4S_28.position.z = 0.45;
	scene.add(pata4S_28);

	const silla2_28 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_28.position.x = -0.7 + -1.7 + 2.92;
	silla2_28.position.y = -4.4 + 1.26;
	silla2_28.position.z = 0.7;
	scene.add(silla2_28);

	//mesa29-------------------------------------------------------

	const mesa_29 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_29.position.x = -0.7 + -1.5 + 3.63;
	mesa_29.position.y = -4.4 + 2;
	mesa_29.position.z = 0.7;
	scene.add(mesa_29);
	//patas 1

	const pata1_29 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_29.position.x = -0.7 + -1.80 + 3.63;
	pata1_29.position.y = -4.4 + 2.2;
	pata1_29.position.z = 0.35;
	scene.add(pata1_29);

	const pata2_29 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_29.position.x = -0.7 + -1.2 + 3.63;
	pata2_29.position.y = -4.4 + 2.2;
	pata2_29.position.z = 0.35;
	scene.add(pata2_29);

	const pata3_29 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_29.position.x = -0.7 + -1.20 + 3.63;
	pata3_29.position.y = -4.4 + 1.8;
	pata3_29.position.z = 0.35;
	scene.add(pata3_29);

	const pata4_29 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_29.position.x = -0.7 + -1.80 + 3.63;
	pata4_29.position.y = -4.4 + 1.8;
	pata4_29.position.z = 0.35;
	scene.add(pata4_29);

	const pata5_29 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_29.position.x = -0.7 + -1.43 + 3.63;
	pata5_29.position.y = -4.4 + 2.1;
	pata5_29.position.z = 0.35;
	scene.add(pata5_29);

	const pata6_29 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_29.position.x = -0.7 + -1.43 + 3.63;
	pata6_29.position.y = -4.4 + 1.9;
	pata6_29.position.z = 0.35;
	scene.add(pata6_29);
	// repisa

	const repisa_29 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_29.position.x = -0.7 + -1.325 + 3.63;
	repisa_29.position.y = -4.4 + 2;
	repisa_29.position.z = 0.1;
	scene.add(repisa_29);
	// pc

	const PC_29 = new THREE.Mesh(geometryPC, materialPC);
	PC_29.position.x = -0.7 + -1.325 + 3.63;
	PC_29.position.y = -4.4 + 2;
	PC_29.position.z = 0.3;
	scene.add(PC_29);
	//monitor
	const monitor_29 = new THREE.Mesh(geometryMon, materialMon);
	monitor_29.position.x = -0.7 + -1.5 + 3.63;
	monitor_29.position.y = -4.4 + 2;
	monitor_29.position.z = 0.95;
	scene.add(monitor_29);

	const Base1_29 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_29.position.x = -0.7 + -1.5 + 3.63;
	Base1_29.position.y = -4.4 + 2.02;
	Base1_29.position.z = 0.825;
	scene.add(Base1_29);

	const Base2_29 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_29.position.x = -0.7 + -1.5 + 3.63;
	Base2_29.position.y = -4.4 + 2.02;
	Base2_29.position.z = 0.72;
	scene.add(Base2_29);

	const pantalla_29 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_29.position.x = -0.7 + -1.5 + 3.63;
	pantalla_29.position.y = -4.4 + 1.989;
	pantalla_29.position.z = 0.95;
	scene.add(pantalla_29);

	// teclado
	const teclado_29 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_29.position.x = -0.7 + -1.55 + 3.63;
	teclado_29.position.y = -4.4 + 1.88;
	teclado_29.position.z = 0.73;
	scene.add(teclado_29);
	//mouse

	const mouse_29 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_29.position.x = -0.7 + -1.27 + 3.63;
	mouse_29.position.y = -4.4 + 1.88;
	mouse_29.position.z = 0.73;
	scene.add(mouse_29);
	//silla


	const silla1_29 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_29.position.x = -0.7 + -1.7 + 3.63;
	silla1_29.position.y = -4.4 + 1.3;
	silla1_29.position.z = 0.45;
	scene.add(silla1_29);
	// patas silla

	const pata1S_29 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_29.position.x = -0.7 + -1.7 + 3.63;
	pata1S_29.position.y = -4.4 + 1.6;
	pata1S_29.position.z = 0.225;
	scene.add(pata1S_29);

	const pata2S_29 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_29.position.x = -0.7 + -1.4 + 3.63;
	pata2S_29.position.y = -4.4 + 1.6;
	pata2S_29.position.z = 0.225;
	scene.add(pata2S_29);

	const pata3S_29 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_29.position.x = -0.7 + -1.4 + 3.63;
	pata3S_29.position.y = -4.4 + 1.26;
	pata3S_29.position.z = 0.45;
	scene.add(pata3S_29);

	const pata4S_29 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_29.position.x = -0.7 + -1.7 + 3.63;
	pata4S_29.position.y = -4.4 + 1.26;
	pata4S_29.position.z = 0.45;
	scene.add(pata4S_29);

	const silla2_29 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_29.position.x = -0.7 + -1.7 + 3.63;
	silla2_29.position.y = -4.4 + 1.26;
	silla2_29.position.z = 0.7;
	scene.add(silla2_29);
	//mesa30-------------------------------------------------------

	const mesa_30 = new THREE.Mesh(geometryMesa1, materialMesa1);
	mesa_30.position.x = -0.7 + -1.5 + 4.34;
	mesa_30.position.y = -4.4 + 2;
	mesa_30.position.z = 0.7;
	scene.add(mesa_30);
	//patas 1

	const pata1_30 = new THREE.Mesh(geometryPata1, materialPata1);
	pata1_30.position.x = -0.7 + -1.80 + 4.34;
	pata1_30.position.y = -4.4 + 2.2;
	pata1_30.position.z = 0.35;
	scene.add(pata1_30);

	const pata2_30 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_30.position.x = -0.7 + -1.2 + 4.34;
	pata2_30.position.y = -4.4 + 2.2;
	pata2_30.position.z = 0.35;
	scene.add(pata2_30);

	const pata3_30 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_30.position.x = -0.7 + -1.20 + 4.34;
	pata3_30.position.y = -4.4 + 1.8;
	pata3_30.position.z = 0.35;
	scene.add(pata3_30);

	const pata4_30 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_30.position.x = -0.7 + -1.80 + 4.34;
	pata4_30.position.y = -4.4 + 1.8;
	pata4_30.position.z = 0.35;
	scene.add(pata4_30);

	const pata5_30 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_30.position.x = -0.7 + -1.43 + 4.34;
	pata5_30.position.y = -4.4 + 2.1;
	pata5_30.position.z = 0.35;
	scene.add(pata5_30);

	const pata6_30 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_30.position.x = -0.7 + -1.43 + 4.34;
	pata6_30.position.y = -4.4 + 1.9;
	pata6_30.position.z = 0.35;
	scene.add(pata6_30);
	// repisa

	const repisa_30 = new THREE.Mesh(geometryRepisa, materialMesa1);
	repisa_30.position.x = -0.7 + -1.325 + 4.34;
	repisa_30.position.y = -4.4 + 2;
	repisa_30.position.z = 0.1;
	scene.add(repisa_30);
	// pc

	const PC_30 = new THREE.Mesh(geometryPC, materialPC);
	PC_30.position.x = -0.7 + -1.325 + 4.34;
	PC_30.position.y = -4.4 + 2;
	PC_30.position.z = 0.3;
	scene.add(PC_30);
	//monitor
	const monitor_30 = new THREE.Mesh(geometryMon, materialMon);
	monitor_30.position.x = -0.7 + -1.5 + 4.34;
	monitor_30.position.y = -4.4 + 2;
	monitor_30.position.z = 0.95;
	scene.add(monitor_30);

	const Base1_30 = new THREE.Mesh(geometryBase1, materialBase1);
	Base1_30.position.x = -0.7 + -1.5 + 4.34;
	Base1_30.position.y = -4.4 + 2.02;
	Base1_30.position.z = 0.825;
	scene.add(Base1_30);

	const Base2_30 = new THREE.Mesh(geometryBase2, materialBase2);
	Base2_30.position.x = -0.7 + -1.5 + 4.34;
	Base2_30.position.y = -4.4 + 2.02;
	Base2_30.position.z = 0.72;
	scene.add(Base2_30);

	const pantalla_30 = new THREE.Mesh(geometryPantalla, materialPantalla);
	pantalla_30.position.x = -0.7 + -1.5 + 4.34;
	pantalla_30.position.y = -4.4 + 1.989;
	pantalla_30.position.z = 0.95;
	scene.add(pantalla_30);

	// teclado
	const teclado_30 = new THREE.Mesh(geometryTecla, materialTecla);
	teclado_30.position.x = -0.7 + -1.55 + 4.34;
	teclado_30.position.y = -4.4 + 1.88;
	teclado_30.position.z = 0.73;
	scene.add(teclado_30);
	//mouse

	const mouse_30 = new THREE.Mesh(geometryMouse, materialMouse);
	mouse_30.position.x = -0.7 + -1.27 + 4.34;
	mouse_30.position.y = -4.4 + 1.88;
	mouse_30.position.z = 0.73;
	scene.add(mouse_30);
	//silla


	const silla1_30 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_30.position.x = -0.7 + -1.7 + 4.34;
	silla1_30.position.y = -4.4 + 1.3;
	silla1_30.position.z = 0.45;
	scene.add(silla1_30);
	// patas silla

	const pata1S_30 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_30.position.x = -0.7 + -1.7 + 4.34;
	pata1S_30.position.y = -4.4 + 1.6;
	pata1S_30.position.z = 0.225;
	scene.add(pata1S_30);

	const pata2S_30 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_30.position.x = -0.7 + -1.4 + 4.34;
	pata2S_30.position.y = -4.4 + 1.6;
	pata2S_30.position.z = 0.225;
	scene.add(pata2S_30);

	const pata3S_30 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_30.position.x = -0.7 + -1.4 + 4.34;
	pata3S_30.position.y = -4.4 + 1.26;
	pata3S_30.position.z = 0.45;
	scene.add(pata3S_30);

	const pata4S_30 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_30.position.x = -0.7 + -1.7 + 4.34;
	pata4S_30.position.y = -4.4 + 1.26;
	pata4S_30.position.z = 0.45;
	scene.add(pata4S_30);

	const silla2_30 = new THREE.Mesh(geometryS2, materialSilla);
	silla2_30.position.x = -0.7 + -1.7 + 4.34;
	silla2_30.position.y = -4.4 + 1.26;
	silla2_30.position.z = 0.7;
	scene.add(silla2_30);

	//mesa31--------------------------------------------------------------------
	const geometryMesa_31 = new THREE.BoxGeometry(0.45, 0.7, 0.03);
	const materialMesa_31 = new THREE.MeshLambertMaterial({ color: 0x836945 });

	const mesa_31 = new THREE.Mesh(geometryMesa_31, materialMesa_31);
	mesa_31.position.x = -0.7 + -1;
	mesa_31.position.y = 3;
	mesa_31.position.z = 0.7;
	scene.add(mesa_31);
	//patas 1
	const geometryPata1_31 = new THREE.BoxGeometry(0.04, 0.04, 0.67);
	const materialPata1_31 = new THREE.MeshLambertMaterial({ color: 0x111111 });

	const pata1_31 = new THREE.Mesh(geometryPata1_31, materialPata1_31);
	pata1_31.position.x = -0.7 + -1.2;
	pata1_31.position.y = 3.3;
	pata1_31.position.z = 0.35;
	scene.add(pata1_31);

	const pata2_31 = new THREE.Mesh(geometryPata1, materialPata1);
	pata2_31.position.x = -0.7 + -0.8;
	pata2_31.position.y = 3.3;
	pata2_31.position.z = 0.35;
	scene.add(pata2_31);

	const pata3_31 = new THREE.Mesh(geometryPata1, materialPata1);
	pata3_31.position.x = -0.7 + -1.20;
	pata3_31.position.y = 2.7;
	pata3_31.position.z = 0.35;
	scene.add(pata3_31);

	const pata4_31 = new THREE.Mesh(geometryPata1, materialPata1);
	pata4_31.position.x = -0.7 + -0.8;
	pata4_31.position.y = 2.7;
	pata4_31.position.z = 0.35;
	scene.add(pata4_31);

	const pata5_31 = new THREE.Mesh(geometryPata2, materialPata2);
	pata5_31.position.x = -0.7 + -1.1
	pata5_31.position.y = 2.95;
	pata5_31.position.z = 0.35;
	scene.add(pata5_31);

	const pata6_31 = new THREE.Mesh(geometryPata2, materialPata2);
	pata6_31.position.x = -0.7 - 0.9;
	pata6_31.position.y = 2.95;
	pata6_31.position.z = 0.35;
	scene.add(pata6_31);
	// repisa
	const geometryRepisa_31 = new THREE.BoxGeometry(0.45, 0.25, 0.02);

	const repisa_31 = new THREE.Mesh(geometryRepisa_31, materialMesa1);
	repisa_31.position.x = -0.7 + -1;
	repisa_31.position.y = 2.85;
	repisa_31.position.z = 0.1;
	scene.add(repisa_31);
	// pc
	const geometryPC_31 = new THREE.BoxGeometry(0.42, 0.20, 0.42);
	const PC_31 = new THREE.Mesh(geometryPC_31, materialPC);
	PC_31.position.x = -0.7 + -1;
	PC_31.position.y = 2.85;
	PC_31.position.z = 0.3;
	scene.add(PC_31);
	//monitor
	const geometryMon_31 = new THREE.BoxGeometry(0.02, 0.45, 0.28);

	const monitor_31 = new THREE.Mesh(geometryMon_31, materialMon);
	monitor_31.position.x = -0.7 + -1;
	monitor_31.position.y = 3;
	monitor_31.position.z = 0.95;
	scene.add(monitor_31);

	const geometryBase1_31 = new THREE.BoxGeometry(0.02, 0.04, 0.25);
	const Base1_31 = new THREE.Mesh(geometryBase1_31, materialBase1);
	Base1_31.position.x = -0.7 + -0.99;
	Base1_31.position.y = 3;
	Base1_31.position.z = 0.825;
	scene.add(Base1_31);

	const geometryBase2_31 = new THREE.BoxGeometry(0.12, 0.17, 0.01);
	const Base2_31 = new THREE.Mesh(geometryBase2_31, materialBase2);
	Base2_31.position.x = -0.7 + -1;
	Base2_31.position.y = 3;
	Base2_31.position.z = 0.72;
	scene.add(Base2_31);

	const geometryPantalla_31 = new THREE.BoxGeometry(0, 0.41, 0.24);
	const pantalla_31 = new THREE.Mesh(geometryPantalla_31, materialPantalla);
	pantalla_31.position.x = -0.7 + -1.01;
	pantalla_31.position.y = 3;
	pantalla_31.position.z = 0.95;
	scene.add(pantalla_31);

	// teclado
	const geometryTecla_31 = new THREE.BoxGeometry(0.14, 0.44, 0.03);
	const teclado_31 = new THREE.Mesh(geometryTecla_31, materialTecla);
	teclado_31.position.x = -0.7 + -1.15;
	teclado_31.position.y = 3.05;
	teclado_31.position.z = 0.73;
	scene.add(teclado_31);
	//mouse
	const geometryMouse_31 = new THREE.BoxGeometry(0.08, 0.05, 0.035);

	const mouse_31 = new THREE.Mesh(geometryMouse_31, materialMouse);
	mouse_31.position.x = -0.7 + -1.15;
	mouse_31.position.y = 2.75;
	mouse_31.position.z = 0.73;
	scene.add(mouse_31);
	//silla

	const silla1_31 = new THREE.Mesh(geometryS1, materialSilla);
	silla1_31.position.x = -0.7 + -1.7;
	silla1_31.position.y = 3;
	silla1_31.position.z = 0.45;
	scene.add(silla1_31);
	// patas silla

	const pata1S_31 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata1S_31.position.x = -0.7 + -1.44;
	pata1S_31.position.y = 3.26;
	pata1S_31.position.z = 0.225;
	scene.add(pata1S_31);

	const pata2S_31 = new THREE.Mesh(geometryPata1S, materialPata1S);
	pata2S_31.position.x = -0.7 + -1.44;
	pata2S_31.position.y = 3;
	pata2S_31.position.z = 0.225;
	scene.add(pata2S_31);

	const pata3S_31 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata3S_31.position.x = -0.7 + -1.75;
	pata3S_31.position.y = 3.26;
	pata3S_31.position.z = 0.45;
	scene.add(pata3S_31);

	const pata4S_31 = new THREE.Mesh(geometryPata2S, materialPata1S);
	pata4S_31.position.x = -0.7 + -1.75;
	pata4S_31.position.y = 3;
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
	silla2_31.position.y = 3;
	silla2_31.position.z = 0.7;
	scene.add(silla2_31);
	// pared 1 --------------------------------------------------------------
	var paredGeo_1 = new THREE.Geometry();
	paredGeo_1.vertices.push(new THREE.Vector3(-2.6, 4, 0));
	paredGeo_1.vertices.push(new THREE.Vector3(-2.6, 4, 2.4));
	paredGeo_1.vertices.push(new THREE.Vector3(2.6, 4, 2.4));
	paredGeo_1.vertices.push(new THREE.Vector3(2.6, 4, 0));
	paredGeo_1.faces.push(new THREE.Face3(2, 1, 0));
	paredGeo_1.faces.push(new THREE.Face3(0, 3, 2));
	var materialM = new THREE.MeshBasicMaterial({ color: 0xA09D81}); 
	var pared_1 = new THREE.Mesh(paredGeo_1, materialM); // Crea el objeto
	scene.add(pared_1);
	// pared 2 --------------------------------------------------------------
	var paredGeo_2 = new THREE.Geometry();
	paredGeo_2.vertices.push(new THREE.Vector3(-2.6, 4, 0));
	paredGeo_2.vertices.push(new THREE.Vector3(-2.6, 4, 2.4));
	paredGeo_2.vertices.push(new THREE.Vector3(-2.6, -4, 2.4));
	paredGeo_2.vertices.push(new THREE.Vector3(-2.6, -4, 0));
	paredGeo_2.faces.push(new THREE.Face3(0, 1, 2));
	paredGeo_2.faces.push(new THREE.Face3(2, 3, 0));
	var materialM2 = new THREE.MeshBasicMaterial({ color: 0xB1AE8F}); 
	var pared_2 = new THREE.Mesh(paredGeo_2, materialM2); // Crea el objeto
	scene.add(pared_2);
	// pared 3 --------------------------------------------------------------
	var paredGeo_3 = new THREE.Geometry();
	paredGeo_3.vertices.push(new THREE.Vector3(2.6, 4, 0));
	paredGeo_3.vertices.push(new THREE.Vector3(2.6, 4, 2.4));
	paredGeo_3.vertices.push(new THREE.Vector3(2.6, -4, 2.4));
	paredGeo_3.vertices.push(new THREE.Vector3(2.6, -4, 0));
	paredGeo_3.faces.push(new THREE.Face3(2, 1, 0));
	paredGeo_3.faces.push(new THREE.Face3(0, 3, 2));
	var pared_3 = new THREE.Mesh(paredGeo_3, materialM2); // Crea el objeto
	scene.add(pared_3);
	// pared 4 --------------------------------------------------------------
	var paredGeo_4 = new THREE.Geometry();
	paredGeo_4.vertices.push(new THREE.Vector3(-2.6, -4, 0));
	paredGeo_4.vertices.push(new THREE.Vector3(-2.6, -4, 2.4));
	paredGeo_4.vertices.push(new THREE.Vector3(2.6, -4, 2.4));
	paredGeo_4.vertices.push(new THREE.Vector3(2.6, -4, 0));
	paredGeo_4.faces.push(new THREE.Face3(0, 1, 2));
	paredGeo_4.faces.push(new THREE.Face3(2, 3, 0));
	var pared_4 = new THREE.Mesh(paredGeo_4, materialM); // Crea el objeto
	scene.add(pared_4);
	//puerta
	var puertaGeo = new THREE.Geometry();
	puertaGeo.vertices.push(new THREE.Vector3(2.59, 3.7, 0));
	puertaGeo.vertices.push(new THREE.Vector3(2.59, 3.7, 1.9));
	puertaGeo.vertices.push(new THREE.Vector3(2.59, 2.8, 1.9));
	puertaGeo.vertices.push(new THREE.Vector3(2.59, 2.8, 0));
	puertaGeo.faces.push(new THREE.Face3(2, 1, 0));
	puertaGeo.faces.push(new THREE.Face3(0, 3, 2));
	const materialpuerta = new THREE.MeshBasicMaterial({ color: 0x503A1C});
	var puerta = new THREE.Mesh(puertaGeo, materialpuerta); // Crea el objeto
	scene.add(puerta);

	const geometryPu = new THREE.BoxGeometry(0.04, 0.04, 0.04);
	const materialPu = new THREE.MeshLambertMaterial({ color: 0xF7FF00});

	const cerradura = new THREE.Mesh(geometryPu, materialPu);
	cerradura.position.x = 2.59;
	cerradura.position.y = 2.9;
	cerradura.position.z = 1;
	scene.add(cerradura);

	// pizarra -----------------------------------------------------
	const geometryMarco1 = new THREE.BoxGeometry(0.08, 0.025, 1.2);
	const materialMarco1 = new THREE.MeshLambertMaterial({ color: 0xDE9E1C});

	const marco1 = new THREE.Mesh(geometryMarco1, materialMarco1);
	marco1.position.x = -1.45;
	marco1.position.y = 3.95;
	marco1.position.z = 1.4;
	scene.add(marco1);

	const marco2 = new THREE.Mesh(geometryMarco1, materialMarco1);
	marco2.position.x = 1.45;
	marco2.position.y = 3.95;
	marco2.position.z = 1.4;
	scene.add(marco2);

	const geometryMarco2 = new THREE.BoxGeometry(3, 0.025, 0.08);
	const marco3 = new THREE.Mesh(geometryMarco2, materialMarco1);
	marco3.position.x = 0;
	marco3.position.y = 3.95;
	marco3.position.z = 2;
	scene.add(marco3);

	const marco4 = new THREE.Mesh(geometryMarco2, materialMarco1);
	marco4.position.x = 0;
	marco4.position.y = 3.95;
	marco4.position.z = 0.8;
	scene.add(marco4);

	var pizarraGeo = new THREE.Geometry();
	pizarraGeo.vertices.push(new THREE.Vector3(-1.4, 3.99, 0.80));
	pizarraGeo.vertices.push(new THREE.Vector3(-1.4, 3.99, 1.94));
	pizarraGeo.vertices.push(new THREE.Vector3(1.4, 3.99, 1.94));
	pizarraGeo.vertices.push(new THREE.Vector3(1.4, 3.99, 0.80));
	pizarraGeo.faces.push(new THREE.Face3(2, 1, 0));
	pizarraGeo.faces.push(new THREE.Face3(0, 3, 2));
	var materialP = new THREE.MeshBasicMaterial({ color: 0xF1F0E1}); 
	var pizarra = new THREE.Mesh(pizarraGeo, materialP); // Crea el objeto
	scene.add(pizarra);
	// techo -----------------------------------------------
	var techoGeo = new THREE.Geometry();
	techoGeo.vertices.push(new THREE.Vector3(-2.6, 4, 2.4));
	techoGeo.vertices.push(new THREE.Vector3(2.6, 4, 2.4));
	techoGeo.vertices.push(new THREE.Vector3(-2.6, -4, 2.4));
	techoGeo.vertices.push(new THREE.Vector3(2.6, -4, 2.4));
	techoGeo.faces.push(new THREE.Face3(0, 1, 2));
	techoGeo.faces.push(new THREE.Face3(1, 3, 2));
	const material1 = new THREE.MeshBasicMaterial({ color: 0x9D9C91 });
	var techo = new THREE.Mesh(techoGeo, material1); // Crea el objeto
	scene.add(techo);
	// proyector
	const soporte = new THREE.Mesh(geometryPata1S, materialPata1);
	soporte.position.x = 0;
	soporte.position.y = 2.5;
	soporte.position.z = 2.2;
	scene.add(soporte);


	const geometryProy = new THREE.BoxGeometry(0.30, 0.20, 0.13);
	const materialProy = new THREE.MeshLambertMaterial({ color: 0xD8D8D6});

	const proyector = new THREE.Mesh(geometryProy, materialProy);
	proyector.position.x = 0;
	proyector.position.y = 2.5;
	proyector.position.z = 2;
	scene.add(proyector);

	const geometryLente = new THREE.BoxGeometry(0.04, 0.01, 0.04);
	const materialLente = new THREE.MeshBasicMaterial({ color: 0xF2F2B2});

	const lente = new THREE.Mesh(geometryLente, materialLente);
	lente.position.x = 0;
	lente.position.y = 2.6;
	lente.position.z = 2;
	scene.add(lente);


	//suelo -----------------------------------------------------------
	Geometria_plano = new THREE.PlaneGeometry(5.2, 8, 1, 1);

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

