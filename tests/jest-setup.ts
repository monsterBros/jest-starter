// tests/jest-setup.ts
import "jest-location-mock";
import '@testing-library/jest-dom'

Object.defineProperty(global, 'localStorage', {
    value: {
      store: {} as Record<string, string>,
      setItem(key: string, value: string) {
        this.store[key] = value;
      },
      getItem(key: string) {
        return this.store[key];
      },
      removeItem(key: string) {
        delete this.store[key];
      },
      clear() {
        this.store = {}
      }
    },
    configurable: true,
  })


  import server from "./mockServer/server";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});