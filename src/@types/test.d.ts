declare interface NameProps extends React.ComponentPropsWithoutRef<'div'> {
  name?: string;
//   onClick?: () => void;
  children?: React.ReactNode;
}

declare interface DynamicProps extends React.HTMLAttributes<HTMLElement> {
    as? : React.ElementType;
}
/*
const tag = (as : Component = 'div', children = '', ...props) => {
    return <Component {...props}>{name} {children}</Component>;
}
*/



type counterAction = 
    { type: 'increment', payload: number } | 
    { type: 'decrement', payload: number } | 
    { type: 'reset' }; // union type

interface Todo {
  id: symbol | number;
  text: string;
  completed: boolean;
}