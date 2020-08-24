import { Component, OnInit } from '@angular/core';

import { GithubService } from '../../../common/services/github/github.service';

@Component({
  selector: 'app-github-repositories',
  templateUrl: './github-repositories.component.html',
  styleUrls: ['./github-repositories.component.scss'],
})
export class GithubRepositoriesComponent implements OnInit {
  private incLoadRep: number = 10;

  loading = true;
  canLoadMore = false;
  loadedRep: number = 0;
  totalRep: number = 0;
  githubProjects: Array<any> = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.loadRepositories(this.incLoadRep);
  }

  loadRepositories(nbOfReps: number): void {
    this.githubService.getPublicRepositories(nbOfReps).subscribe(
      (data: any) => {
        this.loading = data.loading;
        this.canLoadMore = data.data.user.repositories.pageInfo.hasNextPage;
        this.totalRep = data.data.user.repositories.totalCount;
        this.githubProjects = data.data.user.repositories.nodes;
      },
      (error: any) => console.log(error)
    );
  }

  loadMoreRepositories(): void {
    this.loading = true;
    this.loadRepositories(this.githubProjects.length + this.incLoadRep);
  }
}
