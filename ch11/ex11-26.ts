// 예제 11-26 CanActivate 인터페이스 활용

// 임포트 생략

@Injectable()
export class SampleAuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
	// 인증 혹은 인가에 성공하면 true 반환
	// 인증 실패할 경우 Router로 화면 전환
	this.router.navigate(['some/other/page']);
	return false;
    }

}
