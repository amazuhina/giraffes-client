import './App.css';
import {Page} from "./features/aviary/pages/page";







function App() {
  return (
    <div className="App">
        <Page/>
    </div>
  );
}

export default App;


const diets = [
    {
        id: 1,
        name: ''
    }
]

const characters = [
    {
        id: 1,
        name: ''
    }
]

const colors= [
    {
        id: 1,
        name: ''
    }
]

/*

interface Color {
    id: number
    name: string
}

const Colors: Array<Color> = [
    {

    }
]


*/

const Sex = {
    male: 'male',
    female: 'female'
}


const giraffe = {
    name: '',
    sex: '', // : Sex
    weight: 0,
    height: 0,
    color: '', // : colors
    diet: '', // : Diet
    character:'', // : characters
    photo: '',
}

/*
* features
*  - ui
    *  - button
    *  - button with image
    *  - button with icon
    *  - list
* - statistics
*  - employers
*   - components
*       - list
*           - list.js
*           - list-item.js
*   - storybook
*   - statistics.employers.slice.js
*
* - goods
*   - components
*       - list
*           - list.js
*           - list-item.js
*   - storybook
*   - statistics.goods.slice.js
*
* - ui
*   - components
*
* */