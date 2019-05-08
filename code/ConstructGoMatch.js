module.exports.function = function constructGoMatch (black, white) {
  observer = {
    name: 'observer',
    rank: 1,
    credit: 100,
  }
  return {
    black: black, 
    white: white, 
    observer: observer,
    prize: 100, 
    black_win: true,
  }
}
