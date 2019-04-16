function happyCalcul()
{
  var shoeSize = Number(document.getElementById('shoeSize').value);
  var yearOfBirth = Number(document.getElementById('yearOfBirth').value);

  alert((shoeSize*2+5)*50-yearOfBirth+1766);
}
