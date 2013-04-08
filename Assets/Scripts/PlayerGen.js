#pragma strict

private var remainCheck : PlayerRemainCheck;

function Start () {
	CreatePlayer();
	remainCheck = GetComponent(PlayerRemainCheck);
}

var playerPrefab : GameObject;
var nowPlayer : GameObject;

function CreatePlayer() {
	nowPlayer = Instantiate(playerPrefab, this.transform.position, this.transform.rotation);
}

function Update() {
	if ( !nowPlayer ) {
		if ( remainCheck.lastPlayerNum > 0 ) {
			remainCheck.lastPlayerNum--;
			CreatePlayer();
		} else {
			SendMessage("SetDisp");
		}
	}
}
