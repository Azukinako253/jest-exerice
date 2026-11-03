import {countWord} from "@/count_word";

describe("countWord", () => {
  test("textが空文字の場合、-1を返す", () => {
    expect(countWord("", "word")).toBe(-1);
  });

  test("targetWordが空文字の場合、-1を返す", () => {
    expect(countWord("This is a test.", "")).toBe(-1);
  });

  test("textにtargetWordが含まれていない場合、0を返す", () => {
    expect(countWord("This is a test.", "word")).toBe(0);
  });

  test("textにtargetWordが1回含まれている場合、1を返す", () => {
    expect(countWord("This is a test", "test")).toBe(1);
  });

  test("textにtargetWordが複数回含まれている場合、正しい回数を返す", () => {
    expect(countWord("This is a test and this test is simple.", "test")).toBe(
      2,
    );
  });

  test("大文字と小文字を区別せずにカウントする", () => {
    expect(countWord("This is a Test and this test is simple.", "test")).toBe(
      2,
    );
  });

  test("textにタブ、改行が含まれている場合もカウントする", () => {
    expect(
      countWord("This is a test \tThis is a test \nThis is a test ", "test"),
    ).toBe(3);
  });
});
