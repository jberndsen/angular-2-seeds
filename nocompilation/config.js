System.config({
    defaultJSExtensions: true,
    transpiler: "typescript",
    typescriptOptions: {
        "emitDecoratorMetadata": true
    },
    packages: {
        "app": {
            defaultExtension: 'ts',
            format: 'es6'
        }
    }
});