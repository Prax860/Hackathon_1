let selectedLanguage = '';

async function processInput(input) {
    input = input.toLowerCase();
    let response;

    if (selectedLanguage === 'English') {
        // Chennai and general inquiries
        if ((input.includes("hi") && input.includes("chennai")) || (input.includes("chennai"))) {
        response = "Chennai is full of fascinating spots that blend history, adventure, and scenic beauty. Here are five cool places to explore in the city:\n1. Mahabalipuram\n2. Kanchipuram\n3. Fort St. George, Chennai\n4. Pondicherry (Puducherry)\n5. Thanjavur (Tanjore)";
    } else if (input.includes("mahabalipuram")) {
            response = "Mahabalipuram is a historic town along the southeastern coast of India in the state of Tamil Nadu. Known for its magnificent ancient temples and rock carvings, it's a UNESCO World Heritage Site. Here are places to visit in Mahabalipuram:\n1. Shore Temple\n2. Pancha Rathas\n3. Arjuna’s Penance\n4. Descent of the Ganges\n5. Krishna’s Butterball";
        } else if (input.includes("shore temple")) {
            response = "Shore Temple:\nSeaside Location: Situated right on the shore of the Bay of Bengal, the temple offers stunning views of the ocean.\nPallava Architecture: Built during the reign of the Pallava king Narasimhavarman II in the 8th century, showcasing Dravidian style with detailed carvings.\nDual Shrines: Dedicated to both Shiva and Vishnu, making it unique.\nUNESCO World Heritage Site: Recognized for its historical and architectural significance.\nBas-Relief Carvings: Features intricate carvings of deities, mythological scenes, and animals.";
        } else if (input.includes("pancha rathas")) {
            response = "Pancha Rathas:\nMonolithic Structures: Each of the five temples is carved out of a single rock.\nDifferent Architectural Styles: Unique designs reflect various forms of Dravidian architecture.\nNamed After Pandavas: Though not directly related, these are named after the Pandava brothers from the Mahabharata.\nIntricate Sculptures: Detailed sculptures of animals, gods, and goddesses add to their appeal.\nSymbol of Rock-Cut Architecture: Important examples of monolithic rock-cut architecture.";
        } else if (input.includes("arjuna's penance")) {
            response = "Arjuna's Penance:\nMassive Rock Relief: One of the largest rock reliefs in the world, depicting scenes from Hindu mythology.\nDepicts Mythological Scenes: Including Arjuna’s meditation to seek Shiva’s blessings.\nNatural and Divine Themes: Carving includes celestial beings, sages, and animals.\nSymbolism of Ganges Descent: Represents the story of the descent of the holy river Ganges to Earth.\nArtistic Detail: Displays finesse and creativity of Pallava-era sculptors.";
        } else if (input.includes("descent of the ganges")) {
            response = "Descent of the Ganges:\nDivine Symbolism: Represents the legend of Bhagiratha’s penance to bring the Ganges River down.\nNatural Rock Carvings: Lifelike depiction of flowing water using natural rock shapes.\nPresence of Animals: Lifelike elephants and other animals add grandeur to the scene.\nInterconnected with Arjuna’s Penance: Forms part of the larger narrative on the rock.\nArchitectural Masterpiece: Highlights devotion, divinity, and nature in a single frame.";
        } else if (input.includes("krishna's butterball")) {
            response = "Krishna's Butterball:\nNatural Wonder: A massive granite boulder, around 250 tons, perched on a slope.\nMythological Significance: Local legends say it represents Krishna's playful nature.\nUnmoved by Kings: Various rulers tried to move it, but it remained immovable.\nPopular Photo Spot: Tourists enjoy posing with it, as it appears to defy gravity.\nNatural Erosion Formation: Believed to be naturally formed through erosion.";
        }  else if (input.includes("kanchipuram")) {
            response = "Kanchipuram is known as the 'City of Thousand Temples' and is famous for its temples and silk sarees. Some places to visit:\n1. Kamakshi Amman Temple\n2. Ekambareswarar Temple\n3. Varadharaja Perumal Temple\n4. Kailasanathar Temple\n5. Kanchi Kudil";
        } else if (input.includes("kamakshi amman temple")) {
            response = "The Kamakshi Amman Temple, located in Kanchipuram, is dedicated to Goddess Kamakshi. It is renowned for its splendid architecture and spiritual significance. Key points include:\n- A prominent pilgrimage site for followers of the Shakti tradition.\n- Famous for its grand gopuram and intricate sculptures.";
        } else if (input.includes("ekambareswarar temple")) {
            response = "The Ekambareswarar Temple, one of the largest and oldest temples in South India, is dedicated to Lord Shiva. It is part of the Pancha Bhoota Stalams. Some noteworthy features are:\n- Representing the Earth element, this temple has impressive gopurams.\n- A revered mango tree, believed to be sacred, is located within the temple premises.";
        } else if (input.includes("varadharaja perumal temple")) {
            response = "The Varadharaja Perumal Temple in Kanchipuram is a significant Vaishnavite shrine. It is renowned for its architectural grandeur and rich history. Notable points include:\n- It is one of the 108 Divya Desams.\n- The temple is famous for its annual festivals, especially during Vaikunta Ekadasi.";
        } else if (input.includes("kailasanathar temple")) {
            response = "The Kailasanathar Temple, dating back to the 8th century, is one of Kanchipuram’s oldest temples dedicated to Lord Shiva. Highlights include:\n- Known for its exquisite Dravidian-style architecture and rock-cut sculptures.\n- It provides a serene atmosphere for devotees and tourists alike.";
        } else if (input.includes("kanchi kudil")) {
            response = "Kanchi Kudil is a heritage center that offers a glimpse into the traditional lifestyle of Kanchipuram. It displays a variety of local handicrafts and artifacts. Here’s what you can expect:\n- Insights into the rich cultural heritage of Kanchipuram.\n- A traditional house that represents the lifestyle of the region’s past.";
        } else if (input.includes("fort st. george")) {
            response = "Fort St. George in Chennai is a historical landmark built by the British East India Company. It includes several notable attractions such as:\n1. Fort Museum\n2. St. Mary’s Church\n3. Wellesley House\n4. Flag Staff\n5. Clive House";
        } else if (input.includes("fort museum")) {
            response = "Fort Museum:\nLocated within the premises of Fort St. George, the Fort Museum displays various artifacts from the British colonial era.\nArtifacts on Display: It houses a range of items such as portraits of British officials, weapons, uniforms, and manuscripts.\nHistorical Insights: Offers an excellent overview of the British East India Company's influence in the region.\nSignificance: Provides a deep dive into the history and architecture of Fort St. George and its role in the formation of modern Chennai.";
        } else if (input.includes("clive house")) {
            response = "Clive House:\nNamed after Robert Clive, a key figure in the British East India Company, Clive House is one of the oldest colonial buildings in Chennai.\nHistorical Significance: It is linked to the early days of British rule in India.\nArchitectural Beauty: The building reflects classic British colonial architecture.\nCurrent Use: It now houses the Tamil Nadu Legislative Assembly.\nFamous Landmark: A significant piece of history for anyone interested in the British colonial period.";
        } else if (input.includes("wellesley house")) {
            response = "Wellesley House:\nNamed after the British Governor of Madras, the house is an important example of colonial-era architecture.\nHistorical Role: It once served as the residence of the British Governor of Madras.\nArchitectural Features: The house features traditional British colonial design elements, with a large courtyard and decorative windows.\nCurrent Use: It is still an active government office today.";
        } else if (input.includes("flag staff")) {
            response = "Flag Staff:\nOne of the most prominent features of Fort St. George, the flagstaff stands tall at the entrance.\nHistorical Significance: It was originally used by the British to display the Union Jack during their rule in India.\nSymbol of British Power: The flagstaff was an emblem of British authority in the region.\nCurrent Use: The flag is still hoisted during national holidays and official ceremonies.";
        } else if (input.includes("garrison church")) {
            response = "Garrison Church:\nThe Garrison Church is a historic Christian church located within Fort St. George.\nBuilt by the British: Constructed in the 18th century, it is one of the oldest Anglican churches in India.\nArchitectural Beauty: Known for its simplistic yet elegant colonial design.\nCurrent Use: Still operational, it hosts services and events for the local community.";
        } else if (input.includes("pondicherry") || input.includes("puducherry")) {
            response = "Pondicherry (now officially called Puducherry) is a charming coastal town in southern India, known for its blend of French and Indian cultures, colonial architecture, vibrant beaches, and spiritual atmosphere. Once a French colonial settlement, it retains a unique ambiance that attracts travelers seeking both relaxation and cultural immersion. Here are some places you can visit in Pondicherry:\n\n1. *French Quarter (White Town)\n2. **Auroville\n3. **Sri Aurobindo Ashram\n4. **Pondicherry Museum\n5. **Promenade Beach*";
        } else if (input.includes("french quarter") || input.includes("white town")) {
            response = "French Quarter (White Town):\n- Famous for its colonial-era French buildings, vibrant with pastel colors and bougainvillea.\n- Streets retain French names, adding to the charm of this European-style district.\n- The area is filled with quaint cafés, art galleries, and heritage hotels.\n- A prime spot for photography, capturing the unique blend of Indian and French culture.\n- Known for clean streets, quiet ambiance, and cultural events throughout the year.";
        } else if (input.includes("auroville")) {
            response = "Auroville:\n- A unique experimental township dedicated to human unity, welcoming residents from all over the world.\n- Matrimandir, the golden dome, serves as a meditation center and architectural marvel.\n- Surrounded by green landscapes, promoting ecological sustainability.\n- Visitors can learn about organic farming, handicrafts, and sustainable practices.\n- Hosts various workshops and cultural events, emphasizing peace and unity.";
        } else if (input.includes("sri aurobindo ashram")) {
            response = "Sri Aurobindo Ashram:\n- Founded by Sri Aurobindo and the Mother, a place of spiritual learning and meditation.\n- Attracts visitors interested in yoga, spirituality, and self-reflection.\n- Contains a serene garden with the samadhi (final resting place) of Sri Aurobindo and the Mother.\n- Offers various programs and publications for spiritual seekers.\n- Visitors are encouraged to practice silence and mindfulness within the premises.";
        } else if (input.includes("pondicherry museum")) {
            response = "Pondicherry Museum:\n- Showcases artifacts from the Chola and Pallava periods, including bronze statues and relics.\n- Features a collection of French furniture and colonial-era artifacts, reflecting Pondicherry’s heritage.\n- Includes ancient coins, weaponry, and sculptures, presenting the area’s diverse history.\n- The museum’s geology section displays fossils, shells, and minerals.\n- Located near the beach, allowing visitors to combine a museum visit with a scenic coastal walk.";
        } else if (input.includes("promenade beach")) {
            response = "Promenade Beach:\n- A scenic coastal stretch ideal for morning or evening strolls, offering cool breezes and views.\n- The beachfront has significant landmarks, including the Gandhi statue and War Memorial.\n- Known for street food stalls and local vendors, providing a lively atmosphere.\n- Ideal for photography, capturing views of colonial structures and the Bay of Bengal.\n- Offers seating areas and clean surroundings, making it a relaxing place for locals and tourists.";
        }else if (input.includes("thanjavur")) {
            response = "Thanjavur, also known as Tanjore, is renowned for its ancient temples and classical arts. Must-visit spots:\n1. Brihadeeswarar Temple\n2. Thanjavur Royal Palace\n3. Saraswathi Mahal Library\n4. Art Gallery\n5. Sivaganga Park";
        } else if (input.includes("brihadeeswarar temple")) {
            response = "Brihadeeswarar Temple:\n- A UNESCO World Heritage Site known for its colossal size and unique Chola architecture.\n- The temple has a massive Nandi statue and a distinctive Dravidian gopuram.\n- The Vimana (tower) is capped by a single stone weighing around 80 tons.\n- Interior murals and sculptures depict scenes from Hindu mythology.\n- Hosts an annual festival celebrating Tamil culture, music, and dance.";
        } else if (input.includes("thanjavur royal palace")) {
            response = "Thanjavur Royal Palace:\n- This historic palace houses the Nayak Hall, art gallery, and bell tower.\n- Features elaborate frescoes and statues representing South Indian history.\n- The museum showcases bronze sculptures, weapons, and artifacts from different periods.\n- A large Durbar Hall adorned with royal portraits is part of the complex.\n- Frequently visited by history enthusiasts and students.";
        } else if (input.includes("saraswathi mahal library")) {
            response = "Saraswathi Mahal Library:\n- One of Asia’s oldest libraries, containing over 49,000 manuscripts in Tamil, Sanskrit, and other languages.\n- Known for preserving ancient palm-leaf manuscripts.\n- A valuable resource for scholars studying Indian history, literature, and arts.\n- The library has manuscripts on various subjects, including medicine, philosophy, and music.\n- Open to visitors and researchers interested in historic literature.";
        } else if (input.includes("art gallery")) {
            response = "Art Gallery:\n- Located within the Royal Palace, showcasing Chola-era bronze statues, including the iconic Nataraja.\n- Holds an impressive collection of South Indian sculptures and paintings.\n- Displays artifacts from the Nayak and Maratha periods.\n- Known for its exquisite Chola bronze collections, a draw for art historians.\n- Visitors can explore ancient Tamil art and craftsmanship.";
        } else if (input.includes("sivaganga park")) {
            response = "Sivaganga Park:\n- A scenic park near the palace, offering a peaceful retreat with lush greenery.\n- Contains a large pond for boating, popular with families and children.\n- Features walking trails, making it ideal for evening strolls.\n- Has a mini zoo and play area, a favorite spot for picnics.\n- Provides a relaxing break from exploring the historic sites of Thanjavur."
        }else if (input.includes("best time to visit")) {
        return "The best time to visit [destination] depends on what you’d like to experience! Typically, [mention peak season and ideal months for weather], but if you're looking to avoid crowds and get better deals, consider traveling during [shoulder season months].";
    } else if (input.includes("hidden gems in")) {
        return "Absolutely! In [city], try visiting [hidden gem 1, such as a local park, a lesser-known museum, or a unique neighborhood]. It’s a fantastic spot that many tourists miss. Another hidden gem is [hidden gem 2], where you can experience authentic [cuisine, art, etc.].";
    } else if (input.includes("family-friendly")) {
        return "Yes, [destination] offers a range of family-friendly activities! From [mention family-friendly attractions like museums, parks, or kid-friendly events] to plenty of dining options that cater to all ages, it’s a great place for a family getaway.";
    } else if (input.includes("must-see sights")) {
        return "Some top sights in [destination] include [must-see attraction 1], [must-see attraction 2], and [must-see attraction 3]. Each of these spots offers a unique glimpse into the city’s culture and beauty. Let me know if you'd like more specific recommendations!";
    } else if (input.includes("budget-friendly flights")) {
        return "Definitely! For budget-friendly flights to [destination], consider flying during weekdays or booking in advance. I can show you current deals from various airlines. Just provide me with your departure city and preferred travel dates!";
    } else if (input.includes("weather like")) {
        return "In [city] around this time, you can expect [general temperature range] with [mention common weather patterns like rain, sun, or snow]. Be sure to pack accordingly!";
    } else if (input.includes("get from the airport")) {
        return "You have several options! In [destination], you can take [public transit option like a train or bus], or a taxi/rideshare service. Many airports also offer shuttles to major hotels. I can help you arrange a transfer if needed!";
    } else if (input.includes("visa to visit")) {
        return "Visa requirements for [country] depend on your nationality. You can usually check requirements online or with the consulate of [country]. Let me know if you’d like guidance on where to look!";
    } else if (input.includes("COVID-19 situation")) {
        return "Travel policies can change quickly. I recommend checking [destination]'s official government or tourism website for up-to-date COVID-19 guidelines, entry requirements, and safety measures.";
    } else if (input.includes("local currency")) {
        return "The currency in [destination] is [currency name]. Credit cards are widely accepted in most urban areas and tourist spots, but it’s a good idea to have some cash for smaller establishments or rural areas.";
    } else if (input.includes("safe to travel alone")) {
        return "[Destination] is generally safe for solo travelers, but as with any destination, it's wise to stay aware of your surroundings and avoid less populated areas after dark. Let me know if you'd like tips on safe areas to explore!";
    } else if (input.includes("packing light")) {
        return "Sure! Start with versatile clothing that you can mix and match, and limit bulky items. Consider using packing cubes to stay organized, and don’t forget a travel-sized toiletry kit. I also recommend leaving some space for any souvenirs!";
    } else if (input.includes("tipping culture")) {
        return "In [country], tipping norms vary. For example, [mention common tipping percentage for restaurants, hotel staff, etc.]. In some cases, tipping may already be included in the bill, so be sure to check!";
    } else if (input.includes("tap water")) {
        return "In [city], tap water is [safe/not safe] to drink. Many locals and tourists prefer bottled or filtered water, especially outside urban areas. I recommend carrying a refillable bottle if safe water is available.";
    } else if (input.includes("local festivals or events")) {
        return "Yes! Around this time, [destination] hosts [festival or event name]. It’s a wonderful opportunity to experience local culture, food, and performances. Would you like to know more about event schedules or ticket information?";
    } else if (input.includes("good restaurant near")) {
        return "Certainly! Near [location], some popular restaurants are [restaurant 1, type of cuisine] and [restaurant 2]. Let me know if you'd like specific dietary options or more details!";
    } else if (input.includes("best way to get around")) {
        return "[City] has [mention transit options like metro, bus, or bike rentals], which are very convenient. If you prefer more flexibility, taxis and rideshare options are widely available. I can also help you find day passes or rental options!";
    } else if (input.includes("3-day trip")) {
        return "For a 3-day trip to [destination], I suggest focusing on top attractions like [major sight 1 and 2], leaving some time to explore local neighborhoods. Would you like a sample itinerary for each day?";
    } else if (input.includes("travel restrictions or entry requirements")) {
        return "Currently, [country] has [mention any restrictions like required vaccinations, negative COVID test, or quarantine measures]. Be sure to check official sources for the latest updates before you travel.";
    } else if (input.includes("itinerary for")) {
        return "I’d be happy to help you build an itinerary for [destination]! There are also some great travel websites and apps with pre-planned itineraries tailored to different interests. Let me know what types of activities you’re most interested in!";
    } 
	}
    else if (selectedLanguage === 'Hindi') {
        // Hindi responses
  if ((input.includes("नमस्ते") && input.includes("चेन्नई")) || (input.includes("चेन्नई"))) {
    response = "चेन्नई इतिहास, साहसिक और प्राकृतिक सुंदरता को मिश्रित करने वाले आकर्षक स्थानों से भरा हुआ है। यहाँ शहर में खोजने के लिए पांच शानदार स्थान हैं:\n1. महाबलीपुरम\n2. कांचीपुरम\n3. फोर्ट सेंट जॉर्ज, चेन्नई\n4. पांडिचेरी (पुदुचेरी)\n5. तंजावुर (तंजौर)";
} else if (input.includes("महाबलीपुरम")) {
    response = "महाबलीपुरम तमिलनाडु राज्य में भारत के दक्षिण-पूर्वी तट पर स्थित एक ऐतिहासिक शहर है। अपने भव्य प्राचीन मंदिरों और शिला नक्काशियों के लिए प्रसिद्ध, यह यूनेस्को की विश्व धरोहर स्थल है। महाबलीपुरम में घूमने की जगहें:\n1. तट मंदिर\n2. पंच रथ\n3. अर्जुन की तपस्या\n4. गंगा का अवतरण\n5. कृष्ण का मक्खन गोला";
} else if (input.includes("तट मंदिर")) {
    response = "तट मंदिर:\nसमुद्र तट स्थिति: बंगाल की खाड़ी के तट पर स्थित, मंदिर से समुद्र का शानदार दृश्य मिलता है।\nपल्लव वास्तुकला: 8वीं शताब्दी में पल्लव राजा नरसिंहवर्मन द्वितीय के शासनकाल में निर्मित, विस्तृत नक्काशी के साथ द्रविड़ शैली प्रदर्शित करता है।\nदोहरे मंदिर: शिव और विष्णु दोनों को समर्पित, इसे विशेष बनाता है।\nयूनेस्को विश्व धरोहर स्थल: इसके ऐतिहासिक और वास्तुकला महत्व के लिए मान्यता प्राप्त।\nउभरी हुई नक्काशी: देवताओं, पौराणिक दृश्यों और जानवरों की जटिल नक्काशी।";
} else if (input.includes("पंच रथ")) {
    response = "पंच रथ:\nएकाश्म संरचनाएं: पांचों मंदिर एक ही चट्टान से उकेरे गए हैं।\nविभिन्न वास्तुकला शैलियां: अनूठे डिजाइन द्रविड़ वास्तुकला के विभिन्न रूपों को दर्शाते हैं।\nपांडवों के नाम पर: हालांकि सीधे संबंधित नहीं, ये महाभारत के पांडव भाइयों के नाम पर हैं।\nजटिल मूर्तियां: जानवरों, देवताओं और देवियों की विस्तृत मूर्तियां इनकी आकर्षकता बढ़ाती हैं।\nशैल-कटाव वास्तुकला का प्रतीक: एकाश्म शैल-कटाव वास्तुकला के महत्वपूर्ण उदाहरण।";
} else if (input.includes("अर्जुन की तपस्या")) {
    response = "अर्जुन की तपस्या:\nविशाल शिला राहत: दुनिया की सबसे बड़ी शिला राहत में से एक, हिंदू पौराणिक कथाओं के दृश्यों को दर्शाती है।\nपौराणिक दृश्य: अर्जुन की शिव का आशीर्वाद पाने के लिए की गई तपस्या को दर्शाता है।\nप्राकृतिक और दैवीय विषय: नक्काशी में स्वर्गीय प्राणी, ऋषि और जानवर शामिल हैं।\nगंगा अवतरण का प्रतीक: पवित्र नदी गंगा के पृथ्वी पर अवतरण की कहानी को दर्शाता है।\nकलात्मक विवरण: पल्लव युग के मूर्तिकारों की कुशलता और रचनात्मकता को प्रदर्शित करता है।";
} else if (input.includes("गंगा का अवतरण")) {
    response = "गंगा का अवतरण:\nदैवीय प्रतीक: भगीरथ की गंगा नदी को पृथ्वी पर लाने के लिए की गई तपस्या को दर्शाता है।\nप्राकृतिक शिला नक्काशी: प्राकृतिक चट्टान के आकारों का उपयोग करके बहते पानी का जीवंत चित्रण।\nजानवरों की उपस्थिति: जीवंत हाथी और अन्य जानवर दृश्य की भव्यता में वृद्धि करते हैं।\nअर्जुन की तपस्या से जुड़ाव: चट्टान पर बड़ी कथा का हिस्सा बनता है।\nवास्तुकला का उत्कृष्ट नमूना: एक ही फ्रेम में भक्ति, दिव्यता और प्रकृति को उजागर करता है।";
} else if (input.includes("कृष्ण का मक्खन गोला")) {
    response = "कृष्ण का मक्खन गोला:\nप्राकृतिक आश्चर्य: एक विशाल ग्रेनाइट चट्टान, लगभग 250 टन, ढलान पर टिकी हुई।\nपौराणिक महत्व: स्थानीय किंवदंतियां कहती हैं कि यह कृष्ण की खेल प्रकृति का प्रतीक है।\nराजाओं द्वारा अचल: विभिन्न शासकों ने इसे हटाने की कोशिश की, लेकिन यह अचल रही।\nलोकप्रिय फोटो स्पॉट: पर्यटक इसके साथ तस्वीरें खिंचवाना पसंद करते हैं, क्योंकि यह गुरुत्वाकर्षण को चुनौती देता प्रतीत होता है।\nप्राकृतिक क्षरण निर्माण: क्षरण के माध्यम से प्राकृतिक रूप से बना माना जाता है।";
} else if (input.includes("कांचीपुरम")) {
    response = "कांचीपुरम 'हजार मंदिरों का शहर' के रूप में जाना जाता है और अपने मंदिरों और रेशमी साड़ियों के लिए प्रसिद्ध है। कुछ घूमने की जगहें:\n1. कामाक्षी अम्मन मंदिर\n2. एकाम्बरेश्वर मंदिर\n3. वरदराज पेरुमल मंदिर\n4. कैलासनाथ मंदिर\n5. कांची कुडिल";
} else if (input.includes("कामाक्षी अम्मन मंदिर")) {
    response = "कामाक्षी अम्मन मंदिर, कांचीपुरम में स्थित, देवी कामाक्षी को समर्पित है। यह अपनी भव्य वास्तुकला और आध्यात्मिक महत्व के लिए प्रसिद्ध है। प्रमुख बिंदु हैं:\n- शक्ति परंपरा के अनुयायियों के लिए एक प्रमुख तीर्थ स्थल।\n- अपने भव्य गोपुरम और जटिल मूर्तियों के लिए प्रसिद्ध।";
} else if (input.includes("एकाम्बरेश्वर मंदिर")) {
    response = "एकाम्बरेश्वर मंदिर, दक्षिण भारत के सबसे बड़े और प्राचीन मंदिरों में से एक, भगवान शिव को समर्पित है। यह पंचभूत स्थलों का हिस्सा है। कुछ उल्लेखनीय विशेषताएं हैं:\n- पृथ्वी तत्व का प्रतिनिधित्व करते हुए, इस मंदिर में प्रभावशाली गोपुरम हैं।\n- मंदिर परिसर में एक पवित्र आम का पेड़ स्थित है, जिसे पवित्र माना जाता है।";
} else if (input.includes("वरदराज पेरुमल मंदिर")) {
    response = "कांचीपुरम में स्थित वरदराज पेरुमल मंदिर एक महत्वपूर्ण वैष्णव मंदिर है। यह अपनी वास्तुकला भव्यता और समृद्ध इतिहास के लिए प्रसिद्ध है। उल्लेखनीय बिंदु हैं:\n- यह 108 दिव्य देशमों में से एक है।\n- मंदिर अपने वार्षिक उत्सवों के लिए प्रसिद्ध है, विशेष रूप से वैकुंठ एकादशी के दौरान।";
} else if (input.includes("कैलासनाथ मंदिर")) {
    response = "कैलासनाथ मंदिर, 8वीं शताब्दी का, कांचीपुरम के सबसे पुराने मंदिरों में से एक है जो भगवान शिव को समर्पित है। मुख्य बिंदु हैं:\n- अपनी उत्कृष्ट द्रविड़-शैली की वास्तुकला और शिला-कटाव मूर्तियों के लिए जाना जाता है।\n- भक्तों और पर्यटकों के लिए एक शांतिपूर्ण वातावरण प्रदान करता है।";
} else if (input.includes("कांची कुडिल")) {
    response = "कांची कुडिल एक विरासत केंद्र है जो कांचीपुरम की पारंपरिक जीवनशैली की झलक प्रदान करता है। यह स्थानीय हस्तशिल्प और कलाकृतियों की विविधता प्रदर्शित करता है। यहाँ क्या देख सकते हैं:\n- कांचीपुरम की समृद्ध सांस्कृतिक विरासत की जानकारी।\n- एक पारंपरिक घर जो क्षेत्र के अतीत की जीवनशैली का प्रतिनिधित्व करता है।";
} else if (input.includes("फोर्ट सेंट जॉर्ज")) {
    response = "चेन्नई में फोर्ट सेंट जॉर्ज ब्रिटिश ईस्ट इंडिया कंपनी द्वारा निर्मित एक ऐतिहासिक स्मारक है। इसमें कई उल्लेखनीय आकर्षण शामिल हैं जैसे:\n1. किला संग्रहालय\n2. सेंट मैरी चर्च\n3. वेलेस्ली हाउस\n4. फ्लैग स्टाफ\n5. क्लाइव हाउस";
} else if (input.includes("किला संग्रहालय")) {
    response = "किला संग्रहालय:\nफोर्ट सेंट जॉर्ज के परिसर में स्थित, किला संग्रहालय ब्रिटिश औपनिवेशिक काल की विभिन्न कलाकृतियों को प्रदर्शित करता है।\nप्रदर्शित वस्तुएं: इसमें ब्रिटिश अधिकारियों के चित्र, हथियार, वर्दियां और";
}
	}
    else if (selectedLanguage === 'German') {
        // German responses
if ((input.includes("Namaste") && input.includes("Chennai")) || (input.includes("Chennai"))) {
    response = "Chennai ist voller faszinierender Orte, die Geschichte, Abenteuer und natürliche Schönheit vereinen. Hier sind fünf großartige Orte zum Erkunden in der Stadt:\n1. Mahabalipuram\n2. Kanchipuram\n3. Fort St. George, Chennai\n4. Pondicherry (Puducherry)\n5. Thanjavur (Tanjore)";
} else if (input.includes("Mahabalipuram")) {
    response = "Mahabalipuram ist eine historische Stadt an der südöstlichen Küste Indiens im Bundesstaat Tamil Nadu. Berühmt für seine prächtigen antiken Tempel und Steinmetzarbeiten ist es UNESCO-Weltkulturerbe. Sehenswürdigkeiten in Mahabalipuram:\n1. Shore-Tempel\n2. Pancha Rathas\n3. Arjunas Buße\n4. Abstieg der Ganga\n5. Krishnas Butterkugel";
} else if (input.includes("Shore-Tempel")) {
    response = "Shore-Tempel:\nStrandlage: Am Golf von Bengalen gelegen, bietet der Tempel einen beeindruckenden Meerblick.\nPallava-Architektur: Im 8. Jahrhundert während der Herrschaft des Pallava-Königs Narasimhavarman II. erbaut, zeigt dravidischen Stil mit ausführlichen Schnitzereien.\nDoppeltempel: Sowohl Shiva als auch Vishnu gewidmet, was ihn besonders macht.\nUNESCO-Weltkulturerbe: Anerkannt für seine historische und architektonische Bedeutung.\nReliefschnitzereien: Komplexe Schnitzereien von Gottheiten, mythologischen Szenen und Tieren.";
} else if (input.includes("Pancha Rathas")) {
    response = "Pancha Rathas:\nMonolithische Strukturen: Alle fünf Tempel sind aus einem einzigen Felsen gehauen.\nVielfältige Architekturstile: Einzigartige Designs zeigen verschiedene Formen dravidischer Architektur.\nNach den Pandavas benannt: Obwohl nicht direkt verbunden, sind sie nach den Pandava-Brüdern aus dem Mahabharata benannt.\nKomplexe Skulpturen: Detaillierte Skulpturen von Tieren, Göttern und Göttinnen erhöhen ihre Attraktivität.\nSymbol der Felsenarchitektur: Bedeutende Beispiele monolithischer Felsenarchitektur.";
} else if (input.includes("Arjunas Buße")) {
    response = "Arjunas Buße:\nGigantisches Steinrelief: Eines der größten Steinreliefs der Welt, zeigt Szenen aus hinduistischen Mythen.\nMythologische Szene: Stellt Arjunas Askese dar, um den Segen Shivas zu erhalten.\nNatürliche und göttliche Motive: Schnitzereien umfassen himmlische Wesen, Weise und Tiere.\nSymbol des Ganga-Abstiegs: Zeigt die Geschichte des Abstiegs des heiligen Flusses Ganga zur Erde.\nKünstlerische Details: Demonstriert die Kunstfertigkeit und Kreativität der Pallava-Bildhauer.";
} else if (input.includes("Abstieg der Ganga")) {
    response = "Abstieg der Ganga:\nGöttliches Symbol: Stellt Bhagiraths Askese dar, um den Fluss Ganga auf die Erde zu bringen.\nNatürliche Felsskulptur: Lebendige Darstellung fließenden Wassers unter Verwendung natürlicher Felsformen.\nTierpräsenz: Lebendige Elefanten und andere Tiere verstärken die Großartigkeit der Szene.\nVerbindung zu Arjunas Buße: Teil der größeren Erzählung auf dem Felsen.\nArchitektonisches Meisterwerk: Vereint Hingabe, Göttlichkeit und Natur in einem einzigen Rahmen.";
} else if (input.includes("Krishnas Butterkugel")) {
    response = "Krishnas Butterkugel:\nNaturwunder: Ein riesiger Granitfelsen von etwa 250 Tonnen, balanciert auf einem Hang.\nMythologische Bedeutung: Lokale Legenden sagen, es symbolisiere Krishnas spielerische Natur.\nUnbewegt von Königen: Verschiedene Herrscher versuchten ihn zu bewegen, aber er blieb unverändert.\nBeliebter Fotospot: Touristen lieben es, sich damit fotografieren zu lassen, da er der Schwerkraft zu trotzen scheint.\nNatürliche Erosionsformation: Gilt als durch natürliche Erosion entstanden.";
} else if (input.includes("Kanchipuram")) {
    response = "Kanchipuram ist als 'Stadt der tausend Tempel' bekannt und berühmt für seine Tempel und Seidensaris. Einige Sehenswürdigkeiten:\n1. Kamakshi Amman Tempel\n2. Ekambareswarar Tempel\n3. Varadaraja Perumal Tempel\n4. Kailasanatha Tempel\n5. Kanchi Kudil";
} else if (input.includes("Kamakshi Amman Tempel")) {
    response = "Der Kamakshi Amman Tempel in Kanchipuram ist der Göttin Kamakshi gewidmet. Er ist bekannt für seine großartige Architektur und spirituelle Bedeutung. Wichtige Punkte sind:\n- Ein wichtiger Pilgerort für Anhänger der Shakti-Tradition.\n- Berühmt für seinen prächtigen Gopuram und komplexe Skulpturen.";
} else if (input.includes("Ekambareswarar Tempel")) {
    response = "Der Ekambareswarar Tempel, einer der größten und ältesten Tempel Südindiens, ist Lord Shiva gewidmet. Er ist Teil der Pancha Bhuta Sthalas. Einige bemerkenswerte Merkmale sind:\n- Repräsentiert das Erdelement und hat beeindruckende Gopurams.\n- Im Tempelkomplex steht ein heiliger Mangobaum, der als heilig gilt.";
} else if (input.includes("Varadaraja Perumal Tempel")) {
    response = "Der Varadaraja Perumal Tempel in Kanchipuram ist ein bedeutender Vishnu-Tempel. Er ist bekannt für seine architektonische Pracht und reiche Geschichte. Bemerkenswerte Punkte sind:\n- Er ist einer der 108 Divya Desams.\n- Der Tempel ist berühmt für seine jährlichen Festivals, besonders während Vaikunta Ekadashi.";
} else if (input.includes("Kailasanatha Tempel")) {
    response = "Der Kailasanatha Tempel aus dem 8. Jahrhundert ist einer der ältesten Tempel in Kanchipuram und Lord Shiva gewidmet. Hauptpunkte sind:\n- Bekannt für seine exquisite dravidische Architektur und Steinskulpturen.\n- Bietet eine friedvolle Atmosphäre für Gläubige und Touristen.";
} else if (input.includes("Kanchi Kudil")) {
    response = "Kanchi Kudil ist ein Kulturerbe-Zentrum, das einen Einblick in den traditionellen Lebensstil von Kanchipuram bietet. Es zeigt eine Vielfalt lokaler Handwerkskunst und Kunstwerke. Hier kann man sehen:\n- Informationen über das reiche kulturelle Erbe Kanchipurams.\n- Ein traditionelles Haus, das die vergangene Lebensweise der Region repräsentiert.";
} else if (input.includes("Fort St. George")) {
    response = "Fort St. George in Chennai ist ein historisches Denkmal, erbaut von der Britischen Ostindien-Kompanie. Es umfasst mehrere bemerkenswerte Attraktionen wie:\n1. Das Fort-Museum\n2. St. Mary's Kirche\n3. Wellesley House\n4. Flaggenmast\n5. Clive House";
} else if (input.includes("Fort-Museum")) {
    response = "Fort-Museum:\nIm Fort St. George gelegen, zeigt das Fort-Museum verschiedene Artefakte aus der britischen Kolonialzeit.\nAusstellungsstücke: Es enthält Porträts britischer Offiziere, Waffen, Uniformen und historische Artefakte.";
}
   }

    // If no hardcoded response is found, use Gemini API
    if (!response) {
        response = await getGeminiResponse(input);
    }

    return response;
}

async function getGeminiResponse(userInput) {
    const YOUR_API_KEY = 'AIzaSyCtB3_w3CEAkxMVt8sF9o1PNFFryCRkqmY';
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${YOUR_API_KEY}`;
    
    const requestBody = {
        contents: [
            {
                parts: [
                    { text: userInput + ` (respond in ${selectedLanguage})` }
                ]
            }
        ]
    };
    
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0].text) {
            return data.candidates[0].content.parts[0].text.replace(/\\(.?)\\*/g, "$1").trim();
        } else {
            return "Sorry, I couldn't find an answer to that.";
        }
    } catch (error) {
        console.log("There was a problem with the fetch operation:", error);
        return "Sorry, I couldn't understand that.";
    }
}

async function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    
    if (message) {
        appendMessage(message, 'user');
        input.value = '';
        
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message bot-message typing-indicator';
        /*ypingIndicator.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>*/
        document.getElementById('chat-box').appendChild(typingIndicator);

        // Process the message and get response
        const response = await processInput(message);
        
        // Remove typing indicator
        typingIndicator.remove();
        
        // Display the response
        appendMessage(response, 'bot');
    }
}

function selectLanguage(language) {
    selectedLanguage = language;
    const message = `Selected language: ${language}`;
    appendMessage(message, 'user');
    

    let botResponse = '';
    switch(language) {
        case 'English':
            botResponse = "Great! I'll help you explore Chennai in English. What would you like to know about?";
            break;
        case 'Hindi':
            botResponse = "बढ़िया! मैं आपकी चेन्नई की यात्रा में मदद करूंगा। आप क्या जानना चाहेंगे?";
            break;
        case 'German':
            botResponse = "Ausgezeichnet! Ich helfe Ihnen gerne dabei, Chennai zu erkunden. Was möchten Sie wissen?";
            break;
    }
    
    setTimeout(() => {
        appendMessage(botResponse, 'bot');
    }, 500);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function appendMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';

    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = message;
    
    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);
    chatBox.appendChild(messageDiv);
    
    chatBox.scrollTop = chatBox.scrollHeight;
}