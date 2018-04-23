import { Observable } from 'rxjs/Observable';

export class MockAngularFireDatabase {
    list() {}
    object() {}
}

export class MockAngularFireObject<T> {
    item: T;
    key: string;

    constructor(item: T, key?: string) {
        this.item = item;
        this.key = key || '';
    }

    valueChanges(): Observable<T> {
        return Observable.of(this.item);
    }

    snapshotChanges(): Observable<any> {
        return Observable.of({
            key: this.key,
            payload: {
                val: () => this.item
            }
        });
    }

    update() {}

    set() {}

    remove() {}
}

export class MockAngularFireList<T> {
    items: T[];
    keys: string[];

    constructor(item: T[], keys?: string[]) {
        this.items = item;
        this.keys = keys;
    }

    valueChanges(): Observable<T[]> {
        return Observable.of(this.items);
    }

    snapshotChanges(): Observable<any[]> {
        return Observable.of(this.items.map((i, index) => {
            return {
                key: this.keys[index],
                payload: {
                    val() {
                        return i;
                    }
                }
            };
        }));
    }

    push() {
        return {
            key: this.keys[0]
        };
    }

    stateChanges(): Observable<any> {
        const data = this.items[0];
        return Observable.of({
            key: this.keys[0],
            type: this.keys[0],
            payload: {
                val() {
                    return data;
                }
            }
        });
    }
}

export class MockUsersService {
    getRef() {}
    getByKeyRef() {}
}
