
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("shipping_port", 'simple', GTValues.LV, GTValues.MV, GTValues.HV)
        .recipeTypes('shipping', true, true)
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create("shipping")
        .category('electric')
        .setMaxIOSize(9, 3, 3, 3) //Max Item Input, Max Item Output, Max Fluid Input, Max Fluid Output
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);
})
