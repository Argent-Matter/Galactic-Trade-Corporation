StartupEvents.registry('item', event => {
    event.create('avaritia_refabricated:infinity_ingot').displayName('§cInfinity Ingot')
    event.create('avaritia_refabricated:infinity_catalyst').displayName('§cInfinity Catalyst')
    event.create('avaritia_refabricated:neutronium_ingot').displayName('§bNeutronium Ingot')
    event.create('avaritia_refabricated:cosmic_neutronium_ingot').displayName('§bCosmic Neutronium Ingot')
    event.create('avaritia_refabricated:cosmic_neutronium_nugget').displayName('§bCosmic Neutronium Nugget')
    event.create('avaritia_refabricated:cosmic_neutronium_pile').displayName('§bPile of Cosmic_neutrons')
    event.create('avaritia_refabricated:neutronium_nugget').displayName('§bNeutronium Nugget')
    event.create('avaritia_refabricated:neutronium_pile').displayName('§bPile of Neutrons')
})
StartupEvents.registry('item', event => {
  event.create('avaritia_refabricated:cosmic_meatballs').maxStackSize(16).food(food => {
    food
      .hunger(20)
      .saturation(100)
      .effect('saturation', 300, 0, 1)
      .effect('nausea', 10, 0, 1)
      .effect('slowness', 10, 9, 1)
  })
})
StartupEvents.registry('item', event => {
  event.create('avaritia_refabricated:ultimate_stew').maxStackSize(8).food(food => {
    food
      .hunger(20)
      .saturation(100)
      .effect('saturation', 300, 0, 1)
      .effect('speed', 60, 9, 1)
      .effect('regeneration', 100, 9, 1)
  })
})

