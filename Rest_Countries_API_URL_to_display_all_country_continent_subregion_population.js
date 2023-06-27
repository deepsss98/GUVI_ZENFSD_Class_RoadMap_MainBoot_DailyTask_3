let request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
    let data=request.response
    let res=JSON.parse(data);

    //Using REST Country API , displacy country name,region ,sub-region and population in the console

   for(let x in res)
   {
    console.log("Country: " +res[x].name.common+ " , Region: "+res[x].region+" , Sub_Region: "+res[x].subregion+" , Population: "+res[x].population);
   }
}
