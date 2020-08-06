// Dependency inversion principle


class Fetch {
    request(url) {
        //return fetch(url).then(r => r.json());
        return Promise.resolve('data from fetch');
    }
}

class LocalStorage {
    get() {
        const data = 'data from local storage';
        return data;
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch();
    }

    getClient() {
        return this.fetch.request('vk.com');
    }
}

class LocalStorageClient {
    constructor() {
        this.localeStorge = new LocalStorage();
    }

    getClient() {
        return this.localeStorge.get();
    }
}

class Database {
    constructor(client) {
        this.client = client;
    }

    getData(key) {
        return this.client.getClient(key);
    }
}

const db = new Database(new LocalStorageClient());

console.log(db.getData('random'));