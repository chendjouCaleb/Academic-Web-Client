import {Entity} from "./entity";
import {IsNotEmpty, Matches, MinLength, IsEmail} from "class-validator";

export class Account extends Entity<string> {
  name: string;
  surname: string;
  birthDate: Date;
  gender: string;
  nationalId: string;

  username: string;
  email: string;
  phoneNumber: string;

  imageName: string;
  imageURL: string;

  country: string;
  state: string;
  city: string;
  street: string;
  postalCode: string;

  webURL: string;
  apiurl: string;

  aboutMe: string;
  website: string;

  get fullName() {
    return this.name + " " + this.surname;
  }


  static createFromAny(value: any): Account {
    if (!value || value === "null") {
      return null;
    }

    const account = new Account();

    account.id = value.id;
    account.registrationDate = value.registrationDate;
    account.name = value.name;
    account.surname = value.surname;
    account.birthDate = value.birthDate;
    account.gender = value.gender;
    account.nationalId = value.nationalId;

    account.username = value.username;
    account.email = value.email;
    account.phoneNumber = value.phoneNumber;

    account.imageName = value.imageName;
    account.imageURL = value.imageURL;

    account.country = value.country;
    account.state = value.state;
    account.city = value.city;
    account.street = value.street;
    account.postalCode = value.postalCode;

    account.webURL = value.webURL;
    account.apiurl = value.apiUrl;

    account.aboutMe = value.aboutMe;
    account.website = value.website;

    return account;

  }
}

export class AddAccountModel {
  @IsNotEmpty()
  @MinLength(3)
  @Matches(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i, {message: "Contient des caractères non autorisés"})
  name: string;

  @IsNotEmpty()
  @MinLength(3)
  @Matches(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i, {message: "Contient des caractères non autorisés"})
  surname: string;

  @IsNotEmpty()
  @IsEmail({}, {message: "Addresse email incorrect"})
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  passwordMatcher: string;
}

