// Chest
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:chest'),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: '#minecraft:logs',
      B: '#minecraft:planks',
      C: 'minecraft:iron_nugget'
    }
  )
})

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:crafting_table'),
    [
      'BB ',
      'AA '
    ],
    {
      A: '#minecraft:logs',
      B: '#minecraft:planks',
    }
  )
})


ServerEvents.recipes(event => {
  event.recipes.create.item_application(['minecraft:cobblestone', 'immersive_weathering:moss_clump'], ['minecraft:mossy_cobblestone', '#c:shovels']).keepHeldItem()
})

LootJS.modifiers((event) => {
  event.addBlockLootModifier("kubejs:mana_infused_cobblestone").replaceLoot("kubejs:mana_infused_cobblestone", "minecraft:gravel")
})

ServerEvents.recipes(event => {
  event.shapeless('2x tconstruct:greenheart_planks', ['#tconstruct:greenheart_logs'])
})

