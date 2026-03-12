console.log('today im learning reverse')

//akta string reverse koek ta rulse ase like 

const sentence = 'today im lerning web development'
const splite = sentence.split(' ')
const rev = splite.reverse('')
const join = rev.join(' ')
// console.log(join)

const text = "JavaScript";

let reversed = "";

for (const letter of text){
    reversed = letter + reversed;
}

console.log(reversed);