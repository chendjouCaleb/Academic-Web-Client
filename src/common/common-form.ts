import {MinLength, MaxLength, IsNotEmpty, IsUrl, IsEmail, Matches} from "class-validator";
import { EvFormGroup, EvFormControl } from './form/forms';
import { Address } from 'src/models/entity/address.entity';

export class NameModel {
  constructor(private _value: string) { this.name = _value; }

  @IsNotEmpty()
  @MinLength(3)
  @Matches(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i, {message: "Contient des caractères non autorisés"})
  public name: string;
}

export class AcronymModel {
  constructor(private _value: string) { this.acronym = _value; }

  @IsNotEmpty()
  @MinLength(2, {message: "Le sigle doit contenir 2 lettres au minimun"})
  @MaxLength(7, {message: "Le sigle doit contenir 7 lettres au maximum"})
  @Matches(/^[a-zA-Z0-9 -]*$/, {message: "Le sigle doit contenir que des lettres, des chiffres, des espaces et des tirets('-')"})
  acronym: string;
}

export class DescriptionModel {
  constructor(private _value: string) { this.description = _value; }
  @MinLength(3)
  @MaxLength(200)
  public description: string;
}

export class WebsiteModel {
  constructor(private _value: string) { this.website = _value; }

  @IsNotEmpty()
  @IsUrl()
  public website: string;
}

export class EmailModel {
  constructor(private _value: string) { this.email = _value; }

  @IsNotEmpty()
  @IsEmail()
  public email: string;
}

export class PhoneModel {
  constructor(private _value: string) { this.phone = _value; }

  @IsNotEmpty()
  public phone: string;
}

export class PasswordModel {
  constructor(private _value: string) { this.password = _value; }

  @IsNotEmpty()
  @MinLength(6)
  public password: string;
}




export class NameForm extends EvFormGroup<NameModel> {
  constructor(value: string) {
    super({
      name: new EvFormControl("name", value)
    });
  }

  getModel(): NameModel {
    return new NameModel(this.value.name);
  }
}

export class AcronymForm extends EvFormGroup<AcronymModel> {
  constructor(value: string) {
    super({
      acronym: new EvFormControl("acronym", value)
    });
  }

  getModel(): AcronymModel {
    return new AcronymModel(this.value.acronym);
  }
}


export class WebsiteForm extends EvFormGroup<WebsiteModel> {
  constructor(value: string) {
    super({ website: new EvFormControl("website", value) });
  }

  getModel(): WebsiteModel {
    return new WebsiteModel(this.value.website);
  }
}


export class DescriptionForm extends EvFormGroup<DescriptionModel> {
  constructor(value: string) {
    super({ description: new EvFormControl("description", value) });
  }

  getModel(): DescriptionModel {
    return new DescriptionModel(this.value.description);
  }
}

export class EmailForm extends EvFormGroup<EmailModel> {
  constructor() {
    super({ email: new EvFormControl("email", null) });
  }

  getModel(): EmailModel {
    return new EmailModel(this.value.email);
  }
}

export class PhoneForm extends EvFormGroup<PhoneModel> {
  constructor() {
    super({ phone: new EvFormControl("phone", null) });
  }

  getModel(): PhoneModel {
    return new PhoneModel(this.value.phone);
  }
}



export class PasswordForm extends EvFormGroup<PasswordModel> {
  constructor() {
    super({
      password: new EvFormControl("password", "")
    });
  }

  getModel(): PasswordModel {
    return new PasswordModel(this.value.password);
  }

  getValue() {
    return this.value.password;
  }
}



export class AddressForm extends EvFormGroup<Address> {
  constructor(address: Address) {
    super({
      region: new EvFormControl("region", address.region),
      city: new EvFormControl("city", address.city),
      street: new EvFormControl("street", address.street),
      postalCode: new EvFormControl("postalCode", address.postalCode)
    })
  }

  getModel(): Address {
    const address = new Address();
    address.region = this.value.region;
    address.city = this.value.city;
    address.street = this.value.street;
    address.postalCode = this.value.postalCode;

    return address;
  }
}
