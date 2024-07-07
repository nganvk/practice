const counter = (function counter() {
    let value = 0;
    return {
      getValue: function() {
        return value;
      },
      changeBy: function(k) {
        value += k;
      },
    }
  });

function getFixedCounter(k) {
    let myCounter = counter;
    return {
        increment: function() {
            myCounter.changeBy(k)
        },
        decrement: function() {
            myCounter.changeBy(-k)
        },
        getValue: function() {
            return myCounter.getValue()
        }
    }
}