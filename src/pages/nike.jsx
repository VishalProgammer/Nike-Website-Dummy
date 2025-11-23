import './nike.css';

export function Nike() {
    return (
        <div className='bg'>
        <div className="sidebar">
            <img className='logo-nike' src="./nike.png" alt="nike logo" />
            <p className='tagLine'>Style Takes Over</p>
        </div>
        <nav className='nav'>
            <li>Home</li>
            <li>Collection</li>
            <li>Orders</li>
            <li>Contact</li>
        </nav>
        <div className='hero-sec'>
            <div className='text-sec'>
                <h1>AIR MAX</h1>
                <h2>NIKE AIR MAX 90</h2>
                <br />
                <br />
                <h3>$98</h3>
                <br />
                <br />
                <p>The Nike Air Max 90 stays true to its OG running roots <br />
                with the iconic Waffle sole, stitched overlays and classic TPU accents. Featuring Nike's signature Air cushioning, it delivers all-day comfort with a retro look that's timeless.</p>
                <br />
                <button>Add to cart</button>
            </div>
            <div className='img-sec'>
                <img className='shoe-img' src="subject.png" alt="nike shoe" />
                {/* <div className='shadow'></div> */}
                {/* <div class="glass-circle1"></div>
                <div class="glass-circle2"></div>
                <div class="glass-circle3"></div> */}
            </div>
        </div>
        </div>
      
    );
  }