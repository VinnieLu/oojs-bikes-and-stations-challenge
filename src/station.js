function Station(name, location, bikes, capacity) {
	this.name = name;
	this.location = location;
	this.bikes = bikes;
	this.capacity = capacity;
}

Station.prototype.empty = function() {
	return this.bikes.length === 0;
}

Station.prototype.newestBike = function() {
	bike = []
	for(i=0;i<this.bikes.length;i++) {
		if (bike.length === 0) {
			bike.push(this.bikes[0])
		}
		else if (this.bikes[i].year > bike[0].year) {
			bike = []
			bike.push(this.bikes[i])
		}
	}
	return bike[0]
}

Station.prototype.take = function(newBike) {
	this.bikes.push(newBike)
}

Station.prototype.takeMultiple = function(newBikes) {
	for(i=0;i<newBikes.length;i++) {
		this.bikes.push(newBikes[i])
	}
	return this.bikes
}

Station.prototype.release = function() {
	if (this.howManyDamaged() === 0) {
		this.bikes.pop()
		return this.bikes[0]
	}
}

Station.prototype.takeMore = function(newBikes) {
	if (this.bikes.length <= (this.capacity - newBikes.length)) {
		for(i=0;i<newBikes.length;i++) {
			this.bikes.push(newBikes[i])
		}
		return this.bikes
	}
	else {
		alert("Too many bikes, biotch!")
	}
		
}

Station.prototype.howManyDamaged = function() {
	damagedBikes = []
	for(i=0;i<this.bikes.length;i++) {
		if (this.bikes[i].damages.length > 0) {
			damagedBikes.push(this.bikes[i])
		}
	}
	return damagedBikes.length
}