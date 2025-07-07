import Button from '../buttons';
import Input from '../input';
import Tabs from '../tabs';

export default function Left() {
    let styles = {
        display: "flex",
        gridColumn: "1/2",
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems:"center",
    }
    return (
        <div className='left' style={styles}>
            <Button name={"PLEX"} />
            <Input />
            <Tabs />
        </div>
    );
}