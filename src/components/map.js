// DEPENDENCIES
import React, { useEffect, useRef, useCallback } from "react";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps'

function load(args) {
    args.maps.getBingUrlTemplate("https://dev.virtualearth.net/REST/V1/Imagery/Metadata/Aerial?output=json&uriScheme=https&key=?").then(function(url) {
        args.maps.layers[0].urlTemplate= url;
    });
}

export default function BingMapsReact() {
    return(
        <MapsComponent load={load}>
            <LayersDirective>
                <LayerDirective />
            </LayersDirective>
        </MapsComponent>
);
}