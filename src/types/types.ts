export type User = {
  name: string;
  email: string;
  password: string;
};
export type MissingPerson = {
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth: string;
  nickName: string;
  height: number;
  width: number;
  eyeColor: string;
  hairColor: string;
  lengthOfTheHair: number;
  image: string;
};
export type FormData = {
  fullName: string;
  gender: string;
  dateOfBirth: string;
  nicknames: string;
  height: string;
  width: string;
  eyeColor: string;
  hairColor: string;
  lengthOfTheHair: string;
  lastSeen: string;
};
