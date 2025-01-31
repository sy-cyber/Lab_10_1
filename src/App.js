import './style.css'
import picture from './dg.png'

function App() {
  return (
    <div class="App">
      <div class="container1 cont" id="cont1">
        <header>
          <div class="logo">
            <p> project <span>REACT</span></p>
            </div>
            <nav>
              <ul>
                <li><a href="#cont1">Головна</a></li>
                <li><a href="#cont2">Наші розробки</a></li>
                <li><a href="#cont3">Пропозиції</a></li>
                <li><a href="#cont4">Контакти</a></li>
              </ul>
            </nav>
            </header>
            <main>
            <img id="back" src={picture} alt="dthsrt" />
            </main>
            <input></input>
  </div>
  <section></section>
  <footer></footer>
  
  </div>
  );
  }
  export default App;
