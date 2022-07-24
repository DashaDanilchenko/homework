// Make a div
const shell = document.createElement('div')

// add a class of wrapper to it
shell.classList.add('classShell')

// put it into the body
document.body.prepend(shell)

// make an unordered list
const list = document.createElement('ul')

// add three list items with the words "one, two, three" in them
const liOne = document.createElement('li')
const textOne = document.createTextNode('One')
liOne.append(textOne)
list.append(liOne)

const liTwo = document.createElement('li')
const textTwo = document.createTextNode('Two')
liTwo.append(textTwo)
list.append(liTwo)

const liTree = document.createElement('li')
const textTree = document.createTextNode('Tree')
liTree.append(textTree)
list.append(liTree)

// put that list into the above wrapper
shell.append(list)