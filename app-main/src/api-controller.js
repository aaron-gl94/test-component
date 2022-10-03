import { LitElement } from 'lit';

export class ApiController extends LitElement {
    constructor() {
        super();
        console.log('API Controller works!');
        this.data = [];
    }

    firstUpdated() {
        this.data = this.getData();
    }

    _sendDataResponse(data) {
        this.dispatchEvent(new CustomEvent('ApiData', {
            detail: { data: data },
            bubbles: true,
            composed: true
        }))
    }

    getData() {
        fetch(`https://api.datos.gob.mx/v1/calidadAire`)
        .then(response => {
            return (response.ok) ?  response.json() : Promise.reject(response);
        })
        .then(response => this._sendDataResponse(response))
        .catch((error) => { console.warn('Something is wrong: '+error)})
    }
}
customElements.define('api-controller', ApiController);
