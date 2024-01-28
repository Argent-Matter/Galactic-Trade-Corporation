ServerEvents.highPriorityData(event => {
    let addMeteorWithCore = (id, explosionRadius, input, coreBlock, innerRadius, outerRadius, fillBlock, weightMap, syphon) => {
        let meteorJson = JsonIO.toObject(
            {
                "type": "bloodmagic:meteor",
                "explosion": explosionRadius,
                "input": input,
                "layers": [
                  {
                    "additionalWeight": 0,
                    "fill": {
                      "block": coreBlock
                    },
                    "minWeight": 0,
                    "radius": innerRadius
                  },
                  {
                    "additionalWeight": 0,
                    "fill": {
                      "block": fillBlock
                    },
                    "minWeight": 1000,
                    "radius": outerRadius,
                    "weightMap": weightMap
                  }
                ],
                "syphon": syphon
              }
        )

        event.addJson(`bloodmagic:recipes/meteor/${id}`, meteorJson)
    }

    let addMeteor = (id, explosionRadius, input, radius, fillBlock, weightMap, syphon) => {
        let meteorJson = JsonIO.toObject(
            {
                "type": "bloodmagic:meteor",
                "explosion": explosionRadius,
                "input": input,
                "layers": [
                  {
                    "additionalWeight": 0,
                    "fill": {
                      "block": fillBlock
                    },
                    "minWeight": 1000,
                    "radius": radius,
                    "weightMap": weightMap
                  }
                ],
                "syphon": syphon
              }
        )

        event.addJson(`bloodmagic:recipes/meteor/${id}`, meteorJson)
    }


    const IronVeinMap = [
        {
            "block": "gtceu:iron_ore",
            "weight": 55
        },
        {
            "block": "gtceu:marble_hematite_ore",
            "weight": 55
        },
        {
            "block": "gtceu:marble_yellow_limonite_ore",
            "weight": 55
        },
        {
            "block": "gtceu:marble_malachite_ore",
            "weight": 25
        }
    ]


    const CopperVeinMap = [
      {
          "block": "gtceu:cassiterite_ore",
          "weight": 35
      },
      {
          "block": "gtceu:marble_chalcopyrite_ore",
          "weight": 55
      },
      {
          "block": "gtceu:marble_bornite_ore",
          "weight": 55
      },
      {
          "block": "gtceu:marble_chalcocite_ore",
          "weight": 25
      }
  ]




    addMeteor('irongtores', 0, {"item": "gtceu:wrought_iron_block"}, 9.5, "minecraft:stone", IronVeinMap, 0)
    addMeteor('coppergtores', 0, {"item": "minecraft:copper_block"}, 9.5, "minecraft:stone", CopperVeinMap, 0)
})