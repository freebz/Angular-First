// 예제 9-5 _bootstrapModuleFactoryWithZone 메서드

private _bootstrapModuleFactoryWithZone<M>(moduleFactory: NgModuleFactory<M>, ngZone: NgZone): Promise<NgModuleRef<M>> {
    if (!ngZone) ngZone = new NgZone({enableLongStackTrace: isDevMode()});

    return ngZone.run(() => {
	const ngZoneInjector =
	    ReflectiveInjector.resolveAndCreate(
		[{provide: NgZone, useValue: ngZone}], this.injector);
	const moduleRef = <NgModuleInjector<M>>moduleFactory.create(ngZoneInjector);
	const exceptionHandler: ErrorHandler = moduleRef.injector.get(
	    ErrorHandler, null);
	if (!exceptionHandler) {
	    throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
	}
	moduleRef.onDestroy(() => ListWrapper.remove(this._modules, moduleRef));
	ngZone.onError.subscribe({next: (error: any) => {
	    exceptionHandler.handleError (error); }});
	return _callAndReportToErrorHandler(exceptionHandler, () => {
	    const initStatus: ApplicationInitStatus =
		moduleRef.injector.get(ApplicationInitStatus);
	    return initStatus.donePromise.then(() => {
		this._moduleDoBootstrap(moduleRef);
		return moduleRef;
	    });
	});
    });
}
