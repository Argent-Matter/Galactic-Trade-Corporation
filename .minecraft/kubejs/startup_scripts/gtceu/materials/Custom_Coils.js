// Just to let myself know:

// Tier 1 Cupronickel
// Tier 2 Kanthal
// Tier 3 Nichrome
// Tier 4 Tungstensteel
// Tier 5 HSS-G
// Tier 6 Naquadah
// Tier 7 Naquadah Alloy
// Tier 8 Trinium
// Tier 9 Tritanium

// High Speed Steel Type-S

StartupEvents.registry('block', event => { 
    event.create('gtceu:hsss_coil_block', 'gtceu:coil')
        .temperature(6301)
        .level(10)
        .energyDiscount(5000)
        .tier(10)
        .coilMaterial(GTMaterials.get('hsss'))
        .texture('gtceu:block/casings/coils/machine_coil_hsss')
        .tagBlock('fabric:mineable/wrench')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
        .model('gtceu:block/casings/coils/hsss_coil_block')
})

// Crystal Matrix Coil Tier 11

StartupEvents.registry('block', event => { 
    event.create('gtceu:crystal_matrix_coil_block', 'gtceu:coil')
        .temperature(17500)
        .level(11)
        .energyDiscount(8192)
        .tier(11)
        .coilMaterial(GTMaterials.get('crystal_matrix'))
        .texture('gtceu:block/casings/coils/machine_coil_crystal_matrix')
        .tagBlock('fabric:mineable/wrench')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
})

// Neutronium Coil Tier 12

StartupEvents.registry('block', event => {
    event.create('gtceu:neutronium_coil_block', 'gtceu:coil')
    .temperature(18746)
    .level(12)
    .energyDiscount(13494)
    .tier(12)
    .coilMaterial(GTMaterials.get('neutronium'))
    .texture('gtceu:block/casings/coils/neutronium_coil_block')
    .tagBlock('fabric:mineable/wrench')
    .hardness(5)
    .requiresTool(true)
    .material('metal')
})

// Cosmic Neutronium Coil Tier 13

StartupEvents.registry('block', event => {
    event.create('gtceu:cosmic_neutronium_coil_block', 'gtceu:coil')
    .temperature(21745)
    .level(13)
    .energyDiscount(16384)
    .tier(13)
    .coilMaterial(GTMaterials.get('cosmic_neutronium'))
    .texture('gtceu:block/casings/coils/cosmic_neutronium_coil_block')
    .tagBlock('fabric:mineable/wrench')
    .hardness(5)
    .requiresTool(true)
    .material('metal')
})

// Infinity Coil Tier 14

StartupEvents.registry('block', event => { 
    event.create('gtceu:infinity_coil_block', 'gtceu:coil')
        .temperature(32767)
        .level(14)
        .energyDiscount(20000)
        .tier(14)
        .coilMaterial(GTMaterials.get('infinity'))
        .texture('gtceu:block/casings/coils/machine_coil_infinity')
        .tagBlock('fabric:mineable/wrench')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
    })
