function makeTea(isCold) {
    if (isCold) {
      var tea = 'Make an Ice Tea!';
    } else {
      var tea = 'Make a Hot Tea!';
    }
    return tea;
  }
   
  console.log(makeTea(false));
   
  /* Output:
  Make a Hot Tea!
  */