import { LitElement, html} from 'lit';
import { ApiController } from './api-controller.js';
import styles from './styles.js';


export class AppMain extends LitElement {
  static get properties() {
    return {
      dataFormat: {
        type: Array
      }
    }
  }

  constructor() {
    super();

    this.dataFormat = [];

    this.addEventListener('ApiData', (e) => {
      this._dataFormat(e.detail.data.results);
      console.log(e.detail.data.results);
    });
  }

  static get styles() {
    return [styles];
  }

  _dataFormat(dataResponse) {

    let data = [];

    dataResponse.forEach(element => {
      let _id                               = element._id;
      let stationId                         = element.stations[0].id;
      let stationSource_id                  = element.stations[0].source_id;
      let stationName                       = element.stations[0].name;
      let stationIndexCalculationTime       = element.stations[0].indexes[0].calculationTime;
      let stationIndexResponsiblePollutant  = element.stations[0].indexes[0].responsiblePollutant;
      let stationIndexScale                 = element.stations[0].indexes[0].scale;
      let stationIndexValue                 = element.stations[0].indexes[0].value;
      let locationAlt                       = element.stations[0].location.alt;
      let locationLat                       = element.stations[0].location.lat;
      let locationLon                       = element.stations[0].location.lon;
      let measurementsAveragedOverInHours   = '';
      let measurementsPollutant             = '';
      let measurementsTime                  = '';
      let measurementsUnit                  = '';
      let measurementsValue                 = '';


      if (element.stations[0].measurements.length > 0) {
        measurementsAveragedOverInHours     = element.stations[0].measurements[0].averagedOverInHours;
        measurementsPollutant               = element.stations[0].measurements[0].pollutant;
        measurementsTime                    = element.stations[0].measurements[0].time;
        measurementsUnit                    = element.stations[0].measurements[0].unit;
        measurementsValue                   = element.stations[0].measurements[0].value;
      }
     
      data.push({
        _id:                              _id,
        stationId:                        stationId,
        stationSource_id:                 stationSource_id,
        stationName:                      stationName,
        stationIndexCalculationTime:      stationIndexCalculationTime,
        stationIndexResponsiblePollutant: stationIndexResponsiblePollutant,
        stationIndexScale:                stationIndexScale,
        stationIndexValue:                stationIndexValue,
        locationAlt:                      locationAlt,
        locationLat:                      locationLat,
        locationLon:                      locationLon,
        measurementsAveragedOverInHours:  measurementsAveragedOverInHours,
        measurementsPollutant:            measurementsPollutant,
        measurementsTime:                 measurementsTime,
        measurementsUnit:                 measurementsUnit,
        measurementsValue:                measurementsValue,
      });
    });

    this.dataFormat = data;
  }

  render() {
    return html`
      <api-controller></api-controller>
      ${this.dataTemplate}
    `
  }


  get dataTemplate() {
    return html`
      <table class="table table-sm">
        <thead>
          <tr>
            <td><b>_id</b></td>
            <td><b>stationId</b></td>
            <td><b>stationSource_id</b></td>
            <td><b>stationName</b></td>
            <td><b>stationIndexCalculationTime</b></td>
            <td><b>stationIndexResponsiblePollutant</b></td>
            <td><b>stationIndexScale</b></td>
            <td><b>stationIndexValue</b></td>
            <td><b>locationAlt</b></td>
            <td><b>locationLat</b></td>
            <td><b>locationLon</b></td>
            <td><b>measurementsAveragedOverInHours</b></td>
            <td><b>measurementsPollutant</b></td>
            <td><b>measurementsTime</b></td>
            <td><b>measurementsUnit</b></td>
            <td><b>measurementsValue</b></td>
          </tr>
        </thead>
        <tbody>
          ${this.dataFormat.map(data => html`
          <tr>
            <td>${data._id}</td>
            <td>${data.stationId}</td>
            <td>${data.stationSource_id}</td>
            <td>${data.stationName}</td>
            <td>${data.stationIndexCalculationTime}</td>
            <td>${data.stationIndexResponsiblePollutant}</td>
            <td>${data.stationIndexScale}</td>
            <td>${data.stationIndexValue}</td>
            <td>${data.locationAlt}</td>
            <td>${data.locationLat}</td>
            <td>${data.locationLon}</td>
            <td>${data.measurementsAveragedOverInHours}</td>
            <td>${data.measurementsPollutant}</td>
            <td>${data.measurementsTime}</td>
            <td>${data.measurementsUnit}</td>
            <td>${data.measurementsValue}</td>
          </tr>
          `)}
        </tbody>

      </table>
    `;
  }
}