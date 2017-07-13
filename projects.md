---
title: Projects and Experience
---

## Lead N Brimstone
Site: [Lead N Brimstone](http://www.wadenkanestudios.com/#!projects/leadnbrimestone.html)

<iframe src="https://drive.google.com/file/d/0ByegvJ7suqvHRjFoTTNPbW5TM2c/preview" width="640" height="480" frameBorder="0"></iframe>

### Game Programmer (C++/Blueprint Scripting/Unreal Editor)
(May 2016 to April 2017)

### Game Description
A fast paced, 2D side scrolling shooter inspired by _Contra_, _Ghost 'n Goblins_ and _Doom_. Players take control of a knight fighting through fantasy world full of demonic creatures.

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

We needed a weapon system that could be easily extended for a variety of weapon types.

My solution was to create a base weapon class with a series of parameters (fire rate, max spread, etc.), functionality (burst fire, overheating, etc.), and exposing key events and variables to Blueprints. I then extended this base class into two sub-classes, AShootWeapon and AMeleeWeapon, to handle the specifics of the actual firing mechanism.


*AI:*

What I wanted to accomplish was discrete behaviors (charging, fleeing, etc.) that could be mixed and match to create AI for a large range of enemies. I accomplished this by coding these behaviors in the base AI class and then exposing them to Behavior Tree Tasks and Decorators. This allows coders and designers to easily prototype and modify enemy behaviors by tweaking parameters set in the base AI class and using specific nodes in the AI behavior tree.


*Project Management:*

When I'm not coding, I assist my team members with various technical challenges they come up against.

One of our artists found that our levels were becoming too big and complex for his machine to handle. We solved this problem by splitting up the level into separate chunks using UE4's level streaming functionality. This solution accomplished several things, including giving team members on lower end PCs  the ability to work on levels, allowing multiple people to edit a level at once and provide a test case for future use of the streaming system.


## Personal Projects and Experience (pre-2015)


**Horror Turn Based Game (C++/Blueprint Scripting/Unreal Editor) Early WIP:** A unique take on the horror movie genre inspired by the film _Cabin in the Woods_ and the tabletop game _Betrayal on Haunted House Hill_, that combines horror and turn based strategy concepts. Players take control of the ephemeral evil force lurking behind the scenes. Development put on hold to focus on Lead N Brimstone.


**Source Engine Modding (C++/Level Design & Scripting/Hammer Editor):** Developed numerous maps with a focus on building level geometry, setting atmospheric tone with lighting and effects, and creating level scripted events. Made minor code modifications to weapon, character and game mode classes. Worked collaboratively with other modders.
