import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

const Achievements = () => {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto">
      {/* Title Section */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6  text-red-500">
        उल्लेखनीय कार्य एवं उपलब्धियाँ
      </h1>

      {/* Achievements List */}
      <div className="text-gray-800 space-y-6">
        {[
          {
            title: "प्रधानमंत्री श्री नरेन्द्र मोदी की बीकानेर यात्रा में सक्रिय सहभागिता : ",
            content: "दिनांक 6.7.2023 को माननीय प्रधानमंत्री श्री नरेन्द्र मोदी के बीकानेर आगमन के अवसर पर संस्थान द्वारा सक्रिय सहभागिता निभाई गई। इस अवसर पर संस्थान द्वारा उपस्थित जनसमुदाय को जन शिक्षण संस्थान के कौशल विकास कार्यक्रमों की जानकारी दी गयी।"
          },
          {
            title: "सचिव श्री अतुल कुमार तिवारी, सचिव, कौशल विकास एवं उद्यमिता मंत्रालय, भारत सरकार द्वारा संस्थान के कार्यों का अवलोकन: ",
            content: "भारत सरकार के कौशल विकास और उद्यमिता मंत्रालय के सचिव श्री अतुल कुमार तिवारी द्वारा 04 जून, 2023 को संस्थान के कार्यों का अवलोकन किया गया। इस अवसर पर सचिव महोदय द्वारा जी 20 जनसहभागिता कार्यक्रम के तहत रंगोली प्रतियोगिता एवं वोकल फॉर लोकल थीम के साथ तैयार उत्पादों की प्रदर्शनी का अवलोकन किया गया था। साथ ही श्री अतुल कुमार तिवारी ने संस्थान के पदाधिकारियों, स्टाफ साथियों एवं सफलता की कहानियों के साथ संवाद भी स्थापित कर कौशल विकास एवं उद्यमिता विकास की राह में उल्लेखनीय कार्य करने के लिए महत्त्वपूर्ण मार्गदर्शन करते हुए उत्साहवर्द्धन भी किया।"
          },
          {
            title: "प्रधानमंत्री विश्वकर्मा योजना के तहत जिले का पहला कौशल विकास केन्द्र प्रारंभ : ",
            content: "संस्थान द्वारा प्रधानमंत्री विश्वकर्मा योजना के तहत 13 मार्च, 2024 को जिले का पहला पी. एम. विश्वकर्मा कौशल विकास केन्द्र शुरू किया गया। इस कौशल विकास केन्द्र का शुभारंभ मुख्य अतिथि श्रीमती मंजु नैण गोदारा, महाप्रबंधक, जिला उद्योग एवं वाणिज्य केन्द्र, बीकानेर और विशिष्ट अतिथि श्री यदुनारायण व्यास, लीड बैंक अधिकारी द्वारा किया गया। संस्थान द्वारा पी एम विश्वकर्मा योजना के तहत 8 मई, 2024 तक 105 लोगों को प्रशिक्षित किया जा चुका है।"
          },
          {
            title: "मंत्रालय द्वारा कार्यप्रगति की समीक्षा एवं नियोजन बैठक में संस्थान का दूसरा स्थान : ",
            content: "निदेशालय, जन शिक्षण संस्थान निदेशालय, नई दिल्ली द्वारा दिनांक 06 दिसंबर, 2023 को कौशल भवन नई दिल्ली में आयोजित कार्य प्रगति की समीक्षा एवं नियोजन बैठक-2023-24 वर्ष की समेकित कार्यप्रगति में जन शिक्षण संस्थान, बीकानेर ने दूसरा स्थान प्राप्त किया है।"
          },
          {
            title: "लाईवलीहुड सेल का प्रभावी संचालन : ",
            content: "लाईवलीहुड सेल के माध्यम से संस्थान प्रशिक्षणार्थियों को स्वरोजगार स्थापित करने के लिए विभिन्न ऋण योजनाओं जैसे प्रधानमंत्री मुद्रा योजना, मुख्यमंत्री लघु उद्योग योजना एवं स्वयं सहायता समूह ऋण योजनाओं आदि के बारे में जानकारी प्रदान कर रहा है। लाईवलीहुड सेल के माध्यम से जिला उद्योग एवं वाणिज्य केन्द्र की विश्वकर्मा योजनान्तर्गत स्वरोजगार स्थापना हेतु टूलकिट हेतु 46 प्रशिक्षणार्थियों का नामांकन किया गया। लाईवलीहुड सेल के माध्यम से इस वर्ष 80 आर्टिजन कार्ड बनाये गए।"
          },
          {
            title: "राष्ट्र स्तरीय कौशल दीक्षांत समारोह में सहभागिता : ",
            content: "कौशल विकास एवं उद्यमिता मंत्रालय द्वारा 12 अक्टूबर 2023 को नई दिल्ली में आयोजित राष्ट्र स्तरीय कौशल दीक्षांत समारोह में देश के चुनिंदा 10 सफल प्रशिक्षणार्थियों में से जन शिक्षण संस्थान, बीकानेर के सफल प्रशिक्षणार्थी श्री हकीकत खान को माननीय कौशल विकास और उद्यमिता मंत्री धर्मेंद्र प्रधान, राज्यमंत्री श्री राजीव चन्द्रशेखर द्वारा सम्मानित किया गया। इसके साथ ही संस्थान द्वारा नोखा ब्लॉक में आयोजित कौशल दीक्षांत समारोह का राष्ट्रीय कौशल दीक्षांत समारोह में लाईव प्रसारण भी किया गया।"
          },
          {
            title: "संस्थान के कौशल विकास कार्यों पर पीएच. डी. : ",
            content: "गृह विज्ञान महाविद्यालय, बीकानेर की शोधार्थी तरुणा शर्मा द्वारा जन शिक्षण संस्थान से प्रशिक्षित महिलाओं द्वारा आत्मनिर्भरता की राह में स्थापित स्वरोजगार के विषय पर पीएच. डी. की गई है।"
          },
          {
            title: "ग्रामीण क्षेत्रों में संस्थान के विस्तार केन्द्रों की स्थापना : ",
            content: "जन शिक्षण संस्थान, बीकानेर द्वारा ग्रामीण क्षेत्रों में मजबूत जुड़ाव के लिए गाँव महाजन, जामसर और श्रीकोलायत में तीन विस्तार केन्द्र स्थापित किए गए हैं।"
          },
          {
            title: "संकल्प परियोजना के तहत मॉडल जन शिक्षण संस्थानों में चयन : ",
            content: "मंत्रालय द्वारा देश के विभिन्न जन शिक्षण संस्थानों में से चुनिंदा प्रथम 30 जन शिक्षण संस्थानों में से मॉडल जेएसएस के रूप में जन शिक्षण संस्थान, बीकानेर में व्यूटी एंड वेलनेस ट्रेड में मॉडल लेब की स्थापना की गई है। इस लैब के माध्यम से प्रशिक्षणार्थियों को आधुनिक उपकरणों पर काम सीखने का अवसर मिल रहा है।"
          },
          {
            title: "स्वयं सहायता समूहों का प्रभावी संचालन : ",
            content: "संस्थान द्वारा अब तक कुल 30 स्वयं सहायता समूहों का गठन किया जा चुका है। जिनमें से 18 स्वयं सहायता समूहों का पंजीयन दीनदयाल अंत्योदय योजना राष्ट्रीय शहरी आजीविका मिशन पोर्टल पर हो चुका है तथा 15 समूहों को 10-10 हजार रुपये का अनुदान भी प्राप्त हो चुका है। इनमें से 6 स्वयं सहायता समूहों को 11.50 लाख रुपये का ऋण भी उपलब्ध कराया गया है। इसके साथ ही स्वयं सहायता समूहों के राज्य स्तरीय प्रशिक्षण में संस्थान के स्वयं सहायता समूह के सदस्यों की भी सहभागिता रही।"
          },
          {
            title: "",
            content: "सोशल मीडिया एवं सूचना तकनीकी के विभिन्न प्लेटफॉर्म पर व्यापक प्रचार-प्रसार"
          },
          {
            title: "",
            content: "व्यावसायिक कौशल के साथ जीवन कौशल शिक्षा (LEE) पर विशेष कार्य"
          },
          {
            title: "",
            content: "जिला प्रशासन के सुझाव पर बालगृह एवं बालिकागृह के आवासित किशोर-किशोरियों को कौशल प्रशिक्षण से जोड़ा गया"
          },
          {
            title: "",
            content: "राज्यपाल और सांसद द्वारा चयनित आदर्श गावों में कौशल विकास कार्यक्रमों का प्रभावी संचालन"
          },
          {
            title: "",
            content: "उपक्षेत्रीय रोजगार कार्यालय एवं जिला उद्योग एवं वाणिज्य केन्द्र द्वारा आयोजित रोजगार मेलों में संस्थान द्वारा बेरोजगारों की आत्मनिर्भरता के लिए निरंतर प्रयास"
          },
          {
            title: "",
            content: "राज्य सरकार द्वारा संचालित विकसित भारत यात्रा 2023 में नियमित सहभागिता "
          },
          {
            title:"",
            content:"पीएमकेवीवाई योजना की स्किल हब परियोजना से 110 महिलाओं को प्रशिक्षण दिया गया।"
          },
          {
            title: "",
            content: "जिला स्तरीय विकास विभागों एवं स्वयं सेवी संगठनों के साथ निरन्तर मजबूत समन्वयन।"
          }
        ].map((achievement, index) => (
          <p key={index}>
            <FaCaretRight className="inline text-red-500" />
            <strong className="text-red-500">{achievement.title}</strong> {achievement.content}
          </p>
        ))}

        <div className="text-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Share this post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
