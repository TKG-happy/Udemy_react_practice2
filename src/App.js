import React, {Component} from 'react';
// import React, {useState} from 'react';
import './App.css';
import Validation from './Component/Validation';
import Char from './Component/Char';

// 関数コンポーネントで書いた場合
// const App = () => {

//   // <input>内のテキストをstateで管理
//   const [values, setValues] = useState('');

//   const inputValues = (event) => {
//     setValues(event.target.value);
//   };

//   // <input>内のテキストを一文字ずつ分割して配列にする
//   const valuesArray = values.split('');

//   // Charコンポーネントがclickされたとき、該当の文字が<input>内およびCharコンポーネント全体から削除される
//   const deleteLetter = (index) => {
//     const deleteValuesArray = [...valuesArray];
//     deleteValuesArray.splice(index, 1);
//     const deletedValues = deleteValuesArray.join('');
//     setValues(deletedValues);
//   };

//   return (
//     <div className="App">
//       <input type="text" value={values} onChange={inputValues} />
//       <p>{values.length}</p>
//       <Validation length={values.length} />
//       {valuesArray.map((letter, index) => {
//         return <Char key={index} letter={letter} click={() => deleteLetter(index)}/>
//       })}
//     </div>
//   );
// };

// クラスコンポーネントで書いた場合
class App extends Component {
  state = {values: ''};

  inputValues = (event) => {
    this.setState({values: event.target.value});
  }

  render () {
    const valuesArray = this.state.values.split('');

    const deleteLetter = (index) => {
      const deleteValuesArray = [...valuesArray];
      deleteValuesArray.splice(index, 1);
      const deletedValues = deleteValuesArray.join('');
      this.setState({values: deletedValues});
    }

    return (
      <div className="App">
        <input type="text" value={this.state.values} onChange={this.inputValues} />
        <p>{this.state.values.length}</p>
        <Validation length={this.state.values.length} />
        {valuesArray.map((letter, index) => {
          return <Char letter={letter} key={index} click={() => deleteLetter(index)} />
        })}
      </div>
    );
  }
}

export default App;
