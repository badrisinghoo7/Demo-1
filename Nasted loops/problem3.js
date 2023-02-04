
for(i=1;i<=10;i++){
    a="";
    for(j=1;j<=10; j++){
      if(i==1 || i==10){
        a+="*"
      }
      else if(j==1 || j==10){
        a+="*"
      }
      else{
        a+=" ";
        
      }
    }
    console.log(a) 
  }