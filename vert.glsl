precision lowp float;

attribute vec2 coord;
attribute vec2 scale;

attribute vec3 aColor;
varying vec3 vColor;

void main() {
	gl_Position = vec4(
		coord.x * scale.x,
		coord.y * scale.y,
		0,
		1
	);
	gl_PointSize = 1.0;
	vColor = aColor;
}
