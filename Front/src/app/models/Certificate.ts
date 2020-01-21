
export class Certificate {
    public  cn : string ;
    public c: string;
    public st: string;
    public l: string;
    public o: string;
    public ou : string;
    public password : string ;


    constructor(cn : string , c: string, st: string , l: string ,  o: string ,  ou: string  , password : string )
    {
       this.cn = cn ;
       this.c = c ;
       this.st = st ;
       this.l = l;
       this.o = o ;
       this.ou = ou ;
       this.password = password;

    }



}
