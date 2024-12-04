// variable to hold a reference to our A-Frame world
let world;

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	world = new World('VRScene');

	// set a background color for the world (dark night sky)
	world.setBackground(10, 10, 50); // Dark blue sky

	// Function to create a star at random locations
	function createStar(x, y, z) {
		let star = new Sphere({
			x: x, y: y, z: z,
			radius: random(0.1, 0.3), // Small size for stars
			red: 255, green: 255, blue: 255, // White color
			metalness: 1
		});
		world.add(star);
	}

	// Generate multiple stars in the sky
	for (let i = 0; i < 100; i++) { // Adjust the number of stars as needed
		createStar(
			random(-50, 50), // Random x position
			random(5, 50),   // Random y position (sky height)
			random(-50, -10) // Random z position (distance)
		);
	}

	// Add a large "star" in the center to represent the moon
	let moon = new Sphere({
		x: 0, y: 30, z: -20, // Position in the center, elevated in the sky
		radius: 3, // Larger size to differentiate it from stars
		red: 255, green: 255, blue: 200, // Slight yellowish color for the moon
		metalness: 0.5,
		opacity: 1
	});
	world.add(moon);

	// Create the ground plane
	let ground = new Plane({
		x: 0, y: 0, z: 0,
		width: 100, height: 100,
		red: 0, green: 50, blue: 0, // Dark green ground
		rotationX: -90,
		metalness: 0.25
	});
	world.add(ground);
}

function draw() {
	// Empty draw loop
}
