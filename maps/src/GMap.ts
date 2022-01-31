export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    getContent() : string;
}

export class GMap {
    private map: google.maps.Map;

    constructor(elementId: string) {
        this.map = new google.maps.Map(document.getElementById(elementId), {
            zoom: 1,
            center: { lat: 0, lng: 0 }
        });
    }

    addMarker(item: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.map,
            position: item.location
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: item.getContent()
            });

            infoWindow.open(this.map, marker);
        });
    }
}