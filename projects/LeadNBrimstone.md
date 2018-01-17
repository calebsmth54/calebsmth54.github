---
title: Lead N Brimstone
---
## (May 2016 to April 2017)
### Game Programmer (C++ - Blueprint Scripting - Unreal Editor - Perforce)

A 2D side-scrolling shooter inspired by _Contra_, _Ghost 'n Goblins_ and _Doom_. Players take control of a knight fighting through a fantasy world being invaded by a demon army.

### GDC 2016 WIP Teaser
<iframe src="https://drive.google.com/file/d/0ByegvJ7suqvHRjFoTTNPbW5TM2c/preview" width="650" height="366" FrameBorder="0"></iframe>

[**Lead N Brimstone Source Code**](https://github.com/calebsmth54/LeadNBrimstone){:target="_blank"} 
<div style="display:none;">_</div>

**Weapon Coding and Scripting**

Developed an easy to extend weapon system that fires projectiles, trace lines and timed melee attacks for players, AI and environment traps. Opened functionality up to scripting so that designers could easily prototype new weapon ideas.

<iframe src="https://drive.google.com/file/d/1YyE4jJCYvN8OunKgTcyOfLvUAG3G69vW/preview" width="650" height="366" FrameBorder="0"></iframe>


*Code:* 

[![Lead N Brimstone Code Sample](/assets/img/LnB/CodeSample.png)](/assets/img/LnB/CodeSample.png){:target="_blank"}
<div style="display:none;">_</div>

Three classes exist in C++ code. BaseWeapon provides some Blueprint events as well as a data driven design that controls fire rate, fire type, projectile type, etc. The other two classes are ShootWeapon, which provides implementation for projectile and ray-trace fire types, and MeleeWeapon, which implements a simple melee implementation.

[Weapon Code on GitHub](https://github.com/calebsmth54/LeadNBrimstone/tree/master/LnB/Source/LnB/Weapons){:target="_blank"}
<div style="display:none;">_</div>

*Blueprints:* 

The above video shows a Blueprint script inheriting from the ShootWeapon class. It uses several events to trigger appropriate audio and effects.

[part 1](/assets/img/LnB/BPPreview1.png){:target="_blank"} -
[Part 2](/assets/img/LnB/BPPreview2.png){:target="_blank"} -
[Part 3](/assets/img/LnB/BPPreview3.png){:target="_blank"} -
[Part 4](/assets/img/LnB/BPPreview4.png){:target="_blank"} -
[Part 5](/assets/img/LnB/BPPreview5.png){:target="_blank"} -
[Part 6](/assets/img/LnB/BPPreview6.png){:target="_blank"} 
<div style="display:none;">_</div>

**AI Coding and Scripting**

Developed a base AI class with several behaviors (idling, charging, attacking, etc.) that could be reused by all of our enemy types. Integrated functionality into Blueprints and Behavior Trees so that designers could quickly prototype new enemy types with a library of behaviors.

<iframe src="https://drive.google.com/file/d/1xDrt9fPpLisiSFuHXgT2pWqhPp3CveSC/preview" width="650" height="366" FrameBorder="0"></iframe>


*Code:*

[AI Code on GitHub](https://github.com/calebsmth54/LeadNBrimstone/tree/master/LnB/Source/LnB/AI){:target="_blank"}
<div style="display:none;">_</div>

The code consists of several parts. The BaseAIController acts as a liason between the BaseEnemy class and the Behavior Tree. The BaseEnemy class acts as a repository for reuseable behaviors for all enemies, as well as controlling some shared properties (attack timing, idle waypoint traversal, etc.). Finally there are custom behavior nodes that can be mix-and-matched to trigger enemy behaviors.

*Blueprints:*

The following blueprints are inherited from the BaseEnemy class for our Bull Demon enemy, an enemy that growls when he sees the player and charges in their direction, trampling other enemies in their path.

[![Lead N Brimstone AI Blueprint Preview](/assets/img/LnB/AI_Blueprint0.PNG)](/assets/img/LnB/AI_Blueprint0.PNG){:target="_blank"}
<div style="display:none;">_</div>

[Bull Demon BP Part 2](/assets/img/LnB/AI_Blueprint1.png){:target="_blank"} -
[Bull Demon BP Part 3](/assets/img/LnB/AI_Blueprint2.png){:target="_blank"} -
[Bull Demon BP Part 4](/assets/img/LnB/AI_Blueprint3.png){:target="_blank"}
<div style="display:none;">_</div>

*Behavior Tree:*

All AI is driven by reuseable components in the Behavior Tree. Here you can see the composite behaviors for an attack sequence, and two idling sequences (one that follows waypoints and a fallback that just sleeps the AI till woken.)

[![Lead N Brimstone AI Behavior Tree Preview](/assets/img/LnB/AI_BT1.png)](/assets/img/LnB/AI_BT1.png){:target="_blank"}
<div style="display:none;">_</div>

[Part 2](/assets/img/LnB/AI_BT2.png){:target="_blank"}
<div style="display:none;">_</div>

**Animation Scripting**

This is only one character that I worked on out of several. It was a unique challenge because I was unfamiliar with a lot of animation practices. I lengthened, extended and cut together animations in order to prototype our animators' work and integrate it into the gameplay. I used several tools provided by Persona, including Animation State Machines, Animation BPS, Blending Nodes, Poses and Aim Offsets.

<iframe src="https://drive.google.com/file/d/1yjPYCPkHi7sypdSA7rYtcmbvT3H-oTai/preview" width="650" height="366" FrameBorder="0"></iframe>
<div style="display:none;">_</div>

[Player Animation BP Part 1](/assets/img/LnB/Knight_AnimBP1.png){:target="_blank"} -
[Player Animation BP Part 2](/assets/img/LnB/Knight_AnimBP2.png){:target="_blank"} -
[Player Animation BP Part 3](/assets/img/LnB/Knight_AnimBP3.png){:target="_blank"} -
[Player Animation BP Part 4](/assets/img/LnB/Knight_AnimBP4.png){:target="_blank"}
<div style="display:none;">_</div> 

**Teamwork**

Worked with designers on tuning mechanics and turning vision of game into functioning game mechanics.

Worked with artists to import assets into engine and get them running with Unreal's animation tools (Animation State Machine, Aim Offset, etc.)

Assisted with any technical challenge team members encountered.

Helped transition new and old team members from Unity to Unreal.

Managed a Perforce repository for a distributed team of in office and remote personnel.