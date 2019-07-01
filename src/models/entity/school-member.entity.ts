import {Entity} from "./entity";
import {School} from "./school.entity";

export class Member extends Entity<number> {
  school: School;
  accountId: string;
  name: string;
  surname: string;
  birthDate: Date;
  gender: string;
  imageName: string;
  imageURL: string;


  static createFromAny(value: any): Member {
    if (!value) {
      return null;
    }
    const member = new Member();
    member.name = value.name;
    member.accountId = value.accountId;
    member.surname = value.surname;
    member.birthDate = value.birthDate;
    member.gender = value.gender;
    member.imageURL = value.imageURL;
    member.imageName = value.imageName;

    member.school = School.createFromAny(value.school);

    return member;
  }
}
