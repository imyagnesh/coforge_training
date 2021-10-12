const greaterThan10 = (...params) => {
    let result = 0;
    for (let i = 0; i < params.length; i++) {
      const element = params[i];
      if ( element > 10 )
        result = result + element;
    }
    return result;
  };

  console.log(greaterThan10(1, 2, 3, 11, 14, 15));



  const addOnlyNums = (...params) => {
    let result = 0;
    for (let i = 0; i < params.length; i++) {
      const element = params[i];
      if ( typeof element === "number" )
        result = result + element;
    }
    return result;
  };

  console.log(addOnlyNums(1, 2, "3", 11, 14, 15));


  const sumAndSquare = (...params) => {
    let result = 0;
    for (let i = 0; i < params.length; i++) {
      const element = params[i];
      if ( typeof element === "number" )
        result = result + element**2;
    }
    return result;
  };

  console.log(sumAndSquare(1, 4));
