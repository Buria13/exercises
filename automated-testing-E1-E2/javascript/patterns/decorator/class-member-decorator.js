function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

class Example {
    a() {}
    @readonly
    b() {}
}

const e = new Example();
e.a = 1;
e.b = 2;


