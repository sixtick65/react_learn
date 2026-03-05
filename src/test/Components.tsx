import type React from "react";

const Header = ({name, children} : {name : string, children: React.ReactNode}) => <h1>Header {name} {children}</h1>;

// const Footer = ({name = 'default', children} : NameProps) => <h1>Footer {name} {children}</h1>;
const Footer = ({as : Component = 'h1', name = 'default', children = '', ...props} : DynamicProps) => 
    <Component {...props}>Footer {name} {children}</Component>;

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const Main = (props: any) => { console.log(props); 
//     return <h1 onClick={props.clickHandler}>Main {props.children}</h1>; };

const Main = ({name, children, ...props} : NameProps) => <h1 {...props}>Main {name} {children}</h1>;

export { Header, Footer, Main };