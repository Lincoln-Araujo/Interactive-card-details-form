
function App() {
  return (
    <div className="color-bar">
      <div className='container'>
        <img className="card" id="front-card" alt="" src={require('./images/bg-card-front.png')}/>
        <img className="card" id="back-card" alt="" src={require('./images/bg-card-back.png')}/>
      </div>
      
    </div>
  );
}

export default App;