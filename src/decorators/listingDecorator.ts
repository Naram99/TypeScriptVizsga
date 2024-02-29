function listDecorator (
    target: any, 
    propertyKey: string, 
    descriptor: PropertyDescriptor
    ) {
        let ogMethod = descriptor.value;
        descriptor.value = function(...args: any[]) {
            console.log(`Listing entities...`);
            ogMethod.apply(this, args);
        }
    }