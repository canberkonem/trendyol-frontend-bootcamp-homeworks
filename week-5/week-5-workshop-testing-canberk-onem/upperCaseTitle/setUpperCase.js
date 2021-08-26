function setUpperCase(title) {
    if(title === ""){
      return title
    }

    return title
    .split(" ")
    .map(word => {
      if(isConjuctionWord(word)){
        return word
      }else{
        return word[0].toUpperCase()+word.slice(1)
      }})
    .join(" ")
  }

  function isConjuctionWord(word){
    return word === "and" || word === "or"
  }


  module.exports = setUpperCase