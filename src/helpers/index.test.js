import { splitTextByOffsets } from '.';

describe('splitTextByOffsets', () => {
  it('should handle empty text', () => {
    expect(splitTextByOffsets()).toEqual([]);
  });

  it('should handle empty offsets list', () => {
    expect(splitTextByOffsets('Text goes here')).toEqual([
      { text: 'Text goes here', isAnnotated: false }
    ]);
  });

  it('should handle offsets beyond the limits', () => {
    expect(
      splitTextByOffsets('Text goes here', [{ startIndex: -1, endIndex: 1000 }])
    ).toEqual([{ text: 'Text goes here', isAnnotated: true }]);
  });

  it('should split the text', () => {
    expect(
      splitTextByOffsets('Text goes here', [{ startIndex: 5, endIndex: 9 }])
    ).toEqual([
      { text: 'Text ', isAnnotated: false },
      { text: 'goes', isAnnotated: true },
      { text: ' here', isAnnotated: false }
    ]);
  });

  it('should ignore offset items with invalid range', () => {
    expect(
      splitTextByOffsets('Text goes here', [{ startIndex: 5, endIndex: 5 }])
    ).toEqual([{ text: 'Text goes here', isAnnotated: false }]);

    expect(
      splitTextByOffsets('Text goes here', [{ startIndex: 6, endIndex: 5 }])
    ).toEqual([{ text: 'Text goes here', isAnnotated: false }]);

    expect(
      splitTextByOffsets('Text goes here', [
        { startIndex: 0, endIndex: 4 },
        { startIndex: 2, endIndex: 5 }
      ])
    ).toEqual([
      { text: 'Text', isAnnotated: true },
      { text: ' goes here', isAnnotated: false }
    ]);
  });
});
