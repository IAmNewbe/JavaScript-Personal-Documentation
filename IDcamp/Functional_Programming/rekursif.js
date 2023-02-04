const countDown = start => {
    setTimeout(() => {
        console.log(start);
        if(start > 0) countDown(start-1);
    }, 1000);
    
  };
  
  countDown(10);