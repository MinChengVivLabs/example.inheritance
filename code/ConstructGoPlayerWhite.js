module.exports.function = function constructGoPlayerWhite (rank) {
  return {
    name: 'white player',
    rank: rank, 
    credit: rank*1000,
  }
}
