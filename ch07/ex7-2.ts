// 예제 7-2 Http 서비스 클래스의 메서드

request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>;
get(url: string, options?: RequestOptionsArgs): Observable<Response>;
post(url: string, options?: RequestOptionsArgs): Observable<Response>;
put(url: string, options?: RequestOptionsArgs): Observable<Response>;
delete(url: string, options?: RequestOptionsArgs): Observable<Response>;
patch(url: string, options?: RequestOptionsArgs): Observable<Response>;
head(url: string, options?: RequestOptionsArgs): Observable<Response>;
options(url: string, options?: RequestOptionsArgs): Observable<Response>;
