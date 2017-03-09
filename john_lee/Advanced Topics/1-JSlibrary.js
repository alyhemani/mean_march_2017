var library = {
   map: function(arr,iteratee) {
     for(var i = 0;i < arr.length; i++){
       iteratee(arr[i])
     }
   },
   reduce: function(arr, [memo],) {
    for(var i = 0;i < arr.length; i++){
      arr[i] += memo
    }
   },
   find: function(arr,context) {
     find = 0
     for(var i = 0;i < arr.length; i++){
       if (arr[i] = context);
        find = context;
        break;
     }
   },
   filter: function(arr, iteratee) {
     filtered = []
     for(var i = 0;i < arr.length; i++){
       if(iteratee(arr[i]) == 0)
         filtered.push(arr[i])
     }
   },
   reject: function(arr, iteratee) {
     reject = []
     for(var i = 0;i < arr.length; i++){
       if(iteratee(arr[i]) != 0)
         reject.push(arr[i])
     }
   }
 }
