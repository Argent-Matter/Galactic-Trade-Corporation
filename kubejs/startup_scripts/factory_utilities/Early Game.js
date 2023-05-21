StartupEvents.registry('block', event => {
    event.create('factory_utilities:mana_infused_cobblestone').material('stone').hardness(1.5)
})

StartupEvents.registry('item', event => {
    event.create('factory_utilities:crude_mana_residue').maxStackSize(16)
})
