import Button from "../components/Button";
import { GoBell } from 'react-icons/go'

function ButtonPage() {
    return <><div> ButtonPage
     </div>
        <div> <Button secondary>Click me <GoBell /> </Button>  </div>
        <div> <Button warning>Click me 2</Button>  </div>
        <div> <Button danger>Click me 3</Button>  </div>
        <div> <Button success>Click me 4</Button>  </div>
        <div> <Button >Click me 5</Button>  </div>
        <div> <Button rounded>Click me 6</Button>  </div>
        <div> <Button primary >Click me 7</Button>  </div>

    </>
}

export default ButtonPage;