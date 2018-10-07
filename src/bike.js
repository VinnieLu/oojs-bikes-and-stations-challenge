function Bike(id, color, modelYear) {
	this.id = id;
	this.color = color;
	this.modelYear = modelYear;
	this.damages = []
}

Bike.prototype.repair = function() {
	this.damages.pop()
}

Bike.prototype.isDamaged = function() {
	return this.damages.length > 0
}