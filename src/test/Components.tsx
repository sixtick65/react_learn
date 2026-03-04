import type React from "react";

const Header = ({name, children} : {name : string, children: React.ReactNode}) => <h1>Header {name} {children}</h1>;

const Footer = ({name = 'default', children} : NameProps) => <h1>Footer {name} {children}</h1>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Main = (props: any) => { console.log(props); 
    return <h1 onClick={props.clickHandler}>Main {props.children}</h1>; };

export { Header, Footer, Main };