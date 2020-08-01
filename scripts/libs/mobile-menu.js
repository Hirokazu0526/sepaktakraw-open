class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        // this.DOM.inner = document.querySelector('.mobile-inner');
        this.DOM.navList = document.querySelector('.mobile-nav');
        this.DOM.sns = document.querySelector('.mobile-sns-icon');
        this.DOM.container = document.querySelector('#global-container');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    
    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
    }

    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        // this.DOM.inner.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.navList.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.sns.addEventListener(this.eventType, this._toggle.bind(this));
    }
}
