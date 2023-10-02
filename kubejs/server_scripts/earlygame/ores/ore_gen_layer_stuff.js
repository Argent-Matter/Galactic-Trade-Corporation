const $ChemicalHelper = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.ChemicalHelper');
GTCEuServerEvents.oreVeins(event => {
$ChemicalHelper.ORES_INVERSE.put(Blocks.AIR.defaultBlockState(), TagPrefix.ore)
GTRegistries.ORE_VEINS.keys().forEach(veinId => {
    event.modify(veinId, vein => {
        vein.layer = 'air'
        vein.range({
            height: {
                type: "uniform",
                min_inclusive: {
                  absolute: -56
                },
                max_inclusive: {
                  absolute: 256
                }
            }
        })
    })
})

})