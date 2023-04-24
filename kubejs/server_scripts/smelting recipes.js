ServerEvents.recipes(e => {
    let minecraftOres = ['iron', 'gold']
    let gtceuOres = ['zinc', 'nickel', 'cobalt', 'tin', 'beryllium', 'manganese', 'lead', 'antimony', 'silver', 'copper']
    minecraftOres.forEach(ore => e.blasting(`minecraft:${ore}_nugget`, `#c:${ore}_ores`).xp(0.5))
    minecraftOres.forEach(ore => e.smelting(`minecraft:${ore}_nugget`, `#c:${ore}_ores`).xp(0.25))
    gtceuOres.forEach(ore => e.blasting(`gtceu:nugget.${ore}`, `#c:${ore}_ores`).xp(0.5))
    gtceuOres.forEach(ore => e.smelting(`gtceu:nugget.${ore}`, `#c:${ore}_ores`).xp(0.25))
})
  ServerEvents.recipes(e => {
    let minecraftOres = ['iron', 'gold']
    let gtceuOres = ['zinc', 'nickel', 'cobalt', 'tin', 'beryllium', 'manganese', 'lead', 'antimony', 'silver', 'copper']
    minecraftOres.forEach(ore => e.smelting(`minecraft:${ore}_nugget`, `#c:${ore}_ores`).xp(0.25))
    minecraftOres.forEach(ore => e.blasting(`minecraft:${ore}_nugget`, `#c:${ore}_ores`).xp(0.5))
    gtceuOres.forEach(ore => e.smelting(`gtceu:nugget.${ore}`, `#c:netherrack_${ore}_ores`).xp(0.25))
    gtceuOres.forEach(ore => e.blasting(`gtceu:nugget.${ore}`, `#c:netherrack_${ore}_ores`).xp(0.5))

  })
  ServerEvents.recipes(e => {
    let minecraftOres = ['iron', 'gold']
    let gtceuOres = ['zinc', 'nickel', 'cobalt', 'tin', 'beryllium', 'manganese', 'lead', 'antimony', 'silver', 'copper']
    minecraftOres.forEach(ore => e.smelting(`minecraft:${ore}_nugget`, `#c:${ore}_ores`).xp(0.25))
    minecraftOres.forEach(ore => e.blasting(`minecraft:${ore}_nugget`, `#c:${ore}_ores`).xp(0.5))
    gtceuOres.forEach(ore => e.smelting(`gtceu:nugget.${ore}`, `#c:endstone_${ore}_ores`).xp(0.25))
    gtceuOres.forEach(ore => e.blasting(`gtceu:nugget.${ore}`, `#c:endstone_${ore}_ores`).xp(0.5))
  })

