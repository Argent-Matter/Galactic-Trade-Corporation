GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('primitive_roaster', 'steam', true)
        .recipeType('primitive_roasting')
        .workableTieredHullRenderer(GTCEu.id("block/machines/primitive_roaster"))
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('primitive_roasting')
        .category('electric')
        .setMaxIOSize(2, 2, 2, 3)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER);
})