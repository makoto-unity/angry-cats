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
		if ( GUI.Button(aRect, "Try again?" ) ) {
			Application.LoadLevel(Application.loadedLevel);
		}
	}
}