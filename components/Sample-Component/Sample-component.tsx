// Define the component with const *component* = () => {}
import "./styles.css"

const SampleComponent = () => {
    {/*Make sure to include a return statemtn */}
    return (
    <>
    {/*Give a single parent node*/}

        
        
        {/*you can add inline css like this with {{property: "value"}}*/}
        <div style={{color: "blue", fontSize: "4em"}}> I'm Just a Sample</div>

        {/* you can also add css by defining the style or class below as an object*/}
        <div style={styles.bigText}><p>Second Sample</p></div>


        <div class="flex center biggerText"  >With Classes</div>
    {/*Close the Node */}
    </>
    )
}
//remember that styles is just an object
const styles = {
    bigText: {
        fontSize: "10em"
    },
    smallText :{

    }
}

{/*Make sure to export default at the bottom */}

export default SampleComponent