#pragma strict

var lastPlayerNum : int = 3;

var aTexture : Texture;
var aRect : Rect;
var offsetX : float = 10.0f;

function OnGUI() {
	if(!aTexture){
		Debug.LogError("Assign a Texture in the inspector.");
		return;
	}
	var myRect : Rect = aRect;
	for( var i : int =0 ; i<lastPlayerNum ; i++ ) {
    	GUI.DrawTexture(myRect, aTexture, ScaleMode.StretchToFill, true, 10.0f);
    	myRect.x += ( myRect.width + offsetX );
    }
}