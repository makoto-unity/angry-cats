#pragma strict

var limitVel : float = 4.0f;
var vanishFx : GameObject;
var oldValue : float = 0.0f;

function OnCollisionEnter(collisionInfo : Collision)
{
	OnCollisionEvery(collisionInfo);
}

function OnCollisionStay(collisionInfo : Collision)
{
	OnCollisionEvery(collisionInfo);
}

function OnCollisionEvery(collisionInfo : Collision)
{
	var diff : float = collisionInfo.relativeVelocity.magnitude * collisionInfo.rigidbody.mass;
    if ( diff > limitVel ) {
    	if ( vanishFx ) {
			Instantiate(vanishFx, this.transform.position, this.transform.rotation);
		}
		Destroy(this.gameObject);
	}
	oldValue = collisionInfo.relativeVelocity.magnitude;
}
