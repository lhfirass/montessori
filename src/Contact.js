const Contact = () => {
    return ( 
        <div className="sectionContainer contact">
            <p className="sectionTitle">“وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم”</p>
            <form action="XsendMail">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <button type="submit"></button>
            </form>
        </div>
    );
}
 
export default Contact;
<div className="sectionContainer contact">
    <div className="sectionTitle"></div>
</div>