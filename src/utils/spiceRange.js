export const addSpice = rooms =>{
    let roomKeys = Object.keys(rooms)
    console.log('these are some rooms keys',roomKeys.length)
    for(let i = 0; i<roomKeys.length; i++){
      switch (rooms[i].title){
        case "Chile de Arbol Peppers Room":{
            rooms[i]={...rooms[i],"s": [15000, 65000]}
        }
        case "Habanero Peppers Room":{
            rooms[i]={...rooms[i],"s": [100000, 350000]}
        }
        case "Jalapeno Room":{
            rooms[i]={...rooms[i],"s": [2500, 8000]}
        }
        case "Chiltepin Peppers Room":{
            rooms[i]={...rooms[i],"s": [50000, 100000]}
        }
        case "Cayenne Peppers Room":{
            rooms[i]={...rooms[i],"s": [30000, 50000]}
        }
        case "Ghost Peppers Room":{
            rooms[i]={...rooms[i],"s": [1000000, 1000000]}
        }
        case "Carolina Reaper Chili Pepper Room":{
            rooms[i]={...rooms[i],"s": [2200000, 5000000] }
        }
        case "Serrano Peppers Room":{
            rooms[i]={...rooms[i],"s": [10000, 23000]}
        }
        // default: return rooms[i]
      }
    }
  }