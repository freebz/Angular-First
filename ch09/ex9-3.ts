// 예제 9-3 부트스트랩 과정의 앵귤러 소스

bootstrapModuleFactory<M>(moduleFactory: NgModuleFactory<M>): Promise<NgModuleRef<M>> {
    return this._bootstrapModuleFactoryWithZone(moduleFactory, null);
}

bootstrapModule<M>(moduleType: Type<M>, compileOptions: CompilerOptions|CompilerOptions[] = []): Promise<NgModuleRef<M>> {
    return this._bootstrapModuleWithZone(moduleType, compilerOptions, null);
}
