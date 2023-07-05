
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("shipping_port", 'simple')
        .recipeType('shipping')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV);
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create("shipping")
        .category('electric')
        .setMaxIOSize(9, 3, 3, 3) //Max Item Input, Max Item Output, Max Fluid Input, Max Fluid Output
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);
})