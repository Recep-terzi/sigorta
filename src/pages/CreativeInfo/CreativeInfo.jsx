import React from 'react'
import './CreativeInfo.Module.css'
import menuIcon from '../../assets/Menu (2).svg'
import logo from '../../assets/Group 14086.svg'
import cardImage from '../../assets/thumbnail_arkadasinigetir_banner_copy_89b511ca31 1.png'
import phoneIcon from '../../assets/solar_phone-bold (4).svg'
import emailIcon from '../../assets/ic_baseline-email (4).svg'
import { useState } from 'react'
import { useEffect } from 'react'
import Loading from '../Loading/Loading'
const CreativeInfo = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {
                loading ? (<Loading />) : (
                    <div className="creative__body">
                <div className="creative__menu">
                    <img src={menuIcon} alt="" onClick={() => setOpenMenu(false)} style={{ cursor: "pointer" }} />
                </div>

                <div className="creative__main">
                    <div className="company__info">
                        Web Sitesi <span>Krc Medya Grup Yazılım Teknolojileri</span> tarafından yapılmaktadır.
                    </div>
                    <div className="main__top">
                        <p>Sigortacılar Dünyası</p>
                        <p>DIGITAL EXPERIENCE <br />DESIGN STUDIO</p>
                    </div>
                    <div className="main__body">
                        <div className="main__body__left">
                            <img src={logo} alt="" className='logo' />
                            <p>
                                Sitemiz şu anda <span>yapım aşamasındadır.</span>
                            </p>
                            <p>Yakında Sizlerle Buluşacak Olan Sigortacılar Dünyası Projemiz İçin Sabırsızlanıyoruz!</p>
                            <p>Sigortacılar Dünyası ekibi olarak, sizlere üstün bir deneyim ve zengin içerikler sunabilmek için var gücümüzle çalışıyoruz. Her ayrıntıyı özenle değerlendirerek, sigorta ihtiyaçlarınıza en uygun çözümleri geliştirmek için titizlikle çalışmaktayız. Amacımız, sigorta dünyasında sizin için fark yaratmak ve sizlere en iyi hizmeti sunmaktır. Yakında sizlerle buluşacak olan yeni projemiz için heyecanlıyız!</p>
                            <div className="main__body__card">
                                <div className="card__left">
                                    <img src={cardImage} alt="" />
                                </div>
                                <div className="card__right">
                                    <p>Anlayışınız ve sabrınız için <span>teşekkür ederiz.</span><br />Yakında tekrar görüşmek üzere!
                                    </p>
                                    <p>Bizi takip etmeye devam edin! Çok yakında sizlerle paylaşacağımız heyecan verici yenilikler ve sürprizler için hazır olun!...</p>
                                </div>
                            </div>
                        </div>
                        <div className="main__body__right">
                            <p>Bizi Arayın</p>
                            <p>Sorularınızı telefon üzerinden daha rahat bir şekilde iletebilirsiniz. Hafta içi 09.00-18.00 saatleri arasında bizimle iletişime geçebilirsiniz.</p>
                            <p><img src={phoneIcon} alt="" /> 0312 911 3 811</p>
                            <p>Bize Yazın</p>
                            <p>Soru, öneri ve talepleriniz için bize e-posta adresimizden ulaşabilirsiniz. Mesajlarınıza en geç 1 iş günü içerisinde dönüş yapıyoruz.</p>
                            <p><img src={emailIcon} alt="" /> info@sigortacilardunyasi.com</p>
                        </div>
                    </div>
                </div>


            </div>
                )
            }
        </>
    )
}

export default CreativeInfo