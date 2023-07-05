
// Elements
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('infinity', 69, 420, -1, null, '∞', false);
    event.create('crytal_matrix', 60, 400, -1, null, 'C?', false);
    event.create('manasteel', 26, 42, -1, null, 'Fe', false);
    event.create('elementium', 26, 42, -1, null, 'Fe?', false);
    event.create('terrasteel', 29, 45, -1, null, 'FeCBeK?', false);
    event.create('ferrous_metal', 26, 42, -1, null, 'Fe+', false);
    event.create('cosmos', 1000, 1000, -1, null, 'Ci', false)
    event.create('mica_pulp', 0, 8, -1, null, 'C5KAl3Si3F2O10H8', false)
})

// NOTE: PUT MATERIALS DEPENDING ON OTHER MATERIALS IN SECOND~THIRD-DEGREE BLOCKS

// Element materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("infinity")
        .ingot(1)
        .element(GTElements.get("infinity"))
        .color(0xFFFFFF).iconSet('infinity')
        .blastTemp(30000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_ROUND);
    
    event.create("crystal_matrix")
        .ingot(1)
        .element(GTElements.get("crystal_matrix"))
        // ["components(java.lang.Object[])"]() TODO fix composition
        .color(0xB4FFFB).iconSet('crystal_matrix')
        .blastTemp(30000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_ROUND);
        
    event.create("manasteel")
        .ingot(1)
        .element(GTElements.get("manasteel"))
        .color(0x0097FF).iconSet('manasteel')
        .blastTemp(3000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_ROUND);

    event.create("elementium")
        .ingot(1)
        .element(GTElements.get("elementium"))
        .color(0xFF02F6).iconSet('elementium')
        .blastTemp(3000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_ROUND);

    event.create("terrasteel")
        .ingot(1)
        .element(GTElements.get("terrasteel"))
        .color(0x3AFF00).iconSet('terrasteel')
        .blastTemp(3800)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_ROUND);

    event.create("ferrous_metal")
        .ingot(1)
        .element(GTElements.get("ferrous_metal"))
        .color(0x00E4FF).iconSet('ferrous_alloy')
        .blastTemp(3000)
        //["components(java.lang.Object[])"]() // (Ma2C3)2Fe+
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_ROUND)

    event.create('cosmos')
        .dust(6).fluid(GTFluidTypes.GAS)
        .element(GTElements.get("cosmos"))
        .color(0x6e6e6e).iconSet('cosmic')

            event.create('mica_pulp')
                .dust(6)
                .element(GTElements.get("mica_pulp"))
                .color(0xf1c345).iconSet('mica')
                .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL)
})

// 2nd-degree materials
GTCEuStartupEvents.registry('material', event => {
    event.create('cosmic_neutronium')
        .ingot(6).fluid()
        ["components(java.lang.Object[])"](GTMaterials.get('cosmos'), 1, GTMaterials.get('neutronium'), 1)
        .color(0x121212).iconSet('cosmic')
        .blastTemp(10000)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_ROUND)
    })


// Icon Sets
GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('gtceu:infinity').parent(GTMaterialIconSet.SHINY)
    event.create('gtceu:crystal_matrix').parent(GTMaterialIconSet.SHINY)
    event.create('gtceu:manasteel').parent(GTMaterialIconSet.BRIGHT)
    event.create('gtceu:elementium').parent(GTMaterialIconSet.BRIGHT)
    event.create('gtceu:terrasteel').parent(GTMaterialIconSet.BRIGHT)
    event.create('gtceu:ferrous_alloy').parent(GTMaterialIconSet.BRIGHT)
    event.create('gtceu:cosmic').parent(GTMaterialIconSet.SHINY)
    event.create('gtceu:mica_pulp').parent(GTMaterialIconSet.SHINY)
})