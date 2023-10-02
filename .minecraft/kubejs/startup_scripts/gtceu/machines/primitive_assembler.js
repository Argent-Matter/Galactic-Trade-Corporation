GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('primitive_component_assembler', 'steam', true)
    .recipeTypes('primitive_assembling')
    .workableTieredHullRenderer(GTCEu.id("block/machines/primitive_component_assembler"))
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('primitive_assembling')
        .category('electric')
        .setMaxIOSize(4, 1, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_CIRCUIT, FillDirection.LEFT_TO_RIGHT)
	    .setSound(GTSoundEntries.METAL_PIPE);
})


