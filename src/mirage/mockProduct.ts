import { IProduct } from "../Types/types";
function randomNumber() {
  return Math.floor(Math.random() * 100);
}

const mockProducts: IProduct[] = [
  {
    id: 1,
    title: "غذای توله سگ رفلکس پلاس",
    image: "https://rabinseh.com/wp-content/uploads/2022/06/%DB%8C%D8%A8%DB%8C%D9%84%DB%8C%D8%B3%D9%84%D8%B3%DB%8C%D8%A8%DB%8C%D8%B3%DB%8C%D8%A8%D8%B3%DB%8C-510x510.jpg",
    brand: "رفلکس",
    breed: "سگ",
    country: "ترکیه",
    weight: 1000,
    description: `
    غذای توله سگ رفلکس پلاس با طعم مرغ است.
مخمر ابجو در غذای رفلکس باعث ایجاد پوست و موی سالم براق میشود .
وجود اب پنیر به همرا ویتامین و مواد معدنی باعث تقویت ماهیچه ها و اندام وسلول های عصبی شده و به رشد هرچه بهتر و متعادل توله دلبند شما کمک می نماید
.عصاره یوکا  دراین محصول به کمتر شدن بوی مدفوع سگ کمک میکند.
    `,
    category: "غذای سگ",
    price: 230000,
    quantity: randomNumber(),
  },
  {
    id: 2,
    title: "غذا خشک سگ بالغ رفلکس پلاس نژاد بزرگ",
    image: "https://rabinseh.com/wp-content/uploads/2022/01/%D9%82%D8%B1%D9%85%D8%B2-2-510x510.jpg",
    brand: "رفلکس",
    breed: "سگ",
    country: "ترکیه",
    weight: 3000,
    description: `
    وزن ۳کیلوگرم

ساخت کشور ترکیه

قابل استفاده برای سگ های نژاد بزرگ بالغ`,
    category: "غذای سگ",
    price: 3000000,
    quantity: randomNumber(),
  },
  {
    id: 3,
    title: "غذای خشک توله سگ نژاد پاگ رویال کنین",
    image: "https://rabinseh.com/wp-content/uploads/2022/04/%D9%BE%D8%A7%DA%AF-%D8%AA%D9%88%D9%84%D9%87.-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 1500,
    description: `
    سگ های نژاد پاگ دارای پوزه تخت و صورت چین خورده هستند.

این نژاد معمولاً روحیه ای شاد دارد تغذیه مناسب می تواند موجب حفظ وزن مناسب برای آنها شود.

تمامی مواد مغذی مورد نیاز برای رشد ایده آل، به مقدار مناسب در این محصول به کار برده شده اند.

ترکیبی ویژه ای از آنتی اکسیدان ها که شامل ویتامین E نیز هست در این غذا به کار رفته که باعث تقویت سیستم ایمنی و تقویت عمومی بدن خواهد شد.

دانه بندی این غذا مطابق با شکل و اندازه پوزه و فک توله پاگ طراحی شده تا به سادگی بتوانند آن را مورد استفاده قرار دهند.`,
    category: "غذای سگ",
    price: 1100000,
    quantity: randomNumber(),
  },
  {
    id: 4,
    title: "غذای خشک سگ بالغ بد غذا رویال کنین",
    image: "https://rabinseh.com/wp-content/uploads/2022/06/%D8%B1%D9%88%DB%8C%D8%A7%D9%84-%D8%B3%DA%AF-%D8%AD%D8%B3%D8%A7%D8%B3-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 3000,
    description: `غذای مینی اکسیجنت رویال کنین برای همه سگ های نژاد کوچک و متوسط بالغ تا وزن ۱۰ کیلوگرم مناسب است

    کیفیت غذای سگ کوچک بد غذا رویال کنین بسیار بالا بوده و حاوی پروتئین های با قابلیت هضم بالاست.
    
    به همین دلیل موجب تقویت دستگاه گوارش و کاهش میزان مدفوع و بوی نامطبوع ناشی از آن خواهد شد.`,
    category: "غذای سگ",
    price: 1400000,
    quantity: randomNumber(),
  },
  {
    id: 5,
    title: "غذای خشک سگ بالغ نژاد شیتزو رویال کنین",
    image: "https://rabinseh.com/wp-content/uploads/2022/04/%D8%B4%DB%8C%D8%AA%D8%B2%D9%88-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 1500,
    description: `
    غذای مناسب موجب بهبود سلامت عمومی، زیبایی و نشاط حیوان خواهد شد در حالی که استفاده از غذاهای نامناسب می تواند باعث بروز بیماری ها و مشکلات فراوان گردد.

قطعاتی که به صورت منحصر بفردی برای شیتزو طراحی شده حیوان را تشویق به برداشتن و جویدن غذا می کند.
    `,
    category: "غذای سگ",
    price: 1100000,
    quantity: randomNumber(),
  },
  {
    id: 6,
    title: "غذای خشک سگ بالغ پامرانین رویال کنین",
    image: "https://rabinseh.com/wp-content/uploads/2022/05/%D9%BE%D8%A7%D9%85%D8%B1-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 1500,
    description: `
    این غذا یک وعده غذایی کامل و مقوی است.

به حفظ کیفیت و سلامت پوست و مو نیز کمک می کند که برای این نژاد از اهمیت بالایی برخوردار است.

جهت بهبود عملکرد دستگاه گوارش و حفظ سلامت آن، از مواد غذایی با کیفیت و پروتئین های با قابلیت هضم بالا در ساخت این محصول استفاده شده است.

ین محصول با EPA و DHA غنی شده است که این امر می تواند موجب تقویت استخوان ها و مفاصل پت گردد.

حاوی ترکیب مناسبی از فیبرهاست که به عبور بهتر مواد غذایی از دستگاه گوارش و بهبود کیفیت مدفوع کمک می کند.
    `,
    category: "غذای سگ",
    price: 950000,
    quantity: randomNumber(),
  },
  {
    id: 7,
    title: "توپ دنتال سگ تریکسی با طعم نعناع",
    image: "https://rabinseh.com/wp-content/uploads/2022/05/originals_PHO_PRO_CLIP_PHO_PRO_CLIP_3289-1_SALL_AWK_V1-510x510.jpg",
    brand: "تریکسی",
    breed: "سگ",
    country: "آلمان",
    weight: 20,
    description: `
    توپ سگ دارای زائده بر روی سه حلقه برای خارش لثه مناسب برای سگ ها و گربه های در حال دندان درآوردن

    مهم نیست سن، جثه، نژاد و جسیت حیوان خانگی شما چه باشد، این مهم است
    که بدانید تمام حیوانات خانگی مانند کودکان برای بازی و سرگرم شدن به اسباب بازی نیاز دارند،
    مخصوصا در تنهایی یا زمانهایی که شما وقت بازی و سرگرم کردن آنها را ندارید.
    
    علاوه بر آن اسباب بازی حیوانات خانگی در آموزش آنها بسیار کمک کننده است
    و باعث فعالیت ذهنی و بدنی حیوان میشود تا حیوان انرژی خود را صرف رفتار های مخرب نکند.
    `,
    category: "اسباب بازی سگ",
    price: 149000,
    quantity: randomNumber(),
  },
  {
    id: 8,
    title: "توپ دنتال سگ تریکسی با طعم مرغ",
    image: "https://rabinseh.com/wp-content/uploads/2022/05/originals_PHO_PRO_CLIP_PHO_PRO_CLIP_3290-1_SALL_AWK_V1-510x510.jpg",
    brand: "تریکسی",
    breed: "سگ",
    country: "آلمان",
    weight: 20,
    description: `
    توپ سگ دارای زائده بر روی سه حلقه برای خارش لثه مناسب برای سگ ها و گربه های در حال دندان درآوردن

    مهم نیست سن، جثه، نژاد و جسیت حیوان خانگی شما چه باشد، این مهم است
    که بدانید تمام حیوانات خانگی مانند کودکان برای بازی و سرگرم شدن به اسباب بازی نیاز دارند،
    مخصوصا در تنهایی یا زمانهایی که شما وقت بازی و سرگرم کردن آنها را ندارید.
    
    علاوه بر آن اسباب بازی حیوانات خانگی در آموزش آنها بسیار کمک کننده است
    و باعث فعالیت ذهنی و بدنی حیوان میشود تا حیوان انرژی خود را صرف رفتار های مخرب نکند.
    `,
    category: "اسباب بازی سگ",
    price: 209000,
    quantity: randomNumber(),
  },
  {
    id: 9,
    title: "توپ بند دار سگ تریکسی",
    image: "https://rabinseh.com/wp-content/uploads/2022/06/originals_PHO_PRO_CLIP_PHO_PRO_CLIP_33724-1_SALL_AWK_V1-510x512.jpg",
    brand: "تریکسی",
    breed: "سگ",
    country: "آلمان",
    weight: 15,
    description: `
    توپ بند دار سگ تریکسی آلمان 30 سانتی متر
    `,
    category: "اسباب بازی سگ",
    price: 220000,
    quantity: randomNumber(),
  },
  {
    id: 10,
    title: "خمیر دندان بیفار مخصوص سگ",
    image: "https://rabinseh.com/wp-content/uploads/2022/07/%D8%A8%DB%8C%D9%81%D8%A7%D8%B1-510x510.jpg",
    brand: "بیفار",
    breed: "سگ",
    country: "هلند",
    weight: 100,
    description: `
    موجب مقابله با پلاک های دندانی و جلوگیری از تشکیل تارتار می شود که در نتیجه آن سلامت دهان و دندان ها تقویت خواهد شد.

عاری از فلوراید بوده و حاوی دو آنزیم پروتئاز و گلوکز اکسیداز می باشد. پروتئاز ساختار پروتئینی پلاک ها را نابود کرده و مانع از اتصال آن با کلسیم و تشکیل تارتار می شود.
    `,
    category: "بهداشتی سگ",
    price: 255000,
    quantity: randomNumber(),
  },
  {
    id: 11,
    title: "قطره چشم بیفار",
    image: "https://rabinseh.com/wp-content/uploads/2022/03/%DA%86%D8%B4%D9%85-510x510.jpg",
    brand: "بیفار",
    breed: "سگ",
    country: "هلند",
    weight: 50,
    description: `
    برای استفاده از این محصول لازم است یک تکه دستمال پارچه ای نرم را به این ماده آغشته نموده و به آرامی آن را به ترشحات و رسوبات اطراف چشم حیوانات خود بمالید.
    `,
    category: "بهداشتی سگ",
    price: 340000,
    quantity: randomNumber(),
  },
  {
    id: 12,
    title: "دهان شویه سگ",
    image: "https://rabinseh.com/wp-content/uploads/2022/03/8be7757f86b7b2e11cfa76896dcf4df09fdc380a_1628358021-510x510.jpg",
    brand: "بیفار",
    breed: "سگ",
    country: "هلند",
    weight: 250,
    description: `
    محلول شستشوی دهان و دندان بیفار حاوی آنزیم هایی می باشد که باعث از بین رفتن باکتری های مضر دهان و دندان شده و از ایجاد تارتار و پوسیدگی جلوگیری می نماید.سلامت دهان و دندان حیوانات خانگی همچون سگ و گربه بسیار مهم و قابل تامل می باشد چرا که می تواند به محلی جهت تجمع باکتری ها بدل شده و منجر به بروز انواع بیماری ها شود. به همین دلیل کسانی که اقدام به نگهداری از این حیوانات می نمایند باید همواره به نظافت و پاکیزگی دهان و دندان های آنها دقت نمایند. شرکت هلندی بیفار محصولات بسیار کاربردی و ویژه ایی را در این زمینه تهیه و تولید نموده است که از جمله آنها این محل شستشوی می باشد. این محصول شرکت بیفار به صورت اختصاصی برای آن دسته از سگ و گربه هایی که مستعد بیماری های دهان و دندان می باشند تهیه شده است.
    `,
    category: "بهداشتی سگ",
    price: 350000,
    quantity: randomNumber(),
  },
  {
    id: 13,
    title: "غذای خشک گربه عقیم شده هپی کت مینکاس",
    image: "https://rabinseh.com/wp-content/uploads/2022/02/%D8%B9%D9%82%DB%8C%D9%85-510x510.jpg",
    brand: "هپی کت",
    breed: "گربه",
    country: "آلمان",
    weight: 10000,
    description: `
    غذای کامل متعادل، با محتوای چربی کاهش یافته و مقادیر بهینه فیبر رضایت بخش، به گربه شما کمک می کند تا وزن ایده آل خود را حفظ کند.

این غذای خشک خوشمزه دارای ویتامین ها و مواد معدنی زیادی است و از سیستم ایمنی بدن حمایت می کند.
    `,
    category: "غذای گربه",
    price: 2400000,
    quantity: randomNumber(),
  },
  {
    id: 14,
    title: "غذای گربه جوسرا دیلی کت",
    image: "https://rabinseh.com/wp-content/uploads/2022/05/joseradailycat2149-510x510.jpg",
    brand: "جوسرا",
    breed: "گربه",
    country: "آلمان",
    weight: 2000,
    description: `
    غذای گربه جوسرا دیلی کت 2 کیلوگرم + ارسال رایگان
    `,
    category: "غذای گربه",
    price: 800000,
    quantity: randomNumber(),
  },
  {
    id: 15,
    title: "غذای بچه گربه جوسرا طعم مرغ",
    image: "https://rabinseh.com/wp-content/uploads/2022/05/%DA%A9%DB%8C%D8%AA%D9%86-%D8%AC%D9%88%D8%B3%D8%B1%D8%A7-510x510.jpg",
    brand: "جوسرا",
    breed: "گربه",
    country: "آلمان",
    weight: 2000,
    description: `
    غذای بچه گربه جوسرا طعم مرغ 2 کیلوگرم + ارسال رایگان
    `,
    category: "غذای گربه",
    price: 750000,
    quantity: randomNumber(),
  },
  {
    id: 16,
    title: "غذای خشک جوسرا گربه بالغ مدل نیچرکت",
    image: "https://rabinseh.com/wp-content/uploads/2019/07/naturecatcat-510x510.jpg",
    brand: "جوسرا",
    breed: "گربه",
    country: "آلمان",
    weight: 2000,
    description: `
    غذای خشک جوسرا گربه بالغ مدل نیچرکت حاوی گوشت مرغ و ماهی
بدون غلات مخصوص گربه بالغ و بچه گربه های بالای شش ماه است.
این محصول ساخت کشور آلمان است در وزن ۲ کیلوگرمی تقدیم شما می شود.
    `,
    category: "غذای گربه",
    price: 750000,
    quantity: randomNumber(),
  },
  {
    id: 17,
    title: "غذای گربه یورینری رفلکس پلاس",
    image: "https://rabinseh.com/wp-content/uploads/2021/05/201910116135139613.jpg",
    brand: "رفلکس",
    breed: "گربه",
    country: "ترکیه",
    weight: 1500,
    description: `
    غذای مورد علاقه فینیکس.
    `,
    category: "غذای گربه",
    price: 320000,
    quantity: randomNumber(),
  },
  {
    id: 18,
    title: "غذای خشک گربه پرشین رویال کنین",
    image: "https://rabinseh.com/wp-content/uploads/2022/06/%D9%BE%D8%B1%D8%B4%DB%8C%D9%86-510x510.jpg",
    brand: "رویال کنین",
    breed: "گربه",
    country: "فرانسه",
    weight: 2000,
    description: `
    ترکیبات ویژه و مغذی این غذا پروتئین های ویژه با قابلیت جذب سریع و پریبیوتیکها موجب تقویت سلامت دستگاه گوارش و بدن می‌شوند.
    `,
    category: "غذای گربه",
    price: 990000,
    quantity: randomNumber(),
  },
  {
    id: 19,
    title: "خاک گربه ون کت با رایحه پودر بچه",
    image: "https://rabinseh.com/wp-content/uploads/2020/02/110278446.jpg",
    brand: "ون کت",
    breed: "گربه",
    country: "ایران",
    weight: 7000,
    description: `
    خاک گربه ون کت با رایجه پودر بچه آنتی باکتریال اولتراکلامپینگ با کیفیت ترین خاک در بین رقبا خود است
این خاک بدون هیچگونه گرد و غبار است.
نسبت به سایر خاک های موجود در بازار قدرت جذب بسیار بالایی دارد
    `,
    category: "خاک گربه",
    price: 110000,
    quantity: randomNumber(),
  },
  {
    id: 20,
    title: "خاک گربه ون کت با رایحه طبیعت",
    image: "https://rabinseh.com/wp-content/uploads/2020/02/110282060.jpg",
    brand: "ون کت",
    breed: "گربه",
    country: "ایران",
    weight: 7000,
    description: `
    خاک گربه ون کت با رایجه طبیعت آنتی باکتریال اولتراکلامپینگ با کیفیت ترین خاک در بین رقبا خود است
این خاک بدون هیچگونه گرد و غبار است.
نسبت به سایر خاک های موجود در بازار قدرت جذب بسیار بالایی دارد
    `,
    category: "خاک گربه",
    price: 110000,
    quantity: randomNumber(),
  },
  {
    id: 21,
    title: "خاک گربه ون کت با رایحه وانیلی",
    image: "https://rabinseh.com/wp-content/uploads/2020/02/5438346.jpg",
    brand: "ون کت",
    breed: "گربه",
    country: "ایران",
    weight: 5000,
    description: `
    خاک گربه ون کت با رایجه وانیلی آنتی باکتریال اولتراکلامپینک با کیفیت ترین خاک در بین رقبا خود است
این خاک بدون هیچگونه گرد و غبار است.
نسبت به سایر خاک های موجود در بازار قدرت جذب بسیار بالایی دارد
    `,
    category: "خاک گربه",
    price: 80000,
    quantity: randomNumber(),
  },
  {
    id: 22,
    title: "قرص خوران و شربت خوران گربه",
    image: "https://rabinseh.com/wp-content/uploads/2022/07/%D8%B4%D8%B1%D8%A8%D8%AA-%D8%AE%D9%88%D8%B1-510x509.jpg",
    brand: "تریکسی",
    breed: "گربه",
    country: "آلمان",
    weight: 15,
    description: `
    شربت خوران و قرص خوران گربه و سگ محصولی برای راحتی بیشتر در دارو دادن به حیوان شما است
    `,
    category: "بهداشتی گربه",
    price: 60000,
    quantity: randomNumber(),
  },
  {
    id: 23,
    title: "ناخن گیر گربه تریکسی",
    image: "https://rabinseh.com/wp-content/uploads/2022/05/%D9%86%D8%A7%D8%AE%D9%86-%DA%AF%DB%8C%D8%B1-510x510.jpg",
    brand: "تریکسی",
    breed: "گربه",
    country: "آلمان",
    weight: 18,
    description: `
    ناخن گیر سگ و گربه تریکسی
    `,
    category: "بهداشتی گربه",
    price: 320000,
    quantity: randomNumber(),
  },
  {
    id: 24,
    title: "خمیر دندان گربه تریکسی ",
    image: "https://rabinseh.com/wp-content/uploads/2022/03/%D9%85%D8%B3%D9%88%D8%A7%DA%AF-510x510.jpg",
    brand: "تریکسی",
    breed: "گربه",
    country: "آلمان",
    weight: 100,
    description: `
    ست مسواک و خمیر دندان مخصوص گربه، برای مراقبت کامل از بهداشت دهان و دندان است. شامل: خمیر دندان، مسواک کوچک و مسواک دو طرفه با دو سر برس مختلف (برس بزرگ برای دندان های نیش و جلویی و برس کوچک برای دندان های آسیا)
    `,
    category: "بهداشتی گربه",
    price: 230000,
    quantity: randomNumber(),
  },
  {
    id: 25,
    title: "آبخوری جوندگان دلوکس",
    image: "https://rabinseh.com/wp-content/uploads/2020/04/s-l1600-1697.jpg",
    brand: "دلوکس",
    breed: "جوندگان",
    country: "آلمان",
    weight: 75,
    description: `
    جنس پلاستیک و فلز استیل (جنس قسمت لوله‌ای ظرف آب فلزی )
    `,
    category: "ملزومات جوندگان",
    price: 250000,
    quantity: randomNumber(),
  },
  {
    id: 26,
    title: "توالت مثلثی خرگوش",
    image: "https://rabinseh.com/wp-content/uploads/2022/03/%D8%AE%D8%B1%DA%AF%D9%88%D8%B4%D8%B4%D8%B4%D8%B4-510x510.jpg",
    brand: "تریکسی",
    breed: "جوندگان",
    country: "آلمان",
    weight: 150,
    description: `
    توالت مثلثی خرگوش سایز بزرگ
    `,
    category: "ملزومات جوندگان",
    price: 350000,
    quantity: randomNumber(),
  },
  {
    id: 27,
    title: "توالت گرد خرگوش",
    image: "https://rabinseh.com/wp-content/uploads/2020/05/Untitled-5.jpg",
    brand: "تریکسی",
    breed: "جوندگان",
    country: "آلمان",
    weight: 200,
    description: `
    توالت گرد خرگوش دی پی اس
    `,
    category: "ملزومات جوندگان",
    price: 320000,
    quantity: randomNumber(),
  },
  {
    id: 28,
    title: "چرخ و فلک همستر",
    image: "https://rabinseh.com/wp-content/uploads/2022/06/%D8%A7%D8%B3%D8%A8%D8%A7%D8%A8-%D8%A8%D8%A7%D8%B2%DB%8C-%DA%86%D8%B1%D8%AE-%D9%88-%D9%81%D9%84%DA%A9-%D9%87%D9%85%D8%B3%D8%AA%D8%B122-510x510.jpg",
    brand: "تریکسی",
    breed: "جوندگان",
    country: "آلمان",
    weight: 70,
    description: `
    چرخ و فلک همستر سایز کوچک
    `,
    category: "بازی جوندگان",
    price: 300000,
    quantity: randomNumber(),
  },
  {
    id: 29,
    title: "لانه تخم مرغی همستر",
    image: "https://rabinseh.com/wp-content/uploads/2021/01/Untitled-20-510x510.jpg",
    brand: "تریکسی",
    breed: "جوندگان",
    country: "آلمان",
    weight: 80,
    description: `
    از جنس پلاستیک مقاوم
    `,
    category: "ملزومات جوندگان",
    price: 275000,
    quantity: randomNumber(),
  },
  {
    id: 30,
    title: "توپ همستر با استند فلزی",
    image: "https://rabinseh.com/wp-content/uploads/2020/10/Untitled.jpg",
    brand: "تریکسی",
    breed: "جوندگان",
    country: "آلمان",
    weight: 300,
    description: `
    توپ همستر با استند فلزی
    `,
    category: "بازی جوندگان",
    price: 250000,
    quantity: randomNumber(),
  },
  {
    id: 31,
    title: "غذای مخصوص مرغ مینا",
    image: "https://rabinseh.com/wp-content/uploads/2020/12/MoFeed-Myna-Food-510x510.jpg",
    brand: "مفید",
    breed: "پرندگان",
    country: "ایران",
    weight: 1000,
    description: `
    غذای مخصوص مرغ مینا مفید وزن 1 کیلوگرم
    `,
    category: "غذای پرندگان",
    price: 150000,
    quantity: randomNumber(),
  },
  {
    id: 32,
    title: "غذای طوطی مفید",
    image: "https://rabinseh.com/wp-content/uploads/2020/12/mofeed-african-mixture-parrot-bird-1000gr-1.jpg",
    brand: "مفید",
    breed: "پرندگان",
    country: "ایران",
    weight: 1000,
    description: `
    غذای طوطی مفید مدل AFRICAN MIXTURE KASKO وزن 1 کیلوگرم
    `,
    category: "غذای پرندگان",
    price: 200000,
    quantity: randomNumber(),
  },
  {
    id: 33,
    title: "غذای عروس هلندی و مرغ عشق",
    image: "https://rabinseh.com/wp-content/uploads/2020/09/3a9efed584f64e7fb9413c51a02bacde.jpg",
    brand: "مفید",
    breed: "پرندگان",
    country: "ایران",
    weight: 1000,
    description: `
    غذای عروس هلندی و مرغ عشق مفید 1kg
    `,
    category: "غذای پرندگان",
    price: 150000,
    quantity: randomNumber(),
  },
  {
    id: 34,
    title: "غذای مرغ عشق Grandmix",
    image: "https://rabinseh.com/wp-content/uploads/2019/07/2449.jpeg",
    brand: "گرند میکس",
    breed: "پرندگان",
    country: "انگلیس",
    weight: 1000,
    description: `
    غذای مرغ عشق Grandmix  غذایی کامل روزانه میباشد.
این غذا دارای ویتامینهای ضروری و عناصر کمیاب مورد نیاز مرغ عشق است.
    `,
    category: "غذای پرندگان",
    price: 130000,
    quantity: randomNumber(),
  },
  {
    id: 35,
    title: "لانه بزرگ عروس هلندی",
    image: "https://rabinseh.com/wp-content/uploads/2022/06/62e09c870a6c7c121085b094a234930f86536c5d_1612770282-510x510.jpg",
    brand: "جاوا",
    breed: "پرندگان",
    country: "ایران",
    weight: 1200,
    description: `
    آشیانه عروس جاوا دارای دو درب بازشو یکی از بالا و یکی از پهلو است.
این محصول برای پرندگانی مانند عروس هلندی، مرغ عشق مخصوصا مرغ عشق انگلیسی که جثه کوچکتری دارد مورد استفاده قرار می‌گیرد.
همچنین این نوع از لانه پرنده دارای یک لگن می‌باشد که می‌توان جهت دادن سرلاک از آن استفاده نمود.
    `,
    category: "لانه پرندگان",
    price: 900000,
    quantity: randomNumber(),
  },
  {
    id: 36,
    title: "لانه کوچک فنچ",
    image: "https://rabinseh.com/wp-content/uploads/2022/06/bird-Java-Finch-Nest-1060026-migmigpet-1-510x510.jpg",
    brand: "جاوا",
    breed: "پرندگان",
    country: "ایران",
    weight: 800,
    description: `
    لانه پرنده فنچ برند جاوا ساخته شده از پلاستیک درجه‌ی یک می‌باشد.

این لانه فنچ با قابلیت تفکیک اجزا از یکدیگر امکان شستشو و جرم‌گیری آسان را فراهم می‌نماید.

همچنین لانه پرنده فنچ جاوا دارای خاصیت آنتی باکتریال بوده و شرایط برای رشد انواع انگل‌ها و باکتری‌ها روی سطح آن میسر نیست.

این محصول مکانیزه با طراحی کاملا کارشناسی شده سبب بازدهی بیشتر و سهولت نگهداری از فنچ می‌شود.
    `,
    category: "لانه پرندگان",
    price: 850000,
    quantity: randomNumber(),
  },
  {
    id: 37,
    title: "غذای خشک سگ رویال کنین مدل pomeranian",
    image: "https://dkstatics-public.digikala.com/digikala-products/e5ce44b33f0a1c20d4600c1f21f70a2792ce7ef0_1621498211.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 1500,
    description: `
    غذای خشک سگ رویال کنین مدل pomeranian وزن 1.5 کیلوگرم
    `,
    category: "غذای سگ",
    price: 750000,
    quantity: randomNumber(),
  },
  {
    id: 38,
    title: "غذای خشک سگ رویال کنین مدل MINI Adult",
    image: "https://dkstatics-public.digikala.com/digikala-products/112915989.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 2000,
    description: `
    غذای خشک سگ رویال کنین مدل MINI Adult وزن 2 کیلوگرم
    `,
    category: "غذای سگ",
    price: 230000,
    quantity: randomNumber(),
  },
  {
    id: 39,
    title: "غذای خشک توله سگ نژاد بسیار کوچک رویال کنین",
    image: "https://rabinseh.com/wp-content/uploads/2022/08/ldkd3-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 3000,
    description: `
    غذای خشک توله سگ نژاد بسیار کوچک رویال کنین ۳ کیلویی (نژاد های مینیاتوری)
    `,
    category: "غذای سگ",
    price: 1300000,
    quantity: randomNumber(),
  },
  {
    id: 40,
    title: "غذای خشک سگ بالغ پامرانین رویال کنین ۳ کیلویی",
    image: "https://rabinseh.com/wp-content/uploads/2022/08/%D9%BE%D8%A7%D9%85%D8%B1-3-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 3000,
    description: `
   غذای خشک سگ بالغ پامرانین رویال کنین ۳ کیلویی
    `,
    category: "غذای سگ",
    price: 1300000,
    quantity: randomNumber(),
  },
  {
    id: 41,
    title: "غذای خشک سگ بالغ نژاد کوچک رویال کنین",
    image: "https://rabinseh.com/wp-content/uploads/2022/08/4-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 4000,
    description: `
    غذای خشک سگ بالغ نژاد کوچک رویال کنین ۴ کیلویی + ارسال رایگان
    `,
    category: "غذای سگ",
    price: 1500000,
    quantity: randomNumber(),
  },
  {
    id: 42,
    title: "غذای خشک سگ بالغ نژاد بسیار کوچک رویال کنین",
    image: "https://rabinseh.com/wp-content/uploads/2022/08/3-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 3000,
    description: `
    غذای خشک سگ بالغ نژاد بسیار کوچک رویال کنین ۳ کیلویی (نژاد های مینیاتوری)
    `,
    category: "غذای سگ",
    price: 1300000,
    quantity: randomNumber(),
  },
  {
    id: 43,
    title: "پوچ سگ بالغ عقیم شده رویال کنین ۸۵ گرم",
    image: "https://rabinseh.com/wp-content/uploads/2022/08/%D9%BE%D9%88%DA%86-%D8%B9%D9%82%DB%8C%D9%85-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 85,
    description: `
    پوچ سگ بالغ عقیم شده رویال کنین 85 گرم
    `,
    category: "غذای سگ",
    price: 80000,
    quantity: randomNumber(),
  },
  {
    id: 44,
    title: "غذای خشک سگ هالپوآلژیک رویال کنین ",
    image: "https://rabinseh.com/wp-content/uploads/2022/08/%D8%A7%D9%84%D8%B1%DA%98%DB%8C4-510x509.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 2000,
    description: `
    غذای خشک سگ هالپوآلژیک رویال کنین ۲ کیلویی (ضدآلرژی)
    `,
    category: "غذای سگ",
    price: 1250000,
    quantity: randomNumber(),
  },
  {
    id: 45,
    title: "پوچ سگ بالغ بد غذا رویال کنین",
    image: "https://rabinseh.com/wp-content/uploads/2022/06/%D8%A8%D8%AF%D8%BA%D8%B0%D8%A7-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 80,
    description: `
    پوچ سگ بالغ بد غذا رویال کنین ۸۵ گرم
    `,
    category: "غذای سگ",
    price: 60000,
    quantity: randomNumber(),
  },
  {
    id: 46,
    title: "غذای خشک توله سگ نژاد یورکشایر تریر رویال کنین",
    image: "https://rabinseh.com/wp-content/uploads/2022/06/%D8%AA%D9%88%D9%84%D9%87-%DB%8C%D9%88%D8%B1%DA%A9-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 1500,
    description: `
    غذای خشک توله سگ نژاد یورکشایر تریر رویال کنین ۱٫۵ کیلویی + ارسال رایگان
    `,
    category: "غذای سگ",
    price: 825000,
    quantity: randomNumber(),
  },
  {
    id: 47,
    title: "غذای خشک توله سگ نژاد یورکشایر تریر رویال کنین ۱٫۵ کیلویی + ارسال رایگان",
    image: "https://rabinseh.com/wp-content/uploads/2022/06/%D8%B1%D9%88%DB%8C%D8%A7%D9%84-%D8%B3%DA%AF-%D8%AD%D8%B3%D8%A7%D8%B3-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 3000,
    description: `
    غذای خشک سگ بالغ بد غذا رویال کنین ۳ کیلویی (نژاد متوسط و کوچک) + ارسال رایگان
    `,
    category: "غذای سگ",
    price: 1400000,
    quantity: randomNumber(),
  },
  {
    id: 48,
    title: "کنسرو ریکاوری رویال کنین",
    image: "https://rabinseh.com/wp-content/uploads/2022/05/recovery-cans-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 195,
    description: `
    کنسرو ریکاوری رویال کنین سگ ۱۹۵ گرم
    `,
    category: "غذای سگ",
    price: 140000,
    quantity: randomNumber(),
  },
  {
    id: 49,
    title: "غذای خشک سگ رویال کنین یورینری",
    image: "https://rabinseh.com/wp-content/uploads/2022/01/Royal-urinaryso-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 2000,
    description: `
    غذای خشک سگ رویال کنین یورینری ۲ کیلویی + ارسال رایگان
    `,
    category: "غذای سگ",
    price: 1200000,
    quantity: randomNumber(),
  },
  {
    id: 50,
    title: "پوچ توله سگ مینی رویال کنین",
    image: "https://rabinseh.com/wp-content/uploads/2022/05/%D9%85%DB%8C%D9%86%DB%8C-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 85,
    description: `
    پوچ توله سگ مینی رویال کنین ۸۵ گرم (توله سگ های نژاد کوچک)
    `,
    category: "غذای سگ",
    price: 60000,
    quantity: randomNumber(),
  },
  {
    id: 51,
    title: "غذای خشک توله سگ رویال کنین",
    image: "https://rabinseh.com/wp-content/uploads/2022/01/%DA%AF%D8%A7%D8%B3%D8%AA%D8%B1%D9%88-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 2500,
    description: `
    غذای خشک توله سگ رویال کنین گاسترو اینتستینال ۲٫۵ کیلویی
    `,
    category: "غذای سگ",
    price: 1150000,
    quantity: randomNumber(),
  },
  {
    id: 52,
    title: "پوچ توله سگ مدیوم رویال کنین",
    image: "https://rabinseh.com/wp-content/uploads/2022/05/%D9%85%D8%AF%DB%8C%D9%88%D9%85-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 140,
    description: `
    پوچ توله سگ مدیوم رویال کنین ۱۴۰ گرم (توله سگهای نژاد متوسط)
    `,
    category: "غذای سگ",
    price: 100000,
    quantity: randomNumber(),
  },
  {
    id: 53,
    title: "کنسرو استارتر رویال کنین",
    image: "https://rabinseh.com/wp-content/uploads/2019/07/8831629325915Royal-Canin-Starter-mama-si-puiul-hrana-umeda-caini-pate-17007.jpegoxygenpet-510x510.jpg",
    brand: "رویال کنین",
    breed: "سگ",
    country: "فرانسه",
    weight: 195,
    description: `
    کنسرو استارتر رویال کنین توله سگ و مادر ۱۹۵ گرم
    `,
    category: "غذای سگ",
    price: 130000,
    quantity: randomNumber(),
  },
  {
    id: 54,
    title: "غذای سگ بالغ رفلکس پلاس طعم سالمون ",
    image: "https://rabinseh.com/wp-content/uploads/2021/09/product_gallery_2021-05-17_15-56-1525-510x510.jpg",
    brand: "رفلکس",
    breed: "سگ",
    country: "ترکیه",
    weight: 3000,
    description: `
    غذای سگ بالغ رفلکس پلاس طعم سالمون (نژاد کوچک و متوسط) ۳kg + ارسال رایگان
    `,
    category: "غذای سگ",
    price: 350000,
    quantity: randomNumber(),
  },
  {
    id: 55,
    title: "غذای خشک سگ رفلکس پلاس نژاد بزرگ",
    image: "https://rabinseh.com/wp-content/uploads/2021/09/product_gallery_2021-05-17_17-00-02-510x510.jpg",
    brand: "رفلکس",
    breed: "سگ",
    country: "ترکیه",
    weight: 18000,
    description: `
    غذای خشک سگ رفلکس پلاس نژاد بزرگ طعم بره و برنج ۱۸kg
    `,
    category: "غذای سگ",
    price: 2300000,
    quantity: randomNumber(),
  },
  {
    id: 56,
    title: "غذا خشک سگ بالغ رفلکس نژاد بزرگ",
    image: "https://rabinseh.com/wp-content/uploads/2022/05/888-510x510.jpg",
    brand: "رفلکس",
    breed: "سگ",
    country: "ترکیه",
    weight: 3000,
    description: `
    غذا خشک سگ بالغ رفلکس نژاد بزرگ طعم ماهی سالمون و برنج ۳ کیلوگرم
    `,
    category: "غذای سگ",
    price: 360000,
    quantity: randomNumber(),
  },
  {
    id: 57,
    title: "غذای سگ بالغ نژاد بزرگ رفلکس ",
    image: "https://rabinseh.com/wp-content/uploads/2022/06/%D8%B3%D8%A8%D8%B2%DB%8C%D8%AC%D8%A7%D8%AA-510x510.jpg",
    brand: "رفلکس",
    breed: "سگ",
    country: "ترکیه",
    weight: 3000,
    description: `
    غذای سگ بالغ نژاد بزرگ رفلکس طعم بره ،برنج و سبزیجات
    `,
    category: "غذای سگ",
    price: 300000,
    quantity: randomNumber(),
  },
  {
    id: 58,
    title: "غذای سگ بالغ رفلکس پلاس سالمون",
    image: "https://rabinseh.com/wp-content/uploads/2021/09/product_gallery_2021-05-17_15-56-15-510x510.jpg",
    brand: "رفلکس",
    breed: "سگ",
    country: "ترکیه",
    weight: 3000,
    description: `
    غذای سگ بالغ رفلکس پلاس سالمون (نژاد متوسط و بزرگ) ۳kg + ارسال رایگان
    `,
    category: "غذای سگ",
    price: 600000,
    quantity: randomNumber(),
  },
  {
    id: 59,
    title: "غذای خشک توله سگ رفلکس طعم بره و برنج",
    image: "https://rabinseh.com/wp-content/uploads/2021/11/product_gallery_2021-05-17_16-54-05-510x510.jpg",
    brand: "رفلکس",
    breed: "سگ",
    country: "ترکیه",
    weight: 15000,
    description: `
    غذای خشک توله سگ رفلکس طعم بره و برنج ۱۵KG + ارسال رایگان
    `,
    category: "غذای سگ",
    price: 2300000,
    quantity: randomNumber(),
  },
  {
    id: 60,
    title: "غذای توله سگ رفلکس با طعم گوشت و برنج",
    image: "https://rabinseh.com/wp-content/uploads/2021/12/product_gallery_2021-05-17_16-53-31-510x510.jpg",
    brand: "رفلکس",
    breed: "سگ",
    country: "ترکیه",
    weight: 3000,
    description: `
    غذای توله سگ رفلکس با طعم گوشت و برنج ۳kg (بسته بندی جدید) + ارسال رایگان
    `,
    category: "غذای سگ",
    price: 560000,
    quantity: randomNumber(),
  },
  {
    id: 61,
    title: "غذای خشک سگ رفلکس طعم مرغ",
    image: "https://rabinseh.com/wp-content/uploads/2021/07/9b4d356620340dc40dfdd0f7a1e97dad-1-510x510.jpg",
    brand: "رفلکس",
    breed: "سگ",
    country: "ترکیه",
    weight: 3000,
    description: `
    غذای خشک سگ رفلکس طعم مرغ (نژاد کوچک) ۳kg + ارسال رایگان
    `,
    category: "غذای سگ",
    price: 600000,
    quantity: randomNumber(),
  },
];

export default mockProducts;
