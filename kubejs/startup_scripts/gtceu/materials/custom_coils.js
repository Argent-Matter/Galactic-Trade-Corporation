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

// Crystal Matrix Coil Tier 10

StartupEvents.registry('block', event => { 
    event.create('gtceu:crystal_matrix_coil_block', 'gtceu:coil')
        .temperature(17500)
        .level(10)
        .energyDiscount(8192)
        .tier(10)
        .coilMaterial(GTMaterials.get('crystal_matrix'))
        .texture('gtceu:block/casings/coils/machine_coil_crystal_matrix')
        .tagBlock('fabric:mineable/wrench')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
        .model('gtceu:block/casings/coils/crystal_matrix_coil_block')
})

// Neutronium Coil Tier 11

StartupEvents.registry('block', event => {
    event.create('gtceu:neutronium_coil_block', 'gtceu:coil')
    .temperature(21745)
    .level(11)
    .energyDiscount(16384)
    .tier(11)
    .coilMaterial(GTMaterials.get('neutronium'))
    .texture('gtceu:block/casings/coils/neutronium_coil_block')
    .tagBlock('fabric:mineable/wrench')
    .hardness(5)
    .requiresTool(true)
    .material('metal')
    .model('gtceu:block/casings/coils/neutronium_coil_block')
})

// Cosmic Neutronium Coil Tier 12

StartupEvents.registry('block', event => {
    event.create('gtceu:cosmic_neutronium_coil_block', 'gtceu:coil')
    .temperature(21745)
    .level(12)
    .energyDiscount(16384)
    .tier(12)
    .coilMaterial(GTMaterials.get('cosmic_neutronium'))
    .texture('gtceu:block/casings/coils/cosmic_neutronium_coil_block')
    .tagBlock('fabric:mineable/wrench')
    .hardness(5)
    .requiresTool(true)
    .material('metal')
    .model('gtceu:block/casings/coils/cosmic_neutronium_coil_block')
})

// Infinity Coil Tier 13

StartupEvents.registry('block', event => { 
    event.create('gtceu:infinity_coil_block', 'gtceu:coil')
        .temperature(32767)
        .level(13)
        .energyDiscount(20000)
        .tier(13)
        .coilMaterial(GTMaterials.get('infinity'))
        .texture('gtceu:block/casings/coils/machine_coil_infinity')
        .tagBlock('fabric:mineable/wrench')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
        .model('gtceu:block/casings/coils/infinity_coils_block')

    })
