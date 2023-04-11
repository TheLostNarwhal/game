import SampleComponent from "../components/Sample-Component/Sample-component"
const indexPage = () => {
  const containerStyle = {
    display: "flex",
    justify: "center",
    width: "100%",
  }
  return (
  <>
    <div style={containerStyle}>
    </div>
    <SampleComponent />
  </>
  )
}

export default indexPage
