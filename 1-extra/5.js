const text = 'The syntax of Java is largely influenced by C++. Unlike C++, Java does not support operator overloading. Java uses comments similar to those of C++'
const sentences = text.split('. ')
const result = sentences.map(s => s.toLowerCase().includes('overloading') ? s.replace('Java', 'JS') : s)
console.log(result.join('. '))