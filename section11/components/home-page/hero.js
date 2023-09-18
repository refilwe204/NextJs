import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return(
        <section className={classes.hero}>
            <div className={classes.image}>Image
            <Image 
            src="" 
            alt="An image showing Refilwe" 
            width={300} 
            height={300} 
            />
            </div>
            <h1>Hi, i'm Refilwe</h1>
            <p> 
                I blog about Web development - especially frontend frameworks like React or NextJS.
            </p>
        </section>
    )
}

export default Hero;