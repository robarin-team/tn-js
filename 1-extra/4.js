const keyCodeA = 'a'.charCodeAt(0);
const key = 'sqnzbeuigvxtmhfpdcjyoakwlr';
let text = 'vsasjncgpy bhughbj kbcb fcgughsttl ojbz fhtl gh kbq qcfkjbcj  qoy yibl scb hfk bmqbzzbz gh jfmb jbcabcj  ojosttl ags hfzb vj  yibl scb stjf bmqbzzbz gh s ascgbyl fe spptgnsygfhj ncbsybz kgyi ecsmbkfcxj joni sj btbnycfh shz nfczfas';
text = text.toLocaleLowerCase();
let decoded = ''

for (let index = 0; index < text.length; index++) {
  const char = text[index]

  if(char === ' ') {
    decoded += ' '
  } else {
    const keyIdx = key.indexOf(char)
    const charCode = keyIdx + keyCodeA
    
    decoded += String.fromCharCode(charCode)
  }
}

console.log(decoded)