// import './style.css'
import SampleComponent from "./components/Sample-Component/Sample-component"
import { render } from "preact"
import IndexPage from "./pages/index"
import TheNavBar from "./components/NavBar/TheNavBar"
import "./src/style.css"

const App = () => {
  return (
  <><div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
    <TheNavBar />
    <div style={{flexGrow:"1", display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <IndexPage />
    </div>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100px", background: "black", color: "white"}}>
      <p>The Footer</p>
    </div>
    {/*TODO  --- <Footer />*/}
    </div>
  </>
  )
}

const container = document.querySelector('#app')

render(<App />, container)
// document.querySelector<HTMLDivElement>('#app')!.appendChild(<App />) 

