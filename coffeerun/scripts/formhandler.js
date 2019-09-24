(function(window){
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler (selector) {
    if (!selector) {
      throw new Error("No selector provided"); //Error is a built-in type that lates you formally signal that there is an unexpected value or condition in your code
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function (fn) {
    /* eslint-disable-next-line no-console */
    console.log("Setting submit handler for form");
    this.$formElement.on("submit", function(event) {
      event.preventDefault();
      var data = {};
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;
        /* eslint-disable-next-line no-console */
        console.log(item.name + " is " + item.value);
      });
      /* eslint-disable-next-line no-console */
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
