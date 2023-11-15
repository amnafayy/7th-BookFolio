function Footer(){
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
    
    // if(!isOpen)
    // return(
    // <p>CLOSED  </p>
    // );
    
      return( 
      <footer className='footer'>
        {isOpen ? ( 
          <Order closeHour={closeHour} openHour={openHour}/>
          // <div className='order'>
          // <p>
          //   We're currently open until {closeHour}:00. Come visit us or order online.
          // </p>
          // <button className='btn'>Order</button>
          // </div>
        ) : (
          <p>We're Happy To Welcome You Between {openHour}:00 and {closeHour}:00
          </p>
        )}
      </footer>
      );
    }
    
    function Order({closeHour, openHour}){
      return <div className='order'>
          <p>
            We're open on {openHour}:00 until {closeHour}:00. Come visit us or order online.
          </p>
          <button className='btn'>Order</button>
          </div>
    }
    

export default Footer
