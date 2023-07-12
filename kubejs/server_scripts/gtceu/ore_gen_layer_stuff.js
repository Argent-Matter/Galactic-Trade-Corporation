const $ChemicalHelper = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.ChemicalHelper');
const $GTOreFeatureEntry = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.GTOreFeatureEntry');

GTCEuServerEvents.oreVeins(event => {
        $GTOreFeatureEntry.ALL.keySet().forEach(veinId => {
        $ChemicalHelper.ORES_INVERSE.put(Blocks.AIR.defaultBlockState(), TagPrefix.ore)
        event.modify(veinId, vein => {
            vein.layer = 'air'
        })
    })
})