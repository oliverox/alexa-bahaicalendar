// Localizations of the various labels used by badiDate. English is the default and defines everything.
// All other locales are derived from it using JSON.parse(JSON.stringify(badiLocale.English)) (note that
// to ensure compatibility with older browsers, a JSON polyfill such as json2.js should be used) and only
// overwrite those parts that differ (e.g. the transliterations are identical in all languages using
// roman letters).
// To enable localization of the embedded moment object, the moment module which includes localizations
// can be used. Alternatively, to save bandwidth, required locale information can be defined manually, e.g.
// moment.defineLocale("fr", { parentLocale: "en", monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_")});
// Note that this will globally set the current locale to "fr", so a reset via moment.locale("en") may be required.

var badiLocale = {
    English: {
        month: {
            1: "Bahá",
            2: "Jalál",
            3: "Jamál",
            4: "‘Aẓamat",
            5: "Núr",
            6: "Raḥmat",
            7: "Kalimát",
            8: "Kamál",
            9: "Asmá’",
            10: "‘Izzat",
            11: "Ma<u>sh</u>íyyat",
            12: "‘Ilm",
            13: "Qudrat",
            14: "Qawl",
            15: "Masá’il",
            16: "<u>Sh</u>araf",
            17: "Sulṭán",
            18: "Mulk",
            20: "Ayyám-i-Há",
            19: "‘Alá’"
        },
        monthL: {
            1: "Splendour",
            2: "Glory",
            3: "Beauty",
            4: "Grandeur",
            5: "Light",
            6: "Mercy",
            7: "Words",
            8: "Perfection",
            9: "Names",
            10: "Might",
            11: "Will",
            12: "Knowledge",
            13: "Power",
            14: "Speech",
            15: "Questions",
            16: "Honour",
            17: "Sovereignty",
            18: "Dominion",
            20: "Ayyám-i-Há",
            19: "Loftiness"
        },
        holyDay: {
            1: "Naw-Rúz",
            2: "First day of Riḍván",
            3: "Ninth day of Riḍván",
            4: "Twelfth day of Riḍván",
            5: "Declaration of the Báb",
            6: "Ascension of Bahá’u’lláh",
            7: "Martyrdom of the Báb",
            8: "Birth of the Báb",
            9: "Birth of Bahá’u’lláh",
            10: "Day of the Covenant",
            11: "Ascension of `Abdu’l-Bahá"
        },
        // CAREFUL: Numbering corresponds to Badí' week, i.e. 1 is Jalál (-> Saturday)
        weekday: {
            1: "Jalál",
            2: "Jamál",
            3: "Kamál",
            4: "Fiḍál",
            5: "‘Idál",
            6: "Istijlál",
            7: "Istiqlál"
        },
        weekdayAbbr3: {
            1: "Jal",
            2: "Jam",
            3: "Kam",
            4: "Fiḍ",
            5: "‘Idá",
            6: "Isj",
            7: "Isq"
        },
        weekdayAbbr2: {
            1: "Jl",
            2: "Jm",
            3: "Ka",
            4: "Fi",
            5: "‘Id",
            6: "Ij",
            7: "Iq"
        },
        weekdayL: {
            1: "Glory",
            2: "Beauty",
            3: "Perfection",
            4: "Grace",
            5: "Justice",
            6: "Majesty",
            7: "Independence"
        },
        yearInVahid: {
            1: "Alif",
            2: "Bá'",
            3: "Ab",
            4: "Dál",
            5: "Báb",
            6: "Váv",
            7: "Abad",
            8: "Jád",
            9: "Bahá'",
            10: "Ḥubb",
            11: "Bahháj",
            12: "Javáb",
            13: "Aḥad",
            14: "Vahháb",
            15: "Vidád",
            16: "Badí'",
            17: "Bahí",
            18: "Abhá",
            19: "Váḥid"
        },
        BE: "BE",
        badiCalendar: "Badí' Calendar",
        locale: "en"
    }
};

// ARABIC
{
    badiLocale.Arabic = JSON.parse(JSON.stringify(badiLocale.English));

    badiLocale.Arabic.month = {
        1: "البهاء",
        2: "الجلال",
        3: "الجمال",
        4: "العظمة",
        5: "النور",
        6: "الرحمة",
        7: "الكلمات",
        8: "الكمال",
        9: "الأسماء",
        10: "العزّة",
        11: "المشية",
        12: "العلم",
        13: "القدرة",
        14: "القول",
        15: "المسائل",
        16: "الشرف",
        17: "السلطان",
        18: "الملك",
        20: "ايام الهاء",
        19: "العلاء"
    };

    badiLocale.Arabic.monthL = {
        1: "البهاء",
        2: "الجلال",
        3: "الجمال",
        4: "العظمة",
        5: "النور",
        6: "الرحمة",
        7: "الكلمات",
        8: "الكمال",
        9: "الأسماء",
        10: "العزّة",
        11: "المشية",
        12: "العلم",
        13: "القدرة",
        14: "القول",
        15: "المسائل",
        16: "الشرف",
        17: "السلطان",
        18: "الملك",
        20: "ايام الهاء",
        19: "العلاء"
    };

    badiLocale.Arabic.holyDay = {
        1: "عيد النَّيروز",
        2: "اليوم الأول من عيد الرِّضوان",
        3: "اليوم التاسع من عيد الرِّضوان",
        4: "اليوم الثاني عشر من عيد الرِّضوان",
        5: "يوم إعلان دعوة حضرة الباب",
        6: "يوم صعود حضرة بهاء الله",
        7: "يوم استشهاد حضرة الباب",
        8: "يوم ولادة حضرة الباب",
        9: "يوم ولادة حضرة بهاء الله",
        10: "يوم الميثاق",
        11: "يوم صعود حضرة عبد البهاء"
    };

    badiLocale.Arabic.weekday = {
        1: "الجلال",
        2: "الجمال",
        3: "الكمال",
        4: "الفضّال",
        5: "العدّال",
        6: "الأستجلال",
        7: "الاستقلال"
    };

    badiLocale.Arabic.weekdayAbbr3 = {
        1: "جلا",
        2: "جما",
        3: "كما",
        4: "فضّا",
        5: "عدّا",
        6: "اسج",
        7: "اسق"
    };

    badiLocale.Arabic.weekdayAbbr2 = {
        1: "جل",
        2: "جم",
        3: "كم",
        4: "فض",
        5: "عد",
        6: "اج",
        7: "اق"
    };

    badiLocale.Arabic.weekdayL = {
        1: "الجلال",
        2: "الجمال",
        3: "الكمال",
        4: "الفضّال",
        5: "العدّال",
        6: "الأستجلال",
        7: "أستقلال",
    };

    badiLocale.Arabic.yearInVahid = {
        1: "ألف",
        2: "باء",
        3: "أب",
        4: "دﺍﻝ",
        5: "باب",
        6: "وﺍو",
        7: "أبد",
        8: "جاد",
        9: "بهاء",
        10: "حب",
        11: "بهاج",
        12: "جواب",
        13: "احد",
        14: "وﻫﺎب",
        15: "وداد",
        16: "بدیع",
        17: "بهي",
        18: "ابهى",
        19: "واحد"
    };

    badiLocale.Arabic.BE = "بديع";
    badiLocale.Arabic.badiCalendar = "تقويم بديع";
    badiLocale.Arabic.locale = "ar";
}

// CHINESE
{
    badiLocale.Chinese = JSON.parse(JSON.stringify(badiLocale.English));

    badiLocale.Chinese.month = {
        1: "巴哈",
        2: "贾拉勒",
        3: "贾迈勒",
        4: "阿泽迈特",
        5: "努尔",
        6: "拉赫迈特",
        7: "凯利马特",
        8: "卡迈勒",
        9: "艾斯玛",
        10: "伊扎特",
        11: "迈希耶特",
        12: "伊勒姆",
        13: "古德雷特",
        14: "高勒",
        15: "迈萨伊勒",
        16: "谢拉夫",
        17: "苏丹",
        18: "穆勒克",
        20: "阿亚米哈",
        19: "阿拉"
    };

    badiLocale.Chinese.monthL = {
        1: "耀",
        2: "辉",
        3: "美",
        4: "宏",
        5: "光",
        6: "仁",
        7: "言",
        8: "完",
        9: "名",
        10: "能",
        11: "意",
        12: "知",
        13: "力",
        14: "语",
        15: "问",
        16: "尊",
        17: "权",
        18: "统",
        20: "哈之日",
        19: "崇"
    };

    badiLocale.Chinese.holyDay = {
        1: "诺鲁孜节",
        2: "里兹万节第一日",
        3: "里兹万节第九日",
        4: "里兹万节第十二日",
        5: "巴孛宣示日",
        6: "巴哈欧拉升天日",
        7: "巴孛殉道日",
        8: "巴孛诞辰",
        9: "巴哈欧拉诞辰",
        10: "圣约日",
        11: "阿博都-巴哈升天日"
    };

    badiLocale.Chinese.weekday = {
        1: "贾拉勒",
        2: "贾迈勒",
        3: "卡迈勒",
        4: "菲达勒",
        5: "伊达勒",
        6: "伊斯提杰拉勒",
        7: "伊斯提格拉勒"
    };

    badiLocale.Chinese.weekdayAbbr3 = {
        1: "贾拉勒",
        2: "贾迈勒",
        3: "卡迈勒",
        4: "菲达勒",
        5: "伊达勒",
        6: "伊斯杰",
        7: "伊斯格"
    };

    badiLocale.Chinese.weekdayAbbr2 = {
        1: "贾拉",
        2: "贾迈",
        3: "卡迈",
        4: "菲达",
        5: "伊达",
        6: "伊杰",
        7: "伊格"
    };

    badiLocale.Chinese.weekdayL = {
        1: "辉日",
        2: "美日",
        3: "完日",
        4: "恩日",
        5: "正日",
        6: "威日",
        7: "独日"
    };

    badiLocale.Chinese.yearInVahid = {
        1: "艾利夫",
        2: "巴",
        3: "艾卜",
        4: "达勒",
        5: "巴卜",
        6: "瓦乌",
        7: "阿巴德",
        8: "贾德",
        9: "巴哈",
        10: "胡卜",
        11: "巴哈杰",
        12: "贾瓦卜",
        13: "阿哈德",
        14: "瓦哈卜",
        15: "维达德",
        16: "巴迪",
        17: "巴希",
        18: "阿卜哈",
        19: "瓦希德"
    };

    badiLocale.Chinese.BE = "BE";
    badiLocale.Chinese.badiCalendar = "巴迪历";
    badiLocale.Chinese.locale = "zh-CN";
}

// DUTCH
{
    badiLocale.Dutch = JSON.parse(JSON.stringify(badiLocale.English));

    badiLocale.Dutch.monthL = {
        1: "Pracht",
        2: "Heerlijkheid",
        3: "Schoonheid",
        4: "Grootheid",
        5: "Licht",
        6: "Barmhartigheid",
        7: "Woorden",
        8: "Volmaaktheid",
        9: "Namen",
        10: "Macht",
        11: "Wil",
        12: "Kennis",
        13: "Kracht",
        14: "Spraak",
        15: "Vragen",
        16: "Eer",
        17: "Soevereiniteit",
        18: "Heerschappij",
        20: "Ayyám-i-Há",
        19: "Verhevenheid"
    };

    badiLocale.Dutch.holyDay = {
        1: "Naw-Rúz",
        2: "Eerste dag van Riḍván",
        3: "Negende dag van Riḍván",
        4: "Twaalfde dag van Riḍván",
        5: "Verkondiging van de Báb",
        6: "Heengaan van Bahá’u’lláh",
        7: "Marteldood van de Báb",
        8: "Geboortedag van de Báb",
        9: "Geboortedag van Bahá’u’lláh",
        10: "Dag van het Verbond",
        11: "Heengaan van `Abdu’l-Bahá"
    };

    badiLocale.Dutch.weekdayL = {
        1: "Heerlijkheid",
        2: "Schoonheid",
        3: "Volmaaktheid",
        4: "Genade",
        5: "Gerechtigheid",
        6: "Majesteit",
        7: "Onafhankelijkheid"
    };

    badiLocale.Dutch.BE = "B.E.";
    badiLocale.Dutch.badiCalendar = "Badí'-Kalender";
    badiLocale.Dutch.locale = "nl";
}

// FRENCH
{
    badiLocale.French = JSON.parse(JSON.stringify(badiLocale.English));

    badiLocale.French.monthL = {
        1: "Splendeur",
        2: "Gloire",
        3: "Beauté",
        4: "Grandeur",
        5: "Lumière",
        6: "Miséricorde",
        7: "Paroles",
        8: "Perfection",
        9: "Noms",
        10: "Puissance",
        11: "Volonté",
        12: "Connaissance",
        13: "Pouvoir",
        14: "Discours",
        15: "Questions",
        16: "Honneur",
        17: "Souveraineté",
        18: "Empire",
        20: "Ayyám-i-Há",
        19: "Élévation"
    };

    badiLocale.French.holyDay = {
        1: "Naw-Rúz",
        2: "Premier jour de Riḍván",
        3: "Neuvième jour de Riḍván",
        4: "Douzième jour de Riḍván",
        5: "Déclaration du Báb",
        6: "Ascension de Bahá’u’lláh",
        7: "Martyre du Báb",
        8: "Naissance du Báb",
        9: "Naissance de Bahá’u’lláh",
        10: "Jour de l’Alliance",
        11: "Ascension de `Abdu’l-Bahá"
    };

    badiLocale.French.weekdayL = {
        1: "Gloire",
        2: "Beauté",
        3: "Perfection",
        4: "Grâce",
        5: "Justice",
        6: "Majesté",
        7: "Indépendance"
    };

    badiLocale.French.BE = "E.B.";
    badiLocale.French.badiCalendar = "Calendrier Badí’";
    badiLocale.French.locale = "fr";
}

// GERMAN
{
    badiLocale.German = JSON.parse(JSON.stringify(badiLocale.English));

    badiLocale.German.monthL = {
        1: "Herrlichkeit",
        2: "Ruhm",
        3: "Schönheit",
        4: "Größe",
        5: "Licht",
        6: "Barmherzigkeit",
        7: "Worte",
        8: "Vollkommenheit",
        9: "Namen",
        10: "Macht",
        11: "Wille",
        12: "Wissen",
        13: "Kraft",
        14: "Sprache",
        15: "Fragen",
        16: "Ehre",
        17: "Souveränität",
        18: "Herrschaft",
        20: "Ayyám-i-Há",
        19: "Erhabenheit"
    };

    badiLocale.German.holyDay = {
        1: "Naw-Rúz",
        2: "Erster Riḍván-Tag",
        3: "Neunter Riḍván-Tag",
        4: "Zwölfter Riḍván-Tag",
        5: "Erklärung des Báb",
        6: "Hinscheiden Bahá’u’lláhs",
        7: "Märtyrertod des Báb",
        8: "Geburt des Báb",
        9: "Geburt Bahá’u’lláhs",
        10: "Tag des Bundes",
        11: "Hinscheiden `Abdu’l-Bahás"
    };

    badiLocale.German.weekdayL = {
        1: "Ruhm",
        2: "Schönheit",
        3: "Vollkommenheit",
        4: "Gnade",
        5: "Gerechtigkeit",
        6: "Majestät",
        7: "Unabhängigkeit"
    };

    badiLocale.German.BE = "B.E.";
    badiLocale.German.badiCalendar = "Badí’ Kalender";
    badiLocale.German.locale = "de";
}

// LATVIAN
{
    badiLocale.Latvian = JSON.parse(JSON.stringify(badiLocale.English));

    badiLocale.Latvian.monthL = {
        1: "Spožums",
        2: "Slava",
        3: "Skaistums",
        4: "Dižums",
        5: "Gaisma",
        6: "Žēlastība",
        7: "Vārdi",
        8: "Pilnība",
        9: "Nosaukumi",
        10: "Varenība",
        11: "Griba",
        12: "Zināšanas",
        13: "Vara",
        14: "Runa",
        15: "Jautājumi",
        16: "Gods",
        17: "Suverenitāte",
        18: "Valdīšana",
        20: "Ayyám-i-Há",
        19: "Cēlums"
    };

    badiLocale.Latvian.holyDay = {
        0: "Naw-Rúz",
        1: "Riḍván pirmā diena",
        2: "Riḍván devītā diena",
        3: "Riḍván divpadsmitā diena",
        4: "Bába paziņojums",
        5: "Bahá’u’lláh Debessbraukšana",
        6: "Bába mocekļa nāve",
        7: "Bába dzimšanas diena",
        8: "Bahá’u’lláh dzimšanas diena",
        9: "Derības diena",
        10: "`Abdu’l-Bahá Debessbraukšana"
    };

    badiLocale.Latvian.weekdayL = {
        1: "Slava",
        2: "Skaistums",
        3: "Pilnība",
        4: "Žēlastība",
        5: "Taisnīgums",
        6: "Majestātiskums",
        7: "Neatkarība"
    };

    badiLocale.Latvian.BE = "B.Ē.";
    badiLocale.Latvian.badiCalendar = "Badí’ kalendārs";
    badiLocale.Latvian.locale = "lv";
}

// PERSIAN
{
    badiLocale.Persian = JSON.parse(JSON.stringify(badiLocale.English));

    badiLocale.Persian.month = badiLocale.Arabic.month;

    badiLocale.Persian.monthL = {
        1: "بهاء",
        2: "جلال",
        3: "جمال",
        4: "عظمت",
        5: "نور",
        6: "رحمت",
        7: "كلمات",
        8: "كمال",
        9: "أسماء",
        10: "عزّت",
        11: "مشيت",
        12: "علم",
        13: "قدرت",
        14: "قول",
        15: "مسائل",
        16: "شرف",
        17: "سلطان",
        18: "ملك",
        20: "ايام ها",
        19: "علاء"
    };

    badiLocale.Persian.holyDay = {
        1: "عید نوروز",
        2: "روز اوّل عید رضوان",
        3: "روز نهم عید رضوان",
        4: "روز دوازدهم عید رضوان",
        5: "بعثت حضرت باب",
        6: "صعود حضرت بهاالله",
        7: "شهادت حضرت اعلی",
        8: "تولّد حضرت اعلی",
        9: "تولّد حضرت بهالله",
        10: "روز عهد و میثاق",
        11: "صعود حضرت عبدالبها"
    };

    badiLocale.Persian.weekday = {
        1: "یوم الجلال",
        2: "یوم الجمال",
        3: "یوم الكمال",
        4: "یوم الفضّال",
        5: "یوم العدّال",
        6: "یوم الأستجلال",
        7: "یوم الاستقلال"
    };

    badiLocale.Persian.weekdayAbbr3 = badiLocale.Arabic.weekdayAbbr3;

    badiLocale.Persian.weekdayAbbr2 = badiLocale.Arabic.weekdayAbbr2;

    badiLocale.Persian.weekdayL = {
        1: "جلال",
        2: "جمال",
        3: "كمال",
        4: "فضّال",
        5: "عدّال",
        6: "استجلال",
        7: "استقلال",
    };

    badiLocale.Persian.yearInVahid = badiLocale.Arabic.yearInVahid;

    badiLocale.Persian.BE = "بديع";
    badiLocale.Persian.badiCalendar = "تقويم بديع";
    badiLocale.Persian.locale = "fa";
}

// PORTUGUESE
{
    badiLocale.Portuguese = JSON.parse(JSON.stringify(badiLocale.English));

    badiLocale.Portuguese.monthL = {
        1: "Esplendor",
        2: "Glória",
        3: "Beleza",
        4: "Grandeza",
        5: "Luz",
        6: "Miséricórdia",
        7: "Palavras",
        8: "Perfeição",
        9: "Nomes",
        10: "Potência",
        11: "Vontade",
        12: "Conhecimento",
        13: "Poder",
        14: "Discurso",
        15: "Perguntas",
        16: "Honra",
        17: "Soberania",
        18: "Domínio",
        20: "Ayyám-i-Há",
        19: "Sublimidade"
    };

    badiLocale.Portuguese.holyDay = {
        0: "Naw-Rúz",
        1: "1º dia do Riḍván",
        2: "9º dia do Riḍván",
        3: "12º dia do Riḍván",
        4: "Declaração do Báb",
        5: "Ascensão de Bahá’u’lláh",
        6: "Martírio do Báb",
        7: "Aniversário do Báb",
        8: "Aniversário de Bahá’u’lláh",
        9: "Dia do Convênio",
        10: "Ascensão de `Abdu’l-Bahá"
    };

    badiLocale.Portuguese.weekdayL = {
        1: "Glória",
        2: "Beleza",
        3: "Perfeição",
        4: "Graça",
        5: "Justiça",
        6: "Majestade",
        7: "Independência"
    };

    badiLocale.Portuguese.BE = "E.B.";
    badiLocale.Portuguese.badiCalendar = "Calendário Badí’";
    badiLocale.Portuguese.locale = "pt";
}

// RUSSIAN
{
    badiLocale.Russian = JSON.parse(JSON.stringify(badiLocale.English));

    badiLocale.Russian.month = {
        1: "Бахā",
        2: "Джалāл",
        3: "Джамāл",
        4: "‘Аз̣амат",
        5: "Нӯр",
        6: "Рах̣мат",
        7: "Калимāт",
        8: "Камāл",
        9: "Асмā’",
        10: "‘Иззат",
        11: "Машӣййат",
        12: "‘Илм",
        13: "К̣удрат",
        14: "К̣аул",
        15: "Масā’ил",
        16: "Шараф",
        17: "Султ̣ан",
        18: "Мулк",
        20: "Аййāм-и Хā’",
        19: "‘Алā’"
    };

    badiLocale.Russian.monthL = {
        1: "Великолепие",
        2: "Слава",
        3: "Красота",
        4: "Величие",
        5: "Свет",
        6: "Милость",
        7: "Слова",
        8: "Совершенство",
        9: "Имена",
        10: "Мощь",
        11: "Воля",
        12: "Знание",
        13: "Могущество",
        14: "Речь",
        15: "Вопросы",
        16: "Честь",
        17: "Владычество",
        18: "Господство",
        20: "Аййāм-и Хā’",
        19: "Возвышенность"
    };

    badiLocale.Russian.holyDay = {
        0: "Нау-Рӯз",
        1: "1-й день Рид̣вāна",
        2: "9-й день Рид̣вāна",
        3: "12-й день Рид̣вāна",
        4: "Возвещение Баба",
        5: "Вознесение Бахауллы",
        6: "Мученическая Баба",
        7: "рождения Баба",
        8: "рождения Бахауллы",
        9: "День Завета",
        10: "Вознесение Абдул-Баха"
    };

    badiLocale.Russian.weekday = {
        1: "Джалāл",
        2: "Джамāл",
        3: "Камāл",
        4: "Фид̣āл",
        5: "‘Идāл",
        6: "Истиджлāл",
        7: "Истик̣лāл"
    };

    badiLocale.Russian.weekdayAbbr3 = {
        1: "Джл",
        2: "Джм",
        3: "Кам",
        4: "Фид̣",
        5: "‘Идā",
        6: "Исд",
        7: "Иск̣"
    };

    badiLocale.Russian.weekdayAbbr2 = {
        1: "Дл",
        2: "Дм",
        3: "Ка",
        4: "Фи",
        5: "‘Ид",
        6: "Ид",
        7: "Ик̣"
    };

    badiLocale.Russian.weekdayL = {
        1: "Слава",
        2: "Красота",
        3: "Совершенство",
        4: "Благодать",
        5: "Справедливость",
        6: "Величие",
        7: "Независимость"
    };

    badiLocale.Russian.yearInVahid = {
        1: "Алиф",
        2: "Бā’",
        3: "Аб",
        4: "Дāл",
        5: "Бāб",
        6: "Вāв",
        7: "Абад",
        8: "Джāд",
        9: "Бахā'",
        10: "Х̣убб",
        11: "Баххāдж",
        12: "Джавāб",
        13: "Ах̣ад",
        14: "Ваххāб",
        15: "Видāд",
        16: "Бадӣ‘",
        17: "Бахӣ",
        18: "Абхā",
        19: "Вāх̣ид"
    };

    badiLocale.Russian.BE = "Э.Б.";
    badiLocale.Russian.badiCalendar = "Календарь Бадӣ'";
    badiLocale.Russian.locale = "ru";
}

// SPANISH
{
    badiLocale.Spanish = JSON.parse(JSON.stringify(badiLocale.English));

    badiLocale.Spanish.monthL = {
        1: "Esplendor",
        2: "Gloria",
        3: "Belleza",
        4: "Grandeza",
        5: "Luz",
        6: "Misericordia",
        7: "Palabras",
        8: "Perfección",
        9: "Nombres",
        10: "Fuerza",
        11: "Voluntad",
        12: "Conocimiento",
        13: "Poder",
        14: "Discurso",
        15: "Preguntas",
        16: "Honor",
        17: "Soberanía",
        18: "Dominio",
        20: "Ayyám-i-Há",
        19: "Sublimidad"
    };

    badiLocale.Spanish.holyDay = {
        0: "Naw-Rúz",
        1: "Primer día de Riḍván",
        2: "Noveno día de Riḍván",
        3: "Duodécimo día de Riḍván",
        4: "Declaración del Báb",
        5: "Ascensión de Bahá’u’lláh",
        6: "Martirio del Báb",
        7: "Nacimiento del Báb",
        8: "Nacimiento de Bahá’u’lláh",
        9: "Día de la Alianza",
        10: "Fallecimiento de `Abdu’l-Bahá"
    };

    badiLocale.Spanish.weekdayL = {
        1: "Gloria",
        2: "Belleza",
        3: "Perfección",
        4: "Gracia",
        5: "Justicia",
        6: "Majestuosidad",
        7: "Independencia"
    };

    badiLocale.Spanish.BE = "E.B.";
    badiLocale.Spanish.badiCalendar = "Calendario Badí’";
    badiLocale.Spanish.locale = "es";
}

// SWEDISH
{
    badiLocale.Swedish = JSON.parse(JSON.stringify(badiLocale.English));

    badiLocale.Swedish.monthL = {
        1: "Praktfullhet",
        2: "Härlighet",
        3: "Skönhet",
        4: "Storhet",
        5: "Ljus",
        6: "Barmhärtighet",
        7: "Ord",
        8: "Fullkomlighet",
        9: "Namn",
        10: "Makt",
        11: "Vilja",
        12: "Kunskap",
        13: "Kraft",
        14: "Tal",
        15: "Frågor",
        16: "Ära",
        17: "Överhöghet",
        18: "Herravälde",
        20: "Ayyám-i-Há",
        19: "Upphöjdhet"
    };

    badiLocale.Swedish.holyDay = {
        0: "Naw-Rúz",
        1: "Första Riḍván",
        2: "Nionde Riḍván",
        3: "Tolfte Riḍván",
        4: "Bábs Deklaration",
        5: "Bahá’u’lláhs Bortgång",
        6: "Bábs Martyrskap",
        7: "Bábs Födelse",
        8: "Bahá’u’lláhs Födelse",
        9: "Förbundets dag",
        10: "`Abdu’l-Bahás Bortgång"
    };

    badiLocale.Swedish.weekdayL = {
        1: "Härlighet",
        2: "Skönhet",
        3: "Fullkomlighet",
        4: "Nåd",
        5: "Rättvisa",
        6: "Majestät",
        7: "Oberoende"
    };

    badiLocale.Swedish.BE = "B.E.";
    badiLocale.Swedish.badiCalendar = "Badí’kalendern";
    badiLocale.Swedish.locale = "sv";
}

module.exports = badiLocale;
