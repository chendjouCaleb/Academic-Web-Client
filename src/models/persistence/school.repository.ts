import {Repository, SERVER_URL} from "./repository";
import {School, SchoolEmail, SchoolPhone, SchoolInfo, SchoolAdminInvitation} from "../entity/school.entity";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {List} from "@everest/collections";
import { Address } from '../entity/address.entity';
import { HttpHeaders } from '@angular/common/http';

export class SchoolRepository extends Repository<School, number> {
  url: string = SERVER_URL + "/schools";

  createFromAny(value: any): School {
    return School.createFromAny(value);
  }

  findByName(name: string): Observable<School> {
    return this.httpClient.get(this.url + "/find/name", {params: { name: name}})
        .pipe(map(value => this.createFromAny(value)));
  }

  phones(idSchool: number): Observable<List<SchoolPhone>> {
    return this.httpClient.get<SchoolPhone[]>(`${this.url}/${idSchool}/phones`).pipe(
      map(values => {
        const phones = new List<SchoolPhone>();
        values.forEach(v => phones.add(SchoolPhone.createFromAny(v)));
        return phones;
      })
    );
  }

  addPhone(idSchool: number, phone: string): Observable<SchoolPhone> {
    return this.httpClient.post<SchoolPhone>(`${this.url}/${idSchool}/phones`, {}, {params: {phone}}).pipe(
      map(value => {
        return SchoolPhone.createFromAny(value);
      })
    );
  }

  deletePhone(idSchool: number, idPhone: number) {
    return this.httpClient.delete(`${this.url}/${idSchool}/phones/${idPhone}`);
  }


  emails(idSchool: number): Observable<List<SchoolEmail>> {
    return this.httpClient.get<SchoolEmail[]>(`${this.url}/${idSchool}/emails`).pipe(
      map(values => {
        const emails = new List<SchoolEmail>();
        values.forEach(v => emails.add(SchoolEmail.createFromAny(v)));
        return emails;
      })
    );
  }

  deleteEmail(idSchool: number, idEmail: number) {
    return this.httpClient.delete(`${this.url}/${idSchool}/emails/${idEmail}`);
  }

  addEmail(idSchool: number, email: string): Observable<SchoolEmail> {
    return this.httpClient.post<SchoolPhone>(`${this.url}/${idSchool}/emails`, {}, {params: {email}}).pipe(
      map(value => {
        return SchoolEmail.createFromAny(value);
      })
    );
  }

  editInfo(idSchool: number, info: SchoolInfo): Observable<any> {
    return this.httpClient.put(`${this.url}/${idSchool}/info`, info);
  }

  editName(idSchool: number, name: string):Observable<any> {
    return this.httpClient.put(`${this.url}/${idSchool}/name`, {}, {params: {name}});
  }

  editAcronym(idSchool: number, acronym: string):Observable<any> {
    return this.httpClient.put(`${this.url}/${idSchool}/acronym`, {}, {params: {acronym}});
  }

  editDescription(idSchool: number, description: string):Observable<any> {
    return this.httpClient.put(`${this.url}/${idSchool}/description`, {}, {params: {description}});
  }

  editWebsite(idSchool: number, website: string):Observable<any> {
    return this.httpClient.put(`${this.url}/${idSchool}/website`, {}, {params: {website}});
  }

  editAddress(idSchool: number, address: Address):Observable<any> {
    return this.httpClient.put(`${this.url}/${idSchool}/address`, address);
  }

  editImage(idSchool: number, image: File) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const formData: FormData = new FormData();
    formData.append("image", image);

    return this.httpClient.post(`${this.url}/${idSchool}/image`, formData);
  }


  getAdminInvitations(schoolId: number): Observable<List<SchoolAdminInvitation>> {
    return this.httpClient.get<SchoolAdminInvitation[]>(`${this.url}/${schoolId}/admin/invitations`).pipe(
      map(values => {
        const invitations = new List<SchoolAdminInvitation>();
        values.forEach(v => invitations.add(SchoolAdminInvitation.createFromAny(v)));
        return invitations;
      })
    );
  }

  getAdminInvitationsByAccount(accountId: string): Observable<List<SchoolAdminInvitation>> {
    return this.httpClient.get<SchoolAdminInvitation[]>(`${this.url}/admin/invitations/find`, {params: {accountId: accountId}})
    .pipe(
      map(values => {
        const invitations = new List<SchoolAdminInvitation>();
        values.forEach(v => invitations.add(SchoolAdminInvitation.createFromAny(v)));
        return invitations;
      })
    );
  }


  sendAdminInvitation(schoolId: number, accountId: string): Observable<SchoolAdminInvitation>  {
    return this.httpClient.post(`${this.url}/${schoolId}/admin/invitations`, {}, {params: {accountId}}).pipe(
      map(value => {
        return SchoolAdminInvitation.createFromAny(value);
      })
    );
  }

  deleteAdminInvitation(invitationId: number) {
    return this.httpClient.delete(`${this.url}/admin/invitations/${invitationId}`);
  }


  acceptAdminInvitation(invitationId: number): Observable<SchoolAdminInvitation> {
    return this.httpClient.put(`${this.url}/admin/invitations/${invitationId}/accept`, {}).pipe(
      map(value => {
        return SchoolAdminInvitation.createFromAny(value);
      })
    );
  }

  rejectAdminInvitation(invitationId: number): Observable<SchoolAdminInvitation> {
    return this.httpClient.put(`${this.url}/admin/invitations/${invitationId}/reject`, {}).pipe(
      map(value => {
        return SchoolAdminInvitation.createFromAny(value);
      })
    );
  }
}
