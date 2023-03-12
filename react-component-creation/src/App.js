import Button from "./components/Button";
import { GoBell } from 'react-icons/go'
import Accordion from "./components/Accordion";

function App() {

    const items = [
        {
            id: 1,
            label: 'header1',
            content: 'content1'
        },
        {
            id: 2,
            label: 'header2',
            content: 'content2'
        },
        {
            id: 3,
            label: 'header3',
            content: 'content3'
        }
    ];

    return <Accordion items={items} />;
}

export default App;