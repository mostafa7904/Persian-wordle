/**
 *
 * @returns The number of today's wordle. Starting from the start of 2022
 */
export function getNumberOfWordle() {
  const milisecondsInADay = 1000 * 60 * 60 * 24;
  const now = new Date();
  const start = new Date(2022, 0, 0);
  const diff = Number(now) - Number(start);
  const day = Math.floor(diff / milisecondsInADay);
  return day;
}

/**
 * @description This function returns an answer based on the date. But if you pass the random=1 query, it'll generate a random answer
 * @returns The answer to the puzzle
 */
export function getWordOfTheDay() {
  const queries = new URLSearchParams(location.search);
  const isRandom = !!queries.get("random");

  let day;

  if (isRandom) {
    day = Math.floor(Math.random() * answers.length);
  } else {
    day = getNumberOfWordle();
    while (day > answers.length) {
      day -= answers.length;
    }
  }

  const todayAnswer = answers[day];
  return todayAnswer;
}

const answers = [
  "سوریه",
  "پزشکی",
  "رهبری",
  "بالکن",
  "ترازو",
  "حادثه",
  "روستا",
  "پرنمک",
  "خواست",
  "پسنده",
  "اطوسا",
  "داوری",
  "ابرین",
  "ابساط",
  "رضوان",
  "فرسنگ",
  "ارایش",
  "سنندج",
  "دودکش",
  "تاریک",
  "اکبند",
  "شبگیر",
  "سامان",
  "شیطنت",
  "تشخیص",
  "ببخشا",
  "اخبار",
  "اربیل",
  "اجلاس",
  "زنجیر",
  "قرینه",
  "دشمنی",
  "شمشیر",
  "زباله",
  "راستی",
  "اشکار",
  "روزنه",
  "تیمار",
  "تاجیک",
  "مریضی",
  "بقرات",
  "بالشت",
  "خاتمه",
  "تسییح",
  "زحمات",
  "استاد",
  "پژهان",
  "افرین",
  "ژنتیک",
  "تاختن",
  "پیوند",
  "صندوق",
  "چکامه",
  "بیراه",
  "اویشن",
  "خوشگل",
  "ارباب",
  "اباذر",
  "سهراب",
  "حلزون",
  "هجدهم",
  "تشبیح",
  "ارمان",
  "ارشیو",
  "عبارت",
  "ساطور",
  "پرهمت",
  "رکورد",
  "پرمغز",
  "پروره",
  "صاعقه",
  "اشغال",
  "کابوس",
  "اسکنر",
  "رشیدا",
  "سماور",
  "طاقوت",
  "چاخان",
  "البرز",
  "اسکیت",
  "چنگول",
  "استان",
  "دربار",
  "اندام",
  "دیدار",
  "خوانا",
  "دلگشا",
  "خلخال",
  "صیانت",
  "اشاعر",
  "چارسو",
  "ظرفیت",
  "صحابی",
  "اجذام",
  "محتاج",
  "صابون",
  "باختر",
  "خرمگس",
  "درستی",
  "موسیر",
  "سرهنگ",
  "سردشت",
  "شطرنج",
  "ژزفین",
  "سپهبد",
  "زیگیل",
  "حمالی",
  "ذخایر",
  "خزانه",
  "زرورق",
  "رهگذر",
  "انبار",
  "سنگین",
  "فلانی",
  "اطاعت",
  "چشایی",
  "سکونت",
  "اجلال",
  "اراضی",
  "اگزما",
  "دوستی",
  "عاشقی",
  "منتهی",
  "قلمچه",
  "احداث",
  "بیهوش",
  "سبلان",
  "سانحه",
  "اسکلت",
  "طیاره",
  "ارامی",
  "صندلی",
  "ژوبین",
  "چکاوک",
  "اسمان",
  "عارضه",
  "اجازه",
  "تشویش",
  "ادویه",
  "خلبان",
  "شبگرد",
  "بغداد",
  "صورتی",
  "دانیل",
  "شرافت",
  "هپروت",
  "اگزوز",
  "اجلاد",
  "خزازی",
  "کمینه",
  "سکسکه",
  "سباره",
  "سیمان",
  "سلطنت",
  "حکاکی",
  "الوچه",
  "تاکید",
  "رفتگر",
  "پریسا",
  "بیزار",
  "پرهنر",
  "سیاوش",
  "زلزله",
  "قورمه",
  "ارابه",
  "رطوبت",
  "سیراب",
  "درگاه",
  "تدوین",
  "سعادت",
  "ذخیره",
  "سنباد",
  "گردان",
  "خرازی",
  "هاجره",
  "زاگرس",
  "فاجعه",
  "شکنجه",
  "زنجان",
  "ستاره",
  "پریدن",
  "پژوهش",
  "سلامت",
  "باهار",
  "پژمان",
  "ارامش",
  "فلسفه",
  "سرمست",
  "سرایت",
  "سگخور",
  "اجناب",
  "بلوچی",
  "خیرگی",
  "خیاطی",
  "پرمهر",
  "اجانب",
  "شیراز",
  "انکار",
  "روشنا",
  "طایفه",
  "پژواک",
  "اجدال",
  "سیلاب",
  "فکاهی",
  "سیگما",
  "باختن",
  "شستشو",
  "پستچی",
  "غمباد",
  "سوغات",
  "پرمنش",
  "قاصدک",
  "حامله",
  "اجداد",
  "باادب",
  "احبار",
  "روسیه",
  "فرشته",
  "مناره",
  "اسلوب",
  "زیتون",
  "سرشیر",
  "الماس",
  "هاونگ",
  "حملات",
  "پرهام",
  "رعایت",
  "دربست",
  "روانی",
  "اشاعه",
  "چکاوه",
  "خرگوش",
  "میترا",
  "هتاکی",
  "غرامت",
  "انزلی",
  "شبانه",
  "فرزند",
  "ببخشد",
  "کاشان",
  "پرهوس",
  "انگلک",
  "دوران",
  "کارون",
  "اجمال",
  "زندان",
  "بنزین",
  "سرسخت",
  "دلگرم",
  "طاقچه",
  "شمشاد",
  "صداقت",
  "قنادی",
  "باوفا",
  "غریزه",
  "تابوت",
  "شاهین",
  "ارزوی",
  "خدیجه",
  "سرسبز",
  "حداقل",
  "تابلو",
  "انجمن",
  "رایزن",
  "اینجا",
  "تیرگی",
  "منطقی",
  "اسهال",
  "قابیل",
  "پریوش",
  "قلمرو",
  "شبکیه",
  "دستکش",
  "شابلن",
  "بانمک",
  "برتری",
  "ابداع",
  "رقاصه",
  "رایحه",
  "قصابی",
  "داراب",
  "بلبلی",
  "دژبان",
  "درامد",
  "ضایعه",
  "سرویس",
  "گیلان",
  "داداش",
  "حافظه",
  "اژدها",
  "شاپرک",
  "فراست",
  "شهادت",
  "خرداد",
  "پرورش",
  "اجساد",
  "سیاره",
  "اصلاح",
  "کاپوت",
  "انبرک",
  "رامسر",
  "غضنفر",
  "اسکله",
  "ادیار",
  "خروار",
  "اجاره",
  "فارسی",
  "دیلاق",
  "حسابی",
  "بلژیک",
  "ابراز",
  "خرچنگ",
  "دیروز",
  "زبانه",
  "شاقول",
  "اسکول",
  "انگشت",
  "بیهود",
  "دریده",
  "شقایق",
  "سیگار",
  "سنجاب",
  "سیمرغ",
  "کالبد",
  "رقابت",
  "سرپیچ",
  "سوسیس",
  "عناصر",
  "اراده",
  "کاردک",
  "سیفون",
  "رادیو",
  "سفارت",
  "هاشور",
  "بنفشه",
  "اجراح",
  "ستوده",
  "شیرجه",
  "ابزار",
  "زکاوت",
  "ابعاد",
  "اجرار",
  "اجهاد",
  "ژیوان",
  "اشپزی",
  "ارتشی",
  "اجسام",
  "البسه",
  "قضاوت",
  "تشنگی",
  "طوفان",
  "بیهقی",
  "گلابی",
  "ابراد",
  "زرافه",
  "خدمات",
  "تاریخ",
  "طراوت",
  "لواشک",
  "ابتلا",
  "ادیان",
  "اریان",
  "نابغه",
  "سنجاق",
  "انگیز",
  "پرتاب",
  "افتاب",
  "قناری",
  "ابصار",
  "اذحال",
  "دهخدا",
  "طهارت",
  "ریاضی",
  "اجیاف",
  "باحال",
  "سرداب",
  "چسبان",
  "ژاپنی",
  "ابتدا",
  "خبرکش",
  "شاپور",
  "عاطفه",
  "خیانت",
  "قمدار",
  "سرزنش",
  "دیوان",
  "ابداد",
  "حسودی",
  "سحرگه",
  "دریچه",
  "زکریا",
  "بقالی",
  "قاچاق",
  "دانست",
  "انتها",
  "دادهن",
  "ابطال",
  "طبقات",
  "ابلاغ",
  "پرگار",
  "پیروز",
  "فنجان",
  "سنتور",
  "فیروز",
  "تهران",
  "بوسید",
  "ارادت",
  "اجعال",
  "چشیدن",
  "شانسی",
  "ققنوس",
  "چکیده",
  "ضمانت",
  "ازاده",
  "دایره",
  "فولاد",
  "سجاده",
  "سردکن",
  "گرگان",
  "ریحان",
  "دشنام",
  "زنهار",
  "کلمات",
  "برتاب",
  "خواجه",
  "طاعون",
  "ظاهری",
  "کاغذی",
  "طراحی",
];

// These are allowed but they're never the answer
const allowedGuesses = [
  "دهدار",
  "کاربر",
  "انجام",
  "اجزام",
  "ماسال",
  "زیارت",
  "اواره",
  "پدرها",
  "حاجیه",
  "قالبی",
  "کابوی",
  "کالری",
  "سعیده",
  "سعیدی",
  "تنیده",
  "کاکلی",
  "کاشتن",
  "انماس",
  "انسان",
  "پرنیا",
  "کاشته",
  "کاظمی",
  "کاشکی",
  "کافور",
  "کاشمر",
  "کاشنی",
  "مصطفی",
  "اماده",
  "انگله",
  "انگلی",
  "کارور",
  "کاریر",
  "کاریز",
  "کاسبی",
  "کاستن",
  "کاسته",
  "کاستی",
  "کارها",
  "کارکن",
  "کارگر",
  "اسنپی",
  "بستنی",
  "بسیار",
  "کارتن",
  "کاردو",
  "کاررا",
  "کاپشن",
  "کاتیک",
  "کابین",
  "کاتود",
  "کاتبی",
  "کاتور",
  "کاتوس",
  "کاخال",
  "قیامت",
  "قیامی",
  "کاتون",
  "زواری",
  "قلمدر",
  "کابلی",
  "کابنه",
  "قونیه",
  "قنبله",
  "قوچان",
  "قوچین",
  "قنداغ",
  "قهقرا",
  "قهقری",
  "قهقهه",
  "قنبلی",
  "قنبرک",
  "قنبره",
  "قنبری",
  "قمقمه",
  "قناعت",
  "قلمزن",
  "قلمبه",
  "قلماش",
  "طواره",
  "قرمزی",
  "قلیان",
  "قلیون",
  "قصابه",
  "قلابه",
  "قلابی",
  "قلاشی",
  "قزازی",
  "قزاقی",
  "قصاید",
  "قروچه",
  "قریان",
  "قریبی",
  "قدرتی",
  "قدامی",
  "قرانی",
  "قدمتی",
  "قدیمی",
  "قداره",
  "قبادی",
  "قریحه",
  "قجریه",
  "قداحه",
  "قاطعی",
  "قبرسی",
  "قافله",
  "قاجار",
  "قباحت",
  "ظهوری",
  "قابله",
  "قاصدی",
  "قاسمی",
  "قارون",
  "قاطبه",
  "قابلی",
  "قاعده",
  "قابلی",
  "فوریت",
  "فهمید",
  "فیگور",
  "فطرتا",
  "فهرست",
  "فلاحت",
  "فواحش",
  "فیاضی",
  "فوریه",
  "فکاری",
  "فطرتی",
  "فعلیت",
  "فندقی",
  "فلیکس",
  "فکنده",
  "فنداق",
  "فغانی",
  "فقدان",
  "فظایع",
  "فقرات",
  "فعلات",
  "فعلیه",
  "فطریه",
  "فضاحت",
  "غذاها",
  "فعالا",
  "فعالی",
  "فضولی",
  "فرزان",
  "فشرده",
  "غریبه",
  "فروتن",
  "فصاحت",
  "فروکش",
  "فروخت",
  "فراحی",
  "فارست",
  "فرشاد",
  "فرگشت",
  "فردیس",
  "فرزاد",
  "فرسود",
  "فتوحی",
  "فراری",
  "فارسه",
  "فاطمه",
  "فاتحت",
  "فجیعت",
  "فجیعه",
  "فاراد",
  "فاتحه",
  "فاتحی",
  "فاحشا",
  "فاخته",
  "فاحشه",
  "فاخره",
  "غیریت",
  "غریبی",
  "غیابت",
  "غمناک",
  "غمیار",
  "غرنبه",
  "غذایی",
  "غربال",
  "غدایر",
  "عوامل",
  "غاصبی",
  "ظریفی",
  "عبیدی",
  "عنصری",
  "عنایت",
  "عایدی",
  "عبادت",
  "طوبجی",
  "عبوسی",
  "عباسی",
  "عبادی",
  "موسوم",
  "عالمی",
  "عایشه",
  "عامری",
  "عالیه",
  "عاشقم",
  "عاشور",
  "عابدی",
  "عاقبت",
  "عاقله",
  "شکرلب",
  "عابری",
  "ظلمات",
  "ظلمان",
  "ظروری",
  "ظریفه",
  "ظالمی",
  "ظاهرا",
  "طیوری",
  "ظاهرش",
  "طلبید",
  "طوقات",
  "طلایی",
  "طریقی",
  "طرقبه",
  "شکرین",
  "شکستن",
  "طریقه",
  "طریاق",
  "طریان",
  "طریحی",
  "طریقت",
  "طبرسی",
  "ضرغام",
  "شکیرا",
  "شیلنگ",
  "طباخی",
  "صحابه",
  "طارمی",
  "صحافی",
  "ضابطه",
  "صحرای",
  "صرافی",
  "ضدجنگ",
  "صریحا",
  "صلبیه",
  "ضاحکه",
  "ضرورت",
  "ضروری",
  "صریحی",
  "صلوات",
  "صنایع",
  "صنعتی",
  "صدیقه",
  "صدیقی",
  "صحبتی",
  "صدرنگ",
  "صدقات",
  "صدبار",
  "صداقه",
  "صدارت",
  "صدبرگ",
  "صراحت",
  "صعودی",
  "صغرات",
  "صفایا",
  "صفایح",
  "صفایر",
  "صفایی",
  "شیلات",
  "شکسته",
  "شوروی",
  "شیرزن",
  "شیردل",
  "صبحان",
  "صادره",
  "صادقه",
  "صادقی",
  "صباغی",
  "شناسا",
  "شناسه",
  "شوهرش",
  "شهریه",
  "شیاسی",
  "شیادی",
  "شیانی",
  "شمران",
  "شهداد",
  "شهرام",
  "شهران",
  "شهرتی",
  "شهرری",
  "شهرضا",
  "شنوید",
  "شهرکی",
  "شهرگی",
  "شنیدن",
  "شنیده",
  "شمردل",
  "شماره",
  "شمردن",
  "شمرده",
  "شدیدا",
  "شکوفا",
  "شگفتی",
  "شکوفه",
  "شکایت",
  "شکراب",
  "شگرفی",
  "هاوند",
  "شقشقه",
  "شکاری",
  "هالات",
  "هافبک",
  "هبعان",
  "هجایی",
  "هاوشت",
  "هپرسی",
  "هبهبی",
  "هاونی",
  "هالان",
  "هاویه",
  "هجارس",
  "هاضمه",
  "هاضوم",
  "هالتر",
  "شادلو",
  "شرشره",
  "شعبان",
  "سمیرا",
  "شبگاه",
  "شخصیت",
  "شخصیه",
  "شبگون",
  "سهمیه",
  "شرابه",
  "شرابی",
  "شراحی",
  "سنوات",
  "سهولت",
  "سنگال",
  "شالور",
  "شاملو",
  "سوزاک",
  "سیدنی",
  "سیفان",
  "سلسله",
  "سوتخن",
  "سوختن",
  "سوخته",
  "سلسیس",
  "سلطات",
  "سلطان",
  "سلطقی",
  "سلطنه",
  "سردها",
  "سلاری",
  "سلامی",
  "پنیری",
  "سردیگ",
  "سریعا",
  "سرکشم",
  "سرکشی",
  "سریعی",
  "سردین",
  "سررسد",
  "سررود",
  "سرریز",
  "سرزده",
  "سرزرد",
  "سرزور",
  "سرزیر",
  "سرساخ",
  "سرساد",
  "سرسام",
  "سرسبد",
  "سرسخن",
  "سرسرا",
  "سرسره",
  "موسوی",
  "رستمی",
  "زوبین",
  "زوپین",
  "زوجات",
  "زوجین",
  "سبایل",
  "سبائک",
  "سبتان",
  "سبتای",
  "سبحات",
  "سبحان",
  "سبختی",
  "سبدکش",
  "سبدلو",
  "زودان",
  "زورقی",
  "زورکی",
  "سانچی",
  "زودپز",
  "زودتر",
  "زودرس",
  "زحمتی",
  "ریختن",
  "ریخته",
  "ریختی",
  "راستش",
  "راسته",
  "درسال",
  "دیپلم",
  "رسولی",
  "دوچشم",
  "دوختن",
  "دریدن",
  "درشتی",
  "دریوش",
  "درصدد",
  "درصدی",
  "درطلب",
  "درسان",
  "درستر",
  "درستک",
  "درسته",
  "دردکش",
  "دردگن",
  "دردمن",
  "دردمه",
  "دردها",
  "دردور",
  "خاتمی",
  "دایری",
  "دایزه",
  "دایقل",
  "دایگی",
  "دایما",
  "دایمق",
  "دایمه",
  "دایمو",
  "دایمی",
  "دائره",
  "دائمک",
  "دائمی",
  "دائون",
  "دبابه",
  "دبادب",
  "بایدن",
  "الاغن",
  "الاقی",
  "طهران",
  "نبوغی",
  "گریید",
  "مخزنی",
  "منهای",
  "مکانی",
  "حصیری",
  "بندری",
  "رحمتی",
  "سیبها",
  "الوها",
  "انارم",
  "نابیم",
  "تنهام",
  "تنهای",
  "تنهاس",
  "خوبیا",
  "ابابه",
  "اباتت",
  "اباته",
  "اباثت",
  "اباثه",
  "اباجر",
  "اباحت",
  "اباحه",
  "اباحی",
  "اباخت",
  "اباخس",
  "ابادت",
  "ابارت",
  "ابارد",
  "ابارق",
  "اباره",
  "اباسق",
  "اباشه",
  "اباصر",
  "ابالو",
  "ابامه",
  "ابانت",
  "ابانک",
  "ابانه",
  "اباهر",
  "اباهم",
  "ابایض",
  "ابتات",
  "ابتار",
  "ابتره",
  "ابتگن",
  "ابتها",
  "ابثاث",
  "ابثیث",
  "ابجاح",
  "ابجال",
  "ابجیح",
  "ابحاث",
  "ابحاح",
  "ابحار",
  "ابخار",
  "ابخاز",
  "ابخال",
  "ابخره",
  "ابدال",
  "ابدام",
  "ابدرم",
  "ابدوج",
  "ابدون",
  "ابدیت",
  "ابذار",
  "ابذان",
  "ابرات",
  "ابراث",
  "ابراج",
  "ابراح",
  "ابرار",
  "ابراص",
  "ابراض",
  "ابراق",
  "ابرخس",
  "ابرده",
  "ابرزی",
  "ابرشم",
  "ابرفر",
  "ابرقو",
  "ابرکش",
  "ابرلغ",
  "ابرمه",
  "ابرنج",
  "ابرنی",
  "ابرهه",
  "ابروج",
  "ابروز",
  "ابروق",
  "ابروی",
  "ابریج",
  "ابریق",
  "ابرام",
  "ابریه",
  "ابشاغ",
  "ابشاق",
  "ابشام",
  "ابشیا",
  "ابشیش",
  "ابشیه",
  "ابصان",
  "ابصنه",
  "ابضاض",
  "ابضاع",
  "ابضعه",
  "ابطاخ",
  "ابطار",
  "ابطاش",
  "ابطان",
  "ابطحی",
  "ابطنه",
  "ابعار",
  "ابعاض",
  "ابعاط",
  "ابعره",
  "ابغاش",
  "ابغاض",
  "ابقاق",
  "ابقال",
  "ابقای",
  "ابکام",
  "ابکجی",
  "ابکمی",
  "ابلاح",
  "ابلاد",
  "اجنیص",
  "اجهار",
  "اجهاز",
  "اجهاش",
  "اجهاض",
  "اجهره",
  "اجهزه",
  "اجواف",
  "اجوجه",
  "اجوزه",
  "اجیاد",
  "اجیال",
  "اجیری",
  "اجیفر",
  "احابش",
  "احاجی",
  "احارب",
  "احارر",
  "احاره",
  "احاسب",
  "احاسن",
  "احاسی",
  "احاطت",
  "احاطه",
  "احاظی",
  "احالت",
  "احاله",
  "احامر",
  "احامس",
  "احاوص",
  "احباب",
  "احباج",
  "احباس",
  "احباش",
  "احباض",
  "احباط",
  "احباق",
  "احبال",
  "احبول",
  "احبیر",
  "احتات",
  "احتار",
  "احتان",
  "احثاث",
  "احثار",
  "احثال",
  "احجاب",
  "احجاج",
  "احجار",
  "احجاز",
  "احجال",
  "احجام",
  "احجان",
  "احجنی",
  "احجوه",
  "احجیه",
  "احداب",
  "احداج",
  "احداد",
  "ادوین",
  "ادیات",
  "ادیاک",
  "ادیال",
  "ادیبر",
  "ادیبی",
  "ادیسا",
  "ادیست",
  "ادیسن",
  "ادیسه",
  "ادیمه",
  "ادیمی",
  "ادینو",
  "ادیون",
  "اذابه",
  "اذاخر",
  "اذاره",
  "اذاسا",
  "اذاعه",
  "اذافر",
  "اذاقت",
  "اذالت",
  "اذانه",
  "اذانی",
  "اذاهب",
  "اذباح",
  "اذبال",
  "اذحاج",
  "اذخار",
  "اذداد",
  "اذراب",
  "اذراع",
  "اذراق",
  "اذران",
  "اذربی",
  "اذرعی",
  "اذرقی",
  "اذرمی",
  "اذرنت",
  "اذعار",
  "اذعاف",
  "اذعان",
  "اذغاغ",
  "اذفاف",
  "اذفوه",
  "اذقان",
  "اذکار",
  "اذکان",
  "اذلاق",
  "اذلال",
  "اذلعی",
  "اذلغی",
  "اذمار",
  "اذمام",
  "اذناب",
  "اذنات",
  "اذنان",
  "اذنین",
  "اذهاب",
  "اذهال",
  "اذهان",
  "اذواد",
  "اذواط",
  "اذواق",
  "اذیاخ",
  "اذیال",
  "اذیمس",
  "اذینه",
  "ارابع",
  "ارابن",
  "اراتس",
  "اراجح",
  "اراجل",
  "اراجه",
  "اراحه",
  "ارادب",
  "ارادی",
  "اراذل",
  "ارارس",
  "اراسپ",
  "اراسم",
  "اراضه",
  "اراطس",
  "اراطه",
  "اراطی",
  "اراقت",
  "اراقم",
  "اراقه",
  "اراقو",
  "اراکی",
  "ارامل",
  "ارایک",
  "ارایه",
  "ارائک",
  "ارائه",
  "ارباج",
  "ارباح",
  "ارباخ",
  "ارباد",
  "ارباذ",
  "ارباز",
  "ارباش",
  "ارباض",
  "ارباط",
  "ارباع",
  "ارباغ",
  "ارباق",
  "اربال",
  "اربطه",
  "اربعا",
  "اربعه",
  "اربغا",
  "اربقی",
  "اربکی",
  "اربگا",
  "اربلس",
  "اربوت",
  "اربوس",
  "اربون",
  "اربیت",
  "اربیخ",
  "اربیس",
  "ارپای",
  "ارتات",
  "ارتاج",
  "ارتاح",
  "ارتاع",
  "ارتاق",
  "ارتاک",
  "ارتام",
  "ارتان",
  "ارتبه",
  "ارتجک",
  "ارتخم",
  "ارتری",
  "ارتقی",
  "ارتمد",
  "ارتنا",
  "ارتنگ",
  "اسکلم",
  "اسکنک",
  "اسکنه",
  "اسکیث",
  "اسکیز",
  "اسکیم",
  "اسکین",
  "اسگوخ",
  "اسلاب",
  "اسلات",
  "اسلاح",
  "اسلاخ",
  "اسلاس",
  "اسلاع",
  "اسلاف",
  "اسلاق",
  "اسلال",
  "اسلام",
  "اسلان",
  "اسلاو",
  "اسلحه",
  "اسلمش",
  "اسلمی",
  "اسلنج",
  "اسلیح",
  "اسلیخ",
  "اسلیم",
  "اسلین",
  "اسلیه",
  "اسماا",
  "اسماح",
  "اسماط",
  "اسماع",
  "اسمال",
  "اسمرا",
  "اسمری",
  "اسملو",
  "اسمور",
  "اسمیث",
  "اسمین",
  "اسنات",
  "اسناخ",
  "اسناد",
  "اسناس",
  "اسناش",
  "اسناط",
  "اسناع",
  "اسناف",
  "اسناق",
  "اسنام",
  "اسنشن",
  "اسنفر",
  "اسنور",
  "اسنوی",
  "اسنیک",
  "اسهاب",
  "اسهاد",
  "اسهار",
  "اسهام",
  "اسهان",
  "اسوار",
  "اسواق",
  "اسوان",
  "اسوبس",
  "اسورا",
  "اسورر",
  "اسوفی",
  "اسوگو",
  "اسونا",
  "اسیاب",
  "اسیاح",
  "اسیار",
  "اسیاف",
  "اسیبغ",
  "اسیدا",
  "اسیده",
  "اسیدی",
  "اسیرش",
  "اسیرک",
  "اسیرل",
  "اسیرم",
  "اسیره",
  "اسیری",
  "اسیلم",
  "اسیوت",
  "اسیود",
  "اسیوس",
  "اسیوش",
  "اسیوط",
  "اشاجع",
  "اشادت",
  "اشارت",
  "اشارد",
  "اشاره",
  "اشاری",
  "اشاعث",
  "اشافی",
  "اشاقر",
  "اشامت",
  "اشامی",
  "اشاهب",
  "اشاهم",
  "اشاوذ",
  "اشاوش",
  "اشاوص",
  "اشاوه",
  "اشاوی",
  "اشایا",
  "اشائم",
  "اشباب",
  "اشباح",
  "اشبار",
  "اشباع",
  "اشباک",
  "اشبال",
  "اشباه",
  "اشبعل",
  "اشبلا",
  "اشبلط",
  "اشبور",
  "اشبون",
  "اشبیل",
  "اشبین",
  "اشپشه",
  "اشپلم",
  "اشپون",
  "اشپیل",
  "اشتاب",
  "اشتات",
  "اشتاد",
  "اشتار",
  "اشتاس",
  "اشتاغ",
  "اشتاق",
  "اشتال",
  "اشتام",
  "اشتاو",
  "اشتبن",
  "اشترا",
  "انبرد",
  "انبره",
  "انبست",
  "انبسه",
  "انبلس",
  "انبله",
  "انبلی",
  "انبمن",
  "انبهی",
  "انبوب",
  "انبوت",
  "انبور",
  "انبوس",
  "انبوش",
  "انبون",
  "انبوه",
  "انبوی",
  "انبیا",
  "انبیذ",
  "انبیر",
  "انبیس",
  "انبیق",
  "انپار",
  "انتاج",
  "انتار",
  "انتاض",
  "انتاع",
  "انتاغ",
  "انتاف",
  "انتاق",
  "انتان",
  "انتخد",
  "انترج",
  "انترن",
  "انتره",
  "انتفا",
  "انتله",
  "انتما",
  "انتهی",
  "انتون",
  "انتیا",
  "انتیم",
  "انثار",
  "انثاع",
  "انثال",
  "انجاب",
  "انجاث",
  "اجرام",
  "انجاج",
  "انجاح",
  "انجاد",
  "انجاز",
  "انجاس",
  "انجاص",
  "انجاع",
  "انجاف",
  "انجال",
  "انجسا",
  "انجشا",
  "انجشش",
  "انجلس",
  "انجلک",
  "انجین",
  "انحاز",
  "انحاف",
  "انحال",
  "انحنا",
  "انحیا",
  "انخاب",
  "اندار",
  "انداز",
  "انداس",
  "انداص",
  "اندرا",
  "اندرخ",
  "اندرز",
  "اندرس",
  "اندرش",
  "اندرو",
  "اندری",
  "اندزق",
  "اندقی",
  "اندکس",
  "اندکی",
  "اندمه",
  "اندوب",
  "اندود",
  "اندور",
  "اندوز",
  "اندول",
  "اندوه",
  "اندیس",
  "اندیش",
  "اندیک",
  "اندیه",
  "انذاخ",
  "انذار",
  "انذال",
  "انذرو",
  "انذون",
  "انرژی",
  "انروب",
  "انروج",
  "انزاب",
  "انزاح",
  "انزار",
  "انزاز",
  "انزاع",
  "انزاف",
  "انزاق",
  "انزال",
  "انزان",
  "بربری",
  "پرکاه",
  "پرکبر",
  "پرکدر",
  "پرکلس",
  "پرکنه",
  "پرکوک",
  "پرگان",
  "پرگست",
  "پرگلز",
  "پرگنه",
  "پرگوک",
  "پرگیا",
  "پرلاف",
  "پرلپه",
  "پرلوک",
  "پرمار",
  "پرماز",
  "پرماس",
  "پرماق",
  "پرمان",
  "پرماه",
  "پرمته",
  "پرمدی",
  "پرمهه",
  "پرمور",
  "پرموز",
  "پرمون",
  "پرموی",
  "پرمیا",
  "پرمیو",
  "پرناز",
  "پرناک",
  "پرنان",
  "پرندخ",
  "پرندک",
  "پرنده",
  "پرنست",
  "پرنسس",
  "پرنفس",
  "پرنقش",
  "پرنور",
  "پرنوف",
  "پرنون",
  "پرنیخ",
  "پرنیش",
  "پرهول",
  "پرهون",
  "پرهیب",
  "پرهیز",
  "پرواب",
  "پرواذ",
  "پروار",
  "پرواز",
  "پرواس",
  "پروان",
  "پروتز",
  "پروته",
  "پرورد",
  "پروری",
  "پروزا",
  "پروزن",
  "پروژه",
  "پروسا",
  "پروست",
  "پروسه",
  "پروکش",
  "پرومه",
  "پرویز",
  "پرویش",
  "پروین",
  "پرویی",
  "پریاب",
  "پریاپ",
  "پریام",
  "پریان",
  "پریچه",
  "پریده",
  "پریرا",
  "پریرخ",
  "پریرو",
  "پریری",
  "پریزپ",
  "پریزن",
  "پریزه",
  "پریشب",
  "پریشم",
  "پریشن",
  "پریشی",
  "پریکا",
  "پریگو",
  "پرینت",
  "پرینس",
  "پرینه",
  "پریود",
  "پریوس",
  "پریون",
  "پزارو",
  "پزاوه",
  "پزداغ",
  "پزغند",
  "پزلاغ",
  "پزناس",
  "پزنده",
  "پزهان",
  "پزوهش",
  "پزیدن",
  "پزیلو",
  "پژاگن",
  "پژخور",
  "پژردن",
  "پژغند",
  "پژولش",
  "پژوند",
  "پژوهی",
  "پژوین",
  "پژیدن",
  "پستال",
  "پستان",
  "پسترم",
  "پستنک",
  "پسراک",
  "پسران",
  "پسرعم",
  "پسروی",
  "پسغام",
  "پسغده",
  "پسکله",
  "پسندد",
  "پسندر",
  "باارز",
  "بااصل",
  "بااوش",
  "بااین",
  "بابات",
  "باباج",
  "باباش",
  "بابان",
  "بابای",
  "بابدی",
  "بابرت",
  "بابره",
  "بابری",
  "بابزن",
  "بابسر",
  "بابشی",
  "بابقه",
  "بابکر",
  "بابکی",
  "بابلا",
  "بابلس",
  "بابلص",
  "بابله",
  "بابلی",
  "بابوخ",
  "بابوس",
  "بابوف",
  "بابول",
  "بابون",
  "بابیک",
  "بابیل",
  "بابین",
  "بابیه",
  "باپیر",
  "باتاب",
  "باتاس",
  "باتاو",
  "باتره",
  "باتری",
  "باتمن",
  "باتنه",
  "باتنی",
  "باتور",
  "باتون",
  "باتیر",
  "باتیس",
  "باتیل",
  "باثعه",
  "باثقه",
  "باجات",
  "باجدا",
  "باجدی",
  "باجرا",
  "باجنگ",
  "باجهر",
  "باجوا",
  "باجول",
  "باجیک",
  "باچون",
  "باحرب",
  "باحری",
  "باحفص",
  "باحور",
  "باخال",
  "باخان",
  "باخبر",
  "باخته",
  "باخدا",
  "باخذی",
  "باخرز",
  "باخرم",
  "باخره",
  "باخسه",
  "باخله",
  "باخمس",
  "باخور",
  "باخوس",
  "باخون",
  "باداب",
  "باداش",
  "بادام",
  "بادان",
  "بادبا",
  "بادبر",
  "بادبز",
  "بادبن",
  "بادپا",
  "بادپر",
  "بادپی",
  "بادخن",
  "باددم",
  "بادده",
  "بادرد",
  "بادرس",
  "بادرم",
  "بادره",
  "بادرو",
  "بادری",
  "بادزد",
  "بادزم",
  "بادزن",
  "بادسر",
  "بادسی",
  "بادشم",
  "بادشه",
  "بادغد",
  "بادغر",
  "بادغس",
  "بادغن",
  "بادفت",
  "بطیاط",
  "بطیخی",
  "بطیطس",
  "بطیطی",
  "بطینه",
  "بطیوی",
  "بظاره",
  "بظاهر",
  "بظماج",
  "بعاثط",
  "بعایس",
  "بعبعی",
  "بعبوش",
  "بعبوص",
  "بعثات",
  "بعثوط",
  "بعدان",
  "بعدها",
  "بعران",
  "بعربی",
  "بعصوص",
  "بعقوط",
  "بعکره",
  "بعکوک",
  "بعلبک",
  "بعلوت",
  "بعلون",
  "بعمدا",
  "بعهده",
  "بعیدا",
  "بعینک",
  "بعینه",
  "بغاثه",
  "بغاره",
  "بغاری",
  "بغامه",
  "بغانه",
  "بغاوت",
  "بغایا",
  "بغایت",
  "بغایی",
  "بغبغو",
  "بغبنج",
  "بغبور",
  "بغپور",
  "بغتات",
  "بغتاغ",
  "بغتاف",
  "بغتاق",
  "بغثان",
  "بغثره",
  "بغثری",
  "بغثور",
  "بغدات",
  "بغدان",
  "بغدلی",
  "بغدین",
  "بغراج",
  "بغراس",
  "بغراو",
  "بغرنج",
  "بغشور",
  "بغطاق",
  "بغلات",
  "بغلان",
  "بغمار",
  "بغماق",
  "بغمچی",
  "بغنوس",
  "بغوجک",
  "بغولن",
  "بغونش",
  "بغیار",
  "بغیاز",
  "بغیان",
  "بغیبغ",
  "بفتره",
  "بفتری",
  "بفردا",
  "بفرست",
  "بفرود",
  "بفروش",
  "بفکین",
  "بقادر",
  "بقاری",
  "بقازی",
  "بقاعی",
  "بقاول",
  "بقایا",
  "بقایم",
  "بقایی",
  "بقباق",
  "بقبوق",
  "بقچیر",
  "بقراج",
  "بقرار",
  "بقراط",
  "بقران",
  "بقرور",
  "بقسمی",
  "بقسیس",
  "بقشیش",
  "بقعان",
  "بقلیه",
  "بقوتی",
  "بقیار",
  "بقیاس",
  "بقیتی",
  "بقیری",
  "بکارت",
  "بکاسه",
  "بکاغذ",
  "بکالی",
  "بکامت",
  "بکاول",
  "بکایی",
  "بکبکه",
  "بکتاش",
  "بکثرت",
  "بکجری",
  "بکرجی",
  "بکردن",
  "بکرنی",
  "بکرهی",
  "بکسور",
  "بکشتن",
  "بکشلو",
  "بکشند",
  "بکشید",
  "بکمال",
  "بکنده",
  "بکنند",
  "بکیار",
  "بکیان",
  "بکیره",
  "بکیلی",
  "بگازر",
  "بگتاش",
  "بگذرد",
  "بگذری",
  "بگردد",
  "بگردن",
  "بگریم",
  "بلمون",
  "بلمیر",
  "بلنبس",
  "بلنتع",
  "بلنجا",
  "بلنجر",
  "بلندا",
  "بلندح",
  "بلندر",
  "بلندش",
  "بلندم",
  "بلندی",
  "بلنزی",
  "بلنسم",
  "بلنسی",
  "بلنصی",
  "بلنطس",
  "بلنقع",
  "بلنکت",
  "بلهان",
  "بلهرا",
  "بلهمی",
  "بلهور",
  "بلهوس",
  "بلوار",
  "بلواز",
  "بلوتک",
  "بلوده",
  "بلورد",
  "بلوری",
  "بلوشه",
  "بلوطک",
  "بلوطی",
  "بلوغت",
  "بلوکی",
  "بلوند",
  "بلونه",
  "بلونی",
  "بلوهر",
  "بلویو",
  "بلیات",
  "بلیاد",
  "بلیار",
  "بلیاش",
  "بلیان",
  "بلیدی",
  "بلیسا",
  "بلیطش",
  "بلیطی",
  "بلیلا",
  "بلیلج",
  "بلیله",
  "بلیلی",
  "بلینا",
  "بلیوس",
  "بلیون",
  "بلیوی",
  "بماذا",
  "بماند",
  "بمانم",
  "بمانی",
  "بماهی",
  "بمبار",
  "بمبلی",
  "بمبور",
  "بمبیی",
  "بمپور",
  "بمجرد",
  "بمجکث",
  "بمحمد",
  "بمردم",
  "بمرود",
  "بمرور",
  "بمعنی",
  "بملان",
  "بموجب",
  "بمیان",
  "بمیرد",
  "بنابر",
  "بنابه",
  "بنادر",
  "بنادق",
  "بنادک",
  "بنارد",
  "بنارس",
  "بنارک",
  "بناری",
  "بناست",
  "بناصر",
  "بناکت",
  "بناگر",
  "بنانج",
  "بنانی",
  "بناها",
  "بناور",
  "بنایق",
  "بنایک",
  "بنایی",
  "بنجاق",
  "بنجره",
  "بنجشک",
  "بنجیر",
  "بنجیس",
  "بنجیک",
  "بنچاق",
  "بنداد",
  "بندار",
  "بنداز",
  "بنداق",
  "بندان",
  "بندبن",
  "بندبه",
  "بندپی",
  "بندچه",
  "بندخت",
  "بندرت",
  "بندرج",
  "بندرز",
  "بندری",
  "بندزن",
  "بندسر",
  "بندقی",
  "بندکش",
  "بندکن",
  "بندگی",
  "بندمه",
  "بندنه",
  "بندنو",
  "بندنی",
  "بندهی",
  "بندوا",
  "بندور",
  "بندوق",
  "بندول",
  "بندیر",
  "بندیل",
  "بنذرک",
  "بنزول",
  "بنشاط",
  "بنشتی",
  "بنشین",
  "بنصرا",
  "بنفسج",
  "بنفشج",
  "بنفوز",
  "بنقوس",
  "بنکتی",
  "چسبند",
  "چسپان",
  "چسونه",
  "چشخام",
  "چشکمه",
  "چشمان",
  "چشمست",
  "چشمگی",
  "چشمها",
  "چشیده",
  "چشیشه",
  "چغابل",
  "چغادک",
  "چغاده",
  "چغاله",
  "چغامه",
  "چغانه",
  "چغانی",
  "چغبلغ",
  "چغبوت",
  "چغتای",
  "چغدول",
  "چغرزه",
  "چغلیق",
  "چغندر",
  "چغنده",
  "چغنست",
  "چغوکی",
  "چغیدن",
  "چفتگی",
  "چفسان",
  "چفلان",
  "چقابل",
  "چقاچق",
  "چقاده",
  "چقایی",
  "چقتای",
  "چقچقه",
  "چقچقی",
  "چقرلی",
  "چقرمه",
  "چقشور",
  "چقماق",
  "چقندر",
  "چقورا",
  "چقونک",
  "چقیدن",
  "چقینه",
  "چکاچک",
  "چکرنه",
  "چکودر",
  "چکوسر",
  "چکونه",
  "چکیدن",
  "چگلمش",
  "چگونه",
  "چگونی",
  "چگویم",
  "چگینه",
  "چلارس",
  "چلاقو",
  "چلاقی",
  "چلانه",
  "چلبله",
  "چلتاج",
  "چلتوک",
  "چلچلک",
  "چلچله",
  "چلچلی",
  "چلریز",
  "چلشته",
  "چلغوز",
  "چلفتی",
  "چلقوز",
  "چلکیت",
  "چلگرد",
  "چلمان",
  "چلمبر",
  "چلمله",
  "چلمنی",
  "چلنچو",
  "چلندر",
  "چلنگر",
  "چلنگه",
  "چلوار",
  "چلویر",
  "چلیپا",
  "چلیچه",
  "چلیدن",
  "چلیکه",
  "چمازک",
  "چماقی",
  "چماله",
  "چمانه",
  "چمانی",
  "چمپان",
  "چمتاک",
  "چمچاچ",
  "چمچاخ",
  "چمچاق",
  "چمچمه",
  "چمخاخ",
  "چمخال",
  "چمدان",
  "چمراس",
  "چمقلو",
  "چملول",
  "چمنار",
  "چمناک",
  "چمنده",
  "چمیدن",
  "چمیده",
  "چمینه",
  "چنارک",
  "چناره",
  "چناری",
  "چناسک",
  "چناشک",
  "چنانه",
  "چنانی",
  "چناهن",
  "چنبرک",
  "چنبره",
  "چنبری",
  "چنبلی",
  "چندار",
  "چندال",
  "چندان",
  "چندبر",
  "چندگی",
  "چندلا",
  "چندلر",
  "چندین",
  "چنذاب",
  "چنزنق",
  "چنغوت",
  "چنگار",
  "چنگاز",
  "چنگال",
  "چنگتو",
  "چنگدو",
  "چنگزن",
  "چنگزه",
  "چنگوک",
  "خمانی",
  "خماهن",
  "خمائض",
  "خمبرک",
  "خمبره",
  "خمجاج",
  "خمجان",
  "خمجین",
  "خمچاخ",
  "خمخام",
  "خمداد",
  "خمدار",
  "خمدان",
  "خمدون",
  "خمرکی",
  "خمریه",
  "خمسلو",
  "خمسون",
  "خمسین",
  "خمشتر",
  "خمصان",
  "خمعان",
  "خمکده",
  "خملات",
  "خمناک",
  "خمنده",
  "خمنشر",
  "خموشی",
  "خمیاز",
  "خمیدن",
  "خمیده",
  "خمیره",
  "خمیری",
  "خمیسه",
  "خمیسی",
  "خمیصه",
  "خمیله",
  "خمینه",
  "خمینی",
  "خنابث",
  "خنابس",
  "خناثی",
  "خناجر",
  "خنادر",
  "خنادق",
  "خناده",
  "خناسی",
  "خناصر",
  "خناطل",
  "خنافج",
  "خنافس",
  "خنامت",
  "خنبات",
  "خنبان",
  "خنبجه",
  "خنبره",
  "خنبوص",
  "خنتار",
  "خنجده",
  "خنجری",
  "خنجست",
  "خنجلک",
  "خنجوخ",
  "خنجوک",
  "خنجیر",
  "خنجیل",
  "خنجین",
  "خنداب",
  "خندان",
  "خندفی",
  "خندقی",
  "خندگی",
  "خندلس",
  "خندمه",
  "خندور",
  "خندوف",
  "خندید",
  "خنذیذ",
  "خنزاب",
  "خنزوب",
  "خنزیر",
  "خنسار",
  "خنسری",
  "خنسلو",
  "خنسیر",
  "خنشان",
  "خنشوش",
  "خنصیص",
  "خنضاب",
  "خنضرف",
  "خنطرف",
  "خنطیر",
  "خنظرف",
  "خنکار",
  "خنکای",
  "خنگال",
  "خنگبت",
  "خنگشت",
  "خنگشر",
  "خنلچک",
  "خنلیق",
  "خننده",
  "خنورک",
  "خنیدن",
  "خنیده",
  "خنیره",
  "خنیور",
  "خوابد",
  "خوابک",
  "خوابه",
  "خوابی",
  "خواتم",
  "خواجو",
  "خوارج",
  "خوارق",
  "خوارم",
  "خواره",
  "خواری",
  "خوازه",
  "خواسه",
  "خواطر",
  "خوافی",
  "خواقه",
  "خواند",
  "خوانس",
  "خوانم",
  "خوانی",
  "خواهد",
  "خواهر",
  "خواهش",
  "خواهل",
  "خواهم",
  "خواهه",
  "خواهی",
  "خواین",
  "خوبان",
  "خوبتر",
  "خوبده",
  "خوبرخ",
  "خوبله",
  "خوبوز",
  "خوجوی",
  "خوجین",
  "خودخو",
  "خودرو",
  "خودسر",
  "خودشو",
  "رفتگی",
  "رفتند",
  "رفتنش",
  "رفتنی",
  "رفتوت",
  "رفتیه",
  "رفراف",
  "رفعان",
  "رفعبن",
  "رفعتی",
  "رفقاء",
  "رفلان",
  "رفلکس",
  "رفنیه",
  "رفهان",
  "رفورم",
  "رفوزه",
  "رفوسه",
  "رفوشه",
  "رفوگر",
  "رفونی",
  "رفیده",
  "رفیعا",
  "رفیعه",
  "رفیعی",
  "رفیقش",
  "رفیقه",
  "رفیقی",
  "رقابی",
  "رقاحی",
  "رقاده",
  "رقارق",
  "رقاشی",
  "رقاصک",
  "رقاصی",
  "رقاعی",
  "رقاقس",
  "رقانه",
  "رقایق",
  "رقایم",
  "رقائم",
  "رقبات",
  "رقبان",
  "رقبای",
  "رقتان",
  "رقدان",
  "رقراق",
  "رقصان",
  "رقومی",
  "رقیات",
  "رقیچه",
  "رقیقه",
  "رقیقی",
  "رقیلف",
  "رقیمه",
  "رکابی",
  "رکاشه",
  "رکاکت",
  "رکانت",
  "رکائل",
  "رکتوم",
  "رکضات",
  "رکفلر",
  "رکلام",
  "رکوگر",
  "رکیبی",
  "رکینی",
  "رگبار",
  "رگبرگ",
  "رگبند",
  "رگدار",
  "رگلاژ",
  "رگناک",
  "رلاند",
  "رماحس",
  "رماحی",
  "رمادی",
  "رمارم",
  "رماست",
  "رماقل",
  "رماکل",
  "رماله",
  "رمالی",
  "رمانس",
  "رمانی",
  "رمایا",
  "رمایه",
  "رمبان",
  "رمجار",
  "رمداء",
  "رمدان",
  "رمدید",
  "رمرام",
  "رمزان",
  "رمزیه",
  "رمصاء",
  "رمضان",
  "رمظان",
  "رمعان",
  "رمفان",
  "رمقان",
  "رمکان",
  "رملان",
  "رملکی",
  "رملیا",
  "رمنده",
  "رموان",
  "رموزا",
  "رمیار",
  "رمیان",
  "رمیدن",
  "رمیده",
  "رمیله",
  "رمیلی",
  "رنانی",
  "رنتگن",
  "رنجال",
  "رنجان",
  "رنجبر",
  "رنجشی",
  "رنجگی",
  "رنجور",
  "رنجید",
  "رنجین",
  "رنخیز",
  "رندان",
  "رندقه",
  "رندوم",
  "رنسار",
  "رنگان",
  "رنگده",
  "رنگرز",
  "رنگرو",
  "رنگزن",
  "رنگین",
  "رنوات",
  "رنیار",
  "رنیتز",
  "رهاجر",
  "رهادن",
  "رهانا",
  "رهانی",
  "رهاوی",
  "رهایش",
  "رهاین",
  "رهایی",
  "روروه",
  "روزان",
  "روزبه",
  "روزرخ",
  "روزکی",
  "روزنک",
  "روزها",
  "روزوش",
  "روسای",
  "روسبل",
  "روسپی",
  "زارگز",
  "زارون",
  "زاروی",
  "زاریا",
  "زاریس",
  "زارین",
  "زازال",
  "زازرم",
  "زاستر",
  "زاستن",
  "زاطیا",
  "زاعبی",
  "زاغاب",
  "زاغان",
  "زاغچه",
  "زاغره",
  "زاغری",
  "زاغکی",
  "زاغور",
  "زاغوک",
  "زاغول",
  "زاغون",
  "زافون",
  "زاقرد",
  "زاقفی",
  "زاقون",
  "زاکان",
  "زاکاه",
  "زاکون",
  "زاکیه",
  "زاگاب",
  "زاگرب",
  "اربده",
  "زالفا",
  "زالمن",
  "زامات",
  "زامار",
  "زامان",
  "زامبز",
  "زامبل",
  "زامری",
  "زاموا",
  "زامور",
  "زاموش",
  "زاموم",
  "زامیج",
  "زامیس",
  "زامیم",
  "زامین",
  "زانتس",
  "زاندر",
  "زانطه",
  "زانکی",
  "زانگه",
  "زانما",
  "زانوح",
  "زانوس",
  "زانوع",
  "زانون",
  "زانوی",
  "زانیج",
  "زانیه",
  "زاهده",
  "زاهدی",
  "زاهری",
  "زاهزی",
  "زاودش",
  "زاورا",
  "زاوری",
  "زاوشت",
  "زاوطا",
  "زاوطه",
  "زاوکو",
  "زاوله",
  "زاولی",
  "زاومه",
  "زاونگ",
  "زاوهی",
  "زاووش",
  "زاووق",
  "زاویت",
  "زاویر",
  "زاویل",
  "زاویه",
  "زایان",
  "زایجه",
  "زایچه",
  "زایدر",
  "زایدن",
  "زایده",
  "زایشی",
  "زایگر",
  "زایلو",
  "زائون",
  "زبابه",
  "زبادی",
  "زبارا",
  "زبارج",
  "زباری",
  "زبالی",
  "زبانا",
  "زبانش",
  "زبانک",
  "زبانم",
  "زبانی",
  "زبایر",
  "زبدان",
  "زبدیا",
  "زبدین",
  "زبدیه",
  "زبران",
  "زبرتر",
  "زبرجد",
  "زبردج",
  "زبرقه",
  "زبرلو",
  "زبرین",
  "زبزین",
  "زبطره",
  "زبطری",
  "زبعبق",
  "زبعبک",
  "زبعری",
  "زبغبر",
  "زبغره",
  "زبلات",
  "زبلاق",
  "زبلان",
  "زبلوق",
  "زبنتا",
  "زبنتر",
  "زبنیه",
  "زبوبر",
  "زبوجه",
  "زبوخه",
  "زبوده",
  "زبوری",
  "زبونی",
  "زبویه",
  "زبویی",
  "زبیبه",
  "زبیبی",
  "زبیده",
  "زبیدی",
  "زبیری",
  "زبینه",
  "زبینی",
  "زپرتی",
];

export const allWords = [...answers, ...allowedGuesses];
