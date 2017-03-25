---
title: Projects and Experience
---

## Lead N Brimstone
Site: [Lead N Brimstone](http://www.wadenkanestudios.com/#!projects/leadnbrimestone.html)

[![Lead N Brimstone Preview Picture](/assets/img/LnBPreview1.png)](/assets/img/LnBPreview1.png){:target="_blank"}

### Game Programmer (C++/Blueprint Scripting/Unreal Editor)
(May 2016 to Present)

### Game Description
A fast paced, 2D side scrolling shooter inspired by _Contra_, _Ghost 'n Goblins_ and _Doom_. Players take control of a knight fighting off endless waves of increasingly difficult demonic creatures. For this project we want to capture the magic of classic arcade and NES games: Easy to learn, difficult to master. We plan on having a gameplay loop that is brutally difficult, but never punishes the player with arbitrary failure states and instead empowers them to master their skills in order to beat their next foe.

*Weapon System:*

We needed a weapon system that had to be easily extendable, provided base functionality and be used in a variety of situations. It had to encompass trace-line, projectile, melee and area of effect variations, as well as be used by enemies, players and the environment.

My solution was to create a base weapon class with a series of parameters (fire rate, max spread, etc.), functionality (burst fire, overheating, etc.), and exposing key events and variables to Blueprints. I then extended this base class into two sub-classes, AShootWeapon and AMeleeWeapon, to handle the specifics of the actual firing mechanism.

*Characters:*

Designed a character system that can be used by both players and enemies. I accomplished this by using the excellent template Epic provided in the ACharacter class. by extending this with key functionality (health/damage, stunned state, etc.) and various variables. Common parameters and behaviors are also exposed to easily cue animations in an animation state machine.

*AI:*

Unreal Engine 4 offers a rich library of AI functionality for traversing through complex 3D worlds and querying their environment to make nuanced decisions. While this is probably a life saver for most projects, these systems were too complex for our retro AI.

What I wanted to accomplish was discrete behaviors (charging, fleeing, etc.) that could be mixed and match to easily create AI for a large range of enemies. I accomplished this by coding these behaviors in the base AI class and then exposing them to tasks and decorators in the behavior tree. This allows myself and designers to easily prototype and modify enemy behaviors by modifying parameters set in the base AI class and modifying nodes in the AI behavior tree.

*Project Management:*

I started as an intern at Waden Kane Games. Starting off I was tasked with researching UE4 best technical practices and setting up a Perforce repository. I accomplished both of these tasks in a short time and I continue to use this foundational knowledge to assist my team members.

After the Lead Programmer on the project moved onto another project, I took over his responsibilities of coding all of the game. It was a tough transition, but thankfully I was able to utilize my knowledge of game engines and my ability to research problems on my own, to get prototype elements of the game up and running.

When I'm not coding, I assist my team members with various technical challenges they come up against. Recently one of our artists found that our levels were becoming too big and complex for his machine. We solved this problem by splitting up the level into 8 chunks using UE4's streaming features. This solution accomplished several things, including allowing team members on lower spec PCs to modify the level, allowing multiple people to edit a level at once and provide a base test case for streaming the level in game.

**Lead N Brimstone Code Samples:**
[C++ Coding Samples on Github](https://github.com/calebsmth54/Code-Samples/tree/master/LNB)

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

## Personal Projects and Experience (pre-2015)

**Horror Turn Based Game (C++/Blueprint Scripting/Unreal Editor) Early WIP:** A unique take on the horror movie genre inspired by the film _Cabin in the Woods_ and the tabletop game _Betrayal on Haunted House Hill_, that combines horror and turn based strategy concepts. Players take control of the ephemeral evil force lurking behind the scenes. Development put on hold to focus on Lead N Brimstone.

**Source Engine Modding (C++/Level Design & Scripting/Hammer Editor):** Developed numerous maps with a focus on building level geometry, setting atmospheric tone with lighting and effects, and creating level scripted events. Made minor code modifications to weapon, character and game mode classes. Worked collaboratively with other modders.
