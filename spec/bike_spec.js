describe("a bike", function() {
  var bike;

  beforeEach(function() {
    bike = new Bike(12847390, "red", 2016)
  });

  it("has an id number", function() {
    expect(bike.id).toEqual(12847390);
  });

  it("has a color", function() {
    expect(bike.color).toEqual("red");
  });

  it("has a model year", function() {
    expect(bike.modelYear).toEqual(2016);
  });

  it("has damages", function() {
    expect(bike.damages.length).toEqual(0);
    expect(bike.isDamaged()).toEqual(false);
    bike.damages = ["busted tire"]
    // debugger;
    expect(bike.damages.length).toEqual(1);
    expect(bike.isDamaged()).toEqual(true)
    bike.repair()
    expect(bike.damages.length).toEqual(0);
    expect(bike.isDamaged()).toEqual(false);
  });
});
