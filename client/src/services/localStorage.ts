export class LocalStorage<T> {
    private readonly key: string;

    constructor(key: string) {
        this.key = key;
    }

    get(): T | null {
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : null;
    }

    set(value: T): void {
        localStorage.setItem(this.key, JSON.stringify(value));
    }

    remove(): void {
        localStorage.removeItem(this.key);
    }
}