import Form from 'react-bootstrap/Form';
import './App.css';

function OutreachGoals() {
    return (
        <Form.Select aria-label="Default select example">
            <option>Select an outreach goal</option>
            <option value="1">General Unclear Partnership</option>
            <option value="2">Paid Promo</option>
            <option value="3">Paid Promo + Affiliate</option>
        </Form.Select>
    );
}

export default OutreachGoals;