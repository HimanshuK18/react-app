import { Children } from 'react';

export default function ImageSlider(props: any) {
    return (<>
        <div className="img-slider">
            {props.children}
        </div>
        <h1>Total clildren: {Children.count(props.children)}</h1>
    </>);
}