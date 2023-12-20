var arr = [ `"The best revenge is massive success."
     --Frank Sinatra` ,
      `"Resentment is like drinking poison and waiting for your enemies to die."
      --Nelson Mandela` ,
      `"You miss 100% of the shots you don't take."
      --Wayne Gretzy `,
      `"Be yourself; everyone else is already taken.
      --Oscar Wilde"`,
      `"So many books, so little time.
      --Frank Zappa"`,
      `"A room without books is like a body without a soul.
      --MarcusTullius Cicero"`,
      `"You know you're in love when you can't fall asleep because reality is finally better than your dreams.
      --Dr.Seuss"`
      

     ]


function printQuote(){
    var randomItem = arr[Math.floor(Math.random() *arr.length)];
    
    
    document.getElementById("qoute").innerHTML = randomItem;
    
  

}
