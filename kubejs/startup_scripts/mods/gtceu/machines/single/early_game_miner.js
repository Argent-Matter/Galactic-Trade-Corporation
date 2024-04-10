GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('resource_generation')
        .category('custom')
        .setEUIO('in')
        .setMaxIOSize(1, 4, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('resource_generator', 'simple', GTValues.LV)
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('resource_generation', true, true)
        .tankScalingFunction(tier => tier * 3200)s
})
