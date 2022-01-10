//asynchronous javascript
console.log("payal");
let stoks = {
  fruits: ["strawberry ", "banana", "grapes", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "penuts"],
};
/*let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stoks.fruits[fruit_name]}was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("the fruit has been chopped");
    }, 2000);
  }, 1000);
};
order(0, production);*/

//time and work -promise

/*let is_shop_open = true;
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

//promise chaining
order(2000, () => {
  console.log(`${stoks.fruits[0]}was selected`);
})
  .then(() => {
    return order(0000, () => {
      console.log(`production has started`);
    })
      .then(() => {
        return order(2000, () => console.log(`the fruit has been cut`));
      })
      .then(() => {
        return order(1000, () =>
          console.log(`${stoks.liquid[0]} and ${stoks.liquid[1]}`)
        );
      })
      .then(() => {
        return order(1000, () => console.log("Machine has started"));
      });
  })
  .then(() => {
    return order(1000, () => console.log("ice ceram was served"));
  })
  .catch(() => {
    console.log("customer left");
  })

  .finally(() => {
    console.log("day ended shop is closed");// it will run wheather our promise is resolved or reject
  });*/

//async await

let is_shop_open = false;
/*let order = () => {
  return new promise((resolve, reject) => {
    if (true) {
      resolve();
    } else {
    }
  });
};*/

/* order()
  .then()
  .then()
  .then()
  .catch()
  .finally()*/

/*async function order() {
  try {
    await abc;
  } catch (error) {
    console.log("abc does not exist", console.error);
  } finally {
    console.log("runs code anyways");
  }
}
order().then(() => {
  console.log("jhsbhd");
});*/

//await

/*let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which topping would you like?"));
    }, 3000);
  });
};

async function kitchen() {
  console.log("a"); // start icecreame making process step-1
  console.log("b"); // step-2

  await toppings_choice(); // wait bcz i forgot to ask which topping customer like
  console.log("c");
  console.log("d");
}
kitchen();

console.log("cleaning the dishes"); // till await function is in execution thease work is executd
console.log("cleaning the table");*/

//time and work

/*function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stoks.fruits[0]}`);

    await time(0000);
    console.log("start the production");

    await time(2000);
    console.log("cut the fruit");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended, shop is closed");
  }
}

kitchen();*/

//callback function

function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = prompt("Please enter your name.");
  callback(name);
}

outerFunction(callbackFunction);
