

  //###################################################################
  //        __
  //   ____/ /___  ____ ______
  //  / __  / __ \/ __ `/ ___/
  // / /_/ / /_/ / /_/ (__  )
  // \__,_/\____/\__, /____/
  //            /____/

  // Dog Constructor & Prototype
  function Dog (name, color, status, hungry, owner) {
    this.name = name;
    this.color = color;
    this.status = status;
    this.hungry = hungry;
    this.owner = owner;
  }


  // Instances of Dog
  // Needed: sadie, moonshine, atticus

  let sadie = new Dog('sadie', 'black', 'normal', false, undefined);
  let moonshine = new Dog('moonshine', undefined, 'normal', true, undefined);
  let atticus = new Dog('atticus', undefined, 'normal', true, undefined);

  //     __
  //    / /_  __  ______ ___  ____ _____  _____
  //   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
  //  / / / / /_/ / / / / / / /_/ / / / (__  )
  // /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

  // Human Constructor & Prototype
  function Human (name) {
    this.name = name;

    // this.pet = function (dog) {
    //   dog.status = happy;
    // };
  }

  Human.prototype.pet = function (dog) {
    dog.status = 'happy';
  };

  Human.prototype.feed = function (dog) {
    dog.hungry = false;
  };


  // Instances of Human
  // Needed: mason, julia

  let mason = new Human('mason');
  let julia = new Human('julia');
