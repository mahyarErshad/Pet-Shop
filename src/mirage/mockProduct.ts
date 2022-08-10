import { IProduct } from "../types";

const mockProducts: IProduct[] = [
  {
    id: "1",
    title: "شیر بادام کاله - 1 لیتر",
    underTitle: "شیر بادام کاله - 1 لیتر",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/1c35e1d074c9127f512a9faedac58a01b5cc6957_1611989738.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/e214ee3d78c1c985a9830e69f2ac0e2653a20e29_1623221743.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    image3:
      "https://dkstatics-public.digikala.com/digikala-products/4fd2f4a98451dc14147997886026d5bd5e216c94_1611989742.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    brand: "کاله",
    category: "لبنیات",
    price: 30000,
    quantity: 0,
  },
  {
    id: "2",
    title: "ماست یونانی هراز مقدار 1.5 کیلوگرم",
    underTitle: "ماست یونانی هراز مقدار 1.5 کیلوگرم",
    image1:
      "https://dkstatics-public-2.digikala.com/digikala-products/110461510.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/110461519.jpg?x-oss-process=image/resize,h_1600/quality,q_80",
    image3:
      "https://dkstatics-public.digikala.com/digikala-products/110461517.jpg?x-oss-process=image/resize,h_1600/quality,q_80",
    brand: "هراز",
    category: "لبنیات",
    price: 52900,
    quantity: 75,
  },
  {
    id: "3",
    title: "شیر کم چرب میهن - 1 لیتر",
    underTitle: "شیر کم چرب میهن - 1 لیتر",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/4128602.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/4128608.jpg?x-oss-process=image/resize,h_1600/quality,q_80",
    image3:
      "https://dkstatics-public.digikala.com/digikala-products/f213f7ca390e8b3250461fb73a5caa07e13fa4bf_1600254876.jpg?x-oss-process=image/resize,h_1600/quality,q_80",
    brand: "میهن",
    category: "لبنیات",
    price: 15000,
    quantity: 75,
  },
  {
    id: "4",
    title: "پنیر پارمسان آلیما - 100 گرم",
    underTitle: "پنیر پارمسان آلیما - 100 گرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/120677877.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/120677886.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    image3:
      "https://dkstatics-public.digikala.com/digikala-products/120677881.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    brand: "آلیما",
    category: "لبنیات",
    price: 34000,
    quantity: 75,
  },
  {
    id: "5",
    title: "پنیر خامه ای ویلی کاله - 1 کیلوگرم",
    underTitle: "پنیر خامه ای ویلی کاله - 1 کیلوگرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/b853b31d09ea9e86cfdc1c33537dcde2115e1f4d_1611989330.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/06b0b9029f2801e8a7483b5ab6523289f1b6a859_1611989332.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    image3:
      "https://dkstatics-public.digikala.com/digikala-products/da390c46975d7ba97d2e6b065b1f5be61124ee29_1611989333.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    brand: "کاله",
    category: "لبنیات",
    price: 64000,
    quantity: 75,
  },
  {
    id: "6",
    title: "خامه قنادی سولیانو کاله - 900 گرم",
    underTitle: "خامه قنادی سولیانو کاله - 900 گرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/120854476.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/120854479.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    image3:
      "https://dkstatics-public.digikala.com/digikala-products/120854482.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    brand: "کاله",
    category: "لبنیات",
    price: 49900,
    quantity: 75,
  },
  {
    id: "7",
    title: "پنیر پیتزا مخلوط مطهر - 2 کیلوگرم",
    underTitle: "پنیر پیتزا مخلوط مطهر - 2 کیلوگرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/cbac913b99c1adc2ccb921c140d19349a55acf4e_1609331303.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/bdcdab056d1b080d413dce1c18b3f3f0acf61e21_1609331307.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    brand: "کاله",
    category: "لبنیات",
    price: 190000,
    quantity: 75,
  },
  {
    id: "8",
    title: "روغن نیمه جامد لادن - 5 کیلوگرم",
    underTitle: "روغن نیمه جامد لادن - 5 کیلوگرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/111984180.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    brand: "لادن",
    category: "خوار و بار",
    description:
      "روغن‌های نیمه جامد در واقع ترکیبی از روغن‌های جامد و مایع هستند که در دمای پایین، بخشی از آن‌ جامد می‌شود و در دمای بالا بخشی به مایع تبدیل می‌شود، این روغن‌ها به دلیل میزان درصد‌ چربی که دارند نسبت به روغن‌های جامد سالم‌تر هستند. روغن نیمه جامد لادن مقدار 5 لیتر انتخابی مناسب و سالم برای پختن غذاست. در این صورت برای انتخاب روغن‌ها می‌توان روغن نیمه‌جامد لادن را انتخاب کرد. استفاده از روغن‌های جامد به دلیل اسیدهای چرب بیشتر و باقی ماندن در بدن باعث آسیب به سیستم قلبی و عروقی می‌شوند که این مسئله موجب مضر بودن آن در هنگام پخت و پز است. این روغن باعث کاهش کلسترول شده و تغییری در طعم و مزه غذا ایجاد نمی‌شود. روغن نیمه جامد لادن از ویژگی‌هایی برخوردار است که باعث سالم‌تر ماندن هرچه بیشتر غذای پخته‌ شده می‌شود. روغن نیمه جامد لادن مقدار 5 لیتر غذا را سالم‌تر و آشپزی را لذت‌بخش‌تر می‌کند.",
    price: 91000,
    quantity: 75,
  },
  {
    id: "9",
    title: "روغن سبوس برنج مری کینگ - 1000 میلی لیتر",
    underTitle: "روغن سبوس برنج مری کینگ - 1000 میلی لیتر",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/c261c14c5c295d319772de7b2bae4909acba7f84_1625990885.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    brand: "مری کینگ",
    description:
      "شرکت آرین تاپ نوش اولین تولیدکننده روغن‌ سبوس برنج با برند مری کینگ در ایران است. این برند روغن‌ سلامت با بالاترین کیفیت و استاندارد تولید می‌کند.استفاده از این روغن در زمان آشپزی انواع سالادها و شیرنی پزی و پخت و پز و سرخ‌کردنی مناسب و استاندارد است. برخی از روغن‌ها دارای اسیدهای چربی هستند که این روغن فاقد آنتی اکسیدان مصنوعی واسیدهای چرب ترانس میباشد. این روغن دارای نقطه دود بالا ایده آل جهت سرخ کردن میباشد. روغن مناسب برای بیماران دیابتی و قلبی عروقی است.روغن سبوس برنج با طعم مطلوب و کاهش دهنده کلسترول بد خون (LDL) جزو سالم‌ترین روغن‌های گیاهی محسوب می‌شود. این روغن غنی در دو نوع ویتامین Tocopherol / tocotrienol) E) است که برای بدن بسیار مفید هستند. این محصول از سبوس برنج ایرانی (طارم و هاشمی) تولید می‌شود که حاوی آنتی اکسیدان اوريزانول (آنتی اکسیدان طبیعی) میباشد و فاقد تغییر ژنتیکی (غیر تراریخته NON-GMO) ​است",
    category: "خوار و بار",
    price: 153000,
    quantity: 75,
  },
  {
    id: "10",
    title: "برنج طارم ممتاز گلستان وزن 10 کیلوگرم",
    underTitle: "برنج طارم ممتاز گلستان وزن 10 کیلوگرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/33c369a82b613badd2b4b20fc810ff15bc535869_1601119232.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/759da3db6a23adfad02c8ddb5fc0a32a08e6ba9d_1628320791.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    brand: "گلستان",
    description:
      "طارم یکی از شهرهای شمالی استان زنجان است و به استان‌های گیلان ، قزوین و اردبیل نزدیک است . از جمله محصولاتی که در این شهر کاشته می‌شود، می‌توان به برنج اشاره کرد . البته روستای طارم سر هم در استان گیلان و در نزدیکی شهر کوچصفهان قرار دارد که شباهت اسمی با این منطقه دارد و البته محصول غالب این روستا نیز برنج است. برنج های برداشت شده از این منطقه از لحاظ کمی بسیار ضعیف هستند اما کیفیت بالایی برخوردارند. به صورت ساده می‌توان گفت از نوع برنج های پرمحصول نیستند و کیفیت و عطر بالایی برخوردارند وزارت جهاد کشاورزی معتقد است میزان محصول برداشتی از زمین های این منطقه بسیار کم است و نمی‌تواند مورد حمایت قرار گیرد و بهتر است از سطح کاشت برنج این شهر کاسته شود و به محصولات دیگر اختصاص داده شود تا بهره وری بهتر داشته باشند. اما واقعیت ماجرا به نوعی دیگر است. برنج این منطقه بسیار باکیفیت است به گونه ای که برنج طارم به عنوان یک برند شناخته شده است و در بازار از نوع برنج طارم به عنوان یکی از باکیفیت ترین برنج های ایرانی یاد می‌شود و شرکت گلستان توانسته، به بهترین شکل طعم یک حس خوب در هنگام صرف برنج را، به ما بدهد.",
    category: "خوار و بار",
    price: 429000,
    quantity: 75,
  },
  {
    id: "11",
    title: "لوبیا چیتی داماش - 900 گرم",
    underTitle: "لوبیا چیتی داماش - 900 گرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/cad0a00eb1120a24de5cc44fd08d6ffeb6cb6e68_1612089942.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/aeb6d93623310fd01c091d9e9a8fd563c8294efc_1617792774.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    brand: "داماش",
    description:
      "لوبیا چیتی: لوبیا چیتی، یکی از انواع خوشمزه لوبیا می باشد که در غذاهای لذیذی چون قورمه سبزی و خوراک لوبیا به کار می رود. امروزه که سرعت در آماده سازی غذا ها مورد توجه قرار گرفته است و تهیه یک غذای لذیذ و سریع مانند خوراک لوبیا بیشتر شده است، لوبیا چیتی، در بین خانواده های ایرانی رواج بیشتری یافته است. گفتنی است میزان پروتئین موجود در این نوع لوبیا از انواع دیگر آن بیشتر است، از این رو منبع غذایی مفیدی برای پیشگیری از ابتلا به اختلالات کلیوی و پوکی استخوان به‌شمار می‌رود. لوبیا چیتی داماش از بهترین زمین های کشاورزی انتخاب و پس از پاکسازی، سورتینگ و بسته بندی در اختیار شما عزیززان قرار گرفته است.",
    category: "خوار و بار",
    price: 46300,
    quantity: 75,
  },
  {
    id: "12",
    title: "عدس داماش - 900 گرمی",
    underTitle: "عدس داماش - 900 گرمی",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/3e8eaa03d45ef24ee88822fd27774efcc1096ab9_1612089300.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    brand: "داماش",
    category: "خوار و بار",
    price: 38500,
    quantity: 75,
  },
  {
    id: "13",
    title: "ماکارونی پیکولی زر ماکارون مقدار 500 گرم",
    underTitle: "ماکارونی پیکولی زر ماکارون مقدار 500 گرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/e78c0b7939d892df849526aa8d744dc74a7f9511_1607497819.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    brand: "زرماکارون",
    description:
      "ماکارونی پیکولو «زر ماکارون» شام یا نهاری لذیذ و انرژی بخش برای شما خواهد بود که ظاهر اشتهابرانگیز آن همه را به خود جذب می‌کند. این محصول زر ماکارون از ترکیب آب، آرد سمولینا به‌دست آمده است و شکل ظاهری آن شکل پیچی دارد. در هر 55گرم از این ماکارونی زر ماکارون 2 گرم چربی و 0.056 گرم نمک وجود دارد. اسپاگتی زرماکارون در بسته‌بندی سلفونی عرضه می‌شود که در آن  500 گرم ماکارونی است.زرماکارون سه مرتبه دارای کسب عنوان اولین و تنها صادرکننده نمونه‌ی ملی در صنعت ماکارونی در ایران بوده است. انواع ماکارونی رشته‌ای فرمی و انواع لازانیا، انواع رشته آش، پودر کیک( با طعم‌های مختلف)، ماکارونی فرمی جامبو و اسپاگتی سبزیجات و سس پاستا توسط برند زرماکارون تولید شده و در اختیار مصرف‌کنندگان قرار گرفته است.",
    category: "خوار و بار",
    price: 7500,
    quantity: 75,
  },
  {
    id: "14",
    title: "رب گوجه فرنگی چین چین مقدار 800 گرم",
    underTitle: "رب گوجه فرنگی چین چین مقدار 800 گرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/111692185.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/111692452.jpg?x-oss-process=image/resize,h_1600/quality,q_80",
    image3:
      "https://dkstatics-public.digikala.com/digikala-products/111692454.jpg?x-oss-process=image/resize,h_1600/quality,q_80",
    brand: "چین چین",
    description:
      "استفاده از رب گوجه‌فرنگی در انواع غذاها باعث افزایش رنگ و عطر دلپذیری می‌شود. ماکارونی، قیمه، املت و انواع غذاهای حاضری رب یک عضو جدانشدنی محسوب می‌شود. رب گوجه‌فرنگی حاوی آنتی‌اکسیدان است که درباره‌ی خواص آن بسیار شنیده‌ایم. آنتی‌اکسیدان‌ها با رادیکال‌های آزاد مبارزه می‌کنند و خاصیت ضد سرطانی دارند... ویتامین‌های موجود در رب گوجه شامل ویتامین A، C و مقداری ویتامین B است که برای جلوگیری از بروز سرطان مفید است و می‌تواند به افرادی که دچار فقر آهن هستند نیز کمک کند. رنگ قرمز در گوجه‌فرنگی است که می‌‌تواند با رادیکال‌های موجود در بدن که موجب بروز سرطان و بیماری‌های قلبی و پیری زودرس می‌شود مبارزه کند. ویتامین C گوجه‌فرنگی نیز می‌تواند به تقویت سیستم ایمنی کمک کند اما استفاده از این چاشنی باید به‌درستی صورت گیرد و به‌اندازه استفاده شود.",
    category: "خوار و بار",
    price: 24900,
    quantity: 75,
  },
  {
    id: "15",
    title: "کوکتل هلندی 55 درصد گوشت مرغ آندره - 1 کیلوگرم",
    underTitle: "کوکتل هلندی 55 درصد گوشت مرغ آندره - 1 کیلوگرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/d6ce088e9f1b24183e9ebdd8027935b5a6ed0c22_1608620502.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/d43742801a95a91d3d23c758c488ac8d71285cab_1609668060.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    image3:
      "https://dkstatics-public.digikala.com/digikala-products/05c832a2f60b777d592f050fca609946f435df60_1608620505.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    brand: "آندره",
    category: "پروتئینی",
    price: 41400,
    quantity: 75,
  },
  {
    id: "16",
    title: "کراکف پنیر 60 درصد گوشت قرمز آندره - 300 گرم",
    underTitle: "کراکف پنیر 60 درصد گوشت قرمز آندره - 300 گرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/ca274f7f74428ae57e218b5ca17c4b5944876f2e_1597553517.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/cbceede7b0624d1ad440990608c8b72b43516e24_1597553518.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    image3:
      "https://dkstatics-public.digikala.com/digikala-products/21df4f004daeed5d2341c328a5e26fc05401ed40_1597553519.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    brand: "آندره",
    description: "",
    category: "پروتئینی",
    price: 31900,
    quantity: 75,
  },
  {
    id: "17",
    title: "میگو سایز 70-61 بیستون وزن 500 گرم",
    underTitle: "میگو سایز 70-61 بیستون وزن 500 گرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/113929710.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/113929715.jpg?x-oss-process=image/resize,h_1600/quality,q_80",
    brand: "بیستون",
    description:
      "میگو حاوی زینک بوده و کمبود روی نیز یک عامل موثر در ریزش مو محسوب می‌شود که با خوردن میگو این مشکل بر طرف می‌شود. میگو سایز 70-61 بیستون پاک شده و آماده برای طبخ انواع غذاهای ایرانی و خارجی است. میگو غذایی کاملا مغذی بوده که دارای مقدار زیادی ید است. افرادی که دچار مشکل تیروئیدی هستند برای کنترل عملکرد تیروئید و سلامت مغز مصرف میگو در هفته به صورت مستمر توصیه می‌شود. مردان و زنان که دچار ریزش مو هستند خوردن میگو توصیه می‌شود. خوردن میگو سبب افزایش قدرت استخوانی و بازسازی آن می شوند، خواص میگو اولین چیزی نیست که به ذهن می آید. مردم در ابتدا به موادغذایی لبنی فکر می کنند اما این واقعا می تواند اشتباه باشد. میگو تمام مواد مغذی ضروری برای ساخت استخوان، مانند کلسیم، منیزیم، روی، فسفر و ویتامین D را داراست و اجازه نمی دهد استخوان و رشد بافت استخوانی از بین برود.",
    category: "پروتئینی",
    price: 177000,
    quantity: 75,
  },
  {
    id: "18",
    title: "تخم مرغ تلاونگ بسته 9 عددی",
    underTitle: "تخم مرغ تلاونگ بسته 9 عددی",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/119805593.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/119805597.jpg?x-oss-process=image/resize,h_1600/quality,q_80/",
    image3:
      "https://dkstatics-public.digikala.com/digikala-products/119805602.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    brand: "تلاونگ",
    description:
      "محصولات صنایع غذایی تلاونگ همگی دارای شماره‌ی مجوز بهداشت از سازمان غذا و دارو و کاملاً تاییدشده هستند. بهتر است قبل از مصرف تخم مرغ پوسته‌ی آن را به خوبی بشویید سپس استفاده کنید تا آلودگی آن به مواد غذایی دیگر سرایت نکند. تخم مرغ‌های برند تلاونگ پس از تولید با کمک دستگاه‌های مکانیزه بسته بندی می‌شوند. روند بسته بندی از تفکیک تخم مرغ‌ها براساس تمیزی پوسته، کیفیت پوسته، کیفیت زرده و داشتن وزن استاندارد شروع شده و پس از درج تاریخ مصرف و شناسنامه‌دار شدن به بازار عرضه می‌شوند. بسته‌ی تخم مرغ برند «تلاونگ» حاوی 9 عدد تخم مرغ خام است که بسته بندی آن 540 گرم وزن و ابعادی معادل 15.5 × 15.5 × 9 سانتی‌متر دارد.",
    category: "پروتئینی",
    price: 26800,
    quantity: 75,
  },
  {
    id: "19",
    title: "تخم مرغ تلاونگ بسته 15 عددی",
    underTitle: "تخم مرغ تلاونگ بسته 15 عددی",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/119805574.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/119805576.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    image3:
      "https://dkstatics-public.digikala.com/digikala-products/119805578.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    brand: "تلاونگ",
    description:
      "محصولات صنایع غذایی تلاونگ همگی دارای شماره‌ی مجوز بهداشت از سازمان غذا و دارو بوده و کاملاً تاییدشده هستند. بهتر است قبل از مصرف تخم مرغ پوسته‌ی آن را به خوبی بشویید سپس استفاده کنید تا آلودگی آن به مواد غذایی دیگر سرایت نکند. تخم مرغ‌های برند تلاونگ پس از تولید با کمک دستگاه‌های مکانیزه بسته‌بندی می‌شوند. روند بسته‌بندی از تفکیک تخم مرغ‌ها براساس تمیزی پوسته، کیفیت پوسته، کیفیت زرده و داشتن وزن استاندارد شروع شده و پس از درج تاریخ مصرف و شناسنامه‌دار شدن به بازار عرضه می‌شوند. تخم مرغ 15 عددی برند «تلاونگ» بسته‌ای به ابعاد 24 × 14 × 8.5 سانتی‌متر دارد و وزن آن معادل 717 گرم است.",
    category: "پروتئینی",
    price: 49900,
    quantity: 75,
  },
  {
    id: "20",
    title: "کوکتل پارمسان سولیکو مقدار 1000 گرم",
    underTitle: "کوکتل پارمسان سولیکو مقدار 1000 گرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/4098593.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/4098664.jpg?x-oss-process=image/resize,h_1600/quality,q_80",
    image3:
      "https://dkstatics-public.digikala.com/digikala-products/4098666.jpg?x-oss-process=image/resize,h_1600/quality,q_80",
    brand: "سولیکو",
    category: "پروتئینی",
    price: 115000,
    quantity: 75,
  },
  {
    id: "21",
    title: "بیکن ایرلندی 97 درصد سولیکو - 250 گرم",
    underTitle: "بیکن ایرلندی 97 درصد سولیکو - 250 گرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/f163b7be4d8e91a6967ffaed1c14eab434576321_1594094395.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/9605d605f4971f5d5f5ab04cd2d5c266a234bf4f_1594094399.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    image3:
      "https://dkstatics-public.digikala.com/digikala-products/d250b00b2857ff47896f252eda947914d03e61ca_1617693120.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    brand: "سولیکو",
    category: "پروتئینی",
    price: 93900,
    quantity: 75,
  },
  {
    id: "22",
    title: "کالباس مارتادلا سولیکو مقدار 500 گرم",
    underTitle: "کالباس مارتادلا سولیکو مقدار 500 گرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/4098551.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/4098701.jpg?x-oss-process=image/resize,h_1600/quality,q_80",
    image3:
      "https://dkstatics-public.digikala.com/digikala-products/b250b2274ebf08d9b4b14f9cb807c5504e29d5bd_1617695413.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    brand: "سولیکو",
    description:
      "برخی افراد طعم کالباس را بسیار دوست دارند اما از مقادیر زیاد گوشت در این خوراکی استقبال زیادی نمی‌کنند. اگر از جمله افرادی هستید که به کالباس‌هایی با مقدار گوشت زیاد علاقه ‌ندارند می‌توانید از محصول فوق استفاده کنید. این کالباس دارای 40 درصد گوشت قرمز است. کم بودن میزان گوشت قرمز در این محصول تاثیری روی طعم آن نداشته و این کالباس همچنان بسیار لذیذ و خوشمزه است. این محصول را شرکت سولیکو تولید می‌کند. مقدار این کالباس مارتادلا 500 گرم بوده و می‌توان با آن چندین ساندویچ کالباس درست کرد. این محصول دارای انرژی بالایی بوده و میزان چربی آن در 100 گرم 20.12 گرم است. با در اختیار داشتن این کالباس می‌توانید خودتان ساندویچ‌های خانگی تهیه کرده و میل کنید. این کالباس مارتادلا دارای استاندارد ملی ایران است.",
    category: "پروتئینی",
    price: 30200,
    quantity: 75,
  },
  {
    id: "23",
    title: "کالباس مارتادلا 40 درصد گوشت قرمز شام شام - 500 گرم",
    underTitle: "کالباس مارتادلا 40 درصد گوشت قرمز شام شام - 500 گرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/ca657d4bbb10475820778413e3fb1ca15b125be5_1618218103.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/b558e8eb79338444a571986ca7fc7bac6ce3ec1a_1618218105.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    brand: "شام شام",
    category: "پروتئینی",
    price: 34300,
    quantity: 75,
  },
  {
    id: "24",
    title: "پنیر پنج ستاره آمل کلاسیک - 400گرم",
    underTitle: "پنیر پنج ستاره آمل کلاسیک - 400گرم",
    image1:
      "https://dkstatics-public.digikala.com/digikala-products/ded2a5209d7fbf895e76f49fa0762c7787b57205_1623733797.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
    image2:
      "https://dkstatics-public.digikala.com/digikala-products/e214ee3d78c1c985a9830e69f2ac0e2653a20e29_1623221743.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    image3:
      "https://dkstatics-public.digikala.com/digikala-products/893d3841dcbe17a4bc5d2f08eafd9b60ec575e36_1623221750.jpg?x-oss-process=image/resize,h_1600/quality,q_80/watermark,image_ZGstdy8xLnBuZw==,t_90,g_nw,x_15,y_15",
    brand: "کاله",
    category: "لبنیات",
    description:
      "پروتئین منبع عالی از انرژی برای بدن است؛ بنابراین اگر دوست دارید به‌جای خوردن کربوهیدرات منبع دیگری جایگزین تأمین‌کننده انرژی خود کنید، پنیر را به سالاد و وعده‌های غذایی خود اضافه نمایید. بر اساس مزه پنیرها می‌توانید انتخاب‌های متفاوتی و سالم داشته باشید. یکی از خواص پنیر این است که غنی از کلسیم، پتاسیم، فسفر، آهن و پروتئین است. برخی از پنیرهای دارای ویتامین و انواع باکتری‌های مفید برای هضم غذا نیز می‌باشند. پنیر مزایای سلامتی فراوان و اثبات‌شده‌ای در خود دارد. شما با خوردن پنیر استخوان‌های سالم، چربی مفید برای بدن، قلب سالم‌تر، منبع مناسب برای پروتئین، پیشگیری از بروز سرطان، کربوهیدرات کافی، دریافت کلسیم برای داشتن استخوان‌های و دندان‌های سالم‌تر به همراه کاهش سطح استرس خواهید داشت. علاوه بر این خوردن پنیر، برخلاف آنچه مردم تصور می‌کنند به عملکرد مغز و سلامتی روده نیز کمک می‌کند. چربی‌های سالم و مفید برای بدن موجب عملکرد بهتر قلب نیز می‌شود. یکی از خواص پنیر این است که به‌واسطه داشتن مقادیر زیادی چربی مفید موجب بهبود عملکرد قلب می‌شود. پنیر پنج ستاره آمل کلاسیک ( 400 گرم ) از کیفیت بالایی برخوردار است و به شما پیشنهاد می‌شود.",
    price: 27900,
    quantity: 200,
  },
];

export default mockProducts;
