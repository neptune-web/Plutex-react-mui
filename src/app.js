import React from 'react'
import Routes from './routes'

// context providers
import NavigationContextProvider from 'hook/Context/NavigationContext'

function App() {
  return (
    <div className="App">
      <NavigationContextProvider>
        <Routes />
      </NavigationContextProvider>
    </div>
  )
}

export default App
