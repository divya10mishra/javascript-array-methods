function myindexOf(obj, start) {
    for (var i = (start || 0), j = this.length; i < j; i++) {
        if (this[i] === obj) { return i; }
    }
    return -1;
}