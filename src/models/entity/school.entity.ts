import { Entity } from "./entity";
import { Member } from "./school-member.entity";
import { List } from "@everest/collections";
import { IsNotEmpty, Matches, MinLength, MaxLength, IsUrl } from "class-validator";
import { Address } from './address.entity';
import { Account } from './account.entity';

export class School extends Entity<number> {
  name: string;
  university: string;
  description: string;
  acronym: string;
  website: string;
  imageURL: string;
  imageName: string;

  country: string;
  region: string;
  city: string;
  street: string;
  postalCode: string;

  isPublic: boolean;

  creationDate: Date;

  admin: SchoolAdmin;

  emails: List<SchoolEmail>;

  phones: List<SchoolPhone>;

  adminInvitations: List<SchoolAdminInvitation> = new List();

  isStudent = false;
  isTeacher = false;

  getAddress(): Address {
    const address = new Address();
    address.region = this.region;
    address.city = this.city;
    address.street = this.street;
    address.postalCode = this.postalCode;

    return address;
  }

  setAddress(address: Address) {
    this.region = address.region;
    this.city = address.city;
    this.street = address.street;
    this.postalCode = address.postalCode;
  }

  getInfo(): SchoolInfo {
    const info = new SchoolInfo();
    info.name = this.name;
    info.description = this.description;
    info.acronym = this.acronym;
    info.creationDate = this.creationDate;
    info.isPublic = this.isPublic;
    info.website = this.website;
    info.university = this.university;

    return info;
  }

  setInfo(info: SchoolInfo) {
    this.name = info.name;
    this.description = info.description;
    this.acronym = info.acronym;
    this.creationDate = info.creationDate;
    this.isPublic = info.isPublic;
    this.website = info.website;
    this.university = info.university;
  }


  static createFromAny(value: any): School {
    if (!value) {
      return null;
    }
    const school = new School();
    school.id = value.id;
    school.registrationDate = value.registrationDate;
    school.name = value.name;
    school.university = value.university;
    school.description = value.description;
    school.acronym = value.acronym;
    school.website = value.website;
    school.imageURL = value.imageURL;
    school.imageName = value.imageName;
    school.country = value.country;
    school.region = value.region;
    school.city = value.city;
    school.street = value.street;
    school.postalCode = value.postalCode;
    school.isPublic = value.isPublic;
    school.creationDate = value.creationDate;

    school.admin = SchoolAdmin.createFromAny(value.admin);

    if (!value.imageURL) {
      school.imageURL = "assets/background/heic0515a.jpg"
  }

    if (value.emails) {
      school.emails = new List();
      value.emails.forEach(v => school.emails.add(SchoolEmail.createFromAny(v)));
    }

    if (value.phones) {
      school.phones = new List();
      value.phones.forEach(v => school.phones.add(SchoolPhone.createFromAny(v)));
    }

    if(value.adminInvitations) {
      value.adminInvitations.forEach(v => {
        const invitation = SchoolAdminInvitation.createFromAny(v);
        invitation.school = school;
        school.adminInvitations.add(invitation);
      });
    }
    
    return school;
  }
}

export class SchoolAdmin extends Entity<number> {

  school: School;
  member: Member;


  constructor(school: School, member: Member) {
    super();
    this.school = school;
    this.member = member;
  }

  static createFromAny(value: any): SchoolAdmin {
    if (!value) {
      return null;
    }
    return new SchoolAdmin(School.createFromAny(value.school), Member.createFromAny(value.member));
  }

}

export class SchoolEmail extends Entity<number> {
  value: string;
  school: School;

  static createFromAny(value: any): SchoolEmail {
    if (!value) {
      return null;
    }
    const email = new SchoolEmail();

    email.id = value.id;
    email.registrationDate = value.registrationDate;  
    email.value = value.value;
    email.school = School.createFromAny(value.school);

    return email;
  }
}

export class SchoolPhone extends Entity<number> {
  value: string;
  school: School;

  static createFromAny(value: any): SchoolPhone {
    if (!value) {
      return null;
    }
    const phone = new SchoolPhone();
    phone.id = value.id;
    phone.registrationDate = value.registrationDate;  
    phone.value = value.value;
    phone.school = School.createFromAny(value.school);

    return phone;
  }
}

export class SchoolAdminInvitation extends Entity<number> {
  school: School;
  responseDate: Date;
  state: string;
  accountId: string;
  account: Account;

  static createFromAny(value: any): SchoolAdminInvitation {
    if (!value) {
      return null;
    }
    const invitation = new SchoolAdminInvitation();
    invitation.id = value.id;
    invitation.registrationDate = value.registrationDate;  
    invitation.responseDate = value.responseDate;
    invitation.accountId = value.accountId;
    invitation.state = value.state;

    if(value.account){
      invitation.account = Account.createFromAny(value.account);
    }

    if(value.school) {
      invitation.school = School.createFromAny(value.school);
    }

    return invitation;
  }
}


export class AddSchoolModel {
  @IsNotEmpty()
  @MinLength(3)
  @Matches(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i, { message: "Contient des caractères non autorisés" })
  name: string;

  @IsNotEmpty()
  @MinLength(3)
  @Matches(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i, { message: "Contient des caractères non autorisés" })
  university: string;

  @IsNotEmpty()
  @MinLength(2, { message: "Le sigle doit contenir 2 lettres au minimun" })
  @MaxLength(7, { message: "Le sigle doit contenir 7 lettres au maximum" })
  @Matches(/^[a-zA-Z0-9 -]*$/, { message: "Le sigle doit contenir que des lettres, des chiffres, des espaces et des tirets('-')" })
  acronym: string;

  isPublic: boolean;
}


export class SchoolInfo {
  @IsNotEmpty()
  @MinLength(3)
  @Matches(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i, { message: "Contient des caractères non autorisés" })
  name: string;

  @IsNotEmpty()
  @MinLength(3)
  @Matches(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i, { message: "Contient des caractères non autorisés" })
  university: string;

  description: string;

  @IsNotEmpty()
  @MinLength(2, { message: "Le sigle doit contenir 2 lettres au minimun" })
  @MaxLength(7, { message: "Le sigle doit contenir 7 lettres au maximum" })
  @Matches(/^[a-zA-Z0-9 -]*$/, { message: "Le sigle doit contenir que des lettres, des chiffres, des espaces et des tirets('-')" })
  acronym: string;

  @IsUrl()
  website: string;

  creationDate: Date;

  isPublic: boolean;
}