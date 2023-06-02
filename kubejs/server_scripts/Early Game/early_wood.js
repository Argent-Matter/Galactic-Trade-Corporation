ServerEvents.recipes(event => {
    event.shapeless('oak_planks', ['2x oak_slab'])
    event.shapeless('spruce_planks', ['2x spruce_slab'])
    event.shapeless('birch_planks', ['2x birch_slab'])
    event.shapeless('jungle_planks', ['2x jungle_slab'])
    event.shapeless('acacia_planks', ['2x acacia_slab'])
    event.shapeless('dark_oak_planks', ['2x dark_oak_slab'])
    event.shapeless('mangrove_planks', ['2x mangrove_slab'])
    event.shapeless('crimson_planks', ['2x crimson_slab'])
    event.shapeless('warped_planks', ['2x warped_slab'])
    event.shapeless('ad_astra:aeronos_planks', ['2x ad_astra:aeronos_slab'])
    event.shapeless('ad_astra:strophar_planks', ['2x ad_astra:strophar_slab'])
    event.shapeless('ad_astra:glacian_planks', ['2x ad_astra:glacian_slab'])
    event.shapeless('botania:livingwood_log', ['4x immersive_weathering:botania/livingwood_bark'])
    event.shapeless('2x botania:livingwood_planks', ['botania:livingwood_log'])
})

ServerEvents.recipes(event => {
    let makeCutting = (input, output) => event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [Item.of(input).toJson()],
        tool: {
          type: "farmersdelight:tool",
          tag: "c:axes"
        },
        result: [Item.of(output).toJson()]
        
    })
    
    makeCutting('tconstruct:stripped_greenheart_log', '3x tconstruct:greenheart_planks')
    makeCutting('minecraft:stripped_oak_log', '3x oak_planks')
    makeCutting('minecraft:stripped_spruce_log', '3x spruce_planks')
    makeCutting('minecraft:stripped_birch_log', '3x birch_planks')
    makeCutting('minecraft:stripped_jungle_log', '3x jungle_planks')
    makeCutting('minecraft:stripped_acacia_log', '3x acacia_planks')
    makeCutting('minecraft:stripped_dark_oak_log', '3x dark_oak_planks')
    makeCutting('minecraft:stripped_mangrove_log', '3x mangrove_planks')
    makeCutting('minecraft:stripped_warped_stem', '3x warped_planks')
    makeCutting('minecraft:stripped_crimson_stem', '3x crimson_planks')
    makeCutting('ad_astra:stripped_glacian_log', '3x ad_astra:glacian_planks')
})