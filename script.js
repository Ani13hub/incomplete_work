var name= prompt('whats your name?');
console.log(`Name: ${name}`);  
var age= prompt('whats your age?');
console.log(`Age: ${age}`);        
var mass= prompt('What is your weight?');
console.log(`Weight: ${mass}`);
var height= prompt('what is your height in meters?');
// height= height/100;
console.log(`Height: ${height}`);     
var bmi= mass/(height^2);
console.log(`BMI of ${name}: ${bmi}`);

if(bmi<18.5)
{
    console.log('You are an underweight, kindly eat properly and do excercises to maintain yourself.');
}
else if(bmi>=18.5 && bmi<25)
{
    console.log('Congratulations you are heathly, remain fit like this.');
}
else
{
    console.log('You are overweighted, do lot of excercise and drink plenty of water.');
}

var optn= prompt('Do you want to compare with someone? if yes type 1 and if no type 0 ');

if(optn==1)
{
    console.log('You to chose to compare with someone, so enter the details.');
    var name1= prompt('whats your name?');
    console.log(`Name: ${name1}`);  
    var age1= prompt('whats your age?');
    console.log(`Age: ${age1}`);        
    var mass1= prompt('What is your weight?');
    console.log(`Weight: ${mass1}`);
    var height1= prompt('what is your height in meters?');
    // height= height/100;
    console.log(`Height: ${height1}`);     
    var bmi1= mass1/(height1^2);
    console.log(`BMI of ${name1}: ${bmi1}`);

    if(bmi>=18.5 && bmi<25 && bmi1>=18.5 && bmi1<25)
    {
        console.log('Both are Healthy');
    }
    else if(bmi>=18.5 && bmi<25 && bmi1<18.5){
        console.log(`${name} is healthy but ${name1} is underweight`);
    }
    else if(bmi>=18.5 && bmi<25 && bmi1>=25){
        console.log(`${name} is healthy but ${name1} is overweight`);
    }

    else if(bmi<18.5 &&  bmi1>=18.5 && bmi1<25){
        console.log(`${name1} is healthy but ${name} is underweight`);
    }
    else if(bmi<18.5 && bmi1<18.5)
    {
        console.log('Both are UnderWeight');
    }
    else if(bmi<18.5 && bmi1>=25){
        console.log(`${name} is underweight but ${name1} is overweight`);
    }

    else if(bmi>=25 && bmi1<25 && bmi1>=18.5){
        console.log(`${name1} is healthy but ${name} is overweight`);
    }
    else if(bmi>=25 && bmi1<18.5){
        console.log(`${name} is overweight but ${name1} is underweight`);
    }
    else{
         console.log('Both are OverWeight');
    }
}
else if(optn==0)
{
console.log('You chose not to compare with anyone.');
}
else{
    console.log('Invalid Choice.');
}