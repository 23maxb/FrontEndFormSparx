import Accordion from 'react-bootstrap/Accordion';
import tikTokImage from "./tiktok.svg";
import youtubeImage from "./youtube.svg";
import React, {useState} from "react";

function TargetAudiences() {
    const [Items, setItems] = useState([
        ['This audience is primarily interested in fitness and health products.', 'test', '0'],
        ['This group is composed of tech enthusiasts who are always looking for the latest gadgets.', 'grass', '1'],
        ['This audience consists of young parents who are interested in baby and child care products.', 'asdlfka', '2'],
        ['This group is interested in sustainable and eco-friendly products.', 'grass', '3'],
        ['This audience is composed of fashion-forward individuals who follow the latest trends.', 'asdlfka', '4'],
        ['This group is interested in travel and adventure products.', 'grass', '5'],
        ['This audience is primarily interested in beauty and skincare products.', 'asdlfka', '6'],
        ['This group is composed of foodies who are interested in the latest food and drink products.', 'grass', '7'],
        ['This audience consists of pet owners who are interested in pet care products.', 'asdlfka', '8'],
        ['This group is interested in home and lifestyle products.', 'grass', '9'],
    ]);
    return (
        <Accordion defaultActiveKey="0">
            {Items.map(item => (
                <Accordion.Item eventKey={item[2]}>
                    <Accordion.Header>{item[0]}</Accordion.Header>
                    <Accordion.Body>
                        {item[1]}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default TargetAudiences;