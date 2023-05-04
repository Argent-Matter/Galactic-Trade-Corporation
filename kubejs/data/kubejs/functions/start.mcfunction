effect give @s minecraft:blindness 10 3 true
effect give @s minecraft:slowness 10 5 true
effect give @s minecraft:nausea 10 5 true
npc select id 1
npc remove
setworldspawn 0 72 0
fill 21 62 22 -14 71 -7 air
place template kubejs:starter_island -2 64 -2
tp @s 0 72 1


