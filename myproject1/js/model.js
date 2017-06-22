app.factory("myfactory",()=>{
    var object = {
         subtract:(x,y)=>{
            return Number (x) - Number (y);
        },
        add:(x,y)=>{
            return Number (x) + Number (y);
            
        },
        multiply:(x,y)=>{
            return x*y;
        },
         divide:(x,y)=>{
            return x/y;
        }
        
    };
    return object;
});