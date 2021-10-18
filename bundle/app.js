(() => {
  "use strict";
  console.log(1);
  const o = new (class {
    hasLegs() {
      return !0;
    }
  })();
  console.log(o.hasLegs()), console.log(1), console.log(2);
})();
