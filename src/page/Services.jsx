import React from "react";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaStar, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import './Services.css';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";



const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mainImage, setMainImage] = useState('');

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const services = {
    restaurants: [
      {
        id: 1,
        title: 'مطعم إسمه إيه',
        image: 'https://www.mat3am.net/assets/2021/12/10/jpg/879b7d8c-006b-4657-871d-0202ec250bf4.jpg',
        description: 'بيتزا وحلواني إسمه إيه',
        rating: 4.5,
        phone: '01115542476',
        whatsapp: '01070027906',
        facebook: 'https://www.facebook.com/profile.php?id=100064650828366',
        address: 'شارع أبطال التحرير أمام مبنى المحافظة',
        additionalImages: [
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/471509559_1129859302480300_2155352313847450509_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jV2Z42IBrn8Q7kNvgGFGZeh&_nc_oc=AdhZhcLnAhb1XcT-Ry8PhBfWF38UIDutSd6Beg4ifJgraI9srTLwC3dJ5Lm5HTQ8So0&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=Lvi01kN9QeFX9P03fWiXNQ&oh=00_AYE58enRnojzSFpA49QReSq_MtirwxA9Ujyv1LpMgMPo6Q&oe=67DC4086',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/470825574_1021220200042998_8927833701503784558_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_iGYR-1NldkQ7kNvgFAsvJK&_nc_oc=AdjyCAaXwcjC-Muu4sggIWyRpNAJDhQvuSSbmgdDAkZuIqgWfFbqvwrvSsfhv0pqAdQ&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=7mif4idGyxcd9TmRgLHMdA&oh=00_AYHS0vKavhyDAaSisJt0HVStnlf9M2BzxyKuRIRivVK_Jw&oe=67DC559C',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/470820381_1021220306709654_8167345377303764548_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=k_Q3DJ2s_6MQ7kNvgGRJhkA&_nc_oc=Adigsr6YToZ2YyoqOqt646G3AV5k3NG0luMrM5KStdBu81ISd1o8J_5KWYa94WdLPo8&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=u7EMc2qflWYDgF5IhA3e7A&oh=00_AYGBkKzdeNFxI99iw-MnOZC9HdpH8altIPGbm84rmfuEzw&oe=67DC56F7',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/471276592_1021848039980214_3589877460806739391_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=49vlaiqo02IQ7kNvgHgKhxS&_nc_oc=Adj1RaLmm81M1IGz4L9kkvGWfToJWoB3eKv85bnHLxPeXg1zV0T-7ddi2POyQ8Zkqvg&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=cjmulg44m9SEk_kpdC6V8Q&oh=00_AYHw5sKRrdmNp0hmOT5-oerDOlEkwLnIjcov7m7E9SgdwA&oe=67DC4532'
        ]
      },
      {
        id: 2,
        title: 'مطعم الدوكة',
        image: 'https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/387745282_798894202243480_6499800143859649470_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tuA_2ZWIvKYQ7kNvgGXc68h&_nc_oc=AdjsstJEjrx8RdXxrAmUtqd1jBCfZaAAlzpR1wGpGKyUpSeSq05aSmRl0i1h-Wg6Evo&_nc_zt=23&_nc_ht=scontent.fcai22-4.fna&_nc_gid=sMLVyjraKTdgf3Dqur0yxA&oh=00_AYGpG6uRpB0zr-ckvwiOxEvEjThEsPW7otC0diis0XkCfg&oe=67DEA347',
        description: 'مطعم الدوكة لأشهى المأكولات',
        rating: 4.2,
        phone: '01029437886',
        whatsapp: '01029437886',
        facebook: 'https://www.facebook.com/eldokka.egy',
        address: 'Eissa island - in front Telecom Egypt',
        additionalImages: [
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/471509559_1129859302480300_2155352313847450509_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jV2Z42IBrn8Q7kNvgGFGZeh&_nc_oc=AdhZhcLnAhb1XcT-Ry8PhBfWF38UIDutSd6Beg4ifJgraI9srTLwC3dJ5Lm5HTQ8So0&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=Lvi01kN9QeFX9P03fWiXNQ&oh=00_AYE58enRnojzSFpA49QReSq_MtirwxA9Ujyv1LpMgMPo6Q&oe=67DC4086',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/472507633_1129859142480316_1596469480881453078_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lZ6wWXnC__oQ7kNvgGqQRes&_nc_oc=AdgCBX9dYIbPtKGAF8uLP6TOY4ZOmznUFAfRMv8NuNEQczkgajwIpgQRmZ8Dn3DyexA&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=PnKufScj3ssiN6IHUU7TbA&oh=00_AYHVh5xv7DRUDjUTlHHQLC_738YCAtP2ea3n9KJKN75k_A&oe=67DC53A7',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/472268543_1129850012481229_6743298521499146789_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RdikqAkddK8Q7kNvgE5Hjxn&_nc_oc=AdhSYoOlXuZpJoJkYTVvGeRqFtB362sCVZeO2W7S_EXa0eD1ubwtrpf5rQdSfzcjg5o&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=p9PaC-Q_ma2z2iCTl-_Emg&oh=00_AYFzyfzhQuZ5dTaq7NnDuGfmwUaDmN3aAI7kNcEk1bONcg&oe=67DC3CE7',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/472558752_1129850009147896_5787350235014996683_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2vTqKCZBZf8Q7kNvgH5Dv2z&_nc_oc=AdhVGnUOKJHQ3tVSiSqHm4lzIxvalDKqTMRUHXYqqaTA-f-cIphA5Wj5ULtEkCGFkT8&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=QGmqi11p837L9S2j6rXzNg&oh=00_AYG-uIP0rDKpytmLk1WTUzL1WLwqV8cGbrqjPkDkup3wZQ&oe=67DC6DB8'
        ]
      },
      {
        id: 3,
        title: 'مطعم قصر الشام',
        image: 'https://dezone.net/wp-content/uploads/2022/02/Qasr-Elsham.png',
        description: 'مطعم قصر الشام للمأكولات السورية ',
        rating: 4.5,
        phone: '01144666399 ',
        whatsapp: '01152695993',
        facebook: 'https://www.facebook.com/QasrElshamRestaurant',
        address: 'شارع المطار ',
        additionalImages: [
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/480981132_935988242071244_2579913228515330926_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ASAuu3sornsQ7kNvgFcUXyK&_nc_oc=AdjrmDwoS8WBIpSqCI8VoVMMWsxwEUCE3Hxk6DOnLFE6QF2cyQUiyiHkH_XRJ_wVy18&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=Vf7EpHR6ujPIxelh208MxA&oh=00_AYHecNAMLQBQ0bk2BKOvHGjG4t8-y9I70VZPmszkqifgqg&oe=67DC5571',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/480967225_935988188737916_3322738471787261646_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sw3sl9RPyTkQ7kNvgFCsahJ&_nc_oc=Adj33hQtUQNAslzrLgBg1gSiuiX34Vd2l9-GdJkPaSebzCbjTxnsAv6slRuAL6C0v60&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=VEKM0IQ6_9UxpbYiaTKD7w&oh=00_AYEtMOupc549CoLxxkKAzIH3u3J3MCG651IaibxhSWRYbw&oe=67DC6EB4',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/480345131_935988235404578_1868263878430526103_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fTI0eK_gR4YQ7kNvgHXlv8V&_nc_oc=AdgGX2OxyDWfa0HPhprpALCjVWrJaA-Csh6vts06u_fJyd99dIHfm3aZyG-X15bRmyw&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=m1PURw84JUCAdePQD3L0Bg&oh=00_AYEWuxbXklPObg1gZlZjM3ZmpIHlGgB8DxWSkIWyawnb3Q&oe=67DC4D9B',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/480837138_935988378737897_7255108740329655242_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OKCKIVvYM0IQ7kNvgGCb2KU&_nc_oc=AdhzbXKREnumIhrYYknCDc04hZT_42Hq3hcFYO6zOtR1I0KX1pZHmAVyt8mK1alB5dE&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=nSd5SdSZRMJhbuNsaeD7iA&oh=00_AYED-pFUKdOmlXaXHW57YG0AXpkVMfPKBL1RovbV2WBbsw&oe=67DC4751'
        ]
      }, {
        id: 4,
        title: 'مطعم برتو سونو',
        image: 'https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-1/327323969_562547645901183_7191434394831828423_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=BJWobZ0mcUAQ7kNvgErPa6W&_nc_oc=AdjaieetWfIadV_TlcJaqj1coMFLsTLpVbxXCr2kEwKWS5_l46KuTDpv1KHiMbYgQJE&_nc_zt=24&_nc_ht=scontent.fcai22-1.fna&_nc_gid=Q_AHxxfWDQS3wvkRkHH5XQ&oh=00_AYGf89qgULoX-7BPU1F4Wch7ewnGMMjGMkNgJUAcGYut8w&oe=67DEAB62',
        description: ' كورنيش النيل - بجوار موقف الأقاليم',
        rating: 4.5,
        phone: ' 01116114406',
        whatsapp: ' 01116114406',
        facebook: 'https://www.facebook.com/Portosono',
        address: 'شارع كورنيش النيل، أسوان',
        additionalImages: [
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/481287707_963355999234256_640036090326824012_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JhwpYjTg9_0Q7kNvgFUMHky&_nc_oc=AdiYVpeJxXcUxIYgOtekJl1v7vbvl03IqwRsaGghLvMO2c2qaYZYwNU6XtS9o7Ya8Es&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=fHAv23LKIUQEoJ0eO2Cy3g&oh=00_AYH1F6MONQFUG5Bjd9T7vwwYb_80GfuhO5Zt7jpiW9ZbPg&oe=67DC6C13',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/480998974_963356009234255_8480033310423633925_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YPw2DkVdGYYQ7kNvgG6L77P&_nc_oc=AdhQvT0QXDMw7T6lgOOKBDbpMekVG9MongLd5PyI5uxmObCNlUcayCJqdJINfSKcwmU&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=QXy1B5VY5U09BOO0ygi03g&oh=00_AYG1BHjuD2Uh-ENxfMfAxM1eV3Smd7ynCdtyuyE2-Ejedg&oe=67DC5094',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/481054335_956780669891789_3241060392808245461_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-N2tl8bGO9cQ7kNvgGqQUmX&_nc_oc=AdjsWUUvNAUJcVS9BWYkEVLqq4aNpni3MoOyKj9si9GWmKZJRNKfndqlC_Mj4hGatk0&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=Z9O85rFA2VdgHTvuSjPHVA&oh=00_AYFkmjidu__p1-d8vSrG6Wq8f5xBWLMRXlaEAxeZsa-ouQ&oe=67DC5330',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/480754957_956780309891825_8037885628312862068_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=V-Hr4r5IBDQQ7kNvgEtnCFo&_nc_oc=Adjy8Te0JApKJMqPcR7CfNL0RHQAw-6ieBLvywN1uJcrBbaR_dhXOJFBIT7VoGAv18Q&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=WIJsQuweQbiBY-7arqn7Eg&oh=00_AYG_mETtIlG7kVeUaL-OsPlDJuX0GyXn2BPohpoWLg7fJw&oe=67DC78E8'
        ]
      }, {
        id: 5,
        title: 'مطعم مكاني',
        image: 'https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-1/299322441_434369682048439_2467440963957052930_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=674HlYoEDTsQ7kNvgGpVt7f&_nc_oc=Adg0eqV4sFmiJCeeXPceRoR40MAiFEnvXYJZTmFBe8XFUVvu1ZRBUuz_qfsPKow0-h0&_nc_zt=24&_nc_ht=scontent.fcai22-1.fna&_nc_gid=5iGiok4CV2MO3tIpdjW1lA&oh=00_AYGTzNIZJSH6E9hzu_o2vG5-z6sdsIQTE35c7mIaG2xRXw&oe=67DEACA9',
        description: 'HEALTHY AFRICAN FOOD',
        rating: 4.5,
        phone: '01123320133',
        whatsapp: '01123320133',
        facebook: 'https://www.facebook.com/MakaniAswanFb',
        address: 'كورنيش النيل بجوار نادي القضاه',
        additionalImages: [
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/481709810_1152384346670303_5272746953539325837_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=04_p7pKeQ8IQ7kNvgHmic6m&_nc_oc=Adh8tyRcxZ6CLGyZBqkXm1igiHhrBfl1wQmMjmbgzQGXMzKzF7Ts1MSL5rbaZovm_s0&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=X0jnaCVHJnNpN5IwizZpfg&oh=00_AYFOcoJ4eUUY-arQ8ASOLygdSiOztP3z4aMrRaV3QiIKFA&oe=67DC51B4',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/481827973_1152384363336968_3416856111649684104_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sHB57PtqPJIQ7kNvgGLfv-o&_nc_oc=AdgsuOKbpgMB5o5lQ7GSn4iSZikGJDm6x0H0sB-oCrP_Cb11sTa87SGi5eNPMms4dwY&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=0_FfsGSnxeVMGrHHNpXTTw&oh=00_AYEc5Krd-0ub19heXhP2Jxrs9f9oWdHc7pGptKp5rf1Zqg&oe=67DC487D',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/481228735_1152384333336971_859690377012900677_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2St7UHf7SIQQ7kNvgGeTCPL&_nc_oc=Adg1k9CFygM02qtBlWooYEcTFnPVlbfa25mqUduQJIpbqChzPYbsuqQHDgQb33-SnYI&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=xWOszBFiY7xMEZLZcPtA6g&oh=00_AYGAgDUMhbWH0G-fMsBk8WWYCdbosMFCJKfZ1imbc40qhg&oe=67DC4795',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/480789412_1152384376670300_5851733141466016365_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Y0q-F4fu4YcQ7kNvgE6EYfW&_nc_oc=AdjrfkjHRGFOzWwSVvsba_-npmIJCOaQfS6RZtTMHg7WpTHQ8IoF1DNvDyUloNb7MDc&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=yxmlGkhYerhtl1wG_yCxyQ&oh=00_AYG59tAN75ErbPPpkmqHayT9qIMcZUjGOTjthT8pAWO94w&oe=67DC7167'
        ]
      },
      {
        id: 6,
        title: 'مطعم كيوي',
        image: 'https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/431137112_802469391899856_3038003787612348462_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=oMSorlNl85wQ7kNvgEsvBYg&_nc_oc=Adg8FTtDOU0xToB3mv5UCmHy6IzkTt-ciISQpJ02UnBk7pJsfcbBrtxt8gNESNny59s&_nc_zt=23&_nc_ht=scontent.fcai22-4.fna&_nc_gid=XjvMM_gMANoweKbH4ohTpw&oh=00_AYFgB7nSz6dV-1ZEIi9yATJw0mCDPKbQxrz6ZmzfCtNI5g&oe=67DCB87D',
        description: '  محل حلويات',
        rating: 4.5,
        phone: '01114411439',
        whatsapp: '01114411439',
        facebook: 'https://www.facebook.com/Kiwi.Aswan',
        address: 'مول أسوان بلازا الدور الثاني',
        additionalImages: [
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/457217920_908851341261660_2092611688540718403_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TDaqhfruhlEQ7kNvgHltFWj&_nc_oc=AdhENw55RHMGg63EGnT4K_UCc2SVsnttQa6trtEnR-7Njw8DDXMe7H08dk3eUVfz6mw&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=xbAJstZ3Oy_uoKPdPZMUAA&oh=00_AYFvitnaH2BieVcL5VVq4MOa546BJEad4mQjRy6oHo14FA&oe=67DC4F04',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/457143252_908851327928328_6955986376111370489_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=H0tKLxH2Nm8Q7kNvgHWQqV7&_nc_oc=AdiCHR4Q9kkL7YSLOHaHDQ4xxMdPtMR3cuI23EgFH21aw7OPGfl9Apb61JHrhBNUTsU&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=9IDMIXqciXBz0LgKX2nUhg&oh=00_AYFzrKlIYtYp1YQNd6u8ajstWzAgMw-aNKnonrCQ0ELrsQ&oe=67DC7AA5',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/457218221_908851307928330_2300012771324002755_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eG0w2xsLY3EQ7kNvgFzPY0T&_nc_oc=AdiP7Feg6SC-NY4SIg_xvxEQI_jFJzucQ8eVkBb1jdVTv_HWY3c1Y6t8PwjDRAHfNNE&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=OE0SWRZVR9ITz2yGa_PVYA&oh=00_AYEKxGOW3ocVTKiKUsUzuTZEfTajPf_-mdiMxnUDVAL6gA&oe=67DC70B1',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/457218221_908851307928330_2300012771324002755_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eG0w2xsLY3EQ7kNvgFzPY0T&_nc_oc=AdiP7Feg6SC-NY4SIg_xvxEQI_jFJzucQ8eVkBb1jdVTv_HWY3c1Y6t8PwjDRAHfNNE&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=OE0SWRZVR9ITz2yGa_PVYA&oh=00_AYEKxGOW3ocVTKiKUsUzuTZEfTajPf_-mdiMxnUDVAL6gA&oe=67DC70B1'
        ]
      },
      {
        id: 7,
        title: 'Havana Café',
        image: 'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/280190126_1709993006007371_5157354253805099319_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3tcBMHyAdLcQ7kNvgHuHTbY&_nc_oc=AdjnaLq2C64Vb91qCGnEAeFjk9wHGrcxMVj1xnGgeNIDDv5hFWAj1OeWisw-ZSKjo2E&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=04azb4ml_gp7eMa1d4Ytzg&oh=00_AYFeO02ynVt_XTRxMesffz4FoNNBm0mmvK6oi_GJO_xxNg&oe=67DCC4C8',
        description: 'Café',
        rating: 4.5,
        phone: '01151160117',
        whatsapp: '01151160117',
        facebook: 'https://www.facebook.com/Aswanhavanacafe',
        address: 'El Kournish, Aswan',
        additionalImages: [
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/476299875_1180122810783095_3716297823438710643_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=OTwjuiXVJJgQ7kNvgGin_PV&_nc_oc=Adhatgfs0sVhIHQIc3GiAcB_cf0pUOiB-upCsjRJBiYSVP4BnLeBiVYzSKdDh6FgvMY&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=etRCdgRIFROh0KS2yYmB5Q&oh=00_AYGupR40zvW3pT5hPIuJA-4i_kbHIgzNIYmAmNa9O-gJyA&oe=67DC50F8',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/476425594_1180122707449772_6138219130877265412_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=0fTieX6zE-UQ7kNvgFPIhdq&_nc_oc=AdjiD471BY5ZgF9CziPUxK9ykgVLQvtLy_gYOvXIRosxlI-4oJYvwKZwIYj-ev7L86M&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=f41xjCVXcACBiSQC9NAyoQ&oh=00_AYFT9Uc3bOn3-QIc9Qbe521GvOIhfOrLfcjob-k3OUoq-w&oe=67DC80E0',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/476292863_1180122677449775_5510934897728866833_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=RiDu5NL8BiIQ7kNvgHdwYk1&_nc_oc=AdizMKyWRqPv_ieS1jodXlRdbYJXiZU1r4qEroZ3XP5deglR84u-IXRvSVmDeEL5ebs&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=G0Q156qLylcJ9DcKRIfYoA&oh=00_AYEWMmpLnn1ANlsVBqt234w0I95Pw-lXzYv0Wp3L88CKzA&oe=67DC6D58',
          'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/476363584_1180122610783115_7787259342526256796_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=5oIP1biu8pQQ7kNvgG0sYUZ&_nc_oc=Adi-evj3S3NUX7vQyEw_6XgzmdiKCLqL-PzI4CQ8xz2IEVaMyGyNDsDM77297Nd74xU&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=wUIUI-Uc1LC_oEtbLt3tSQ&oh=00_AYErFJ6PqvWYc1Mo-26u5NJWTOXcK8fS7l8HuI_hrZYwnA&oe=67DC6A62'
        ]
      },
    ],
    pharmacies: [
      {
        id: 1,
        title: 'صيدلية عابدين',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kaZFXBFOeRQ_fDmZY7U36AI5Rd7TFk_Cvw&s',
        description: 'خدمة 24 ساعة - توصيل مجاني',
        rating: 4.8,
        phone: '19036',
        whatsapp: '19036',
        facebook: 'https://www.facebook.com/AbdinPharmaciesOfficial?locale=ar_AR',
        address: ' الكورنيش اسوان',
        additionalImages: [
          'https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-6/480757004_935399338804025_1750358139017244404_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=714c7a&_nc_ohc=z4nbjBWFcRAQ7kNvgH5-MvD&_nc_oc=AdihQOGY5BCQBiitIqaohwQ6l8YD_BASV9q7xJ1h5AYBm6Ng3x5jbZfwEpKV64q2yYI&_nc_zt=23&_nc_ht=scontent.fcai22-1.fna&_nc_gid=X41Q-mBd7e0T4YoHcoTiHw&oh=00_AYGbpWMmJzckAo7_TAu5SmevFR8XbiGi26_MF8_ZBa2lfg&oe=67DE8798',
          'https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-6/480273022_929597252717567_1528700944824269432_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=714c7a&_nc_ohc=JoRR6G_ozC4Q7kNvgFcwnuE&_nc_oc=AdhllaYulPfWDkJPRbS0K_74E7wgluxFZptNobOzyTcf7vf5t1KhFJ8PO9EJ4AXdYOQ&_nc_zt=23&_nc_ht=scontent.fcai22-1.fna&_nc_gid=oT7axo28FtUZVXFrIk8SIQ&oh=00_AYGwRdtC85mStq-O7kgU32OoVP51a5imfpXhF8rYE_phRA&oe=67DE8F3B',
          'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/481235600_926073746403251_614886164706023872_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=714c7a&_nc_ohc=otTMr8F-3JAQ7kNvgE8xOYx&_nc_oc=AdgpmWxp4rINkxl0X10GE2MuZxQDMH23d-3JhENoLWK8iPtoquP-X5buURPoJAz7oI4&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=5OOFAdqHkGmQUiKBoKmwMQ&oh=00_AYHX8uYRXzmCfWB7fBRBcoaBLr-cMKMwmW_471XWgcwxxA&oe=67DE8312',
          'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/475685630_921180196892606_8445730377433035586_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=1WNmJid-KGYQ7kNvgHFypVV&_nc_oc=AditueJNKxu41DPxsZLJF61Ffp_7rj3PvY6nAsDf8y9PEkaEmujBfMtQ1O2nntN9OE8&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=dbnID2cW72FKjSkEgScdXw&oh=00_AYHgUnxp_OZ6ZbpxX-msR8tJz0f_X1YJTLLhQPUy9G-GLw&oe=67DE8FC9'
        ]
      },
      {
        id: 2,
        title: 'صيدلية سيد صابر ',
        image: 'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/473007670_592958446800345_5074531741508487106_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=4SvQQhAZeY8Q7kNvgGpxKxc&_nc_oc=AdiFwYQ1-lX6NfBEWk9fXSZhWc5vCCZu2CUgk97QX5gvT-3MRyuDl-w9wF8ifqMidfo&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=xhgtmCiV9hmZhnt7gqe5og&oh=00_AYE0ZKm9HmIUXFC-Sl3VTgZdoeAri-UMluqBsD1yhXXSLA&oe=67DEA97F',
        description: 'خدمة 24 ساعة - توصيل مجاني',
        rating: 4.8,
        phone: '01050767676',
        whatsapp: '01050767676',
        facebook: 'https://www.facebook.com/profile.php?id=100082585836170&locale=ar_AR',
        address: 'شارع عباس فريد',
        additionalImages: [
          'https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-6/467397229_558506226912234_1759112581259575119_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ev6rQTi3UkoQ7kNvgFza0Fg&_nc_oc=Adg7yuSTFTX_oFVoT4EoYHzux-iE2fYNpFYYIzZJHuYLM1X6eDSKMFMGbvfi_hJeFbg&_nc_zt=23&_nc_ht=scontent.fcai22-1.fna&_nc_gid=UC-z3W7aAzzm4HAdUGb5Pw&oh=00_AYGi5mB0NuZLFYezI5iUmpvAutXTMX5mnl7nhWamgfH1iA&oe=67DE9D67',
          'https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-6/467397229_558506226912234_1759112581259575119_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ev6rQTi3UkoQ7kNvgFza0Fg&_nc_oc=Adg7yuSTFTX_oFVoT4EoYHzux-iE2fYNpFYYIzZJHuYLM1X6eDSKMFMGbvfi_hJeFbg&_nc_zt=23&_nc_ht=scontent.fcai22-1.fna&_nc_gid=UC-z3W7aAzzm4HAdUGb5Pw&oh=00_AYGi5mB0NuZLFYezI5iUmpvAutXTMX5mnl7nhWamgfH1iA&oe=67DE9D67',
          'https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/467507948_558506480245542_7493550481983407126_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XizcxbXbjBwQ7kNvgGdQ2Se&_nc_oc=Adiw_qZBETDbMOgeSi9jeKpDpjbcuCnUdjfBkwIzoNbjGdhBjAk1y7RJKAf3vGhodu0&_nc_zt=23&_nc_ht=scontent.fcai22-4.fna&_nc_gid=D46Rlz936X06ajTYyY1c8w&oh=00_AYG7Ij1p1lRT4jJ9hLkbUa-MSBMhPFihxLE5QttZJqJaOw&oe=67DE8F5F',
          'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/467304413_558506213578902_1285077997597294174_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=z4dPYpvdnBoQ7kNvgH-0S3a&_nc_oc=AdhGCfaRO7jZBCwAuzl-kj9UofzK3U5w2oFZG8c7orx70yEC6TeqgySmD2HzjASWEM4&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=mDVQJKcMDanCesAKQRAxuw&oh=00_AYEU8Q5pFQkDUdDgQcvcP_j4xg2fEjKs9KIB2IgVD4G-xg&oe=67DEAB0E'
        ]
      },
      {
        id: 3,
        title: 'صيدلية إبتسام بخيت',
        image: 'https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/483584671_947172104257432_4319401161471104904_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=N0ZK3Ss5LHAQ7kNvgFhHDMt&_nc_oc=AdhYGYRn0xthfPvTacW3Ea6t0uclm33L38rpw2hZLvcRcghzSpP3dDY0aHVGS0e0Y30&_nc_zt=23&_nc_ht=scontent.fcai22-4.fna&_nc_gid=A-CUxJz1-JxN5kD70C81Rw&oh=00_AYGc0Ln46NxFlM7KJu7vYPgeEs-QIRV5zK-rp0cNYaKsEw&oe=67DE901E',
        description: 'خدمة 24 ساعة - توصيل مجاني',
        rating: 4.8,
        phone: '01281255552',
        whatsapp: '01281255552',
        facebook: 'https://www.facebook.com/dr.ebtesam.pharmcy?locale=ar_AR',
        address: 'السيل برج الحج',
        additionalImages: [
          'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/480697535_932252965749346_6407334378827262123_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=714c7a&_nc_ohc=EqiqQIw9MVgQ7kNvgExNUSd&_nc_oc=Adh26s5qRSYa5UTx_1mBl6aPcoUE4EfM333ZIIn93C3QAzPApzuOXoPSORQX0VpTTMo&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=3dI8TDmB3sC8v-JW-5nA5g&oh=00_AYHyNHsWg1-B5KLjK70YOOD8ooVgW8qBD5yQj27y88R3cw&oe=67DEAEE5',
          'https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/481107452_941049668203009_2738131269728543736_n.jpg?stp=c127.0.555.555a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=714c7a&_nc_ohc=zRDwt_6BaCQQ7kNvgFbq1lW&_nc_oc=AdjNXJcZFWSlvO6--jEL5uVdGTzVklB3U1xbl_Ox45-QRJq2IfSY2QgTGR3LuMXtiWg&_nc_zt=23&_nc_ht=scontent.fcai22-4.fna&_nc_gid=8HvUnMKQV30xt-Nj3CvU6w&oh=00_AYG9kBOLz-w445XNjx8DEIJquLezPeZ6-GjUoHOfZn2xWw&oe=67DEA7C3',
          'https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-6/480818350_937147781926531_7033976238452715086_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=714c7a&_nc_ohc=c-0cimoyvnIQ7kNvgEz66iT&_nc_oc=Adi7gspP6A8Dd9Os3fiU3ihUti_gNIg3eZYLdii1Mpz1-XfCPAzDjZiXHEobzaHxzyU&_nc_zt=23&_nc_ht=scontent.fcai22-1.fna&_nc_gid=Tl_nyjJ1g9YebKUQVBDxfw&oh=00_AYFJuuA7LLPj0ffXhO_D2yYtbgZG17bQJWKqeBMoqTFQzg&oe=67DEB055',
          'https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/482346710_939353235039319_6005032682144050530_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=714c7a&_nc_ohc=6Rfp8iW5afgQ7kNvgEu-Qmt&_nc_oc=AdgTcY9JDqhRqmXNWy6NPH_1yHNE_l4hcs_iQ_rWsmzlvy1KfD_Npkm5yt11Jn19DBk&_nc_zt=23&_nc_ht=scontent.fcai22-4.fna&_nc_gid=8FT-2gdfoFPej7ciLmQYYQ&oh=00_AYHeMUWtgCNIk_eCIAwqx_sThgnFqL-IPnFNZjAbUU-kjg&oe=67DEAB56'
        ]
      },
      {
        id: 4,
        title: 'صيدلية أبو قليل  ',
        image: 'https://scontent.fcai22-4.fna.fbcdn.net/v/t1.6435-9/100738234_118169413235856_2569900755372736512_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=a-YUElM9PLAQ7kNvgHIM30x&_nc_oc=AdgN88Os0paf9T8HWh0meDR6zUmOmwKylzj1H4TUBm9VD-X0Y9Cng6Y8ZS5XqForo5g&_nc_zt=23&_nc_ht=scontent.fcai22-4.fna&_nc_gid=HXQiDhf0XVM7usgzbJ7CiA&oh=00_AYEqIYoVYp33mPNNASIPbJIM3rx2vay5OT1RtPkgoeKbXA&oe=68004DC7',
        description: 'خدمة 24 ساعة - توصيل مجاني',
        rating: 4.8,
        phone: '01151428645',
        whatsapp: '01151428645',
        facebook: 'https://www.facebook.com/profile.php?id=100051283927225&locale=ar_AR',
        address: 'طريق الكرور، حي الزهور، امام فرع البنك الاهلي الجديد',
        additionalImages: [
          'https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/484350053_1179681690417951_7386131248573964010_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=50ad20&_nc_ohc=MwD7TOroZyEQ7kNvgFuG86a&_nc_oc=Adh0Yzn5pIa4HiEm8DNR7aMZIbjD9kF9zj5W-ROg7zdqUoaJEYYbrrJ6TiCENpAkYEk&_nc_zt=23&_nc_ht=scontent.fcai22-4.fna&_nc_gid=tHDhzVF7gPryeL3ZdCLWiw&oh=00_AYGuMpXTo-nLozRKnDe57hsNEVphCxQD9DFRStan1pM60A&oe=67DEA151',
          'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/484506792_1179326123786841_7497277863759589763_n.jpg?stp=c0.119.1080.1080a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=h6kSr4aKW0QQ7kNvgHRbZYL&_nc_oc=Adg04JInjkSOrphV1NXL6u410K33uSPxTnfE1Oqc9Co3YBf7TI9HeZFEIRo491oprnY&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=0XC8hSTDnxpjarI7yWrG6A&oh=00_AYFkP1hbCFPTXkr_AOTj6g8S6CaE__2Y5op-BUagXYlJqg&oe=67DEA64A',
          'https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/483525066_1179319860454134_9181036700336751391_n.jpg?stp=c49.0.863.863a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=50ad20&_nc_ohc=LgQ8qkUgN7EQ7kNvgHJYT4K&_nc_oc=AdjhC0H9cmHgW4BYb6-PZL4ouic2Va1m6WezFs07eMynzED9_WIy9zyaGD3vEPpy3_U&_nc_zt=23&_nc_ht=scontent.fcai22-4.fna&_nc_gid=4KLI6zXQs2bZbn1aniKy2A&oh=00_AYFt3OCI4DZOQ93tSBs8VRHltugTELIyqdI7xt9MlWeNJw&oe=67DEB2E9',
          'https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-6/484795024_1179317860454334_5953722240077618948_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=DmO_rHg4_S0Q7kNvgEU7F8e&_nc_oc=Adh3sUgHnJF6ABAES529ys0j_jetaJaI_bTdnxWdruJ6HO72iFOH2PvzRDTyd4-EHW8&_nc_zt=23&_nc_ht=scontent.fcai22-1.fna&_nc_gid=H3ltaxqEYf4caflr5lFUOg&oh=00_AYF0RgV4SRKOTV4taoGrKIXo8SKJhm4E2-nqB7qLKGs_UA&oe=67DEAFEA'
        ]
      },
    ],
    doctors: [
      {
        id: 1,
        title: 'د. وائل طه',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
        description: 'جراحة العظام والمفاصل ',
        rating: 4.9,
        phone: '01234567893',
        whatsapp: '01234567893',
        facebook: 'https://facebook.com/dr.ahmed',
        address: 'السيل أمام المستشفى العام',
        additionalImages: [
          'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
          'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
          'https://images.unsplash.com/photo-1516549655169-df83a0774514'
        ]
      },
      {
        id: 2,
        title: 'د. فاطمة فوزي محمد',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
        description: 'د. أخصائية طب الاطفال ',
        rating: 4.9,
        phone: '01234567893',
        whatsapp: '01234567893',
        facebook: 'https://facebook.com/dr.ahmed',
        address: 'شارع  الشواربي',
        additionalImages: [
          'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
          'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
          'https://images.unsplash.com/photo-1516549655169-df83a0774514'
        ]
      },
      {
        id: 3,
        title: 'د. أحمد محمد قناوي',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
        description: 'أخصائي نساء وتوليد',
        rating: 4.9,
        phone: '01234567893',
        whatsapp: '01234567893',
        facebook: 'https://facebook.com/dr.ahmed',
        address: 'ميدان الصالحين أمام الضراب. مواعيد العمل: من الساعة 2:30 مساءً. الإجازة: الجمعة. سعر الكشف: 250 جنيهًا.',
        additionalImages: [
          'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
          'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
          'https://images.unsplash.com/photo-1516549655169-df83a0774514'
        ]
      },
      {
        id: 4,
        title: 'د. إلهام صلاح',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
        description: 'أخصائية أمراض الجهاز الهضمي وعسر الهضم .',
        rating: 4.9,
        phone: '01234567893',
        whatsapp: '01234567893',
        facebook: 'https://facebook.com/dr.ahmed',
        address: 'عيادة القدس للجراحة والمناظير',
        additionalImages: [
          'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
          'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
          'https://images.unsplash.com/photo-1516549655169-df83a0774514'
        ]
      },

    ],
    supermarkets: [
      {
        id: 1,
        title: 'سوبر ماركت الراية',
        image: 'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/214511685_4305375989485819_7677263170784189311_n.png?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1zLxzEpCGdUQ7kNvgG0P02j&_nc_oc=Adkbktt1RyuIlhQCoKVnQbKU7u4weehM7ZeNvjcMYnHMtUa4xwHrt9dnqfi8Pooz5Dg&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=Nf4BLSBB0bM3UyiOOu1m_A&oh=00_AYHwiKyxNgVKn5Jz2tCNI-Xjrrbdl24iO_qu7NPS9F1oog&oe=67DF90DA',
        description: 'جميع احتياجاتك اليومية بأفضل الأسعار ',
        rating: 4.7,
        phone: '16508',
        whatsapp: '01003116508',
        facebook: 'https://facebook.com/ahrammarket',
        address: 'الكورنيش ',
        additionalImages: [
          'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/480754417_1055753629929603_4389219491046195422_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1XSqwuvzFoUQ7kNvgHJ_mrT&_nc_oc=AdmcCuqGW9mabGUMGWXzokPN1JtYjw6qBddOrYfvnb73C98KvUpLFYGAXUzhYRojn0s&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=w5Qw6A-IEiUjaiTdktPcUA&oh=00_AYFFv5JO81VpJIjoKY8OlEk1PbUi0p-jwd8U42QgQqc6Rg&oe=67DFA23D',
          'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/480470967_1055753716596261_8045863775973434245_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dri-RfXH2BgQ7kNvgEq4Ro3&_nc_oc=AdmnOqykG09dBjc8PpnAyONLToqf5_bTw9xED1Dp8o6Fs8ui3qBDPu-5LM_1W-4mVVM&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=mHn6xcgK2VyHuB_H6ApiGQ&oh=00_AYEcwX6n6_TkLoanf9JC5AMsJhcFfup2TJxFyDRDZ8j2EA&oe=67DF9F75',
          'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/480470967_1055753716596261_8045863775973434245_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dri-RfXH2BgQ7kNvgEq4Ro3&_nc_oc=AdmnOqykG09dBjc8PpnAyONLToqf5_bTw9xED1Dp8o6Fs8ui3qBDPu-5LM_1W-4mVVM&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=mHn6xcgK2VyHuB_H6ApiGQ&oh=00_AYEcwX6n6_TkLoanf9JC5AMsJhcFfup2TJxFyDRDZ8j2EA&oe=67DF9F75',
          'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/480205987_1055753739929592_5805886975762517108_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fpai54awweoQ7kNvgHmzImI&_nc_oc=AdlOxNhB4F4VxgnbCosCb2JR-zIHeLYGKj3aoW3jDKgm0GEk1b3hS5sl-RwdFDZSIio&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=AumUfAy8qj7ZnkZta8Yt4A&oh=00_AYH762VF2v11H7x2F7B_h0THVGWq7HzWPxIYYbwjuIP53g&oe=67DF9810'
        ]
      },
      {
        id: 2,
        title: 'سوبر ماركت كارفور',
        image: 'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/474740392_1357643625654360_6234472545853263462_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=wcXBIufFdqYQ7kNvgGJjobZ&_nc_oc=Adke6vN3UhfXuAhWdVBe0Zf3zWxGMMg8YDjT5JCxC-nlQX-Nd7_bS2kCR_XFCLiG-Z8&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=h0plPHXbVTfjVZ3wC0KWsQ&oh=00_AYHSiUWyL9EqxYFU7TlPXxQOTifAlBNVeq-NzNrUUmMqdQ&oe=67DFB75D',
        description: 'منتجات طازجة يومياً - عروض وخصومات أسبوعية',
        rating: 4.6,
        phone: '01234567895',
        whatsapp: '01234567895',
        facebook: 'https://www.facebook.com/profile.php?id=61572669683671',
        address: 'شارع الفنادق، أمام فندق أولد كتراكت.',
        additionalImages: [
          'https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-6/484987345_122118359786755656_5499866362221383394_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IQFrjhGG7_oQ7kNvgEIuO_i&_nc_oc=Adk1q0R9g8RyxaElFSomOUoDdgstWNEaNx-yTTVAZooGOC9unKpvvdYZgDYc65k-0Bg&_nc_zt=23&_nc_ht=scontent.fcai22-1.fna&_nc_gid=-O6-2VpRLImyEgKIgeFT4g&oh=00_AYEBXs52n_shcl9J3h6fglsT8u7fw53jO62v1_Z7RZh_UA&oe=67DF93A9',
          'https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-6/484987345_122118359786755656_5499866362221383394_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IQFrjhGG7_oQ7kNvgEIuO_i&_nc_oc=Adk1q0R9g8RyxaElFSomOUoDdgstWNEaNx-yTTVAZooGOC9unKpvvdYZgDYc65k-0Bg&_nc_zt=23&_nc_ht=scontent.fcai22-1.fna&_nc_gid=-O6-2VpRLImyEgKIgeFT4g&oh=00_AYEBXs52n_shcl9J3h6fglsT8u7fw53jO62v1_Z7RZh_UA&oe=67DF93A9',
          'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/484540418_122118359828755656_2626055256332231462_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ud7S_B_4b1kQ7kNvgGx9FM-&_nc_oc=AdkrQYD45dJHHGv8STxd9ic4w0aWno33Sweq7gyNI_wG5AlsTX0tPd7UIAqCkqscsbc&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=sRS_SrD4RqOpFNUl68Yaog&oh=00_AYHQBDs8XfRb_8tp-xTyN3v_NDbsSTsLgdiBiavlOkmJMg&oe=67DF8CAC',
          'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/483524026_122118359858755656_1351847815045396154_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kruX9-f6YioQ7kNvgHXak27&_nc_oc=AdmgyyXjer4F4S1ZDBkKHqkRnvU8qMtRyv7R29ZqnXEAsEJO9cO9gctLT3octOi3mfA&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=hZypDYTz6oj8ILTy34HOdw&oh=00_AYG8qfjNEkQaRfb-JK9dmLZBi77WD05VGqgXo6XQ4rMP8Q&oe=67DFB41E'
        ]
      },
      {
        id: 3,
        title: 'سوبر ماركت الصفا',
        image: 'https://scontent.fcai22-2.fna.fbcdn.net/v/t39.30808-6/448390111_887782533363686_5720791913193051219_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=COGW-8pWEy4Q7kNvgGxgjBY&_nc_oc=AdmcTYWn8Fj5wro4P-jLYvg80Fw4lQVnGIEM3bJ0b4Vf4SO7o3rwMUdyN0huLseq_cs&_nc_zt=23&_nc_ht=scontent.fcai22-2.fna&_nc_gid=MJI3qSfBiElv2jkOW5dn-g&oh=00_AYG0Ckjwkc3404ZJIFLHYmEkEymaOo29zTv4R1VMSAIVwA&oe=67DFACB6',
        description: 'منتجات محلية وعالمية - أسعار منافسة',
        rating: 4.5,
        phone: '01234567896',
        whatsapp: '01234567896',
        facebook: 'https://www.facebook.com/profile.php?id=100063958424261',
        address: 'الرضوان',
        additionalImages: [
          'https://images.unsplash.com/photo-1534723452862-4c874018d66d',
          'https://images.unsplash.com/photo-1578916171728-46686eac8d58',
          'https://images.unsplash.com/photo-1542838132-92c53300491e',
          'https://images.unsplash.com/photo-1580913428735-bd3c269d6a82'
        ]
      },
      {
        id: 4,
        title: 'سوبر ماركت الورداني',
        image: 'https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-6/473382809_1025874379554381_2056591525963589051_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=p6CCxyVJ7QEQ7kNvgGRtdKE&_nc_oc=Adkw5rdXAwDhs9z3Bw0ROl21lpUNTYHn6lROeeUYEuIlG6bSydmI1b4z5bBLcxT6BxM&_nc_zt=23&_nc_ht=scontent.fcai22-1.fna&_nc_gid=820x6hqQTqnSGMiQeIAs1Q&oh=00_AYF3Ilpxo1lA6qekri2F9QhsxDMumnUyWezCLk6ObgKuIw&oe=67DFA807',
        description: 'تشكيلة واسعة من المنتجات - خدمة 24 ساعة',
        rating: 4.4,
        phone: '01222970744',
        whatsapp: '01222970744',
        facebook: 'https://www.facebook.com/profile.php?id=100063954844223',
        address: 'أمام مبني المحافظة',
        additionalImages: [
          'https://images.unsplash.com/photo-1580913428735-bd3c269d6a82',
          'https://images.unsplash.com/photo-1578916171728-46686eac8d58',
          'https://images.unsplash.com/photo-1542838132-92c53300491e',
          'https://images.unsplash.com/photo-1534723452862-4c874018d66d'
        ]
      },
      {
        id: 5,
        title: 'سوبر ماركت خير زمان',
        image: 'https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-6/467965248_122101423034635794_8429150109415887933_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pRyUHGLJRkoQ7kNvgEkK67M&_nc_oc=AdnQF_v-0q-D3-LHphXQqMC5zwNe8GfqDjYUd1dPe3qub9zup3QjTXUA_M7_rs98_Jo&_nc_zt=23&_nc_ht=scontent.fcai22-1.fna&_nc_gid=f_Gdjld9GIrm-Z3UIhL4Ww&oh=00_AYEnseLQgI3yxa2DzfJ_PS_QoJPrLurRC-UeUd-uTG0Z9w&oe=67DFB07A',
        description: 'تشكيلة واسعة من المنتجات - خدمة 24 ساعة',
        rating: 4.4,
        phone: '01222970744',
        whatsapp: '01222970744',
        facebook: 'https://www.facebook.com/profile.php?id=61569073838882',
        address: 'كسر الحجر ، الاشارة ، مطلع الشهر العقارى امام المخبز البلدي',
        additionalImages: [
          'https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/480408403_122120135210635794_3410990010146169343_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NqPKJ6dt5SkQ7kNvgG78Num&_nc_oc=AdmJzqK-iz5pxl4b9SKEpP1tfDKYYTTNiD4q9PfvMwe0CM8gTVQ7joP4nd64sTUWkVM&_nc_zt=23&_nc_ht=scontent.fcai22-4.fna&_nc_gid=QwQw_3aQEDcHD2jX31bIFg&oh=00_AYHmBWUtWdBK9vvkK85D7McJ-_1xprp7z5yzK_qjN37vUA&oe=67DF9AED',
          'https://scontent.fcai22-4.fna.fbcdn.net/v/t39.30808-6/480408403_122120135210635794_3410990010146169343_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NqPKJ6dt5SkQ7kNvgG78Num&_nc_oc=AdmJzqK-iz5pxl4b9SKEpP1tfDKYYTTNiD4q9PfvMwe0CM8gTVQ7joP4nd64sTUWkVM&_nc_zt=23&_nc_ht=scontent.fcai22-4.fna&_nc_gid=QwQw_3aQEDcHD2jX31bIFg&oh=00_AYHmBWUtWdBK9vvkK85D7McJ-_1xprp7z5yzK_qjN37vUA&oe=67DF9AED',
          'https://images.unsplash.com/photo-1542838132-92c53300491e',
          'https://images.unsplash.com/photo-1534723452862-4c874018d66d'
        ]
      }
    ]


  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setMainImage(item.image);
    setShowModal(true);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < Math.floor(rating) ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  const renderServiceCard = (item) => (
    <div key={item.id} className="card service-card">
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <button
          className="btn btn-primary"
          onClick={() => handleItemClick(item)}
        >
          عرض التفاصيل
        </button>
      </div>
    </div>
  );

  return (
    <>
      <NavBar />
      <div className="services-container" dir="rtl">
        <section className="service-section mb-5">
          <h2 className="section-title" >المطاعم والكافيهات</h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {services.restaurants.map(item => renderServiceCard(item))}
          </Carousel>
        </section>

        <section className="service-section mb-5">
          <h2 className="section-title">الصيدليات</h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {services.pharmacies.map(item => renderServiceCard(item))}
          </Carousel>
        </section>

        <section className="service-section mb-5">
          <h2 className="section-title">الأطباء</h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {services.doctors.map(item => renderServiceCard(item))}
          </Carousel>
        </section>


        <section className="service-section mb-5">
          <h2 className="section-title">السوبر ماركت</h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            partialVisible={true}
          >
            {services.supermarkets.map(item => renderServiceCard(item))}
          </Carousel>
        </section>

        {/* Modal */}
        {showModal && selectedItem && (
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" style={{ marginRight: "50px" }}>{selectedItem.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    style={{ marginLeft: "20px" }}
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="main-image-container">
                        <img
                          src={mainImage}
                          alt={selectedItem.title}
                          className="main-image"
                        />
                      </div>
                      <div className="thumbnail-container">
                        {selectedItem.additionalImages.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`${selectedItem.title} ${index + 1}`}
                            className="thumbnail-image"
                            onClick={() => setMainImage(img)}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="place-details">
                        <h4>{selectedItem.title}</h4>
                        <p className="description">{selectedItem.description}</p>

                        <div className="rating mb-3">
                          <div className="stars">
                            {renderStars(selectedItem.rating)}
                          </div>
                          <span className="rating-number">
                            {selectedItem.rating} / 5
                          </span>
                        </div>

                        <div className="contact-info">
                          <div className="contact-item">
                            <FaPhone className="icon" />
                            <span>{selectedItem.phone}</span>
                          </div>
                          <div className="contact-item">
                            <FaWhatsapp className="icon" />
                            <a
                              href={`https://wa.me/${selectedItem.whatsapp}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              واتساب
                            </a>
                          </div>
                          <div className="contact-item">
                            <FaFacebook className="icon" />
                            <a
                              href={selectedItem.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              فيسبوك
                            </a>
                          </div>
                          <div className="contact-item">
                            <FaMapMarkerAlt className="icon" />
                            <span>{selectedItem.address}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Backdrop */}
        {showModal && (
          <div
            className="modal-backdrop show"
            onClick={() => setShowModal(false)}
          ></div>
        )}

      </div>
      <Footer />

    </>
  );
};

export default Services;
