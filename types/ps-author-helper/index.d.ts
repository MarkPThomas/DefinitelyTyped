// Type definitions for ps-author-helper 1.0
// Project: https://github.com/MarkPThomas/ps-author-helper
// Definitions by: Mark P Thomas <https://github.com/MarkPThomas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.7

export function greet(name: string): string;
export function getAuthorContactInfo(): AuthorInfo;
export function getModuleName(moduleNumber: number): 'Introduction to My Course' |'Declaration Files Fundamentals' | 'Building a Declaration File' | 'Publishing Your Own Library' | 'No such module exists';
export class AuthorInfo {
  fistName: string;
  lastName: string;
  twitterHandle: string
  constructor(firstName: string, lastName: string, twitterHandle: string);
}