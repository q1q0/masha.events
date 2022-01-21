import { useRouter } from 'next/router'


const Detail = (props) => {

    const router = useRouter();

    const handleBackToHome = (e) => {
        e.preventDefault()
        router.push('/')
    }

    return (
        <div>
            <header className="header-details-section">
                <div className="container">
                    <div className="site-logo1">
                        <img src="static/images/logo.svg" onClick={handleBackToHome} alt="" />
                    </div>
                    <div className="details-inner-section">
                        <div className="home-page">
                            <i className="fas fa-arrow-left"></i>
                            <a onClick={handleBackToHome}>Back to home</a>
                        </div>
                        <div className="details-view-wrapper">
                            <h1>{props.title}. </h1>
                            <div className="booking-card">
                                <div className="booking-card-header">
                                    <h2>Date &amp; time</h2>
                                    <button> {props.price}</button>
                                </div>
                                <h6>{props.datetime}</h6>
                                <a href={props.booking_link}><button className="book-now">Book now</button></a>
                                <p>All sales are final. Once booked, tickets can not be transferred or refunded.</p>
                                <div className="booking-card-footer">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </header>

            <section className="venue-details-section">
                <div className="container">
                    <div className="venue-details-wrapper">
                        <div className="address-wrapper">
                            <h1>{props.title}</h1>

                            <div dangerouslySetInnerHTML={{ __html: props.detail_html }} ></div>

                            <h1 className="question">Have questions?</h1>

                            <p> We would love to answer all your questions. Just email our team at 
                                info [@] masha.event and we’ll get back to you asap.
                            </p>
                        </div>
                        <div className="map">
                            <h1 className="venue-title">Venue</h1>
                            {/* <img src="static/images/location.svg" alt=""> */}
                            <div className="location-iframe">
                                <iframe src={props.location} width="400px" height="357px" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                            </div>


                           <div className="address-wrapper address-flex">
                                <h1 className="location-heading">{props.address1}</h1>
                                <span>{props.address2}</span>

                            </div>
                        </div>
                    </div>

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
                            <a href="">Follow us on Instagram </a>
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

export const getServerSideProps = async (context) => {
    console.log(process.env.NEXT_PUBLIC_APP_URL);

    try{
        const {detail} = context.query;
        let res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/events`);
        const allEvents = await res.json();
        console.log(allEvents);
        let item = allEvents.find(x => x.path === '/'+detail);
        console.log(detail)
        res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/events/${item.id}`);
        const data = await res.json();
        return {
            props: data
        }
    }
    catch(ex){
        console.log(ex)
        return {
            props: {}
        }
    }
};

export default Detail;