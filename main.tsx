// import './style.css'
import SampleComponent from "./components/Sample-Component/Sample-component"
import { render } from "preact"
import IndexPage from "./pages/index"

const App = () => {
  return (
  <>
    {/*TODO  --- <NavBar />*/}
    <IndexPage />
    <SampleComponent />
    {/*TODO  --- <Footer />*/}
    <IndexPage />
  </>
  )
}

const container = document.querySelector('#app')

render(<App />, container)
// document.querySelector<HTMLDivElement>('#app')!.appendChild(<App />) 

