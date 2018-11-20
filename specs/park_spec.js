const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
    park = new Park('Jurassic Park', 70);
    dinosaur1 = new Dinosaur('T-Rex', 'Carnivore', 50);
    dinosaur2 = new Dinosaur('Triceratops', 'Herbivore', 90);
  });

  it('should have a name', function () {
    assert.strictEqual('Jurassic Park', park.name);
  });

  it('should have a ticket price', function () {
    assert.strictEqual(70, park.ticketPrice);
  });

  it('should have a collection of dinosaurs', function () {
    assert.deepStrictEqual([], park.dinosaurs);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    assert.deepStrictEqual([dinosaur1], park.dinosaurs);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur1);
    assert.deepStrictEqual([], park.dinosaurs);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    assert.deepStrictEqual([dinosaur2], park.findByMostVisitors());
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    assert.deepStrictEqual([dinosaur1], park.findBySpecies('T-Rex'));
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeBySpecies('T-Rex')
    assert.deepStrictEqual([dinosaur2], park.dinosaurs);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    assert.strictEqual(140, park.totalNumberOfVisitorsPerDay());
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    assert.strictEqual(51100, park.totalNumberOfVisitorsPerYear());
  });

  it('should be able to calculate the total revenue from ticket sales for one year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    assert.strictEqual(3577000, park.totalRevenueFromTicketSalesForOneYear());
  });

});
