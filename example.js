// Inch to feet

function leap_year(year){
if(year % 400 ==0)
{
    console.log('Leap Year');
}
else if(year %4 == 0 && year %100 !=0) {
console.log('leap Year');
}
else
{
    console.log('Not Leap Year');
}
}

leap_year(2100);
