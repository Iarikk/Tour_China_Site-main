import React from 'react';
import './AboutUs.css';


function AboutUs() {
    return (
        <div className="about-us">
            <div className="about-us-content">
                <h2>О нас</h2>
                <p>
                    ООО «МИР ПУТЕШЕСТВИЙ» готов предоставить для жителей Дальнего Востока туры в Китай
                    на любой вкус и кошелек. Мы качественно подходим к своей работе. Найдем подход к каждому!
                    Наша команда организовала множество туров, которые оставили след в памяти наших клиентов.
                </p>
            </div>
            <div className="about-us-image">
                <img src="/images/about-us.jpg" alt="О нас" />
            </div>
        </div>
    );
}

export default AboutUs;
