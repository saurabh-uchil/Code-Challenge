import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home';
import { PaymentHistory } from './Components/PaymentHistory';
import { intro, paymentHistoryIntro } from './Data/Intro';

function App() {
  
  return (
    <>
      <BrowserRouter>
         <Navbar />
         <div>
          <Routes>
          <Route path="/" element={<Home intro={intro}/>} />
          <Route path="/paymentHistory" element={<PaymentHistory intro={paymentHistoryIntro}/>} />
          </Routes>
         </div>
      </BrowserRouter>
    </>
  )
}

export default App;
