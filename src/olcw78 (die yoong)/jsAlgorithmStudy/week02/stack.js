class Stack {
    /** @type {number} */
    #capacity
    /** @type {number} */
    #cursor
    /** @type {any[]} */
    #storage

    constructor(capacity = 0) {
        this.#capacity = capacity
        this.#cursor = 0
        this.#storage = []
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.#cursor === this.#capacity
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.#cursor === 0
    }

    /**
     *
     * @param item {any}
     */
    push(item) {
        if (this.isFull()) {
            return
        }
        
        this.#storage.push(item)
        this.#cursor += 1
    }

    /**
     * @return {any}
     */
    pop() {
        if (this.#storage.length === 0) {
            return null
        }

        const item = this.#storage.pop()
        this.#cursor -= 1
        return item
    }

    /**
     * @return {number}
     */
    top() {
        return this.#cursor
    }
}