export class User {

    constructor(
        public id: number,
        public UserName: string,
        public email: string,
        public password: string,
        public is_organization : boolean,
        public is_sponsor:boolean,
    ) {  }

}
