// Chest
ServerEvents.recipes(event => {
    event.shaped(
  Item.of('minecraft:chest'), 
  [ 
    'ABA', 
    'BCB', 
    'ABA'  
  ],
  {
    A: '#minecraft:logs', 
    B: '#minecraft:planks',  
    C: 'minecraft:iron_nugget'   
  }
)
})

ServerEvents.recipes(event => {
    event.shaped(
  Item.of('minecraft:crafting_table'), 
  [ 
    'BB ', 
    'AA '
  ],
  {
    A: '#minecraft:logs', 
    B: '#minecraft:planks',    
  }
)
})