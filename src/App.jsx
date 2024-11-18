import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      {/* Add a header or other components if needed */}
      <header className="bg-blue-600 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Welcome to Our Contact Page</h1>
      </header>

      {/* Contact Form Section */}
      <main className="flex justify-center items-center py-8">
        <SimpleContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
      
    </>
  )
}

export default App;
 