// Infinity Coil
StartupEvents.registry('block', event => { 
    event.create('gtceu:infinity_coil_block', 'gtceu:coil')
        .temperature(32767)
        .level(12)
        .energyDiscount(20000)
        .tier(12)
        .coilMaterial(GTMaterials.get('infinity'))
        .texture('gtceu:block/casings/coils/machine_coil_infinity')
        .tagBlock('c:mineable/wrenches')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
        .model('gtceu:block/casings/coils/infinity_coils_block')

    })
// Crystal Matrix Coil

StartupEvents.registry('block', event => { 
    event.create('gtceu:crystal_matrix_coil_block', 'gtceu:coil')
        .temperature(25000)
        .level(11)
        .energyDiscount(15000)
        .tier(11)
        .coilMaterial(GTMaterials.get('infinity'))
        .texture('gtceu:block/casings/coils/machine_coil_crystal_matrix')
        .tagBlock('c:mineable/wrenches')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
        .model('gtceu:block/casings/coils/crystal_matrix_coil_block')
    })