function noDuplicates(str) {
  var noDup = "";
  var misfits = "";
  for(var i = 0; i < str.length; i++) {
    if(noDup.indexOf(str[i]) < 0) {
      noDup += str[i];
      misfits += str.charAt(str[i]);
    }
  }
  console.log("No duplicates: " + noDup);
  console.log("Misfits: " + misfits);
}

noDuplicates("bookkeeper larry");
