import ImageSlider from "./ImageSlider";

export default function Children(props: any) {
    return (<>
<ImageSlider name="hello">
        <div />

        <div>this to show the children</div>

        <div>{false}</div>

        <div>{null}</div>

        <div>{undefined}</div>

        <div>{true}</div>
        </ImageSlider>
    </>);
}