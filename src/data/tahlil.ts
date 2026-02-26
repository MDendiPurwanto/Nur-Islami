export interface TahlilItem {
  id: number;
  title: string;
  arabic: string;
  latin: string;
  translation: string;
}

export const tahlilData: TahlilItem[] = [
  {
    id: 1,
    title: "Hadrah (Pengantar)",
    arabic: "إِلَى حَضْرَةِ النَّبِيِّ الْمُصْطَفَى صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَآلِهِ وَصَحْبِهِ شَيْءٌ لِلّٰهِ لَهُمُ الْفَاتِحَةُ",
    latin: "Ila hadrotin nabiyyil musthofa shollallohu 'alaihi wasallam wa alihi wasohbihi syai-un lillahi lahumul fatihah.",
    translation: "Untuk yang terhormat Nabi pilihan, semoga Allah mencurahkan shalawat dan salam kepadanya, keluarganya, dan sahabatnya. Sesuatu bagi Allah, bagi mereka Al-Fatihah."
  },
  {
    id: 2,
    title: "Surah Al-Ikhlas (3x)",
    arabic: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ. قُلْ هُوَ اللهُ أَحَدٌ. اللهُ الصَّمَدُ. لَمْ يَلِدْ وَلَمْ يُولَدْ. وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ (٣×)",
    latin: "Bismillahir rohmanir rohim. Qul huwallahu ahad. Allahush shomad. Lam yalid walam yuulad. Walam yakul lahu kufuwan ahad. (3x)",
    translation: "Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah: Dialah Allah, Yang Maha Esa. Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu. Dia tiada beranak dan tidak pula diperanakkan, dan tidak ada seorangpun yang setara dengan Dia."
  },
  {
    id: 3,
    title: "Tahlil & Takbir",
    arabic: "لَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ",
    latin: "La ilaha illallahu wallahu akbar.",
    translation: "Tiada Tuhan selain Allah, dan Allah Maha Besar."
  },
  {
    id: 4,
    title: "Surah Al-Falaq",
    arabic: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ. قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ. مِنْ شَرِّ مَا خَلَقَ. وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ. وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ. وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
    latin: "Bismillahir rohmanir rohim. Qul a'udzu birobbil falaq. Min syarri ma kholaq. Wa min syarri ghosiqin idza waqob. Wa min syarrin naffatsati fil 'uqod. Wa min syarri hasidin idza hasad.",
    translation: "Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah: Aku berlindung kepada Tuhan Yang Menguasai subuh, dari kejahatan makhluk-Nya, dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan wanita-wanita tukang sihir yang meniup pada buhul-buhul, dan dari kejahatan pendengki bila ia dengki."
  },
  {
    id: 5,
    title: "Surah An-Nas",
    arabic: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ. قُلْ أَعُوذُ بِرَبِّ النَّاسِ. مَلِكِ النَّاسِ. إِلٰهِ النَّاسِ. مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ. الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ. مِنَ الْجِنَّةِ وَالنَّاسِ",
    latin: "Bismillahir rohmanir rohim. Qul a'udzu birobbin nas. Malikin nas. Ilahin nas. Min syarril waswasil khonnas. Alladzi yuwaswisu fi sudurin nas. Minal jinnati wannas.",
    translation: "Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah: Aku berlindung kepada Tuhan (yang memelihara) manusia. Raja manusia. Sembahan manusia. Dari kejahatan (bisikan) syaitan yang biasa bersembunyi, yang membisikkan (kejahatan) ke dalam dada manusia, dari (golongan) jin dan manusia."
  },
  {
    id: 6,
    title: "Al-Fatihah",
    arabic: "بِسْمِ اللّٰهِ الرَّحٰنِ الرَّحِيْمِ . اَلْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ . اَلرَّحْمٰنِ الرَّحِيْمِ . مَالِكِ يَوْمِ الدِّيْنِ . إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِيْنُ . اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ . صِرَاطَ الَّذِيْنَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّالِّيْنَ",
    latin: "Bismillahir rohmanir rohim. Alhamdulillahi robbil 'alamin. Ar-rohmanir rohim. Maliki yaumid din. Iyyaka na'budu wa iyyaka nasta'in. Ihdinas sirothol mustaqim. Sirothol ladzina an'amta 'alaihim ghoiril maghdhubi 'alaihim waladh dhollin.",
    translation: "Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang. Segala puji bagi Allah, Tuhan semesta alam. Maha Pemurah lagi Maha Penyayang. Yang menguasai di Hari Pembalasan. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan. Tunjukilah kami jalan yang lurus, (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat."
  },
  {
    id: 7,
    title: "Awal Surah Al-Baqarah (1-5)",
    arabic: "بِسْمِ اللّٰهِ الرَّحٰنِ الرَّحِيْمِ . الم . ذٰلِكَ الْكِتٰبُ لَا رَيْبَ فِيْهِ هُدًى لِلْمُتَّقِيْنَ . الَّذِيْنَ يُؤْمِنُوْنَ بِالْغَيْبِ وَيُقِيْمُوْنَ الصَّلٰوةَ وَمِمَّا رَزَقْنٰهُمْ يُنْفِقُوْنَ . وَالَّذِيْنَ يُؤْمِنُوْنَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوْقِنُوْنَ . أُولٰئِكَ عَلَى هُدًى مِنْ رَبِّهِمْ وَأُولٰئِكَ هُمُ الْمُفْلِحُوْنَ",
    latin: "Alif lam mim. Dzalikal kitabu la roiba fih, hudal lil muttaqin. Alladzina yu'minuna bil ghoibi wa yuqimunas sholata wa mimma rozaqnahum yunfiqun. Walladzina yu'minuna bima unzila ilaika wa ma unzila min qoblika wa bil akhiroti hum yuqinun. Ula-ika 'ala hudam mir robbihim wa ula-ika humul muflihun.",
    translation: "Alif laam miim. Kitab (Al Quran) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertaqwa. (yaitu) mereka yang beriman kepada yang ghaib, yang mendirikan shalat, dan menafkahkan sebahagian rezeki yang Kami anugerahkan kepada mereka. dan mereka yang beriman kepada Kitab (Al Quran) yang telah diturunkan kepadamu dan Kitab-kitab yang telah diturunkan sebelummu, serta mereka yakin akan adanya (kehidupan) akhirat. Mereka itulah yang tetap mendapat petunjuk dari Tuhan mereka, dan merekalah orang-orang yang beruntung."
  },
  {
    id: 8,
    title: "Surah Al-Baqarah Ayat 163",
    arabic: "وَإِلٰهُكُمْ إِلٰهٌ وَاحِدٌ لَا إِلٰهَ إِلَّا هُوَ الرَّحْمٰنُ الرَّحِيْمُ",
    latin: "Wa ilahukum ilahun wahidun la ilaha illa huwar rohmanur rohim.",
    translation: "Dan Tuhanmu adalah Tuhan Yang Maha Esa; tidak ada Tuhan melainkan Dia, Yang Maha Pemurah lagi Maha Penyayang."
  },
  {
    id: 9,
    title: "Ayat Kursi (Al-Baqarah 255)",
    arabic: "اللّٰهُ لَا إِلٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    latin: "Allahu la ilaha illa huwal hayyul qoyyum, la ta'khudzuhu sinatun wala naum. Lahu ma fissamawati wa ma fil ardh. Man dzalladzi yasyfa'u 'indahu illa bi-idznih. Ya'lamu ma baina aidihim wa ma kholfahum. Wala yuhithuna bisyai-in min 'ilmihi illa bima sya-a. Wasi'a kursiyyuhus samawati wal ardh, wala ya-uduhu hifzhuhuma wahuwal 'aliyyul 'adzim.",
    translation: "Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya? Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar."
  },
  {
    id: 10,
    title: "Akhir Surah Al-Baqarah (284-286)",
    arabic: "لِلّٰهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَإِنْ تُبْدُوا مَا فِي أَنْفُسِكُمْ أَوْ تُخْفُوهُ يُحَاسِبْكُمْ بِهِ اللّٰهُ فَيَغْفِرُ لِمَنْ يَشَاءُ وَيُعَذِّبُ مَنْ يَشَاءُ وَاللّٰهُ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ كُلٌّ آمَنَ بِاللّٰهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ وَقَالُوا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللّٰهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    latin: "Lillahi ma fissamawati wa ma fil ardh. Wa in tubdu ma fi anfusikum au tukhfuhu yuhasibkum bihillah. Fayaghfiru liman yasya-u wa yu'adzdzibu man yasya-u wallahu 'ala kulli syai-in qodir. Amanar rosulu bima unzila ilaihi mir robbihi wal mu'minun. Kullun amana billahi wa mala-ikatihi wa kutubihi wa rusulih, la nufarriqu baina ahadim mir rusulih. Wa qolu sami'na wa ato'na ghufronaka robbana wa ilaikal mashir. La yukallifullahu nafsan illa wus'aha, laha ma kasabat wa 'alaiha maktasabat. Robbana la tu-akhidzna in nasina au akhto'na. Robbana wala tahmil 'alaina isron kama hamaltahu 'alalladzina min qoblina. Robbana wala tuhammilna ma la toqota lana bih. Wa'fu 'anna waghfir lana warhamna anta maulana fanshurna 'alal qoumil kafirin.",
    translation: "Kepunyaan Allah-lah segala apa yang ada di langit dan apa yang ada di bumi. Dan jika kamu melahirkan apa yang ada di dalam hatimu atau kamu menyembunyikannya, niscaya Allah akan membuat perhitungan dengan kamu tentang perbuatanmu itu. Maka Allah mengampuni siapa yang dikehendaki-Nya dan menyiksa siapa yang dikehendaki-Nya; dan Allah Maha Kuasa atas segala sesuatu. Rasul telah beriman kepada Al Quran yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman. Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya. (Mereka mengatakan): \"Kami tidak membeda-bedakan antara seseorangpun (dengan yang lain) dari rasul-rasul-Nya\", dan mereka mengatakan: \"Kami dengar dan kami taat\". (Mereka berdoa): \"Ampunilah kami ya Tuhan kami dan kepada Engkaulah tempat kembali\". Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Ia mendapat pahala (dari kebajikan) yang diusahakannya dan ia mendapat siksa (dari kejahatan) yang dikerjakannya. (Mereka berdoa): \"Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami tersalah. Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat sebagaimana Engkau bebankkan kepada orang-orang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tak sanggup kami memikulnya. Beri maaflah kami; ampunilah kami; dan rahmatilah kami. Engkaulah Penolong kami, maka tolonglah kami terhadap kaum yang kafir\"."
  },
  {
    id: 11,
    title: "Istighotsah & Permohonan Rahmat",
    arabic: "ارْحَمْنَا يَا أَرْحَمَ الرَّاحِمِينَ (٧×). رَحْمَةُ اللهِ وَبَرَكَاتُهُ عَلَيْكُمْ أَهْلَ الْبَيْتِ إِنَّهُ حَمِيدٌ مَجِيدٌ. إِنَّمَا يُرِيدُ اللهُ لِيُذْهِبَ عَنْكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيرًا. إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا",
    latin: "Irhamna ya arhamar rohimin (7x). Rohmatullahi wa barokatuhu 'alaikum ahlal baiti innahu hamidum majid. Innama yuridullahu liyudz-hiba 'ankumur rijsa ahlal baiti wa yuthoh-hirokum tathiro. Innallaha wa mala-ikatahu yusholluna 'alan nabiyyi ya ayyuhalladzina amanu shollu 'alaihi wa sallimu taslima.",
    translation: "Kasihanilah kami, wahai Tuhan Yang Maha Penyayang (7x). Rahmat Allah dan keberkahan-Nya dicurahkan atas kamu, wahai ahli bait. Sesungguhnya Allah Maha Terpuji lagi Maha Mulia. Sesungguhnya Allah bermaksud hendak menghilangkan dosa dari kamu, wahai ahli bait dan membersihkan kamu sebersih-bersihnya. Sesungguhnya Allah dan malaikat-malaikat-Nya bershalawat untuk Nabi. Wahai orang-orang yang beriman, bershalawatlah kamu untuk Nabi dan ucapkanlah salam penghormatan kepadanya."
  },
  {
    id: 12,
    title: "Shalawat Nabi",
    arabic: "اللَّهُمَّ صَلِّ أَفْضَلَ الصَّلَاةِ عَلَى أَسْعَدِ مَخْلُوقَاتِكَ نُورِ الْهُدَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ عَدَدَ مَعْلُومَاتِكَ وَمِدَادَ كَلِمَاتِكَ كُلَّمَا ذَكَرَكَ الذَّاكِرُونَ وَغَفَلَ عَنْ ذِكْرِكَ الْغَافِلُونَ",
    latin: "Allahumma sholli afdholas sholati 'ala as'adi makhluqotika nuril huda sayyidina muhammadin wa 'ala alihi wa sohbihi wa sallim 'adada ma'lumatika wa midada kalimatika kullama dzakarokadz dzakiruna wa ghofala 'an dzikrikal ghofilun.",
    translation: "Ya Allah, tambahkanlah kesejahteraan yang paling utama kepada makhluk-Mu yang paling bahagia, cahaya petunjuk, penghulu kami Nabi Muhammad, dan kepada keluarganya serta sahabatnya, dan berilah salam sebanyak yang Engkau ketahui dan sebanyak tinta kalimat-Mu, selama orang-orang yang ingat masih mengingat-Mu dan orang-orang yang lalai masih melalaikan ingat kepada-Mu."
  },
  {
    id: 13,
    title: "Hasbunallah & La Hawla",
    arabic: "حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيلُ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيرُ. وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ",
    latin: "Hasbunallahu wa ni'mal wakil ni'mal maula wa ni'man nashir. Wala hawla wala quwwata illa billahil 'aliyyul 'adzim.",
    translation: "Cukuplah Allah bagi kami dan Dia sebaik-baik penolong, sebaik-baik pemimpin dan sebaik-baik penolong. Dan tidak ada daya dan kekuatan kecuali dengan pertolongan Allah Yang Maha Tinggi lagi Maha Agung."
  },
  {
    id: 14,
    title: "Istighfar (3x)",
    arabic: "أَسْتَغْفِرُ اللهَ الْعَظِيمَ (٣×)",
    latin: "Astaghfirullahal 'adzim (3x).",
    translation: "Aku memohon ampun kepada Allah Yang Maha Agung (3x)."
  },
  {
    id: 15,
    title: "Tahlil (La ilaha illallah)",
    arabic: "لَا إِلٰهَ إِلَّا اللهُ (١٠٠×)",
    latin: "La ilaha illallah (100x).",
    translation: "Tiada Tuhan selain Allah (100x)."
  },
  {
    id: 16,
    title: "Kalimat Tauhid",
    arabic: "لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ",
    latin: "La ilaha illallahu muhammadur rosulullahi shollallohu 'alaihi wasallam.",
    translation: "Tiada Tuhan selain Allah, Nabi Muhammad adalah utusan Allah, semoga Allah mencurahkan shalawat dan salam kepadanya."
  },
  {
    id: 17,
    title: "Doa Tahlil (Pembuka)",
    arabic: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ حَمْدًا يُوَافِي نِعَمَهُ وَيُكَافِئُ مَزِيدَهُ. يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَعَظِيمِ سُلْطَانِكَ",
    latin: "Bismillahir rohmanir rohim. Alhamdulillahi robbil 'alamin hamdan yuwafi ni'amahu wa yukafi-u mazidah. Ya robbana lakal hamdu kama yanbaghi lijalali wajhika wa 'adzimi sulthonik.",
    translation: "Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Segala puji bagi Allah, Tuhan semesta alam, pujian yang sebanding dengan nikmat-nikmat-Nya dan menjamin tambahannya. Wahai Tuhan kami, bagi-Mu segala puji sebagaimana selayaknya bagi keagungan wajah-Mu dan kebesaran kekuasaan-Mu."
  },
  {
    id: 18,
    title: "Doa Tahlil (Isi)",
    arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ. اللَّهُمَّ تَقَبَّلْ وَأَوْصِلْ ثَوَابَ مَا قَرَأْنَاهُ مِنَ الْقُرْآنِ الْعَظِيمِ وَمَا هَلَّلْنَاهُ وَمَا سَبَّحْنَاهُ وَمَا اسْتَغْفَرْنَاهُ وَمَا صَلَّيْنَاهُ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ هَدِيَّةً وَاصِلَةً وَرَحْمَةً نَازِلَةً وَبَرَكَةً شَامِلَةً إِلَى حَضْرَةِ حَبِيبِنَا وَشَفِيعِنَا وَقُرَّةِ أَعْيُنِنَا سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ",
    latin: "Allahumma sholli wa sallim 'ala sayyidina muhammadin wa 'ala ali sayyidina muhammad. Allahumma taqobbal wa aushil tsawaba ma qoro'nahu minal qur'anil 'adzimi wa ma hallalnahu wa ma sabbahnahu wa mastaghfornahu wa ma shollainahu 'ala sayyidina muhammadin shollallohu 'alaihi wasallam hadiyyatan washilatan wa rohmatan nazilatan wa barokatan syamilatan ila hadroti habibina wa syafi'ina wa qurroti a'yunina sayyidina wa maulana muhammadin shollallohu 'alaihi wasallam.",
    translation: "Ya Allah, limpahkanlah shalawat dan salam kepada penghulu kami Nabi Muhammad dan kepada keluarga penghulu kami Nabi Muhammad. Ya Allah, terimalah dan sampaikanlah pahala Al-Quran yang kami baca, tahlil kami, tasbih kami, istighfar kami dan shalawat kami kepada penghulu kami Nabi Muhammad shallallahu 'alaihi wasallam sebagai hadiah yang sampai, rahmat yang turun, dan keberkahan yang merata kepada haribaan kekasih kami, pemberi syafa'at kami dan buah hati kami, penghulu dan pemimpin kami Nabi Muhammad shallallahu 'alaihi wasallam."
  },
  {
    id: 19,
    title: "Doa untuk Ahli Kubur",
    arabic: "اللَّهُمَّ اغْفِرْ لَهُمْ وَارْحَمْهُمْ وَعَافِهِمْ وَاعْفُ عَنْهُمْ. اللَّهُمَّ أَنْزِلِ الرَّحْمَةَ وَالْمَغْفِرَةَ عَلَى أَهْلِ الْقُبُورِ مِنْ أَهْلِ لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ",
    latin: "Allahummaghfir lahum warhamhum wa 'afihim wa'fu 'anhum. Allahumma anzilir rohmata wal maghfirota 'ala ahlil quburi min ahli la ilaha illallahu muhammadur rosulullah.",
    translation: "Ya Allah, ampunilah mereka, kasihanilah mereka, sejahterakanlah mereka dan maafkanlah mereka. Ya Allah, turunkanlah rahmat dan ampunan kepada ahli kubur dari golongan orang-orang yang mengucapkan La ilaha illallah Muhammadur Rasulullah."
  },
  {
    id: 20,
    title: "Doa Penutup",
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ. سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ وَسَلَامٌ عَلَى الْمُرْسَلِينَ وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    latin: "Robbana atina fiddunya hasanatan wa fil akhiroti hasanatan wa qina 'adzaban nar. Subhana robbika robbil 'izzati 'amma yashifun wa salamun 'alal mursalin wal hamdu lillahi robbil 'alamin.",
    translation: "Wahai Tuhan kami, berikanlah kami kebaikan di dunia dan kebaikan di akhirat dan peliharalah kami dari siksa neraka. Maha Suci Tuhanmu, Tuhan Yang Maha Perkasa dari apa yang mereka sifatkan. Dan salam sejahtera atas para rasul. Dan segala puji bagi Allah, Tuhan semesta alam."
  }
];
