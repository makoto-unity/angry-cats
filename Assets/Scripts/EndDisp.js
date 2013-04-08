#pragma strict


function Start() {
	isDisp = false;
}

var isDisp : boolean = false;

function SetDisp() {
	isDisp = true;
}

var aRect : Rect ;
var aStyle : GUIStyle;
var aMessage : String = "Clear!";

function OnGUI() {
	if ( isDisp ) {
		GUI.Label(aRect, aMessage, aStyle);
	}
}