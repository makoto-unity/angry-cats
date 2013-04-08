#pragma strict

var stopVelLimit : float = 0.1f;
var isOnceHit : boolean = false;

function Update () {
    if ( isOnceHit &&
    	 this.rigidbody.velocity.sqrMagnitude < stopVelLimit * stopVelLimit ) {
    	Destroy(this.gameObject);
    }
}

function OnCollisionEnter() {
	isOnceHit = true;
}