ServerEvents.recipes(event => {
    event.recipes.gtceu.shipping('botania:orange_mystical_petal')             
                .itemInputs('3x botania:red_mushroom', 'botania:yellow_mushroom')
                .itemOutputs('2x botania:orange_mushroom')
                .duration(120)
                .inputFluids('minecraft:water 1000')
}
)