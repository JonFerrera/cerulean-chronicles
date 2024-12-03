import { Relationship } from '../enums/relationship'

export interface Character {
    LastName: string;
    FirstName: string;
    Age: number;
    Pronouns: Array<string>;
    Height: number;
    Weight: number;
    HairColor: string;
    Hairstyle: string;
    EyeColor: string;

    Occupation: string;

    Languages: Array<string>;

    Relatives: Array<[Character, Relationship]>;
}

export interface NonPlayerCharacter extends Character {

}

export interface PlayerCharacter extends Character {

}