import SampleComponent from "../components/Sample-Component/Sample-component"
import TheNavBar from "../components/NavBar/TheNavBar"
const indexPage = () => {
  const containerStyle = {
    display: "flex",
    justify: "center",
    width: "100%",
  }
  return (
  <>
    <TheNavBar />
    <div style={containerStyle}>
    </div>
    <SampleComponent />
  </>
  )
}

export default indexPage
