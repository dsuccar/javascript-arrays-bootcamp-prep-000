var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  return [array,...element]
}

function addElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
