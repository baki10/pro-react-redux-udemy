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

3) Spread operator (take all props from object)
<li><TodoListItem {...item} /></li> 
the same as:
<li><TodoListItem label={item.label} prop2={item.prop2} /></li>

const { id, ...otherProps } = item;
extract prop 'id' from item, then put all other props to 'otherPros' object

4) binding this to component:
    a) inside constructor using bind
constructor(){
    super();
    this.onClick = this.onClick.bind(this);
}
onClick() {
    console.log('clicked');
}
    b) inside constructor using arrow function 
constructor(){
    super();
    this.onClick = () => {console.log('clicked')};
}
    c) outside constructor in component using arrow function
onClick = () => {console.log('clicked')};



