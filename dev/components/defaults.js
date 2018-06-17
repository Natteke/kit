Element.prototype.kitAddClass = function (classN) {
	if(!this.kitHasClass(classN)) this.className += " " + classN;
	return this;
};

Element.prototype.kitRemoveClass = function (classN) {
	this.kitHasClass(classN) ? this.className = this.className.replace(new RegExp('(\\s|^)' + classN + '(\\s|$)',"g"),"") : false;
	return this;
};

Element.prototype.kitHasClass = function (classN) {
	return this.className.indexOf(classN) >= 0;
};
