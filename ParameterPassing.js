function minhaFuncao(objeto) {
    objeto.make = "Toyota"
  }
  
  function fatorial(n){
  if((n==0)||(n==1))
  return 1;
  
  else
  return (n*(fatorial(n-1)))
    
  }
  
  function teste(n){
  n=12
  }
  var meucarro = {make: "Honda", model: "Accord", year: 1998};
  var x, y, a, b, c
  a=5
  c=1
  
  b=fatorial(a)
  console.log(b)
  
  x = meucarro.make 
  minhaFuncao(meucarro)
  y = meucarro.make                     
  console.log(x)
  console.log(y)
  
  teste(c)
  console.log(c)
  
  