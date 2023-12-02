"use client"
import React, {useState} from 'react';


const BackToTop = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (

	
  <div className="btn-back-to-top mb-5" id="myBtn" onClick={scrollToTop} style={{display: visible ? 'flex' : 'none'}}>
  <span className="symbol-btn-back-to-top">
    <i className="zmdi zmdi-chevron-up" />
  </span>
</div>
	
);
}

export default BackToTop;