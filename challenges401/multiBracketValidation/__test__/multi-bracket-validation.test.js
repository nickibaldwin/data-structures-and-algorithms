'use strict';

const multiBracketValidation = require('../multi-bracket-validation.js');

describe('======== Muli Bracket Validation========', () => {
  it('should return true for balanced brackets', () => {
    let results = multiBracketValidation('{}');

    expect(results).toEqual(true);

    let results2 = multiBracketValidation('{}(){}');

    expect(results2).toEqual(true);

    let results3 = multiBracketValidation('()[[Extra Characters]]');

    expect(results3).toEqual(true);

    let results4 = multiBracketValidation('(){}[[]]');

    expect(results4).toEqual(true);

    let results5 = multiBracketValidation('{}{Code}[Fellows](())');

    expect(results5).toEqual(true);

    let results6 = multiBracketValidation('[({}]');

    expect(results6).toEqual(false);

    let results7 = multiBracketValidation('(](');

    expect(results7).toEqual(false);

    let results8 = multiBracketValidation('{(})');

    expect(results8).toEqual(false);
  });
});
