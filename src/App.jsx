import './App.css';
import Logo from '../src/assets/logo.svg'

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <header>
          <a href='#'><img src={Logo} alt="logo" /></a>
           <nav>
                <ul>
                  <li><a href="#" className='active'>Home</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Gallery</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
            </nav>    
        </header>
          <main>
            <div className="left-col">
                <h1>Quality apparel without the price tag</h1>
                <p className='subhead'>No need to spend $xxx on apparel just for the name's sake.
                   Our premium apparel is made from the same stuff.
                </p>
                <div className="cta-buttons">
                  <a href="#" className="primary-cta">Browse our collection</a>
                  
                  <a href="#" className="secondary-cta">
                    <span>Spring '23 Collection</span>
                    <svg  viewBox="0 0 32 32">
                        <path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" 
                        data-name="3-Arrow Right"/>
                    </svg>
                  </a>
                </div>
                
                <div className="news">
                  <p className="employees">50K</p>
                  <p className="details">
                      We’re proud to announce that we now employ a workflorce of over <strong>50,000</strong>. 
                      It’s all possible because of you.
                  </p>
                </div>
            </div>
            <div className="right-col">
                <div className="card card1">
                      <div className="card-details">
                          <div>
                            <a href="#" className='product-title'>Fauxica Sport</a>
                            <p>Running shoes</p>
                          </div>
                          <p className="product-price">$49</p>
                      </div>
                </div>
                <div className="card card2">
                      <div className="card-details">
                          <div>
                            <a href="#" className='product-title'>Fauxica Sport</a>
                            <p>Running shoes</p>
                          </div>
                          <p className="product-price">$49</p>
                      </div>
                </div>
                <div className="card card3">
                      <div className="card-details">
                          <div>
                            <a href="#" className='product-title'>Fauxica Sport</a>
                            <p>Running shoes</p>
                          </div>
                          <p className="product-price">$49</p>
                      </div>
                </div>
            </div>
          </main>
      </div>
      </div>
  );
}

export default App;
