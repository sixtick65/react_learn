- js 예약어를 JSX에 그대로 쓸 수 없다. 예> class -> className
- JSX 에서 중괄호 {} 안에 js표현식을 쓸수있다 예> <div>{ 1 + count }</div>
- JSX 에서 return 은 한개의 태그만 리턴할 수 있다. <></>
- JSX 에서 인라인 스타일은 js 객체를 쓴다. 속성은 카멜케이스로 변경사용한다.
- JSX 에서 주석 : {/* 주석 */}


## 컴포넌트
```
declare interface DynamicProps extends React.HTMLAttributes<HTMLElement> {
    as? : React.ElementType;
    name?: string;
}
/* 다이나믹 컴포넌트 
const Tag = (as : Component = 'div', name, children, ...props) => {
    return <Component {...props}>{name} {children}</Component>;
}
*/
```

- 이벤트 전파 : 캡쳐(자식쪽으로), 버블(부모쪽으로, 기본동작), e.stopPropagation(); 버블차단
- 태그의 기본동작 막기 : e.preventDefault(); , 폼태그의 새로고침 같은

### 컴포넌트 상태 
- 변수가 변경되어도 리액트에서 감지하지 못함. 그래서 따로 관리가능한 상태를 둠.상태가 바뀌면 리랜더링함. 즉 __컴포넌트의 변경을 요할때 상태를 쓴다.__ 단지 데이터 변경이랑 틀림
- useState 훅 : const [state, setState] = useState(100); // useState<number>(10); 인데 추론가능하면 축약가능
  - useState<string | null>(null); string인데 null로 초기화
  - useState<string | undefined>(); string인데 초기화 안함
  - 기존 상태를 참조해서 변경할 경우 직접변경보다는 setState( (state) => state + 1 ); 같이 기존상태를 읽어서 쓰는게 좋다. 
- useReducer 훅 : 어떤 지정된 함수로 상태값을 반환하게 함. 엔진이 받아서 처리함
  - 어떤 형식화된 변경에 적합함. 증가, 감소, 초기화 등 상태변경이 구조화 되어있을때, 단순히 setter가 아니라 비지니스로직이 추가 되어 변경해야할때 , __유효성 검사를 거쳐야 할때__
  - const [state, stateDispatch] = useReducer(stateReducer, 0); // 즉 변경자를 가진 상태제어기
  - stateDispatch : 액션 전달자, stateDispatch({ type : '액션' , payload : 100 } );
  - function stateReducer(state : number, action : {type : string}) { return state; } // 변경자, 변경할 상태를 리턴하면 됨. 
  - type UserRole = "ADMIN" | "USER" | "GUEST"; // union type... 액션에 객체 대신에 쓸수있나?
  - 


```
docker run -it --rm -v $(pwd):/app -w /app -p 5173:5173 node:lts bash

npm create vite@latest . -- --template react-ts

npm install

npm run dev

package.json 
"scripts": {
    "dev": "vite --host 0.0.0.0",
    }

npm install -D tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

