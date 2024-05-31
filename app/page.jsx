import Image from 'next/image';
import phoneImage from '../public/phoneImage.png';
import PartnersAndOffer from "../components/Partners"
import CreditCardManager from "../components/CreditCard"
import CreditCardManager1 from "../components/CreditCard2";
import Footer from '../components/CreditCard';
import CreditCardManager2 from '../components/CreditCard2';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 flex flex-col items-center">
      <header className="w-full py-6 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-700">GREEN BANK</div>
        <nav className="flex space-x-8">
          <a href="#" className="text-gray-600">Features</a>
          <a href="#" className="text-gray-600">How It Works</a>
          <a href="#" className="text-gray-600">Testimonials</a>
        </nav>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full">Buy Template</button>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center bg-green-100 py-1 px-3 rounded-full mb-4">
              <span className="text-green-600 font-semibold">New</span>
              <span className="ml-2 text-gray-600">Beta now available</span>
              <span className="ml-2 text-green-600">→</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Empower Your <span className="text-green-600">Finances</span> For A Brighter Future.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Streamline your payments with GreenBank. Instant bank transfers, hassle-free bill payments, and more – all at your fingertips.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full mb-8">Download App</button>
            <div className="flex space-x-2 mb-8">
              <Image src="" alt="Profile 1" className="w-10 h-10 rounded-full" width={500}
              height={500}
              objectFit='fill'
              />
              <Image width={500}
              height={500}
              objectFit='fill'
              src="" alt="Profile 2" className="w-10 h-10 rounded-full"/>
              <Image width={500}
              objectFit='fill'
              height={500}src="" alt="Profile 3" className="w-10 h-10 rounded-full"/>
            </div>
            <div className="text-gray-600 mb-8">200K+ Downloads</div>
          </div>
          <div className="relative w-full max-w-md mx-auto mt-10">
            <Image
              decoding="async"
              sizes="415px"
              src="https://framerusercontent.com/images/4ttwAhUaUCA6I91ohzPsDV0SM.png"
              srcSet="https://framerusercontent.com/images/4ttwAhUaUCA6I91ohzPsDV0SM.png?scale-down-to=2048 1006w, https://framerusercontent.com/images/4ttwAhUaUCA6I91ohzPsDV0SM.png 1665w"
              alt=""
              width={500}
              height={500}
              style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'cover', imageRendering: 'auto' }}
              objectFit='fill'
            />
          </div>
        
        </div>
        <div>
          <PartnersAndOffer />
        </div>
        <div>
        <Image
            //   decoding="async"
            //   sizes="calc(max((min(100vw - 60px, 1280px) - 24px) / 2, 1px) * 1.15)"
            //   srcSet="https://framerusercontent.com/images/1L0hXHUKXdDZa2kWAlIT5as43I.png?scale-down-to=512 512w,https://framerusercontent.com/images/1L0hXHUKXdDZa2kWAlIT5as43I.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/1L0hXHUKXdDZa2kWAlIT5as43I.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/1L0hXHUKXdDZa2kWAlIT5as43I.png 2520w"
              src={require("../public/img1.png")}
              objectFit='fill'
              width={460}
      height={500}
      alt="Picture of the author"
      className='absolute left-64rem top-80rem'
      
    //           alt=""
    //           className="block w-full h-full object-center object-contain "
    // color: transparent;
    // position: absolute;
    // left: 60rem;
    // top: 77rem;
    // width: 460px;
            />
        <Image
            //   decoding="async"
            //   sizes="calc(max((min(100vw - 60px, 1280px) - 24px) / 2, 1px) * 1.15)"
            //   srcSet="https://framerusercontent.com/images/1L0hXHUKXdDZa2kWAlIT5as43I.png?scale-down-to=512 512w,https://framerusercontent.com/images/1L0hXHUKXdDZa2kWAlIT5as43I.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/1L0hXHUKXdDZa2kWAlIT5as43I.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/1L0hXHUKXdDZa2kWAlIT5as43I.png 2520w"
              src={require("../public/image.png")}
              objectFit='fill'
              width={250}
      height={250}
      alt="Picture of the author"
      className='absolute left-64rem top-99rem'
      
    //           alt=""
    //           className="block w-full h-full object-center object-contain "
    // color: transparent;
    // position: absolute;
    // left: 60rem;
    // top: 77rem;
    // width: 460px;
            />
     <div className='grid grid-cols-1 gap-8 items-center'>
    <CreditCardManager />
    <CreditCardManager2 />
</div>
        </div>
      </main>
      <footer className="py-4 flex items-center justify-center space-x-2">
        <span className="text-gray-600">Get Template</span>
        <span className="text-gray-600">→</span>
        <div className="text-green-600">Made in Framer</div>
      </footer>
    </div>
  );
}
