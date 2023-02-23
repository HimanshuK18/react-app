import ImageSlider from "./ImageSlider";
import { usePasswordToggler } from '../hook/usePasswordToggler';

export default function Children(props: any) {
    const { type, passwordVisibility, handlePasswordVisibility } = usePasswordToggler();
    return (<>
        <ImageSlider name="hello">
            <div />
            <div>this to show the children</div>
            <div>{false}</div>
            <div>{null}</div>
            <div>{undefined}</div>
            <div>{true}</div>
        </ImageSlider>
        <div>
            <input type={type} placeholder='Enter password...' />
            <button onClick={handlePasswordVisibility}>{passwordVisibility ? 'Show' : 'Hide'} Password</button>
        </div>
    </>);
}