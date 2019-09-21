/*(function(window) {
  'use strict';
  //code here
  var App = window.App || {};

  function Truck(truckId, db){
    console.log("in Truck.js");
    this.truckId = truckId;
    this.db = db;
  }

  Truck.prototype.createOrder = function (order) {
    console.log("Adding order for" + order.emailAddress);
    this.db.add(order.emailAddress, order);
  }

  Truck.prototype.deliverOrder = function (order) {
    console.log("Delivering order for" + order.emailAddress);
    this.db.remove(order.emailAddress, order);
  }

  Truck.prototype.printOrders = function (order)
    var customerIdArra = Object.keys(this.db.getAll());
    console.log("Truck #" + this.truckId + " has a pending order");


    this.db.add(order.emailAddress, order);
  }

  App.Truck = Truck;
  window.App = App;
})(window);
*/
