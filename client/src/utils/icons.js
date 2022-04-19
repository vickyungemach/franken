import { 
    Airplane, 
    Alarm,
    AmericanFootball,
    Bag,
    Book,
    Beer,
    Cafe,
    Camera,
    Cart,
    Clipboard,
    Cloud,
    Flask,
    Heart,
    Map,
    Paw
} from 'react-ionicons';

const iconGrey = "gainsboro"
const iconPrimary = "#05B3D7";

const icons = [
    { name: 'airplane', greyIcon: <Airplane color={iconGrey} />, primaryIcon: <Airplane color={iconPrimary} /> },
    { name: 'alarm', greyIcon: <Alarm color={iconGrey} />, primaryIcon: <Alarm color={iconPrimary} /> },
    { name: 'americanfootball', greyIcon: <AmericanFootball color={iconGrey} />, primaryIcon: <AmericanFootball color={iconPrimary} /> },
    { name: 'bag', greyIcon: <Bag color={iconGrey} />, primaryIcon: <Bag color={iconPrimary} /> },
    { name: 'book', greyIcon: <Book color={iconGrey} />, primaryIcon: <Book color={iconPrimary} /> },
    { name: 'beer', greyIcon: <Beer color={iconGrey} />, primaryIcon: <Beer color={iconPrimary} /> },
    { name: 'cafe', greyIcon: <Cafe color={iconGrey} />, primaryIcon: <Cafe color={iconPrimary} /> },
    { name: 'camera', greyIcon: <Camera color={iconGrey} />, primaryIcon: <Camera color={iconPrimary} />  },
    { name: 'cart', greyIcon: <Cart color={iconGrey} />, primaryIcon: <Cart color={iconPrimary} /> },
    { name: 'clipboard', greyIcon: <Clipboard color={iconGrey} />, primaryIcon: <Clipboard color={iconPrimary} /> },
    { name: 'cloud', greyIcon: <Cloud color={iconGrey} />, primaryIcon: <Cloud color={iconPrimary} /> },
    { name: 'flask', greyIcon: <Flask color={iconGrey} />, primaryIcon: <Flask color={iconPrimary} /> },
    { name: 'heart', greyIcon: <Heart color={iconGrey} />, primaryIcon: <Heart color={iconPrimary} /> },
    { name: 'map', greyIcon: <Map color={iconGrey} />, primaryIcon: <Map color={iconPrimary} /> },
    { name: 'paw', greyIcon: <Paw color={iconGrey} />, primaryIcon: <Paw color={iconPrimary} /> }
]

export default icons;