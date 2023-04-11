// Define the component with const *component* = () => {}
import "./styles.css"

const SampleComponent = () => {
    {/*Make sure to include a return statement */}

    return (
    <>
    {/*Give a single parent node*/}
        
        
        {/*you can add inline css like this with {{property: "value"}}*/}
        <div style={{color: "blue", fontSize: "2em", textAlign: "center"}}> Inline Styling, Make sure to Export The Component</div>

        {/* you can also add css by defining the style or class below as an object*/}
        <div style={styles.bigText} ><p>Second styling style. Style object defined at the bottom of the file. Styles defined at the bottom of the file</p></div>

        <div class="flex center biggerText"  >With Classes imported from the same folder at compoents/Sample-Component/styles.css</div>

    {/*Close the Node */}
    </>
    )
}
//remember that styles is just an object and follows jsx syntaxing. 
//There are no "-" for styles in JSX Everything is camelCase. Instead of justify-content, it is justifyContent: "" 
const styles = {
    bigText: {
        fontSize: "4em",
        textAlign: "center"
    },
    smallText :{

    }
}

{/*Make sure to export default at the bottom */}

export default SampleComponent