// break, continue



for(let i = 1; i < 101; i++){
    console.log(i);
    if(i === 32){
        break;  // justr exit from here
    }
    
}

for(let i = 1; i < 6; i++){
    if(i === 3 || i === 4){
        continue; //just skip this
    }
    console.log(i);   
}


