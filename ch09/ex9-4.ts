// 예제 9-4 _bootstrapModuleWithZone 메서드 구현부

private _bootstrapModuleWithZone<M>(moduleType: Type<M>, compilerOptions: CompilerOptions|CompilerOptions[] = [], ngZone: NgZone = null): Promise<NgModuleRef<M>> {
    const compilerFactory: CompilerFactory = this.injector.get(CompilerFactory);
    const compiler = compilerFactory.createCompiler(
	Array.isArray(compilerOptions) ? comiplerOptions : [compilerOptions]);

    return compiler.compileModuleAsync(moduleType)
	.then((moduleFactory) => this._bootstrapModuleFactoryWithZone
	      (moduleFactory, ngZone));
}
