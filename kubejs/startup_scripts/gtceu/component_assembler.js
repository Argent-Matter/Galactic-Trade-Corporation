GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('component_assembler', 'simple', GTValues.LV, GTValues.MV, GTValues.HV)
    .recipeType('component_assembling', true ,true)
    .workableTieredHullRenderer(GTCEu.id("block/machines/component_assembler"))
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('component_assembling')
        .category('electric')
        .setMaxIOSize(4, 1, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_CIRCUIT, FillDirection.LEFT_TO_RIGHT)
	    .setSound(GTSoundEntries.METAL_PIPE);
})
