var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer"></span>');
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);

  this.$node.toggle();
};
