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

// create an image
const image = document.createElement('img')

// set the source to an image
image.src = "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/3/22/0/shutterstock_national-puppy-day-301891139.jpg.rend.hgtvcom.966.725.suffix/1521744692471.jpeg"

// set the width to 250
image.style.width = '250px'

// add a class of cute
image.classList.add('cute')

// add an alt of Cute Puppy
image.alt = "Cute Puppy"

// Append that image to the wrapper
shell.append(image)