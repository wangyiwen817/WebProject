function Draw(n:number):void
{
    for(var i=0;i<n;i++)
  {
        var str:string="";
        for(var k=0;k<i;k++)
                {str+="**";}
        str=str.substring(0,str.length-1);
        console.log(str);
    }
}

window.onload = () => {
    Draw(8);
};
