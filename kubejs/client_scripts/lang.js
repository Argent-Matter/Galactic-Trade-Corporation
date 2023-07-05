ClientEvents.highPriorityAssets(event => {
    const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
    rename('gtceu:mica_pulp_dust', "Mica Based Pulp")
    rename('gtceu:mica_pulp_plate', "Mica Insulator Sheet")
})