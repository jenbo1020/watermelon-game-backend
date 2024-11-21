"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = void 0;
class Cache {
    constructor(options) {
        this._cache = {};
        this._fetch = {};
        this.options = options;
    }
    async fetch(key, fetch) {
        const cache = this._cache[key];
        const now = Date.now();
        // 有Cache 可直接返回
        if (cache && cache.expiredTime >= now) {
            // console.log(key, ',has cache')
            // 顺便Fetch一下
            if (cache.expiredTime - now <= this.options.fetchTime && !this._fetch[key]) {
                const _fetch = (this._fetch[key] = fetch()
                    .then((v) => {
                    this.set(key, v);
                })
                    .then(() => {
                    this._fetch[key] = undefined;
                }));
                // fetch timeout
                this.options.fetchTimeout &&
                    setTimeout(() => {
                        if (this._fetch[key] === _fetch) {
                            this._fetch[key] = undefined;
                        }
                    }, this.options.fetchTimeout);
            }
            return cache.value;
        }
        // 无Cache 去Fetch 然后返回
        else {
            if (!this._fetch[key]) {
                // console.log(key, ',not cache')
                const _fetch = (this._fetch[key] = fetch());
                // fetch timeout
                this.options.fetchTimeout &&
                    setTimeout(() => {
                        if (this._fetch[key] === _fetch) {
                            this._fetch[key] = undefined;
                        }
                    }, this.options.fetchTimeout);
            }
            let value = undefined;
            try {
                value = await this._fetch[key];
            }
            finally {
                this._fetch[key] = undefined;
            }
            this.set(key, value);
            return value;
        }
    }
    get(key) {
        const cache = this._cache[key];
        return cache && cache.expiredTime > Date.now() ? cache.value : undefined;
    }
    /**
     *
     * @param key
     * @param value
     * @param cacheTime 缓存时间（毫秒）
     */
    set(key, value) {
        this._cache[key] = {
            value: value,
            expiredTime: Date.now() + this.options.cacheTime,
        };
    }
    remove(key) {
        this._cache[key] = undefined;
    }
    clear() {
        this._cache = {};
    }
}
exports.Cache = Cache;
