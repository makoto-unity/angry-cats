#pragma strict

var isDisp : boolean = false;

function Start () {
	isDisp = false;
}

function SetDisp () {
	isDisp = true;
}

var aRect : Rect;

function OnGUI() {
	if ( isDisp ) {
		if ( GUI.Button(aRect, "Go to Next stage!" ) ) {
			var nextLevel : int = Application.loadedLevel + 1;
			if ( nextLevel >= Application.levelCount ) nextLevel = 0;
			Application.LoadLevel(nextLevel);
		}
	}
}