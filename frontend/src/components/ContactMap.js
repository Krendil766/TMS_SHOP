import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { TYPE_ROUTER } from '../const';

const ContactMap = () => {

    const position = [53.924583439956905, 27.50925502047306];
    const positionText = [53.924498760300000, 27.51012671619063];
    var myIcon = L.divIcon({
        iconSize: new L.Point(120, 40),
        html: 'г. Минск, ул. Тимирязева, д.67'
    });
    return (
        <Map
            className="map"
            style={{ width: '100%', height: '400px' }}
            center={position}
            zoom={17}
        >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} >
                <Popup>
                    <a href={'https://teachmeskills.by/contact-us'}>Сайт магазина</a>
                </Popup>
            </Marker>
            <Marker position={positionText} icon={myIcon}>
            </Marker>
        </Map>
    );
}


export default ContactMap;