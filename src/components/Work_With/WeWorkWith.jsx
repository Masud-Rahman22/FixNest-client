import Marquee from 'react-fast-marquee'
import img1 from '../../../public/assets/brands/img1.png'
import img2 from '../../../public/assets/brands/img2.png'
import img3 from '../../../public/assets/brands/img3.png'
import img4 from '../../../public/assets/brands/img4.png'
import img5 from '../../../public/assets/brands/img5.png'
import img6 from '../../../public/assets/brands/img6.png'
import img7 from '../../../public/assets/brands/img7.png'
import img8 from '../../../public/assets/brands/img8.png'
import img9 from '../../../public/assets/brands/img9.png'

const WeWorkWith = () => {
    return (
        <div className='md:mt-20'>
            <Marquee play={true} pauseOnHover={true} speed={100}>
                <div className="flex justify-center items-center gap-20">
                    <img className='ml-12' src={img1} width={200} alt="" />
                    <img src={img2} width={200} alt="" />
                    <img src={img3} width={200} alt="" />
                    <img src={img4} width={200} alt="" />
                    <img src={img5} width={200} alt="" />
                    <img src={img6} width={200} alt="" />
                    <img src={img7} width={200} alt="" />
                    <img src={img8} width={200} alt="" />
                    <img src={img9} width={200} alt="" />
                </div>
            </Marquee>
        </div>
    )
}
export default WeWorkWith;