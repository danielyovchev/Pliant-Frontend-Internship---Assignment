function solution(input){
    let result = 0;
    let temp = 0;
    let tempString = '';
    if(input.length<3){
        console.log("error");
        exit();
    }
    for(let i=0; i<input.length; i++){
        temp=input[i]+input[i+1]+input[i+2];
        
        if(temp>=result){
            result=temp;
            tempString=`[${input[i]}, ${input[i+1]}, ${input[i+2]}]`;
        }
    }
    console.log(`sequence: ${tempString}, sum: ${result}`);
}
solution([76, 80, 81, 77, 83, 78, 80]);
