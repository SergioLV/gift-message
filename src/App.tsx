import { GiftBox } from './components/GiftBox'

function App() {
  return (
    <div className="bg-pink-200 h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <GiftBox/>
      </div>

      <footer className="bg-pink-400 text-white text-center">
          <a href="http://github.com/sergiolv">@SergioLV</a>
      </footer>
    </div>
  )
}

export default App;
