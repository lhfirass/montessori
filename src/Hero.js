const Hero = () => {
    return ( 
        <section className="hero">
            <div className="message">
                <div>
                    <p>ألبومات مونتيسوري بالعربي</p>
                    <p>“يجب أن يكون الهدف من التعلم في مرحلة الطفولة المبكرة  هو تنشيط رغبة الطفل الطبيعية للتعلم و ليس بإكراهه على التعلم”</p>
                </div>
                <div className="actionBtn">
                    <a href="">
                    تحميل مختصر 
                    </a>
                    <a href="">
                    للتواصل
                    </a>
                </div>
            </div>
            <div>
                <img src="hero-pic.png" alt="" />
            </div>
        </section>
    );
}

export default Hero;