#pragma strict

var tagName : String = "Target";

function Update () {
	var targetObjects : GameObject [] = GameObject.FindGameObjectsWithTag(tagName);
	if ( targetObjects.Length <= 0 ) {
		SendMessage("SetDisp");
	}
}