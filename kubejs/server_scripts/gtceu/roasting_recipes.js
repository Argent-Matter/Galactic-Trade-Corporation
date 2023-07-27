ServerEvents.recipes(event => {
    event.recipes.gtceu.electric_roaster("gtceu:electric_pyrite_sulfur")
        .itemInputs('2x gtceu:pyrite_dust')
        .itemOutputs('gtceu:iron_dust', 'gtceu:sulfur_dust')
        .duration(120)
        .EUt(24)
}
)