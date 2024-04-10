ServerEvents.recipes(event => {
    event.recipes.gtceu.meow_meow('resource_generation')
    .chancedOutput(Item.of('minecraft:raw_iron', 1), 500, 0)
        .duration(400)
        .circuit(1)
})