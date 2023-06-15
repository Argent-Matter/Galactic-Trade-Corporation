//priority: 1
const $Registry = Java.loadClass('net.minecraft.core.Registry')

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('mana_cobblestone', 'ore')
        .stateSupplier(() => $Registry.BLOCK.get('kubejs:mana_infused_cobblestone').defaultBlockState())
        .material(Material.STONE)
        .color(MaterialColor.COLOR_BLUE)
        .sound(SoundType.STONE)
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty);
})