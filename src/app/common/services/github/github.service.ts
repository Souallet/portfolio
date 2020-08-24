import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private apollo: Apollo) {}

  getPublicRepositories(numberOfReps: number): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        query {
          user(login: "${environment.GITHUB.PROFIL_LOGIN}") {
            repositories(first: ${numberOfReps}, privacy: PUBLIC) {
              totalCount
              pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
              }
              nodes {
                name
                description
              }
            }
          }
        }
      `,
    }).valueChanges;
  }
}
