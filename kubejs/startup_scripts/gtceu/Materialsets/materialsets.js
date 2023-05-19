GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('infinity', 69, 420, -1, null, '∞', false);
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("infinity")
        .ingot(1)
        .element(GTElements.get("infinity"))
        .color(0xffffff).iconSet('infinity')
        .flags(GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_ROUND)
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('gtceu:infinity')
})

