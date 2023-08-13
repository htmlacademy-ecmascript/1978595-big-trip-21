import Model from './model.js';
import points from '../data/points.json';
import destinations from '../data/destination.json';
import offerGroups from '../data/offers.json';
import PointModel from './point-model.js';


class AppModel extends Model {
  constructor() {
    super();

    /**
     * @type {Array<Point>}
     */
    this.points = [];

    /**
     * @type {Array<Destination>}
     */
    this.destinations = [];

    /**
     * @type {Array<OfferGroup>}
     */
    this.offerGroups = [];
  }

  /**
   * @returns {Promise<void>}
   */
  async ready() {
    //TODO : Получение данных с сервера.
    this.points = points;
    this.destinations = destinations;
    this.offerGroups = offerGroups;
  }

  /**
   * @returns {Array<PointModel>}
   */
  getPoints() {
    return this.points.map((point) => new PointModel(point));
  }

  /**
   * @returns {Array<Destination>}
   */
  getDestinations() {
    return structuredClone(this.destinations);
  }

  /**
   * @returns {Array<OfferGroup>}
   */
  getOfferGroup() {
    return structuredClone(this.offerGroups);
  }

}

export default AppModel;
