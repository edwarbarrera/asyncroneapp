import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

function countDown(seconds) {
  return new Promise(function (resolve, reject) {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(function () {
        if (i == 13) reject('Bad luck');
        else if (i == 0) resolve('YES');
        else console.log('Step : ' + i);
      }, (seconds - i) * 1000);
    }
  }
  );
  
}

 let res=countDown(15);
 console.log(res);

res.then((data)=>console.log(data))
//res.then((data)=>this.setState({products :data}))
res.catch((err)=>console.log(err))
function App() {
 
  return (

    <div>

      <Clock />
     


    
    </div>

  )


}

export default App;
