ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('mica_based_pulp_one')
        .itemInputs('3x gtceu:mica_dust', '2x gtceu:raw_rubber_dust')
        .itemOutputs('4x gtceu:mica_pulp_dust')
        .duration(400)
        .EUt(7)
        .circuit(2)

    event.recipes.gtceu.mixer('mica_based_pulp_two')
        .itemInputs('3x gtceu:mica_dust', 'gtceu:sticky_resin')
        .itemOutputs('4x gtceu:mica_pulp_dust')
        .duration(400)
        .EUt(7)
        .circuit(2)

    event.recipes.gtceu.forming_press('mica_based_sheet')
        .itemInputs('4x gtceu:mica_pulp_dust', 'gtceu:asbestos_dust')
        .itemOutputs('4x gtceu:mica_based_sheet')
        .duration(400)
        .EUt(28)

    event.recipes.gtceu.alloy_smelter('mica_sheet_one')
        .itemInputs('4x gtceu:mica_based_sheet', 'gtceu:nether_quartz_dust')
        .itemOutputs('4x gtceu:mica_pulp_plate')
        .duration(400)
        .EUt(15)

    event.recipes.gtceu.alloy_smelter('mica_sheet_two')
        .itemInputs('4x gtceu:mica_based_sheet', '#c:certus_quartz_dusts')
        .itemOutputs('4x gtceu:mica_pulp_plate')
        .duration(400)
        .EUt(15)

    event.recipes.gtceu.alloy_smelter('mica_sheet_three')
        .itemInputs('4x gtceu:mica_based_sheet', 'gtceu:quartzite_dust')
        .itemOutputs('4x gtceu:mica_pulp_plate')
        .duration(400)
        .EUt(15)
})


