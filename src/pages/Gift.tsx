import Footer from '../components/Footer';
import { GiftBox } from '../components/GiftBox'

function Gift() {
  return (
    <div className="bg-pink-200 h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <GiftBox/>
      </div>
      <Footer/>
    </div>
  )
}

export default Gift;
