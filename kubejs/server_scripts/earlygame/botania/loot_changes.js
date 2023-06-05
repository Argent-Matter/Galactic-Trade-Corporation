
LootJS.modifiers((event) => {
    event.addBlockLootModifier("botania:livingwood_log").replaceLoot("botania:livingwood_log", "2x immersive_weathering:botania/livingwood_bark");
    ItemFilter.ALWAYS_TRUE
});
