let UtilsJS = Java.loadClass("dev.latvian.mods.kubejs.util.UtilsJS")

GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {
    function createStoneTypeOre(type, properties) {
        if (properties === undefined)
            properties = {}

        if (properties.baseModel === undefined)
            properties.baseModel = type.namespace + ":block/" + type.path

        if (properties.material === undefined)
            properties.material = null

        if (properties.blockState === undefined)
            properties.blockState = (() => Block.getBlock(type).defaultBlockState())

        e.create(type.path, 'ore')
            .stateSupplier(properties.blockState)
            .baseModelLocation(properties.baseModel)
            .materialSupplier(properties.material)
            .miningToolTag("mineable/pickaxe")
    }

    // GregtechCEu Marble
    createStoneTypeOre('gtceu:marble')

})