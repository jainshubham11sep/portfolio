import { Carousel } from 'antd';
const contentStyle = {
    height: '100%',
    color: '#fff',
    lineHeight: '400px',
    textAlign: 'center',
    background: '#364d79',
};



export default function HomeCarousel() {
    return (
        <>
            <Carousel autoplay>
                {/* <Carousel effect="fade"> */}
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </>
    )
}