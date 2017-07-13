---
title: Projects and Experience
---

## Lead N Brimstone
Site: [Lead N Brimstone](http://www.wadenkanestudios.com/#!projects/leadnbrimestone.html)

<iframe src="https://drive.google.com/file/d/0ByegvJ7suqvHRjFoTTNPbW5TM2c/preview" width="640" height="480" frameBorder="0"></iframe>

### Game Programmer (C++/Blueprint Scripting/Unreal Editor)
(May 2016 to Present)

### Game Description
A fast paced, 2D side scrolling shooter inspired by _Contra_, _Ghost 'n Goblins_ and _Doom_. Players take control of a knight fighting through levels of increasingly difficult demonic creatures.

**Lead N Brimstone Code Samples:**
[Code on Github](https://github.com/calebsmth54/LeadNBrimstone)


**Animation State Machine Sample:**

[![Lead N Brimstone Preview Picture](/assets/img/LnBPreview2.png)](/assets/img/LnBPreview2.png){:target="_blank"}


**Blueprint Scripting Sample:**

[![Lead N Brimstone Preview Picture](/assets/img/BPPreview1.png)](/assets/img/BPPreview1.png){:target="_blank"}

[Part 2](/assets/img/BPPreview2.png) -
[Part 3](/assets/img/BPPreview3.png) -
[Part 4](/assets/img/BPPreview4.png) -
[Part 5](/assets/img/BPPreview5.png) -
[Part 6](/assets/img/BPPreview6.png)


**AI Behavior Tree Sample:**

[![Lead N Brimstone Preview Picture](/assets/img/LnBPreview3.png)](/assets/img/LnBPreview3.png){:target="_blank"}


*Weapon System:*

We needed a weapon system that could be easily extend base functionality to be used in a variety of situations.

My solution was to create a base weapon class with a series of parameters (fire rate, max spread, etc.), functionality (burst fire, overheating, etc.), and exposing key events and variables to Blueprints. I then extended this base class into two sub-classes, AShootWeapon and AMeleeWeapon, to handle the specifics of the actual firing mechanism.


*AI:*

Unreal Engine 4 offers a rich library of AI functionality for traversing through complex 3D worlds and querying their environment to make nuanced decisions. While this is probably a life saver for more complicated projects, those features are unneeded in ours.

What I wanted to accomplish was discrete behaviors (charging, fleeing, etc.) that could be mixed and match to easily create AI for a large range of enemies. I accomplished this by coding these behaviors in the base AI class and then exposing them to tasks and decorators in the behavior tree. This allows myself and designers to easily prototype and modify enemy behaviors by modifying parameters set in the base AI class and modifying nodes in the AI behavior tree.


*Project Management:*

When I'm not coding, I assist my team members with various technical challenges they come up against. Recently one of our artists found that our levels were becoming too big and complex for his machine to handle. We solved this problem by splitting up the level into 8 chunks using UE4's level streaming functionality. This solution accomplished several things, including allowing team members on lower spec PCs to modify the level, allowing multiple people to edit a level at once and provide a test case for streaming the level in game.


## Personal Projects and Experience (pre-2015)


**Horror Turn Based Game (C++/Blueprint Scripting/Unreal Editor) Early WIP:** A unique take on the horror movie genre inspired by the film _Cabin in the Woods_ and the tabletop game _Betrayal on Haunted House Hill_, that combines horror and turn based strategy concepts. Players take control of the ephemeral evil force lurking behind the scenes. Development put on hold to focus on Lead N Brimstone.


**Source Engine Modding (C++/Level Design & Scripting/Hammer Editor):** Developed numerous maps with a focus on building level geometry, setting atmospheric tone with lighting and effects, and creating level scripted events. Made minor code modifications to weapon, character and game mode classes. Worked collaboratively with other modders.
