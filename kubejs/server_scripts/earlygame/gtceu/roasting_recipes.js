ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_roasting("gtceu:electric_pyrite_to_sulfur")
        .itemInputs('2x gtceu:pyrite_dust')
        .itemOutputs('gtceu:iron_dust', 'gtceu:sulfur_dust')
        .duration(280)
        .inputFluids('gtceu:steam 81000')

        event.recipes.gtceu.electric_roasting("gtceu:primitive_pyrite_to_sulfur")
        .itemInputs('2x gtceu:pyrite_dust')
        .itemOutputs('gtceu:iron_dust', 'gtceu:sulfur_dust')
        .duration(140)
        .EUt(7)
})