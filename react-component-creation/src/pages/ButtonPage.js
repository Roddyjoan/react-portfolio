import Button from "../components/Button";
import { GoBell } from 'react-icons/go'

function ButtonPage() {
    return <>
        <div> <Button secondary>Secondary Button!<GoBell /> </Button>  </div>
        <div> <Button warning>Warning Button!</Button>  </div>
        <div> <Button danger>Danger Button</Button>  </div>
        <div> <Button success>Success Button</Button>  </div>
        <div> <Button >No CSS</Button>  </div>
        <div> <Button rounded>Rounded Button</Button>  </div>
        <div> <Button primary >Primary Button</Button>  </div>

    </>
}

export default ButtonPage;