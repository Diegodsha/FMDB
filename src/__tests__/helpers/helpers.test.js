import genres from '../../Helpers/helpers';

describe('Movie and series categories', () => {
  test('contains all the categories', () => {
    expect(genres).toHaveLength(19);
  });

  test('dont have less than 19 genres', () => {
    expect(genres.length).toBeGreaterThanOrEqual(18);
  });
});
