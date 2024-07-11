import React, { useState } from 'react';
import './ServicePage.css';
import skinCarePic1 from '../assets/skincare1.jpg';
import servicepage2 from '../assets/servicepage2.jpg';
import servicepage3 from '../assets/servicepage1.jpg';
import servicepage4 from '../assets/servicepage4.jpg';
import servicepage5 from '../assets/servicepage5.jpg';
import servicepage6 from '../assets/servicepage6.jpg';
import servicepage7 from '../assets/servicepage7.jpg';
import servicepage8 from '../assets/servicepage8.jpg';
import servicepage9 from '../assets/servicepage9.jpg';
import servicepage10 from '../assets/servicepage10.jpg';
import servicepage11 from '../assets/servicepage11.jpg';
import servicepage12 from '../assets/servicepage12.jpg';
import servicepage13 from '../assets/servicepage13.jpg';
import servicepage14 from '../assets/servicepage14.jpg';
import servicepage15 from '../assets/servicepage15.jpg';
import servicepage16 from '../assets/servicepage16.jpg';
import servicepage17 from '../assets/servicepage17.jpg';
import servicepage18 from '../assets/servicepage18.jpg';
import servicepage19 from '../assets/servicepage19.jpg';
import servicepage20 from '../assets/servicepage20.jpg';
import pediatricSkinPic1 from '../assets/pediatricskin1.jpg';
import oldAgeSkinPic1 from '../assets/oldageskin1.jpg';

const ServicePage = () => {
    const [selectedTopic, setSelectedTopic] = useState('');
    const [selectedSubTopic, setSelectedSubTopic] = useState('');

    const topics = {
        'A) ME & MY SKIN CARE': [
            'Acne & acne scars',
            'Melasma',
            'Pigmentation and face on body',
            'Freckles',
            'Open pores / large pores',
            'Skin tags',
            'Stretch marks'
        ],
        'B) ME & MY HAIR ': [
            'Hair fall / Hair loss',
            'Premature greying of hair',
            'Dandruff'
        ],
        'C) SKIN REJUVINATION ': [
            'Chemical peel',
            'Aquafacial /Hydrafacial',
            'Photo facial',
            'Carbon facial',
            'RF toning',
            'Laser toning',
            'Dermaroller',
            'MnRF',
            'Mesotherapy',
            'PRP & GFC'

        ],
        'D)  BE YOUTHFUL / ANTIAGING': [
            'Anti wrinkle injections',
            'Dermafillers',
            'PRP WITH GFC',
            ' MnRF'

        ],
        'E) COMMON SKIN PROBLEMS ': [
            'Vitiligo',
            'Psocrisis',
            'Fungi infections',
            'Bacterial infections',
            'Eczema',
            'Moles and warts',
        ],
        'F) PEADIATRIC SKIN PROBLEMS': [
            'Atopic Dermatitis',
            'Craddle Cap',
            'Recurrent skin infections',
            'Pityriasis Alba',
            'Premature greying of hair',

        ],
        'G) OLD AGE RELATED SKIN PROBLEM    ': [
            'Dryners / xeerosis',
            'unexplained itching all over body',
            'Red patches on arm',
            'Senile comedones',

        ]
    };

    const getRandomContent = (subTopic) => {
        const randomContent = {
            'Acne & acne scars': 'Acne is a common skin issue that affects individuals of all ages, not just teenagers. While hormonal changes are a primary cause, factors like medications and environmental elements such as dust can also contribute. At SK Durmiqe Clinic, our dermatologists focus on identifying the root causes of acne and providing comprehensive treatments for long-lasting skin health. Acne scars can be a lasting reminder of past breakouts, but they are treatable. At SK Durmiqe Clinic, we offer specialized treatments for various types of acne scars, ensuring effective and safe results. Proper acne treatment can significantly reduce the risk of scarring, and our advanced techniques help restore your skin’s smoothness and clarity.',
            'Melasma': 'Melasma is a skin condition characterized by brown patches that primarily appear on the cheeks but can also affect the forehead, nose, and chin. While it is more common in women, men can experience it too. This condition can be distressing and often leads to a loss of confidence. Although melasma has a high recurrence rate, advanced treatments and proper follow-up can significantly reduce these chances, bringing satisfaction and happiness to patients. : Acne scars can be a lasting reminder of past breakouts, but they are treatable. At SK Durmiqe Clinic, we offer specialized treatments for various types of acne scars, ensuring effective and safe results. Proper acne treatment can significantly reduce the risk of scarring, and our advanced techniques help restore your skin’s smoothness and clarity.',
            'Pigmentation and face on body': 'Various diseases can cause pigmented patches, either directly or as a result of treatment. At SK Dermiqe Clinic, we offer comprehensive treatments to effectively manage and reduce pigmentation.Pigmentation issues, resulting in dark patches on the face and body, can arise from various conditions or as side effects of treatments. At SK Dermiqe Clinic, we specialize in offering comprehensive and effective treatments to manage and reduce pigmentation. Our expert team utilizes advanced techniques and personalized care plans to address pigmentation concerns, helping you achieve clearer, more even-toned skin.',
            'Freckles': 'Freckles are small, flat spots that typically appear on sun-exposed areas of the face and body. They can range in color from light to dark brown and often become more noticeable during the summer months due to increased sun exposure. These spots are more prevalent in individuals with lighter skin tones and blond hair, although they can occur in people of all skin types. Freckles are generally harmless and result from an increase in melanin production triggered by ultraviolet (UV) radiation from the sun. Despite their benign nature, some individuals may seek to reduce the appearance of freckles for cosmetic reasons. Important to note that freckles are a natural skin feature and not a sign of any underlying health issue. However, protecting the skin from excessive sun exposure with sunscreen and protective clothing can help prevent the formation of new freckles and other sun-related skin damage.',
            'Open pores / large pores': 'Open pores are a prevalent concern among both teenagers and adults, often driven by various factors such as excessive oil production, reduced skin elasticity, increased hair thickness, sun damage, aging, and genetics. These enlarged pores are particularly noticeable on the nose and cheeks, where the skin tends to produce more oil. Hormonal changes, especially during puberty and adulthood, can significantly impact the activity of sebaceous glands, causing them to produce an excess of sebum. This overproduction of oil can lead to the enlargement of pores as the skin struggles to accommodate the increased output. Additionally, as the skin ages and loses its natural elasticity, pores can appear more prominent. ',
            'Skin tags': 'Skin tags are small, soft, skin-colored growths that hang off the skin and resemble warts. These benign growths are composed of loose collagen fibers and blood vessels surrounded by skin. While harmless and non-cancerous, skin tags can be a cosmetic concern for some individuals due to their appearance. They can appear anywhere on the body but are most commonly found in areas where the skin frequently rubs against itself or clothing, such as the neck, armpits, groin, under the breasts, and eyelids. The friction in these areas is believed to contribute to the development of skin tags. Although the exact cause is not entirely understood, factors such as age, obesity, diabetes, and pregnancy are associated with a higher incidence of skin tags. They are also more common in individuals with a family history of skin tags, suggesting a genetic predisposition. ',
            'Stretch marks': 'Stretch marks are long, narrow streaks, stripes, or lines that develop on the skin, typically occurring when the skin is suddenly stretched beyond its capacity. These marks, also known as striae, are extremely common and can appear in various colors, ranging from pink and red to purple or even dark brown, depending on skin tone and the age of the marks. The sudden stretching that causes stretch marks often results from rapid weight gain or loss, growth spurts during puberty, pregnancy, or muscle building. When the skin stretches quickly, the collagen and elastin fibers in the dermis can tear, leading to the formation of these distinctive lines. Various treatments are available to improve the appearance of stretch marks, including topical creams, laser therapy, and microdermabrasion, which can help stimulate collagen production and promote skin healing.',
            'Hair fall / Hair loss': 'Hair fall and hair loss from the scalp are prevalent issues affecting both men and women today. Various factors contribute to hair loss, including genetics, nutritional deficiencies, hair styling practices, and smoking. Fortunately, with proper diagnosis and treatment, 80-90% of individuals experience significant improvement',
            'Premature greying of hair': 'Premature greying of hair is a common concern among individuals of all ages. While genetics play a significant role, other factors such as stress, smoking, and nutritional deficiencies can also contribute. At SK Dermiqe Clinic, we offer comprehensive treatments to address premature greying and restore hair health',
            'Dandruff': 'Dandruff is a common scalp condition that causes white or grey flakes of skin to appear on the scalp and in the hair. It can be caused by various factors, including dry skin, seborrheic dermatitis, sensitivity to hair products, and fungal infections. While dandruff is not contagious or serious, it can be embarrassing and difficult to manage',
            'Chemical peel': 'Derma peel, also known as chemexfoliation or chemical peel, is a transformative skincare treatment designed to remove dead or damaged layers of skin. By using specialized chemical solutions, this procedure reveals the more youthful, smoother skin underneath. The result is a brighter complexion with fewer lines and wrinkles, a more even skin tone, and a radiant appearance.',
            'Aquafacial /Hydrafacial': 'Aquafacial /Hydrafacial is a non-invasive, multi-step treatment that combines the benefits of hydradermabrasion, a chemical peel, automated painless extractions, and a special delivery of antioxidants, hyaluronic acid, and peptides. This treatment is suitable for all skin types and addresses a variety of skin concerns, including fine lines and wrinkles, elasticity and firmness, skin tone evenness and vibrancy, skin texture, hyperpigmentation, oily and congested skin, enlarged pores, and advanced signs of aging.',
            'Photo facial': 'Photo facial, also known as intense pulsed light (IPL) therapy, is a non-invasive treatment that uses high-intensity pulses of light to improve the appearance of the skin. This procedure can help reduce the signs of aging, such as fine lines and wrinkles, sun damage, age spots, and redness caused by broken capillaries. Photo facial is safe, effective, and requires minimal downtime, making it an excellent option for individuals looking to rejuvenate their skin',
            'Carbon facial': 'Carbon facial is a non-invasive treatment that uses a carbon paste to exfoliate the skin and remove dead skin cells, dirt, and impurities. This procedure is suitable for all skin types and can help improve the appearance of the skin by reducing acne, blackheads, and enlarged pores. Carbon facial is safe, effective, and requires minimal downtime, making it an excellent option for individuals looking to achieve smoother, clearer skin',
            'RF toning': 'RF toning is a non-invasive treatment that uses radiofrequency energy to tighten and tone the skin. This procedure can help reduce the appearance of fine lines and wrinkles, improve skin elasticity and firmness, and contour the face and body. RF toning is safe, effective, and requires minimal downtime, making it an excellent option for individuals looking to achieve a more youthful appearance',
            'Laser toning': 'Laser toning is a non-invasive treatment that uses high-intensity pulses of light to improve the appearance of the skin. This procedure can help reduce the signs of aging, such as fine lines and wrinkles, sun damage, age spots, and redness caused by broken capillaries. Laser toning is safe, effective, and requires minimal downtime, making it an excellent option for individuals looking to rejuvenate their skin',
            'Dermaroller': 'Dermaroller is a minimally invasive treatment that uses a roller device covered in tiny needles to create micro-injuries in the skin. This process stimulates the body’s natural healing response, promoting collagen and elastin production. Dermaroller can help improve the appearance of acne scars, fine lines and wrinkles, hyperpigmentation, and stretch marks. This treatment is safe, effective, and requires minimal downtime, making it an excellent option for individuals looking to rejuvenate their skin',
            'MnRF': 'Microneedling Radio Frequency (MnRF) is an advanced skin treatment that combines the benefits of both microneedling and radiofrequency technology. This innovative procedure has gained popularity in recent years for its ability to improve skin texture, tone, and overall appearance. By delivering two powerful treatments simultaneously, MnRF produces truly magical results.',
            'Mesotherapy': 'Mesotherapy is a minimally invasive treatment that involves injecting a customized cocktail of vitamins, minerals, amino acids, and other nutrients into the skin. This procedure can help improve the appearance of the skin by promoting collagen and elastin production, reducing fine lines and wrinkles, and hydrating and rejuvenating the skin. Mesotherapy is safe, effective, and requires minimal downtime, making it an excellent option for individuals looking to achieve healthier, more radiant skin',
            'PRP & GFC': 'Content for Cradle Cap. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Anti wrinkle injections': 'Content for Anti wrinkle injections. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Dermafillers': 'Content for Dermafillers. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'PRP WITH GFC': 'Content for PRP WITH GFC. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            ' MnRF': 'Content for MnRF. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Vitiligo': 'Content for Vitiligo. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Psocrisis': 'Content for Psocrisis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Fungi infections': 'Content for Fungi infections. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Bacterial infections': 'Content for Bacterial infections. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Eczema': 'Content for Eczema. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Moles and warts': 'Content for Moles and warts. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Atopic Dermatitis': 'Content for Atopic Dermatitis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Craddle Cap': 'Content for Craddle Cap. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Recurrent skin infections': 'Content for Recurrent skin infections. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Pityriasis Alba': 'Content for Pityriasis Alba. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Premature greying of hairs': 'Content for Premature greying of hair. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Dryners / xeerosis': 'Content for Dryners / xeerosis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'unexplained itching all over body': 'Content for unexplained itching all over body. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Red patches on arm': 'Content for Red patches on arm. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            'Senile comedones': 'Content for Senile comedones. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'


        };

        return randomContent[subTopic] || 'Default content;Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    };

    const getRandomImage = (subTopic) => {
        const imageMap = {
            'Acne and acne scars': skinCarePic1,
            'Melasma': servicepage2,
            'Pigmentation and face on body': servicepage3,
            'Freckles': servicepage4,
            'Open pores / large pores': servicepage5,
            'Skin tags': servicepage6,
            'Stretch marks': servicepage7,
            'Hair fall / Hair loss': servicepage8,
            'Premature greying of hair': servicepage9,
            'Dandruff': servicepage10,
            'Chemical peel': servicepage11,
            'Aquafacial /Hydrafacial': servicepage12,
            'Photo facial': servicepage13,
            'Carbon facial': servicepage14,
            'RF toning': servicepage15,
            'Laser toning': servicepage16,
            'Dermaroller': servicepage17,
            'MnRF': servicepage18,
            'Mesotherapy': servicepage19,
            'PRP & GFC': servicepage20,
            'Anti wrinkle injections': servicepage2,
            'Dermafillers': servicepage3,
            'PRP WITH GFC': servicepage4,
            ' MnRF': servicepage5,
            'Vitiligo': servicepage6,
            'Psocrisis': servicepage7,
            'Fungi infections': servicepage8,
            'Bacterial infections': servicepage9,
            'Eczema': servicepage10,
            'Moles and warts': servicepage11,
            'Atopic Dermatitis': pediatricSkinPic1,
            'Craddle Cap': pediatricSkinPic1,
            'Recurrent skin infections': pediatricSkinPic1,
            'Pityriasis Alba': pediatricSkinPic1,
            'Premature greying of hairs': pediatricSkinPic1,
            'Dryners / xeerosis': oldAgeSkinPic1,
            'unexplained itching all over body': oldAgeSkinPic1,
            'Red patches on arm': oldAgeSkinPic1,
            'Senile comedones': oldAgeSkinPic1
        };
        const defaultImage = skinCarePic1;

        return imageMap[subTopic] || defaultImage;
    };

    const handleTopicClick = (topic) => {
        setSelectedTopic(topic);
        setSelectedSubTopic('');
    };

    const handleSubTopicClick = (subTopic) => {
        setSelectedSubTopic(subTopic);
    };

    return (
        <div className="service-page">
            <div className="banner">
                <img src={skinCarePic1} alt="Banner Background" className="banner-image" />
                <div className="banner-text">
                    <h1>Our Services</h1>
                </div>
            </div>
            <div className="service-container">
                <div className="service-menu">
                    {Object.keys(topics).map((topic, index) => (
                        <div key={index} className={`service-topic ${selectedTopic === topic ? 'selected' : ''}`}>
                            <div className="topic-title" onClick={() => handleTopicClick(topic)}>
                                {topic}
                            </div>
                            {selectedTopic === topic && (
                                <div className="service-sub-topic">
                                    {topics[selectedTopic].map((subTopic, subIndex) => (
                                        <div key={subIndex} onClick={() => handleSubTopicClick(subTopic)}>
                                            {subTopic}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="service-main-content">
                    {selectedSubTopic && (
                        <>
                            <div className="heading">{selectedSubTopic}</div>

                            <div className="headingclass">
                                <img src={getRandomImage(selectedSubTopic)} alt="Example" className="image" />
                            </div>
                            <div className="headingcontent">{getRandomContent(selectedSubTopic)}</div>
                        </>
                    )}
                </div>
            </div>
            <div className="service-content-details"></div>
        </div>
    );
};

export default ServicePage;
