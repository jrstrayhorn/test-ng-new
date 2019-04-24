import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalindroneService {
  constructor() {}

  public isPalindrone(value: string): boolean {
    if (value.length === 1) return true;

    const valueWithSpacesStripped = value.split(' ').join('');
    return (
      valueWithSpacesStripped ===
      valueWithSpacesStripped
        .split('')
        .reverse()
        .join('')
    );
  }
}
