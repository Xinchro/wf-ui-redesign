let interval = 4
let activePowerDot = 0;

let intervalThings = setInterval(function(){doIntervalThings()}, interval*1000)

let changePowerDots = setInterval(function(){changeToNextPowerDot()}, interval*1000/4)

function doIntervalThings() {
  console.log("-----TICK-----")
  lowerStatsByIncr()
}

function changeToNextPowerDot() {
  $(`#power-dots ul li:nth-child(${activePowerDot})`).css("border-color", "white")
  if(activePowerDot>=4 || activePowerDot<1) {
    activePowerDot = 1
  } else {
    activePowerDot++
  }
  $(`#power-dots ul li:nth-child(${activePowerDot})`).css("border-color", "cyan")
}

function lowerStatsByIncr() {
  console.log(lowerShields(10))
  console.log(lowerHealth(10))
  console.log(lowerEnergy(10))
  console.log(lowerTransference(10))
  barsUpdate()
}

let maxShield = 240
let shield = 240
function lowerShields(amount) {
   if(shield - amount > 0) {
     return shield = shield - amount
   } else {
     return shield = 0
   }
}
function raiseShield(amount) {
  if(shield + amount < maxShield) {
     return shield = shield + amount
   } else {
     return shield = maxShield
   }
}
function resetShield() {
  return shield = maxShield
}
let maxHealth = 300
let health = 300
function lowerHealth(amount) {
   if(health - amount > 0) {
     return health = health - amount
   } else {
     return health = 0
   }
}
function raiseHealth(amount) {
  if(health + amount < maxHealth) {
     return health = health + amount
   } else {
     return health = maxHealth
   }
}
function resetHealth() {
  return health = maxHealth
}
let maxEnergy = 600
let energy = 600
function lowerEnergy(amount) {
   if(energy - amount > 0) {
     return energy = energy - amount
   } else {
     return energy = 0
   }
}
function raiseEnergy(amount) {
  if(energy + amount < maxEnergy) {
     return energy = energy + amount
   } else {
     return energy = maxEnergy
   }
}
function resetEnergy() {
  return energy = maxEnergy
}
let maxTransference = 600
let transference = 600
function lowerTransference(amount) {
   if(transference - amount > 0) {
     return transference = transference - amount
   } else {
     return transference = 0
   }
}
function raiseTransference(amount) {
  if(transference + amount < maxTransference) {
     return transference = transference + amount
   } else {
     return transference = maxTransference
   }
}
function resetTransference() {
  return transference = maxTransference
}

doIntervalThings()

function barsUpdate() {
  console.log("updating bars")
  $("#cross-shield").css(
    {"transform" : "rotate(10deg)"}
  )
}