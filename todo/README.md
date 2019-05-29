Todo Application


1) React Elements
- создаются при помощи JSX
- легковесные объекты - Virtual DOM
- ReactDOM.render() превращает React элементы в обычные DOM элементы и рендерит их на странице

2) React Components
- const AppHeader = () => { return <h1>My Todo List</h1> };
- функцции, которые возвращают React Element
- Должны начинаться с большой буквы
- Имя можно использовать в JSX как обычный тег: <AppHeader />