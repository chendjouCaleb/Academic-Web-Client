import { IsNotEmpty, MinLength, Matches } from 'class-validator';

export class Address {

    @IsNotEmpty()
    @MinLength(3)
    @Matches(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i, { message: "Contient des caractères non autorisés" })
    region: string;

    @IsNotEmpty()
    @MinLength(3)
    @Matches(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i, { message: "Contient des caractères non autorisés" })
    city: string;

    @IsNotEmpty()
    @MinLength(3)
    @Matches(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i, { message: "Contient des caractères non autorisés" })
    street: string;

    @IsNotEmpty()
    @MinLength(3)
    @Matches(/^[0-9]*$/i, { message: "Contient des caractères non autorisés" })
    postalCode: string;
}