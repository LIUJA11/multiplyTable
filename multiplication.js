function createMultiplyTable(startNum,endNum){
    if(!isStartNumSmaller(startNum,endNum))return null;
    if(!isInValidRange(startNum,endNum))return null;
    return getMultiplyTable(startNum,endNum);
}
function isStartNumSmaller(startNum,endNum){
    if(startNum<=endNum)return true;
    else return false;
}

function isInValidRange(startNum,endNum){
    if(startNum<1||startNum>1000)return false;
    if(endNum<1||endNum>1000)return false;
    return true;
}

function getMultiplyTable(startNum,endNum){
    let multiplyTable = "";
    for(let i = startNum;i<=endNum;i++){
        for(let j = startNum;j<=i;j++){
            multiplyTable+=(j+"*"+i+"="+j*i+"\t");
        }
        multiplyTable+="\n";
    }
    return multiplyTable;
}
console.log(createMultiplyTable(3,5));