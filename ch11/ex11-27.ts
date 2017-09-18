// 예제 11-27 SCM 프로젝트에 Resolve 가드 적용

@Injectable()
export class ProductDetailResolverService implements Resolve<Product> {

    constructor(private productService: ProductService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
	const key = route.queryParams['key'];
	return this.productService.get(key).map(product => {
	    if (product) return product;

	    this.router.navigate(['/product-list']);
	    return null;
	});
    }
}
