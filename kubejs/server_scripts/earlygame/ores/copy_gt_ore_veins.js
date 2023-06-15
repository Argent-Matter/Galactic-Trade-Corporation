const $GTOreFeatureEntry = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.GTOreFeatureEntry');
const $RegistryOps = Java.loadClass('net.minecraft.resources.RegistryOps');
const $JsonOps = Java.loadClass('com.mojang.serialization.JsonOps');
const $RegistryAccess = Java.loadClass('net.minecraft.core.RegistryAccess');
const $WorldGenLayers = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers')

ServerEvents.lowPriorityData(event => {
    const registryOps = $RegistryOps.create($JsonOps.INSTANCE, $RegistryAccess.BUILTIN.get())
    
    $GTOreFeatureEntry.ALL.entrySet().forEach(entry => {
        const value = entry.value;
        if (value.layer != $WorldGenLayers.STONE) return;
        const json = $GTOreFeatureEntry.FULL_CODEC.encodeStart(registryOps, value).map(pair => pair.first).getOrThrow(false, msg => console.warn(msg))
        event.addJson(`kubejs:${entry.key.path}`, {
            cluster_size: json.cluster_size / 2,
            density: json.density * 1.5,
            weight: json.weight,
            layer: 'air',
            height_range: json.height_range,
            discard_chance_on_air_exposure: json.discard_chance_on_air_exposure,
            biomes: json.biomes,
            weight_modifier: json.weight_modifier,
            generator: json.generator
        })
    });
})