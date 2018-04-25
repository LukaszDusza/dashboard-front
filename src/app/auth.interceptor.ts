import { HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from "@angular/common/http";


export class AutInterceptor implements HttpInterceptor {

    private headers = new HttpHeaders().set('Autorization','token');

    intercept(req: HttpRequest<any>, next: HttpHandler): any {
     
        const reqCloned =  req.clone({
            headers: this.headers
        });
     return next.handle(reqCloned);
    }
}