document.addEventListener('DOMContentLoaded', function () {
    const main = new Main();
});

class Main {
    constructor() {
        this.header = document.querySelector('.header');
        this._observers = [];
        this._init();
    }

   

    _init() {
        new MobileMenu();
    }

    
}

