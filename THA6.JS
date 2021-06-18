//1
a='w3resource'
b=[1,2,3]
function is_array(a)
{
    console.log(Array.isArray(a));}

is_array(a);
is_array(b);

//2
c=[1, 2, 4, 0]
d=[1, 2, [4, 0]]
function array_clone(a) {
    console.log(a.slice(0));
}
array_clone(c);
array_clone(d);

//3
f=[7, 9, 0, -2];
function first(a,n)
{  if(n)
    {for( var i=0;i<n;i++)
     console.log(a[i]);}
   else
      console.log(a[0]);

       
}
first(f);
first(f,3);

//4
myColor = ["Red", "Green", "White", "Black"];
function con(a) {
    console.log(a.join(''));
    console.log(a.join(','));
    console.log(a.join('+'));
    
}
con(myColor);

//5
var arr1=[ 'a', 'a', 'a', 2,  'a', 'a', 2, 4, 9,5,5,5,5,5,5,5]
var m=1;
var item=0;
function most(arr)

{   w=arr.length
    
    for(i=0;i<w; i++)
    {
    var x=0;

    
        for(let z=0;z<w; z++)
        { 
            if(arr[z]==arr[i])
        {
           x=x+1;
        }
        if(x>m)
        {
            m=x;
            item=arr[i];
        }
        }  
    }
console.log(item,'(',m,'times)') 
}
most(arr1);



