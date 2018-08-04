class AsyncAction {
    constructor() {
        this.pending = true;
        this.fulfilled = false;
        this.rejected = false;

        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });

        this.promise
            .then(v => {
                this.pending = false;
                this.fulfilled = true;
                return v;
            })
            .catch(e => {
                this.pending = false;
                this.rejected = true;
            });
    }
}

export default AsyncAction;
