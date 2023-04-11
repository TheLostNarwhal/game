// import './style.css'
import SampleComponent from "./components/Sample-Component/Sample-component"
import { render } from "preact"
import IndexPage from "./pages/index"
import "./src/style.css"

const App = () => {
  return (
  <><div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
    {/*TODO  --- <NavBar />*/}
    <div style={{flexGrow:"1"}}>
      <IndexPage />
    </div>
    <div style={{display: "flex", justifyContent: "center", minHeight: "100px", background: "black", color: "white"}}>
      <p>I will be the footer</p>
    </div>
    {/*TODO  --- <Footer />*/}
    </div>
  </>
  )
}

const container = document.querySelector('#app')

render(<App />, container)
// document.querySelector<HTMLDivElement>('#app')!.appendChild(<App />) 

