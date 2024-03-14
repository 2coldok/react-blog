
export default class Github {
  #issues;
  
  constructor(issues) {
    this.issues = issues;
  }

  getTitleList() {
    return this.#issues.map((issue) => issue.title);
  }


  getMarkdownList() {
    return this.#issues.map((issue) => issue.body);
  }

  

  

  
}