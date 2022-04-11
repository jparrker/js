function camelize(str) {
  //background-color => backgroundColor
	let splitString = str.split('-')
  splitString = splitString.map(
  	function(word, index) {
      if (index == 0) {
        return word.toLowerCase()
      }else {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
      }
    }
  )
  return splitString.join("")
}

camelize('background-color')
camelize('This-IS-A-Longer-String-here')

