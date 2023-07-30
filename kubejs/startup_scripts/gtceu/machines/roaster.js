GTCEuStartupEvents.registry('gtceu:machine', event => {
        event.create("electric_roaster", 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.ZPM)
                .recipeType('electric_roasting', true, true)
                .tankScalingFunction(tier => tier * 243000)
                .workableTieredHullRenderer(GTCEu.id("block/machines/electric_roaster"))
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
        event.create('electric_roasting')
                .category('electric')
                .setMaxIOSize(2, 2, 2, 3)
                .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
                .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
                .setSound(GTSoundEntries.BOILER);
})
