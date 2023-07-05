StartupEvents.registry('block', event => {
    event.create('kubejs:mana_infused_cobblestone').material('stone').hardness(1.5).tagBlock('minecraft:mineable/pickaxe').item(builder => builder.maxStackSize(32))
    event.create('kubejs:mana_infused_gravel').material('dirt').tagBlock('minecraft:mineable/shovel').item(builder => builder.maxStackSize(32))
    event.create('kubejs:mana_infused_sand').material('sand').tagBlock('minecraft:mineable/shovel').item(builder => builder.maxStackSize(32))
})

StartupEvents.registry('item', event => {
event.create('kubejs:crude_mana_residue').maxStackSize(16)
})

