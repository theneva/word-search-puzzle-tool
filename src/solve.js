const findCoordinatesForKeyword = (puzzle, keyword) => {
  const y = puzzle.findIndex(line => line.includes(keyword));
  const x = puzzle[y].indexOf(keyword);

  return {
    keyword,
    start: {x, y},
    end: {
      x: x + keyword.length - 1,
      y
    },
  };
};

module.exports.findCoordinates = (puzzle, keywords) => {
  return keywords.map(keyword => {
    return findCoordinatesForKeyword(puzzle, keyword);
  });
};
