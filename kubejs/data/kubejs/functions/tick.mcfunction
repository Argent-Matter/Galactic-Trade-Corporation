execute as @a run scoreboard players enable @s startTrigger
#[scores={startTrigger=..0}]
execute as @a[scores={startTrigger=1}] run function kubejs:start
execute as @a[scores={startTrigger=1}] run scoreboard players reset @s startTrigger

execute as @a[scores={startTrigger=2}] run function kubejs:kill
execute as @a[scores={startTrigger=2}] run scoreboard players reset @s startTrigger
