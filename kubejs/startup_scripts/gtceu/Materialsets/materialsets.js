// Infinity
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('infinity', 69, 420, -1, null, '∞', false);
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("infinity")
        .ingot(1)
        .element(GTElements.get("infinity"))
        .color(0xFFFFFF).iconSet('infinity')
        .blastTemp(30000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_ROUND)
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('gtceu:infinity').parent(GTMaterialIconSet.SHINY)
})


// Crystal Matrix
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('crytal_matrix', 60, 400, -1, null, 'C?', false);
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("crystal_matrix")
        .ingot(1)
        .element(GTElements.get("crystal_matrix"))
        .color(0xB4FFFB).iconSet('crystal_matrix')
        .blastTemp(30000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_ROUND)
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('gtceu:crystal_matrix').parent(GTMaterialIconSet.SHINY)
})