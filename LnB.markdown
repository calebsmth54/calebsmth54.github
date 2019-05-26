---
layout: default
modal-id: 5
categories: portfolio
date: 2019-01-28
title: Lead 'N Brimstone
img: LnBPreview.png
alt: Lead 'N Brimstone Preview Image
project-date: April 2016 to April 2017
client: Waden Kane Games
clientURL: http://www.wadenkanestudios.com/
category: Game Programmer
description: A 2D side-scrolling shooter inspired by Contra, Ghost 'n Goblins and Doom. Players take control of a knight fighting through a fantasy world being invaded by a demon army.

---

### GDC 2016 WIP Teaser
<iframe src="https://drive.google.com/file/d/0ByegvJ7suqvHRjFoTTNPbW5TM2c/preview" width="650" height="366" FrameBorder="0"></iframe>

[**Lead N Brimstone Source Code**](https://github.com/calebsmth54/LeadNBrimstone){:target="_blank"} 
<div style="display:none;">_</div>

**Weapon Coding and Scripting**

Developed an easy to extend weapon system that fires projectiles, trace lines and timed melee attacks for players, AI and environment traps. Opened functionality up to scripting so that designers could easily prototype new weapon ideas.


*Code:* 

[![Lead N Brimstone Code Sample](/img/LnB/CodeSample.png)](/img/LnB/CodeSample.png){:target="_blank"}
<div style="display:none;">_</div>

Three classes exist in C++ code. [ABaseWeapon](https://github.com/calebsmth54/LeadNBrimstone/blob/master/LnB/Source/LnB/Weapons/BaseWeapon.h){:target="_blank"} provides some Blueprint events as well as a data driven design that controls fire rate, fire type, projectile type, etc. The other two classes are [AShootWeapon](https://github.com/calebsmth54/LeadNBrimstone/blob/master/LnB/Source/LnB/Weapons/ShootWeapon.h){:target="_blank"}, which provides implementation for projectile and ray-trace fire types, and [AMeleeWeapon](https://github.com/calebsmth54/LeadNBrimstone/blob/master/LnB/Source/LnB/Weapons/MeleeWeapon.cpp){:target="_blank"}, which implements a simple melee implementation.
<div style="display:none;">_</div>

*Blueprints:* 

<iframe src="https://drive.google.com/file/d/1YyE4jJCYvN8OunKgTcyOfLvUAG3G69vW/preview" width="650" height="366" FrameBorder="0"></iframe>

The above video shows a Blueprint script inheriting from the AShootWeapon class. It uses several events to trigger appropriate audio and effects.

[part 1](/img/LnB/BPPreview1.png){:target="_blank"} -
[Part 2](/img/LnB/BPPreview2.png){:target="_blank"} -
[Part 3](/img/LnB/BPPreview3.png){:target="_blank"} -
[Part 4](/img/LnB/BPPreview4.png){:target="_blank"} -
[Part 5](/img/LnB/BPPreview5.png){:target="_blank"} -
[Part 6](/img/LnB/BPPreview6.png){:target="_blank"} 
<div style="display:none;">_</div>


**AI Coding and Scripting**

Developed a base AI class with several behaviors (idling, charging, attacking, etc.) that could be reused by all of our enemy types. Integrated functionality into Blueprints and Behavior Trees so that designers could quickly prototype new enemy types with a library of behaviors.


*Code:*

The code consists of several parts. The [ABaseAIController](https://github.com/calebsmth54/LeadNBrimstone/blob/master/LnB/Source/LnB/AI/BaseAIController.h){:target="_blank"} acts as a liason between the BaseEnemy class and the Behavior Tree. The [ABaseEnemy](https://github.com/calebsmth54/LeadNBrimstone/blob/master/LnB/Source/LnB/AI/BaseEnemy.h){:target="_blank"} class acts as a repository for reuseable behaviors for all enemies, as well as controlling some shared properties. Finally there are several custom [Behavior Tree Task](https://github.com/calebsmth54/LeadNBrimstone/tree/master/LnB/Source/LnB/AI/Tasks){:target="_blank"} that can be used for AI scripting.
<div style="display:none;">_</div>

*Blueprints:*

The following blueprints are inherited from the BaseEnemy class for our Bull Demon enemy, an enemy that growls when he sees the player and charges in their direction, trampling other enemies in their path.

[![Lead N Brimstone AI Blueprint Preview](/img/LnB/AI_Blueprint0.png)](/img/LnB/AI_Blueprint0.png){:target="_blank"}
<div style="display:none;">_</div>

[Bull Demon BP Part 2](/img/LnB/AI_Blueprint1.png){:target="_blank"} -
[Bull Demon BP Part 3](/img/LnB/AI_Blueprint2.png){:target="_blank"} -
[Bull Demon BP Part 4](/img/LnB/AI_Blueprint3.png){:target="_blank"}
<div style="display:none;">_</div>

*Behavior Tree:*

All AI is driven by reuseable components in the Behavior Tree. Here you can see the composite behaviors for an attack sequence, and two idling sequences (one that follows waypoints and a fallback that just sleeps the AI till woken.)

[![Lead N Brimstone AI Behavior Tree Preview](/img/LnB/AI_BT1.png)](/img/LnB/AI_BT1.png){:target="_blank"}
<div style="display:none;">_</div>

[Part 2](/img/LnB/AI_BT2.png){:target="_blank"}
<div style="display:none;">_</div>


**Animation Scripting**

Used UE4 animation tools and scripts to hook up several enemy characters and the player character assets. Worked with lead artist to ensure assets were imported correctly in engine and in gameplay.

<iframe src="https://drive.google.com/file/d/1yjPYCPkHi7sypdSA7rYtcmbvT3H-oTai/preview" width="650" height="366" FrameBorder="0"></iframe>
<div style="display:none;">_</div>