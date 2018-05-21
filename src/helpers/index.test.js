import { splitTextByAnnotations } from '.';

describe('splitTextByAnnotations', () => {
  it('should handle empty text', () => {
    expect(splitTextByAnnotations()).toEqual([]);
  });

  it('should handle empty offsets list', () => {
    expect(splitTextByAnnotations('Text goes here')).toEqual([
      { text: 'Text goes here', isAnnotated: false },
    ]);
  });

  it('should handle offsets beyond the limits', () => {
    expect(splitTextByAnnotations('Text goes here', [{ startIndex: -1, endIndex: 1000 }])).toEqual([
      expect.objectContaining({ text: 'Text goes here', isAnnotated: true }),
    ]);
  });

  it('should split the text', () => {
    expect(splitTextByAnnotations('Text goes here', [{ startIndex: 5, endIndex: 9 }])).toEqual([
      { text: 'Text ', isAnnotated: false },
      expect.objectContaining({ text: 'goes', isAnnotated: true }),
      { text: ' here', isAnnotated: false },
    ]);
  });

  it('should ignore offset items with invalid range', () => {
    expect(splitTextByAnnotations('Text goes here', [{ startIndex: 5, endIndex: 5 }])).toEqual([
      { text: 'Text goes here', isAnnotated: false },
    ]);

    expect(splitTextByAnnotations('Text goes here', [{ startIndex: 6, endIndex: 5 }])).toEqual([
      { text: 'Text goes here', isAnnotated: false },
    ]);

    expect(
      splitTextByAnnotations('Text goes here', [
        { startIndex: 0, endIndex: 4 },
        { startIndex: 2, endIndex: 5 },
      ]),
    ).toEqual([
      expect.objectContaining({ text: 'Text', isAnnotated: true }),
      { text: ' goes here', isAnnotated: false },
    ]);
  });
});
