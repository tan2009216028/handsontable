import {extendNotExistingKeys, createCellHeadersRange} from 'handsontable/i18n/utils';

describe('i18n helpers', () => {
  describe('extendNotExistingKeys', () => {
    it('should add extra key to object', () => {
      const extendedOject = {
        hello: 'world',
        lorem: 'ipsum'
      };

      const extension = {anotherKey: true};

      extendNotExistingKeys(extendedOject, extension);

      expect(extendedOject.anotherKey).toEqual(true);
    });

    it('should not overwrite existing keys', () => {
      const extendedOject = {
        hello: 'world',
        lorem: 'ipsum'
      };

      const extension = {hello: 'kitty'};

      extendNotExistingKeys(extendedOject, extension);

      expect(extendedOject.hello).toEqual('world');
    });

    it('should return extended object without creating copy of it', () => {
      const extendedOject = {
        hello: 'world',
        lorem: 'ipsum'
      };

      const extension = {anotherKey: true};

      const newReference = extendNotExistingKeys(extendedOject, extension);

      expect(newReference).toBe(extendedOject);
    });
  });

  describe('createCellHeadersRange', () => {
    it('should create range of values basing on cell indexes (index of first cell is lower then index of next cell', () => {
      expect(createCellHeadersRange(2, 7)).toEqual('2-7');
    });

    it('should create range of values basing on cell indexes (index of first cell is higher then index of next cell', () => {
      expect(createCellHeadersRange(7, 2)).toEqual('2-7');
    });

    it('should create range of values basing on cell indexes and corresponding headers (index of first cell is lower then index of next cell', () => {
      expect(createCellHeadersRange(0, 4, 'A', 'D')).toEqual('A-D');
    });

    it('should create range of values basing on cell indexes and corresponding headers (index of first cell is higher then index of next cell', () => {
      expect(createCellHeadersRange(4, 0, 'D', 'A')).toEqual('A-D');
    });
  });
});
