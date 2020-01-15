import {
    HTTP_INTERCEPTORS,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpParams,
    HttpRequest
} from "@angular/common/http";
import {Observable} from "rxjs";

export class LoginInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(localStorage.getItem('obj')) {
            const storage = JSON.parse(localStorage.getItem('obj'));
            const token = storage['0']['token'];


                const newRequest = req.clone(
                    {
                        params: new HttpParams().set('token', token)
                    }
                )
                return next.handle(newRequest);

        }else {
            return next.handle(req);
        }
    }

}
export const LoginInterceptorProider = {
    provide:HTTP_INTERCEPTORS,
    useClass  :LoginInterceptor,
    multi: true
}
