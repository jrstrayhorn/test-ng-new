//import { TestBed } from '@angular/core/testing';

import { PalindroneService } from './palindrone.service';

// straight Jasmine testing without Angular's testing support
fdescribe('PalindroneService', () => {
  let service: PalindroneService;
  beforeEach(() => {
    service = new PalindroneService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#isPalindrone exists', () => {
    expect(service.isPalindrone).toBeTruthy();
  });

  it('a single letter is a palindrone', () => {
    // arrange
    const value = 'a';

    // act
    const result = service.isPalindrone(value);

    // assert
    expect(result).toBe(true);
  });

  it('two non-matching letters is not a palindrome', () => {
    // arrange
    const value = 'at';

    // act
    const result = service.isPalindrone(value);

    // assert
    expect(result).toBe(false);
  });

  it('two matching letters are a palindrome', () => {
    // arrange
    const value = 'oo';

    // act
    const result = service.isPalindrone(value);

    // assert
    expect(result).toBe(true);
  });

  it('three letter palindrome', () => {
    // arrange
    const value = 'mom';

    // act
    const result = service.isPalindrone(value);

    // assert
    expect(result).toBe(true);
  });

  it('four letter palindrome', () => {
    // arrange
    const value = 'abba';

    // act
    const result = service.isPalindrone(value);

    // assert
    expect(result).toBe(true);
  });

  it('phrase with spaces is a palindrome', () => {
    // arrange
    const value = 'a man a plan a canal panama';

    // act
    const result = service.isPalindrone(value);

    // asert
    expect(result).toBe(true);
  });
});
