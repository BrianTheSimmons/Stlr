import React from 'react'
import {Button} from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>Journey through time and space with us by signing up for our newsletter!</p>
                <p className='footer-subscription-text'>You can unsubscribe at any time</p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name="email" placeholder='Your Email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Services</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            STLR <i class="far fa-star"></i>
                        </Link>
                    </div>
                    <small className='website-rights'>STLR &copy; 2020</small>
                    <div className='social-icons'>
                        <Link to='/' target='_blank' aria-label='Facebook' className='social-icon-link facebook'>
                            <i class="far fa-star"></i>
                        </Link>
                        <Link to='/' target='_blank' aria-label='Instagram' className='social-icon-link instagram'>
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link to='/' target='_blank' aria-label='Twitter' className='social-icon-link twitter'>
                            <i className='fab fa-twitter'></i>
                        </Link>
                        <Link to='/' target='_blank' aria-label='Linkedin' className='social-icon-link linkedin'>
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
