---
title: Projects and Experience
---

## Lead N Brimstone (C++/Blueprint Scripting/Unreal Editor) ETA Summer 2017

### May 2016 to Present

[![Lead N Brimstone Preview Picture](/assets/img/LnBPreview1.png)](/assets/img/LnBPreview1.png){:target="_blank"}

Site: [Lead N Brimstone](http://www.wadenkanestudios.com/#!projects/leadnbrimestone.html)

### Game Description
A fast paced, 2D side scrolling shooter inspired by _Contra_, _Ghost 'n Goblins_ and _Doom_. Players take control of a knight fighting off endless waves of increasingly difficult demonic creatures. For this project we want to capture the magic of classic arcade and NES games: Easy to learn, difficult to master. We plan on having a gameplay loop that is brutally difficult, but never punishes the player with arbitrary failure states and instead empowers them to master their skills in order to beat their next foe.

*Weapon System:*

- Designed, implemented and coded a weapon system that could support various weapon types (Trace, Projectile and Melee).
- Used by both enemy and player characters for unique attacks.
- Designed to be easily extended in the Blueprints scripting system.

*Characters:*

- Developed a base character class that could support our wide range of character types.
- Implemented animation state machines for characters.

*AI:*

- Developed base AI functions that would lay the ground work for every enemy behavior in game.
- Utilized UE4's Behavior Tree System so that large variation of AI behaviors could be created easily and tested immediately in the editor.

*Project Management:*

- Setup and continued to manage Perforce repository and assisted team with use of version control.
- Helped team members make transition from Unity development to Unreal development.
- Took on responsibility of implementing all of the major gameplay features.
- Assisted with design of the game as well as worked with designers on exposing core C++ features to Blueprint Scripting System.
- Regularly refactor code in order to achieve readability and ease of use.

*Preview of BaseWeapon Code:*

``` c++

void ABaseWeapon::FireWeapon()
{
	ALnBCharacter* WeaponOwner = Cast<ALnBCharacter>(GetOwner());
	if(!WeaponOwner)
	{
		UE_LOG(LogTemp, Warning, TEXT("Weapon fired without an owner!"));
		return;
	}

	if(!PreFire() || !CanFire())
		return;

	FVector AimLoc, AimDir;
	GetAdjustedAim(AimLoc, AimDir);

	//
	// Normal Fire mode
	//
	if(BurstCount <= 0.0f)
	{
		if(MaxSpread > 0.0f)
			ApplyAimSpread(AimDir);

		Fire(WeaponOwner, AimLoc, AimDir);
	}
	//
	// Burst Fire Mode
	//
	else
	{
		BurstFire(WeaponOwner, AimLoc, AimDir);
	}

	PostFire();
}

```
More At: [BaseWeapon.cpp](https://github.com/calebsmth54/Code-Samples/blob/master/LnBSample1.cpp)

*Animation State Machine Sample*

[![Lead N Brimstone Preview Picture](/assets/img/LnBPreview2.png)](/assets/img/LnBPreview2.png){:target="_blank"}

*AI Behavior Tree Sample*

[![Lead N Brimstone Preview Picture](/assets/img/LnBPreview3.png)](/assets/img/LnBPreview3.png){:target="_blank"}

## Personal Projects and Experience (pre-2015)

**Horror Turn Based Game (C++/Blueprint Scripting/Unreal Editor) Early WIP:** A unique take on the horror movie genre inspired by the film _Cabin in the Woods_ and the tabletop game _Betrayal on Haunted House Hill_, that combines horror and turn based strategy concepts. Players take control of the ephemeral evil force lurking behind the scenes. Development put on hold to focus on Lead N Brimstone.

**Classic Game Clones (C++/SDL/Engine Development):** Developed game clones of _Pong_, _Tetris_ and _Pac-Man_ which established strong programming fundamentals and understanding of how game engines work on a base level. Created a game loop in SDL that updated game entities, rendered sprites independently of game timing, and a sprite resource manager.

**Source Engine Modding (C++/Level Design & Scripting/Hammer Editor):** Developed numerous maps with a focus focusing on building level geometry, setting atmospheric tone with lighting and effects, and creating level scripted events. Made minor code modifications to weapon, character and game mode classes. Worked collaboratively many other modders.
