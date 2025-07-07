import './Navbar.css'
import Button from '../buttons';
import Input from '../input';
import Left from './left';
import Right from './right';



export default function Navbar() {
    return (
        <div className="navbar">
            <Left/>
            <Right />
        </div>
    );
}