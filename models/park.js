const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  for (let i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i] === dinosaur)
    {
      this.dinosaurs.splice(i, 1);
      break;
    };
  };
};

Park.prototype.findByMostVisitors = function () {
  const mostVisitors = [];
  for (let dinosaur of this.dinosaurs) {
    if (mostVisitors.length === 0) {
      mostVisitors.push(dinosaur);
    }
    else if (dinosaur.guestsAttractedPerDay > mostVisitors[0].guestsAttractedPerDay) {
      mostVisitors.splice(0,1);
      mostVisitors.push(dinosaur);
    };
  };
  return mostVisitors;
};

Park.prototype.findBySpecies = function (species) {
  const foundSpecies = [];
  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      foundSpecies.push(dinosaur);
    };
  };
  return foundSpecies;
};

Park.prototype.removeBySpecies = function (species) {
  for (let i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].species === species)
    {
      this.dinosaurs.splice(i, 1);
      i -= 1;
    };
  };
};

module.exports = Park;
