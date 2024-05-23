import { Route, Routes } from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      {/* <Route path='/error' element={<Error />} /> */}
      {/* <Route path='*' element={<Error error='*'/>} /> */}
    </Routes>
  );
}

export default App;
