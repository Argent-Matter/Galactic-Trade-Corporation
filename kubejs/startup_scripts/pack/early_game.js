StartupEvents.registry('block', event => {
    event.create('kubejs:mana_infused_cobblestone').material('stone').hardness(1.5)
})

StartupEvents.registry('item', event => {
    event.create('kubejs:crude_mana_residue').maxStackSize(16)
})
