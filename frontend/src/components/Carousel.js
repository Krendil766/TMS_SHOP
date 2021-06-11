import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import one from '../picture/slaid/Dell Vostro 15 3500-6152.jpeg';
import two from '../picture/slaid/Huawei MateBook D 14.jpeg';
import three from '../picture/slaid/Huawei MatePad T10s.jpeg';
import four from '../picture/slaid/Lenovo IdeaPad Gaming 3.jpeg';



const CarouselPage = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    const slider = (
        <AutoplaySlider play={true} interval={2000}>
            <div data-src={one} />
            <div data-src={two} />
            <div data-src={three} />
            <div data-src={four} />
        </AutoplaySlider>
    );
    return (
        <div style={{ height: '500px' }}>
            {slider}
        </div>

    )
}

export default CarouselPage