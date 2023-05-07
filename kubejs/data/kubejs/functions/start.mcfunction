effect give @s minecraft:blindness 10 3 true
effect give @s minecraft:slowness 10 5 true
effect give @s minecraft:nausea 10 5 true
npc select id 1
npc remove
setworldspawn 2 80 6
fill 21 62 28 -14 71 -9 air
place structure kubejs:start_slime 0 92 0
tp @s 2 80 6

give @s tconstruct:hand_axe{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock","tconstruct:wood","tconstruct:rock"],tic_modifiers:[{level:1s,name:"tconstruct:stripping"},{level:1s,name:"tconstruct:axe_scrape"},{level:1s,name:"tconstruct:axe_wax_off"}],tic_multipliers:{},tic_persistent_data:{abilities:2,upgrades:1},tic_stats:{"tconstruct:attack_damage":7.0f,"tconstruct:attack_speed":0.9f,"tconstruct:durability":130.0f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":4.0f}} 1
give @s tconstruct:pickaxe{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock","tconstruct:wood","tconstruct:rock"],tic_modifiers:[],tic_multipliers:{"tconstruct:attack_damage":1.15f,"tconstruct:durability":1.3f,"tconstruct:mining_speed":0.75f},tic_persistent_data:{abilities:2,upgrades:1},tic_stats:{"tconstruct:attack_damage":1.7249999f,"tconstruct:attack_speed":1.3f,"tconstruct:durability":169.0f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":3.0f}} 1
give @s tconstruct:sword{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock","tconstruct:wood","tconstruct:rock"],tic_modifiers:[{level:1s,name:"tconstruct:silky_shears"}],tic_multipliers:{"tconstruct:durability":1.1f,"tconstruct:mining_speed":0.5f},tic_persistent_data:{abilities:2,upgrades:1},tic_stats:{"tconstruct:attack_damage":4.0f,"tconstruct:attack_speed":1.6f,"tconstruct:durability":135.3f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":2.05f}} 1
give @s minecraft:stone_shovel
give @s ftbquests:book