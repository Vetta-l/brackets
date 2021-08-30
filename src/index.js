module.exports = function check(str, bracketsConfig) {

  let str2 = str;
  for (let i = 0; i < str2.length; i++) {
    
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str.includes(bracketsConfig[j][0]+bracketsConfig[j][1]))
      {
        str = str.replace((bracketsConfig[j][0]+bracketsConfig[j][1]), '')
      }
    }

  }
  if(str !==''){
    return false;
  }
  return true;
}
