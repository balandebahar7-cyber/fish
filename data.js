const CATS=[
{id:'rod',e:'🎣',fa:'چوب ماهیگیری',en:'Fishing Rods',c:'#0b6fa4'},
{id:'reel',e:'⚙️',fa:'چرخ ماهیگیری',en:'Fishing Reels',c:'#0a2342'},
{id:'line',e:'🪝',fa:'نخ و قلاب',en:'Line & Hooks',c:'#14a3ae'},
{id:'bait',e:'🐟',fa:'طعمه و لوازم صید',en:'Baits & Lures',c:'#2a7f9e'},
{id:'bag',e:'🧰',fa:'کیف و جعبه تجهیزات',en:'Bags & Boxes',c:'#173f6b'},
{id:'wear',e:'🥾',fa:'لباس و کفش ماهیگیری',en:'Clothing & Shoes',c:'#0f8b9b'},
{id:'camp',e:'⛺',fa:'تجهیزات کمپینگ و ماهیگیری',en:'Camping Gear',c:'#8a7a55'},
{id:'acc',e:'🔦',fa:'لوازم جانبی',en:'Accessories',c:'#3b6e8f'}];
// [id,cat,fa,en,price(toman),old,stock,descFa,descEn,spec1,spec2]
const R=[
['p1','rod','چوب کربنی اقیانوس ۲.۴ متر','Ocean Carbon Rod 2.4m',4850000,5600000,12,'چوب سبک و حساس کربنی مناسب اسپین دریایی و رودخانه.','Light, sensitive carbon rod for sea and river spinning.','کربن ۲۴ تن|۲.۴ متر|Carbon 24T|2.4 m'],
['p2','rod','چوب تلسکوپی ریور','River Telescopic Rod 3.0m',2190000,0,25,'چوب تلسکوپی جمع‌شونده، ایده‌آل سفر و کمپینگ.','Collapsible telescopic rod, ideal for travel.','فایبرگلاس|۳ متر|Fiberglass|3 m'],
['p3','rod','چوب سورف کستینگ','Surf Casting Rod 4.2m',6900000,0,6,'چوب بلند پرتاب دور برای سواحل.','Long-cast rod for beach fishing.','کامپوزیت|۴.۲ متر|Composite|4.2 m'],
['p4','reel','چرخ اسپین ۴۰۰۰','Spin Reel 4000',3750000,4200000,15,'بدنه فلزی، ۸ بلبرینگ و ترمز نرم.','Metal body, 8 bearings, smooth drag.','۸ بلبرینگ|نسبت ۵.۲:۱|8 bearings|5.2:1 ratio'],
['p5','reel','چرخ بیت‌کستینگ پرو','Baitcasting Reel Pro',5400000,0,8,'مناسب صید ماهیان بزرگ با کنترل دقیق.','Precise control for big fish.','۱۰ بلبرینگ|نسبت ۷.۲:۱|10 bearings|7.2:1 ratio'],
['p6','line','نخ مونوفیلامنت ۰.۳۵','Monofilament Line 0.35mm',420000,0,60,'نخ مقاوم و شفاف، ۳۰۰ متری.','Strong clear line, 300m spool.','۳۰۰ متر|مقاومت ۱۲ کیلو|300 m|12 kg test'],
['p7','line','ست قلاب تیتانیومی','Titanium Hook Set',280000,350000,80,'ست ۵۰ عددی قلاب تیز و ضدزنگ.','50-piece sharp anti-rust hook set.','۵۰ عدد|تیتانیوم|50 pcs|Titanium'],
['p8','bait','ست کوییچ و جیگ','Lure & Jig Set',650000,0,40,'مجموعه ۲۰ عددی طعمه مصنوعی رنگی.','20-piece colorful artificial lure set.','۲۰ عدد|متنوع|20 pcs|Assorted'],
['p9','bait','طعمه سیلیکونی ماهی','Silicone Fish Bait',190000,0,0,'طعمه نرم با حرکت طبیعی در آب.','Soft bait with natural swimming action.','۱۰ عدد|۸ سانتی|10 pcs|8 cm'],
['p10','bag','جعبه تجهیزات چندلایه','Multi-Tray Tackle Box',890000,0,22,'جعبه سه‌طبقه ضدآب.','Waterproof three-tray tackle box.','۳ طبقه|پلی‌پروپیلن|3 trays|Polypropylene'],
['p11','bag','کوله‌پشتی ماهیگیری','Fishing Backpack 35L',1850000,2200000,10,'کوله ضدآب با جای چوب.','Waterproof pack with rod holders.','۳۵ لیتر|ضدآب|35 L|Waterproof'],
['p12','wear','جلیقه ماهیگیری','Fishing Vest',1450000,0,18,'جلیقه سبک با جیب‌های متعدد.','Light vest with many pockets.','پنبه-نایلون|فری‌سایز|Cotton-nylon|Free size'],
['p13','wear','چکمه ضدآب','Waterproof Boots',2650000,0,9,'چکمه ضدآب و ضدلغزش.','Waterproof non-slip boots.','سایز ۴۰ تا ۴۵|PVC|Sizes 40-45|PVC'],
['p14','camp','چادر دو نفره ساحلی','Beach Tent 2P',3900000,4500000,7,'چادر سبک و ضدباد.','Light windproof tent.','۲ نفره|۲ کیلو|2 persons|2 kg'],
['p15','camp','صندلی تاشو ماهیگیری','Folding Fishing Chair',1250000,0,20,'صندلی راحت و تاشو.','Comfortable folding chair.','تا ۱۲۰ کیلو|آلومینیوم|120 kg max|Aluminum'],
['p16','acc','ترازوی دیجیتال ماهی','Digital Fish Scale',390000,0,35,'ترازوی قابل‌حمل تا ۵۰ کیلو.','Portable scale up to 50 kg.','۵۰ کیلو|باتری AAA|50 kg|AAA battery'],
['p17','acc','چراغ پیشانی ضدآب','Waterproof Headlamp',520000,640000,28,'چراغ LED پرنور و ضدآب.','Bright waterproof LED headlamp.','۳۰۰ لومن|شارژی|300 lumen|Rechargeable'],
['p18','acc','انبر و قیچی صید','Pliers & Cutter',310000,0,44,'انبر استیل ضدزنگ.','Rust-proof steel pliers.','استیل|۱۸ سانتی|Steel|18 cm']];
const P=R.map(r=>({id:r[0],cat:r[1],fa:r[2],en:r[3],price:r[4],old:r[5],stock:r[6],d:{fa:r[7],en:r[8]},sp:r[9].split('|')}));
