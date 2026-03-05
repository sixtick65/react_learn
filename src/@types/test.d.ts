declare interface NameProps extends React.ComponentPropsWithoutRef<'div'> {
  name?: string;
//   onClick?: () => void;
  children?: React.ReactNode;
}

declare interface DynamicProps extends React.HTMLAttributes<HTMLElement> {
    as? : React.ElementType;
    name?: string;
}
/*
const tag = (as : Component = 'div', name = 'default', children = '', ...props) => {
    return <Component {...props}>{name} {children}</Component>;
}
*/
