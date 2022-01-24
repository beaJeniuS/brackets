module.exports = function check(str, bracketsConfig) {
  let pairs = bracketsConfig.map((value) => {
    return value[0]+value[1];
  });
  let resStr = '';
  let testStr = str;
  while(true){
    resStr = testStr;
    for(let i = 0;i < pairs.length; i++){
      testStr = testStr.replace(pairs[i],'');
    }

    if(testStr.length === 0) {
      return true;
    }

    if(resStr === testStr){
      return false;
    } else {
      continue;
    }
  }
} 

  