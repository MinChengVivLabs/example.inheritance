module.exports.function = function constructGoPlayer (name) {
  if (name=="AlphaGo") 
    return {
      name: name,
      rank: 10,
      credit: 9999,
    }
  else if (name=="AmazonGo")
    return {
      name: name,
      rank: 9,
      credit: 8000,
    }
  else 
    return {
      name: name, 
      rank: 2,
      credit: 2000,
    }
}
