--- 
alt: "Misc Projects"
categories: portfolio
date: 2019-01-28
description: "Various prototypes and game jam projects developed over the years"
img: PersonalPreview.png
layout: default
modal-id: 6
title: "Personal Projects"
---

### ReVamp

Role: Lead Designer/Developer

Team: ~10

Tech: UE4, Blueprints

Date: January 2018

ReVamp was a prototype developed for [#1gam](https://www.onegameamonth.com/){:target="_blank"} over the period of a month. The concept sought to parody video game media through a found footage narrative of discovering the unreleased files for a game teased at E3 in the year 2019.

The actual game of ReVamp is a third-person character stealth-action where players take control of an ancient vampire recently cybernetically enhanced and hell-bent on revenge. Enemies are powerful and smart, which requires the player to use hit-and-run tactics, jumping in and out of combat to annihilate foes off guard. Mechanics are inspired by games like Dishonored, The Splinter Cell, Tenchu and Uncharted 4.

[Github Page](https://github.com/calebsmth54/ReVamp){:target="_blank"}

**Gameplay Prototype**
<iframe src="https://drive.google.com/file/d/15U5l7MnmMX3siWUdrjddRuQCN7mEd2G_/preview" width="650" height="366" FrameBorder="0"></iframe>

*Gameplay Features:* 

The player has two resources: Health and blood.

Health operates like a standard health mechanic. Passively the player will use blood to regenerate a portion of health.

Blood is split up into several tanks and can be used in burst to perform abilities.

Abilities include teleporting, invisibility, regenerating health, mind control, etc.

The player can grapple with any enemy to replenish their blood supply.

**AI Alert Behavior**
<iframe src="https://drive.google.com/file/d/14kj39dFpO3sPVsgAJr2cKuBwU0hBsd2N/preview" width="650" height="366" FrameBorder="0"></iframe>

*AI Features:* 

AI Characters use UE4's [Perception System](https://docs.unrealengine.com/en-US/Engine/ArtificialIntelligence/AIPerception/index.html){:target="_blank"}. [Ray Wenderlich's blog post](https://www.raywenderlich.com/238-unreal-engine-4-tutorial-artificial-intelligence){:target="_blank"} is the foundation for most of the AI, but I added some additional features to meet the needs of our project.

Decreased vertical field of view for enemies. This allows the player to perch just overhead without being seen.

AI has 3 major behavior states (Idle, Investigating, Alert) that determine their broad behavior patterns. Enemies will only be alerted to the player's presence if they remain in their field of view for more than a specified time. This mechanic is largely borrowed from Uncharted 4.

If players are quick enough, they can kill an alerted enemy before they are able to alert their squadmates.

Players can use abilities to change an enemies allegiance to their side.

Civilians attempt to flee the area in a random direction.

**Blueprint Breakdown**

Coming soon!

### Parkour

[Ludum Dare Page](https://ldjam.com/events/ludum-dare/42/parkour){:target="_blank"}

### Dun'Djinn

Role: Lead Designer/Developer

Team: ~2

Tech: Unity, C#

Date: January - July 2018

[Github Page](https://github.com/calebsmth54/Dun-Djinn){:target="_blank"}

Took various concepts learned from UE4 Perception System and developed a custom perception system in Unity.

Developed generic state machine to be used across the code base, especially for the simple AI denziens of the Dun'Djinn.

Designed AI for several creates, fully implemented two creatures.

Procedural level generation system builds dungeons from prefab level spaces and using the Drunken Traveller searching method. Various properties can be tweaked to create radically different dungeons.

### Clown Darts

[Ludum Dare Page](https://ldjam.com/events/ludum-dare/41/clown-darts){:target="_blank"}

<iframe width="650" height="366" src="https://youtu.be/aEF9kQB32qQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Pacman Clone

Team: ~1

Tech: C++, SDL

Date: 2009

[![Pacman Preview Image](/img/OldGames/PMPreview.PNG)](/img/OldGames/PMPreview.PNG){:target="_blank"}
<div style="display:none;">_</div>

One of my first projects! Recreates the AI, character movement and most of the gameplay as described in [The Pacman Dossier (2009)](https://www.gamasutra.com/view/feature/132330/the_pacman_dossier.php?page=3){:target="_blank"}.
