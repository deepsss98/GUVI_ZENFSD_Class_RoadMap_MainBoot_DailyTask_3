let request=new XMLHttpRequest();
        request.open("GET","https://restcountries.com/v3.1/all",true);
        request.send();
        request.onload=function(){
            let data=request.response
            let res=JSON.parse(data);
            

            //Using REST Country API , displacy country flags in the console

           for(let x in res)
           {
            console.log(res[x].name.common+" Flag: "+res[x].flag);
           }
        }