const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const $WireProperties = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties')

GTCEuStartupEvents.registry('gtceu:material', event => {
    GTMaterials.HSSS.setProperty($PropertyKey.WIRE, new $WireProperties('524288', '6', '8'))
})