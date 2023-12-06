"use strict";

class Keyboard {
	constructor( ) {
		this.down = [];
		this.keys = {
			SCAPE : 8,
			ENTER : 13,
			MAYUS : 16,
			CTRL : 17,
			SPACE : 32,
			LEFT_ARROW : 37,
			UP_ARROW : 38,
			RIGHT_ARROW : 39,
			DOWN_ARROW : 40,

			A : 65,
			B : 66,
			C : 67,
			D : 68,
			E : 69,
			F : 70,
			G : 71,
			H : 72,
			I : 73,
			J : 74,
			K : 75,
			L : 76,
			M : 77,
			N : 78,
			O : 79,
			P : 80,
			Q : 81,
			R : 82,
			S : 83,
			T : 84,
			U : 85,
			V : 86,
			W : 87,
			X : 88,
			Y : 89,
			Z : 90
		}
		window.addEventListener( "keydown" , this.Down.bind( this ) );
		window.addEventListener( "keyup" , this.Up.bind( this ) );
	}

	Down( Event ) {
		this.down[Event.keyCode] = true;
	}

	Up( Event ) {
		this.down[Event.keyCode] = false;
	}

	IsDown( Event ) {
		return this.down[Event.keyCode];
	}
}