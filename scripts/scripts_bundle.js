// fightLogic.js
function attack(target, damage) {
  target.health -= damage;
}

// hudUpdate.js
function updateHUD(p1, p2, shivBux) {
  const hud = document.getElementById("hud");
  hud.innerText = `${p1.name}: ${p1.health} HP | ${p2.name}: ${p2.health} HP | Shiv Bux: ${shivBux}`;
}

// vendorSystem.js
function triggerVendorLogic(vendors) {
  return vendors[Math.floor(Math.random() * vendors.length)];
}

// methTalitySystem.js
function performMethTality(fighter, target) {
  target.health = 0;
  console.log(`${fighter.name} performs ${fighter.methTality}!`);
}

// boutique.js
function purchaseItem(player, itemCost) {
  if (player.shivBux >= itemCost) {
    player.shivBux -= itemCost;
    return true;
  }
  return false;
}

// aiBehavior.js
function basicAI(fighter) {
  const roll = Math.random();
  if (roll < 0.4) return 'light';
  if (roll < 0.7) return 'heavy';
  return 'special';
}
