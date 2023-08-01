ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:centrifuge/sticky_resin_separation' })
    event.remove({ id: 'gtceu:assembler/basic_circuit_board' })
    event.remove({ id: 'gtceu:shaped/coated_board' })
    event.remove({ id: 'gtceu:shaped/vacuum_tube' })
    event.remove({ id: 'gtceu:shapeless/coated_board_1x' })
    event.remove({ id: 'gtceu:shaped/resistor_wire_fine_charcoal' })
    event.remove({ id: 'gtceu:shaped/resistor_wire_fine_carbon' })
    event.remove({ id: 'gtceu:shaped/resistor_wire_fine' })
    event.remove({ id: 'gtceu:shaped/resistor_wire_charcoal' })
    event.remove({ id: 'gtceu:shaped/resistor_wire_carbon' })
    event.remove({ id: 'gtceu:shaped/resistor_wire' })
    event.recipes.gtceu.centrifuge('gtceu:centrifuge/sticky_resin_to_resin')
        .itemInputs('gtceu:sticky_resin')
        .itemOutputs('3x gtceu:raw_rubber_dust')
        .outputFluids('gtceu:resin 20250')
        .chancedOutput('gtceu:plant_ball', 1000, 850)
        .duration(400)
        .EUt(5)

    event.recipes.gtceu.distillery('gtceu:distillery/resin_to_glue')
        .inputFluids('gtceu:resin 8100')
        .outputFluids('gtceu:glue 6075')
        .duration(15)
        .EUt(30)

    event.recipes.gtceu.assembler('gtceu:assembly_basic_circuit_board')
        .itemInputs('4x gtceu:copper_foil', 'gtceu:treated_wood_plate')
        .itemOutputs('gtceu:resin_printed_circuit_board')
        .inputFluids('gtceu:glue 8100')
        .duration(100)
        .EUt(7)

        event.recipes.gtceu.primitive_assembling('gtceu:primitive_assembled_vaccuum_tubes')
        .itemInputs('gtceu:glass_tube', '2x gtceu:steel_ring', '4x gtceu:copper_foil')
        .itemOutputs('gtceu:vacuum_tube')
        //.inputFluids('gtceu:red_alloy 11664')
        .duration(100)
        .EUt(7)

        event.recipes.gtceu.primitive_assembling('primitive_resistors_normal_coal')
        .itemInputs('4x gtceu:copper_fine_wire', '2x minecraft:paper', '2x gtceu:sticky_resin', '#c:coal_dusts')
        .itemOutputs('gtceu:resistor')
        .duration(100)
        .EUt(7)

        event.recipes.gtceu.primitive_assembling('primitive_resistors_charcoal')
        .itemInputs('4x gtceu:copper_fine_wire', '2x minecraft:paper', '2x gtceu:sticky_resin', '#c:charcoal_dusts')
        .itemOutputs('gtceu:resistor')
        .duration(100)
        .EUt(7)

        event.recipes.gtceu.primitive_assembling('primitive_resistors_coke')
        .itemInputs('4x gtceu:copper_fine_wire', '2x minecraft:paper', '2x gtceu:sticky_resin', '#c:coke_dusts')
        .itemOutputs('2x gtceu:resistor')
        .duration(100)
        .EUt(7)

    event.shaped(
        Item.of('3x gtceu:resin_circuit_board'),
        ['AAA', 'BBB', 'AAA',],
        {A:'gtceu:sticky_resin', B:'gtceu:treated_wood_plate'}
    )

    event.shapeless(
        Item.of('gtceu:resin_circuit_board'),
        ['gtceu:treated_wood_plate', 'gtceu:sticky_resin', 'gtceu:sticky_resin']
      )
})