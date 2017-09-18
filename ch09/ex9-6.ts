// 예제 9-6 _moduleDoBootstrap 메서드 구현

private _moduleDoBootstrap(moduleRef: NgModuleInjector<any>): void {
    const appRef = moduleRef.injector.get(ApplicationRef);
    if (moduleRef.bootstrapFActories.length > 0) {
	moduleRef.bootstrapFactories.forEach((compFactory) =>
					     appRef.bootstrap(compFactory));
    } else if (moduleRef.instance.ngDoBootstrap) {
	moduleRef.instance.ngDoBootstrap(appRef);
    } else {
	throw new Error( ... );
    }
    this._modules.push(moduleRef);
}
