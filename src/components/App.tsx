import * as React from "react";

import {ContentPain} from "./ContentPain";
import {SideBar} from "./SideBar";

const ipsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus est, condimentum nec ultricies a, maximus ut urna. Nunc vitae finibus dui, vitae porta nunc. Nam massa orci, volutpat non arcu a, porttitor semper lorem. Cras sapien risus, pulvinar sed hendrerit in, imperdiet eget orci. Phasellus luctus tincidunt tortor, eget feugiat velit porttitor vel. Integer sed tellus aliquet, placerat tortor ac, facilisis erat. Sed vehicula mollis nisi. Donec volutpat lorem arcu, vel hendrerit mauris dapibus id.

Praesent rutrum ante in est sagittis commodo. Pellentesque arcu orci, egestas a enim in, eleifend scelerisque libero. Aliquam eget turpis vitae ante lobortis aliquam. Sed a tincidunt mauris. Aliquam rhoncus ligula arcu, eu auctor purus volutpat et. Nullam sodales euismod felis, sit amet sodales tortor congue sed. Quisque imperdiet odio quis fringilla eleifend. Vestibulum rhoncus, metus nec bibendum porta, ipsum augue imperdiet tellus, faucibus pulvinar elit felis ac metus. Aenean erat urna, pretium sit amet purus non, viverra mollis lectus.

Morbi scelerisque congue sapien ac congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce accumsan feugiat orci, ac vulputate felis tincidunt in. Aenean quis nisl eu nisl rhoncus pulvinar. Nulla iaculis commodo nunc, non volutpat felis ornare ut. Integer et laoreet arcu. Nam nec tincidunt sapien. Ut consectetur ligula eu orci mollis, eget facilisis arcu porta.

Proin at maximus mauris. Nam vulputate felis ut diam porttitor suscipit. Proin tincidunt blandit scelerisque. Nullam sed velit metus. Vivamus consequat ipsum ut justo egestas, vel venenatis orci suscipit. Duis turpis dolor, ornare ac nisl eu, fermentum fermentum augue. Pellentesque vestibulum metus at arcu consequat commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Fusce egestas, elit nec scelerisque maximus, lectus orci molestie libero, vel scelerisque purus orci id diam. Sed egestas, mauris ut eleifend maximus, purus dui varius metus, nec semper ipsum massa pellentesque erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur molestie nisl, at maximus libero pharetra commodo. Maecenas gravida, eros ultricies facilisis iaculis, mauris quam hendrerit est, id laoreet tellus orci sed massa. Etiam interdum velit ac accumsan luctus. Aliquam iaculis dolor vitae convallis mattis. Integer facilisis convallis est, id molestie est consequat vitae. In convallis urna sodales nisl commodo ullamcorper. Quisque quis sodales enim. Pellentesque et rhoncus ligula. Vestibulum consequat facilisis elit, eu pretium urna mollis sed.

`

export function App() {
    return <div className="row">
        <SideBar />
        <ContentPain content={ipsum} />
    </div>
}