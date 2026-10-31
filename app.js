/**
 * TERRANOVA — Interactive Global City Travel Guide (Bilingual Support)
 * Multi-Agent Autonomous Development Framework with Creative Autonomy & i18n
 */

'use strict';

// =============================================================================
// 1. EMBEDDED DATASET & STATE
// =============================================================================
const STATIC_DATA_FALLBACK = {
  "meta": {
    "version": "3.0.0",
    "bilingual": true,
    "languages": [
      "tr",
      "en"
    ],
    "totalDestinations": 10,
    "regions": [
      {
        "id": "All",
        "en": "All Continents",
        "tr": "Tüm Kıtalar"
      },
      {
        "id": "Europe",
        "en": "Europe",
        "tr": "Avrupa"
      },
      {
        "id": "Asia",
        "en": "Asia",
        "tr": "Asya"
      },
      {
        "id": "Americas",
        "en": "Americas",
        "tr": "Amerika"
      },
      {
        "id": "Africa",
        "en": "Africa",
        "tr": "Afrika"
      },
      {
        "id": "Oceania",
        "en": "Oceania",
        "tr": "Okyanusya"
      }
    ],
    "vibes": [
      {
        "id": "All",
        "en": "All Vibes",
        "tr": "Tüm Atmosferler"
      },
      {
        "id": "Historic",
        "en": "Historic",
        "tr": "Tarihi"
      },
      {
        "id": "Zen & Nature",
        "en": "Zen & Nature",
        "tr": "Huzur & Doğa"
      },
      {
        "id": "Foodie Heaven",
        "en": "Foodie Heaven",
        "tr": "Gastronomi Cenneti"
      },
      {
        "id": "Cyberpunk",
        "en": "Cyberpunk",
        "tr": "Siberpunk"
      },
      {
        "id": "Romantic",
        "en": "Romantic",
        "tr": "Romantik"
      },
      {
        "id": "Adventure",
        "en": "Adventure",
        "tr": "Macera"
      },
      {
        "id": "Art & Design",
        "en": "Art & Design",
        "tr": "Sanat & Tasarım"
      },
      {
        "id": "Nightlife",
        "en": "Nightlife",
        "tr": "Gece Hayatı"
      }
    ]
  },
  "destinations": [
    {
      "id": "tokyo-jp",
      "name": {
        "en": "Tokyo",
        "tr": "Tokyo"
      },
      "country": {
        "en": "Japan",
        "tr": "Japonya"
      },
      "region": "Asia",
      "flag": "🇯🇵",
      "tagline": {
        "en": "Neon-lit hypermodernity dancing with timeless Shinto serenity",
        "tr": "Zamansız Şinto dinginliğiyle dans eden neon ışıklı hiper-modernite"
      },
      "heroImage": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
      "thumbnail": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
      "currency": {
        "code": "JPY",
        "symbol": "¥",
        "rateToUSD": 0.0067
      },
      "language": {
        "en": "Japanese",
        "tr": "Japonca"
      },
      "timeZone": "GMT+9",
      "costLevel": "9376$",
      "costIndex": 3,
      "bestTimeToVisit": {
        "en": "March - May (Cherry Blossoms) & Oct - Nov (Autumn Foliage)",
        "tr": "Mart - Mayıs (Sakura Çiçekleri) & Ekim - Kasım (Sonbahar Kızılı)"
      },
      "weather": {
        "summer": {
          "en": "26°C - 32°C (Warm & Humid)",
          "tr": "26°C - 32°C (Sıcak & Nemli)"
        },
        "winter": {
          "en": "3°C - 12°C (Crisp & Sunny)",
          "tr": "3°C - 12°C (Açık Güneşli Soğuk)"
        },
        "springFall": {
          "en": "15°C - 22°C (Ideal)",
          "tr": "15°C - 22°C (En İdeal Gezi Dönemi)"
        }
      },
      "vibes": [
        "Cyberpunk",
        "Foodie Heaven",
        "Art & Design",
        "Nightlife"
      ],
      "soundscape": "cyberpunk_rain",
      "culturalTip": {
        "en": "Quiet voices on public transit are customary. When handing over payment cards or cash, use both hands with the small tray provided at cash registers.",
        "tr": "Toplu taşımada sessiz konuşmak esastır. Kasa ödemelerinde nakit ya da kartınızı iki elinizle tutarak sunulan küçük tepsiye bırakın."
      },
      "coordinates": {
        "lat": 35.6762,
        "lng": 139.6503
      },
      "localEats": [
        {
          "name": "Tsukemen (Fuunji)",
          "desc": {
            "en": "Thick chewy noodles dipped into an intensely savory, 14-hour chicken & bonito broth.",
            "tr": "14 saat kaynatılmış yoğun tavuk ve palamut sosuna batırılan kalın ramen eriştesi."
          }
        },
        {
          "name": "Matcha Parfait in Ginza",
          "desc": {
            "en": "Multi-layered artisanal green tea soft serve with warabi mochi and red bean.",
            "tr": "Geleneksel warabi mochi ve tatlı azuki fasulyeli kat kat birinci sınıf yeşil çay parfe."
          }
        },
        {
          "name": "Yakitori Alley (Omoide Yokocho)",
          "desc": {
            "en": "Smoky charcoal skewers tucked into nostalgic Showa-era alleys under the train tracks.",
            "tr": "Tren raylarının altındaki nostaljik Showa dönemi sokaklarında közde pişen çıtır tavuk şişler."
          }
        }
      ],
      "attractions": [
        {
          "id": "tky-1",
          "name": {
            "en": "Senso-ji Temple & Asakusa Alleys",
            "tr": "Senso-ji Tapınağı ve Asakusa Sokakları"
          },
          "category": "Historic",
          "rating": 4.9,
          "reviewsCount": 4210,
          "costEstimate": {
            "en": "Free (Temple grounds)",
            "tr": "Ücretsiz (Tapınak alanı)"
          },
          "duration": {
            "en": "2.5 hours",
            "tr": "2,5 saat"
          },
          "bestHour": {
            "en": "06:30 AM before crowds, or 08:00 PM for illuminated pagoda",
            "tr": "Kalabalıktan önce 06:30 veya ışıklandırılmış pagoda için 20:00"
          },
          "photoSpotTips": {
            "en": "Stand at the edge of Kaminarimon Gate using an ultra-wide angle looking up at the crimson giant lantern.",
            "tr": "Kaminarimon Kapısı önünde ultra geniş açıyla devasa kırmızı fenere alt açıdan bakın."
          },
          "insiderSecret": {
            "en": "Venture two blocks west of Nakamise street to find 70-year-old traditional senbei bakers roasting over Binchotan coals.",
            "tr": "Nakamise caddesinin iki sokak batısında Binchotan kömüründe pirinç patlağı pişiren 70 yıllık fırını keşfedin."
          },
          "image": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80",
          "description": {
            "en": "Tokyo's oldest Buddhist temple founded in 645 AD. Incense blends with centuries of folklore.",
            "tr": "MS 645 yılında kurulan Tokyo'nun en eski Budist tapınağı. Asırlık tütsü kokuları Edo ruhuyla harmanlanıyor."
          }
        },
        {
          "id": "tky-2",
          "name": {
            "en": "Shibuya Sky & The Crossing",
            "tr": "Shibuya Sky & Yaya Geçidi"
          },
          "category": "Architecture",
          "rating": 4.8,
          "reviewsCount": 3890,
          "costEstimate": {
            "en": "¥2,200 ( USD)",
            "tr": "2.200 ¥ (Yaklaşık 15 USD)"
          },
          "duration": {
            "en": "1.5 hours",
            "tr": "1,5 saat"
          },
          "bestHour": {
            "en": "30 mins before golden hour sunset",
            "tr": "Gün batımı altın saatinden 30 dakika önce"
          },
          "photoSpotTips": {
            "en": "Glass-corner Sky Edge offers unobstructed views of Mount Fuji on clear days.",
            "tr": "Cam köşeli Sky Edge açık günlerde Fuji Dağı'nın kesintisiz silüetini sunar."
          },
          "insiderSecret": {
            "en": "Book the 4:40 PM slot exactly 28 days in advance to catch both twilight and neon lights waking up.",
            "tr": "Alacakaranlığı ve uyanan neonları yakalamak için 28 gün önceden 16:40 seansına bilet alın."
          },
          "image": "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
          "description": {
            "en": "A 229m open-air observation deck floating above the world's most kinetic crossing.",
            "tr": "Dünyanın en hareketli kavşağının 229 metre üzerinde havada asılı duran açık hava seyir terası."
          }
        }
      ],
      "miniItinerary": [
        {
          "day": 1,
          "title": {
            "en": "Ancient Edo to Neon Clouds",
            "tr": "Kadim Edo'dan Neon Bulutlara"
          },
          "morning": {
            "en": "Dawn incense ritual at Senso-ji, followed by freshly baked melonpan in Asakusa.",
            "tr": "Senso-ji'de şafak tütsü ritüeli ve Asakusa fırınlarından sıcacık melonpan ekmeği."
          },
          "afternoon": {
            "en": "Sumida river water bus to Odaiba; digital art immersion at teamLab Planets.",
            "tr": "Sumida Nehri üzerinde tekneyle fütüristik Odaiba'ya geçiş ve teamLab Planets ziyareti."
          },
          "evening": {
            "en": "Sunset at Shibuya Sky, crossing the neon sea, then steaming ramen in back alleys.",
            "tr": "Shibuya Sky'da gün batımı, neon kavşaktan geçiş ve ara sokaklarda dumanı tüten ramen keyfi."
          }
        }
      ]
    },
    {
      "id": "kyoto-jp",
      "name": {
        "en": "Kyoto",
        "tr": "Kyoto"
      },
      "country": {
        "en": "Japan",
        "tr": "Japonya"
      },
      "region": "Asia",
      "flag": "🇯🇵",
      "tagline": {
        "en": "The spiritual heartland of zen stone gardens, moss paths, and matcha rites",
        "tr": "Zen taş bahçelerinin, yosunlu patikaların ve matcha seremonilerinin manevi kalbi"
      },
      "heroImage": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80",
      "thumbnail": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
      "currency": {
        "code": "JPY",
        "symbol": "¥",
        "rateToUSD": 0.0067
      },
      "language": {
        "en": "Japanese",
        "tr": "Japonca"
      },
      "timeZone": "GMT+9",
      "costLevel": "9376",
      "costIndex": 2,
      "bestTimeToVisit": {
        "en": "April (Cherry blossoms) & November (Crimson maple foliage)",
        "tr": "Nisan (Sakura dönemi) & Kasım (Kızıl akçaağaç yaprakları)"
      },
      "weather": {
        "summer": {
          "en": "24°C - 33°C (Lush greens, occasional rain)",
          "tr": "24°C - 33°C (Yemyeşil doğa, ara sıra yaz yağmuru)"
        },
        "winter": {
          "en": "1°C - 10°C (Crisp with snow dustings)",
          "tr": "1°C - 10°C (Tapınak çatılarında hafif kar tozu)"
        },
        "springFall": {
          "en": "12°C - 20°C (Unmatched foliage splendor)",
          "tr": "12°C - 20°C (Eşsiz sonbahar ve bahar görsel şöleni)"
        }
      },
      "vibes": [
        "Zen & Nature",
        "Historic",
        "Romantic",
        "Art & Design"
      ],
      "soundscape": "zen_bamboo",
      "culturalTip": {
        "en": "Treat Gion's geiko with reverence; photography is strictly forbidden on private lanes.",
        "tr": "Gion geyşalarına saygıyla yaklaşın; özel ara sokaklarda fotoğraf çekimi kesinlikle yasaktır."
      },
      "coordinates": {
        "lat": 35.0116,
        "lng": 135.7681
      },
      "localEats": [
        {
          "name": "Kaiseki Ryori",
          "desc": {
            "en": "Multi-course culinary poetry balancing seasonal textures and pottery.",
            "tr": "Mevsimlik tatları ve el yapımı seramikleri dengeleyen geleneksel saray menüsü."
          }
        },
        {
          "name": "Nanzenji Yudofu",
          "desc": {
            "en": "Silken artisan tofu simmered with kombu in tranquil courtyard pavilions.",
            "tr": "Nanzenji manastır bahçelerinde yosun suyuyla demlenen ipeksi taze tofu."
          }
        }
      ],
      "attractions": [
        {
          "id": "kyo-1",
          "name": {
            "en": "Fushimi Inari Taisha (Upper Mountain Path)",
            "tr": "Fushimi Inari Taisha (Zirve Yolu)"
          },
          "category": "Historic",
          "rating": 4.9,
          "reviewsCount": 6420,
          "costEstimate": {
            "en": "Free",
            "tr": "Ücretsiz"
          },
          "duration": {
            "en": "3 hours",
            "tr": "3 saat"
          },
          "bestHour": {
            "en": "06:00 AM before dawn crowds",
            "tr": "Şafak vakti 06:00 kalabalıklar başlamadan"
          },
          "photoSpotTips": {
            "en": "Climb past Yotsutsuji junction; upper torii paths have zero crowds.",
            "tr": "Yotsutsuji kavşağının üstüne tırmanın; üst torii koridorlarında hiç kalabalık yoktur."
          },
          "insiderSecret": {
            "en": "Stop at the mid-mountain teahouse for kitsune udon while watching views over Kyoto.",
            "tr": "Dağ yamacındaki çayhanede Kyoto vadisi manzarasına karşı tilki udonu tadın."
          },
          "image": "https://images.unsplash.com/photo-1478436127897-769e00d2c715?auto=format&fit=crop&w=800&q=80",
          "description": {
            "en": "Over 10,000 vivid vermilion torii gates winding up sacred Mount Inari slopes.",
            "tr": "Kutsal Inari Dağı yamaçlarına tırmanan 10.000'i aşkın parlak kırmızı torii kemeri."
          }
        }
      ],
      "miniItinerary": [
        {
          "day": 1,
          "title": {
            "en": "Gates of Fox Spirits & Old Teahouses",
            "tr": "Tilki Ruhlarının Kapıları ve Antik Çayhaneler"
          },
          "morning": {
            "en": "Early climb through vermilion torii arches at Fushimi Inari.",
            "tr": "Fushimi Inari'nin kırmızı kapıları arasında sabahın ilk ışıklarıyla yürüyüş."
          },
          "afternoon": {
            "en": "Stroll down the Philosopher's Path lined with canal reflections.",
            "tr": "Kanal boyunca uzanan Filozof Yolu'nda kiraz ağaçları altında yürüyüş."
          },
          "evening": {
            "en": "Quiet kaiseki dinner beside Shirakawa canal under weeping willows.",
            "tr": "Shirakawa kanalı kıyısında salkımsöğütler altında kaiseki akşam yemeği."
          }
        }
      ]
    },
    {
      "id": "rome-it",
      "name": {
        "en": "Rome",
        "tr": "Roma"
      },
      "country": {
        "en": "Italy",
        "tr": "İtalya"
      },
      "region": "Europe",
      "flag": "🇮🇹",
      "tagline": {
        "en": "An open-air museum where three millennia of empire breathe beneath golden light",
        "tr": "Üç bin yıllık imparatorluğun altın bir ışık altında nefes aldığı açık hava müzesi"
      },
      "heroImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80",
      "thumbnail": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80",
      "currency": {
        "code": "EUR",
        "symbol": "€",
        "rateToUSD": 1.08
      },
      "language": {
        "en": "Italian",
        "tr": "İtalyanca"
      },
      "timeZone": "GMT+1",
      "costLevel": "9376",
      "costIndex": 2,
      "bestTimeToVisit": {
        "en": "April - June & September - October",
        "tr": "Nisan - Haziran & Eylül - Ekim"
      },
      "weather": {
        "summer": {
          "en": "22°C - 34°C (Sunny, warm Mediterranean midday)",
          "tr": "22°C - 34°C (Güneşli Akdeniz sıcağı)"
        },
        "winter": {
          "en": "7°C - 14°C (Gentle winter, uncrowded alleys)",
          "tr": "7°C - 14°C (Ilıman kış, sakin tarihi sokaklar)"
        },
        "springFall": {
          "en": "14°C - 23°C (Perfection for walking)",
          "tr": "14°C - 23°C (Şehri yürüyerek keşfetmek için kusursuz)"
        }
      },
      "vibes": [
        "Historic",
        "Foodie Heaven",
        "Romantic",
        "Art & Design"
      ],
      "soundscape": "mediterranean_breeze",
      "culturalTip": {
        "en": "Espresso is taken standing at the bar; ordering cappuccino after 11:00 AM is considered a faux pas.",
        "tr": "Espresso barda ayakta içilir; saat 11:00'den sonra cappuccino siparişi vermek Romalılarca yadırganır."
      },
      "coordinates": {
        "lat": 41.9028,
        "lng": 12.4964
      },
      "localEats": [
        {
          "name": "Cacio e Pepe in Testaccio",
          "desc": {
            "en": "Pecorino Romano, toasted black pepper, and pasta water emulsion.",
            "tr": "Pecorino Romano peyniri ve taze karabiberle kremlenen Roma klasiği."
          }
        },
        {
          "name": "Maritozzo con Panna",
          "desc": {
            "en": "Fluffy sweet brioche bun overflowing with fresh whipped chantilly cream.",
            "tr": "İçi bol taze çırpılmış kremayla doldurulmuş yumuşacık Roma çöreği."
          }
        }
      ],
      "attractions": [
        {
          "id": "rom-1",
          "name": {
            "en": "The Pantheon & Piazza della Rotonda",
            "tr": "Panteon ve Piazza della Rotonda"
          },
          "category": "Architecture",
          "rating": 4.9,
          "reviewsCount": 5830,
          "costEstimate": {
            "en": "€5 (.40 USD)",
            "tr": "5 € (Yaklaşık 5.40 USD)"
          },
          "duration": {
            "en": "1 hour",
            "tr": "1 saat"
          },
          "bestHour": {
            "en": "12:00 PM noon when sunlight beams directly through the oculus",
            "tr": "Güneş ışığının tepe deliğinden içeri süzüldüğü 12:00 öğle saati"
          },
          "photoSpotTips": {
            "en": "Wide lens from the fountain capturing massive Corinthian portico with lively cafe tables.",
            "tr": "Meydandaki çeşmenin kenarından heybetli Korint sütunlarını kafelerle birlikte kadrajlayın."
          },
          "insiderSecret": {
            "en": "When it rains, water drains through 22 discreet micro-holes built into the marble floor 1,900 years ago.",
            "tr": "Yağmur yağdığında su, 1.900 yıl önce mermer zemine gizlenen 22 adet mikro drenaj deliğinden tahliye olur."
          },
          "image": "https://images.unsplash.com/photo-1542820229-081e0c12af0b?auto=format&fit=crop&w=800&q=80",
          "description": {
            "en": "World's largest unreinforced concrete dome, standing in pristine grandeur since 125 AD.",
            "tr": "MS 125 yılından bu yana bozulmadan ayakta duran dünyanın en büyük donatısız beton kubbesi."
          }
        }
      ],
      "miniItinerary": [
        {
          "day": 1,
          "title": {
            "en": "Emperors, Fountains & Roman Flavors",
            "tr": "İmparatorlar, Çeşmeler ve Roma Lezzetleri"
          },
          "morning": {
            "en": "Walk Palatine Hill pine groves before morning crowds hit Colosseum.",
            "tr": "Kolezyum kalabalığı oluşmadan önce Palatino Tepesi'nin çamları arasında yürüyüş."
          },
          "afternoon": {
            "en": "Stroll Campo de' Fiori, toss a coin into Trevi, and admire Pantheon.",
            "tr": "Campo de' Fiori pazarında gezinti, Trevi'ye para atma ve Panteon kubbesinin ihtişamı."
          },
          "evening": {
            "en": "Aperitivo in Piazza Navona followed by handmade cacio e pepe in Trastevere.",
            "tr": "Piazza Navona'da aperitivo ve Trastevere sokaklarında el yapımı Cacio e Pepe ziyafeti."
          }
        }
      ]
    },
    {
      "id": "paris-fr",
      "name": {
        "en": "Paris",
        "tr": "Paris"
      },
      "country": {
        "en": "France",
        "tr": "Fransa"
      },
      "region": "Europe",
      "flag": "🇫🇷",
      "tagline": {
        "en": "The City of Light where art, romance, and cafe culture form an enduring lifestyle",
        "tr": "Sanatın, romantizmin ve kafe kültürünün zamansız bir yaşam biçimine dönüştüğü Işık Şehri"
      },
      "heroImage": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
      "thumbnail": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
      "currency": {
        "code": "EUR",
        "symbol": "€",
        "rateToUSD": 1.08
      },
      "language": {
        "en": "French",
        "tr": "Fransızca"
      },
      "timeZone": "GMT+1",
      "costLevel": "9376$",
      "costIndex": 3,
      "bestTimeToVisit": {
        "en": "May - June & September - October",
        "tr": "Mayıs - Haziran & Eylül - Ekim"
      },
      "weather": {
        "summer": {
          "en": "18°C - 28°C (Long light evenings until 10 PM)",
          "tr": "18°C - 28°C (Saat 22:00'ye kadar süren uzun aydınlık akşamlar)"
        },
        "winter": {
          "en": "3°C - 8°C (Cozy bistros and winter lights)",
          "tr": "3°C - 8°C (Sıcak bistrolar ve ışıl ışıl sokaklar)"
        },
        "springFall": {
          "en": "12°C - 19°C (Chestnut trees in bloom)",
          "tr": "12°C - 19°C (Çiçek açan kestaneler ve ılık bahar havası)"
        }
      },
      "vibes": [
        "Romantic",
        "Art & Design",
        "Foodie Heaven",
        "Historic"
      ],
      "soundscape": "cafe_accordion",
      "culturalTip": {
        "en": "Always greet with a polite Bonjour Madame or Monsieur before ordering or asking questions.",
        "tr": "Bir dükkana veya kafeye girdiğinizde soru sormadan önce mutlaka nazik bir Bonjour ile selam verin."
      },
      "coordinates": {
        "lat": 48.8566,
        "lng": 2.3522
      },
      "localEats": [
        {
          "name": "Croissant au Beurre",
          "desc": {
            "en": "Flaky, golden 27-layer all-butter croissant from an artisan boulangerie.",
            "tr": "Geleneksel fırınlarda saf tereyağıyla 27 kat katmanlanan çıtır altın sarısı kruvasan."
          }
        }
      ],
      "attractions": [
        {
          "id": "par-1",
          "name": {
            "en": "Montmartre & Place du Tertre Secret Paths",
            "tr": "Montmartre Tepesi ve Gizli Sokaklar"
          },
          "category": "Romantic",
          "rating": 4.8,
          "reviewsCount": 5400,
          "costEstimate": {
            "en": "Free",
            "tr": "Ücretsiz"
          },
          "duration": {
            "en": "2.5 hours",
            "tr": "2,5 saat"
          },
          "bestHour": {
            "en": "08:00 AM before portrait artists set up",
            "tr": "Ressamlar tezgah açmadan önceki sabah saat 08:00"
          },
          "photoSpotTips": {
            "en": "Rue de l'Abreuvoir facing La Maison Rose in early morning light.",
            "tr": "Sabah ışığında pembe cepheli La Maison Rose'a bakan Rue de l'Abreuvoir sokağı."
          },
          "insiderSecret": {
            "en": "Behind Sacre-Coeur lies Clos Montmartre, an active hidden vineyard producing wine since 1933.",
            "tr": "Sacre-Coeur'ün hemen arkasında 1933'ten beri şarap üreten gizli bir bağ olan Clos Montmartre yer alır."
          },
          "image": "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=800&q=80",
          "description": {
            "en": "Bohemian hilltop where Picasso, Van Gogh, and Modigliani painted atop winding cobblestone stairs.",
            "tr": "Picasso, Van Gogh ve Modigliani'nin bir zamanlar atölye kurduğu Arnavut kaldırımlı bohem sanat tepesi."
          }
        }
      ],
      "miniItinerary": [
        {
          "day": 1,
          "title": {
            "en": "Left Bank Strolls & Impressionist Light",
            "tr": "Sol Yaka Yürüyüşleri ve Empresyonist Işık"
          },
          "morning": {
            "en": "Pain au chocolat in Marais followed by Shakespeare & Company browsing.",
            "tr": "Marais'de çikolatalı çörek ve tarihi Shakespeare & Company kitabevinde mola."
          },
          "afternoon": {
            "en": "Impressionist art at Musee d'Orsay and Luxembourg Gardens bench.",
            "tr": "Musee d'Orsay'de empresyonist eserler ve Lüksemburg Bahçeleri'nde dinlenme."
          },
          "evening": {
            "en": "Steak frites bistro dinner in Saint-Germain and sparkling Eiffel tower views.",
            "tr": "Saint-Germain'de bistro akşam yemeği ve Sen Nehri kıyısından Eyfel Kulesi'ni izleme."
          }
        }
      ]
    },
    {
      "id": "reykjavik-is",
      "name": {
        "en": "Reykjavik",
        "tr": "Reykjavik"
      },
      "country": {
        "en": "Iceland",
        "tr": "İzlanda"
      },
      "region": "Europe",
      "flag": "🇮🇸",
      "tagline": {
        "en": "A colorful Nordic outpost where glaciers, geysers, and auroras ignite the wilderness",
        "tr": "Buzulların, gayzerlerin ve kutup ışıklarının vahşi doğayı aydınlattığı rengarenk kuzey başkenti"
      },
      "heroImage": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80",
      "thumbnail": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80",
      "currency": {
        "code": "ISK",
        "symbol": "kr",
        "rateToUSD": 0.0073
      },
      "language": {
        "en": "Icelandic",
        "tr": "İzlandaca"
      },
      "timeZone": "GMT+0",
      "costLevel": "9376$",
      "costIndex": 3,
      "bestTimeToVisit": {
        "en": "June - Aug (Midnight Sun) & Sept - March (Northern Lights)",
        "tr": "Haziran - Ağustos (Gece Yarısı Güneşi) & Eylül - Mart (Kuzey Işıkları)"
      },
      "weather": {
        "summer": {
          "en": "10°C - 15°C (24h daylight, vibrant mosses)",
          "tr": "10°C - 15°C (24 saat gün ışığı, canlı yosunlar)"
        },
        "winter": {
          "en": "-2°C - 4°C (Snowy wonderland, aurora activity)",
          "tr": "-2°C - 4°C (Kar manzaraları ve kuzey ışıkları)"
        },
        "springFall": {
          "en": "4°C - 9°C (Dramatic sky shifts)",
          "tr": "4°C - 9°C (Dramatik gökyüzü renkleri)"
        }
      },
      "vibes": [
        "Zen & Nature",
        "Adventure",
        "Art & Design"
      ],
      "soundscape": "arctic_wind",
      "culturalTip": {
        "en": "Showering thoroughly before entering geothermal sundlaugar pools is strictly followed.",
        "tr": "Termal havuzlara (sundlaugar) girmeden önce sabunla iyice yıkanmak titizlikle uygulanan bir kuraldır."
      },
      "coordinates": {
        "lat": 64.1466,
        "lng": -21.9426
      },
      "localEats": [
        {
          "name": "Kjotsupa (Lamb Soup)",
          "desc": {
            "en": "Hearty broth slow simmered with free-roaming mountain lamb and root vegetables.",
            "tr": "Dağlarda otlayan İzlanda kuzusu ve kök sebzelerle saatlerce demlenen sıcacık şifalı çorba."
          }
        }
      ],
      "attractions": [
        {
          "id": "rey-1",
          "name": {
            "en": "Sky Lagoon Ocean Geothermal Bath",
            "tr": "Sky Lagoon Okyanus Jeotermal Lagünü"
          },
          "category": "Zen & Nature",
          "rating": 4.9,
          "reviewsCount": 2740,
          "costEstimate": {
            "en": "9,990 ISK ( USD)",
            "tr": "9.990 ISK (Yaklaşık 72 USD)"
          },
          "duration": {
            "en": "3 hours",
            "tr": "3 saat"
          },
          "bestHour": {
            "en": "Sunset into twilight for aurora viewing from warm waters",
            "tr": "Sıcak suların içinden kuzey ışıklarını izlemek için gün batımı"
          },
          "photoSpotTips": {
            "en": "The 70m infinity edge looking straight into the North Atlantic ocean.",
            "tr": "Doğrudan Kuzey Atlantik Okyanusu'na uzanan 70 metrelik sonsuzluk havuzu kenarı."
          },
          "insiderSecret": {
            "en": "Experience the 7-step ritual combining cold plunge, panoramic sauna, and sea salt scrub.",
            "tr": "Soğuk şok, panoramik sauna ve deniz tuzu peelingini birleştiren 7 adımlı İzlanda ritüelini deneyin."
          },
          "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
          "description": {
            "en": "Ocean-edge geothermal infinity pool nestled inside turf walls honoring Icelandic traditions.",
            "tr": "Kadim İzlanda geleneklerine saygı duruşunda bulunan, okyanus kenarındaki jeotermal sonsuzluk havuzu."
          }
        }
      ],
      "miniItinerary": [
        {
          "day": 1,
          "title": {
            "en": "Fire, Ice & Geothermal Tranquility",
            "tr": "Ateş, Buz ve Jeotermal Dinginlik"
          },
          "morning": {
            "en": "Climb Hallgrimskirkja tower and explore rainbow street boutiques.",
            "tr": "Hallgrimskirkja kulesinden şehri seyredip gökkuşağı sokağındaki butikleri gezme."
          },
          "afternoon": {
            "en": "Harpa Concert Hall glass facade and harbor fish and chips.",
            "tr": "Harpa Konser Salonu'nun prizmatik cam mimarisi ve limanda taze balık molası."
          },
          "evening": {
            "en": "Soaking in ocean geothermal springs while scanning for aurora borealis.",
            "tr": "Okyanus kenarındaki sıcacık jeotermal lagünde kuzey ışıklarını izleme."
          }
        }
      ]
    },
    {
      "id": "marrakech-ma",
      "name": {
        "en": "Marrakech",
        "tr": "Marakeş"
      },
      "country": {
        "en": "Morocco",
        "tr": "Fas"
      },
      "region": "Africa",
      "flag": "🇲🇦",
      "tagline": {
        "en": "The Ochre Oasis of spiced labyrinthine medinas, tranquil riads, and Atlas peaks",
        "tr": "Baharat kokulu labirent medinaların, huzurlu riadların ve Atlas Dağları'nın Kızıl Vahası"
      },
      "heroImage": "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1600&q=80",
      "thumbnail": "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=600&q=80",
      "currency": {
        "code": "MAD",
        "symbol": "DH",
        "rateToUSD": 0.1
      },
      "language": {
        "en": "Arabic & Berber",
        "tr": "Arapça & Berberi Dili"
      },
      "timeZone": "GMT+1",
      "costLevel": "$",
      "costIndex": 1,
      "bestTimeToVisit": {
        "en": "October - April",
        "tr": "Ekim - Nisan"
      },
      "weather": {
        "summer": {
          "en": "24°C - 38°C (Dry desert heat, riads are cool)",
          "tr": "24°C - 38°C (Kuru çöl sıcağı; riad avluları serindir)"
        },
        "winter": {
          "en": "7°C - 19°C (Snowcapped High Atlas peaks in backdrop)",
          "tr": "7°C - 19°C (Arka planda karlı Atlas zirveleri)"
        },
        "springFall": {
          "en": "16°C - 27°C (Ideal climate)",
          "tr": "16°C - 27°C (Gezmek için en ideal sıcaklık)"
        }
      },
      "vibes": [
        "Historic",
        "Foodie Heaven",
        "Art & Design",
        "Adventure"
      ],
      "soundscape": "desert_caravan",
      "culturalTip": {
        "en": "Mint tea is the ultimate gesture of hospitality; accept with right hand and savor the high pour.",
        "tr": "Nane çayı Fas misafirperverliğinin simgesidir; bardağı sağ elinizle kabul edin ve köpüğüyle için."
      },
      "coordinates": {
        "lat": 31.6295,
        "lng": -7.9811
      },
      "localEats": [
        {
          "name": "Tajine with Prunes",
          "desc": {
            "en": "Slow-braised lamb in earthenware dish with saffron and prunes.",
            "tr": "Toprak kapta safran ve karamelize kuru erikle pişen kuzu tajin."
          }
        }
      ],
      "attractions": [
        {
          "id": "mar-1",
          "name": {
            "en": "Jardin Majorelle & YSL Museum",
            "tr": "Majorelle Bahçesi ve YSL Müzesi"
          },
          "category": "Art & Design",
          "rating": 4.8,
          "reviewsCount": 4900,
          "costEstimate": {
            "en": "150 MAD ( USD)",
            "tr": "150 MAD (Yaklaşık 15 USD)"
          },
          "duration": {
            "en": "2 hours",
            "tr": "2 saat"
          },
          "bestHour": {
            "en": "09:00 AM opening time",
            "tr": "Sabah 09:00 açılış saati"
          },
          "photoSpotTips": {
            "en": "Cobalt Majorelle Blue villa contrasted against giant cacti.",
            "tr": "Kobalt mavi villa duvarları ile devasa kaktüslerin oluşturduğu renk kontrastı."
          },
          "insiderSecret": {
            "en": "Saint Laurent's ashes were scattered in this botanical garden.",
            "tr": "Yves Saint Laurent bu bahçeyi kurtarmak için satın almış ve külleri buraya serpilmiştir."
          },
          "image": "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80",
          "description": {
            "en": "Botanical sanctuary vibrant with cobalt blue architecture and desert flora.",
            "tr": "Kobalt mavisi villası ve egzotik çöl bitkileriyle göz kamaştıran masalsı botanik vaha."
          }
        }
      ],
      "miniItinerary": [
        {
          "day": 1,
          "title": {
            "en": "Cobalt Hues, Spices & Medina Rhythms",
            "tr": "Kobalt Mavisi, Baharatlar ve Medina Ritimleri"
          },
          "morning": {
            "en": "Morning wander through cobalt walls of Jardin Majorelle.",
            "tr": "Majorelle Bahçesi'nin bambu yollarında sabah dinginliği."
          },
          "afternoon": {
            "en": "Cedar carvings at Ben Youssef Medersa.",
            "tr": "Ben Youssef Medresesi'nin büyüleyici sedir oymaları arasında keşif."
          },
          "evening": {
            "en": "Sunset mint tea overlooking Jemaa el-Fnaa square.",
            "tr": "Jemaa el-Fnaa meydanına bakan terasta gün batımı nane çayı."
          }
        }
      ]
    },
    {
      "id": "cape-town-za",
      "name": {
        "en": "Cape Town",
        "tr": "Cape Town"
      },
      "country": {
        "en": "South Africa",
        "tr": "Güney Afrika"
      },
      "region": "Africa",
      "flag": "🇿🇦",
      "tagline": {
        "en": "Where towering sandstone peaks crash into two dramatic oceans",
        "tr": "Görkemli kumtaşı zirvelerinin iki vahşi okyanusla buluştuğu doğa harikası"
      },
      "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1600&q=80",
      "thumbnail": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80",
      "currency": {
        "code": "ZAR",
        "symbol": "R",
        "rateToUSD": 0.055
      },
      "language": {
        "en": "English & Afrikaans",
        "tr": "İngilizce & Afrikaans"
      },
      "timeZone": "GMT+2",
      "costLevel": "$",
      "costIndex": 1,
      "bestTimeToVisit": {
        "en": "November - March",
        "tr": "Kasım - Mart"
      },
      "weather": {
        "summer": {
          "en": "20°C - 29°C (Breezy, sunny beaches)",
          "tr": "20°C - 29°C (Rüzgarlı, sıcak plaj havası)"
        },
        "winter": {
          "en": "10°C - 18°C (Green vineyards, wine firesides)",
          "tr": "10°C - 18°C (Yemyeşil üzüm bağları ve şömineler)"
        },
        "springFall": {
          "en": "15°C - 24°C (Whale watching season)",
          "tr": "15°C - 24°C (Balina gözlem mevsimi)"
        }
      },
      "vibes": [
        "Adventure",
        "Zen & Nature",
        "Foodie Heaven",
        "Romantic"
      ],
      "soundscape": "ocean_coastline",
      "culturalTip": {
        "en": "A friendly Howzit is standard greeting; check beach flags before swimming.",
        "tr": "Yaygın selamlaşma Howzit kelimesidir; yüzmeden önce plajdaki cankurtaran bayraklarını kontrol edin."
      },
      "coordinates": {
        "lat": -33.9249,
        "lng": 18.4241
      },
      "localEats": [
        {
          "name": "Cape Malay Bobotie",
          "desc": {
            "en": "Curried minced meat baked with egg custard, yellow rice and chutney.",
            "tr": "Baharatlı kıyma üzerine yumurtalı krema fırınlanarak yapılan Güney Afrika klasiği."
          }
        }
      ],
      "attractions": [
        {
          "id": "cpt-1",
          "name": {
            "en": "Table Mountain Cableway",
            "tr": "Masa Dağı ve Döner Teleferik"
          },
          "category": "Adventure",
          "rating": 4.9,
          "reviewsCount": 5100,
          "costEstimate": {
            "en": "R420 ( USD)",
            "tr": "420 R (Yaklaşık 23 USD)"
          },
          "duration": {
            "en": "3 hours",
            "tr": "3 saat"
          },
          "bestHour": {
            "en": "Late afternoon to catch sunset across Camps Bay",
            "tr": "Camps Bay üzerinden gün batımını izlemek için ikindi vakti"
          },
          "photoSpotTips": {
            "en": "Summit ledge looking at Twelve Apostles with tablecloth clouds cascading.",
            "tr": "Zirve kenarından On İki Havariler zirvelerine ve Masa Örtüsü bulutlarına bakan açı."
          },
          "insiderSecret": {
            "en": "The rotating cable car floor spins 360 degrees on ascent for panoramic views.",
            "tr": "Teleferiğin tabanı çıkışta 360 derece döner, böylece herkes kesintisiz manzara izler."
          },
          "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
          "description": {
            "en": "A flat-topped landmark older than the Himalayas with over 2,200 endemic flora species.",
            "tr": "Himalayalar'dan daha yaşlı, 2.200'den fazla endemik çiçek türüne ev sahipliği yapan doğa harikası."
          }
        }
      ],
      "miniItinerary": [
        {
          "day": 1,
          "title": {
            "en": "Ocean Horizons & Summit Sunsets",
            "tr": "Okyanus Ufukları ve Zirve Gün Batımı"
          },
          "morning": {
            "en": "Morning coffee in Bo-Kaap neighborhood.",
            "tr": "Rengarenk Bo-Kaap sokaklarında sabah kahvesi."
          },
          "afternoon": {
            "en": "Scenic coastal drive along Chapman's Peak to Boulders penguins.",
            "tr": "Chapman's Peak sahil yolundan Simon's Town penguenlerine doğru sürüş."
          },
          "evening": {
            "en": "Cableway up Table Mountain for sundowners watching Atlantic turn gold.",
            "tr": "Masa Dağı'na teleferikle çıkış ve Atlantik'in altın rengine bürünüşünü izleme."
          }
        }
      ]
    },
    {
      "id": "bangkok-th",
      "name": {
        "en": "Bangkok",
        "tr": "Bangkok"
      },
      "country": {
        "en": "Thailand",
        "tr": "Tayland"
      },
      "region": "Asia",
      "flag": "🇹🇭",
      "tagline": {
        "en": "A sensory whirlpool of shimmering gilded spires, floating canals, and legendary street food",
        "tr": "Altın kulelerin, yüzen kanalların ve efsanevi sokak lezzetlerinin duyusal girdabı"
      },
      "heroImage": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
      "thumbnail": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80",
      "currency": {
        "code": "THB",
        "symbol": "฿",
        "rateToUSD": 0.028
      },
      "language": {
        "en": "Thai",
        "tr": "Tayca"
      },
      "timeZone": "GMT+7",
      "costLevel": "$",
      "costIndex": 1,
      "bestTimeToVisit": {
        "en": "November - February",
        "tr": "Kasım - Şubat"
      },
      "weather": {
        "summer": {
          "en": "28°C - 35°C (Warm tropical days with monsoons)",
          "tr": "28°C - 35°C (Tropikal sıcaklık ve muson yağmurları)"
        },
        "winter": {
          "en": "22°C - 31°C (Gentle breezes, peak comfort)",
          "tr": "22°C - 31°C (Ilık meltemler, en konforlu seyahat dönemi)"
        },
        "springFall": {
          "en": "27°C - 34°C (Hot season)",
          "tr": "27°C - 34°C (Sıcak tropik günler)"
        }
      },
      "vibes": [
        "Foodie Heaven",
        "Historic",
        "Nightlife",
        "Adventure"
      ],
      "soundscape": "tropical_stream",
      "culturalTip": {
        "en": "Dress respectfully in temples: shoulders and knees covered, shoes removed.",
        "tr": "Tapınaklara girerken omuz ve dizler örtülü olmalı, ayakkabılar çıkarılmalıdır."
      },
      "coordinates": {
        "lat": 13.7563,
        "lng": 100.5018
      },
      "localEats": [
        {
          "name": "Tom Yum Goong",
          "desc": {
            "en": "Hot & sour broth with lemongrass, kaffir lime, and river prawns.",
            "tr": "Limon otu, misket limonu yaprağı ve tatlı su karidesli acı-ekşi şölen çorbası."
          }
        }
      ],
      "attractions": [
        {
          "id": "bgk-1",
          "name": {
            "en": "Wat Arun (Temple of Dawn)",
            "tr": "Wat Arun (Şafak Tapınağı)"
          },
          "category": "Historic",
          "rating": 4.8,
          "reviewsCount": 5120,
          "costEstimate": {
            "en": "100 THB (.80 USD)",
            "tr": "100 THB (Yaklaşık 2.80 USD)"
          },
          "duration": {
            "en": "1.5 hours",
            "tr": "1,5 saat"
          },
          "bestHour": {
            "en": "Sunset from across Chao Phraya river",
            "tr": "Chao Phraya Nehri karşısından gün batımı"
          },
          "photoSpotTips": {
            "en": "Porcelain mosaic prang catching evening golden rays.",
            "tr": "Porselen mozaik kulelerin batan güneş ışığını yakaladığı an."
          },
          "insiderSecret": {
            "en": "Mosaic tiles were made from recycled Chinese porcelain ballast from merchant ships.",
            "tr": "Mozaikler ticaret gemilerinin safrada kullandığı kırık Çin porselenlerinden yapılmıştır."
          },
          "image": "https://images.unsplash.com/photo-1563492065599-3580f775dce4?auto=format&fit=crop&w=800&q=80",
          "description": {
            "en": "Architectural jewel on Chao Phraya river decorated with colorful porcelain.",
            "tr": "Chao Phraya Nehri kıyısında binlerce renkli porselen parçasıyla süslenmiş mimari şaheser."
          }
        }
      ],
      "miniItinerary": [
        {
          "day": 1,
          "title": {
            "en": "Gilded Spires & Flaming Woks",
            "tr": "Altın Kuleler ve Alev Alev Woklar"
          },
          "morning": {
            "en": "Grand Palace and Wat Pho reclining Buddha statue.",
            "tr": "Büyük Saray ve Wat Pho'nun devasa yatan Buda heykeli ziyareti."
          },
          "afternoon": {
            "en": "Cross river to climb Wat Arun staircases with Thai milk tea.",
            "tr": "Nehri geçerek Wat Arun merdivenlerini tırmanma ve buzlu Tay sütlü çayı."
          },
          "evening": {
            "en": "Yaowarat Chinatown street food feast and coconut ice cream.",
            "tr": "Çin Mahallesi'nde sokak lezzetleri ve hindistancevizi dondurması."
          }
        }
      ]
    },
    {
      "id": "sydney-au",
      "name": {
        "en": "Sydney",
        "tr": "Sidney"
      },
      "country": {
        "en": "Australia",
        "tr": "Avustralya"
      },
      "region": "Oceania",
      "flag": "🇦🇺",
      "tagline": {
        "en": "Golden Pacific beaches wrapping around the world's most glamorous natural harbor",
        "tr": "Dünyanın en göz alıcı doğal limanını çevreleyen altın rengi Pasifik plajları"
      },
      "heroImage": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80",
      "thumbnail": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80",
      "currency": {
        "code": "AUD",
        "symbol": "$",
        "rateToUSD": 0.65
      },
      "language": {
        "en": "English",
        "tr": "İngilizce"
      },
      "timeZone": "GMT+10",
      "costLevel": "9376$",
      "costIndex": 3,
      "bestTimeToVisit": {
        "en": "September - November & March - May",
        "tr": "Eylül - Kasım & Mart - Mayıs"
      },
      "weather": {
        "summer": {
          "en": "20°C - 28°C (Sun, surf, harbor barbecues)",
          "tr": "20°C - 28°C (Güneş, sörf, liman barbeküleri)"
        },
        "winter": {
          "en": "9°C - 17°C (Crisp sunny blue skies, whale migration)",
          "tr": "9°C - 17°C (Masmavi açık gökyüzü, balina göçü)"
        },
        "springFall": {
          "en": "15°C - 23°C (Gentle ocean breezes)",
          "tr": "15°C - 23°C (Ilık okyanus meltemleri)"
        }
      },
      "vibes": [
        "Adventure",
        "Zen & Nature",
        "Art & Design",
        "Romantic"
      ],
      "soundscape": "ocean_coastline",
      "culturalTip": {
        "en": "Swim strictly between the red and yellow flags where surf lifesavers patrol.",
        "tr": "Plajlarda mutlaka cankurtaranların devriye gezdiği kırmızı-sarı bayraklar arasında yüzün."
      },
      "coordinates": {
        "lat": -33.8688,
        "lng": 151.2093
      },
      "localEats": [
        {
          "name": "Sydney Rock Oysters",
          "desc": {
            "en": "Freshly shucked creamy native oysters on ice with lemon.",
            "tr": "Buz üzerinde limon eşliğinde servis edilen taze açılmış kremamsı yerel istiridyeler."
          }
        }
      ],
      "attractions": [
        {
          "id": "syd-1",
          "name": {
            "en": "Sydney Opera House & Botanic Garden",
            "tr": "Sidney Opera Binası ve Botanik Bahçe"
          },
          "category": "Architecture",
          "rating": 4.9,
          "reviewsCount": 6800,
          "costEstimate": {
            "en": "Free outside, AUD  tour",
            "tr": "Dışarısı ücretsiz, AUD  tur"
          },
          "duration": {
            "en": "2.5 hours",
            "tr": "2,5 saat"
          },
          "bestHour": {
            "en": "Golden hour from Mrs Macquarie's Chair",
            "tr": "Mrs Macquarie's Chair noktasından altın gün batımı"
          },
          "photoSpotTips": {
            "en": "Frames both Opera House sails and Harbour Bridge together.",
            "tr": "Hem Opera yelkenlerini hem de Liman Köprüsünü tek kadrajda birleştirir."
          },
          "insiderSecret": {
            "en": "Over 1,056,006 Swedish self-cleaning ceramic tiles cover the roof sails.",
            "tr": "Çatı yelkenlerini kendi kendini temizleyen 1 milyondan fazla İsveç seramik karosu kaplar."
          },
          "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
          "description": {
            "en": "20th-century architectural masterpiece resembling billowed white sails over azure waters.",
            "tr": "Masmavi sular üzerinde rüzgarla dolmuş beyaz yelkenleri andıran 20. yüzyıl mimari şaheseri."
          }
        }
      ],
      "miniItinerary": [
        {
          "day": 1,
          "title": {
            "en": "Harbour Sails & Pacific Clifftops",
            "tr": "Liman Yelkenleri ve Pasifik Falezleri"
          },
          "morning": {
            "en": "Bondi to Bronte coastal cliff walk with morning ocean swell.",
            "tr": "Sabah dalgaları eşliğinde Bondi'den Bronte'ye uzanan falez yürüyüşü."
          },
          "afternoon": {
            "en": "Circular Quay ferry across harbor past Opera House to Manly beach.",
            "tr": "Opera Binası'nın önünden Manly plajına doğru ikonik liman vapuru yolculuğu."
          },
          "evening": {
            "en": "Sunset drinks at Opera Bar with live acoustic music.",
            "tr": "Opera Bar'da canlı akustik müzik eşliğinde gün batımı."
          }
        }
      ]
    },
    {
      "id": "tromso-no",
      "name": {
        "en": "Tromso",
        "tr": "Tromsø"
      },
      "country": {
        "en": "Norway",
        "tr": "Norveç"
      },
      "region": "Europe",
      "flag": "🇳🇴",
      "tagline": {
        "en": "The Arctic Gateway of crystalline fjords, reindeer sleds, and dancing aurora skies",
        "tr": "Kristal fiyortların, ren geyiği kızaklarının ve dans eden kuzey ışıklarının Arktik Kapısı"
      },
      "heroImage": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1600&q=80",
      "thumbnail": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80",
      "currency": {
        "code": "NOK",
        "symbol": "kr",
        "rateToUSD": 0.092
      },
      "language": {
        "en": "Norwegian & Sami",
        "tr": "Norveççe & Laponca"
      },
      "timeZone": "GMT+1",
      "costLevel": "9376$",
      "costIndex": 3,
      "bestTimeToVisit": {
        "en": "September - March (Aurora) & June - July (Midnight Sun)",
        "tr": "Eylül - Mart (Kutup Işıkları) & Haziran - Temmuz (Gece Yarısı Güneşi)"
      },
      "weather": {
        "summer": {
          "en": "10°C - 17°C (Midnight sun 24h, hiking trails)",
          "tr": "10°C - 17°C (24 saat gün ışığı, doğa yürüyüşleri)"
        },
        "winter": {
          "en": "-4°C - 1°C (Mild for 69° North due to Gulf Stream)",
          "tr": "-4°C - 1°C (Gulf Stream sayesinde 69° Kuzey için şaşırtıcı ılımanlık)"
        },
        "springFall": {
          "en": "3°C - 9°C (Autumn tundra foliage)",
          "tr": "3°C - 9°C (Renkli tundra sonbaharı)"
        }
      },
      "vibes": [
        "Adventure",
        "Zen & Nature",
        "Romantic"
      ],
      "soundscape": "arctic_wind",
      "culturalTip": {
        "en": "Embrace Friluftsliv (open-air living); dress in pure wool base layers with windproof shell.",
        "tr": "Norveçlilerin açık hava yaşam felsefesi Friluftsliv'i benimseyin; saf yün içlikler tercih edin."
      },
      "coordinates": {
        "lat": 69.6492,
        "lng": 18.9553
      },
      "localEats": [
        {
          "name": "Arctic Char with Dill",
          "desc": {
            "en": "Cold-water salmonid pan-roasted with fingerling potatoes.",
            "tr": "Soğuk sularda yetişen taze alabalığın dereotu ve patatesle tavada pişirilmiş lezzeti."
          }
        }
      ],
      "attractions": [
        {
          "id": "tro-1",
          "name": {
            "en": "Fjellheisen Cable Car Viewpoint",
            "tr": "Fjellheisen Teleferiği & Seyir Terası"
          },
          "category": "Zen & Nature",
          "rating": 4.9,
          "reviewsCount": 2600,
          "costEstimate": {
            "en": "395 NOK ( USD)",
            "tr": "395 NOK (Yaklaşık 36 USD)"
          },
          "duration": {
            "en": "2.5 hours",
            "tr": "2,5 saat"
          },
          "bestHour": {
            "en": "10:00 PM in winter for dancing auroras",
            "tr": "Kış aylarında gökyüzünde dans eden ışıklar için 22:00"
          },
          "photoSpotTips": {
            "en": "Wooden deck 421m above sea level looking down at Tromso island bridge.",
            "tr": "Denizden 421m yükseklikteki ahşap terastan ada köprüsünü ve fiyordu kadrajlayın."
          },
          "insiderSecret": {
            "en": "Rent snowshoes from mountain station in winter to hike into quiet plateau away from deck lights.",
            "tr": "Işıklardan uzaklaşıp derin sessizlikte aurora izlemek için zirve istasyonundan kar ayakkabısı kiralayın."
          },
          "image": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
          "description": {
            "en": "Cableway ascending 421m providing sweeping vistas of snowy fjords and auroras.",
            "tr": "421 metreye tırmanarak karlı fiyortların ve kutup ışıklarının eşsiz manzarasını sunan teleferik."
          }
        }
      ],
      "miniItinerary": [
        {
          "day": 1,
          "title": {
            "en": "Glacial Vistas & Aurora Hunting",
            "tr": "Buzul Manzaraları ve Kutup Işığı Avı"
          },
          "morning": {
            "en": "Polar Museum expedition history and coffee in 19th-century wooden warehouse.",
            "tr": "Kutup Müzesi keşif tarihi ve 19. yüzyıl ahşap deposunda kahve keyfi."
          },
          "afternoon": {
            "en": "Fjellheisen cable car up Storsteinen mountain for snowshoeing.",
            "tr": "Fjellheisen teleferiğiyle dağa çıkış ve karda yürüyüş."
          },
          "evening": {
            "en": "Warm stew in Sami lavvu tent followed by chasing auroras across dark fjords.",
            "tr": "Geleneksel lavvu çadırında sıcacık güveç ve fiyortlarda kutup ışığı avı."
          }
        }
      ]
    }
  ]
};

const APP_STATE = {
  lang: localStorage.getItem('terranova_lang') || 'tr',
  destinations: STATIC_DATA_FALLBACK.destinations || [],
  filteredDestinations: [],
  activeRegion: 'All',
  activeVibe: 'All',
  activeCost: 'All',
  searchQuery: '',
  sortOrder: 'featured',
  viewMode: 'grid',
  theme: localStorage.getItem('terranova_theme') || 'aurora',
  activeCityId: null,
  activeAttractionId: null,
  activeModalTab: 'overview',
  
  vault: {
    cities: [],
    attractions: [],
    visitedAttractions: [],
    packingList: []
  },
  
  audio: {
    ctx: null,
    isPlaying: false,
    currentTrack: null,
    masterGain: null,
    volume: 0.5,
    nodes: []
  }
};

// =============================================================================
// 2. COMPREHENSIVE BILINGUAL TRANSLATION DICTIONARY
// =============================================================================
const I18N = {
  tr: {
    pageTitle: "TerraNova — İnteraktif Küresel Şehir Seyahat Rehberi & Rota Planlayıcı",
    pageDesc: "Yerel sırlar, 48 saatlik gezi planları, sentezlenmiş ses manzaraları ve seyahat bütçe simülatörüyle dünya şehirlerini keşfedin.",
    skipLink: "Ana içeriğe atla",
    brandTagline: "Küresel Seyahat Rehberi",
    searchPlaceholder: "Şehir, gezi noktası, atmosfer, ülke ara... (Odaklanmak için '/' tuşuna basın)",
    soundscapeBtn: "Ses",
    surpriseMeBtn: "Beni Şaşırt",
    budgetBtn: "Bütçe",
    vaultBtn: "Kasam",
    ambientSynthesizer: "Atmosferik Sentezleyici",
    tokyoNeonRain: "Tokyo Neon Yağmuru",
    tokyoNeonRainSub: "Yağmur damlaları ve derinden gelen şehir uğultusu",
    kyotoZenGarden: "Kyoto Zen Bahçesi",
    kyotoZenGardenSub: "Bambu esintisi ve meditasyon çanları",
    mediterraneanWaves: "Akdeniz Dalgaları",
    mediterraneanWavesSub: "Kıyıya vuran huzurlu dalga sesleri",
    arcticAuroraWhisper: "Kutup Işıkları Fısıltısı",
    arcticAuroraWhisperSub: "Buzul rüzgarları ve dingin kutup gecesi",
    
    // Hero
    heroBadge: "Küresel Keşif & Seyahat Rehberi v3.0",
    heroTitlePrefix: "Dünya Şehirlerinin Ruhunu",
    heroSubtext: "Klasik turist rotalarının ötesine geçin. 5 kıtada yerel halkın sırlarını, 48 saatlik gezi planlarını, sentezlenmiş ses manzaralarını ve hesaplanmış seyahat bütçelerini keşfedin.",
    pickTravelMood: "Bir seyahat modu seçin:",
    iconicCities: "İkonik Şehir",
    curatedSpots: "Özel Gezi Noktası",
    insiderTipsMetric: "Yerel İpucu",
    bilingualSupportMetric: "Çift Dil Desteği",
    
    // Vibes
    vibeFoodie: "Gastronomi",
    vibeZen: "Huzur & Doğa",
    vibeCyber: "Siberpunk",
    vibeHistoric: "Tarih",
    vibeRomantic: "Romantik",
    vibeAdventure: "Macera",
    vibeArt: "Sanat & Tasarım",
    vibeNightlife: "Gece Hayatı",
    allVibes: "Tüm Atmosferler",
    
    // Regions
    allContinents: "Tüm Kıtalar",
    europe: "Avrupa",
    asia: "Asya",
    americas: "Amerika",
    africa: "Afrika",
    oceania: "Okyanusya",
    
    // Filters & Sort
    vibeLabel: "Atmosfer:",
    budgetLabel: "Bütçe:",
    sortLabel: "Sırala:",
    anyBudget: "Tüm Seviyeler",
    budgetFriendly: "$ Ekonomik Gezgin",
    moderate: "$$ Dengeli Bütçe",
    luxuryTier: "$$$ Lüks / Premium",
    sortFeatured: "Öne Çıkan Rotalar",
    sortRating: "En Yüksek Puanlılar",
    sortName: "Şehir Adı (A-Z)",
    sortCostLow: "Bütçe (Düşükten Yükseğe)",
    sortCostHigh: "Bütçe (Yüksekten Düşüğe)",
    activeFilters: "Aktif Filtreler:",
    resetAll: "Tümünü Sıfırla",
    
    // Section Header & Grid
    sectionTitle: "Küresel Keşif Portfolyoları",
    showingDestinations: (n) => `${n} rota listeleniyor`,
    showingAll: "Kayıtlı tüm rotalar gösteriliyor",
    exploreCity: "Şehri Keşfet",
    spotsCount: (n) => `${n} Nokta`,
    audioActive: "Ses",
    audioNone: "Yok",
    noDestinationsFound: "Sonuç bulunamadı",
    noDestinationsSub: "Seçtiğiniz kıta, atmosfer veya bütçe kriterlerine uygun şehir bulunamadı.",
    clearFiltersShowAll: "Filtreleri Temizle ve Hepsini Göster",
    
    // City Deep Dive Modal
    tabOverview: "Genel Bakış & Kültür",
    tabAttractions: (n) => `Gezilecek Yerler (${n})`,
    tabItinerary: "48 Saatlik Gezi Planı",
    tabFood: "İmza Lezzetler",
    bestSeason: "En İyi Sezon",
    currencyAndCost: "Para Birimi & Maliyet",
    primaryLanguage: "Konuşulan Dil",
    timeZone: "Saat Dilimi",
    localEtiquetteSecret: "Yerel Görgü Kuralları & Kültürel Sır",
    climateGuide: "Mevsimlik İklim Rehberi",
    summer: "Yaz",
    winter: "Kış",
    springFall: "İlkbahar / Sonbahar",
    audioAvailable: "Atmosferik Ses Mevcut",
    listenSoundsOf: (city) => `${city} şehrinin sentezlenmiş atmosfer seslerini dinleyin.`,
    playSoundscape: "Sesleri Çal",
    saveToVault: "Kasaya Kaydet",
    saved: "Kaydedildi",
    dossier: "Detaylar",
    reviews: "değerlendirme",
    duration: "Süre",
    cost: "Maliyet",
    insiderSecretTitle: "Yerel Sır:",
    bestVisitWindow: "En İdeal Ziyaret Saati:",
    idealPhotoSpot: "İdeal Fotoğraf Noktası & Açı",
    curatorInsiderTip: "Küratörün Yerel İpucu",
    gastronomicTitle: "Gastronomi Keşifleri",
    gastronomicSub: (city) => `${city} mutfağının kalbini oluşturan ikonik yöresel lezzetler.`,
    morning: "Sabah",
    afternoon: "Öğleden Sonra",
    evening: "Akşam",
    day: "Gün",
    
    // Destiny Roulette
    destinyWheel: "Kader Çarkı",
    rouletteHeadline: "Rüzgar Sizi Nereye Götürecek?",
    rouletteSub: "Bir sonraki unutulmaz seyahatinizi belirlemek için gezgin kader çarkını çevirin.",
    readyToRoll: "Hazır mısınız?",
    clickSpinStart: "Çarkı başlatmak için Çevir butonuna tıklayın",
    spinDestinyWheel: "Kader Çarkını Çevir",
    spinAgain: "Tekrar Çevir",
    spinningDestiny: "Kader Belirleniyor...",
    exploreChosenCity: "Seçilen Şehri Keşfet",
    destinySpoken: (city) => `Kaderiniz belirlendi: ${city}!`,
    
    // Budget Simulator
    budgetSimulatorBadge: "Bütçe Simülatörü",
    budgetSimulatorTitle: "Etkileşimli Seyahat Bütçe Simülatörü",
    budgetSimulatorSub: "Şehrin maliyet endeksine ve seyahat tarzınıza göre tahmini harcamalarınızı simüle edin.",
    destinationCity: "Hedef Şehir",
    travelStyleTier: "Seyahat Tarzı",
    backpacker: "Sırt Çantalı",
    backpackerSub: "Hosteller ve sokak lezzetleri",
    balanced: "Dengeli",
    balancedSub: "Butik oteller ve yerel lezzetler",
    luxury: "Lüks",
    luxurySub: "5 yıldızlı oteller & gurme restoranlar",
    durationDays: "Süre (Gün)",
    daysCount: (n) => `${n} Gün`,
    travelers: "Gezgin Sayısı",
    travelersCount: (n) => `${n} Kişi`,
    estimatedTotalOutlay: "Tahmini Toplam Harcama",
    lodgingAndStays: "Konaklama",
    diningAndDrinks: "Yeme & İçme",
    sightseeingAndGuides: "Geziler & Girişler",
    transitAndRail: "Ulaşım",
    
    // Vault
    myTravelVault: "Seyahat Kasam",
    vaultSubtitle: "Çevrimdışı Planlayıcı & Yer İmleri",
    savedCitiesTab: "Kayıtlı Şehirler",
    attractionsTab: "Gezilecek Yerler",
    packingAndNotesTab: "Bavul & Notlar",
    noCitiesSaved: "Henüz Kayıtlı Şehir Yok",
    noCitiesSavedSub: "Hayalinizdeki rotaları buraya sabitlemek için şehir kartlarındaki yer imi simgesine tıklayın.",
    noAttractionsSaved: "Kayıtlı Gezi Noktası Yok",
    noAttractionsSavedSub: "Şehir rehberlerinden görülmesi gereken tapınakları, müzeleri ve gizli noktaları kaydedin.",
    addGearOrNotePlaceholder: "Eşya veya not ekle (örn. Güneş kremi, Evrensel priz dönüştürücü)...",
    addBtn: "Ekle",
    exportPrintBtn: "Gezi Planını Yazdır / Dışa Aktar",
    clearAllSaved: "Tüm Kayıtları Temizle",
    viewBtn: "İncele",
    
    // Toast Messages
    toastLangSwitched: "Dil Türkçe olarak ayarlandı 🇹🇷",
    toastCitySaved: "Şehir seyahat kasasına kaydedildi!",
    toastCityRemoved: "Şehir seyahat kasasından kaldırıldı.",
    toastAttractionSaved: "Gezi noktası kasaya eklendi!",
    toastAttractionRemoved: "Gezi noktası kasadan kaldırıldı.",
    toastSpotVisited: "Gezi noktası ziyaret edildi olarak işaretlendi!",
    toastVaultCleared: "Kasa temizlendi.",
    toastLinkCopied: "Rota bağlantısı panoya kopyalandı!",
    toastFiltersReset: "Filtreler sıfırlandı.",
    
    // Footer
    footerDesc: "Otonom çoklu ajan mimarisiyle tasarlandı. Gezginlere, şehir düşkünü hayalperestlere ve anlatılmamış hikayelerin peşinde koşanlara adanmıştır.",
    footerNavigation: "Navigasyon",
    footerReturnTop: "Yukarı Dön",
    footerDesignPhil: "Tasarım Felsefesi",
    footerDesignText: "Dinamik glassmorphism, responsive mikro etkileşimler, çevrimdışı öncelikli saklama ve gerçek zamanlı sentezlenmiş sesler.",
    footerCopyright: "© 2026 TerraNova Seyahat Rehberi. Meraklı kaşifler için geliştirildi."
  },

  en: {
    pageTitle: "TerraNova — Interactive Global City Travel Guide & Odyssey Planner",
    pageDesc: "Explore world destinations with insider local secrets, rich mini-itineraries, synthesized ambient soundscapes, trip roulette, and interactive travel budget planning.",
    skipLink: "Skip to main content",
    brandTagline: "Global Odyssey Guide",
    searchPlaceholder: "Search cities, attractions, vibes, countries... (Press '/' to focus)",
    soundscapeBtn: "Sound",
    surpriseMeBtn: "Surprise Me",
    budgetBtn: "Budget",
    vaultBtn: "Vault",
    ambientSynthesizer: "Ambient Synthesizer",
    tokyoNeonRain: "Tokyo Neon Rain",
    tokyoNeonRainSub: "Pattering drops & low urban hum",
    kyotoZenGarden: "Kyoto Zen Garden",
    kyotoZenGardenSub: "Soft bamboo breeze & singing chimes",
    mediterraneanWaves: "Mediterranean Waves",
    mediterraneanWavesSub: "Gentle shoreline sea swell",
    arcticAuroraWhisper: "Arctic Aurora Whisper",
    arcticAuroraWhisperSub: "Etheric glacial winds & calm",
    
    // Hero
    heroBadge: "Global Expedition & Discovery v3.0",
    heroTitlePrefix: "Discover The Soul Of",
    heroSubtext: "Venture beyond conventional tourist paths. Uncover hyper-local secrets, curated 48-hour itineraries, acoustic soundscapes, and calculated budgets across 5 continents.",
    pickTravelMood: "Pick a travel mood:",
    iconicCities: "Iconic Cities",
    curatedSpots: "Curated Spots",
    insiderTipsMetric: "Insider Tips",
    bilingualSupportMetric: "Dual Language Support",
    
    // Vibes
    vibeFoodie: "Foodie",
    vibeZen: "Zen & Nature",
    vibeCyber: "Cyberpunk",
    vibeHistoric: "Historic",
    vibeRomantic: "Romantic",
    vibeAdventure: "Adventure",
    vibeArt: "Art & Design",
    vibeNightlife: "Nightlife",
    allVibes: "All Vibes",
    
    // Regions
    allContinents: "All Continents",
    europe: "Europe",
    asia: "Asia",
    americas: "Americas",
    africa: "Africa",
    oceania: "Oceania",
    
    // Filters & Sort
    vibeLabel: "Vibe:",
    budgetLabel: "Budget:",
    sortLabel: "Sort:",
    anyBudget: "Any Cost Tier",
    budgetFriendly: "$ Budget Friendly",
    moderate: "$$ Moderate",
    luxuryTier: "$$$ Luxury / Premium",
    sortFeatured: "Featured Odyssey",
    sortRating: "Highest Rated Spot",
    sortName: "City Name (A-Z)",
    sortCostLow: "Budget (Low to High)",
    sortCostHigh: "Budget (High to Low)",
    activeFilters: "Active Filters:",
    resetAll: "Reset All",
    
    // Section Header & Grid
    sectionTitle: "Global Odyssey Portfolios",
    showingDestinations: (n) => `Showing ${n} destination${n > 1 ? 's' : ''}`,
    showingAll: "Showing all available destinations",
    exploreCity: "Explore City",
    spotsCount: (n) => `${n} Spots`,
    audioActive: "Audio",
    audioNone: "None",
    noDestinationsFound: "No destinations found",
    noDestinationsSub: "No cities match your current combination of region, vibe, or budget criteria.",
    clearFiltersShowAll: "Clear Filters & Show All",
    
    // City Deep Dive Modal
    tabOverview: "Overview & Culture",
    tabAttractions: (n) => `Curated Attractions (${n})`,
    tabItinerary: "48-Hour Itinerary",
    tabFood: "Signature Eats",
    bestSeason: "Best Season",
    currencyAndCost: "Currency & Cost",
    primaryLanguage: "Primary Language",
    timeZone: "Timezone",
    localEtiquetteSecret: "Local Etiquette & Cultural Secret",
    climateGuide: "Seasonal Climate Guide",
    summer: "Summer",
    winter: "Winter",
    springFall: "Spring / Fall",
    audioAvailable: "Acoustic Atmosphere Available",
    listenSoundsOf: (city) => `Listen to the synthesized sounds of ${city}.`,
    playSoundscape: "Play Soundscape",
    saveToVault: "Save to Vault",
    saved: "Saved",
    dossier: "Dossier",
    reviews: "reviews",
    duration: "Duration",
    cost: "Cost",
    insiderSecretTitle: "Insider Secret:",
    bestVisitWindow: "Best Visit Window:",
    idealPhotoSpot: "Ideal Photo Spot & Angle",
    curatorInsiderTip: "Curator's Insider Tip",
    gastronomicTitle: "Gastronomic Discoveries",
    gastronomicSub: (city) => `Iconic regional dishes that define the culinary heartbeat of ${city}.`,
    morning: "Morning",
    afternoon: "Afternoon",
    evening: "Evening",
    day: "Day",
    
    // Destiny Roulette
    destinyWheel: "Destiny Wheel",
    rouletteHeadline: "Where Will The Winds Take You?",
    rouletteSub: "Unleash the autonomous travel oracle to select your next unforgettable expedition.",
    readyToRoll: "Ready to Roll?",
    clickSpinStart: "Click Spin to start the carousel",
    spinDestinyWheel: "Spin Destiny Wheel",
    spinAgain: "Spin Again",
    spinningDestiny: "Spinning Destiny...",
    exploreChosenCity: "Explore Chosen City",
    destinySpoken: (city) => `Destiny has spoken: ${city}!`,
    
    // Budget Simulator
    budgetSimulatorBadge: "Smart Trip Estimator",
    budgetSimulatorTitle: "Interactive Travel Cost Simulator",
    budgetSimulatorSub: "Model your anticipated journey expenses adjusted for local cost indexes and travel style.",
    destinationCity: "Destination City",
    travelStyleTier: "Travel Style Tier",
    backpacker: "Backpacker",
    backpackerSub: "Hostels & street eats",
    balanced: "Balanced",
    balancedSub: "Boutique hotels & bistros",
    luxury: "Luxury",
    luxurySub: "5-Star resorts & fine dining",
    durationDays: "Duration (Days)",
    daysCount: (n) => `${n} Day${n > 1 ? 's' : ''}`,
    travelers: "Travelers",
    travelersCount: (n) => `${n} ${n > 1 ? 'People' : 'Person'}`,
    estimatedTotalOutlay: "Estimated Total Outlay",
    lodgingAndStays: "Lodging & Stays",
    diningAndDrinks: "Dining & Drinks",
    sightseeingAndGuides: "Sightseeing & Guides",
    transitAndRail: "Transit & Rail",
    
    // Vault
    myTravelVault: "My Travel Vault",
    vaultSubtitle: "Offline Planner & Bookmarks",
    savedCitiesTab: "Saved Cities",
    attractionsTab: "Attractions",
    packingAndNotesTab: "Packing & Notes",
    noCitiesSaved: "No Cities Saved Yet",
    noCitiesSavedSub: "Click the bookmark icon on any city card to pin your dream destinations here.",
    noAttractionsSaved: "No Attractions Saved",
    noAttractionsSavedSub: "Save must-visit sights, temples, and secrets from any city guide.",
    addGearOrNotePlaceholder: "Add gear or note (e.g., Sunscreen, Eurail pass)...",
    addBtn: "Add",
    exportPrintBtn: "Export / Print Itinerary",
    clearAllSaved: "Clear All Saved",
    viewBtn: "View",
    
    // Toast Messages
    toastLangSwitched: "Language switched to English 🇬🇧",
    toastCitySaved: "Saved city to Vault!",
    toastCityRemoved: "Removed city from Vault.",
    toastAttractionSaved: "Added attraction to Vault!",
    toastAttractionRemoved: "Removed attraction from Vault.",
    toastSpotVisited: "Marked spot as visited!",
    toastVaultCleared: "Vault cleared.",
    toastLinkCopied: "Destination link copied to clipboard!",
    toastFiltersReset: "Filters reset to default.",
    
    // Footer
    footerDesc: "Crafted with autonomous multi-agent precision. Dedicated to wanderers, urban dreamers, and seekers of untold stories across the globe.",
    footerNavigation: "Navigation",
    footerReturnTop: "Return to Top",
    footerDesignPhil: "Design Philosophy",
    footerDesignText: "Dynamic glassmorphism, responsive micro-interactions, local-first persistence, and real-time synthesized audio.",
    footerCopyright: "© 2026 TerraNova Travel Guide. Built for curious explorers everywhere."
  }
};

function t(keyOrObj, ...args) {
  if (!keyOrObj) return '';
  const lang = APP_STATE.lang;
  
  if (typeof keyOrObj === 'object' && (keyOrObj.en !== undefined || keyOrObj.tr !== undefined)) {
    return keyOrObj[lang] || keyOrObj.tr || keyOrObj.en || '';
  }
  
  const dict = I18N[lang] || I18N.tr;
  const val = dict[keyOrObj];
  if (typeof val === 'function') {
    return val(...args);
  }
  if (val !== undefined) {
    return val;
  }
  if (I18N.en && I18N.en[keyOrObj] !== undefined) {
    const enVal = I18N.en[keyOrObj];
    return typeof enVal === 'function' ? enVal(...args) : enVal;
  }
  return keyOrObj;
}

// =============================================================================
// 3. DOM SELECTORS
// =============================================================================
const DOM = {
  brandHomeBtn: document.getElementById('brandHomeBtn'),
  globalSearchInput: document.getElementById('globalSearchInput'),
  searchSuggestionsDrop: document.getElementById('searchSuggestionsDrop'),
  soundscapeToggleBtn: document.getElementById('soundscapeToggleBtn'),
  soundscapeMenu: document.getElementById('soundscapeMenu'),
  soundActiveName: document.getElementById('soundActiveName'),
  soundVolumeSlider: document.getElementById('soundVolumeSlider'),
  surpriseMeBtn: document.getElementById('surpriseMeBtn'),
  budgetCalcBtn: document.getElementById('budgetCalcBtn'),
  vaultDrawerBtn: document.getElementById('vaultDrawerBtn'),
  vaultCountBadge: document.getElementById('vaultCountBadge'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  themeMenu: document.getElementById('themeMenu'),
  langBtnTR: document.getElementById('langBtnTR'),
  langBtnEN: document.getElementById('langBtnEN'),
  heroDynamicWord: document.getElementById('heroDynamicWord'),
  metricTotalCities: document.getElementById('metricTotalCities'),
  metricTotalAttractions: document.getElementById('metricTotalAttractions'),
  regionTabs: document.querySelectorAll('.region-tab'),
  vibeFilterSelect: document.getElementById('vibeFilterSelect'),
  costFilterSelect: document.getElementById('costFilterSelect'),
  sortOrderSelect: document.getElementById('sortOrderSelect'),
  viewGridBtn: document.getElementById('viewGridBtn'),
  viewCompactBtn: document.getElementById('viewCompactBtn'),
  activeFiltersSummary: document.getElementById('activeFiltersSummary'),
  filterTagsList: document.getElementById('filterTagsList'),
  resetFiltersBtn: document.getElementById('resetFiltersBtn'),
  heroVibePills: document.querySelectorAll('.vibe-pill-btn'),
  destinationsGrid: document.getElementById('destinationsGrid'),
  destinationsCountSubtitle: document.getElementById('destinationsCountSubtitle'),
  emptyResultsState: document.getElementById('emptyResultsState'),
  emptyResetBtn: document.getElementById('emptyResetBtn'),
  cityDetailModal: document.getElementById('cityDetailModal'),
  cityModalBackdrop: document.getElementById('cityModalBackdrop'),
  cityModalContent: document.getElementById('cityModalContent'),
  cityModalCloseBtn: document.getElementById('cityModalCloseBtn'),
  cityModalShareBtn: document.getElementById('cityModalShareBtn'),
  cityModalVaultToggleBtn: document.getElementById('cityModalVaultToggleBtn'),
  attractionModal: document.getElementById('attractionModal'),
  attractionModalBackdrop: document.getElementById('attractionModalBackdrop'),
  attractionModalBody: document.getElementById('attractionModalBody'),
  attractionModalCloseBtn: document.getElementById('attractionModalCloseBtn'),
  attractionModalVaultBtn: document.getElementById('attractionModalVaultBtn'),
  rouletteModal: document.getElementById('rouletteModal'),
  rouletteModalBackdrop: document.getElementById('rouletteModalBackdrop'),
  rouletteModalCloseBtn: document.getElementById('rouletteModalCloseBtn'),
  rouletteCard: document.getElementById('rouletteCard'),
  rouletteImg: document.getElementById('rouletteImg'),
  rouletteFlag: document.getElementById('rouletteFlag'),
  rouletteCityName: document.getElementById('rouletteCityName'),
  rouletteCountry: document.getElementById('rouletteCountry'),
  rouletteVibes: document.getElementById('rouletteVibes'),
  spinRouletteBtn: document.getElementById('spinRouletteBtn'),
  exploreRouletteBtn: document.getElementById('exploreRouletteBtn'),
  budgetModal: document.getElementById('budgetModal'),
  budgetModalBackdrop: document.getElementById('budgetModalBackdrop'),
  budgetModalCloseBtn: document.getElementById('budgetModalCloseBtn'),
  budgetCitySelect: document.getElementById('budgetCitySelect'),
  budgetDaysRange: document.getElementById('budgetDaysRange'),
  budgetDaysVal: document.getElementById('budgetDaysVal'),
  budgetTravelersRange: document.getElementById('budgetTravelersRange'),
  budgetTravelersVal: document.getElementById('budgetTravelersVal'),
  budgetStylePills: document.querySelectorAll('.style-pill'),
  budgetResultFlag: document.getElementById('budgetResultFlag'),
  budgetResultCity: document.getElementById('budgetResultCity'),
  budgetResultStyle: document.getElementById('budgetResultStyle'),
  budgetTotalUSD: document.getElementById('budgetTotalUSD'),
  budgetTotalLocal: document.getElementById('budgetTotalLocal'),
  budgetLocalCurrency: document.getElementById('budgetLocalCurrency'),
  costLodging: document.getElementById('costLodging'),
  costDining: document.getElementById('costDining'),
  costActivities: document.getElementById('costActivities'),
  costTransit: document.getElementById('costTransit'),
  budgetSavingsTip: document.getElementById('budgetSavingsTip'),
  vaultDrawer: document.getElementById('vaultDrawer'),
  vaultBackdrop: document.getElementById('vaultBackdrop'),
  vaultCloseBtn: document.getElementById('vaultCloseBtn'),
  vaultBody: document.getElementById('vaultBody'),
  vaultTabs: document.querySelectorAll('.vault-tab-btn'),
  vaultCitiesCount: document.getElementById('vaultCitiesCount'),
  vaultAttractionsCount: document.getElementById('vaultAttractionsCount'),
  vaultExportBtn: document.getElementById('vaultExportBtn'),
  vaultClearBtn: document.getElementById('vaultClearBtn'),
  toastContainer: document.getElementById('toastContainer'),
  footerScrollTop: document.getElementById('footerScrollTop'),
  footerOpenRoulette: document.getElementById('footerOpenRoulette'),
  footerOpenBudget: document.getElementById('footerOpenBudget')
};

// =============================================================================
// 4. LANGUAGE SWITCHER & DOM I18N ENGINE
// =============================================================================
function setLanguage(newLang, showToastNotification = true) {
  if (newLang !== 'tr' && newLang !== 'en') newLang = 'tr';
  APP_STATE.lang = newLang;
  localStorage.setItem('terranova_lang', newLang);

  document.documentElement.lang = newLang;
  document.title = t('pageTitle');

  if (DOM.langBtnTR && DOM.langBtnEN) {
    const isTR = newLang === 'tr';
    DOM.langBtnTR.classList.toggle('active', isTR);
    DOM.langBtnTR.setAttribute('aria-pressed', isTR ? 'true' : 'false');
    DOM.langBtnEN.classList.toggle('active', !isTR);
    DOM.langBtnEN.setAttribute('aria-pressed', !isTR ? 'true' : 'false');
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    el.placeholder = t(key);
  });

  populateBudgetCityDropdown();
  applyFiltersAndSort();

  if (!DOM.cityDetailModal.classList.contains('hidden') && APP_STATE.activeCityId) {
    openCityModal(APP_STATE.activeCityId);
  }
  if (!DOM.attractionModal.classList.contains('hidden') && APP_STATE.activeCityId && APP_STATE.activeAttractionId) {
    openAttractionModal(APP_STATE.activeCityId, APP_STATE.activeAttractionId);
  }
  if (!DOM.budgetModal.classList.contains('hidden')) {
    updateBudgetCalculations();
  }
  if (!DOM.vaultDrawer.classList.contains('hidden')) {
    renderVaultContent();
  }

  if (showToastNotification) {
    showToast(t('toastLangSwitched'), 'language');
  }
}

// =============================================================================
// 5. SYNTHESIZED AMBIENT SOUNDSCAPE ENGINE
// =============================================================================
class AmbientSynthesizer {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.activeNodes = [];
    this.currentSound = null;
    this.isPlaying = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(APP_STATE.audio.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(val) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(val, this.ctx.currentTime);
    }
  }

  stopAll() {
    this.activeNodes.forEach(node => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch (e) {}
    });
    this.activeNodes = [];
    this.isPlaying = false;
    this.currentSound = null;
    DOM.soundscapeToggleBtn.classList.remove('playing');
    DOM.soundActiveName.textContent = 'Off';
  }

  createNoiseBuffer(type = 'pink') {
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      if (type === 'pink') {
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.11;
        b6 = white * 0.115926;
      } else {
        output[i] = white * 0.2;
      }
    }
    return buffer;
  }

  playTrack(trackName) {
    this.init();
    this.stopAll();

    this.isPlaying = true;
    this.currentSound = trackName;
    DOM.soundscapeToggleBtn.classList.add('playing');

    const displayNameMap = {
      cyberpunk_rain: t('tokyoNeonRain'),
      zen_bamboo: t('kyotoZenGarden'),
      mediterranean_breeze: t('mediterraneanWaves'),
      arctic_wind: t('arcticAuroraWhisper')
    };
    DOM.soundActiveName.textContent = displayNameMap[trackName] || 'Active';

    if (trackName === 'cyberpunk_rain') {
      this.synthRain();
    } else if (trackName === 'zen_bamboo') {
      this.synthZenGarden();
    } else if (trackName === 'mediterranean_breeze') {
      this.synthOcean();
    } else if (trackName === 'arctic_wind') {
      this.synthArcticWind();
    }
  }

  synthRain() {
    const noise = this.ctx.createBufferSource();
    noise.buffer = this.createNoiseBuffer('pink');
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start();
    this.activeNodes.push(noise, filter, gain);

    const dropInterval = setInterval(() => {
      if (!this.isPlaying || this.currentSound !== 'cyberpunk_rain') {
        clearInterval(dropInterval);
        return;
      }
      this.playDroplet();
    }, 450);
  }

  playDroplet() {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const freq = 1200 + Math.random() * 800;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.6, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.09);
  }

  synthZenGarden() {
    const noise = this.ctx.createBufferSource();
    noise.buffer = this.createNoiseBuffer('pink');
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(650, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.8, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start();
    this.activeNodes.push(noise, filter, gain);

    const chimeInterval = setInterval(() => {
      if (!this.isPlaying || this.currentSound !== 'zen_bamboo') {
        clearInterval(chimeInterval);
        return;
      }
      this.playZenChime();
    }, 4200);

    this.playZenChime();
  }

  playZenChime() {
    if (!this.ctx) return;
    const pentatonicFrequencies = [528, 587.33, 659.25, 783.99, 880];
    const freq = pentatonicFrequencies[Math.floor(Math.random() * pentatonicFrequencies.length)];

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.00001, this.ctx.currentTime + 3.8);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 4.0);
  }

  synthOcean() {
    const noise = this.ctx.createBufferSource();
    noise.buffer = this.createNoiseBuffer('pink');
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);

    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime);

    lfoGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start();
    lfo.start();
    this.activeNodes.push(noise, filter, gain, lfo, lfoGain);
  }

  synthArcticWind() {
    const noise = this.ctx.createBufferSource();
    noise.buffer = this.createNoiseBuffer('pink');
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(400, this.ctx.currentTime);
    filter.Q.setValueAtTime(4.5, this.ctx.currentTime);

    const lfo = this.ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.08, this.ctx.currentTime);

    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(250, this.ctx.currentTime);

    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.35, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start();
    lfo.start();
    this.activeNodes.push(noise, filter, gain, lfo, lfoGain);
  }

  playTick() {
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch(e) {}
  }
}

const AudioEngine = new AmbientSynthesizer();

// =============================================================================
// 6. LOCAL PERSISTENCE VAULT MANAGER
// =============================================================================
const VaultManager = {
  storageKey: 'terranova_user_vault',

  load() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        APP_STATE.vault = {
          cities: parsed.cities || [],
          attractions: parsed.attractions || [],
          visitedAttractions: parsed.visitedAttractions || [],
          packingList: parsed.packingList && parsed.packingList.length ? parsed.packingList : this.getDefaultPackingList()
        };
      } else {
        APP_STATE.vault.packingList = this.getDefaultPackingList();
      }
    } catch (e) {
      APP_STATE.vault.packingList = this.getDefaultPackingList();
    }
    this.updateBadge();
  },

  getDefaultPackingList() {
    return APP_STATE.lang === 'tr' ? [
      { id: 'pack-1', text: 'Evrensel priz adaptörü', done: true },
      { id: 'pack-2', text: 'Pasaport ve dijital kopyaları', done: true },
      { id: 'pack-3', text: 'Çevrimdışı şehir haritaları', done: false }
    ] : [
      { id: 'pack-1', text: 'Universal travel power adapter', done: true },
      { id: 'pack-2', text: 'Passport & physical / digital copies', done: true },
      { id: 'pack-3', text: 'Offline city maps downloaded', done: false }
    ];
  },

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(APP_STATE.vault));
    } catch (e) {}
    this.updateBadge();
  },

  updateBadge() {
    const totalCount = APP_STATE.vault.cities.length + APP_STATE.vault.attractions.length;
    DOM.vaultCountBadge.textContent = totalCount;
    DOM.vaultCitiesCount.textContent = APP_STATE.vault.cities.length;
    DOM.vaultAttractionsCount.textContent = APP_STATE.vault.attractions.length;
  },

  toggleCity(cityId) {
    const idx = APP_STATE.vault.cities.indexOf(cityId);
    let isSaved = false;
    if (idx > -1) {
      APP_STATE.vault.cities.splice(idx, 1);
      showToast(t('toastCityRemoved'), 'info');
    } else {
      APP_STATE.vault.cities.push(cityId);
      isSaved = true;
      showToast(t('toastCitySaved'), 'bookmark');
    }
    this.save();
    renderDestinationsGrid();
    renderVaultContent();
    return isSaved;
  },

  isCitySaved(cityId) {
    return APP_STATE.vault.cities.includes(cityId);
  },

  toggleAttraction(attractionId) {
    const idx = APP_STATE.vault.attractions.indexOf(attractionId);
    let isSaved = false;
    if (idx > -1) {
      APP_STATE.vault.attractions.splice(idx, 1);
      showToast(t('toastAttractionRemoved'), 'info');
    } else {
      APP_STATE.vault.attractions.push(attractionId);
      isSaved = true;
      showToast(t('toastAttractionSaved'), 'map-pin');
    }
    this.save();
    renderVaultContent();
    return isSaved;
  },

  isAttractionSaved(attractionId) {
    return APP_STATE.vault.attractions.includes(attractionId);
  },

  toggleAttractionVisited(attractionId) {
    const idx = APP_STATE.vault.visitedAttractions.indexOf(attractionId);
    if (idx > -1) {
      APP_STATE.vault.visitedAttractions.splice(idx, 1);
    } else {
      APP_STATE.vault.visitedAttractions.push(attractionId);
      showToast(t('toastSpotVisited'), 'check');
    }
    this.save();
    renderVaultContent();
  },

  isAttractionVisited(attractionId) {
    return APP_STATE.vault.visitedAttractions.includes(attractionId);
  },

  addPackingItem(text) {
    if (!text.trim()) return;
    const item = {
      id: 'pack-' + Date.now(),
      text: text.trim(),
      done: false
    };
    APP_STATE.vault.packingList.push(item);
    this.save();
    renderVaultContent();
  },

  togglePackingItem(id) {
    const item = APP_STATE.vault.packingList.find(p => p.id === id);
    if (item) {
      item.done = !item.done;
      this.save();
      renderVaultContent();
    }
  },

  removePackingItem(id) {
    APP_STATE.vault.packingList = APP_STATE.vault.packingList.filter(p => p.id !== id);
    this.save();
    renderVaultContent();
  },

  clearAll() {
    const confirmMsg = APP_STATE.lang === 'tr' ? 'Tüm kayıtlı kasayı silmek istediğinize emin misiniz?' : 'Are you sure you want to clear your saved Vault items?';
    if (confirm(confirmMsg)) {
      APP_STATE.vault.cities = [];
      APP_STATE.vault.attractions = [];
      APP_STATE.vault.visitedAttractions = [];
      this.save();
      renderDestinationsGrid();
      renderVaultContent();
      showToast(t('toastVaultCleared'), 'trash');
    }
  }
};

// =============================================================================
// 7. DATA INGESTION & APP BOOTSTRAP
// =============================================================================
async function loadDestinationsData() {
  try {
    const response = await fetch('destinations.json');
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const data = await response.json();
    APP_STATE.destinations = data.destinations || STATIC_DATA_FALLBACK.destinations || [];
  } catch (err) {
    console.warn('Network fetch error for destinations.json; using embedded offline cache.', err);
    APP_STATE.destinations = STATIC_DATA_FALLBACK.destinations || [];
  }

  let totalAttractions = 0;
  APP_STATE.destinations.forEach(c => {
    totalAttractions += (c.attractions ? c.attractions.length : 0);
  });
  DOM.metricTotalCities.textContent = APP_STATE.destinations.length;
  DOM.metricTotalAttractions.textContent = totalAttractions + '+';

  populateBudgetCityDropdown();
  applyFiltersAndSort();
}

function populateBudgetCityDropdown() {
  DOM.budgetCitySelect.innerHTML = '';
  APP_STATE.destinations.forEach(city => {
    const opt = document.createElement('option');
    opt.value = city.id;
    opt.textContent = `${city.flag} ${t(city.name)}, ${t(city.country)}`;
    DOM.budgetCitySelect.appendChild(opt);
  });
}

// =============================================================================
// 8. FILTERING, SEARCH & SORTING PIPELINE
// =============================================================================
function applyFiltersAndSort() {
  const query = APP_STATE.searchQuery.trim().toLowerCase();
  
  let list = APP_STATE.destinations.filter(city => {
    if (APP_STATE.activeRegion !== 'All' && city.region !== APP_STATE.activeRegion) {
      return false;
    }

    if (APP_STATE.activeVibe !== 'All' && (!city.vibes || !city.vibes.includes(APP_STATE.activeVibe))) {
      return false;
    }

    if (APP_STATE.activeCost !== 'All' && city.costLevel !== APP_STATE.activeCost) {
      return false;
    }

    if (query) {
      const nameEN = (city.name && city.name.en ? city.name.en : '').toLowerCase();
      const nameTR = (city.name && city.name.tr ? city.name.tr : '').toLowerCase();
      const countryEN = (city.country && city.country.en ? city.country.en : '').toLowerCase();
      const countryTR = (city.country && city.country.tr ? city.country.tr : '').toLowerCase();
      const tagEN = (city.tagline && city.tagline.en ? city.tagline.en : '').toLowerCase();
      const tagTR = (city.tagline && city.tagline.tr ? city.tagline.tr : '').toLowerCase();

      const nameMatch = nameEN.includes(query) || nameTR.includes(query);
      const countryMatch = countryEN.includes(query) || countryTR.includes(query);
      const taglineMatch = tagEN.includes(query) || tagTR.includes(query);
      const vibeMatch = city.vibes && city.vibes.some(v => v.toLowerCase().includes(query));
      
      const attractionMatch = city.attractions && city.attractions.some(a => {
        const aNameEN = (a.name && a.name.en ? a.name.en : '').toLowerCase();
        const aNameTR = (a.name && a.name.tr ? a.name.tr : '').toLowerCase();
        const aDescEN = (a.description && a.description.en ? a.description.en : '').toLowerCase();
        const aDescTR = (a.description && a.description.tr ? a.description.tr : '').toLowerCase();
        return aNameEN.includes(query) || aNameTR.includes(query) || aDescEN.includes(query) || aDescTR.includes(query);
      });

      if (!nameMatch && !countryMatch && !taglineMatch && !vibeMatch && !attractionMatch) {
        return false;
      }
    }

    return true;
  });

  if (APP_STATE.sortOrder === 'name') {
    list.sort((a, b) => t(a.name).localeCompare(t(b.name)));
  } else if (APP_STATE.sortOrder === 'rating') {
    list.sort((a, b) => {
      const maxA = Math.max(...(a.attractions ? a.attractions.map(x => x.rating) : [0]));
      const maxB = Math.max(...(b.attractions ? b.attractions.map(x => x.rating) : [0]));
      return maxB - maxA;
    });
  } else if (APP_STATE.sortOrder === 'costLow') {
    list.sort((a, b) => a.costIndex - b.costIndex);
  } else if (APP_STATE.sortOrder === 'costHigh') {
    list.sort((a, b) => b.costIndex - a.costIndex);
  }

  APP_STATE.filteredDestinations = list;
  renderDestinationsGrid();
  renderActiveFilterTags();
}

function renderActiveFilterTags() {
  const activeChips = [];
  if (APP_STATE.activeRegion !== 'All') {
    activeChips.push({ type: 'region', label: `${t('allContinents')}: ${APP_STATE.activeRegion}` });
  }
  if (APP_STATE.activeVibe !== 'All') {
    activeChips.push({ type: 'vibe', label: `${t('vibeLabel')} ${APP_STATE.activeVibe}` });
  }
  if (APP_STATE.activeCost !== 'All') {
    activeChips.push({ type: 'cost', label: `${t('budgetLabel')} ${APP_STATE.activeCost}` });
  }
  if (APP_STATE.searchQuery.trim()) {
    activeChips.push({ type: 'search', label: `"${APP_STATE.searchQuery}"` });
  }

  if (activeChips.length > 0) {
    DOM.activeFiltersSummary.classList.remove('hidden');
    DOM.filterTagsList.innerHTML = activeChips.map(c => `
      <span class="filter-chip">
        <span>${escapeHtml(c.label)}</span>
        <i class="fa-solid fa-xmark chip-remove" data-type="${c.type}" title="Remove filter" role="button" tabindex="0"></i>
      </span>
    `).join('');
  } else {
    DOM.activeFiltersSummary.classList.add('hidden');
    DOM.filterTagsList.innerHTML = '';
  }
}

function resetAllFilters() {
  APP_STATE.activeRegion = 'All';
  APP_STATE.activeVibe = 'All';
  APP_STATE.activeCost = 'All';
  APP_STATE.searchQuery = '';
  DOM.globalSearchInput.value = '';
  DOM.vibeFilterSelect.value = 'All';
  DOM.costFilterSelect.value = 'All';
  DOM.sortOrderSelect.value = 'featured';
  APP_STATE.sortOrder = 'featured';

  DOM.regionTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.region === 'All');
  });

  DOM.heroVibePills.forEach(pill => pill.classList.remove('active'));

  applyFiltersAndSort();
  showToast(t('toastFiltersReset'), 'rotate-left');
}

// =============================================================================
// 9. DESTINATIONS GRID RENDERING
// =============================================================================
function renderDestinationsGrid() {
  const container = DOM.destinationsGrid;
  const list = APP_STATE.filteredDestinations;

  if (list.length === 0) {
    container.innerHTML = '';
    DOM.emptyResultsState.classList.remove('hidden');
    DOM.destinationsCountSubtitle.textContent = t('showingDestinations', 0);
    return;
  }

  DOM.emptyResultsState.classList.add('hidden');
  DOM.destinationsCountSubtitle.textContent = t('showingDestinations', list.length);

  container.innerHTML = list.map((city, index) => {
    const isSaved = VaultManager.isCitySaved(city.id);
    const topVibes = city.vibes ? city.vibes.slice(0, 3) : [];
    const imgUrl = city.thumbnail || city.heroImage;
    const cityName = t(city.name);
    const countryName = t(city.country);
    const tagline = t(city.tagline);

    return `
      <article class="destination-card" data-city-id="${city.id}" style="animation-delay: ${index * 40}ms">
        <div class="card-image-box">
          <img 
            src="${imgUrl}" 
            alt="${escapeHtml(cityName)}, ${escapeHtml(countryName)}" 
            class="card-img" 
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80'"
          >
          <div class="card-image-gradient"></div>
          
          <div class="card-top-badges">
            <span class="country-flag-badge">
              <span>${city.flag || '🌍'}</span>
              <span>${escapeHtml(countryName)}</span>
            </span>
            <div class="card-action-btns">
              <button 
                class="card-icon-btn ${isSaved ? 'saved' : ''}" 
                data-action="toggle-vault-city" 
                data-city-id="${city.id}" 
                aria-label="${isSaved ? 'Remove from' : 'Save to'} Vault"
                title="${isSaved ? 'Remove from' : 'Save to'} Vault"
              >
                <i class="fa-${isSaved ? 'solid' : 'regular'} fa-bookmark"></i>
              </button>
            </div>
          </div>

          <div class="card-headline-overlay">
            <h3 class="card-city-title">${escapeHtml(cityName)}</h3>
            <span class="card-country-subtitle">${escapeHtml(city.region)} • ${escapeHtml(city.currency ? city.currency.code : '')}</span>
          </div>
        </div>

        <div class="card-body">
          <p class="card-tagline">${escapeHtml(tagline)}</p>

          <div class="card-meta-row">
            <span class="meta-pill" title="Cost Tier">
              <i class="fa-solid fa-coins"></i> <strong>${escapeHtml(city.costLevel)}</strong>
            </span>
            <span class="meta-pill" title="Attractions Count">
              <i class="fa-solid fa-map-location-dot"></i> <strong>${t('spotsCount', city.attractions ? city.attractions.length : 0)}</strong>
            </span>
            <span class="meta-pill" title="Atmosphere Audio">
              <i class="fa-solid fa-headphones"></i> <strong>${city.soundscape ? t('audioActive') : t('audioNone')}</strong>
            </span>
          </div>

          <div class="card-vibes-list">
            ${topVibes.map(v => `<span class="vibe-tag">${escapeHtml(v)}</span>`).join('')}
          </div>

          <div class="card-footer">
            <button class="btn-card-primary" data-action="open-city" data-city-id="${city.id}">
              <span>${t('exploreCity')}</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <button class="btn-card-secondary" data-action="quick-budget" data-city-id="${city.id}" title="${t('budgetSimulatorTitle')}">
              <i class="fa-solid fa-calculator"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// =============================================================================
// 10. CITY DEEP DIVE MODAL SYSTEM (BILINGUAL)
// =============================================================================
function openCityModal(cityId) {
  const city = APP_STATE.destinations.find(c => c.id === cityId);
  if (!city) return;

  APP_STATE.activeCityId = cityId;
  const isSaved = VaultManager.isCitySaved(cityId);
  updateModalVaultBtn(isSaved);

  const cityName = t(city.name);
  const countryName = t(city.country);
  const tagline = t(city.tagline);
  const bestSeason = t(city.bestTimeToVisit);
  const language = t(city.language);
  const culturalTip = t(city.culturalTip);

  DOM.cityModalContent.innerHTML = `
    <!-- Full-Bleed Hero -->
    <div class="city-modal-hero" style="background-image: url('${city.heroImage}')">
      <div class="city-hero-content">
        <div class="city-hero-flag-row">
          <span>${city.flag}</span>
          <span>${escapeHtml(countryName)} • ${escapeHtml(city.region)}</span>
        </div>
        <h2 class="city-hero-title">${escapeHtml(cityName)}</h2>
        <p class="city-hero-tagline">${escapeHtml(tagline)}</p>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="city-modal-tabs" role="tablist">
      <button class="city-subtab-btn ${APP_STATE.activeModalTab === 'overview' ? 'active' : ''}" data-subtab="overview" role="tab">
        <i class="fa-solid fa-circle-info"></i> ${t('tabOverview')}
      </button>
      <button class="city-subtab-btn ${APP_STATE.activeModalTab === 'attractions' ? 'active' : ''}" data-subtab="attractions" role="tab">
        <i class="fa-solid fa-map-pin"></i> ${t('tabAttractions', city.attractions ? city.attractions.length : 0)}
      </button>
      <button class="city-subtab-btn ${APP_STATE.activeModalTab === 'itinerary' ? 'active' : ''}" data-subtab="itinerary" role="tab">
        <i class="fa-solid fa-calendar-day"></i> ${t('tabItinerary')}
      </button>
      <button class="city-subtab-btn ${APP_STATE.activeModalTab === 'food' ? 'active' : ''}" data-subtab="food" role="tab">
        <i class="fa-solid fa-utensils"></i> ${t('tabFood')}
      </button>
    </div>

    <!-- TAB 1: OVERVIEW & CULTURE -->
    <div class="city-panel ${APP_STATE.activeModalTab === 'overview' ? '' : 'hidden'}" id="panelOverview">
      <div class="city-quick-stats-grid">
        <div class="stat-box">
          <i class="fa-solid fa-cloud-sun"></i>
          <div>
            <div class="stat-title">${t('bestSeason')}</div>
            <div class="stat-value">${escapeHtml(bestSeason)}</div>
          </div>
        </div>
        <div class="stat-box">
          <i class="fa-solid fa-coins"></i>
          <div>
            <div class="stat-title">${t('currencyAndCost')}</div>
            <div class="stat-value">${escapeHtml(city.currency ? city.currency.code + ' (' + city.currency.symbol + ')' : '')} • ${escapeHtml(city.costLevel)}</div>
          </div>
        </div>
        <div class="stat-box">
          <i class="fa-solid fa-language"></i>
          <div>
            <div class="stat-title">${t('primaryLanguage')}</div>
            <div class="stat-value">${escapeHtml(language)}</div>
          </div>
        </div>
        <div class="stat-box">
          <i class="fa-solid fa-clock"></i>
          <div>
            <div class="stat-title">${t('timeZone')}</div>
            <div class="stat-value">${escapeHtml(city.timeZone || 'UTC')}</div>
          </div>
        </div>
      </div>

      <div class="cultural-tip-card">
        <i class="fa-solid fa-landmark"></i>
        <div>
          <h4>${t('localEtiquetteSecret')}</h4>
          <p>${escapeHtml(culturalTip)}</p>
        </div>
      </div>

      <div class="stat-box" style="margin-bottom: 2rem;">
        <i class="fa-solid fa-temperature-half"></i>
        <div style="flex: 1;">
          <div class="stat-title">${t('climateGuide')}</div>
          <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; margin-top: 0.5rem; font-size: 0.85rem;">
            <span><strong>${t('summer')}:</strong> ${escapeHtml(t(city.weather ? city.weather.summer : ''))}</span>
            <span><strong>${t('winter')}:</strong> ${escapeHtml(t(city.weather ? city.weather.winter : ''))}</span>
            <span><strong>${t('springFall')}:</strong> ${escapeHtml(t(city.weather ? city.weather.springFall : ''))}</span>
          </div>
        </div>
      </div>

      ${city.soundscape ? `
        <div class="stat-box" style="background: var(--accent-subtle); border-color: var(--accent-primary);">
          <i class="fa-solid fa-headphones"></i>
          <div style="flex: 1;">
            <div class="stat-title" style="color: var(--accent-primary);">${t('audioAvailable')}</div>
            <div class="stat-value">${t('listenSoundsOf', cityName)}</div>
          </div>
          <button class="btn-card-primary" data-action="play-city-sound" data-sound="${city.soundscape}" style="flex: 0 0 auto;">
            <i class="fa-solid fa-play"></i> ${t('playSoundscape')}
          </button>
        </div>
      ` : ''}
    </div>

    <!-- TAB 2: CURATED ATTRACTIONS -->
    <div class="city-panel ${APP_STATE.activeModalTab === 'attractions' ? '' : 'hidden'}" id="panelAttractions">
      <div class="attractions-list-grid">
        ${(city.attractions || []).map(att => {
          const isAttSaved = VaultManager.isAttractionSaved(att.id);
          const attName = t(att.name);
          const attDesc = t(att.description);
          const attSecret = t(att.insiderSecret);
          const attDuration = t(att.duration);

          return `
            <div class="attraction-card-item">
              <div class="attraction-img-box">
                <img 
                  src="${att.image}" 
                  alt="${escapeHtml(attName)}" 
                  class="attraction-img"
                  loading="lazy"
                  onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80'"
                >
                <span class="attraction-category-badge">${escapeHtml(t(att.category))}</span>
              </div>
              <div class="attraction-body">
                <h4 class="attraction-title">${escapeHtml(attName)}</h4>
                <div class="attraction-rating-row">
                  <span class="rating-stars"><i class="fa-solid fa-star"></i> ${att.rating}</span>
                  <span>(${att.reviewsCount} ${t('reviews')})</span>
                  <span>•</span>
                  <span><i class="fa-regular fa-clock"></i> ${escapeHtml(attDuration)}</span>
                </div>
                <p class="attraction-desc">${escapeHtml(attDesc)}</p>

                <div class="attraction-insider-box">
                  <strong><i class="fa-solid fa-key"></i> ${t('insiderSecretTitle')}</strong>
                  ${escapeHtml(attSecret)}
                </div>

                <div class="attraction-footer-row">
                  <button 
                    class="btn-card-secondary ${isAttSaved ? 'saved' : ''}" 
                    data-action="toggle-vault-attraction" 
                    data-attraction-id="${att.id}"
                  >
                    <i class="fa-${isAttSaved ? 'solid' : 'regular'} fa-bookmark"></i>
                    <span>${isAttSaved ? t('saved') : t('saveToVault')}</span>
                  </button>
                  <button 
                    class="btn-card-primary" 
                    data-action="open-attraction" 
                    data-city-id="${city.id}" 
                    data-attraction-id="${att.id}"
                  >
                    ${t('dossier')} <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- TAB 3: 48-HOUR MINI-ITINERARY -->
    <div class="city-panel ${APP_STATE.activeModalTab === 'itinerary' ? '' : 'hidden'}" id="panelItinerary">
      <div class="itinerary-timeline">
        ${(city.miniItinerary || []).map(dayItem => `
          <div class="itinerary-day-card">
            <div class="day-header">
              <span class="day-badge">${t('day')} ${dayItem.day}</span>
              <h4 class="day-title">${escapeHtml(t(dayItem.title))}</h4>
            </div>
            <div class="time-slots">
              <div class="time-slot-item">
                <div class="time-slot-label"><i class="fa-solid fa-mug-saucer"></i> ${t('morning')}</div>
                <p class="time-slot-text">${escapeHtml(t(dayItem.morning))}</p>
              </div>
              <div class="time-slot-item">
                <div class="time-slot-label"><i class="fa-solid fa-sun"></i> ${t('afternoon')}</div>
                <p class="time-slot-text">${escapeHtml(t(dayItem.afternoon))}</p>
              </div>
              <div class="time-slot-item">
                <div class="time-slot-label"><i class="fa-solid fa-moon"></i> ${t('evening')}</div>
                <p class="time-slot-text">${escapeHtml(t(dayItem.evening))}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 4: SIGNATURE EATS -->
    <div class="city-panel ${APP_STATE.activeModalTab === 'food' ? '' : 'hidden'}" id="panelFood">
      <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 0.5rem;">${t('gastronomicTitle')}</h3>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.5rem;">${t('gastronomicSub', cityName)}</p>

      <div class="local-eats-grid">
        ${(city.localEats || []).map(eat => `
          <div class="eat-card">
            <div class="eat-name"><i class="fa-solid fa-bowl-food"></i> ${escapeHtml(eat.name)}</div>
            <p class="eat-desc">${escapeHtml(t(eat.desc))}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  DOM.cityDetailModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCityModal() {
  DOM.cityDetailModal.classList.add('hidden');
  document.body.style.overflow = '';
  APP_STATE.activeCityId = null;
}

function updateModalVaultBtn(isSaved) {
  if (isSaved) {
    DOM.cityModalVaultToggleBtn.classList.add('saved');
    DOM.cityModalVaultToggleBtn.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
  } else {
    DOM.cityModalVaultToggleBtn.classList.remove('saved');
    DOM.cityModalVaultToggleBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
  }
}

function switchCityModalTab(tabKey) {
  APP_STATE.activeModalTab = tabKey;
  const tabs = DOM.cityModalContent.querySelectorAll('.city-subtab-btn');
  tabs.forEach(tBtn => tBtn.classList.toggle('active', tBtn.dataset.subtab === tabKey));

  const panels = {
    overview: DOM.cityModalContent.querySelector('#panelOverview'),
    attractions: DOM.cityModalContent.querySelector('#panelAttractions'),
    itinerary: DOM.cityModalContent.querySelector('#panelItinerary'),
    food: DOM.cityModalContent.querySelector('#panelFood')
  };

  Object.keys(panels).forEach(key => {
    if (panels[key]) {
      panels[key].classList.toggle('hidden', key !== tabKey);
    }
  });
}

// =============================================================================
// 11. ATTRACTION DOSSIER MODAL
// =============================================================================
function openAttractionModal(cityId, attractionId) {
  const city = APP_STATE.destinations.find(c => c.id === cityId);
  if (!city) return;
  const attraction = (city.attractions || []).find(a => a.id === attractionId);
  if (!attraction) return;

  APP_STATE.activeCityId = cityId;
  APP_STATE.activeAttractionId = attractionId;

  const isSaved = VaultManager.isAttractionSaved(attractionId);
  DOM.attractionModalVaultBtn.dataset.attractionId = attractionId;
  DOM.attractionModalVaultBtn.classList.toggle('saved', isSaved);
  DOM.attractionModalVaultBtn.innerHTML = `<i class="fa-${isSaved ? 'solid' : 'regular'} fa-bookmark"></i>`;

  const attName = t(attraction.name);
  const attDesc = t(attraction.description);
  const attSecret = t(attraction.insiderSecret);
  const photoTip = t(attraction.photoSpotTips);
  const duration = t(attraction.duration);
  const cost = t(attraction.costEstimate);
  const bestHour = t(attraction.bestHour);

  DOM.attractionModalBody.innerHTML = `
    <div style="position: relative; height: 260px; overflow: hidden; border-radius: var(--radius-lg); margin-bottom: 1.5rem;">
      <img 
        src="${attraction.image}" 
        alt="${escapeHtml(attName)}" 
        style="width: 100%; height: 100%; object-fit: cover;"
        onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80'"
      >
      <div style="position: absolute; bottom: 1rem; left: 1rem; color: #fff; text-shadow: 0 2px 6px rgba(0,0,0,0.8);">
        <span class="vibe-tag" style="background: rgba(0,0,0,0.6); color: #fff;">${escapeHtml(t(attraction.category))}</span>
        <h3 style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; margin-top: 0.35rem;">${escapeHtml(attName)}</h3>
      </div>
    </div>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.25rem; font-size: 0.85rem; color: var(--text-muted);">
      <span><i class="fa-solid fa-star" style="color: #fbbf24;"></i> <strong>${attraction.rating}</strong> (${attraction.reviewsCount} ${t('reviews')})</span>
      <span>•</span>
      <span><i class="fa-regular fa-clock"></i> <strong>${t('duration')}:</strong> ${escapeHtml(duration)}</span>
      <span>•</span>
      <span><i class="fa-solid fa-ticket"></i> <strong>${t('cost')}:</strong> ${escapeHtml(cost)}</span>
    </div>

    <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1.5rem;">
      ${escapeHtml(attDesc)}
    </p>

    <div style="background: var(--bg-surface); border-radius: var(--radius-md); padding: 1.2rem; margin-bottom: 1rem;">
      <h4 style="color: var(--accent-primary); font-size: 0.9rem; margin-bottom: 0.35rem;">
        <i class="fa-solid fa-camera"></i> ${t('idealPhotoSpot')}
      </h4>
      <p style="font-size: 0.86rem; color: var(--text-secondary);">${escapeHtml(photoTip)}</p>
    </div>

    <div style="background: var(--accent-subtle); border-radius: var(--radius-md); padding: 1.2rem; margin-bottom: 1.5rem;">
      <h4 style="color: var(--accent-primary); font-size: 0.9rem; margin-bottom: 0.35rem;">
        <i class="fa-solid fa-user-secret"></i> ${t('curatorInsiderTip')}
      </h4>
      <p style="font-size: 0.86rem; color: var(--text-secondary);">${escapeHtml(attSecret)}</p>
      <div style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">
        <i class="fa-regular fa-clock"></i> <strong>${t('bestVisitWindow')}</strong> ${escapeHtml(bestHour)}
      </div>
    </div>
  `;

  DOM.attractionModal.classList.remove('hidden');
}

function closeAttractionModal() {
  DOM.attractionModal.classList.add('hidden');
  APP_STATE.activeAttractionId = null;
}

// =============================================================================
// 12. DESTINY ROULETTE ("SURPRISE ME") ENGINE
// =============================================================================
let rouletteSpinTimer = null;
let chosenRouletteCity = null;

function openRouletteModal() {
  DOM.rouletteModal.classList.remove('hidden');
  resetRouletteDisplay();
}

function closeRouletteModal() {
  DOM.rouletteModal.classList.add('hidden');
  if (rouletteSpinTimer) clearInterval(rouletteSpinTimer);
}

function resetRouletteDisplay() {
  chosenRouletteCity = null;
  DOM.rouletteImg.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80';
  DOM.rouletteFlag.textContent = '🌍';
  DOM.rouletteCityName.textContent = t('readyToRoll');
  DOM.rouletteCountry.textContent = t('clickSpinStart');
  DOM.rouletteVibes.innerHTML = '';
  DOM.spinRouletteBtn.classList.remove('hidden');
  DOM.spinRouletteBtn.disabled = false;
  DOM.exploreRouletteBtn.classList.add('hidden');
}

function spinDestinyWheel() {
  if (!APP_STATE.destinations.length) return;

  DOM.spinRouletteBtn.disabled = true;
  DOM.spinRouletteBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${t('spinningDestiny')}`;
  DOM.exploreRouletteBtn.classList.add('hidden');

  let speed = 60;
  let iterations = 0;
  const maxIterations = 28 + Math.floor(Math.random() * 10);

  function tick() {
    iterations++;
    const randomIndex = Math.floor(Math.random() * APP_STATE.destinations.length);
    const candidate = APP_STATE.destinations[randomIndex];

    AudioEngine.playTick();

    DOM.rouletteImg.src = candidate.thumbnail || candidate.heroImage;
    DOM.rouletteFlag.textContent = candidate.flag || '🌍';
    DOM.rouletteCityName.textContent = t(candidate.name);
    DOM.rouletteCountry.textContent = `${t(candidate.country)} • ${candidate.region}`;

    if (iterations < maxIterations) {
      speed += 12;
      rouletteSpinTimer = setTimeout(tick, speed);
    } else {
      chosenRouletteCity = candidate;
      DOM.spinRouletteBtn.disabled = false;
      DOM.spinRouletteBtn.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i> ${t('spinAgain')}`;
      DOM.exploreRouletteBtn.classList.remove('hidden');
      
      DOM.rouletteVibes.innerHTML = (candidate.vibes || []).map(v => `
        <span class="vibe-tag">${escapeHtml(v)}</span>
      `).join('');

      showToast(t('destinySpoken', t(candidate.name)), 'dice-d20');
    }
  }

  tick();
}

// =============================================================================
// 13. TRAVEL BUDGET CALCULATOR
// =============================================================================
let budgetCalcState = {
  cityId: null,
  style: 'balanced',
  days: 5,
  travelers: 2
};

function openBudgetModal(preselectedCityId = null) {
  if (preselectedCityId) {
    budgetCalcState.cityId = preselectedCityId;
    DOM.budgetCitySelect.value = preselectedCityId;
  } else if (!budgetCalcState.cityId && APP_STATE.destinations.length) {
    budgetCalcState.cityId = APP_STATE.destinations[0].id;
    DOM.budgetCitySelect.value = budgetCalcState.cityId;
  }

  DOM.budgetModal.classList.remove('hidden');
  updateBudgetCalculations();
}

function closeBudgetModal() {
  DOM.budgetModal.classList.add('hidden');
}

function updateBudgetCalculations() {
  const city = APP_STATE.destinations.find(c => c.id === budgetCalcState.cityId);
  if (!city) return;

  const costIndex = city.costIndex || 2;
  const style = budgetCalcState.style;
  const days = budgetCalcState.days;
  const travelers = budgetCalcState.travelers;

  const baseRates = {
    backpacker: { lodging: 28, dining: 18, activities: 12, transit: 6 },
    balanced:   { lodging: 80, dining: 48, activities: 28, transit: 16 },
    luxury:     { lodging: 240, dining: 130, activities: 75, transit: 45 }
  };

  const multiplier = costIndex === 1 ? 0.7 : costIndex === 3 ? 1.45 : 1.0;
  const currentRate = baseRates[style];

  const totalLodging = Math.round(currentRate.lodging * multiplier * days * Math.ceil(travelers / 2));
  const totalDining = Math.round(currentRate.dining * multiplier * days * travelers);
  const totalActivities = Math.round(currentRate.activities * multiplier * days * travelers);
  const totalTransit = Math.round(currentRate.transit * multiplier * days * travelers);

  const grandTotalUSD = totalLodging + totalDining + totalActivities + totalTransit;
  const exchangeRate = (city.currency && city.currency.rateToUSD) ? (1 / city.currency.rateToUSD) : 1;
  const grandTotalLocal = Math.round(grandTotalUSD * exchangeRate);

  DOM.budgetResultFlag.textContent = city.flag || '🌍';
  DOM.budgetResultCity.textContent = `${t(city.name)}, ${t(city.country)}`;
  DOM.budgetResultStyle.textContent = `${t(style)} ${t('travelStyleTier')}`;
  DOM.budgetTotalUSD.textContent = grandTotalUSD.toLocaleString();
  DOM.budgetTotalLocal.textContent = grandTotalLocal.toLocaleString();
  DOM.budgetLocalCurrency.textContent = city.currency ? city.currency.code : 'USD';

  DOM.costLodging.textContent = `$${totalLodging.toLocaleString()}`;
  DOM.costDining.textContent = `$${totalDining.toLocaleString()}`;
  DOM.costActivities.textContent = `$${totalActivities.toLocaleString()}`;
  DOM.costTransit.textContent = `$${totalTransit.toLocaleString()}`;

  const tipsTR = {
    'tokyo-jp': '72 saatlik Tokyo Metro bileti (1.500 ¥) alın ve akşam yemeklerine kıyasla %40 daha ucuz olan öğle set menülerini (teishoku) tercih edin.',
    'kyoto-jp': 'Tarihi tapınak sokaklarını keşfetmek ve otobüs kalabalığından kaçınmak için bisiklet kiralayın.',
    'rome-it': 'Tarihi Nasoni sokak çeşmelerinden ücretsiz, buz gibi saf su içebilirsiniz.',
    'paris-fr': 'Her ayın ilk pazar günü devlet müzeleri ücretsizdir; parklarda fırından taze bagetlerle piknik yapın.',
    'reykjavik-is': 'Lüks lagünler yerine halka açık jeotermal yüzme havuzlarında (Sundlaugar) çok daha ekonomik rahatlayın.',
    'marrakech-ma': 'Taksiye binmeden önce pazarlık yapın veya taksimetreyi açtırın. Riadlardaki ev yemekleri harika bir deneyimdir.',
    'cape-town-za': 'Dolunayda Lion\'s Head tepesine çıkarak harika bir gün batımını tamamen ücretsiz izleyin.'
  };

  const tipsEN = {
    'tokyo-jp': 'Get a 72-hour Tokyo Subway pass (¥1,500) and savor lunch sets (teishoku) which cost 40% less than dinners.',
    'kyoto-jp': 'Rent a bicycle to navigate temple lanes effortlessly and avoid bus traffic congestions.',
    'rome-it': 'Drink pure, ice-cold water from historic Roman Nasoni public street fountains for free.',
    'paris-fr': 'Visit state museums for free on the first Sunday of every month, and grab bakery baguettes for park picnics.',
    'reykjavik-is': 'Public geothermal pools (Sundlaugar) provide hot tub bliss for a fraction of luxury lagoon prices.',
    'marrakech-ma': 'Negotiate taxi fares before boarding or ask for the meter. Riad home-cooked dinners offer exceptional value.',
    'cape-town-za': 'Hike Lion\'s Head at full moon for breathtaking free 360-degree Atlantic harbor vistas.'
  };

  const activeTips = APP_STATE.lang === 'tr' ? tipsTR : tipsEN;
  DOM.budgetSavingsTip.textContent = activeTips[city.id] || (APP_STATE.lang === 'tr' ? 'Müze ve tren biletlerinizi önceden rezerve ederek yoğun sezon zamlarından kaçının.' : 'Book train passes and museum slots in advance to avoid peak walk-up surcharges.');
}

// =============================================================================
// 14. TRAVEL VAULT & PACKING CHECKLIST DRAWER
// =============================================================================
let activeVaultTab = 'cities';

function openVaultDrawer() {
  DOM.vaultDrawer.classList.remove('hidden');
  DOM.vaultBackdrop.classList.remove('hidden');
  renderVaultContent();
}

function closeVaultDrawer() {
  DOM.vaultDrawer.classList.add('hidden');
  DOM.vaultBackdrop.classList.add('hidden');
}

function switchVaultTab(tabKey) {
  activeVaultTab = tabKey;
  DOM.vaultTabs.forEach(tBtn => tBtn.classList.toggle('active', tBtn.dataset.vtab === tabKey));
  renderVaultContent();
}

function renderVaultContent() {
  const container = DOM.vaultBody;

  if (activeVaultTab === 'cities') {
    const savedCities = APP_STATE.destinations.filter(c => VaultManager.isCitySaved(c.id));
    if (savedCities.length === 0) {
      container.innerHTML = `
        <div class="vault-empty-state">
          <i class="fa-solid fa-city"></i>
          <h4>${t('noCitiesSaved')}</h4>
          <p>${t('noCitiesSavedSub')}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="vault-list-group">
        ${savedCities.map(c => `
          <div class="vault-item-card">
            <img src="${c.thumbnail || c.heroImage}" alt="${escapeHtml(t(c.name))}" class="vault-item-thumb">
            <div class="vault-item-info">
              <div class="vault-item-name">${c.flag} ${escapeHtml(t(c.name))}</div>
              <div class="vault-item-meta">${escapeHtml(t(c.country))} • ${c.costLevel}</div>
            </div>
            <button class="btn-card-secondary" data-action="open-city" data-city-id="${c.id}" style="padding: 0.35rem 0.65rem; font-size: 0.78rem;">
              ${t('viewBtn')}
            </button>
            <button class="vault-item-remove" data-action="remove-vault-city" data-city-id="${c.id}" title="Remove">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        `).join('')}
      </div>
    `;
  } else if (activeVaultTab === 'attractions') {
    const allAttractions = [];
    APP_STATE.destinations.forEach(c => {
      (c.attractions || []).forEach(a => {
        if (VaultManager.isAttractionSaved(a.id)) {
          allAttractions.push({ ...a, cityName: t(c.name), cityId: c.id });
        }
      });
    });

    if (allAttractions.length === 0) {
      container.innerHTML = `
        <div class="vault-empty-state">
          <i class="fa-solid fa-map-location-dot"></i>
          <h4>${t('noAttractionsSaved')}</h4>
          <p>${t('noAttractionsSavedSub')}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="vault-list-group">
        ${allAttractions.map(att => {
          const isVisited = VaultManager.isAttractionVisited(att.id);
          const attName = t(att.name);
          return `
            <div class="vault-checklist-item ${isVisited ? 'done' : ''}">
              <input 
                type="checkbox" 
                class="vault-check-input" 
                data-action="toggle-visited-attraction" 
                data-attraction-id="${att.id}"
                ${isVisited ? 'checked' : ''}
                title="Mark as Visited"
              >
              <div class="vault-item-info">
                <div class="vault-item-name">${escapeHtml(attName)}</div>
                <div class="vault-item-meta">${escapeHtml(att.cityName)} • ${escapeHtml(t(att.category))}</div>
              </div>
              <button class="vault-item-remove" data-action="remove-vault-attraction" data-attraction-id="${att.id}" title="Remove">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else if (activeVaultTab === 'notes') {
    container.innerHTML = `
      <div class="packing-add-row">
        <input type="text" id="newPackingItemInput" class="packing-input" placeholder="${escapeHtml(t('addGearOrNotePlaceholder'))}">
        <button id="addPackingItemBtn" class="btn-add-packing"><i class="fa-solid fa-plus"></i> ${t('addBtn')}</button>
      </div>

      <div class="vault-list-group">
        ${APP_STATE.vault.packingList.map(item => `
          <div class="vault-checklist-item ${item.done ? 'done' : ''}">
            <input 
              type="checkbox" 
              class="vault-check-input" 
              data-action="toggle-packing" 
              data-item-id="${item.id}"
              ${item.done ? 'checked' : ''}
            >
            <div class="vault-item-info">
              <span class="vault-item-name">${escapeHtml(item.text)}</span>
            </div>
            <button class="vault-item-remove" data-action="remove-packing" data-item-id="${item.id}" title="Delete">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        `).join('')}
      </div>
    `;
  }
}

function exportVaultItinerary() {
  const savedCities = APP_STATE.destinations.filter(c => VaultManager.isCitySaved(c.id));
  if (!savedCities.length) {
    const msg = APP_STATE.lang === 'tr' ? 'Yazdırmadan önce seyahat kasanıza en az bir şehir ekleyin.' : 'Add at least one city to your Vault before exporting.';
    showToast(msg, 'info');
    return;
  }
  window.print();
}

// =============================================================================
// 15. TOAST NOTIFICATION UTILITY
// =============================================================================
function showToast(message, icon = 'info') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid fa-${icon}"></i>
    <span>${escapeHtml(message)}</span>
  `;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// =============================================================================
// 16. THEME CONTROLLER
// =============================================================================
function setTheme(themeName) {
  APP_STATE.theme = themeName;
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('terranova_theme', themeName);

  document.querySelectorAll('.theme-opt-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === themeName);
  });
  DOM.themeMenu.classList.add('hidden');
}

// =============================================================================
// 17. GLOBAL EVENT LISTENERS & DELEGATION
// =============================================================================
function bindEvents() {
  DOM.brandHomeBtn.addEventListener('click', resetAllFilters);
  DOM.footerScrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  if (DOM.langBtnTR) {
    DOM.langBtnTR.addEventListener('click', () => setLanguage('tr'));
  }
  if (DOM.langBtnEN) {
    DOM.langBtnEN.addEventListener('click', () => setLanguage('en'));
  }

  DOM.globalSearchInput.addEventListener('input', (e) => {
    APP_STATE.searchQuery = e.target.value;
    applyFiltersAndSort();
    handleSearchAutocomplete(e.target.value);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== DOM.globalSearchInput && !document.activeElement.matches('input, textarea')) {
      e.preventDefault();
      DOM.globalSearchInput.focus();
    }
    if (e.key === 'Escape') {
      closeCityModal();
      closeAttractionModal();
      closeRouletteModal();
      closeBudgetModal();
      closeVaultDrawer();
      DOM.searchSuggestionsDrop.classList.add('hidden');
      DOM.soundscapeMenu.classList.add('hidden');
      DOM.themeMenu.classList.add('hidden');
    }
  });

  DOM.regionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      DOM.regionTabs.forEach(tBtn => tBtn.classList.remove('active'));
      tab.classList.add('active');
      APP_STATE.activeRegion = tab.dataset.region;
      applyFiltersAndSort();
    });
  });

  DOM.heroVibePills.forEach(pill => {
    pill.addEventListener('click', () => {
      const vibe = pill.dataset.vibe;
      if (APP_STATE.activeVibe === vibe) {
        APP_STATE.activeVibe = 'All';
        pill.classList.remove('active');
        DOM.vibeFilterSelect.value = 'All';
      } else {
        DOM.heroVibePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        APP_STATE.activeVibe = vibe;
        DOM.vibeFilterSelect.value = vibe;
      }
      applyFiltersAndSort();
    });
  });

  DOM.vibeFilterSelect.addEventListener('change', (e) => {
    APP_STATE.activeVibe = e.target.value;
    DOM.heroVibePills.forEach(pill => {
      pill.classList.toggle('active', pill.dataset.vibe === e.target.value);
    });
    applyFiltersAndSort();
  });

  DOM.costFilterSelect.addEventListener('change', (e) => {
    APP_STATE.activeCost = e.target.value;
    applyFiltersAndSort();
  });

  DOM.sortOrderSelect.addEventListener('change', (e) => {
    APP_STATE.sortOrder = e.target.value;
    applyFiltersAndSort();
  });

  DOM.viewGridBtn.addEventListener('click', () => {
    APP_STATE.viewMode = 'grid';
    DOM.viewGridBtn.classList.add('active');
    DOM.viewCompactBtn.classList.remove('active');
    DOM.destinationsGrid.classList.remove('compact-view');
  });

  DOM.viewCompactBtn.addEventListener('click', () => {
    APP_STATE.viewMode = 'compact';
    DOM.viewCompactBtn.classList.add('active');
    DOM.viewGridBtn.classList.remove('active');
    DOM.destinationsGrid.classList.add('compact-view');
  });

  DOM.resetFiltersBtn.addEventListener('click', resetAllFilters);
  DOM.emptyResetBtn.addEventListener('click', resetAllFilters);

  DOM.filterTagsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('chip-remove')) {
      const type = e.target.dataset.type;
      if (type === 'region') {
        APP_STATE.activeRegion = 'All';
        DOM.regionTabs.forEach(tBtn => tBtn.classList.toggle('active', tBtn.dataset.region === 'All'));
      } else if (type === 'vibe') {
        APP_STATE.activeVibe = 'All';
        DOM.vibeFilterSelect.value = 'All';
        DOM.heroVibePills.forEach(p => p.classList.remove('active'));
      } else if (type === 'cost') {
        APP_STATE.activeCost = 'All';
        DOM.costFilterSelect.value = 'All';
      } else if (type === 'search') {
        APP_STATE.searchQuery = '';
        DOM.globalSearchInput.value = '';
      }
      applyFiltersAndSort();
    }
  });

  DOM.soundscapeToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    DOM.soundscapeMenu.classList.toggle('hidden');
    DOM.themeMenu.classList.add('hidden');
  });

  document.querySelectorAll('.sound-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const soundKey = btn.dataset.sound;
      if (AudioEngine.currentSound === soundKey && AudioEngine.isPlaying) {
        AudioEngine.stopAll();
      } else {
        AudioEngine.playTrack(soundKey);
      }
      DOM.soundscapeMenu.classList.add('hidden');
    });
  });

  DOM.soundVolumeSlider.addEventListener('input', (e) => {
    const vol = parseFloat(e.target.value);
    APP_STATE.audio.volume = vol;
    AudioEngine.setVolume(vol);
  });

  DOM.themeToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    DOM.themeMenu.classList.toggle('hidden');
    DOM.soundscapeMenu.classList.add('hidden');
  });

  document.querySelectorAll('.theme-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setTheme(btn.dataset.theme);
    });
  });

  document.addEventListener('click', (e) => {
    if (!DOM.soundscapeMenu.contains(e.target) && !DOM.soundscapeToggleBtn.contains(e.target)) {
      DOM.soundscapeMenu.classList.add('hidden');
    }
    if (!DOM.themeMenu.contains(e.target) && !DOM.themeToggleBtn.contains(e.target)) {
      DOM.themeMenu.classList.add('hidden');
    }
    if (!DOM.searchSuggestionsDrop.contains(e.target) && e.target !== DOM.globalSearchInput) {
      DOM.searchSuggestionsDrop.classList.add('hidden');
    }
  });

  DOM.surpriseMeBtn.addEventListener('click', openRouletteModal);
  DOM.footerOpenRoulette.addEventListener('click', (e) => {
    e.preventDefault();
    openRouletteModal();
  });
  DOM.rouletteModalCloseBtn.addEventListener('click', closeRouletteModal);
  DOM.rouletteModalBackdrop.addEventListener('click', closeRouletteModal);
  DOM.spinRouletteBtn.addEventListener('click', spinDestinyWheel);
  DOM.exploreRouletteBtn.addEventListener('click', () => {
    if (chosenRouletteCity) {
      closeRouletteModal();
      openCityModal(chosenRouletteCity.id);
    }
  });

  DOM.budgetCalcBtn.addEventListener('click', () => openBudgetModal());
  DOM.footerOpenBudget.addEventListener('click', (e) => {
    e.preventDefault();
    openBudgetModal();
  });
  DOM.budgetModalCloseBtn.addEventListener('click', closeBudgetModal);
  DOM.budgetModalBackdrop.addEventListener('click', closeBudgetModal);

  DOM.budgetCitySelect.addEventListener('change', (e) => {
    budgetCalcState.cityId = e.target.value;
    updateBudgetCalculations();
  });

  DOM.budgetStylePills.forEach(pill => {
    pill.addEventListener('click', () => {
      DOM.budgetStylePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      budgetCalcState.style = pill.dataset.style;
      updateBudgetCalculations();
    });
  });

  DOM.budgetDaysRange.addEventListener('input', (e) => {
    budgetCalcState.days = parseInt(e.target.value, 10);
    DOM.budgetDaysVal.textContent = t('daysCount', budgetCalcState.days);
    updateBudgetCalculations();
  });

  DOM.budgetTravelersRange.addEventListener('input', (e) => {
    budgetCalcState.travelers = parseInt(e.target.value, 10);
    DOM.budgetTravelersVal.textContent = t('travelersCount', budgetCalcState.travelers);
    updateBudgetCalculations();
  });

  DOM.vaultDrawerBtn.addEventListener('click', openVaultDrawer);
  DOM.vaultCloseBtn.addEventListener('click', closeVaultDrawer);
  DOM.vaultBackdrop.addEventListener('click', closeVaultDrawer);
  DOM.vaultTabs.forEach(tab => {
    tab.addEventListener('click', () => switchVaultTab(tab.dataset.vtab));
  });
  DOM.vaultClearBtn.addEventListener('click', () => VaultManager.clearAll());
  DOM.vaultExportBtn.addEventListener('click', exportVaultItinerary);

  DOM.cityModalCloseBtn.addEventListener('click', closeCityModal);
  DOM.cityModalBackdrop.addEventListener('click', closeCityModal);

  DOM.cityModalVaultToggleBtn.addEventListener('click', () => {
    if (APP_STATE.activeCityId) {
      const isSaved = VaultManager.toggleCity(APP_STATE.activeCityId);
      updateModalVaultBtn(isSaved);
    }
  });

  DOM.cityModalShareBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);
    showToast(t('toastLinkCopied'), 'share-nodes');
  });

  DOM.cityModalContent.addEventListener('click', (e) => {
    const subtabBtn = e.target.closest('.city-subtab-btn');
    if (subtabBtn) {
      switchCityModalTab(subtabBtn.dataset.subtab);
      return;
    }

    const soundBtn = e.target.closest('[data-action="play-city-sound"]');
    if (soundBtn) {
      AudioEngine.playTrack(soundBtn.dataset.sound);
      return;
    }

    const attVaultBtn = e.target.closest('[data-action="toggle-vault-attraction"]');
    if (attVaultBtn) {
      const attId = attVaultBtn.dataset.attractionId;
      const isSaved = VaultManager.toggleAttraction(attId);
      attVaultBtn.classList.toggle('saved', isSaved);
      attVaultBtn.innerHTML = `<i class="fa-${isSaved ? 'solid' : 'regular'} fa-bookmark"></i> <span>${isSaved ? t('saved') : t('saveToVault')}</span>`;
      return;
    }

    const attDossierBtn = e.target.closest('[data-action="open-attraction"]');
    if (attDossierBtn) {
      const cityId = attDossierBtn.dataset.cityId;
      const attId = attDossierBtn.dataset.attractionId;
      openAttractionModal(cityId, attId);
      return;
    }
  });

  DOM.attractionModalCloseBtn.addEventListener('click', closeAttractionModal);
  DOM.attractionModalBackdrop.addEventListener('click', closeAttractionModal);
  DOM.attractionModalVaultBtn.addEventListener('click', () => {
    const attId = DOM.attractionModalVaultBtn.dataset.attractionId;
    if (attId) {
      const isSaved = VaultManager.toggleAttraction(attId);
      DOM.attractionModalVaultBtn.classList.toggle('saved', isSaved);
      DOM.attractionModalVaultBtn.innerHTML = `<i class="fa-${isSaved ? 'solid' : 'regular'} fa-bookmark"></i>`;
    }
  });

  DOM.destinationsGrid.addEventListener('click', (e) => {
    const vaultBtn = e.target.closest('[data-action="toggle-vault-city"]');
    if (vaultBtn) {
      e.stopPropagation();
      const cityId = vaultBtn.dataset.cityId;
      const isSaved = VaultManager.toggleCity(cityId);
      vaultBtn.classList.toggle('saved', isSaved);
      vaultBtn.innerHTML = `<i class="fa-${isSaved ? 'solid' : 'regular'} fa-bookmark"></i>`;
      return;
    }

    const exploreBtn = e.target.closest('[data-action="open-city"]');
    if (exploreBtn) {
      const cityId = exploreBtn.dataset.cityId;
      openCityModal(cityId);
      return;
    }

    const quickBudgetBtn = e.target.closest('[data-action="quick-budget"]');
    if (quickBudgetBtn) {
      const cityId = quickBudgetBtn.dataset.cityId;
      openBudgetModal(cityId);
      return;
    }

    const card = e.target.closest('.destination-card');
    if (card && !e.target.closest('button')) {
      const cityId = card.dataset.cityId;
      openCityModal(cityId);
    }
  });

  DOM.vaultBody.addEventListener('click', (e) => {
    const removeCityBtn = e.target.closest('[data-action="remove-vault-city"]');
    if (removeCityBtn) {
      VaultManager.toggleCity(removeCityBtn.dataset.cityId);
      return;
    }

    const openCityBtn = e.target.closest('[data-action="open-city"]');
    if (openCityBtn) {
      closeVaultDrawer();
      openCityModal(openCityBtn.dataset.cityId);
      return;
    }

    const removeAttBtn = e.target.closest('[data-action="remove-vault-attraction"]');
    if (removeAttBtn) {
      VaultManager.toggleAttraction(removeAttBtn.dataset.attractionId);
      return;
    }

    const visitedCheck = e.target.closest('[data-action="toggle-visited-attraction"]');
    if (visitedCheck) {
      VaultManager.toggleAttractionVisited(visitedCheck.dataset.attractionId);
      return;
    }

    const packingCheck = e.target.closest('[data-action="toggle-packing"]');
    if (packingCheck) {
      VaultManager.togglePackingItem(packingCheck.dataset.itemId);
      return;
    }

    const removePackingBtn = e.target.closest('[data-action="remove-packing"]');
    if (removePackingBtn) {
      VaultManager.removePackingItem(removePackingBtn.dataset.itemId);
      return;
    }

    const addPackingBtn = e.target.closest('#addPackingItemBtn');
    if (addPackingBtn) {
      const input = document.getElementById('newPackingItemInput');
      if (input) {
        VaultManager.addPackingItem(input.value);
      }
    }
  });

  DOM.vaultBody.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.id === 'newPackingItemInput') {
      VaultManager.addPackingItem(e.target.value);
    }
  });
}

function handleSearchAutocomplete(term) {
  const query = term.trim().toLowerCase();
  const dropdown = DOM.searchSuggestionsDrop;

  if (query.length < 2) {
    dropdown.classList.add('hidden');
    dropdown.innerHTML = '';
    return;
  }

  const matchedCities = APP_STATE.destinations.filter(c => {
    const nEN = (c.name && c.name.en ? c.name.en : '').toLowerCase();
    const nTR = (c.name && c.name.tr ? c.name.tr : '').toLowerCase();
    const cEN = (c.country && c.country.en ? c.country.en : '').toLowerCase();
    const cTR = (c.country && c.country.tr ? c.country.tr : '').toLowerCase();
    return nEN.includes(query) || nTR.includes(query) || cEN.includes(query) || cTR.includes(query);
  }).slice(0, 4);

  let matchedAttractions = [];
  APP_STATE.destinations.forEach(c => {
    (c.attractions || []).forEach(a => {
      const aEN = (a.name && a.name.en ? a.name.en : '').toLowerCase();
      const aTR = (a.name && a.name.tr ? a.name.tr : '').toLowerCase();
      if ((aEN.includes(query) || aTR.includes(query)) && matchedAttractions.length < 3) {
        matchedAttractions.push({ ...a, cityName: t(c.name), cityId: c.id });
      }
    });
  });

  if (!matchedCities.length && !matchedAttractions.length) {
    dropdown.classList.add('hidden');
    dropdown.innerHTML = '';
    return;
  }

  let html = '';
  if (matchedCities.length) {
    html += `<div class="suggestion-group-title">${t('savedCitiesTab')}</div>`;
    matchedCities.forEach(c => {
      html += `
        <div class="suggestion-item" data-action="open-city" data-city-id="${c.id}">
          <span class="item-flag">${c.flag}</span>
          <div>
            <div class="item-title">${escapeHtml(t(c.name))}, ${escapeHtml(t(c.country))}</div>
            <div class="item-sub">${escapeHtml(t(c.tagline))}</div>
          </div>
        </div>
      `;
    });
  }

  if (matchedAttractions.length) {
    html += `<div class="suggestion-group-title">${t('attractionsTab')}</div>`;
    matchedAttractions.forEach(a => {
      html += `
        <div class="suggestion-item" data-action="open-attraction" data-city-id="${a.cityId}" data-attraction-id="${a.id}">
          <i class="fa-solid fa-map-pin" style="color: var(--accent-primary); font-size: 1.1rem;"></i>
          <div>
            <div class="item-title">${escapeHtml(t(a.name))}</div>
            <div class="item-sub">${escapeHtml(a.cityName)} • ${escapeHtml(t(a.category))}</div>
          </div>
        </div>
      `;
    });
  }

  dropdown.innerHTML = html;
  dropdown.classList.remove('hidden');

  dropdown.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
      dropdown.classList.add('hidden');
      if (item.dataset.action === 'open-city') {
        openCityModal(item.dataset.cityId);
      } else if (item.dataset.action === 'open-attraction') {
        openAttractionModal(item.dataset.cityId, item.dataset.attractionId);
      }
    });
  });
}

function startHeroHeadlineCycler() {
  const dynamicWordsTR = [
    "Keşfetmeye Hazır Mısınız?",
    "Kadim Taşlar & Siberpunk Gökyüzü",
    "Baharat Kokulu Sokaklar & Medinalar",
    "Jeotermal Havuzlar & Kutup Fiyortları",
    "Rönesans Kuleleri & Toskana Tepeleri",
    "Gizli Tapınaklar & And Dağları"
  ];
  const dynamicWordsEN = [
    "Ready for the Expedition?",
    "Ancient Stones & Cyberpunk Skies",
    "Spiced Alleys & Labyrinth Medinas",
    "Geothermal Lagoons & Midnight Fjords",
    "Renaissance Towers & Tuscan Hills",
    "Secret Temples & Andean Peaks"
  ];

  let idx = 0;
  setInterval(() => {
    const list = APP_STATE.lang === 'tr' ? dynamicWordsTR : dynamicWordsEN;
    idx = (idx + 1) % list.length;
    DOM.heroDynamicWord.style.opacity = '0';
    DOM.heroDynamicWord.style.transform = 'translateY(8px)';
    DOM.heroDynamicWord.style.transition = 'all 0.35s ease';
    setTimeout(() => {
      DOM.heroDynamicWord.textContent = list[idx];
      DOM.heroDynamicWord.style.opacity = '1';
      DOM.heroDynamicWord.style.transform = 'translateY(0)';
    }, 350);
  }, 4200);
}

// =============================================================================
// 18. INITIALIZATION
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  setTheme(APP_STATE.theme);
  VaultManager.load();
  bindEvents();
  loadDestinationsData();
  startHeroHeadlineCycler();
  
  const savedLang = APP_STATE.lang;
  setLanguage(savedLang, false);
});
