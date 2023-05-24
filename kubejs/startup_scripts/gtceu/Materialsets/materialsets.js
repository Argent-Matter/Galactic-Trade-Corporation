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


// Manasteel
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('manasteel', 26, 42, -1, null, 'Fe', false);
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("manasteel")
        .ingot(1)
        .element(GTElements.get("manasteel"))
        .color(0x0097FF).iconSet('manasteel')
        .blastTemp(3000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_ROUND)
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('gtceu:manasteel').parent(GTMaterialIconSet.BRIGHT)
})


// Elementium

GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('elementium', 26, 42, -1, null, 'Fe?', false);
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("elementium")
        .ingot(1)
        .element(GTElements.get("elementium"))
        .color(0xFF02F6).iconSet('elementium')
        .blastTemp(3000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_ROUND)
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('gtceu:elementium').parent(GTMaterialIconSet.BRIGHT)
})


// Terrasteel


GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('terrasteel', 29, 45, -1, null, 'FeCBeK?', false);
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("terrasteel")
        .ingot(1)
        .element(GTElements.get("terrasteel"))
        .color(0x3AFF00).iconSet('terrasteel')
        .blastTemp(3800)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_ROUND)
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('gtceu:terrasteel').parent(GTMaterialIconSet.BRIGHT)
})
