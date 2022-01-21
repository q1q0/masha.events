import Link from 'next/link'

const Home = (props) => {
  console.log(props)
  return (
    <div>
      <header className="header-section">
        <div className="container">
          <div className="site-logo">
            <img src="static/images/logo.svg" alt="" />
          </div>
          <div className="main-wrapper">
            <div className="main-header-wrap">
              <h1>High class event concepts </h1>
              <p>We just started our revolutionary concept for Russian and Italian nights in Malta, why don't you join us in our adventure and visit our amazing parties ?!</p>
            </div>
            <img src="static/images/wave.png" alt="" className="wave-img" />

            <div className="main-banner">
              <img src="static/images/firework.png" alt="" className="fireworks" />
              <div className="mobile-banner">
                <img src="static/images/main-section.png" alt="" className="banner-2" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="main-section-wrapper">
        <div className="container">
          {props.events.map((item, id)=>{
            return id % 2 === 0? (
              <div key={id} className="card-wrapper-section">
                <div className="details-wrapper">
                  <img src={`static/images/${item.image}`} alt="" className="card-1-img" />
                </div>
                <div className="card-details-wrapper">
                  <h2>{item.header}</h2>
                  <div className="card-info" >
                    <div className="card_header">
                      <div className="card_title">
                        <h3>{item.title}</h3>
                        <p>{item.datetime}</p>
                      </div>
                      <button>{item.price}</button>
                    </div>
                    <div className="card_body">
                      <p>{item.description}</p>
                      <Link href={item.path}>
                        <button className="card_body-detail-button">
                          <a> View details </a>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
            :
            (
              <div key={id} className="card-wrapper-section" id="mobile-card">
                <div className="card-details-wrapper_1">
                  <h2 className="right-title">{item.header}</h2>
                  <div className="card-info" >
                    <div className="card_header">
                      <div className="card_title">
                        <h3>{item.title}</h3>
                        <p>{item.datetime}</p>
                      </div>
                      <button>{item.price}</button>
                    </div>
                    <div className="card_body">
                      <p>{item.description}</p>
                      <Link href={item.path}>
                        <button className="card_body-detail-button">
                          <a> View details </a>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="details-wrapper-1">
                  <img src={`static/images/${item.image}`} alt="" className="card-2-img" />
                </div>
              </div>
            )
          })}
        </div>

      </section>

      <footer className="footer-section">
        <div className="container">
          <div className="gallary-wrapper">
            <div className="footer-gallary">
              <img src="static/images/gallary.png" alt="" />
              <img src="static/images/gallary-2.png" alt="" />
              <img src="static/images/gallary-3.png" alt="" />
            </div>
            <div className="follow-btn">
              <img src="static/images/instagram.svg" alt="" />
              <a href="">Follow us on Instagram  </a>
            </div>

          </div>

          <div className="copyright">
            <p>© Masha Events 2021. All Rights Reserved.</p>
          </div>

        </div>

      </footer>
    </div>
  )
}

export const getServerSideProps = async () => {
  console.log(process.env.NEXT_PUBLIC_APP_URL);

  try{
    let res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/events`);
    const events = await res.json();

    return {
      props: { events }
    }
  }
  catch(ex){
    console.log(ex)
    return {
      props: { events: [] }
    }
  }
};

export default Home;